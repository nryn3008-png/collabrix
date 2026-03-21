# Bridge Perks Portal — Portfolio Case Study Prompt

> Use this prompt to generate the portfolio entry for the Bridge Perks Portal project.
> Structure: Display card (overview) → Expanded detail view (full case study)

---

## Role & Framing

I'm **Aman Soni**, a product designer. This is a portfolio case study for hiring managers and recruiters. Frame me as a **product designer who owned the entire product** — from research and UX strategy to visual design, design system, and front-end development. Mention briefly that I used agentic AI tools (Claude Code) as a development partner to ship production code, but keep the narrative centered on **design thinking, decisions, and craft**.

---

## Project Context

**Product:** Bridge Perks Portal
**Live URL:** https://perks.brdg.app
**Company:** Bridge (brdg.app) — a platform connecting VC firms with their portfolio companies
**My Role:** Product Designer & Developer (solo)
**Timeline:** ~3 months (Dec 2025 – Feb 2026)
**Stack:** Next.js 14, TypeScript, Tailwind CSS, Supabase

---

## What It Is

A white-labeled SaaS portal that gives VC-backed startup founders exclusive access to 400+ vendor perks and discounts (cloud credits, dev tools, marketing spend, HR platforms, etc.). Access is domain-gated — users must belong to an approved VC firm or portfolio company to redeem offers.

**Key users:**
- **Startup founders/employees** — browse and redeem perks
- **VC firm team members** — access perks + manage their portfolio's whitelist
- **Bridge admins** — manage providers, vendors, offers, access requests, analytics

---

## The Design Problem

Bridge had an existing perks marketplace powered by GetProven, but it was a generic vendor portal with no access control, no brand alignment, and no VC-specific flows. Founders had to navigate a third-party interface that didn't feel like a Bridge product, and there was no way to:

1. Gate access based on VC affiliation (the core value prop)
2. Let denied users understand WHY they're restricted and HOW to get access
3. Give admins visibility into offer inventory, vendor health, and user activity
4. Handle API outages gracefully (founders saw blank pages when GetProven went down)

---

## Display Card (Overview)

Use this for the display card / thumbnail view in the portfolio:

**Title:** Bridge Perks Portal
**Subtitle:** Exclusive vendor perks for VC-backed startups
**One-liner:** Designed and developed a domain-gated perks marketplace serving 400+ offers across 100+ vendors, with tiered access control, admin analytics, and API resilience — as a solo product designer using AI-assisted development.
**Tags/Labels:** Product Design · Design System · Full-Stack Development · SaaS · B2B
**Key stat:** 400+ perks, 100+ vendors, 300+ whitelisted VC domains

---

## Detailed Case Study Content

Structure this as a scrollable case study when the card is clicked/expanded.

### 1. Discovery & Problem Framing

The core insight: access to perks IS the product. Without meaningful access control, the portal is just another vendor directory. The design challenge was making exclusivity feel motivating (not frustrating) for both approved and denied users.

**Key questions I explored:**
- How do you communicate "you're not approved yet" without killing engagement?
- How do you make the verification process feel trustworthy and intentional?
- How should denied users discover the path to access?
- What does an admin need to manage a VC-gated marketplace at scale?

### 2. Access Control as a UX Problem (Core Design Work)

This was the most design-intensive area. I designed a **tiered access system** with distinct UX for each state:

**The Access Gate Animation (8 seconds)**
- Designed a scanning metaphor: VC logos cycle through a conveyor belt while the user's email domain is verified against 300+ whitelisted domains
- Pulsating rings, progress bar, sequential status messages create a sense of security theater — the verification is instant, but the animation communicates rigor and trust
- Three result states with distinct visual treatments: Granted (green check, "Access Granted"), Denied-Work (eye icon, "Browse Perks"), Personal-Email (compass icon, "Explore Perks")
- Respects prefers-reduced-motion and skips on return visits

**Browse Mode for Denied Users (Redemption-Level Gating)**
- Major UX decision: denied users CAN browse all perk cards freely but are blocked at redemption (detail page shows blurred content with modal overlay)
- This was a deliberate choice — showing the catalog builds desire and trust; hiding it kills both
- The restricted modal is a full design system component: responsive (full-screen mobile, centered card desktop), focus-trapped, keyboard-dismissible, with exit animations

**Access Request Flow**
- Discovered investors shown as green chips (auto-detected from Bridge API)
- Interactive VC directory: searchable grid of 300+ approved VCs with logos
- Clicking a VC pre-fills the request form — reduces friction from "who's your VC?" to a single tap
- Form collects VC contact info for admin verification

### 3. Design System (Bridge Design Tokens)

Built and maintained a complete design token system used across 60+ files:

**Color tokens:** 20+ named tokens (Royal Blue, Charcoal, Slate, Mist, Silver, etc.) used as direct hex values — ensuring 1:1 brand alignment with Bridge's identity

**Component library:**
- **Button** — 5 variants (primary/secondary/outline/ghost/destructive), pill-shaped, 3 sizes, precise tracking and weight specs
- **Badge** — 6 color variants, single size, 4px radius, always-bordered, optional icon prop
- **Card** — Unified hover shadow token, subtle lift on interaction
- **Input** — Pill-shaped, token-based borders, focus ring in Royal Blue

**Typography:** Mulish (Google Fonts), weight scale from 400–700, consistent sizing hierarchy

**Animation tokens:** Defined entrance (fade-in, fade-in-up, scale-in) and exit (scale-out, fade-out) animations with consistent timing curves

### 4. Key Pages & Interactions

**Landing Page**
- Scroll-triggered animations (staggered fade-in-up, count-up stats, infinite logo marquee)
- Three-step "How It Works" with animated connector lines
- Gradient CTA section (Royal Blue to Accent Blue)

**Perks Listing**
- Dual view modes: Grid (card layout) and By Vendor (accordion groups with smooth CSS grid height animation)
- Combined filter dropdown with 4 cascading categories (Group, Service, Stage, Category)
- Three-tier default sort: Featured vendors first, grouped second, ungrouped last
- "Recently Added" section for new perks with time-based badging

**Perk Detail Page**
- Two-column layout: offer context + redemption sidebar
- Value pills showing deal value, discount, and estimated savings
- Related perks grid below
- Glassmorphic hero section with backdrop blur

**Admin Dashboard (7 sections)**
- Analytics with redemption metrics and charts
- Offer and vendor tracking tables with search, filters, sync-to-DB
- CSV bulk upload modal: drag-drop, client-side validation, preview, confirmation
- Access request review with expandable rows, multi-user awareness badges, colleague lookup
- Custom vendor group management (CRUD) alongside read-only API groups
- Provider configuration and audit log

### 5. Designing for Failure (API Resilience)

Designed the fallback experience when the upstream vendor API goes down:
- Cached data served from Supabase tracker tables with amber "Showing cached data" banner
- Users see slightly stale perks rather than a blank page or error screen
- Designed the sync architecture: what to cache, when to refresh, how to indicate staleness to users

### 6. Accessibility (WCAG 2.2 AA)

- Focus traps in modals, aria-live regions for status updates, full keyboard navigation
- All animations respect prefers-reduced-motion
- Page-specific document titles, aria-current on navigation, proper table semantics
- Minimum 48px touch targets, focus-visible rings on all interactive elements

### 7. How I Built It

I designed and developed this product solo, using **agentic AI (Claude Code)** as my development partner. My workflow: define the UX and visual specs through design thinking → describe the implementation intent to Claude → review, iterate, and ship production code. This approach let me own the full product cycle — from user research to deployment — as a designer who ships with AI assistance.

This isn't about AI replacing design thinking. It's about a designer using new tools to close the gap between vision and execution, without compromising on craft or quality.

---

## Outcome / Impact

- Shipped to production at perks.brdg.app, serving Bridge's VC network
- 400+ perks from 100+ vendors available to whitelisted users
- Complete access control system processing 300+ VC domains
- Admin tooling for full marketplace operations
- Resilient architecture handling upstream API outages gracefully
- WCAG 2.2 AA accessible across all user flows

---

## Visual Assets to Include

When building the portfolio entry, capture screenshots or recordings of:
1. Landing page (full scroll with animations)
2. Access gate scanning animation (the 8-second sequence)
3. Access granted vs. browse mode result states
4. Perks listing — grid view and vendor accordion view
5. Perk detail page (granted user)
6. Access restricted modal on perk detail (denied user)
7. VC directory with search in access request flow
8. Admin dashboard — analytics, offers table, vendor groups
9. Design system components (button variants, badge variants, card hover states)
10. Mobile responsive views (perks grid, modal, landing page)

---

## Tone Notes for Portfolio Generation

- Confident but not boastful — let the work speak
- Emphasize design THINKING, not just pixels — the "why" behind every decision
- Show that access control was a UX DESIGN challenge, not just a technical one
- The AI development mention should feel natural and forward-thinking, not defensive or apologetic
- Frame it as: "I'm a designer who can ship" — not "I'm a developer who also designs"
- Audience is hiring managers evaluating product design skills — they should come away thinking "this person thinks in systems and ships real products"
