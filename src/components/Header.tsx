import { Logo, consoleHref } from '@/components/Logo'
import { useLocale } from '@/locale'

export function Header() {
  const { t, toggle } = useLocale()

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-void/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
        <a href="#top" className="flex items-center gap-2.5">
          <Logo />
          <span className="font-mono text-sm font-semibold tracking-wide text-fg-strong">
            VortexSSH
          </span>
        </a>
        <nav className="hidden items-center gap-6 font-mono text-[11px] uppercase tracking-wider text-muted md:flex">
          <a href="#product" className="hover:text-neon">
            {t.nav.product}
          </a>
          <a href="#features" className="hover:text-neon">
            {t.nav.features}
          </a>
          <a href="#security" className="hover:text-neon">
            {t.nav.security}
          </a>
          <a href="#start" className="hover:text-neon">
            {t.nav.start}
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggle}
            className="rounded-md border border-border px-2 py-1 font-mono text-[11px] text-dim hover:border-neon/40 hover:text-neon"
          >
            {t.langLabel}
          </button>
          <a
            href={consoleHref('/login')}
            className="rounded-md border border-neon/40 bg-neon/10 px-3 py-1.5 text-sm font-medium text-neon hover:shadow-glow-sm"
          >
            {t.ctaConsole}
          </a>
        </div>
      </div>
    </header>
  )
}
