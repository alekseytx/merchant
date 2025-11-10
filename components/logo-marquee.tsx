"use client"
import { useState } from "react"

interface LogoMarqueeProps {
  logos: string[]
}

export function LogoMarquee({ logos }: LogoMarqueeProps) {
  const [isPaused, setIsPaused] = useState(false)

  return (
    <div className="w-full overflow-hidden py-8">
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee {
          animation: scroll 20s linear infinite;
        }
        .marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
      <div className="marquee flex gap-12">
        {[...logos, ...logos].map((logo, idx) => (
          <div key={idx} className="flex items-center gap-8 min-w-max">
            <span className="text-sm font-semibold text-muted-foreground whitespace-nowrap">{logo}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
