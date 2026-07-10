import { InstagramIcon } from './Icons'
import { useLanguage } from '../LanguageContext'
import { links } from '../links'

export function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()
  return (
    <footer className="bg-brand-dark py-12 text-cream/75">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-5 md:flex-row md:justify-between">

        <div className="text-center md:text-left">
          <p className="font-script text-2xl text-cream">{`Sunbite.ch`}</p>
          <p className="mt-1 font-script text-lg text-cream/60">{t.footer.slogan}</p>
        </div>

        <a
          href={links.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-cream/25 px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-cream/10"
        >
          <InstagramIcon className="h-4 w-4" />
          @sunbite.ch
        </a>

        <div className="text-center text-xs text-cream/40 md:text-right">
          <p>© {year} Sunbite.ch · {t.footer.rights}</p>
          <a
            href={links.realVision}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-block transition-colors hover:text-cream/70"
          >
            {t.footer.builtBy}
          </a>
        </div>
      </div>
    </footer>
  )
}
