import { motion } from 'framer-motion'
import { t } from '../content'
import { links } from '../links'
import iconWedding     from '../assets/icons/wedding.png'
import iconBirthday    from '../assets/icons/birthday.png'
import iconCorporate   from '../assets/icons/corporate.png'
import iconFestival    from '../assets/icons/festival.png'
import iconCelebration from '../assets/icons/celebration.svg'
import iconMarket      from '../assets/icons/market.svg'

const iconMap: Record<string, string> = {
  wedding:     iconWedding,
  birthday:    iconBirthday,
  corporate:   iconCorporate,
  festival:    iconFestival,
  celebration: iconCelebration,
  market:      iconMarket,
}

const stagger = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
} as const

export function BookSection() {
  const [h1, h2] = t.book.headline.split('\n')

  return (
    <section id="book" className="bg-cream py-24 md:py-36">
      <div className="mx-auto max-w-5xl px-5 text-center">

        <motion.div {...stagger} transition={{ duration: 0.6 }}>
          <p className="mb-4 font-body text-xs font-bold uppercase tracking-[0.2em] text-brand/60">
            {t.book.eyebrow}
          </p>
          <h2 className="mb-6 font-display text-4xl font-bold text-ink md:text-5xl lg:text-6xl">
            {h1}<br /><span className="italic text-brand">{h2}</span>
          </h2>
          <p className="mx-auto mb-16 max-w-xl text-lg leading-relaxed text-ink-muted">
            {t.book.body}
          </p>
        </motion.div>

        {/* Event category grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-14 grid grid-cols-2 gap-4 sm:grid-cols-3"
        >
          {t.book.categories.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.07 }}
              className="flex flex-col items-center gap-2 rounded-2xl border border-brand/10 bg-cream-soft py-6 px-4"
            >
              <img src={iconMap[cat.icon]} alt={cat.label} className="h-14 w-14 object-contain rounded-lg" />
              <span className="font-body text-sm font-semibold text-ink/70">{cat.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div {...stagger} transition={{ duration: 0.5, delay: 0.3 }}>
          <a
            href={links.contact}
            className="inline-flex items-center justify-center rounded-full bg-brand px-10 py-4.5 font-body text-base font-bold text-cream shadow-lg transition-transform hover:scale-[1.03] active:scale-95"
          >
            {t.book.cta}
          </a>
          <p className="mt-4 font-body text-sm text-ink/40">{t.book.trust}</p>
        </motion.div>

      </div>
    </section>
  )
}
