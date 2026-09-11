import { SectionHeading } from '../components/SectionHeading'
import { capabilities, experience } from '../data/portfolio'

export function Engineering() {
  return <section id="engineering" className="section engineering-section" aria-labelledby="engineering-title">
    <SectionHeading id="engineering-title" number="02" eyebrow="Engineering responsibility" title="Technology follows the boundary." copy="The stack is useful because it helps carry a real responsibility. These are the concerns surfaced by the products in this portfolio." />
    <div className="capability-grid">
      {capabilities.map((capability) => <article className="capability-card" key={capability.index} data-reveal><span className="capability-index">{capability.index}</span><h3>{capability.title}</h3><p>{capability.text}</p><div>{capability.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></article>)}
    </div>
    <div className="principle-strip" data-reveal><p>Good systems make the next valid action visible.</p><span>Principle / 0x01</span></div>
    <div className="journey" data-reveal><div className="journey-heading"><p className="eyebrow">Selected journey</p><h3>Context earned across domains.</h3></div><div className="journey-list">{experience.map((item) => <article key={`${item.company}-${item.period}`}><div><strong>{item.company}</strong><span>{item.role}</span></div><time>{item.period}</time><p>{item.focus}</p></article>)}</div></div>
  </section>
}
