import type React from "react"
interface SectionProps {
  id?: string
  children: React.ReactNode
  className?: string
  eyebrow?: string
  title?: string
}

export function Section({ id, children, className = "", eyebrow, title }: SectionProps) {
  return (
    <section id={id} className={`py-20 sm:py-28 ${className}`}>
      {eyebrow || title ? (
        <div className="mb-12 text-center">
          {eyebrow && <p className="text-sm font-semibold tracking-wide text-primary mb-2">{eyebrow}</p>}
          {title && <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">{title}</h2>}
        </div>
      ) : null}
      {children}
    </section>
  )
}
