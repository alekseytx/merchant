import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { Container } from "@/components/container"
import { Section } from "@/components/section"

export const metadata: Metadata = {
  title: "Resources | Merchant Industry",
  description: "Documentation, guides, and resources",
}

export default function ResourcesPage() {
  return (
    <div>
      <PageHero title="Resources & Guides" description="Everything you need to get started and succeed" />

      <Section eyebrow="Available Soon" title="Documentation Coming">
        <Container className="text-center">
          <p className="text-lg text-muted-foreground mb-6">
            We're building comprehensive documentation and guides for our platform. Check back soon.
          </p>
        </Container>
      </Section>
    </div>
  )
}
