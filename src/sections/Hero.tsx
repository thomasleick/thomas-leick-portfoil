import { ArrowUpRight } from '../components/Icons'

export function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="hero-grid" aria-hidden="true" />
      <svg className="infinity-line" viewBox="0 0 560 240" fill="none" aria-hidden="true"><path d="M30 120c63-110 143-110 215 0s151 110 285 0c-63-110-143-110-215 0S164 230 30 120Z" /></svg>
      <div className="hero-content">
        <p className="eyebrow hero-eyebrow"><span className="status-dot" />Available for deliberate systems</p>
        <h1 id="hero-title">Engineering the<br /><em>structure</em> behind<br />serious products.</h1>
        <p className="hero-intro">Thomas Andrioli Leick is a senior software engineer and systems builder. He works where product, infrastructure, data and business rules meet.</p>
        <div className="hero-actions"><a className="button button-primary" href="#work">Explore selected work <ArrowUpRight size={18} /></a><a className="text-link" href="#contact">Start a conversation <span>↘</span></a></div>
      </div>
      <aside className="hero-portrait-slot" aria-label="Portrait of Thomas Andrioli Leick">
        <picture><source type="image/avif" srcSet="/profile.avif" /><source type="image/webp" srcSet="/profile.webp" /><img className="portrait-image" src="/profile.webp" width="720" height="912" fetchPriority="high" decoding="async" alt="Portrait of Thomas Andrioli Leick wearing glasses" /></picture>
        <div className="portrait-corner portrait-corner-a" /><div className="portrait-corner portrait-corner-b" />
        <div className="portrait-orbit" aria-hidden="true"><span /></div>
        <p>Thomas / systems builder<br /><strong>portrait source</strong></p>
        <small>asset.local / 01</small>
      </aside>
      <div className="hero-meta"><span>São Paulo, BR</span><span>01 — 04</span><span>Scroll to inspect</span></div>
      <div className="hero-system-note"><span className="note-label">Current concern</span><strong>Complexity deserves an interface.</strong><span>trace / model / refine</span></div>
    </section>
  )
}
