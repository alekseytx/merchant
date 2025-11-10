import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { Container } from "@/components/container"
import { Section } from "@/components/section"
import { Button } from "@/components/button"

export const metadata: Metadata = {
  title: "Solutions | Merchant Industry",
  description: "Comprehensive payment processing solutions for every business need",
}

export default function SolutionsPage() {
  return (
    <div>
      <PageHero
        title="Payment Solutions"
        description="Comprehensive processing solutions designed for your business needs"
      />

      <Section eyebrow="Our Offerings" title="Solutions Built for Success">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "E-Commerce", description: "Online payment processing with shopping cart integration" },
              { title: "Mobile Payments", description: "Fast, secure mobile payment acceptance" },
              { title: "In-Store", description: "POS system integration for retail locations" },
            ].map((solution, idx) => (
              <div key={idx} className="rounded-2xl border border-border bg-card p-8">
                <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
                <p className="text-muted-foreground mb-4">{solution.description}</p>
                <Button variant="secondary">Learn More</Button>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-primary/5">
        <Container className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to implement a solution?</h2>
          <p className="text-muted-foreground mb-6">Contact our team for a personalized consultation</p>
          <Button size="lg">Get Started</Button>
        </Container>
      </Section>
    </div>
  )
}
