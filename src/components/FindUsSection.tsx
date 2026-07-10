import { motion } from 'framer-motion'
import { useLanguage } from '../LanguageContext'
import { links } from '../links'
import { InstagramIcon, CalendarIcon } from './Icons'
import { upcomingEvents } from '../data/events'

export function FindUsSection() {
  const { t, lang } = useLanguage()
  const [headline1, headline2] = t.findUs.headline.split('\n')

  return (
    <section id="find-us" className="warm-glow bg-brand-dark py-24 md:py-36">
      <div className="mx-auto max-w-6xl px-5">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-4 font-body text-xs font-bold uppercase tracking-[0.2em] text-cream/40">
            {t.findUs.eyebrow}
          </p>
          <h2 className="font-display text-4xl font-bold text-cream md:text-5xl">
            {headline1}<br />
            <span className="italic">{headline2}</span>
          </h2>
        </motion.div>

        {/* Two columns */}
        <div className="grid gap-10 md:grid-cols-2 md:gap-12">

          {/* Left — upcoming events */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55 }}
            className="rounded-3xl bg-brand/50 p-8 backdrop-blur"
          >
            <div className="mb-6 flex items-center gap-3">
              <CalendarIcon className="h-5 w-5 text-cream/60" />
              <h3 className="font-body text-sm font-bold uppercase tracking-widest text-cream/60">
                {t.findUs.leftTitle}
              </h3>
            </div>

            {upcomingEvents.length === 0 ? (
              <div>
                <p className="mb-3 font-body text-xs font-bold uppercase tracking-widest text-cream/50">
                  {t.findUs.openingEyebrow}
                </p>
                <p className="mb-2 font-display text-2xl font-bold text-cream">
                  {t.hero.eventMeta}
                </p>
                <p className="mb-6 text-base leading-relaxed text-cream/60">
                  {t.findUs.openingBody}
                </p>
                <a
                  href={lang === 'de' ? '/eroeffnung/' : '/opening/'}
                  className="inline-flex items-center gap-2 rounded-full bg-cream px-6 py-3.5 font-body text-sm font-bold text-brand transition-transform hover:scale-[1.03] active:scale-95"
                >
                  {t.hero.primaryCTA}
                </a>
              </div>
            ) : (
              <ul className="space-y-4">
                {upcomingEvents.map((ev, i) => (
                  <li key={i} className="border-b border-cream/10 pb-4 last:border-0 last:pb-0">
                    <p className="font-body text-sm font-semibold text-cream/50">{ev.date} · {ev.type}</p>
                    <p className="mt-1 font-display text-lg font-bold text-cream">{ev.location}</p>
                    <p className="font-body text-sm text-cream/60">{ev.city}</p>
                  </li>
                ))}
              </ul>
            )}
          </motion.div>

          {/* Right — Instagram */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="flex flex-col items-start justify-center rounded-3xl bg-brand/50 p-8 backdrop-blur"
          >
            <InstagramIcon className="mb-6 h-10 w-10 text-cream/60" />
            <h3 className="mb-3 font-display text-2xl font-bold text-cream">
              {t.findUs.rightTitle}
            </h3>
            <p className="mb-8 text-base leading-relaxed text-cream/60">
              {t.findUs.rightBody}
            </p>
            <a
              href={links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-cream px-6 py-3.5 font-body text-sm font-bold text-brand transition-transform hover:scale-[1.03] active:scale-95"
            >
              <InstagramIcon className="h-4 w-4" />
              {t.findUs.cta}
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
