import type { ProjectVisual as ProjectVisualContent } from '../data/portfolio'

type ProjectVisualProps = {
  visual: ProjectVisualContent
  projectId: string
}

type NetworkMapProps = {
  kind: 'domains' | 'agent'
  core: string
  nodes: readonly string[]
  ariaLabel: string
}

const domainEdges = [
  'M 188 139 L 78 62',
  'M 197 137 L 196 43',
  'M 213 140 L 321 66',
  'M 185 150 L 76 150',
  'M 215 150 L 322 150',
  'M 188 162 L 91 236',
  'M 200 164 L 199 259',
  'M 213 162 L 309 235',
  'M 211 140 L 287 83',
] as const

const agentEdges = [
  'M 188 139 L 78 62',
  'M 197 137 L 196 43',
  'M 213 140 L 321 66',
  'M 187 162 L 82 232',
  'M 200 164 L 199 258',
  'M 214 162 L 313 229',
] as const

function NetworkMap({ kind, core, nodes, ariaLabel }: NetworkMapProps) {
  const markerId = `${kind}-network-arrow`
  const edges = kind === 'domains' ? domainEdges : agentEdges

  return (
    <div className={`network-map ${kind}-network-map`} role="img" aria-label={ariaLabel}>
      <svg viewBox="0 0 400 300" aria-hidden="true" focusable="false">
        <defs>
          <marker id={markerId} markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto" markerUnits="userSpaceOnUse">
            <path d="M 0 0 L 8 4 L 0 8 Z" />
          </marker>
        </defs>
        {edges.map((edge) => <path key={edge} d={edge} markerEnd={`url(#${markerId})`} />)}
      </svg>
      <span className="network-core">{core}</span>
      {nodes.map((node, index) => <span key={node} className={`network-node network-node-${index}`}>{node}</span>)}
    </div>
  )
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
        <NetworkMap kind="domains" core="K" nodes={visual.nodes} ariaLabel="K-Libra domain map with connected system boundaries" />
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
      <NetworkMap kind="agent" core="AI" nodes={visual.steps} ariaLabel="AI-SDLC governed evaluation lifecycle with connected stages" />
      <div className="evaluation-system">
        <h4>{visual.systemLabel}</h4>
        <ul>{visual.systemParts.map((part) => <li key={part}>{part}</li>)}</ul>
      </div>
      <p className="diagram-caption">{visual.caption}</p>
    </figure>
  )
}
