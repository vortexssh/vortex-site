import { Logo, consoleHref } from '@/components/Logo'
import { useLocale } from '@/locale'

export function Footer() {
  const { t } = useLocale()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-[1.4fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <Logo className="h-6 w-6" />
            <span className="font-mono text-sm font-semibold text-fg-strong">VortexSSH</span>
          </div>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">{t.footer.blurb}</p>
        </div>
        <div className="flex flex-wrap gap-8 font-mono text-xs uppercase tracking-wider">
          <div className="flex flex-col gap-2">
            <span className="text-dim">{t.footer.product}</span>
            <a href="#product" className="text-muted hover:text-neon">
              {t.nav.product}
            </a>
            <a href="#security" className="text-muted hover:text-neon">
              {t.nav.security}
            </a>
            <a href="#start" className="text-muted hover:text-neon">
              {t.nav.start}
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-dim">{t.footer.console}</span>
            <a href={consoleHref('/login')} className="text-muted hover:text-neon">
              {t.ctaConsole}
            </a>
            <a href={consoleHref('/register')} className="text-muted hover:text-neon">
              {t.ctaSignup}
            </a>
            <a
              href="https://api.vortex.timant32.ru/docs"
              className="text-muted hover:text-neon"
            >
              {t.footer.api}
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-4 py-4 font-mono text-[11px] text-muted">
          © {year} {t.footer.copy}
        </p>
      </div>
    </footer>
  )
}
