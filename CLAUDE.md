# XR Pitch Deck - Project Reference

## Quick Reference

Next.js 16 pitch deck with React 19, TypeScript, Tailwind CSS v4, shadcn/ui, Framer Motion.

**Port:** 3110

---

## Version Control

- **Use git** - Standard git workflow on main branch
- **Atomic commits** - One logical change per commit, very small and focused
- **No co-authored-by** - Do not add "Co-Authored-By: Claude" to commit messages
- **Push constantly** - After commits pass all checks, push immediately

---

## Code Quality (IMPORTANT)

**Before committing ANY code, run checks:**

```bash
pnpm lint                    # ESLint - fix errors first
pnpm build                   # Verify production build works
```

**DO NOT commit code that fails linting or build.**

### React Hooks Best Practices

- **Only call hooks at the top level** - Never inside loops, conditions, or nested functions
- **Only call hooks in React components or custom hooks** - Helper functions are NOT components

---

## Commands

```bash
pnpm dev              # Start development server (http://localhost:3110)
pnpm build            # Production build
pnpm start            # Run production server
pnpm lint             # Run ESLint
pnpm optimize-images  # Optimize images in public folder
```

---

## Tech Stack

- **Next.js 16** with App Router
- **React 19**
- **TypeScript** (strict mode)
- **Tailwind CSS v4** (using @tailwindcss/postcss)
- **shadcn/ui** for components
- **Framer Motion** for animations
- **pnpm** for package management

---

## Project Structure

```
src/
  app/                    # Next.js App Router
    layout.tsx            # Root layout with fonts
    page.tsx              # Main page with all slides
    globals.css           # Global styles, scroll behavior, animations
  components/
    slides/               # Individual slide components
      HeroSlide.tsx
      WhoWeAreSlide.tsx
      BrandsSlide.tsx
      TeamSlide.tsx
      CalendarSlide.tsx
      GrowthSlide.tsx
      UseOfFundsSlide.tsx
      SponsorsSlide.tsx
      ValuationSlide.tsx
      FinancingSlide.tsx
      BenefitsSlide.tsx
      SummarySlide.tsx
    ui/                   # shadcn/ui components
    Navigation.tsx        # Slide navigation dots
    PasswordGate.tsx      # Password protection wrapper
public/
  images/                 # Optimized images
scripts/
  optimize-images.mjs     # Image optimization script
```

**Path alias:** `@/*` maps to `src/*`

---

## Key Features

### Password Protection
The deck is protected by `PasswordGate` component. Password is checked client-side.

### Scroll Snapping
- Desktop (768px+): Mandatory scroll snap between slides for presentation feel
- Mobile: Normal scrolling (snap disabled for better touch UX)

### Animations
Using Framer Motion for entrance animations. Each slide uses the `.slide` class for scroll snap alignment.

---

## Slide Order

1. Hero - Title and brand logos
2. Who We Are - Company introduction
3. Brands - Brand portfolio
4. Team - Team members
5. Calendar - Event schedule
6. Growth - Growth metrics
7. Use of Funds - Investment allocation
8. Sponsors - Current sponsors
9. Valuation - Company valuation
10. Financing - Funding details
11. Benefits - Investor benefits
12. Summary - Contact and closing
