# Bridge Jobs — Portfolio Case Study Prompt

> **Instructions for Claude:** This prompt contains everything you need to create the Bridge Jobs portfolio piece. You have two views to generate — a **card** (overview/thumbnail that appears in the portfolio grid) and a **detailed case study** (what visitors see when they click in). Use your judgment on what information goes where based on the portfolio's existing card structure and layout patterns. Don't just dump everything — curate. The card should hook; the case study should tell the full story.

> **Critical:** This is a **product designer's portfolio** — not an engineering portfolio. The author (Aman) is a product designer first who used agentic AI tools (Claude Code) to develop this project. Frame everything through a design lens. The engineering is impressive, but it serves the design narrative.

---

## Project Identity

- **Project Name:** Bridge Jobs
- **Tagline:** A multi-ATS job aggregation platform for VC networks — designed and developed by a product designer using agentic AI.
- **Timeline:** February 2026 — Present
- **Status:** Live in production
- **Live URL:** [jobs.brdg.app](https://jobs.brdg.app)
- **Role:** Product Designer & AI-Assisted Developer (sole creator)
- **Company:** Bridge (brdg.app) — a VC networking platform
- **Stack:** Next.js 16, Tailwind CSS, shadcn/ui, Supabase PostgreSQL, Prisma ORM, Vercel
- **AI Tools Used:** Claude Code (Anthropic) with 9 custom-authored skills

---

## Card View (Overview)

Use these ingredients to populate the card. Adapt to whatever card structure the portfolio uses — hero image area, title, description, tags, metadata, etc.

### Headline
Bridge Jobs — VC-Powered Talent Platform

### Subline
Designed and shipped a production-grade job aggregation platform for venture capital networks. Product design, system design, and full-stack development — all driven by one designer using agentic AI tools.

### Key Stats (pick the most impactful for the card layout)
- **13** ATS integrations (Greenhouse, Lever, Workable, Ashby, and 9 more)
- **120+** portfolio companies synced
- **57** custom components built
- **11** database models
- **15+** pages across 4 user roles (talent, company, VC manager, admin)
- **9** custom Claude Code skills authored to maintain design quality

### Tags / Pills
`Product Design` `Full-Stack Development` `Agentic AI` `Next.js 16` `Design Systems` `Multi-Tenant SaaS` `Supabase` `Data Sync Architecture`

### Role Description (short)
Product Designer who conceived, designed, and developed the entire platform — using Claude Code (agentic AI) as a development partner. Wrote product specs, designed the UI system, architected the data model, and built every feature through AI-assisted pair programming.

### What Makes This Unique (1-liner)
A product designer who didn't just design screens — they shipped a production SaaS platform with 13 API integrations, enterprise auth, and real-time data sync, using agentic AI as their engineering team.

### Card Visual Direction
Show a layered composition featuring:
1. **Job board page** (hero gradient + job cards + filter bar) — the primary public-facing view
2. **VC Manager dashboard** (sidebar + stat cards + job trend chart) — shows the admin depth
3. **Branded career page** (custom VC branding, different color scheme) — shows multi-tenancy

**Mood:** Professional, systems-thinking, technical depth. Not a "pretty Dribbble shot" — this should read as a real product with real complexity. The card should signal: "This designer thinks in systems and ships production software."

### Key Differentiators to Surface
1. **Designer who develops** — Not a developer project with design polish. A designer-led product that happens to be fully functional.
2. **Agentic AI as multiplier** — Used Claude Code with 9 custom skills to maintain design system fidelity while building at engineering speed.
3. **Real production SaaS** — Not a prototype. Live at [jobs.brdg.app](https://jobs.brdg.app) with scheduled cron jobs, enterprise auth, 13 API integrations, and real users.
4. **Systems thinking** — Design system, data architecture, multi-tenant branding, role-based access — all conceived by a designer.

---

## Detailed Case Study View

When the visitor clicks into the card, show the full story below. Structure it as a product design case study that weaves in the AI development narrative.

**IMPORTANT — Use visuals, not just text.** Every section should have supporting visuals. Generate diagrams, flowcharts, architecture maps, comparison tables, annotated UI callouts, and process illustrations. A design portfolio is a visual medium — walls of text won't work. Specific visual instructions are marked with `[VISUAL]` below.

---

### Section 1: The Problem

#### Context
Bridge is an existing VC networking platform that connects investors, portfolio companies, and talent through warm introductions. The platform had a strong social graph and intro system — but no way for portfolio companies to surface their open roles to network talent, and no way for talent to discover jobs across the VC ecosystem.

#### The Gap
VC networks like Techstars, Orange DAO, and Angel Invest Ventures each had portfolio companies hiring across dozens of different ATS providers (Greenhouse, Lever, Workable, Ashby, etc.). There was no unified view. Talent in the network had to manually check each company's career page — or worse, use noisy public job boards where the "network advantage" disappeared entirely.

`[VISUAL]` **Before/After diagram** — Show the fragmented state (talent checking 10+ separate career pages across Greenhouse, Lever, Workable, etc.) vs. the unified state (Bridge Jobs aggregating everything into one trusted board). Use a simple flow diagram with icons for each ATS provider converging into the Bridge Jobs hub.

#### Competitive Landscape

`[VISUAL]` **Comparison matrix** — Visual table or chart comparing Bridge Jobs against Getro, Consider, and Wellfound:

| Platform | Model | Price | Limitation | Bridge Advantage |
|----------|-------|-------|------------|------------------|
| **Getro** | Auto-scraping aggregator + warm intros | $210–500/mo | Basic UI, no rich profiles, no community | Rich profiles, community, endorsements, AI matching |
| **Consider** | Talent circles + recruiter tools | Enterprise | Expensive, complex setup, client churn risk | No churn risk, integrated platform ecosystem |
| **Wellfound** | Public marketplace, 10M+ candidates | Free–$499/mo | Public = noisy, no network trust signals | Private, vetted, network-endorsed talent |

#### Design Opportunity
Build a **private, trust-first talent marketplace** that leverages Bridge's existing social graph. Every job comes through a VC network. Every candidate has warm intro paths. Every company is investor-vetted.

---

### Section 2: Design Process

#### 2.1 Product Specification
Before touching any UI, I wrote a comprehensive product spec covering:
- 3 user personas (Talent, Hiring Manager, VC/Fund Manager)
- Feature matrix with prioritization (must-have vs. nice-to-have)
- Data model architecture aligned to Bridge's existing API
- Competitive analysis synthesized into design principles

`[VISUAL]` **User persona cards** — Create visual cards for the three personas:
1. **Talent** — Job seekers in the Bridge network. Goal: discover curated roles with warm intro paths.
2. **Hiring Manager** — CEOs, CTOs, VP People at portfolio companies. Goal: fill roles fast with vetted candidates.
3. **VC / Fund Manager** — Partners and talent partners at VC firms. Goal: help portfolio companies hire, track talent flow.

#### 2.2 Design Principles

`[VISUAL]` **Design principles visual** — Show these five principles as a visual system (icons + short descriptions, not just a bulleted list):

1. **Network-first** — Every screen reinforces that this is a private, trusted network, not a public job board
2. **Trust signals everywhere** — VC badges, endorsements, mutual connections visible at all interaction points
3. **Progressive disclosure** — Essential info first, detail on demand
4. **Warm over cold** — Always surface warm intro paths before cold "Apply" actions
5. **Minimal friction** — One-click apply, auto-filled forms, SSO login

#### 2.3 Design System: Bridge Design Language
I created a comprehensive design system that I then codified into CSS custom properties and Tailwind utilities.

`[VISUAL]` **Design system specimen sheet** — Generate a visual showing:
- **Typography:** Mulish font specimen (weights 400–700) with size scale (12px caption → 36px display)
- **Color palette:** Swatches with hex values:
  - Royal Blue `#0038FF` (primary)
  - Charcoal `#0D1531` (text)
  - Slate scale: 05 `#F9F9FA`, 10 `#F2F3F5`, 15 `#ECEDF0`, 30 `#D9DBE1`, 60 `#B3B7C4`, 80 `#9A9FB0`, 100 `#81879C`
  - Semantic: Kelly `#0EA02E` (success), Honey `#E19500` (warning), Ruby `#E13535` (error)
  - Accent: Sky `#568FFF`, Purple `#7450DA`
- **Spacing:** 8px grid visualization
- **Border radius:** Examples of `rounded-full` (buttons), `rounded-xl` (cards), `rounded` (badges)
- **Elevation:** Ds1, Ds2, Ds3 shadow examples
- **Gradients:** Hero gradient, Royal gradient, Login gradient

#### 2.4 Information Architecture

`[VISUAL]` **IA diagram / sitemap** — Generate a visual sitemap showing the four role-based navigation paths:

```
                    Bridge Jobs
                        │
        ┌───────────────┼───────────────┐───────────────┐
     Talent          Company        VC Manager         Admin
        │               │               │               │
    /jobs            /jobs           /vc/:domain      /admin
    /jobs/:id        /jobs/post      /dashboard       /dashboard
    /jobs/companies  /profile        /jobs            /vc-networks
    /profile         /onboarding     /portfolio       /jobs
    /onboarding                      /activity        /users
                                     /settings        /sync
                                         │
                                  /careers/:domain
                                  (public branded page)
```

Also show the **NavSwitcher** concept — a dropdown in the top nav that lets VC/admin users jump between views.

#### 2.5 Key Design Decisions

`[VISUAL]` **Annotated UI callouts** for each decision. Don't just describe — show the UI pattern with annotations pointing to the design decision.

**Decision 1: Contextual breadcrumbs via URL params**
When a user navigates from a company page to a job detail, the breadcrumb reads "Company Name > Job Title" instead of generic "Jobs > Job Title." Implemented via `?from_company=` query params. Show both states side-by-side.

**Decision 2: Warm intros card with three states**

`[VISUAL]` **Three-state diagram** showing the warm intros widget:
- State 1: Not signed in → "Sign in to see warm intro paths" CTA
- State 2: Signed in, has paths → Count badge with intro suggestions
- State 3: Signed in, no paths → "No warm paths found" (still visible, doesn't hide)
Annotate why: prevents jarring layout shifts from auth-dependent show/hide.

**Decision 3: Branded career pages as a product surface**
Each VC network gets a fully customizable public career page with their own branding (logo, colors, hero, links). Not just white-label — full product surface with custom domains, SEO, JSON-LD, and offline screen.

`[VISUAL]` Show 2-3 career pages side by side with different VC branding to demonstrate the multi-tenant customization.

**Decision 4: Companies tab on the job board**
Added a Companies tab alongside Jobs — lets talent browse by company (culture, industry, stage) rather than only by job title. Company cards show which VC networks back them as trust signals.

`[VISUAL]` Show the tab bar (Jobs / Companies) with example cards from each tab.

---

### Section 3: The AI Development Story

#### 3.1 My Approach
I'm a product designer, not a software engineer. I can read code, understand architecture, and think in systems — but I don't write production TypeScript from memory. For Bridge Jobs, I used **Claude Code** (Anthropic's agentic coding tool) as my development partner.

This wasn't "vibe coding" or asking AI to generate a landing page. This was a rigorous, design-driven development process.

`[VISUAL]` **"Not vibe coding" comparison** — A visual contrasting two approaches:
- Left: "Vibe Coding" — vague prompt → generic output → hope it works → redo everything
- Right: "Design-Driven AI Development" — spec → skills → implement → review → refine → ship

#### 3.2 Custom AI Skills I Authored

`[VISUAL]` **Skills ecosystem diagram** — Show the 9 skills as a visual system/constellation, grouped by domain:

**Design Quality:**
1. **bridge-design-system** — Master reference: color tokens, spacing rules, typography, shadows, transitions
2. **ui-designer** — Layout, visual hierarchy, component composition
3. **ux-consultant** — Heuristic evaluation, accessibility, interaction patterns
4. **ux-copywriter** — Tone, microcopy patterns, error messages

**Engineering Quality:**
5. **frontend-developer** — Server Components, dynamic imports, Tailwind merge
6. **backend-developer** — API routes, auth guards, Prisma queries
7. **code-quality** — TypeScript patterns, error handling, performance
8. **code-reviewer** — Self-review checklist

**Specialist:**
9. **accessibility-specialist** — WCAG compliance, focus management, reduced motion

#### 3.3 The Design-to-Code Pipeline

`[VISUAL]` **Process flow diagram** — Generate a visual pipeline (not ASCII art — an actual designed diagram):

```
Design Decision → Write Spec (Markdown) → AI Reads Specs + Skills → AI Implements Code → I Review Against Design Intent → Iterate → Ship to Vercel
     (my head)        (my writing)           (Claude Code)            (generated code)        (my eyes + taste)        (repeat)    (production)
```

Show this as a circular/iterative loop, not a linear waterfall. Annotate what I own (design, spec, review, taste) vs. what AI owns (implementation, build, deploy).

#### 3.4 What AI Was Good At vs. What Still Required a Designer

`[VISUAL]` **Split comparison visual** — Two columns:

| AI Handled | Designer Handled |
|-----------|-----------------|
| TypeScript implementation | Product decisions (what to build) |
| Prisma DB queries & schemas | Information architecture |
| 13 ATS API integrations | Visual hierarchy choices |
| Auth flows & RBAC | Design system creation |
| Build tooling & config | UX patterns (breadcrumbs, 3-state cards) |
| Edge cases from specs | Quality control & consistency |
| Cron jobs & sync pipelines | Competitive analysis & strategy |

---

### Section 4: The Product (Feature Deep-Dive)

`[VISUAL]` For EVERY feature below, include an annotated screenshot, UI mockup, or diagram. Never just describe a feature in text — show it.

#### 4.1 Public Job Board (`/jobs`)
Full-width hero with gradient. Search bar (`rounded-full`, elevated shadow). Tab bar for Jobs / Companies switching. Job cards in responsive grid with staggered fade-in (8 cards, 50ms delay each). Advanced filters: work type, employment type, experience level, salary range, department, VC network, posted within.

`[VISUAL]` Annotated view of the job board page, calling out: hero gradient, search bar, tab bar, filter row, job card anatomy, stagger animation.

#### 4.2 Job Detail (`/jobs/:id`)
Two-column layout: main content (title, company, tags, HTML description) + sidebar (company card + warm intros card). Contextual breadcrumbs via `?from_company=` param.

`[VISUAL]` Annotated two-column layout with callouts for breadcrumb behavior, sidebar components, warm intro states.

#### 4.3 Companies Tab (`/jobs?tab=companies`)
Company cards: logo, name, industry, team size, funding stage, open jobs count, VC network badges. Deduplicated across VCs.

#### 4.4 Branded Career Pages (`/careers/:domain`)
Fully customizable per-VC: header, hero (custom colors), job filters, job cards, companies tab, talent tab, footer. Custom domain support, SEO, JSON-LD, offline screen.

`[VISUAL]` Side-by-side comparison of 2-3 different VC career pages showing brand customization (different logos, colors, headlines).

#### 4.5 VC Manager Dashboard (`/vc/:domain/dashboard`)
Sidebar nav, stat cards (color-coded freshness), 12-week job trend chart (Recharts area chart with Royal gradient), top hiring companies table, activity log.

`[VISUAL]` Dashboard overview with annotations on stat card color logic (green < 6h, amber 6-48h, red > 48h) and chart design.

#### 4.6 Admin Panel (`/admin/*`)
Global oversight: aggregate stats, job management (bulk edit), VC network CRUD, user management, sync controls. Reuses VC Manager components via shared `vc-dashboard-tables.tsx` with `basePath` prop.

`[VISUAL]` Admin dashboard with callout showing component reuse pattern (same table component, different basePath).

#### 4.7 Data Sync Architecture

`[VISUAL]` **Architecture diagram** — This is critical. Generate a clear system diagram showing:

```
13 ATS Providers                    Bridge API
  ┌─ Workable                        │
  ├─ Greenhouse          ┌───────────┘
  ├─ Lever               │
  ├─ Ashby          Bridge Jobs
  ├─ Recruitee     ┌─────┴──────┐
  ├─ SmartRecruiters │           │
  ├─ Personio       │  Supabase  │
  ├─ Pinpoint       │  PostgreSQL│
  ├─ Rippling       │           │
  ├─ Workday        └─────┬──────┘
  ├─ SuccessFactors       │
  ├─ Comeet          3 Cron Jobs
  └─ Paylocity       ├─ Discovery (2x/week)
        │             ├─ Job Refresh (6h)
        │             └─ Portfolio Sync (daily)
   Fallback Scraper
   ├─ JSON-LD
   ├─ __NEXT_DATA__
   ├─ DOM Heuristics
   └─ Playwright
```

Also show the **enrichment pipeline**: raw ATS data → salary parsing → experience level extraction → upsert to DB.

#### 4.8 Authentication System

`[VISUAL]` **Three-layer auth diagram:**
```
Request → Edge Proxy (proxy.ts) → Server Resolver (auth.ts) → API Guard (check-api-access.ts)
              │                          │                            │
         Read cookies              Build AuthUser              Check role/domain
         Call Bridge API           Set role + domains          Guard route access
         Set headers               Return user object          Allow/deny
```

And a **role permissions matrix:**
| Capability | Talent | Company | VC Manager | Admin |
|-----------|--------|---------|-----------|-------|
| Job board | Yes | Yes | Yes | Yes |
| Profile | Yes | Yes | Yes | Yes |
| Post jobs | — | Yes | Yes | Yes |
| Dashboard | — | — | Yes | Yes |
| Portfolio mgmt | — | — | Yes | Yes |
| Branding config | — | — | Yes | Yes |
| Global oversight | — | — | — | Yes |
| User management | — | — | — | Yes |

---

### Section 5: Database & Data Model

`[VISUAL]` **Entity relationship diagram** — Generate a clean ERD showing the 11 models and their relationships:

- **Job** ← links to → **PortfolioCompany** (via companyDomain)
- **PortfolioCompany** → **VcNetwork** (many-to-one via vcDomain)
- **PortfolioAtsCache** keyed by companyDomain (unique)
- **VcBranding** keyed by vcSlug
- **SavedJob** composite: bridgeUserId + jobId
- **ActivityLog** → vcDomain
- **AdminAccess** → bridgeUserId (unique)

Key design call-outs:
- `postedAt` vs. `createdAt` separation on Jobs (original ATS date vs. sync date)
- PortfolioAtsCache as the performance optimization layer
- JSON fields on VcBranding for flexible link configuration

---

### Section 6: Design System in Practice

`[VISUAL]` **Component inventory visualization** — Show the 57 components organized by domain as a visual map:

- **Layout (4):** TopNav (glassmorphism, 56px), AppSidebar, NavSwitcher, UserProfilePopup
- **Jobs (4):** JobCard, JobFilters, JobBoardTabBar, JobPostForm
- **Careers (13):** VcHeader, CareersHero, CareersJobCard, CareersFooter, OfflineScreen, SkeletonJobCard, etc.
- **Admin (8):** AdminTable, StatCard, SyncActionCard, ConfirmDialog, etc.
- **VC Manager (5):** JobTrendChart, VcBrandingForm, PreviewIframe, etc.
- **Shared (2):** CompanySidebarCard, WarmIntrosCard
- **UI Primitives (21):** Extended shadcn/ui with Bridge variants

`[VISUAL]` **Accessibility checklist visual:**
- WCAG AA color contrast on all text
- Focus rings: 2px Royal, 2px offset
- Reduced motion support via `@media (prefers-reduced-motion)`
- Semantic HTML with heading hierarchy
- Keyboard navigation (Radix primitives)

`[VISUAL]` **Animation spec visual** — Show the micro-interaction system:
- Card stagger: 8 cards, 50ms delay, 300ms total
- Card hover: translateY(-2px) + Ds3 shadow (200ms)
- Nav transitions: 150ms color, 200ms shadow/transform

---

### Section 7: Outcomes & Reflection

#### What I Built (by the numbers)

`[VISUAL]` **Stats grid or infographic** — Make these numbers visually impactful, not a bulleted list:

- 1 production SaaS platform, live at [jobs.brdg.app](https://jobs.brdg.app)
- 15+ pages across 4 user roles
- 57 custom UI components (8,196 lines)
- 13 ATS provider integrations + fallback scraper (6,046 lines of sync logic)
- 11 database models with 5 custom indexes
- 3 scheduled cron jobs (discovery, job refresh, portfolio sync)
- 9 custom AI skills for development quality
- Enterprise-grade 3-layer auth system
- Multi-tenant branded career pages with custom domain support
- Full activity audit logging

#### What This Project Proves

`[VISUAL]` **Takeaway cards** — Generate these as visual cards, not just text:

1. **Product designers can ship production software** — with the right tools, design thinking translates directly into working systems.
2. **Agentic AI is a multiplier, not a replacement** — the AI handled implementation; I handled every design decision, architecture choice, and quality gate.
3. **Design systems matter more with AI** — a well-defined design system becomes the instruction set that keeps AI-generated code on-brand and consistent.
4. **The designer-developer gap is closing** — not because designers are becoming engineers, but because AI lets designers express their intent at a level of specificity that produces engineering-quality output.

#### What I'd Do Differently
- Start with more visual artifacts (Figma mockups) before jumping to code
- Build a component playground earlier for design system validation
- Invest in automated visual regression testing to catch design drift

---

### Section 8: Technical Summary

`[VISUAL]` **Tech stack visual** — Not a plain table. Show the stack as a visual architecture layer diagram:

| Layer | Technology |
|-------|-----------|
| **Frontend** | Next.js 16 (App Router, Server Components, Turbopack) |
| **Language** | TypeScript (strict) |
| **Styling** | Tailwind CSS 4 + CSS custom properties + shadcn/ui |
| **State** | Zustand 5 (client) + React Server Components (server) |
| **Charts** | Recharts 3.8 |
| **Database** | Supabase PostgreSQL via Prisma ORM |
| **Auth** | Bridge Cookie SSO (3-layer: Edge proxy → server → API guard) |
| **Scraping** | Cheerio + Playwright Core (gated) |
| **Deployment** | Vercel (auto-deploy + cron) |
| **APIs** | Bridge REST (v1 + v4) + 13 public ATS APIs |
| **Accessibility** | WCAG AA, focus management, reduced motion, semantic HTML |

---

## Color Palette for Portfolio Piece

Use the Bridge Design System colors throughout:
- Primary: Royal Blue `#0038FF`
- Background: Slate 05 `#F9F9FA`
- Text: Charcoal `#0D1531`
- Secondary text: `#3D445A` (80%), `#676C7E` (70%)
- Accent: Sky `#568FFF`, Purple `#7450DA`
- Success: Kelly `#0EA02E`
- Warning: Honey `#E19500`
- Error: Ruby `#E13535`
- Borders: Slate 30 `#D9DBE1`

---

## Tone & Framing Notes

### Voice
Confident but not arrogant. First person. The narrative: "I'm a designer who thinks in systems. I used AI to handle the parts that used to require a separate engineering team. The design thinking is mine; the execution velocity is AI-assisted."

### Frame it as
- A designer who develops (not a developer who designs)
- AI as engineering multiplier (not "AI built this")
- Real production SaaS (not a prototype)
- Design process first, then technical depth
- The 9 custom skills as a design quality mechanism
- Scope equivalent to designer + 2-3 engineers over several months
- The feedback loop: design → spec → implement → review → refine

### Do NOT frame it as
- A "no-code" project — this is real TypeScript, SQL, and API architecture
- "AI built this for me" — I designed every decision; AI implemented them
- A prototype or concept — this is live at [jobs.brdg.app](https://jobs.brdg.app)
- Primarily a technical achievement — it's a design achievement enabled by AI
