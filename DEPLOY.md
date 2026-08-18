# Vortex Site — деплой

Лендинг **не** должен подменять кабинет, пока `vortex-web` ещё на `vortex.timant32.ru`.

Целевая схема:

| Хост | Что |
|---|---|
| `vortex.timant32.ru` | этот SPA (`:18081`) + `/agent/` статика |
| `my.vortex.timant32.ru` | кабинет `vortex-web` (`:18080`) |
| `api.vortex.timant32.ru` | Core |

## Первый выкат контейнера (без смены домена)

На VPS, рядом с текущим кабинетом:

```bash
mkdir -p /opt/vortex-site
git clone https://github.com/vortexssh/vortex-site.git /opt/vortex-site
cd /opt/vortex-site
cp .env.production.example .env
docker compose up -d --build
curl -sI http://127.0.0.1:18081/healthz
```

Кабинет на `:18080` не трогается. Лендинг доступен только с сервера, пока nginx не переключён.

## Cutover на apex

1. DNS + TLS для `my.vortex.timant32.ru`.
2. В Core `.env`: добавить `https://my.vortex.timant32.ru` в `CORS_ORIGINS`.
3. Nginx кабинета: `server_name my.vortex.timant32.ru` → `proxy_pass 127.0.0.1:18080`.
4. Apex: взять `deploy/nginx-vortex.timant32.ru.conf` (лендинг на `:18081`, **оставить** `location ^~ /agent/`).
5. `nginx -t && systemctl reload nginx`.
6. Проверить:
   - `https://vortex.timant32.ru/` — лендинг
   - `https://my.vortex.timant32.ru/login` — кабинет
   - `https://vortex.timant32.ru/agent/vortex-agent-linux-amd64` — бинарник, не HTML

GitHub Actions деплоит `/opt/vortex-site` так же, как Core/Web (secrets `SERVER_HOST`, `SERVER_USER`, `SERVER_SSH_KEY`).
