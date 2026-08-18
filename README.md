# Vortex Site

Публичный лендинг **VortexSSH** для домена [`https://vortex.timant32.ru`](https://vortex.timant32.ru).

Кабинет (личный кабинет) живёт отдельно: [`https://my.vortex.timant32.ru`](https://my.vortex.timant32.ru).

Это не админка и не API. Одна страница: зачем продукт, как устроен туннель, почему секреты не едут в облако, как начать.

**Агентам (Cursor и др.):** начните с [`AGENTS.md`](AGENTS.md), затем [`docs/ECOSYSTEM.md`](docs/ECOSYSTEM.md).

## Локально

```bash
cp .env.example .env
npm install
npm run dev
```

Vite: `http://127.0.0.1:5173`. Кнопки «кабинет» ведут на `VITE_CONSOLE_URL` (по умолчанию `https://my.vortex.timant32.ru`).

Язык: RU/EN, переключатель в шапке; первый заход — по `navigator.language`.

## Стек

- Vite 8 + React 19 + TypeScript
- Tailwind CSS 4
- Docker + nginx (контейнер `:18081` на loopback)

## Прод

См. [DEPLOY.md](DEPLOY.md). Кратко: контейнер на `127.0.0.1:18081`, host nginx на apex. Бинарники агента по-прежнему с `https://vortex.timant32.ru/agent/` (host static, не этот образ).

## Связанные репозитории

| Репо | Роль |
|---|---|
| `vortex-core` | API + WebSocket tunnel |
| `vortex-web` | кабинет (переедет на `my.`) |
| `vortex-agent` | хост-демон |
| `vortex-site` | этот лендинг |
