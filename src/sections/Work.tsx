import { ArrowUpRight } from '../components/Icons'
import { ProjectVisual } from '../components/ProjectVisual'
import { SectionHeading } from '../components/SectionHeading'
import { content, type Locale, type ProjectCase } from '../data/portfolio'

function CaseStudy({ project }: { project: ProjectCase }) {
  return (
    <article className={'project-card project-' + project.id} id={project.id} tabIndex={-1} aria-labelledby={project.id + '-title'} data-reveal>
      <div className="project-card-main">
        <div className="project-card-top">
          <span className="project-number">{project.number}</span>
          <p>{project.category}</p>
        </div>
        <h3 id={project.id + '-title'} tabIndex={-1}>{project.title}</h3>
        <p className="project-lead">{project.summary}</p>

        <div className="case-facts">
          <section className="case-fact">
            <h4>{project.challengeLabel}</h4>
            <p>{project.challenge}</p>
          </section>
          <section className="case-fact case-ownership">
            <h4>{project.roleLabel}</h4>
            <p>{project.role}</p>
          </section>
        </div>

        <section className="case-decisions">
          <h4>{project.decisionsLabel}</h4>
          <ol>
            {project.decisions.map((decision, index) => (
              <li key={decision.title}>
                <span className="decision-index">{String(index + 1).padStart(2, '0')}</span>
                <div><strong>{decision.title}</strong><p>{decision.detail}</p></div>
              </li>
            ))}
          </ol>
        </section>

        <section className="case-evidence">
          <h4>{project.evidenceLabel}</h4>
          <p>{project.evidence}</p>
        </section>

        <div className="case-stack">
          <h4>{project.stackLabel}</h4>
          <ul aria-label={project.stackLabel}>
            {project.stack.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>

        {project.links.length > 0 ? (
          <div className="project-links">
            {project.links.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
                {link.label}<ArrowUpRight size={16} />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            ))}
          </div>
        ) : null}
      </div>
      <div className="project-visual">
        <ProjectVisual visual={project.visual} projectId={project.id} />
      </div>
    </article>
  )
}

export function Work({ locale }: { locale: Locale }) {
  const copy = content[locale].work

  return (
    <section id="work" className="section work-section" aria-labelledby="work-title">
      <SectionHeading id="work-title" number="01" eyebrow={copy.eyebrow} title={copy.title} copy={copy.introduction} />
      <div className="trust-questions" aria-label={copy.questionsLabel}>
        {copy.questions.map((item, index) => (
          <a className="trust-question" href={'#' + item.project.toLowerCase().replace(' ', '-')} key={item.project}>
            <span>{String(index + 1).padStart(2, '0')} / {item.project}</span>
            <strong>{item.question}</strong>
          </a>
        ))}
      </div>
      <div className="project-list">
        {copy.cases.map((project) => <CaseStudy key={project.id} project={project} />)}
      </div>
    </section>
  )
}
