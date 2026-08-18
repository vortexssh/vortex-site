# Vortex Site — public landing SPA. No API, no agent binaries.

FROM node:22-alpine AS build
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY index.html ./
COPY public ./public
COPY tsconfig.json tsconfig.app.json tsconfig.node.json ./
COPY vite.config.ts ./
COPY src ./src

ARG VITE_CONSOLE_URL=https://my.vortex.timant32.ru
ENV VITE_CONSOLE_URL=$VITE_CONSOLE_URL

RUN npm run build

FROM nginx:1.27-alpine AS runtime
COPY deploy/nginx-spa.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -qO- http://127.0.0.1/healthz || exit 1
