# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

```bash
npm run dev      # Start Next.js dev server (port 3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # ESLint check
```

No test framework is configured.

## Architecture

Single-page portfolio site for a product designer & developer. Built with **Next.js 16**, **React 19**, **Tailwind CSS 4**, and **Framer Motion**.

### Key Structure

- `src/app/page.tsx` — Assembles all sections in order: Header → Hero → About → WhatIDo → HowIWork → WhoIHelp → WhyMe → FAQ → CTA → Footer
- `src/app/layout.tsx` — Root layout with Geist font loading and SEO metadata
- `src/app/globals.css` — Design tokens as CSS variables (colors, typography scale, spacing, radii, transitions, max-widths)
- `src/lib/motion.tsx` — Reusable Framer Motion animation components (`SectionReveal`, `StaggerContainer`, `StaggerItem`, `HeroReveal`, `FadeIn`)
- `src/components/icons/` — Custom SVG icon library with `IconContainer` wrapper component

### Path Alias

`@/*` maps to `./src/*` (configured in tsconfig.json).

## Design System (CSS Variables)

All design tokens live in `globals.css` as CSS custom properties under `:root`. Key tokens:
- Colors: `--bg`, `--bg-elevated`, `--text-primary`, `--text-secondary`, `--text-tertiary`, `--border`, `--accent`
- Typography: `--text-xs` through `--text-6xl`, line-heights `--leading-tight/snug/normal/relaxed`
- Spacing: `--space-1` through `--space-8`
- Layout: `--max-w-content: 1120px`, `--max-w-text: 640px`
- Transitions: `--transition-fast: 150ms`, `--transition-base: 200ms`, `--transition-slow: 300ms`

## Animation Conventions

All animations use Framer Motion with these patterns:

- **Custom easing**: `[0.22, 1, 0.36, 1]` throughout
- **Reduced motion**: Always check `useReducedMotion()` and provide a static fallback — never skip this
- **Viewport triggers**: Animations fire at 20% visibility; sections replay on re-enter (`once=false`)
- **Stagger timing**: 80ms delay between children, 6-16px vertical translate distances
- **Wrapper components**: Use `SectionReveal` for section-level reveals, `StaggerContainer`/`StaggerItem` for lists, `HeroReveal`/`HeroItem` for page-load sequences

## Component Patterns

- All interactive components use `'use client'` directive
- Consistent section padding: `px-6 lg:px-8` with `max-w-content mx-auto`
- Responsive breakpoint: primarily `md:` for mobile-to-desktop transitions
- Fixed header height: 72px (`NAV_HEIGHT` constant in WhatIDo)
- Smooth scroll offset of 80px accounts for the fixed header
- Icons are filled SVG glyphs (not outlined), using white/gray palette (`#fff`, `#6b6b6b`, `#888`)

## Icon System

`src/components/icons/Icons.tsx` contains all custom SVG icons. Each accepts `size` and `className` props. `IconContainer` wraps icons with a dark background, shadow, and optional sizes (`sm`/`md`/`lg`). New icons should follow the same filled-glyph style.

## Notable Patterns

- **WhatIDo sticky cards**: Uses CSS `sticky` positioning with calculated offsets (`STACK_OFFSET=24px`) for a card-stacking scroll effect
- **FAQ accordion**: Single-item-open pattern with `AnimatePresence` for expand/collapse
- **Card hover effect**: `.card-hover-effect` class in globals.css applies gradient overlay + grain texture on hover
- **Hero emphasis**: `.hero-emphasis` class creates an animated underline effect
