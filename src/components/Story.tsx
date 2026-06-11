import { motion } from 'framer-motion'
import type { Content } from '../i18n'

export function Story({ t }: { t: Content }) {
  return (
    <section
      id="story"
      className="warm-vignette bg-strawberry py-20 text-center md:py-28"
    >
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-3xl px-5"
      >
        <p className="mb-3 font-display text-sm font-semibold uppercase tracking-widest text-vanilla">
          {t.story.eyebrow}
        </p>
        <h2 className="mb-6 font-display text-4xl font-bold text-cream md:text-5xl">
          {t.story.title}
        </h2>
        <p className="text-lg leading-relaxed text-cream/85 md:text-xl">
          {t.story.body}
        </p>
      </motion.div>
    </section>
  )
}
