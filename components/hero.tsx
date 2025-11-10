"use client"

import type React from "react"
import Image from "next/image"
import { Button } from "./button"
import { Container } from "./container"

interface HeroProps {
  eyebrow: string
  headline: string
  subheadline: string
  cta_primary: string
  cta_secondary: string
  onPrimaryClick?: () => void
  onSecondaryClick?: () => void
}

export function Hero({
  eyebrow,
  headline,
  subheadline,
  cta_primary,
  cta_secondary,
  onPrimaryClick,
  onSecondaryClick,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden pt-24 pb-20 sm:pt-32 sm:pb-28">
      <Container>
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-8">
          <div className="animate-fade-in">
            <p className="text-sm font-semibold tracking-wide text-primary mb-4">
              {eyebrow}
            </p>
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-6 text-balance">
              {headline}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-lg text-balance">
              {subheadline}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              {/* Get Started */}
              <Button
                type="button"
                size="lg"
                onClick={onPrimaryClick}
                className="
                  group rounded-full px-7
                  bg-gradient-to-r from-[#0B4AA8] to-[#1F6AD8]
                  text-sm font-semibold tracking-tight
                  shadow-md hover:shadow-lg
                  hover:brightness-110 transition-all
                "
              >
                {cta_primary}
                <svg
                  className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Button>

              {/* Learn More */}
              <Button
                type="button"
                size="lg"
                variant="outline"
                onClick={onSecondaryClick}
                className="
                  rounded-full px-7
                  border-border/80 bg-background/80
                  text-sm font-semibold text-foreground
                  hover:border-primary/60 hover:bg-background
                  hover:text-foreground
                  transition-all
                "
              >
                {cta_secondary}
              </Button>
            </div>
          </div>

          <div className="relative mt-6 lg:mt-0 h-[260px] sm:h-[320px] lg:h-[420px] xl:h-[460px] animate-fade-in-delayed">
            <Image
              src="/prime_swipe_banner.png"
              alt="Prime Swipe card processing interface"
              fill
              className="object-cover rounded-3xl"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  )
}
