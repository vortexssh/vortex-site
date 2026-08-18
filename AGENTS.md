# AGENTS.md — Vortex Site

Этот репозиторий — **публичный лендинг** VortexSSH (`vortex.timant32.ru`).  
Это **не** API, **не** кабинет, **не** агент. Не добавляй сюда логин, JWT, WebSocket-туннель, формы SSH-паролей.

Полная карта экосистемы: [`docs/ECOSYSTEM.md`](docs/ECOSYSTEM.md).  
Голос и факты, которые можно писать на сайте: [`docs/COPY.md`](docs/COPY.md).  
Домены, VPS, cutover: [`DEPLOY.md`](DEPLOY.md) и [`docs/REPOS.md`](docs/REPOS.md).

Новый агент: сначала прочитай этот файл и `docs/ECOSYSTEM.md`, потом правь код.

## Что это за продукт

**VortexSSH** — гибридная экосистема управления серверами:

1. **Vortex Core** (`vortex-core`) — FastAPI. Облачная записная книжка метаданных + WebSocket Tunnel Router (NAT bypass, PTY/WebSSH).
2. **Vortex Agent** (`vortex-agent`) — Go. Один бинарник на хосте. Только исходящий WSS. Порты наружу не слушает.
3. **Vortex Web** (`vortex-web`) — React-кабинет. Сейчас на `vortex.timant32.ru`, цель — `my.vortex.timant32.ru`.
4. **Клиенты** — TUI / GUI ходят в Core по JWT или `vxk_…` API key. SSH-секреты живут только там, не в облаке.
5. **Этот репо (`vortex-site`)** — маркетинговая страница на apex-домене.

## Жёсткие правила (не нарушать в копирайте и в коде)

1. **Zero-trust.** Core/Web **никогда** не принимают, не хранят и не просят пароли целевых серверов и приватные SSH-ключи. В БД: IP, порт, username, теги, биллинг, флаги. Не выдумывай «безопасное хранение ключей в облаке».
2. **2FA.** Телеметрия, WebSSH, proxy, tasks, create/rotate агента — только при `is_2fa_enabled`. Не обещай «мгновенный терминал без 2FA».
3. **Метрики не в Postgres.** CPU/RAM/net/uptime → Redis с TTL.
4. **Агент исходящий.** Нет inbound-портов агента. Туннель сам выходит на `wss://api.vortex.timant32.ru`.
5. **Секреты префиксов:** `vxk_` API key, `vxa_` agent secret (plaintext один раз), `vxp_` plugin daemon token. Не вставляй реальные токены в лендинг.

## Этот репозиторий — как работать

- Стек: Vite 8, React 19, TypeScript strict, Tailwind 4. Без React Router (одна страница).
- Копирайт RU+EN: `src/copy.ts`. UI: `src/sections/*`, `src/components/*`.
- Кабинет: `VITE_CONSOLE_URL` (default `https://my.vortex.timant32.ru`). Ссылки `/login` и `/register` только туда.
- Визуал как у кабинета: void `#0a0a0a`, neon `#39ff14`, Inter + JetBrains Mono. Не фиолетовый SaaS-градиент.
- Язык кода/коммитов: как в соседних репо (англ. коммиты, UI-копирайт двуязычный).
- Не коммить `.env`, секреты, `node_modules`, `dist`.
- Не деплоить на apex, пока кабинет не переехал на `my.` — сломается логин. Контейнер: `127.0.0.1:18081`.

## Когда пользователь просит «фичу продукта»

Если это не текст/верстка лендинга — фича живёт в другом репо:

| Запрос | Куда |
|---|---|
| API, WS, агент handshake, биллинг backend | `vortex-core` |
| Кабинет, календарь, Hosts, terminal | `vortex-web` |
| Бинарник агента, systemd | `vortex-agent` |
| Telegram-бот | `vortex-telegram-bot` |
| Текст на vortex.timant32.ru | **здесь** |
