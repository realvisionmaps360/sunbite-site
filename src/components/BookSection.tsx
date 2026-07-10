import { useState } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../LanguageContext'
import { BookingPopover } from './BookingPopover'

const ICONS = [
  // 01 Weddings — interlocking rings + solitaire
  (<>
    <circle cx="18.5" cy="30" r="8.5"/>
    <circle cx="29.5" cy="30" r="8.5"/>
    <path d="M24 9 L27.6 13.5 L24 18 L20.4 13.5 Z"/>
    <path d="M21 13.5 L27 13.5"/>
  </>),
  // 02 Birthdays — layered cake + candle
  (<>
    <path d="M8 39 H40"/>
    <path d="M12 39 V27 Q12 25 14 25 H34 Q36 25 36 27 V39"/>
    <path d="M12 30 Q15 33 18 30 Q21 33 24 30 Q27 33 30 30 Q33 33 36 30"/>
    <path d="M24 18 V25"/>
    <path d="M24 13 Q26.5 15.5 24 18 Q21.5 15.5 24 13 Z"/>
  </>),
  // 03 Corporate Events — serving cloche
  (<>
    <path d="M7 37 H41"/>
    <path d="M11 37 Q11 20 24 20 Q37 20 37 37"/>
    <path d="M24 20 V15.5"/>
    <circle cx="24" cy="13" r="2.4"/>
  </>),
  // 04 Festivals — bunting flags
  (<>
    <path d="M6 13 Q24 23 42 13"/>
    <circle cx="6" cy="13" r="1.5"/>
    <circle cx="42" cy="13" r="1.5"/>
    <path d="M11 15.5 L15 16.6 L12.3 21.6 Z"/>
    <path d="M18.6 18 L22.6 18.4 L20.4 23.6 Z"/>
    <path d="M25.4 18.4 L29.4 18 L27.6 23.6 Z"/>
    <path d="M33 16.6 L37 15.5 L35.7 21.6 Z"/>
  </>),
  // 05 Private Celebrations — champagne bottle popping
  (<>
    <path d="M19 41 V27 Q19 23.5 22 23 V16 H26 V23 Q29 23.5 29 27 V41"/>
    <path d="M19 41 H29"/>
    <path d="M19 33 H29"/>
    <path d="M22.4 11.5 H25.6 V8.6 H22.4 Z"/>
    <path d="M30.5 12 L33.5 9 M17.5 12 L14.5 9 M24 7 V3.8"/>
  </>),
  // 06 Markets — market stall with awning
  (<>
    <path d="M8 18 V12 H40 V18"/>
    <path d="M8 18 Q11 23 14 18 Q17 23 20 18 Q23 23 26 18 Q29 23 32 18 Q35 23 38 18 L40 18"/>
    <path d="M11 18 V40"/>
    <path d="M37 18 V40"/>
    <path d="M11 33 H37"/>
  </>),
]

export function BookSection() {
  const { t } = useLanguage()
  const [hoverIdx, setHoverIdx] = useState<number | null>(null)
  const [openIdx, setOpenIdx]   = useState<number | null>(null)

  const isExpanded = (i: number) => hoverIdx === i || openIdx === i

  const handleClick = (i: number) =>
    setOpenIdx(prev => (prev === i ? null : i))

  return (
    <section
      id="book"
      style={{
        background: '#F5E6C8',
        padding: 'clamp(52px,8vw,100px) clamp(20px,5vw,44px)',
      }}
    >
      <div style={{ maxWidth: '1180px', margin: '0 auto' }}>

        {/* ── Editorial header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 'clamp(38px,5vw,60px)' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '16px' }}>
            <span style={{ width: '26px', height: '1.5px', background: 'rgba(132,20,18,0.5)', display: 'block' }} />
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '12.5px', fontWeight: 600, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#841412' }}>
              {t.book.eyebrow}
            </span>
            <span style={{ width: '26px', height: '1.5px', background: 'rgba(132,20,18,0.5)', display: 'block' }} />
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'clamp(34px,5.2vw,54px)', lineHeight: 1.05, letterSpacing: '-0.015em', color: 'hsl(1 25% 12%)', margin: 0 }}>
            {t.book.headline}
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(15px,2vw,17px)', lineHeight: 1.6, color: 'rgba(39,21,19,0.62)', maxWidth: '540px', margin: '16px auto 0' }}>
            {t.book.body}
          </p>
        </motion.div>

        {/* ── Card grid ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.15 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))',
            gap: 'clamp(18px,2.4vw,26px)',
            marginBottom: 'clamp(38px,5vw,60px)',
          }}
        >
          {t.book.categories.map((cat, i) => {
            const expanded = isExpanded(i)
            return (
              <div
                key={cat.label}
                tabIndex={0}
                role="button"
                aria-pressed={openIdx === i}
                onMouseEnter={() => setHoverIdx(i)}
                onMouseLeave={() => setHoverIdx(null)}
                onClick={() => handleClick(i)}
                onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') handleClick(i) }}
                onFocus={() => setHoverIdx(i)}
                onBlur={() => setHoverIdx(null)}
                style={{
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  padding: '44px 30px 34px',
                  minHeight: '300px',
                  background: expanded ? '#F7ECD6' : 'hsl(40 55% 96%)',
                  border: `1px solid ${expanded ? 'rgba(132,20,18,0.42)' : 'rgba(132,20,18,0.15)'}`,
                  borderRadius: '12px',
                  boxShadow: expanded
                    ? '0 24px 46px -18px rgba(74,18,12,0.42),inset 0 0 0 1px rgba(245,230,200,0.9)'
                    : '0 10px 24px -16px rgba(74,18,12,0.30),inset 0 0 0 1px rgba(245,230,200,0.7)',
                  transform: expanded ? 'translateY(-8px)' : 'translateY(0)',
                  cursor: 'pointer',
                  transition: 'transform .5s cubic-bezier(.22,1,.36,1),box-shadow .5s,background .5s,border-color .5s',
                  outline: 'none',
                  userSelect: 'none',
                }}
              >
                {/* Index number */}
                <span style={{ position: 'absolute', top: '22px', left: '26px', fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 500, fontSize: '17px', color: 'rgba(132,20,18,0.42)', letterSpacing: '0.04em' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>

                {/* Arch icon window */}
                <div style={{
                  width: '132px', height: '132px',
                  borderRadius: '66px 66px 16px 16px',
                  background: expanded ? '#841412' : 'rgba(132,20,18,0.055)',
                  border: `1.5px solid ${expanded ? '#841412' : 'rgba(132,20,18,0.18)'}`,
                  marginBottom: '24px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'background .5s,border-color .5s',
                  color: expanded ? '#F5E6C8' : '#841412',
                }}>
                  <svg
                    viewBox="0 0 48 48" width="62" height="62"
                    fill="none" stroke="currentColor"
                    strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
                    style={{ transition: 'color .5s,transform .5s cubic-bezier(.22,1,.36,1)', transform: expanded ? 'scale(1.06)' : 'scale(1)' }}
                  >
                    {ICONS[i]}
                  </svg>
                </div>

                {/* Title */}
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'clamp(22px,2.6vw,26px)', letterSpacing: '-0.01em', color: 'hsl(1 25% 12%)', margin: 0 }}>
                  {cat.label}
                </h3>

                {/* Divider */}
                <div style={{ width: '34px', height: '2px', background: 'rgba(132,20,18,0.45)', borderRadius: '2px', marginTop: '14px', flexShrink: 0 }} />

                {/* Tagline — reveal on expand */}
                <p style={{
                  fontFamily: 'var(--font-body)', fontStyle: 'italic', fontSize: '15px', lineHeight: 1.5,
                  color: 'rgba(39,21,19,0.64)', maxWidth: '250px',
                  maxHeight: expanded ? '100px' : '0',
                  opacity: expanded ? 1 : 0,
                  margin: expanded ? '14px auto 0' : '0 auto',
                  transform: expanded ? 'translateY(0)' : 'translateY(8px)',
                  overflow: 'hidden',
                  transition: 'max-height .5s cubic-bezier(.22,1,.36,1),opacity .45s,transform .5s,margin-top .5s',
                }}>
                  {cat.tagline}
                </p>
              </div>
            )
          })}
        </motion.div>

        {/* ── CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <BookingPopover
            label={t.book.cta}
            align="center"
            triggerClassName="inline-flex items-center justify-center rounded-full bg-brand px-10 py-4 font-body text-base font-bold text-cream shadow-lg transition-transform hover:scale-[1.03] active:scale-95"
          />
          <p className="mt-4 font-body text-sm text-ink/40">{t.book.trust}</p>
        </motion.div>

      </div>
    </section>
  )
}
