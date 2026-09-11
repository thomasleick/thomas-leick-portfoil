import { ArrowUpRight } from '../components/Icons'
import { SectionHeading } from '../components/SectionHeading'
import { personalSignals, profile } from '../data/portfolio'

export function OutsideRuntime() {
  return <section id="outside-runtime" className="section outside-section" aria-labelledby="outside-title">
    <SectionHeading id="outside-title" number="03" eyebrow="Outside the runtime" title="Precision has a life beyond the terminal." copy="The personal references are signals, not a costume: long practice, strategic play and a preference for meaningful detail." />
    <div className="outside-layout">
      <div className="personal-note" data-reveal><span className="note-label">A working thesis</span><p>Discipline compounds when the feedback loop is honest.</p><div className="barbell-line" aria-hidden="true"><i /><b /><span /><b /><i /></div><small>progressive overload / systems iteration</small></div>
      <div className="signal-list">{personalSignals.map((signal) => <article key={signal.title} data-reveal><span>{signal.mark}</span><div><h3>{signal.title}</h3><p>{signal.text}</p></div></article>)}</div>
    </div>
    <a className="chess-link" href={profile.links.chess} target="_blank" rel="noreferrer" data-reveal><span className="chess-square">♞</span><span><small>Side channel</small>Find the player on Chess.com</span><ArrowUpRight size={19} /></a>
  </section>
}
