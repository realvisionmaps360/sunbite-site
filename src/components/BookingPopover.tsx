import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useLanguage } from '../LanguageContext'
import { links } from '../links'

type Props = {
  /** Button label */
  label: string
  /** Tailwind classes for the trigger button */
  triggerClassName: string
  /** Classes for the positioning wrapper (controls visibility/layout) */
  wrapperClassName?: string
  /** Where the popover opens relative to the button */
  align?: 'right' | 'center'
}

/**
 * A booking CTA button that, on click, reveals a small popover with the
 * SUNBITE email: a mailto link (opens the visitor's mail app pre-addressed)
 * and a copy-to-clipboard button. Used by both the header and the
 * booking section so the behaviour stays identical everywhere.
 */
export function BookingPopover({
  label,
  triggerClassName,
  wrapperClassName = 'relative inline-block',
  align = 'right',
}: Props) {
  const { t } = useLanguage()
  const [open, setOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const copyTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Close on outside click or Escape
  useEffect(() => {
    if (!open) return
    const onDocClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('mousedown', onDocClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDocClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  useEffect(() => () => { if (copyTimer.current) clearTimeout(copyTimer.current) }, [])

  const flagCopied = () => {
    setCopied(true)
    if (copyTimer.current) clearTimeout(copyTimer.current)
    copyTimer.current = setTimeout(() => setCopied(false), 1800)
  }

  const copyEmail = () => {
    // Prefer the async Clipboard API; fall back to execCommand if it's
    // unavailable or blocked (e.g. no document focus / older browsers).
    const fallback = () => {
      const ta = document.createElement('textarea')
      ta.value = links.email
      ta.style.position = 'fixed'
      ta.style.opacity = '0'
      document.body.appendChild(ta)
      ta.select()
      try { document.execCommand('copy') } catch { /* ignore */ }
      document.body.removeChild(ta)
      flagCopied()
    }
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(links.email).then(flagCopied, fallback)
    } else {
      fallback()
    }
  }

  const posClass = align === 'center' ? 'left-1/2 -translate-x-1/2' : 'right-0'

  return (
    <div ref={ref} className={wrapperClassName}>
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        aria-haspopup="dialog"
        className={triggerClassName}
      >
        {label}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className={`absolute z-50 mt-2 w-64 max-w-[calc(100vw-2.5rem)] rounded-2xl border border-brand/15 bg-cream-soft p-4 text-left shadow-xl ${posClass}`}
          >
            <p className="mb-2 font-body text-xs font-semibold text-ink/60">
              {t.nav.bookPrompt}
            </p>
            <a
              href={links.contact}
              className="group flex items-center justify-between gap-2 rounded-lg border border-brand/15 bg-brand/[0.04] px-3 py-2 font-body text-sm font-bold text-brand transition-colors hover:bg-brand/10 hover:text-brand-dark"
            >
              <span className="break-all underline decoration-brand/30 underline-offset-2">
                {links.email}
              </span>
              <svg
                viewBox="0 0 24 24" width="15" height="15"
                fill="none" stroke="currentColor" strokeWidth="2.4"
                strokeLinecap="round" strokeLinejoin="round"
                className="shrink-0 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="M13 6l6 6-6 6" />
              </svg>
            </a>
            <button
              type="button"
              onClick={copyEmail}
              className="mt-3 inline-flex w-full items-center justify-center rounded-full bg-brand px-3 py-2 text-xs font-semibold text-cream transition-transform hover:scale-[1.02] active:scale-95"
            >
              {copied ? t.nav.copied : t.nav.copy}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
