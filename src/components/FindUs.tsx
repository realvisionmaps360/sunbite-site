import { motion } from 'framer-motion'
import type { Content } from '../i18n'
import { links } from '../i18n'
import { InstagramIcon } from './Icons'
import emblem from '../assets/emblem.jpg'

export function FindUs({ t }: { t: Content }) {
  return (
    <section id="find-us" className="bg-cream py-20 md:py-28">
      <div className="mx-auto grid max-w-5xl items-center gap-12 px-5 md:grid-cols-2">
        <motion.img
          src={emblem}
          alt="Sunbite — Strawberry Chocolate Cups · Fresh Lemonade"
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto w-72 rounded-3xl md:w-full"
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="mb-3 font-display text-sm font-semibold uppercase tracking-widest text-strawberry/70">
            {t.findUs.eyebrow}
          </p>
          <h2 className="mb-4 font-display text-4xl font-bold text-strawberry md:text-5xl">
            {t.findUs.title}
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-ink/70">
            {t.findUs.body}
          </p>
          <a
            href={links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-strawberry px-7 py-3.5 font-display text-lg font-semibold text-cream shadow-lg transition-transform hover:scale-[1.03] active:scale-95"
          >
            <InstagramIcon className="h-5 w-5" />
            {t.findUs.cta}
          </a>
        </motion.div>
      </div>
    </section>
  )
}
