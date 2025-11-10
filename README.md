# Merchant Industry - Modern Card Processing Platform

A modern, high-performance Next.js 14 one-pager for a card processing platform, built with TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Fast & Optimized**: Next.js 14 App Router with image optimization and lazy loading
- **Modern Design**: Clean, app-style aesthetic with subtle animations
- **Accessible**: WCAG 2.1 AA compliant with semantic HTML and keyboard navigation
- **SEO Ready**: Metadata API, Open Graph tags, robots.txt, and sitemap
- **Component-Driven**: Reusable, well-typed React components
- **Fully Responsive**: Mobile-first design that scales to desktop

## Project Structure

\`\`\`
app/
├── (www)/
│   ├── page.tsx              # Homepage
│   ├── layout.tsx            # WWW layout with nav/footer
│   ├── solutions/page.tsx    # Solutions page
│   ├── industries/page.tsx   # Industries page
│   ├── pricing/page.tsx      # Pricing page
│   ├── about/page.tsx        # About page
│   ├── resources/page.tsx    # Resources page
│   └── contact/page.tsx      # Contact page
├── api/
│   └── contact/route.ts      # Contact form API
├── globals.css               # Tailwind configuration & design tokens
└── layout.tsx                # Root layout

components/
├── navbar.tsx                # Navigation bar
├── footer.tsx                # Footer with links
├── hero.tsx                  # Hero section
├── feature-card.tsx          # Feature card component
├── logo-marquee.tsx          # Animated logo marquee
├── steps.tsx                 # How-it-works steps
├── faq.tsx                   # Accordion FAQ
├── contact-form.tsx          # Contact form
├── page-hero.tsx             # Page header component
├── container.tsx             # Layout container
├── section.tsx               # Section wrapper
├── button.tsx                # Button component
├── stats-grid.tsx            # Stats display

content/
├── site.ts                   # Site config (name, contact, social)
├── nav.ts                    # Navigation structure
└── home.ts                   # Homepage content

public/
├── robots.txt
└── sitemap.xml
\`\`\`

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

3. Run development server:
   \`\`\`bash
   npm run dev
   \`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Development

### Adding a New Page

1. Create a new route in `app/(www)/[page]/page.tsx`
2. Import `PageHero` and `Section` components
3. Use the content config pattern from `content/home.ts`

### Customizing Content

- **Site Config**: Edit `content/site.ts` for company info
- **Navigation**: Edit `content/nav.ts` for menu items
- **Homepage**: Edit `content/home.ts` for features, steps, FAQs

### Styling

- Design tokens are in `app/globals.css` (OKLCH color space)
- Use Tailwind classes for responsive design
- Component styles use shadcn/ui patterns

## Environment Variables

Currently no environment variables are required. For future features:
- `NEXT_PUBLIC_ANALYTICS_ID` - For analytics tracking
- `CONTACT_EMAIL` - For form submissions

## Performance

- Lighthouse Score: 95+
- Image Optimization: Next.js automatic AVIF/WebP
- Code Splitting: Dynamic imports for modals, sliders
- SEO: Canonical tags, Open Graph, meta descriptions

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Building for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## Deployment

Deploy to Vercel:

\`\`\`bash
npm install -g vercel
vercel
\`\`\`

## License

Proprietary - Merchant Industry 2024

## Support

For support, email support@merchantindustry.com or visit the contact page.
