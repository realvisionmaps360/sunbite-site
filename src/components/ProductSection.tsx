import { motion } from 'framer-motion'
import { useLanguage } from '../LanguageContext'
import menu from '../assets/menu.png'

const fade = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
} as const

export function ProductSection() {
  const { t } = useLanguage()
  const [line1, line2] = t.product.headline.split('\n')

  return (
    <section id="product" className="bg-cream-soft py-24 md:py-36">
      <div className="mx-auto max-w-6xl px-5">

        {/* Eyebrow */}
        <motion.p {...fade} transition={{ duration: 0.5 }}
          className="mb-12 text-center font-body text-xs font-bold uppercase tracking-[0.2em] text-brand/60"
        >
          {t.product.eyebrow}
        </motion.p>

        <div className="grid items-center gap-16 md:grid-cols-2 md:gap-20">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="order-2 md:order-1"
          >
            <div className="overflow-hidden rounded-[2.5rem] shadow-2xl">
              <img
                src={menu}
                alt="Sunbite Menü — Erdbeer-Schoko-Becher"
                className="aspect-[1055/1491] w-full object-contain"
              />
            </div>
          </motion.div>

          {/* Copy */}
          <motion.div {...fade} transition={{ duration: 0.6, delay: 0.15 }}
            className="order-1 md:order-2"
          >
            <h2 className="mb-6 font-display text-5xl font-bold leading-none text-ink md:text-6xl lg:text-7xl">
              {line1}<br />
              <span className="italic text-brand">{line2}</span>
            </h2>

            <p className="mb-10 text-lg leading-relaxed text-ink-muted">
              {t.product.body}
            </p>

            {/* Pull quote */}
            <blockquote className="border-l-4 border-brand py-1 pl-6 font-display text-xl italic leading-snug text-brand md:text-2xl">
              "{t.product.pullQuote}"
            </blockquote>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
