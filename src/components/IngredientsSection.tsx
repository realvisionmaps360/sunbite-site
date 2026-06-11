import { motion } from 'framer-motion'
import { t } from '../content'

export function IngredientsSection() {
  return (
    <section className="warm-glow bg-brand py-24 md:py-36">
      <div className="mx-auto max-w-5xl px-5">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <p className="mb-4 font-body text-xs font-bold uppercase tracking-[0.2em] text-cream/50">
            {t.ingredients.eyebrow}
          </p>
          <h2 className="font-display text-4xl font-bold italic text-cream md:text-5xl">
            {t.ingredients.headline}
          </h2>
        </motion.div>

        {/* Ingredient blocks — no cards, just elegant text */}
        <div className="space-y-0">
          {t.ingredients.blocks.map((block, i) => (
            <motion.div
              key={block.title}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
            >
              {i > 0 && (
                <div className="mx-auto my-10 w-24 border-t border-cream/15" />
              )}
              <div className="grid gap-3 md:grid-cols-[1fr_2fr] md:gap-12">
                <h3 className="font-display text-xl font-bold text-cream md:text-2xl">
                  {block.title}
                </h3>
                <p className="text-base leading-relaxed text-cream/70 md:text-lg">
                  {block.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No shortcuts statement */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center font-display text-lg italic text-cream/40"
        >
          No shortcuts. No compromises.
        </motion.p>

      </div>
    </section>
  )
}
