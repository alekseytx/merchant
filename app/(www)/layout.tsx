import type React from "react"
import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const siteUrl = "https://primeswipe.io"

export const metadata: Metadata = {
  // Base URL so OG/Twitter links resolve correctly
  metadataBase: new URL(siteUrl),

  // Default <title> and per-page template
  title: {
    default: "PrimeSwipe | Premier Card Processing Company",
    template: "%s | PrimeSwipe",
  },

  description:
    "PrimeSwipe is the premier card processing company, helping merchants accept payments quickly and securely with transparent pricing and white-glove support.",

  keywords: [
    "PrimeSwipe",
    "merchant services",
    "payment processing",
    "credit card processing",
    "card terminals",
    "POS",
    "point of sale",
    "merchant industry",
    "payment gateway",
  ],

  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "PrimeSwipe",
    title: "PrimeSwipe | Premier Card Processing Company",
    description:
      "Join hundreds of companies processing millions of transactions securely with PrimeSwipe.",
    images: [
      {
        url: "/prime_swipe_banner.png", // 1200×630 recommended
        width: 1200,
        height: 630,
        alt: "Merchant using PrimeSwipe to accept a card payment",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "PrimeSwipe | Premier Card Processing Company",
    description:
      "Modern card processing, transparent rates, and dedicated support for growing merchants.",
    images: ["/prime_swipe_banner.png"],
  },
}

export default function WWWLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
