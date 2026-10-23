import { SectionHeading } from '../components/SectionHeading'
import type { Locale } from '../data/portfolio'

const stages = [
  { image: 'manifesto-project.webp', pt: 'PROJETAR', en: 'DESIGN' },
  { image: 'manifesto-analyze.webp', pt: 'ANALISAR', en: 'ANALYZE' },
  { image: 'manifesto-develop.webp', pt: 'DESENVOLVER', en: 'DEVELOP' },
  { image: 'manifesto-integrate.webp', pt: 'INTEGRAR', en: 'INTEGRATE' },
]

export function Manifesto({ locale }: { locale: Locale }) {
  const isPortuguese = locale === 'pt'

  return (
    <section id="manifesto" className="section manifesto-section" aria-labelledby="manifesto-title">
      <SectionHeading
        id="manifesto-title"
        number="∞"
        eyebrow={isPortuguese ? 'Manifesto / método' : 'Manifesto / method'}
        title={isPortuguese ? 'Cada parte tem um propósito.' : 'Every piece has a purpose.'}
        copy={isPortuguese ? 'Pensar em sistemas é entender como as partes se conectam — e construir cada uma com intenção.' : 'Thinking in systems means understanding how the parts connect—and building each one with purpose.'}
      />
      <ol className="manifesto-stages">
        {stages.map((stage) => (
          <li key={stage.image}>
            <figure>
              <img src={'/assets/brand/' + stage.image} alt="" width="900" height="560" loading="lazy" />
              <figcaption>{isPortuguese ? stage.pt : stage.en}</figcaption>
            </figure>
          </li>
        ))}
      </ol>
      <div className="manifesto-signature">
        <p>{isPortuguese ? 'Pense em sistemas. Construa com propósito.' : 'Think in systems. Build with purpose.'}</p>
        <strong>{isPortuguese ? 'PROJETAR. INTEGRAR. AUTOMATIZAR. EVOLUIR.' : 'DESIGN. INTEGRATE. AUTOMATE. EVOLVE.'}</strong>
      </div>
    </section>
  )
}
