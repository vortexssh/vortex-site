# VortexSSH — ecosystem (for agents)

Источник правды по продукту, когда этот git-репозиторий открыт **без** Core/Web в workspace.  
Код фич — в соседних репо; здесь только контекст.

## Зачем продукт

Флот машин за NAT/CGNAT: нет белого IP, нельзя открывать 22, ключи не должны лежать в облаке.  
Vortex держит **исходящий** туннель агента на Core и отдаёт WebSSH / TCP-proxy / телеметрию / задачи клиентам. Облако знает *что* за хост (метаданные), не *как* на него залогиниться.

## Слои

```
[Browser / TUI / GUI]  --HTTPS/WSS, JWT or vxk_-->  [Vortex Core]
                                                         ^
                                                         | WSS outbound
                                                         |
                                              [vortex-agent on host]
                                              loopback SSH / PTY / tasks
```

| Слой | Репо | Стек | Роль |
|---|---|---|---|
| Core | `github.com/vortexssh/vortex-core` | Python 3.11+, FastAPI, SQLAlchemy 2, asyncpg, Redis, Alembic, JWT+TOTP | REST + WS tunnel + billing + plugins gateway |
| Web | `github.com/vortexssh/vortex-web` | Vite, React 19, TS, Tailwind 4, Zustand, React Query, xterm, recharts | Кабинет |
| Site | `github.com/vortexssh/vortex-site` (**этот**) | Vite, React 19, TS, Tailwind 4 | Лендинг apex |
| Agent | локально `VortexAgent` | Go, systemd | Хост-демон |
| TUI | `VortexSSH-TUI` | — | Терминальный клиент, линк через `vxk_` |
| Telegram | `vortex-telegram-bot` / `VortexTG-bot` | — | Напоминания и inbox |
| Plugins | ZIP + out-of-process daemon | manifest `vortex-plugin.json` | UI slots + RPC через Core |

## Прод-домены (цель)

| Host | Назначение |
|---|---|
| `https://vortex.timant32.ru` | лендинг (этот репо), плюс `/agent/` бинарники |
| `https://my.vortex.timant32.ru` | кабинет (`vortex-web`, docker `:18080`) |
| `https://api.vortex.timant32.ru` | Core REST `/api/v1` + WS `/ws/*` |
| `https://vortex.timant32.ru/u/{slug}` | публичный статус — **в Web**, после cutover будет на `my.` |

**Сейчас (до cutover):** кабинет ещё на apex `vortex.timant32.ru`. Не переключать nginx лендинга на apex, пока Web не уехал на `my.`.

VPS: SSH `timant32`. Пути `/opt/vortex-core`, `/opt/vortex-web`, `/opt/vortex-site`.  
CI: GitHub Actions `appleboy/ssh-action`, push в `master`, `git reset --hard origin/master`, `docker compose up -d --build`. Имена контейнеров конфликтуют, если CI и ручной деплой пересекаются — `docker rm` конфликтующего имени.

## Core — поведение

Слои: Routers → Services → Repositories → Models. Весь I/O `async`. Pydantic v2. FastAPI `Depends`.

### Postgres (не секреты SSH)

- `users`: email, password_hash, totp_secret, `is_2fa_enabled`, `require_2fa` (default true), `public_slug`, `preferred_currency`, telegram link
- `api_keys`: префикс + bcrypt hash, plaintext `vxk_…` один раз
- `hosts`: name, ip, port, username, notes, tags, `is_proxy_enabled`, `is_hidden`, `country_code`, billing_*, `billing_payer_id`
- `tags` / `host_tags`
- `agents`: 1:1 с host, `secret_hash`, `is_online`, version
- `tasks` / `task_logs`
- `billing_payers`
- plugins installs / bindings (см. Core `PLUGIN_SPEC.md`)
- notifications + user notification settings

### Redis

- `telemetry:{host_id}` TTL
- `agent:presence:{agent_id}` TTL (default 90s)
- plugin daemon state
- pub/sub `agent:route:{agent_id}` для multi-worker

### Auth

- Login JWT; TOTP Google Authenticator
- Email verification
- Header `Authorization: Bearer <jwt|vxk_…>` или `X-API-Key: vxk_…`
- Agent WS: query `agent_id` + `secret` (`vxa_…`)
- Plugin daemon: `vxp_…`

### REST `/api/v1` (группы)

Auth, users/me, notification-settings, telegram link, billing summary/calendar/payers, `POST /hosts/{id}/billing/advance`, notifications inbox, public `GET /public/u/{slug}`, API keys, hosts CRUD + proxy/hidden, telemetry (2FA), tags, agents create/rotate/revoke (2FA), tasks + run/logs (2FA), plugins + ui-bundle + RPC + daemon state.

Health: `GET /api/v1/health`. OpenAPI: `/docs`.

### WebSocket

| Path | Кто | Зачем |
|---|---|---|
| `/ws/agent?agent_id=&secret=&version=` | agent | постоянный канал |
| `/ws/plugin/{install_id}?token=` | plugin daemon | presence + RPC |
| `/ws/proxy/{host_id}?token=` | user 2FA + proxy on | сырой TCP/SSH |
| `/ws/pty/{host_id}?token=&cols=&rows=` | user 2FA | Web-терминал |

Кадры агента: `telemetry`, `heartbeat`, `proxy_*`, `pty_*` (+ `pty_resize`), `task_run` / `task_result`. Бинарь в JSON как base64.

Reconnect: один `agent_id` — одно живое соединение. Новый сокет заменяет старый (code 4000). `disconnect_agent` должен снимать **только свой** websocket, иначе stale handler убивает новый (баг чинили в Core `ab627ae`). После `accept` слать `{"type":"connected"}` до гонок replace.

## Web — кабинет

Маршруты (после логина, часть за `Require2FA`): Dashboard, Hosts, Terminal, Tasks, Billing, Settings (профиль, 2FA, API keys, notifications, payers, plugins), plugin pages `/plugins/{id}/…`, public `/u/{slug}`.

Темы: matrix (default), amber, arctic, crimson, slate, daybreak.

Биллинг UI: календарь месяца. `is_next=true` — текущий next due; `false` — paid в прошлом или projected в будущем. «Left to pay» считает **только unpaid** (`is_next` + projected после next). Не `date >= today` — иначе Renew в день due не уменьшает остаток (фикс Web `dc587ee`).

Enroll агента: Hosts → Install agent → one-liner. Бинарники **не** в образе Web: `VITE_AGENT_BINARY_BASE_URL` (прод: `https://vortex.timant32.ru/agent`).

## Agent

Env: `VORTEX_CORE_URL`, `VORTEX_AGENT_ID`, `VORTEX_SECRET_TOKEN`.  
Телеметрия ~5s, heartbeat ~30s. SSH для proxy только loopback `127.0.0.1:22`. Cross-compile `make cross-linux` → amd64/arm64.

## Plugins

Out-of-process daemons. Core — gateway (auth, Redis state, RPC, UI bundle). Web рендерит declarative views.  
Permissions: `host.bind`, `state.write`, `rpc`, `nav`, `pages`, `hosts.columns|panels|actions|editor`, `settings`.  
Disabled plugins не попадают в `ui-bundle`. Пример: `examples/fake-metrics-plugin/` в Core; отдельно HA power plugin.

## Billing (продукт)

На хосте: cycle monthly/quarterly/semiannual/annual/custom, amount, currency, renewal_at, auto-renew, payer.  
Календарь строится шагами вперёд/назад по циклу (`add_billing_period` / `subtract_billing_period`).  
FX: Frankfurter. Напоминания: email, Telegram, inbox. Auto-advance если due и агент online.

## Безопасность — формулировки для сайта

Можно: метаданные в облаке; ключи не уходят; агент исходящий; 2FA на остром контуре; секреты bcrypt; revoke.  
Нельзя: «мы храним ваши SSH keys encrypted»; «логин на сервер через наш пароль»; «без двух факторов сразу в root».

## Известные грабли (не повторять в копирайте как «баги продукта»)

- Быстрый reconnect агента + stale `disconnect_agent` без проверки websocket.
- «Left to pay» после Renew, если считать любые даты ≥ today.
- GH Actions `docker compose` rename conflict (`vortex-*-1`), если параллельно ручной деплой.
- GeoIP: `hosts.country_code` с IP карточки и с IP агента при коннекте.

## Этот репо — карта файлов

```
src/copy.ts              RU/EN тексты
src/locale.tsx           переключатель языка
src/sections/            Hero, Product, Features, Trust
src/components/          Header, Footer, Logo
deploy/                  nginx SPA + apex cutover
docker-compose.yml       127.0.0.1:18081
```
