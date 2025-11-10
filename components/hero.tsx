import { Button } from "./button"
import { Container } from "./container"

interface HeroProps {
  eyebrow: string
  headline: string
  subheadline: string
  cta_primary: string
  cta_secondary: string
}

export function Hero({ eyebrow, headline, subheadline, cta_primary, cta_secondary }: HeroProps) {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="animate-fade-in">
            <p className="text-sm font-semibold tracking-wide text-primary mb-4">{eyebrow}</p>
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-6 text-balance">{headline}</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-lg text-balance">{subheadline}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                {cta_primary}
                <svg
                  className="h-4 w-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Button>
              <Button variant="secondary" size="lg">
                {cta_secondary}
              </Button>
            </div>
          </div>

          <div className="relative h-96 rounded-2xl border border-border bg-gradient-to-br from-primary/5 to-accent/5 overflow-hidden animate-fade-in-delayed">
            <div className="absolute inset-0 bg-grid-pattern opacity-5" />
            <svg
              viewBox="0 0 400 300"
              className="w-full h-full opacity-20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="400" height="300" fill="url(#grad)" />
              <defs>
                <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="currentColor" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="currentColor" stopOpacity="0.05" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </Container>
    </section>
  )
}
