import { ArrowUpRight } from '../components/Icons'
import { SectionHeading } from '../components/SectionHeading'
import { projects } from '../data/portfolio'
import type { CSSProperties } from 'react'

function ArchitectureMap() {
  const nodes = ['sales', 'inventory', 'financial', 'fiscal', 'payments', 'customers', 'returns', 'shipping', 'AI']
  return <div className="architecture-map" role="img" aria-label="K-Libra domain map">
    <span className="map-core">K</span>
    <svg viewBox="0 0 400 300" aria-hidden="true"><path d="M200 150 65 62M200 150 195 28M200 150 336 60M200 150 64 151M200 150 336 150M200 150 65 240M200 150 195 272M200 150 336 240" /></svg>
    {nodes.map((node, index) => <span key={node} className={`map-node node-${index}`}>{node}</span>)}
  </div>
}

export function Work() {
  return <section id="work" className="section work-section" aria-labelledby="work-title">
    <SectionHeading id="work-title" number="01" eyebrow="Selected work" title="Products with operational weight." copy="The work here is selected for the boundaries it has to hold—not for a visual catalogue of tools." />
    <div className="project-list">
      {projects.map((project, index) => <article className={`project-card project-${project.id}`} key={project.id} data-reveal>
        <div className="project-card-main">
          <div className="project-card-top"><span className="project-number">{project.label}</span><p>{project.eyebrow}</p></div>
          <h3>{project.title}</h3><p className="project-lead">{project.description}</p><p className="project-detail">{project.detail}</p>
          <div className="project-tags" aria-label={`${project.title} capabilities`}>{project.capabilities.map((item) => <span key={item}>{item}</span>)}</div>
          <div className="project-links">{project.links.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.label}<ArrowUpRight size={16} /></a>)}</div>
        </div>
        <div className="project-visual">
          {index === 0 ? <ArchitectureMap /> : <div className="audio-visual" role="img" aria-label="Vocal Flow signal composition"><div className="audio-header"><span>TRACK_STUDIO</span><i>SYNCED</i></div><div className="audio-wave">{Array.from({ length: 32 }, (_, waveIndex) => <i key={waveIndex} style={{ '--wave': `${25 + ((waveIndex * 37) % 65)}%` } as CSSProperties} />)}</div><div className="audio-timeline"><span /><span /><span /><span /><b /></div><div className="audio-legend"><span>private stems</span><span>local pitch</span><span>aligned MIDI</span></div></div>}
          <div className="visual-caption"><span>system view</span><span>{project.stack.join(' · ')}</span></div>
        </div>
      </article>)}
    </div>
  </section>
}
