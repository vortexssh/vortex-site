import { useLocale } from '@/locale'

export function Problem() {
  const { t } = useLocale()

  return (
    <section id="product" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-neon">
          {t.problem.kicker}
        </p>
        <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-fg-strong sm:text-4xl">
          {t.problem.title}
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-dim">{t.problem.lead}</p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {t.problem.cards.map((card) => (
            <article
              key={card.title}
              className="rounded-lg border border-border bg-panel p-5 transition-colors hover:border-neon/25"
            >
              <h3 className="text-base font-semibold text-fg-strong">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-dim">{card.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Architecture() {
  const { t } = useLocale()

  return (
    <section className="border-t border-border bg-surface/60">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-neon">{t.arch.kicker}</p>
        <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-fg-strong sm:text-4xl">
          {t.arch.title}
        </h2>
        <div className="mt-6 flex flex-wrap gap-2">
          {t.arch.stack.map((s) => (
            <span
              key={s}
              className="rounded-md border border-border bg-void px-2.5 py-1 font-mono text-[11px] text-dim"
            >
              {s}
            </span>
          ))}
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {t.arch.nodes.map((node, i) => (
            <article
              key={node.tag}
              className="relative rounded-lg border border-border bg-panel p-6"
            >
              {i < t.arch.nodes.length - 1 ? (
                <span className="pointer-events-none absolute top-1/2 -right-3 hidden h-px w-6 bg-neon/40 lg:block" />
              ) : null}
              <p className="font-mono text-[11px] text-neon">{node.tag}</p>
              <h3 className="mt-2 text-xl font-semibold text-fg-strong">{node.title}</h3>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-muted">
                {node.sub}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-dim">{node.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
