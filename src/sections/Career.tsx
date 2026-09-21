import { SectionHeading } from '../components/SectionHeading'
import { content, type Locale } from '../data/portfolio'

export function Career({ locale }: { locale: Locale }) {
  const copy = content[locale].career

  return (
    <section id="career" className="section career-section" aria-labelledby="career-title">
      <SectionHeading id="career-title" number="03" eyebrow={copy.eyebrow} title={copy.title} copy={copy.introduction} />
      <div className="journey-list" data-reveal>
        {copy.experience.map((item) => (
          <article key={item.company + item.period}>
            <div><strong>{item.company}</strong><span>{item.role}</span></div>
            <time>{item.period}</time>
            <p>{item.focus}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
