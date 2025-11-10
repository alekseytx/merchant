import { Container } from "./container"

interface PageHeroProps {
  title: string
  description?: string
}

export function PageHero({ title, description }: PageHeroProps) {
  return (
    <section className="border-b border-border py-20 sm:py-28">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-6">{title}</h1>
          {description && <p className="text-xl text-muted-foreground">{description}</p>}
        </div>
      </Container>
    </section>
  )
}
