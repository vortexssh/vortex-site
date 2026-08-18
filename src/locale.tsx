import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { copy, type Locale } from '@/copy'

const STORAGE_KEY = 'vortex-site-locale'

function detectLocale(): Locale {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'ru' || saved === 'en') return saved
  } catch {
    /* ignore */
  }
  const lang = navigator.language.toLowerCase()
  return lang.startsWith('ru') ? 'ru' : 'en'
}

type LocaleContextValue = {
  locale: Locale
  t: (typeof copy)[Locale]
  toggle: () => void
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('ru')

  useEffect(() => {
    setLocale(detectLocale())
  }, [])

  useEffect(() => {
    document.documentElement.lang = locale
    document.title = copy[locale].metaTitle
    try {
      localStorage.setItem(STORAGE_KEY, locale)
    } catch {
      /* ignore */
    }
  }, [locale])

  const value = useMemo<LocaleContextValue>(
    () => ({
      locale,
      t: copy[locale],
      toggle: () => setLocale((prev) => (prev === 'ru' ? 'en' : 'ru')),
    }),
    [locale],
  )

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

export function useLocale() {
  const ctx = useContext(LocaleContext)
  if (!ctx) throw new Error('useLocale outside LocaleProvider')
  return ctx
}
