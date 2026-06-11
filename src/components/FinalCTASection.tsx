import { motion } from 'framer-motion'
import { t } from '../content'
import { links } from '../links'
import { MapPinIcon, InstagramIcon } from './Icons'

export function FinalCTASection() {
  const [h1, h2] = t.finalCTA.headline.split('\n')

  return (
    <section className="warm-glow bg-brand py-28 text-center md:py-36">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-3xl px-5"
      >
        <h2 className="mb-14 font-display text-4xl font-bold text-cream md:text-5xl lg:text-6xl">
          {h1}<br /><span className="italic">{h2}</span>
        </h2>

        <div className="flex flex-row flex-wrap items-center justify-center gap-4">
          <a
            href="#find-us"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-cream px-8 py-4 font-body text-base font-bold text-brand shadow-lg transition-transform hover:scale-[1.03] active:scale-95"
          >
            <MapPinIcon className="h-4 w-4 shrink-0" />
            <span className="whitespace-nowrap">{t.finalCTA.find}</span>
          </a>
          <a
            href="#book"
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-cream/50 px-8 py-4 font-body text-base font-semibold text-cream transition-all hover:border-cream/90 hover:bg-cream/10"
          >
            <span className="whitespace-nowrap">{t.finalCTA.book}</span>
          </a>
          <a
            href={links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-cream/50 px-8 py-4 font-body text-base font-semibold text-cream transition-all hover:border-cream/90 hover:bg-cream/10"
          >
            <InstagramIcon className="h-4 w-4 shrink-0" />
            <span className="whitespace-nowrap">{t.finalCTA.follow}</span>
          </a>
        </div>
      </motion.div>
    </section>
  )
}
