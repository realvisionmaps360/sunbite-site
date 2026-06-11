import { motion } from 'framer-motion'
import type { Content } from '../i18n'
import cup from '../assets/strawberry-cup.png'

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
}

export function Menu({ t }: { t: Content }) {
  const [signature, lemonade] = t.menu.items

  return (
    <section id="menu" className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 font-display text-sm font-semibold uppercase tracking-widest text-strawberry/70">
            {t.menu.eyebrow}
          </p>
          <h2 className="mb-4 font-display text-4xl font-bold text-strawberry md:text-5xl">
            {t.menu.title}
          </h2>
          <p className="text-lg text-ink/70">{t.menu.subtitle}</p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          {/* Signature — Strawberry Chocolate Cups (with photo) */}
          <motion.article
            {...fadeUp}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-3xl border border-strawberry/5 bg-white shadow-xl"
          >
            <div className="h-72 overflow-hidden bg-strawberry">
              <img
                src={cup}
                alt={signature.name}
                className="h-full w-full object-cover object-top"
              />
            </div>
            <div className="p-6">
              <span className="inline-block rounded-full bg-vanilla px-3 py-1 text-xs font-semibold uppercase tracking-wide text-strawberry-deep">
                {signature.tag}
              </span>
              <h3 className="mt-3 font-display text-2xl font-bold text-strawberry">
                {signature.name}
              </h3>
              <p className="mt-2 leading-relaxed text-ink/70">
                {signature.desc}
              </p>
            </div>
          </motion.article>

          {/* Fresh Lemonade (illustrated — awaiting real photo) */}
          <motion.article
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="overflow-hidden rounded-3xl border border-strawberry/5 bg-white shadow-xl"
          >
            <div className="flex h-72 items-center justify-center bg-gradient-to-br from-vanilla to-cream-soft">
              <span className="text-8xl drop-shadow-sm" role="img" aria-label="Lemon">
                🍋
              </span>
            </div>
            <div className="p-6">
              <span className="inline-block rounded-full bg-strawberry/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-strawberry">
                {lemonade.tag}
              </span>
              <h3 className="mt-3 font-display text-2xl font-bold text-strawberry">
                {lemonade.name}
              </h3>
              <p className="mt-2 leading-relaxed text-ink/70">{lemonade.desc}</p>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  )
}
