"use client"

import type React from "react"
import Link from "next/link"
import { useState } from "react"

import { Hero } from "@/components/hero"
import { Container } from "@/components/container"
import { Section } from "@/components/section"
import { FeatureCard } from "@/components/feature-card"
import { LogoMarquee } from "@/components/logo-marquee"
import { Steps } from "@/components/steps"
import { FAQ } from "@/components/faq"
import { Button } from "@/components/button"
import { StatsGrid } from "@/components/stats-grid"
import { GetStartedModal } from "@/components/get-started-modal"
import { homeConfig } from "@/content/home"

const iconMap: Record<string, React.ReactNode> = {
  Zap: (
    <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  Shield: (
    <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
      />
    </svg>
  ),
  Headphones: (
    <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  ),
  TrendingUp: (
    <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  ),
  CheckCircle: (
    <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  ),
  Plug: (
    <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  Store: (
    <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
      />
    </svg>
  ),
  ShoppingCart: (
    <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
      />
    </svg>
  ),
  Smartphone: (
    <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
      />
    </svg>
  ),
  Code: (
    <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  UtensilsCrossed: (
    <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v18m0 0l6-6m-6 6l-6-6" />
    </svg>
  ),
  Heart: (
    <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      />
    </svg>
  ),
  Building2: (
    <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
      />
    </svg>
  ),
  Briefcase: (
    <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m0 10v10l8 4m0-10l8 4"
      />
    </svg>
  ),
}

export default function HomePage() {
  const [showGetStartedModal, setShowGetStartedModal] = useState(false)

  return (
    <>
      {/* Hero Section */}
      <Hero {...homeConfig.hero} />

      {/* Stats Section */}
      <Section className="bg-primary/5 border-y border-border">
        <Container>
          <StatsGrid stats={homeConfig.stats} />
        </Container>
      </Section>

      {/* Trusted By */}
      <Section eyebrow="Trusted by Industry Leaders" title="Processing for Global Brands">
        <Container>
          <LogoMarquee logos={homeConfig.brands} />
        </Container>
      </Section>

      {/* Features */}
      <Section id="features" eyebrow="Why Choose Us" title="Enterprise-Grade Features">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {homeConfig.features.map((feature) => (
              <FeatureCard
                key={feature.id}
                icon={iconMap[feature.icon]}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* Solutions Section */}
      <Section
        id="solutions"
        eyebrow="Our Solutions"
        title="Payment Solutions for Every Business"
        className="bg-secondary/30"
      >
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {homeConfig.solutions.map((solution, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-border bg-card p-6 hover:border-primary/50 transition-colors cursor-pointer group"
              >
                <div className="mb-4">{iconMap[solution.icon]}</div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {solution.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{solution.description}</p>
                <Link href="#" className="text-sm font-medium text-primary hover:underline">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Industries Section */}
      <Section id="industries" eyebrow="By Industry" title="Solutions for Every Vertical">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {homeConfig.industries.map((industry, idx) => (
              <Link href="#" key={idx}>
                <div className="rounded-xl border border-border bg-card p-6 hover:border-primary/50 transition-all hover:shadow-md text-center cursor-pointer">
                  <div className="flex justify-center mb-3">{iconMap[industry.icon]}</div>
                  <p className="text-sm font-medium">{industry.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* How It Works */}
      <Section id="howitworks" eyebrow="Getting Started" title="Simple Integration Process">
        <Container>
          <Steps steps={homeConfig.steps} />
        </Container>
      </Section>

      {/* Pricing Section */}
      <Section id="pricing" eyebrow="Transparent Pricing" title="Choose Your Plan" className="bg-secondary/30">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {homeConfig.pricing.plans.map((plan, idx) => (
              <div
                key={idx}
                className={`rounded-2xl border p-8 transition-transform hover:scale-105 ${
                  plan.highlighted
                    ? "border-primary bg-primary/5 relative ring-1 ring-primary/20"
                    : "border-border bg-card"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                <p className="text-3xl font-bold mb-6">
                  {plan.rate}
                  {plan.rate !== "Custom" && <span className="text-sm text-muted-foreground ml-1">+ {plan.fee}</span>}
                </p>
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

      {/* Security Section */}
      <Section eyebrow="Your Data is Safe" title="Security & Compliance">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {homeConfig.security.features.map((item, idx) => (
              <div
                key={idx}
                className="rounded-lg border border-border bg-card p-6 text-center hover:border-primary/50 transition-colors"
              >
                <p className="text-sm font-semibold text-primary mb-2">{item.label}</p>
                <p className="text-xs text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section id="faq" eyebrow="Common Questions" title="Frequently Asked Questions" className="bg-secondary/30">
        <Container className="max-w-2xl">
          <FAQ items={homeConfig.faqs} />
        </Container>
      </Section>

      {/* Final CTA */}
      <Section className="bg-gradient-to-r from-primary/10 to-accent/10 border-t border-border">
        <Container className="text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto">
            Join hundreds of companies processing millions of transactions securely with PrimeSwipe.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setShowGetStartedModal(true)}
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition"
            >
              Start Free Trial
            </button>
            <Button variant="outline" size="lg">
              Schedule Demo
            </Button>
          </div>
        </Container>
      </Section>

      <GetStartedModal isOpen={showGetStartedModal} onClose={() => setShowGetStartedModal(false)} />
    </>
  )
}
