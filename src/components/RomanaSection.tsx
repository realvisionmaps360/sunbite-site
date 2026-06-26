import { motion } from 'framer-motion'
import { useLanguage } from '../LanguageContext'
import emblem from '../assets/emblem.jpg'

export function RomanaSection() {
  const { t } = useLanguage()
  const paragraphs = t.romana.body.split('\n\n')

  return (
    <section id="about" className="bg-cream py-24 md:py-36">
      <div className="mx-auto grid max-w-5xl items-center gap-16 px-5 md:grid-cols-2 md:gap-20">

        {/* Image — replace with Romana's photo when available */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="order-2 md:order-1"
        >
          <div className="overflow-hidden rounded-[2.5rem] shadow-xl ring-1 ring-brand/10">
            <img
              src={emblem}
              alt={t.romana.photoAlt}
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </motion.div>

        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="order-1 md:order-2"
        >
          <p className="mb-4 font-body text-xs font-bold uppercase tracking-[0.2em] text-brand/60">
            {t.romana.eyebrow}
          </p>
          <h2 className="mb-8 font-display text-4xl font-bold italic text-ink md:text-5xl">
            {t.romana.headline.split('\n').map((line, i) => (
              <span key={i}>
                {i > 0 && <br />}
                {line}
              </span>
            ))}
          </h2>
          {paragraphs.map((para, i) => (
            <p key={i} className={`text-lg leading-relaxed text-ink-muted ${i > 0 ? 'mt-5' : ''}`}>
              {para}
            </p>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
