import { SectionHeading } from '../components/SectionHeading'
import type { Locale } from '../data/portfolio'

export function Founder({ locale }: { locale: Locale }) {
  const isPortuguese = locale === 'pt'

  return (
    <section id="about" className="section founder-section" aria-labelledby="about-title">
      <SectionHeading
        id="about-title"
        number="03"
        eyebrow={isPortuguese ? 'Sobre / fundador' : 'About / founder'}
        title={isPortuguese ? 'Thomas Leick' : 'Thomas Leick'}
        copy={isPortuguese ? 'Fundador e engenheiro de software.' : 'Founder and software engineer.'}
      />
      <div className="founder-layout" data-reveal>
        <figure className="founder-portrait">
          <img src="/assets/brand/thomas-profile-neon.webp" width="1254" height="1254" alt={isPortuguese ? 'Retrato de Thomas Leick com o aro de luz azul e rosa ao redor.' : 'Portrait of Thomas Leick framed by a blue and pink neon ring.'} loading="lazy" />
          <figcaption>{isPortuguese ? 'Thomas Leick — fundador e engenheiro de software' : 'Thomas Leick — founder and software engineer'}</figcaption>
        </figure>
        <div className="founder-links">
          <p>{isPortuguese ? 'A trajetória profissional e as experiências que sustentam este trabalho estão descritas nas seções a seguir.' : 'The professional path and experience behind this work are described in the sections that follow.'}</p>
          <a className="text-link" href="#career">{isPortuguese ? 'Ver trajetória profissional' : 'Explore professional experience'} <span aria-hidden="true">↘</span></a>
          <a className="text-link" href="#outside-runtime">{isPortuguese ? 'Conhecer além do trabalho' : 'A little beyond work'} <span aria-hidden="true">↘</span></a>
        </div>
      </div>
    </section>
  )
}
