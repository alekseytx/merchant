"use client"

interface LogoMarqueeProps {
  logos: string[]
}

export function LogoMarquee({ logos }: LogoMarqueeProps) {
  const items = [...logos, ...logos] // loop seamlessly

  return (
    <div className="w-full py-8 overflow-hidden group">
      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .logo-marquee-track {
          animation: marqueeScroll 22s linear infinite;
        }
        .group:hover .logo-marquee-track {
          animation-play-state: paused;
        }
      `}</style>

      <div className="logo-marquee-track flex items-center gap-12">
        {items.map((logo, idx) => (
          <span
            key={idx}
            className="whitespace-nowrap text-sm sm:text-base font-semibold tracking-[0.16em] uppercase text-muted-foreground"
          >
            {logo}
          </span>
        ))}
      </div>
    </div>
  )
}
