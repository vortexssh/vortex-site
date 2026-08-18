export type Locale = 'ru' | 'en'

export const copy = {
  ru: {
    metaTitle: 'VortexSSH — серверы за NAT. Терминал в браузере. Ключи только у вас.',
    nav: {
      product: 'Продукт',
      security: 'Безопасность',
      features: 'Возможности',
      start: 'Старт',
    },
    ctaConsole: 'Войти',
    ctaSignup: 'Создать аккаунт',
    langLabel: 'EN',
    hero: {
      kicker: 'Управление серверами без открытых портов',
      title: 'Зайдите на сервер из браузера. Даже если у него нет белого IP.',
      lead:
        'VortexSSH ставит на машину маленький агент. Он сам выходит наружу по защищённому каналу — порт 22 открывать не нужно. Терминал, статус серверов и напоминания об оплате — в одном кабинете. Пароли и SSH-ключи в облако не уходят.',
      note: 'Ключи остаются у вас. Кабинет — в браузере.',
    },
    terminal: {
      title: 'shop-1 · онлайн',
      lines: [
        { tone: 'dim', text: '$ vortex-agent' },
        { tone: 'muted', text: 'connecting  secure channel' },
        { tone: 'neon', text: 'connected   online' },
        { tone: 'fg', text: 'status      cpu 4%  ram 31%  up 47d' },
        { tone: 'fg', text: 'session     terminal from browser' },
        { tone: 'dim', text: 'root@shop-1:~# █' },
      ],
    },
    fleet: {
      title: 'Ваши серверы',
      rows: [
        { name: 'shop', loc: 'NL', cpu: 8, status: 'online' },
        { name: 'mail', loc: 'DE', cpu: 41, status: 'online' },
        { name: 'db', loc: 'FI', cpu: 12, status: 'online' },
        { name: 'backup', loc: 'RU', cpu: 3, status: 'online' },
      ],
    },
    problem: {
      kicker: 'Зачем это',
      title: 'Когда серверов больше нескольких, табличка и «какой там пароль» перестают работать.',
      lead:
        'Машины сидят за роутером провайдера. Ключи размазаны по ноутбукам. Продления VPS живут в почте. А терминал нужен из кафе — без белого IP и без дыры в файрволе.',
      cards: [
        {
          title: 'Не достучаться',
          body: 'Сервер за NAT. Открывать порт 22 в интернет не нужно: агент сам устанавливает защищённый канал наружу.',
        },
        {
          title: 'Не светить секреты',
          body: 'Список root-паролей в облаке — это инцидент, который ещё не случился. Vortex помнит только имя, адрес, логин и теги.',
        },
        {
          title: 'Не видно, что происходит',
          body: 'Нагрузка, память и аптайм — живой статус, не архив за годы. Скрытые серверы не попадают на публичную страницу.',
        },
        {
          title: 'Продления теряются',
          body: 'Календарь оплат, плательщики, валюты и напоминания в почту, Telegram и кабинет. Отметили оплату — дата сдвинулась.',
        },
      ],
    },
    arch: {
      kicker: 'Как это работает',
      title: 'Три части. Ни одна не просит ваш SSH-ключ.',
      stack: ['SSH', '2FA', 'Исходящий туннель', 'Без ключей в облаке'],
      nodes: [
        {
          tag: '01',
          title: 'Агент',
          sub: 'Программа на сервере',
          body: 'Ставится одной командой. Сам выходит наружу. Порты в интернет не открывает. Через него — терминал, статус и задачи по расписанию.',
        },
        {
          tag: '02',
          title: 'Облако',
          sub: 'Кабинет и туннель',
          body: 'Записная книжка серверов и безопасный канал до агента. Вход с двухфакторной защитой. Секреты агента хранятся только как хеш.',
        },
        {
          tag: '03',
          title: 'Вы',
          sub: 'Браузер и свои клиенты',
          body: 'Кабинет в браузере. При желании — обычные SSH-программы через туннель. Всё, что касается сервера, доступно только после 2FA.',
        },
      ],
    },
    features: {
      kicker: 'Возможности',
      title: 'Не ещё один «SSH в браузере». Один кабинет на все серверы.',
      items: [
        {
          title: 'Терминал через NAT',
          body: 'Откройте оболочку в браузере, даже если у сервера нет белого IP. Окно живое, сессия закрывается чисто.',
        },
        {
          title: 'Туннель для своих программ',
          body: 'Подключайте обычный SSH-клиент через защищённый канал. Пароль сервера облако не видит. Включается отдельно на каждый сервер.',
        },
        {
          title: 'Живой статус',
          body: 'Процессор, память, сеть и аптайм — здесь и сейчас. Это не склад графиков навсегда, а понятная картина «жив / чем занят».',
        },
        {
          title: 'Обязательный 2FA',
          body: 'Терминал, туннель, статус, задачи и установка агента — только с приложением-аутентификатором. Это не галочка «потом».',
        },
        {
          title: 'Оплаты серверов',
          body: 'Срок, сумма, валюта и кто платит. Календарь на месяц, сколько осталось оплатить, курс и напоминания. Отметили оплату — следующая дата на месте.',
        },
        {
          title: 'Расширения',
          body: 'Можно подключить свои панели и действия в кабинете. Они работают отдельно от основного сервиса, не ломая его.',
        },
        {
          title: 'Публичный статус',
          body: 'Страница для клиентов без входа и без IP-адресов. Скрытые серверы на неё не попадают. Страна — по факту подключения агента.',
        },
        {
          title: 'Задачи по расписанию',
          body: 'Команды выполняются на самом сервере. Логи и таймауты видны в кабинете — не «SSH из скрипта вслепую».',
        },
      ],
    },
    security: {
      kicker: 'Безопасность',
      title: 'Облако знает, что у вас есть сервер. Не знает, как на него зайти.',
      points: [
        {
          title: 'Ни паролей, ни ключей',
          body: 'Сервис не принимает пароли и приватные ключи ваших серверов. В облаке — имя, адрес, порт, логин, теги и оплаты. Всё.',
        },
        {
          title: 'Секрет агента — один раз',
          body: 'При установке и смене ключа секрет показывается один раз. Дальше хранится только хеш. Отзыв доступа — в один клик из кабинета.',
        },
        {
          title: 'Только исходящий канал',
          body: 'Агент не принимает соединения из интернета. Файрвол можно держать закрытым. Канал переживает NAT и смену домашнего IP.',
        },
        {
          title: '2FA на всём важном',
          body: 'Пока второй фактор не включён — нет терминала, нет туннеля, нет статуса, нет задач. Так по умолчанию, не «если вспомните».',
        },
      ],
      quote:
        'Если облачный сервис может открыть ваш SSH своим ключом — это уже не ваш сервер. Vortex на это не подписывается.',
    },
    start: {
      kicker: 'Старт',
      title: 'Четыре шага. Без белого IP и без выгрузки ключей.',
      steps: [
        {
          n: '01',
          title: 'Аккаунт и 2FA',
          body: 'Регистрация, письмо, приложение-аутентификатор. Без второго фактора кабинет не пустит к серверам — и это правильно.',
        },
        {
          n: '02',
          title: 'Карточка сервера',
          body: 'Имя, адрес, порт, логин, теги. Это записная книжка, не сейф. SSH-секреты сюда не кладутся.',
        },
        {
          n: '03',
          title: 'Агент одной командой',
          body: 'В кабинете скопируйте команду установки. Агент встанет на сервер и сам подключится.',
        },
        {
          n: '04',
          title: 'Терминал откуда угодно',
          body: 'Загорелся онлайн — открывайте терминал в браузере или туннель из своей программы. Дома, в датацентре, за двойным NAT — один путь.',
        },
      ],
    },
    cta: {
      title: 'Хватит держать серверы в голове.',
      body: 'Откройте кабинет, поставьте агент на первую машину за NAT — и зайдите в неё из браузера. Дальше остальное встанет само.',
      primary: 'Войти',
      secondary: 'Создать аккаунт',
    },
    footer: {
      product: 'Продукт',
      console: 'Кабинет',
      api: 'API',
      status: 'Идея',
      blurb:
        'VortexSSH — кабинет для серверов за NAT: терминал в браузере, живой статус и оплаты. Данные о машинах — в облаке. Ключи — у вас.',
      copy: 'VortexSSH',
    },
  },
  en: {
    metaTitle: 'VortexSSH — servers behind NAT. A browser terminal. Keys stay with you.',
    nav: {
      product: 'Product',
      security: 'Security',
      features: 'Features',
      start: 'Start',
    },
    ctaConsole: 'Sign in',
    ctaSignup: 'Create account',
    langLabel: 'RU',
    hero: {
      kicker: 'Reach servers without opening ports',
      title: 'Open a terminal in the browser. Even if the box has no public IP.',
      lead:
        'VortexSSH installs a small agent on the machine. It dials out over a secure channel — you never open port 22. Terminal, live status, and renewal reminders live in one console. Passwords and SSH keys never leave your servers.',
      note: 'Keys stay with you. The console is just a browser.',
    },
    terminal: {
      title: 'shop-1 · online',
      lines: [
        { tone: 'dim', text: '$ vortex-agent' },
        { tone: 'muted', text: 'connecting  secure channel' },
        { tone: 'neon', text: 'connected   online' },
        { tone: 'fg', text: 'status      cpu 4%  ram 31%  up 47d' },
        { tone: 'fg', text: 'session     terminal from browser' },
        { tone: 'dim', text: 'root@shop-1:~# █' },
      ],
    },
    fleet: {
      title: 'Your servers',
      rows: [
        { name: 'shop', loc: 'NL', cpu: 8, status: 'online' },
        { name: 'mail', loc: 'DE', cpu: 41, status: 'online' },
        { name: 'db', loc: 'FI', cpu: 12, status: 'online' },
        { name: 'backup', loc: 'RU', cpu: 3, status: 'online' },
      ],
    },
    problem: {
      kicker: 'Why',
      title: 'Past a handful of servers, a spreadsheet and a half-remembered password stop working.',
      lead:
        'Machines sit behind the ISP router. Keys live on every laptop. VPS renewals hide in email. And you need a terminal from a café — with no public IP and no hole in the firewall.',
      cards: [
        {
          title: 'Unreachable',
          body: 'The server is behind NAT. You do not open port 22 to the internet: the agent opens a secure channel outbound by itself.',
        },
        {
          title: 'No secret dump',
          body: 'A cloud list of root passwords is a breach that has not happened yet. Vortex remembers name, address, login, and tags — nothing else.',
        },
        {
          title: 'No live picture',
          body: 'Load, memory, and uptime are a live status, not a years-long archive. Hidden servers stay off the public page.',
        },
        {
          title: 'Renewals slip',
          body: 'A payment calendar, payers, currencies, and reminders via email, Telegram, and the inbox. Mark it paid — the next date moves.',
        },
      ],
    },
    arch: {
      kicker: 'How it works',
      title: 'Three parts. None of them ask for your SSH key.',
      stack: ['SSH', '2FA', 'Outbound tunnel', 'No keys in the cloud'],
      nodes: [
        {
          tag: '01',
          title: 'Agent',
          sub: 'A program on the server',
          body: 'Installed with one command. Dials out by itself. Opens no inbound ports. Through it you get a terminal, live status, and scheduled tasks.',
        },
        {
          tag: '02',
          title: 'Cloud',
          sub: 'Console and tunnel',
          body: 'A notebook of your servers and a secure path to the agent. Sign-in with two-factor protection. Agent secrets are stored as hashes only.',
        },
        {
          tag: '03',
          title: 'You',
          sub: 'Browser and your own tools',
          body: 'A console in the browser. If you want, a regular SSH client through the tunnel. Anything that touches a server requires 2FA.',
        },
      ],
    },
    features: {
      kicker: 'What you get',
      title: 'Not another “SSH in a browser”. One console for every server.',
      items: [
        {
          title: 'Terminal through NAT',
          body: 'Open a shell in the browser even if the server has no public IP. The window resizes live; the session ends cleanly.',
        },
        {
          title: 'Tunnel for your own tools',
          body: 'Point a regular SSH client through the secure channel. The cloud never sees the server password. You turn it on per server.',
        },
        {
          title: 'Live status',
          body: 'CPU, memory, network, and uptime — right now. Not a warehouse of graphs forever: a clear “is it up / how busy”.',
        },
        {
          title: 'Hard 2FA',
          body: 'Terminal, tunnel, status, tasks, and agent install all need an authenticator app. Not a “later” checkbox.',
        },
        {
          title: 'Server billing',
          body: 'Cycle, amount, currency, and who pays. A month calendar, what is left to pay, FX, and reminders. Mark it paid — the next due date shifts.',
        },
        {
          title: 'Extensions',
          body: 'Add your own panels and actions in the console. They run as separate programs, so they cannot break the core product.',
        },
        {
          title: 'Public status',
          body: 'A page for customers with no login and no IP addresses. Hidden servers are omitted. Country comes from where the agent actually connected.',
        },
        {
          title: 'Scheduled tasks',
          body: 'Commands run on the server itself. Logs and timeouts stay in the console — not a blind SSH from a script.',
        },
      ],
    },
    security: {
      kicker: 'Security',
      title: 'The cloud knows you have a server. It does not know how to log in.',
      points: [
        {
          title: 'No passwords, no keys',
          body: 'The service does not accept passwords or private keys for your servers. In the cloud: name, address, port, login, tags, and billing. That is all.',
        },
        {
          title: 'Agent secret, once',
          body: 'On install and when you rotate it, the secret is shown once. After that only a hash is stored. Revoke access in one click from the console.',
        },
        {
          title: 'Outbound only',
          body: 'The agent does not accept connections from the internet. The firewall can stay shut. The channel survives NAT and a home IP change.',
        },
        {
          title: '2FA on everything that matters',
          body: 'Until the second factor is on there is no terminal, no tunnel, no status, no tasks. Default policy — not a reminder you might ignore.',
        },
      ],
      quote:
        'If a cloud can open your SSH with its own key, it is not your server. Vortex does not take that deal.',
    },
    start: {
      kicker: 'Get started',
      title: 'Four steps. No public IP. No key upload.',
      steps: [
        {
          n: '01',
          title: 'Account and 2FA',
          body: 'Register, confirm email, turn on an authenticator app. Without the second factor the console will not let you near servers — on purpose.',
        },
        {
          n: '02',
          title: 'Server card',
          body: 'Name, address, port, login, tags. A notebook, not a vault. SSH secrets do not belong here.',
        },
        {
          n: '03',
          title: 'Agent in one command',
          body: 'Copy the install command from the console. The agent lands on the server and connects by itself.',
        },
        {
          n: '04',
          title: 'Terminal from anywhere',
          body: 'When it goes online, open the browser terminal or a tunnel from your own client. Home, datacenter, double NAT — same path.',
        },
      ],
    },
    cta: {
      title: 'Stop keeping the servers in your head.',
      body: 'Open the console, put an agent on the first machine behind NAT, and shell into it from the browser. The rest of the fleet follows.',
      primary: 'Sign in',
      secondary: 'Create account',
    },
    footer: {
      product: 'Product',
      console: 'Console',
      api: 'API',
      status: 'Idea',
      blurb:
        'VortexSSH is a console for servers behind NAT: a browser terminal, live status, and renewals. Machine details in the cloud. Keys stay with you.',
      copy: 'VortexSSH',
    },
  },
} as const
