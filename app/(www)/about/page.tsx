import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { Container } from "@/components/container"
import { Section } from "@/components/section"

export const metadata: Metadata = {
  title: "About | Merchant Industry",
  description: "Learn about Merchant Industry's mission and values",
}

export default function AboutPage() {
  return (
    <div>
      <PageHero title="About Merchant Industry" description="Pioneering payment processing solutions since 2015" />

      <Section eyebrow="Our Story" title="Leading the Payment Revolution">
        <Container className="max-w-3xl mx-auto">
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              Merchant Industry was founded with a simple mission: to democratize payment processing for businesses of
              all sizes.
            </p>
            <p>
              Today, we process over 500 million transactions annually for thousands of companies across the globe. Our
              platform combines cutting-edge technology with world-class support to deliver an unmatched payment
              processing experience.
            </p>
            <p>
              We believe that payment processing should be simple, secure, and scalable. That's why we've invested
              heavily in infrastructure, security, and customer support.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="bg-primary/5" title="Our Values">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Security First", description: "Your data security is our top priority" },
              { title: "Customer Success", description: "Your success is our success" },
              { title: "Innovation", description: "Constantly evolving to serve you better" },
            ].map((value, idx) => (
              <div key={idx} className="text-center">
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  )
}
