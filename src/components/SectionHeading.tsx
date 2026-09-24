type SectionHeadingProps = {
  id: string
  number: string
  eyebrow: string
  title: string
  copy?: string
}

export function SectionHeading({ id, number, eyebrow, title, copy }: SectionHeadingProps) {
  return (
    <div className="section-heading" data-reveal>
      <div className="section-index"><span>{number}</span><i aria-hidden="true" /></div>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 id={id} tabIndex={-1}>{title}</h2>
        {copy ? <p className="section-copy">{copy}</p> : null}
      </div>
    </div>
  )
}
