interface Stat {
  metric: string          // e.g. "Annual Processing Volume"
  value: string           // e.g. "$500M+"
  description?: string    // e.g. "Processed for merchants each year"
}

interface StatsGridProps {
  stats: Stat[]
}

export function StatsGrid({ stats }: StatsGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, idx) => (
        <div
          key={idx}
          className="rounded-2xl border border-border bg-card p-6 flex flex-col"
        >
          {/* Big number */}
          <p className="text-3xl font-bold text-foreground">
            {stat.value}
          </p>

          {/* Short label under the number */}
          <p className="mt-1 text-sm font-semibold text-foreground">
            {stat.metric}
          </p>

          {/* Optional extra explanation – slightly larger now */}
          {stat.description && (
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              {stat.description}
            </p>
          )}
        </div>
      ))}
    </div>
  )
}
