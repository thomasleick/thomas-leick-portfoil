import { ArrowUpRight } from '../components/Icons'
import { SectionHeading } from '../components/SectionHeading'
import { content, profile, type Locale } from '../data/portfolio'

export function OutsideRuntime({ locale }: { locale: Locale }) {
  const copy = content[locale].outside

  return (
    <section id="outside-runtime" className="section outside-section" aria-labelledby="outside-runtime-title">
      <SectionHeading id="outside-runtime-title" number="04" eyebrow={copy.eyebrow} title={copy.title} copy={copy.introduction} />
      <div className="outside-layout">
        <div className="personal-note" data-reveal>
          <span className="note-label">{copy.noteLabel}</span>
          <p>{copy.note}</p>
          <div className="barbell-line" aria-hidden="true"><i /><b /><span /><b /><i /></div>
          <small>{copy.noteCaption}</small>
        </div>
        <div className="signal-list">
          {copy.signals.map((signal) => (
            <article key={signal.mark} data-reveal>
              <span aria-hidden="true">{signal.mark}</span>
              <div><h3>{signal.title}</h3><p>{signal.text}</p></div>
            </article>
          ))}
        </div>
      </div>
      <a className="chess-link" href={profile.links.chess} target="_blank" rel="noopener noreferrer" data-reveal>
        <span className="chess-square" aria-hidden="true">♞</span>
        <span><small>{copy.chessLabel}</small>{copy.chessLink}</span>
        <ArrowUpRight size={19} />
      </a>
    </section>
  )
}
