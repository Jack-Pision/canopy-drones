# CANOPY — Precision Agriculture Drones

A modern, responsive website for CANOPY, a precision agriculture drone company. Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Live Demo

[https://canopy-drones.vercel.app](https://canopy-drones.vercel.app)

## Features

- **3 Pages**: Home, Fleet, Technology
- **Responsive Design**: Desktop-first with mobile breakpoints
- **Animations**: Framer Motion for page transitions, scroll reveals, and micro-interactions
- **Dark/Light Theme**: Dark hero sections with off-white content sections
- **Interactive Components**: Animated stat counters, drone detail panels, scroll-driven highlights
- **Performance**: Static export optimized for Vercel hosting

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **State**: [Zustand](https://github.com/pmndrs/zustand)
- **Fonts**: Space Grotesk + Space Mono (Google Fonts)

## Project Structure

```
canopy/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Home page
│   ├── fleet/
│   │   └── page.tsx        # Fleet page
│   └── technology/
│       └── page.tsx        # Technology page
├── components/             # React components
│   ├── Nav.tsx
│   ├── Footer.tsx
│   ├── DroneCard.tsx
│   ├── DronePanel.tsx
│   ├── StatCounter.tsx
│   ├── ScrollReveal.tsx
│   ├── FieldGrid.tsx
│   ├── ProcessFlow.tsx
│   └── HudLabels.tsx
├── data/
│   └── drones.ts           # Drone specifications
├── store/
│   └── droneStore.ts       # Zustand store
├── hooks/
│   └── useInView.ts        # IntersectionObserver hook
├── public/
│   └── images/             # Static images
├── next.config.ts
├── package.json
└── tsconfig.json
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Jack-Pision/canopy-drones.git
cd canopy-drones

# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Build for Production

```bash
npm run build
```

This generates a static export in the `dist` folder, ready for Vercel deployment.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in [Vercel](https://vercel.com)
3. Deploy with default settings

The `next.config.ts` is already configured for static export (`output: 'export'`).

## Design System

### Colors

- **Primary BG**: `#0C1410` — Dark green-black
- **Card BG**: `#111A13` — Slightly lighter dark
- **Light BG**: `#F4F6F2` — Off-white for sections
- **Accent**: `#9CFF57` — Acid green (CTAs, stats, highlights)
- **Text**: `#EAEAEA` — Primary light text
- **Muted**: `#3A5A3E` — Secondary text

### Typography

- **Display**: Space Grotesk (300, 500, 700)
- **Mono/Data**: Space Mono (400)

### Responsive Breakpoints

- **Desktop**: 1440px+
- **Tablet**: 1024px
- **Mobile**: 640px

## Credits

**Built by [Jack Pision](https://github.com/Jack-Pision)**

- [LinkedIn](https://linkedin.com/in/jack-pision-201764377)
- [GitHub](https://github.com/Jack-Pision)
- [X (Twitter)](https://x.com/Jack_pision)

## License

MIT License — feel free to use this project as a template for your own portfolio.
