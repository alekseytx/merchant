import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { Container } from "@/components/container"
import { Section } from "@/components/section"
import { Button } from "@/components/button"

export const metadata: Metadata = {
  title: "Industries | Merchant Industry",
  description: "Industry-specific payment processing solutions",
}

export default function IndustriesPage() {
  return (
    <div>
      <PageHero title="Industries We Serve" description="Purpose-built solutions for specialized business verticals" />

      <Section eyebrow="Verticals" title="Industry Solutions">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {["Retail", "E-Commerce", "SaaS", "Hospitality", "Healthcare", "Nonprofits"].map((industry) => (
              <div
                key={industry}
                className="rounded-2xl border border-border bg-card p-8 hover:border-primary/50 transition-colors"
              >
                <h3 className="text-xl font-semibold mb-2">{industry}</h3>
                <p className="text-sm text-muted-foreground mb-4">Specialized features for {industry.toLowerCase()}</p>
                <Button variant="ghost" size="sm">
                  Explore
                </Button>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  )
}
