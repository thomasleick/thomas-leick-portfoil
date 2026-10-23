import { content, profile, type Locale } from '../data/portfolio'
import { ArrowUpRight } from '../components/Icons'

export function Hero({ locale }: { locale: Locale }) {
  const copy = content[locale].hero

  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="hero-grid" aria-hidden="true" />
      <svg className="infinity-line" viewBox="0 0 560 240" fill="none" aria-hidden="true"><path d="M30 120c63-110 143-110 215 0s151 110 285 0c-63-110-143-110-215 0S164 230 30 120Z" /></svg>
      <div className="hero-content"><span className="hero-brand-kicker"><span className="brand-mini-mark" aria-hidden="true">LS</span> Leick &amp; S. <span>SOFTWARE</span></span>
        <p className="eyebrow hero-eyebrow"><span className="status-dot" aria-hidden="true" />{copy.eyebrow}</p>
        <h1 id="hero-title">{copy.lineOne}<br /><em>{copy.emphasis}</em><br />{copy.lineThree}</h1>
        <p className="hero-intro">{copy.introduction}</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#work">{copy.workCta}<ArrowUpRight size={18} /></a>
          <a className="text-link" href="#contact">{copy.contactCta}<span aria-hidden="true">↘</span></a>
        </div>
      </div>
      <aside className="hero-portrait-slot" aria-label={copy.portraitLabel}>
        <picture><source type="image/avif" srcSet="/profile.avif" /><source type="image/webp" srcSet="/profile.webp" /><img className="portrait-image" src="/profile.webp" width="720" height="912" fetchPriority="high" decoding="async" alt={copy.portraitLabel} /></picture>
        <div className="portrait-corner portrait-corner-a" aria-hidden="true" /><div className="portrait-corner portrait-corner-b" aria-hidden="true" />
        <div className="portrait-orbit" aria-hidden="true" />
        <p>{locale === 'en' ? profile.name : 'Thomas Andrioli Leick'}<br /><strong>{locale === 'en' ? 'systems builder' : 'construtor de sistemas'}</strong></p>
      </aside>
      <div className="hero-brand-glow" aria-hidden="true"><span className="brand-prism prism-one"/><span className="brand-prism prism-two"/><span className="brand-prism prism-three"/><span className="brand-prism prism-four"/><span className="brand-cube-label">L<span>S</span></span></div><div className="hero-meta"><span>{copy.location}</span><span>01 — 05</span><span>{copy.scrollHint}</span></div>
      <div className="hero-system-note"><span className="note-label">{copy.principleLabel}</span><strong>{copy.principle}</strong><span>{copy.principleNote}</span></div>
    </section>
  )
}
