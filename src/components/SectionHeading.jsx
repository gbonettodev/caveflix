function SectionHeading({ eyebrow, title, description, action }) {
  return (
    <div className="section-heading mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
      <div>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2 className="section-title mt-3">{title} <span className="heading-arrow">›</span></h2>
        {description && <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">{description}</p>}
      </div>
      {action}
    </div>
  )
}

export default SectionHeading
