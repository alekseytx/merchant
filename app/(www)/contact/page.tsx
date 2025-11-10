import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { Container } from "@/components/container"
import { Section } from "@/components/section"
import { ContactForm } from "@/components/contact-form"
import { Button } from "@/components/button"

export const metadata: Metadata = {
  title: "Contact | PrimeSwipe",
  description: "Get in touch with our team. We're here to help with your payment processing needs.",
}

// Icon components
const PhoneIcon = () => (
  <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
)

const EmailIcon = () => (
  <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
)

const LocationIcon = () => (
  <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

const ClockIcon = () => (
  <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
)

export default function ContactPage() {
  return (
    <div>
      <PageHero title="Get in Touch" description="Have questions? Our team is here to help" />

      {/* Main Contact Section with Form */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Send us a Message</h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>
              </div>
              <ContactForm />
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              <div className="rounded-xl border border-border bg-card p-6 hover:border-primary/50 transition-colors">
                <div className="flex items-start gap-3">
                  <PhoneIcon />
                  <div>
                    <h3 className="font-semibold text-sm mb-1">Phone</h3>
                    <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                    <p className="text-xs text-muted-foreground mt-1">Mon-Fri, 9am-6pm EST</p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-card p-6 hover:border-primary/50 transition-colors">
                <div className="flex items-start gap-3">
                  <EmailIcon />
                  <div>
                    <h3 className="font-semibold text-sm mb-1">Email</h3>
                    <p className="text-sm text-muted-foreground">support@primeswipe.com</p>
                    <p className="text-xs text-muted-foreground mt-1">sales@primeswipe.com</p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-card p-6 hover:border-primary/50 transition-colors">
                <div className="flex items-start gap-3">
                  <LocationIcon />
                  <div>
                    <h3 className="font-semibold text-sm mb-1">Headquarters</h3>
                    <p className="text-sm text-muted-foreground">123 Payment Street</p>
                    <p className="text-xs text-muted-foreground">San Francisco, CA 94105</p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-card p-6 hover:border-primary/50 transition-colors">
                <div className="flex items-start gap-3">
                  <ClockIcon />
                  <div>
                    <h3 className="font-semibold text-sm mb-1">Support Hours</h3>
                    <p className="text-sm text-muted-foreground">24/7 Support Available</p>
                    <p className="text-xs text-muted-foreground mt-1">Priority for all customers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Why Contact Section */}
      <Section className="bg-secondary/30" eyebrow="Why Choose Us" title="We're Here to Support Your Success">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-lg border border-border bg-card p-6">
              <div className="mb-4">
                <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Fast Response</h3>
              <p className="text-sm text-muted-foreground">
                Get answers to your questions within 24 hours or less during business hours.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-6">
              <div className="mb-4">
                <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m7 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Expert Team</h3>
              <p className="text-sm text-muted-foreground">
                Our payment processing specialists are ready to help with setup and optimization.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-6">
              <div className="mb-4">
                <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5-4a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Personalized Solutions</h3>
              <p className="text-sm text-muted-foreground">
                We tailor our payment solutions to match your unique business requirements.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-r from-primary/10 to-accent/10 border-t border-border">
        <Container className="text-center">
          <h2 className="text-3xl font-bold mb-4">Not Sure Where to Start?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto">
            Schedule a demo with our team to see how PrimeSwipe can streamline your payment processing.
          </p>
          <Button size="lg" className="group">
            Schedule a Demo
            <svg
              className="h-4 w-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Button>
        </Container>
      </Section>
    </div>
  )
}
