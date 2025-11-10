import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { Container } from "@/components/container"
import { Section } from "@/components/section"
import { Button } from "@/components/button"

export const metadata: Metadata = {
  title: "Pricing | Merchant Industry",
  description: "Simple, transparent pricing with no hidden fees",
}

export default function PricingPage() {
  return (
    <div>
      <PageHero
        title="Simple, Transparent Pricing"
        description="No hidden fees. No setup costs. Pay only for what you use."
      />

      <Section eyebrow="Plans" title="Choose Your Plan">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Starter",
                price: "$99",
                features: ["10K transactions/month", "Basic reporting", "Email support"],
              },
              {
                name: "Professional",
                price: "$299",
                features: ["100K transactions/month", "Advanced analytics", "Priority support"],
                highlighted: true,
              },
              { name: "Enterprise", price: "Custom", features: ["Unlimited", "Custom features", "Dedicated support"] },
            ].map((plan, idx) => (
              <div
                key={idx}
                className={`rounded-2xl border p-8 ${
                  plan.highlighted ? "border-primary bg-primary/5 ring-1 ring-primary/20" : "border-border bg-card"
                }`}
              >
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-3xl font-bold mb-6">{plan.price}</p>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-start gap-2 text-sm">
                      <span className="text-primary font-bold">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant={plan.highlighted ? "default" : "outline"} className="w-full">
                  Get Started
                </Button>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  )
}
