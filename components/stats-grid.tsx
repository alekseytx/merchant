interface Stat {
  metric: string
  value: string
}

interface StatsGridProps {
  stats: Stat[]
}

export function StatsGrid({ stats }: StatsGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, idx) => (
        <div key={idx} className="rounded-2xl border border-border bg-card p-6">
          <p className="text-sm font-medium text-muted-foreground mb-1">{stat.metric}</p>
          <p className="text-3xl font-bold text-foreground">{stat.value}</p>
        </div>
      ))}
    </div>
  )
}
