# Repos, VPS, tokens

## GitHub org `vortexssh`

| Repo | Path on disk (dev) | VPS | Notes |
|---|---|---|---|
| `vortex-core` | `~/VortexSSH/VortexCore` | `/opt/vortex-core` | API + tunnel |
| `vortex-web` | `~/VortexSSH/VortexWeb` | `/opt/vortex-web` | console, docker `:18080` |
| `vortex-site` | `~/VortexSSH/VortexSite` | `/opt/vortex-site` | landing, docker `:18081` |
| agent | `~/VortexSSH/VortexAgent` | binaries in `/opt/vortex-web/agent-bins` | not always a GH repo |
| TUI | `~/VortexSSH/VortexSSH-TUI` | — | desktop/TUI client |
| telegram | `~/VortexSSH/VortexTG-bot` | — | bot |

Deploy workflows live in each repo: `.github/workflows/deploy.yml`, branch `master`.

## Prod SSH

Host alias: `timant32`. Typical checks:

```bash
ssh timant32 'docker ps --format "{{.Names}} {{.Status}} {{.Ports}}"'
curl -sI https://vortex.timant32.ru/
curl -sI https://api.vortex.timant32.ru/api/v1/health
```

Core CORS must include the console origin (`https://vortex.timant32.ru` now, plus `https://my.vortex.timant32.ru` after cutover).

## Env this repo

| Variable | Meaning |
|---|---|
| `VITE_CONSOLE_URL` | cabinet origin, no trailing slash |

Baked at Docker build time (Vite). Change → rebuild image.

## Token prefixes (never commit live values)

| Prefix | Kind |
|---|---|
| `vxk_` | user API key |
| `vxa_` | agent secret (plaintext once) |
| `vxp_` | plugin daemon token |
