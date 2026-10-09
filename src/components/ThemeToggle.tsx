import { useEffect, useState } from 'react'
import { flushSync } from 'react-dom'

type Theme = 'light' | 'dark'

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('light')

  useEffect(() => {
    const current = document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light'
    setTheme(current)
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', current === 'dark' ? '#17151b' : '#f8f7f4')
  }, [])

  function toggleTheme() {
    const next: Theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'
    const apply = () => {
      document.documentElement.dataset.theme = next
      document.querySelector('meta[name="theme-color"]')?.setAttribute('content', next === 'dark' ? '#17151b' : '#f8f7f4')
      try { localStorage.setItem('dami-theme', next) } catch { /* Storage may be unavailable. */ }
      flushSync(() => setTheme(next))
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !document.startViewTransition) {
      apply()
      return
    }

    document.startViewTransition(apply)
  }

  return (
    <button
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      aria-pressed={theme === 'dark'}
      className="theme-toggle"
      onClick={toggleTheme}
      type="button"
    >
      <svg aria-hidden="true" className="theme-glyph" focusable="false" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 3a9 9 0 0 0 0 18Z" fill="currentColor" />
      </svg>
    </button>
  )
}
