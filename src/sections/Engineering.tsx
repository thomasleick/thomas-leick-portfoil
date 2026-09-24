import { SectionHeading } from '../components/SectionHeading'
import { content, type Locale } from '../data/portfolio'

export function Engineering({ locale }: { locale: Locale }) {
  const copy = content[locale].engineering

  return (
    <section id="engineering" className="section engineering-section" aria-labelledby="engineering-title">
      <SectionHeading id="engineering-title" number="02" eyebrow={copy.eyebrow} title={copy.title} copy={copy.introduction} />
      <div className="capability-grid">
        {copy.capabilities.map((capability) => (
          <article className="capability-card" key={capability.index} data-reveal>
            <span className="capability-index">{capability.index}</span>
            <h3>{capability.title}</h3>
            <p>{capability.text}</p>
            <ul>{capability.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
          </article>
        ))}
      </div>
      <div className="principle-strip" data-reveal>
        <p>{copy.principle}</p>
        <span>{copy.principleLabel}</span>
      </div>
    </section>
  )
}
