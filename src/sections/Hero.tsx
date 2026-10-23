import { content, type Locale } from '../data/portfolio'

export function Hero({ locale }: { locale: Locale }) {
  const copy = content[locale].hero
  const imageAlt = locale === 'pt'
    ? 'Ambiente de trabalho da Leick & S. Software, com monitores, o cubo LS e o símbolo do infinito.'
    : 'Leick & S. Software workspace with monitors, the LS cube and an infinity symbol.'

  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <figure className="workspace-art">
        <picture>
          <source media="(max-width: 680px)" srcSet="/assets/brand/leick-workspace-hero-mobile.webp" />
          <img src="/assets/brand/leick-workspace-hero.webp" width="2048" height="762" alt={imageAlt} fetchPriority="high" />
        </picture>
      </figure>
      <div className="hero-copy">
        <p className="eyebrow">Leick &amp; S. Software / {locale === 'pt' ? 'engenharia digital' : 'digital engineering'}</p>
        <h1 id="hero-title"><span>{copy.lineOne}</span> <em>{copy.emphasis}</em><br />{copy.lineThree}</h1>
        <p className="hero-intro">{copy.introduction}</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#work">{copy.workCta}</a>
          <a className="text-link" href="#contact">{copy.contactCta}<span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
  )
}
