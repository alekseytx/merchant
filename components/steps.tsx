interface Step {
  number: string
  title: string
  description: string
}

interface StepsProps {
  steps: Step[]
}

export function Steps({ steps }: StepsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {steps.map((step, idx) => (
        <div key={idx} className="relative">
          {idx < steps.length - 1 && (
            <div className="hidden md:block absolute top-12 left-[calc(50%+80px)] right-[calc(-50%+80px)] h-1 bg-gradient-to-r from-primary to-transparent" />
          )}
          <div className="relative z-10 rounded-2xl border border-border bg-card p-8">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground font-bold">
              {step.number}
            </div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-muted-foreground">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
