export type Locale = 'ru' | 'en'

export const copy = {
  ru: {
    metaTitle: 'VortexSSH — флот серверов. Один туннель. Ноль ключей в облаке.',
    nav: {
      product: 'Продукт',
      security: 'Безопасность',
      features: 'Возможности',
      start: 'Старт',
    },
    ctaConsole: 'Открыть кабинет',
    ctaSignup: 'Создать аккаунт',
    langLabel: 'EN',
    hero: {
      kicker: 'Гибридная экосистема управления серверами',
      title: 'Флот за NAT. Терминал в браузере. Ключи — только у вас.',
      lead:
        'VortexSSH держит постоянный туннель к хостам, которые нельзя «просто пингануть». WebSSH, телеметрия, задачи и биллинг — в одном кабинете. Пароли и приватные SSH-ключи в облако не уходят. Никогда.',
      note: 'Кабинет → my.vortex.timant32.ru · API → api.vortex.timant32.ru',
    },
    terminal: {
      title: 'vortex-agent · mail.timant32.su',
      lines: [
        { tone: 'dim', text: '$ vortex-agent' },
        { tone: 'muted', text: 'connecting  wss://api.vortex.timant32.ru/ws/agent' },
        { tone: 'neon', text: 'connected   agent=online  version=3dc34a6' },
        { tone: 'fg', text: 'telemetry   cpu=4.2%  ram=31%  net↑ 1.2M  up=47d' },
        { tone: 'fg', text: 'pty_open    session=webssh  cols=120  rows=32' },
        { tone: 'dim', text: 'root@mail:~# █' },
      ],
    },
    fleet: {
      title: 'Живой флот',
      rows: [
        { name: 'mail.edge', loc: 'NL', cpu: 8, status: 'online' },
        { name: 'db-fsn', loc: 'DE', cpu: 41, status: 'online' },
        { name: 'gpu-lab', loc: 'FI', cpu: 12, status: 'online' },
        { name: 'backup-1', loc: 'RU', cpu: 3, status: 'online' },
      ],
    },
    problem: {
      kicker: 'Зачем это',
      title: 'SSH-клиент, табличка и «какой там был пароль» — это не инфраструктура.',
      lead:
        'Когда хостов больше десятка, боль не в командной строке. Боль в том, что машины за CGNAT, ключи размазаны по ноутбукам, продления VPS живут в почте, а терминал нужен из кафе — без белого IP и без дыр в файрволе.',
      cards: [
        {
          title: 'Не достучаться',
          body: 'Хост за NAT провайдера. Порт 22 снаружи не открыть — и не нужно. Агент сам выходит на Core по WSS.',
        },
        {
          title: 'Нельзя светить секреты',
          body: 'Облачная «записка» с root-паролями — это инцидент, который ещё не случился. Vortex хранит только метаданные: IP, порт, username, теги.',
        },
        {
          title: 'Не видно парк',
          body: 'CPU, RAM, аптайм — в Redis с TTL, не в Postgres навсегда. Статус онлайн обновляется с агента. Скрытые хосты не попадают на публичную страницу.',
        },
        {
          title: 'Продления теряются',
          body: 'Календарь renew, плательщики, валюты, напоминания в почту / Telegram / inbox. Кнопка Renew — когда уже оплатил у провайдера.',
        },
      ],
    },
    arch: {
      kicker: 'Как устроено',
      title: 'Три слоя. Ни один не просит ваш private key.',
      nodes: [
        {
          tag: '01',
          title: 'Агент',
          sub: 'Go · один бинарник',
          body: 'Стоит на хосте. Слушает только loopback для SSH. Наружу — исходящий WebSocket. Порты не открывает. PTY, прокси, телеметрия, cron-задачи.',
        },
        {
          tag: '02',
          title: 'Core',
          sub: 'FastAPI · PostgreSQL · Redis',
          body: 'Облачная записная книжка и транзитный туннель. JWT + TOTP. Секреты агентов — bcrypt. Метрики в Redis, не в БД. Плагины — отдельные демоны.',
        },
        {
          tag: '03',
          title: 'Клиенты',
          sub: 'Web · TUI · GUI',
          body: 'Кабинет в браузере, терминальный клиент, десктоп. API-ключи vxk_… для машин. Весь опасный контур — только после 2FA.',
        },
      ],
    },
    features: {
      kicker: 'Возможности',
      title: 'Не ещё один «SSH в браузере». Контрольная плоскость флота.',
      items: [
        {
          title: 'WebSSH через NAT',
          body: 'PTY в браузере: Core проксирует поток на агент. Хост может не иметь белого IP. Ресайз живой, сессия рвётся чисто.',
        },
        {
          title: 'TCP/SSH туннель',
          body: 'GUI и TUI ходят в хост через WebSocket proxy. Сырой трафик, без пароля на стороне Core. Включается per-host.',
        },
        {
          title: 'Телеметрия без склада',
          body: 'CPU, RAM, сеть, uptime пишутся в Redis с TTL. История метрик не раздувает Postgres. Дашборд — живой, не архив навсегда.',
        },
        {
          title: 'Жёсткий 2FA',
          body: 'Телеметрия, терминал, прокси, задачи, выпуск агента — только если TOTP включён. Это не галочка «потом». Это политика.',
        },
        {
          title: 'Биллинг хостов',
          body: 'Цикл, сумма, валюта, плательщик. Календарь месяца, «осталось оплатить», FX, напоминания. Renew сдвигает next due — paid-даты остаются на сетке.',
        },
        {
          title: 'Плагины-демоны',
          body: 'Расширения вне ядра: свой процесс, RPC, UI-слоты в сайдбаре, таблице хостов, настройках. Core — шлюз, не свалка кода.',
        },
        {
          title: 'Публичный статус',
          body: 'Страница /u/{slug} без логина, без IP, без ссылок в кабинет. Скрытые хосты не публикуются. Флаги стран — по GeoIP агента.',
        },
        {
          title: 'Задачи на агенте',
          body: 'Cron диспатчится на Core, исполняется на хосте. stdout/stderr в логах. Таймауты. Не «SSH из CI в слепую».',
        },
      ],
    },
    security: {
      kicker: 'Zero-trust',
      title: 'Облако знает, что у вас есть сервер. Не знает, как на него зайти.',
      points: [
        {
          title: 'Ни паролей, ни ключей',
          body: 'Схемы API отвергают password / private_key. В PostgreSQL — имя, адрес, порт, username, теги, биллинг. Точка.',
        },
        {
          title: 'Секреты агента один раз',
          body: 'vxa_… показывается при создании и rotate. Дальше — только bcrypt-хеш. Revoke убивает доступ без визита на хост-диск Core.',
        },
        {
          title: 'Исходящий канал',
          body: 'Агент не слушает интернет. Файрвол хоста можно закрыть. Туннель сам переживает NAT, CGNAT и смену домашнего IP.',
        },
        {
          title: '2FA на опасном контуре',
          body: 'Пока TOTP не подтверждён — нет WebSSH, нет прокси, нет телеметрии, нет run task. Политика по умолчанию, не «если вспомните».',
        },
      ],
      quote:
        'Если облачный сервис может открыть ваш SSH своим ключом — это не ваш сервер. Vortex на это не подписывается.',
    },
    start: {
      kicker: 'Старт',
      title: 'Четыре шага. Без белого IP и без выгрузки ключей.',
      steps: [
        {
          n: '01',
          title: 'Аккаунт и 2FA',
          body: 'Регистрация, письмо, TOTP. Без второго фактора кабинет не пустит к агентам — и это правильно.',
        },
        {
          n: '02',
          title: 'Карточка хоста',
          body: 'Имя, адрес, порт, username, теги. Это записная книжка, не vault. Секреты SSH сюда не кладутся.',
        },
        {
          n: '03',
          title: 'Агент одной строкой',
          body: 'Hosts → Install agent. One-liner ставит бинарник и systemd. Агент сам стучится на Core по WSS.',
        },
        {
          n: '04',
          title: 'Терминал откуда угодно',
          body: 'Online загорелся — открывайте WebSSH или туннель из TUI/GUI. Хост может быть дома, в ДЦ, за двойным NAT.',
        },
      ],
    },
    cta: {
      title: 'Хватит держать флот в голове.',
      body: 'Откройте кабинет, поставьте агент на первую машину за NAT — и зайдите в неё из браузера. Если после этого не захочется поставить на остальные, мы зря писали туннель.',
      primary: 'Войти в кабинет',
      secondary: 'Создать аккаунт',
    },
    footer: {
      product: 'Продукт',
      console: 'Кабинет',
      api: 'API',
      status: 'Идея',
      blurb:
        'VortexSSH — гибридная экосистема: локальные клиенты, хост-агенты и облачный Core. Метаданные в облаке. Секреты — у вас.',
      copy: 'VortexSSH',
    },
  },
  en: {
    metaTitle: 'VortexSSH — your fleet. One tunnel. Zero secrets in the cloud.',
    nav: {
      product: 'Product',
      security: 'Security',
      features: 'Features',
      start: 'Start',
    },
    ctaConsole: 'Open console',
    ctaSignup: 'Create account',
    langLabel: 'RU',
    hero: {
      kicker: 'Hybrid server fleet control plane',
      title: 'Reach every host behind NAT. Store none of the secrets.',
      lead:
        'VortexSSH keeps a persistent tunnel to machines you cannot simply ping. WebSSH, telemetry, tasks, and billing in one console. Passwords and private SSH keys never leave your boxes. Ever.',
      note: 'Console → my.vortex.timant32.ru · API → api.vortex.timant32.ru',
    },
    terminal: {
      title: 'vortex-agent · mail.timant32.su',
      lines: [
        { tone: 'dim', text: '$ vortex-agent' },
        { tone: 'muted', text: 'connecting  wss://api.vortex.timant32.ru/ws/agent' },
        { tone: 'neon', text: 'connected   agent=online  version=3dc34a6' },
        { tone: 'fg', text: 'telemetry   cpu=4.2%  ram=31%  net↑ 1.2M  up=47d' },
        { tone: 'fg', text: 'pty_open    session=webssh  cols=120  rows=32' },
        { tone: 'dim', text: 'root@mail:~# █' },
      ],
    },
    fleet: {
      title: 'Live fleet',
      rows: [
        { name: 'mail.edge', loc: 'NL', cpu: 8, status: 'online' },
        { name: 'db-fsn', loc: 'DE', cpu: 41, status: 'online' },
        { name: 'gpu-lab', loc: 'FI', cpu: 12, status: 'online' },
        { name: 'backup-1', loc: 'RU', cpu: 3, status: 'online' },
      ],
    },
    problem: {
      kicker: 'Why',
      title: 'An SSH client, a spreadsheet, and a password you half-remember is not infrastructure.',
      lead:
        'Past a dozen hosts the pain is not the shell. It is CGNAT, keys sprinkled across laptops, VPS renewals living in email, and needing a terminal from a café — with no public IP and no holes in the firewall.',
      cards: [
        {
          title: 'Unreachable',
          body: 'The box sits behind carrier NAT. You should not punch 22 open. The agent dials Core outbound over WSS instead.',
        },
        {
          title: 'No secret dump',
          body: 'A cloud notepad full of root passwords is a breach that has not happened yet. Vortex stores metadata only: IP, port, username, tags.',
        },
        {
          title: 'No fleet visibility',
          body: 'CPU, RAM, uptime live in Redis with TTL — not forever in Postgres. Online status comes from the agent. Hidden hosts stay off the public page.',
        },
        {
          title: 'Renewals slip',
          body: 'Billing calendar, payers, FX, reminders via email / Telegram / inbox. Renew advances next due after you pay the provider.',
        },
      ],
    },
    arch: {
      kicker: 'Architecture',
      title: 'Three layers. None of them ask for your private key.',
      nodes: [
        {
          tag: '01',
          title: 'Agent',
          sub: 'Go · single binary',
          body: 'Runs on the host. SSH only on loopback. Outbound WebSocket, no inbound ports. PTY, TCP proxy, telemetry, cron tasks.',
        },
        {
          tag: '02',
          title: 'Core',
          sub: 'FastAPI · PostgreSQL · Redis',
          body: 'Metadata notebook and transit tunnel. JWT + TOTP. Agent secrets hashed with bcrypt. Metrics in Redis, not the DB. Plugins are out-of-process daemons.',
        },
        {
          tag: '03',
          title: 'Clients',
          sub: 'Web · TUI · GUI',
          body: 'Browser console, terminal client, desktop. vxk_… API keys for machines. Anything that can touch an agent requires 2FA.',
        },
      ],
    },
    features: {
      kicker: 'Capabilities',
      title: 'Not another “SSH in a browser”. A control plane for the fleet.',
      items: [
        {
          title: 'WebSSH through NAT',
          body: 'A PTY in the browser: Core proxies the stream to the agent. The host needs no public IP. Live resize, clean teardown.',
        },
        {
          title: 'TCP/SSH tunnel',
          body: 'GUI and TUI reach the host through a WebSocket proxy. Raw traffic — Core never sees the password. Enabled per host.',
        },
        {
          title: 'Telemetry without a warehouse',
          body: 'CPU, RAM, net, uptime land in Redis with TTL. Postgres does not hoard metrics. The dashboard is live, not an eternal archive.',
        },
        {
          title: 'Hard 2FA',
          body: 'Telemetry, terminal, proxy, tasks, agent minting — only with TOTP on. Not a “later” checkbox. Policy.',
        },
        {
          title: 'Host billing',
          body: 'Cycle, amount, currency, payer. Month calendar, left-to-pay, FX, reminders. Renew shifts next due; paid marks stay on the grid.',
        },
        {
          title: 'Daemon plugins',
          body: 'Extend without forking Core: your process, RPC, UI slots in the sidebar, host table, settings. Core is a gateway, not a junk drawer.',
        },
        {
          title: 'Public status',
          body: '/u/{slug} with no login, no IPs, no links into the console. Hidden hosts are omitted. Country flags from agent GeoIP.',
        },
        {
          title: 'Tasks on the agent',
          body: 'Cron is dispatched by Core and executed on the host. stdout/stderr in logs. Timeouts. Not a blind SSH from CI.',
        },
      ],
    },
    security: {
      kicker: 'Zero-trust',
      title: 'The cloud knows you have a server. It does not know how to log in.',
      points: [
        {
          title: 'No passwords, no keys',
          body: 'API schemas reject password / private_key. PostgreSQL holds name, address, port, username, tags, billing. That is all.',
        },
        {
          title: 'Agent secret, once',
          body: 'vxa_… is shown on create and rotate. After that — bcrypt only. Revoke kills access without a disk visit on Core.',
        },
        {
          title: 'Outbound-only',
          body: 'The agent does not listen on the internet. The host firewall can stay shut. The tunnel survives NAT, CGNAT, and home IP churn.',
        },
        {
          title: '2FA on the sharp edge',
          body: 'Until TOTP is verified there is no WebSSH, no proxy, no telemetry, no task run. Default policy, not a reminder you might ignore.',
        },
      ],
      quote:
        'If a cloud can open your SSH with its own key, it is not your server. Vortex does not take that deal.',
    },
    start: {
      kicker: 'Get in',
      title: 'Four steps. No public IP. No key upload.',
      steps: [
        {
          n: '01',
          title: 'Account and 2FA',
          body: 'Register, verify email, enable TOTP. Without the second factor the console will not let you near agents — on purpose.',
        },
        {
          n: '02',
          title: 'Host card',
          body: 'Name, address, port, username, tags. A notebook, not a vault. SSH secrets do not belong here.',
        },
        {
          n: '03',
          title: 'Agent one-liner',
          body: 'Hosts → Install agent. One line drops the binary and systemd unit. The agent dials Core over WSS by itself.',
        },
        {
          n: '04',
          title: 'Terminal from anywhere',
          body: 'When it goes online, open WebSSH or a tunnel from the TUI/GUI. Home lab, DC, double NAT — same path.',
        },
      ],
    },
    cta: {
      title: 'Stop keeping the fleet in your head.',
      body: 'Open the console, put an agent on the first box behind NAT, and shell into it from the browser. If you do not want the rest of the fleet on it after that, we built the tunnel for nothing.',
      primary: 'Open console',
      secondary: 'Create account',
    },
    footer: {
      product: 'Product',
      console: 'Console',
      api: 'API',
      status: 'Idea',
      blurb:
        'VortexSSH is a hybrid stack: local clients, host agents, and a cloud Core. Metadata in the cloud. Secrets stay with you.',
      copy: 'VortexSSH',
    },
  },
} as const
