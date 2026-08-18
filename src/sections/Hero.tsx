import { consoleHref } from '@/components/Logo'
import { useLocale } from '@/locale'

const TONE: Record<string, string> = {
  dim: 'text-dim',
  muted: 'text-muted',
  neon: 'text-neon text-glow',
  fg: 'text-fg',
}

export function Hero() {
  const { t } = useLocale()

  return (
    <section id="top" className="hero-glow relative overflow-hidden">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-70" />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:py-28">
        <div className="anim-rise">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-neon">
            {t.hero.kicker}
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-[1.12] tracking-tight text-fg-strong sm:text-5xl">
            {t.hero.title}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-dim sm:text-lg">{t.hero.lead}</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={consoleHref('/register')}
              className="inline-flex items-center rounded-md border border-neon/50 bg-neon px-4 py-2.5 text-sm font-semibold text-void hover:bg-neon-dim"
            >
              {t.ctaSignup}
            </a>
            <a
              href={consoleHref('/login')}
              className="inline-flex items-center rounded-md border border-neon/40 bg-neon/10 px-4 py-2.5 text-sm font-medium text-neon hover:shadow-glow-sm"
            >
              {t.ctaConsole}
            </a>
          </div>
          <p className="mt-4 font-mono text-[11px] text-muted">{t.hero.note}</p>
        </div>

        <div className="anim-rise flex flex-col gap-4" style={{ animationDelay: '120ms' }}>
          <div className="overflow-hidden rounded-lg border border-border bg-panel shadow-glow-sm">
            <div className="flex items-center gap-2 border-b border-border px-3 py-2">
              <span className="h-2.5 w-2.5 rounded-full bg-danger/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-warn/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-neon/80" />
              <span className="ml-2 font-mono text-[11px] text-muted">{t.terminal.title}</span>
            </div>
            <div className="space-y-1.5 px-4 py-4 font-mono text-[12px] leading-relaxed">
              {t.terminal.lines.map((line) => (
                <p key={line.text} className={TONE[line.tone] ?? 'text-fg'}>
                  {line.text.endsWith('█') ? (
                    <>
                      {line.text.slice(0, -1)}
                      <span className="anim-caret text-neon">█</span>
                    </>
                  ) : (
                    line.text
                  )}
                </p>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-border bg-panel p-4">
            <p className="mb-3 font-mono text-[10px] uppercase tracking-wider text-muted">
              {t.fleet.title}
            </p>
            <ul className="space-y-2.5">
              {t.fleet.rows.map((row) => (
                <li key={row.name} className="flex items-center gap-3">
                  <span className="anim-dot h-1.5 w-1.5 shrink-0 rounded-full bg-neon" />
                  <span className="w-24 font-mono text-xs text-fg-strong">{row.name}</span>
                  <span className="w-8 font-mono text-[10px] text-muted">{row.loc}</span>
                  <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-border">
                    <span
                      className="anim-bar block h-full rounded-full bg-neon"
                      style={{ width: `${row.cpu}%` }}
                    />
                  </span>
                  <span className="w-10 text-right font-mono text-[10px] text-dim">{row.cpu}%</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
