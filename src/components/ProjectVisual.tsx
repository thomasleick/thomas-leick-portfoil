import type { ProjectVisual as ProjectVisualContent } from '../data/portfolio'

type ProjectVisualProps = {
  visual: ProjectVisualContent
  projectId: string
}

export function ProjectVisual({ visual, projectId }: ProjectVisualProps) {
  const titleId = projectId + '-visual-title'

  if (visual.type === 'domains') {
    return (
      <figure className="case-diagram domain-diagram" aria-labelledby={titleId}>
        <figcaption id={titleId} className="diagram-heading">
          <span className="diagram-mark">K / 01</span>
          <span>{visual.label}</span>
        </figcaption>
        <div className="domain-grid">
          {visual.nodes.map((node) => <span key={node}>{node}</span>)}
        </div>
        <div className="ai-assistance-layer">
          <span className="ai-assistance-mark">AI</span>
          <div><strong>{visual.aiLabel}</strong><p>{visual.aiDescription}</p></div>
        </div>
        <p className="diagram-caption">{visual.caption}</p>
      </figure>
    )
  }

  if (visual.type === 'vocalis') {
    return (
      <figure className="case-diagram vocal-diagram" aria-labelledby={titleId}>
        <figcaption id={titleId} className="diagram-heading">
          <span className="diagram-mark">VO / 02</span>
          <span>{visual.label}</span>
        </figcaption>
        <section className="diagram-track product-track" aria-label={visual.productLabel}>
          <h4>{visual.productLabel}</h4>
          <ol className="flow-steps">
            {visual.productSteps.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, '0')}</span>{step}</li>)}
          </ol>
          <p className="flow-feedback"><i aria-hidden="true" />{visual.productFeedback}</p>
        </section>
        <section className="diagram-track research-track" aria-label={visual.researchLabel}>
          <h4>{visual.researchLabel}</h4>
          <ol className="flow-steps research-steps">
            {visual.researchSteps.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, '0')}</span>{step}</li>)}
          </ol>
          <div className="ground-truth">{visual.groundTruth}</div>
          <ul className="uncertainty-states">
            {visual.outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}
          </ul>
        </section>
        <p className="diagram-caption">{visual.caption}</p>
      </figure>
    )
  }

  return (
    <figure className="case-diagram agent-diagram" aria-labelledby={titleId}>
      <figcaption id={titleId} className="diagram-heading">
        <span className="diagram-mark">AI / 03</span>
        <span>{visual.label}</span>
      </figcaption>
      <ol className="agent-flow">
        {visual.steps.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, '0')}</span><strong>{step}</strong></li>)}
      </ol>
      <div className="evaluation-system">
        <h4>{visual.systemLabel}</h4>
        <ul>{visual.systemParts.map((part) => <li key={part}>{part}</li>)}</ul>
      </div>
      <p className="diagram-caption">{visual.caption}</p>
    </figure>
  )
}
