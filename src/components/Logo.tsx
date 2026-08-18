export function Logo({ className = 'h-7 w-7' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect width="32" height="32" rx="6" fill="#0a0a0a" />
      <path
        d="M8 22 L16 6 L24 22"
        stroke="#39FF14"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M11 16 H21" stroke="#39FF14" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function consoleHref(path = '/') {
  const base = (import.meta.env.VITE_CONSOLE_URL ?? 'https://my.vortex.timant32.ru').replace(
    /\/$/,
    '',
  )
  return `${base}${path}`
}
