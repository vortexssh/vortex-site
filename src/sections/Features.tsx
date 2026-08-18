import {
  Activity,
  CalendarClock,
  EyeOff,
  Fingerprint,
  ListTodo,
  Plug,
  Radio,
  TerminalSquare,
} from 'lucide-react'
import { useLocale } from '@/locale'

const ICONS = [TerminalSquare, Radio, Activity, Fingerprint, CalendarClock, Plug, EyeOff, ListTodo]

export function Features() {
  const { t } = useLocale()

  return (
    <section id="features" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-neon">
          {t.features.kicker}
        </p>
        <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-fg-strong sm:text-4xl">
          {t.features.title}
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.features.items.map((item, i) => {
            const Icon = ICONS[i] ?? TerminalSquare
            return (
              <article
                key={item.title}
                className="rounded-lg border border-border bg-panel p-5 hover:border-neon/25"
              >
                <Icon className="h-5 w-5 text-neon" strokeWidth={1.6} />
                <h3 className="mt-4 text-sm font-semibold text-fg-strong">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-dim">{item.body}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
