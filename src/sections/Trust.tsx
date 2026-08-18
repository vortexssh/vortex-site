import { consoleHref } from '@/components/Logo'
import { useLocale } from '@/locale'

export function Security() {
  const { t } = useLocale()

  return (
    <section id="security" className="border-t border-border bg-surface/60">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-neon">
          {t.security.kicker}
        </p>
        <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-fg-strong sm:text-4xl">
          {t.security.title}
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {t.security.points.map((point) => (
            <article key={point.title} className="rounded-lg border border-border bg-panel p-5">
              <h3 className="text-base font-semibold text-fg-strong">{point.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-dim">{point.body}</p>
            </article>
          ))}
        </div>
        <blockquote className="mt-10 border-l-2 border-neon pl-5 font-mono text-sm leading-relaxed text-fg">
          {t.security.quote}
        </blockquote>
      </div>
    </section>
  )
}

export function Start() {
  const { t } = useLocale()

  return (
    <section id="start" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-neon">{t.start.kicker}</p>
        <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-fg-strong sm:text-4xl">
          {t.start.title}
        </h2>
        <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {t.start.steps.map((step) => (
            <li key={step.n} className="relative">
              <p className="font-mono text-2xl text-neon/80">{step.n}</p>
              <h3 className="mt-3 text-base font-semibold text-fg-strong">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-dim">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export function CtaBand() {
  const { t } = useLocale()

  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <div className="rounded-lg border border-neon/30 bg-neon/5 px-6 py-12 text-center shadow-glow-sm sm:px-12">
          <h2 className="text-3xl font-semibold tracking-tight text-fg-strong">{t.cta.title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-dim">{t.cta.body}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={consoleHref('/login')}
              className="inline-flex items-center rounded-md border border-neon/50 bg-neon px-4 py-2.5 text-sm font-semibold text-void hover:bg-neon-dim"
            >
              {t.cta.primary}
            </a>
            <a
              href={consoleHref('/register')}
              className="inline-flex items-center rounded-md border border-neon/40 bg-transparent px-4 py-2.5 text-sm font-medium text-neon hover:bg-neon/10"
            >
              {t.cta.secondary}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
