import type * as React from "react"

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div
      className="
        group relative overflow-hidden
        rounded-2xl border border-border bg-card p-8
        transition-all hover:border-primary/60 hover:shadow-xl
      "
    >
      {/* subtle decorative glow, does not affect layout */}
      <div className="pointer-events-none absolute -top-16 -left-16 h-32 w-32 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative">
        <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}
