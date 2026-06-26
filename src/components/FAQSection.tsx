import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../LanguageContext'
import { ChevronDownIcon } from './Icons'

export function FAQSection() {
  const { t } = useLanguage()
  const [open, setOpen] = useState<number | null>(null)
  const [h1, h2] = t.faq.headline.split('\n')

  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-5">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="mb-3 font-body text-xs font-bold uppercase tracking-[0.2em] text-brand/60">
            {t.faq.eyebrow}
          </p>
          <h2 className="font-display text-4xl font-bold text-ink md:text-5xl">
            {h1}<br /><span className="italic text-brand">{h2}</span>
          </h2>
        </motion.div>

        <div className="space-y-3">
          {t.faq.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="overflow-hidden rounded-2xl border border-brand/10 bg-cream-soft"
            >
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-brand/5"
                aria-expanded={open === i}
              >
                <span className="font-body text-base font-semibold text-ink">
                  {item.q}
                </span>
                <ChevronDownIcon
                  className={`h-5 w-5 flex-shrink-0 text-brand transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`}
                />
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-base leading-relaxed text-ink-muted">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
