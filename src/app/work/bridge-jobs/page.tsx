'use client';

import Link from 'next/link';
import { useReducedMotion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SectionReveal, StaggerContainer, StaggerItem, HeroReveal, HeroItem } from '@/lib/motion';

/* ─── Inline SVG Icons (stroke style, matching project conventions) ─── */

function IconUser({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    </svg>
  );
}

function IconBuilding({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
    </svg>
  );
}

function IconChart({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>
  );
}

function IconShield({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  );
}

function IconLayers({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0L12 17.25l-5.571-3m11.142 0L21.75 16.5 12 21.75l-9.75-5.25 4.179-2.25" />
    </svg>
  );
}

function IconEye({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function IconHeart({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
  );
}

function IconBolt({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  );
}

function IconGlobe({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
  );
}

function IconCube({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
    </svg>
  );
}

function IconCog({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function IconSparkle({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
    </svg>
  );
}

function IconCheck({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

function IconX({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

function IconArrowRight({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

/* ─── Data ──────────────────────────────────────────── */

const stats = [
  { value: '13', label: 'ATS Integrations' },
  { value: '120+', label: 'Portfolio Companies' },
  { value: '57', label: 'UI Components' },
  { value: '11', label: 'Database Models' },
  { value: '15+', label: 'Pages Shipped' },
  { value: '9', label: 'Custom AI Skills' },
];

const competitors = [
  {
    name: 'Getro',
    model: 'Auto-scraping aggregator + warm intros',
    price: '$210–500/mo',
    limitation: 'Basic UI, no rich profiles, no community',
    advantage: 'Rich profiles, community, endorsements, AI matching',
  },
  {
    name: 'Consider',
    model: 'Talent circles + recruiter tools',
    price: 'Enterprise',
    limitation: 'Expensive, complex setup, client churn risk',
    advantage: 'No churn risk, integrated platform ecosystem',
  },
  {
    name: 'Wellfound',
    model: 'Public marketplace, 10M+ candidates',
    price: 'Free–$499/mo',
    limitation: 'Public = noisy, no network trust signals',
    advantage: 'Private, vetted, network-endorsed talent',
  },
];

const personas = [
  {
    icon: IconUser,
    role: 'Talent',
    context: 'Job seekers in the Bridge network',
    goal: 'Discover curated roles with warm intro paths instead of competing on noisy public boards.',
    needs: ['See which VCs back each company', 'Find mutual connections for warm intros', 'One-click apply with pre-filled profile'],
  },
  {
    icon: IconBuilding,
    role: 'Hiring Manager',
    context: 'CEOs, CTOs, VP People at portfolio companies',
    goal: 'Fill roles fast with vetted, network-endorsed candidates.',
    needs: ['Post jobs from existing ATS without duplication', 'See which candidates have warm paths', 'Track application pipeline per VC network'],
  },
  {
    icon: IconChart,
    role: 'VC / Fund Manager',
    context: 'Partners and talent partners at VC firms',
    goal: 'Help portfolio companies hire and track talent flow across the network.',
    needs: ['Dashboard with hiring velocity metrics', 'Branded career page for the fund', 'Control which companies are visible'],
  },
];

const designPrinciples = [
  { icon: IconGlobe, title: 'Network-first', description: 'Every screen reinforces that this is a private, trusted network — not a public job board. The VC brand is always visible.' },
  { icon: IconShield, title: 'Trust signals everywhere', description: 'VC badges, endorsements, and mutual connections visible at all interaction points. Trust is the core differentiator.' },
  { icon: IconLayers, title: 'Progressive disclosure', description: 'Essential info first, detail on demand. Job cards show what matters — the full story lives in the detail view.' },
  { icon: IconHeart, title: 'Warm over cold', description: 'Always surface warm intro paths before a generic "Apply" button. The network advantage should feel tangible.' },
  { icon: IconBolt, title: 'Minimal friction', description: 'One-click apply, auto-filled forms, SSO login. Every extra step is a candidate lost.' },
];

const designDecisions = [
  {
    title: 'Contextual breadcrumbs via URL params',
    problem: 'When a user navigates from a company page to a job detail, they lose context of how they got there. Generic breadcrumbs ("Jobs > Software Engineer") don\'t help.',
    solution: 'Implemented contextual breadcrumbs using ?from_company= query params. If you came from "Stripe," the breadcrumb reads "Stripe > Software Engineer" — preserving your mental model of the browsing path.',
    designRationale: 'This follows the principle of recognition over recall (Nielsen\'s heuristic #6). The user never has to remember where they came from — the interface tells them.',
  },
  {
    title: 'Warm intros card with three auth-dependent states',
    problem: 'The warm intros widget needed to show different content based on auth state, but conditionally showing/hiding the entire card would cause jarring layout shifts.',
    solution: 'Designed three states: (1) Not signed in → "Sign in to see warm intro paths" CTA. (2) Signed in, has paths → count badge with intro suggestions. (3) Signed in, no paths → "No warm paths found" message. The card is always visible in all three states.',
    designRationale: 'Layout stability is non-negotiable. Auth-dependent show/hide creates a poor CLS score and a disorienting experience. The card\'s persistent presence also acts as a trust signal — even when empty, it communicates that the network advantage exists.',
  },
  {
    title: 'Branded career pages as a full product surface',
    problem: 'VC networks wanted their own hiring presence, but white-label solutions feel generic and disconnected from the network brand.',
    solution: 'Each VC network gets a fully customizable public career page at /careers/:domain with their own branding: logo, colors, hero image, headline copy, social links, and footer. Not white-label — a distinct product surface with custom domain support, full SEO (meta tags, Open Graph, JSON-LD structured data), and even an offline fallback screen.',
    designRationale: 'The career page IS the VC network\'s talent brand. It needed to feel owned, not rented. This also became the primary distribution channel — VCs share their career page URL, not the Bridge Jobs homepage.',
  },
  {
    title: 'Companies tab alongside Jobs on the main board',
    problem: 'Talent could only browse by job title, which misses a huge signal: the company behind the role. VC-backed companies are inherently trusted, but that signal was buried.',
    solution: 'Added a Companies tab alongside Jobs. Company cards show logo, name, industry, team size, funding stage, open jobs count, and — critically — which VC networks back them. Companies are deduplicated across VCs to prevent redundancy.',
    designRationale: 'Job seekers in VC networks often care more about the company than the specific role. The Companies tab inverts the hierarchy: discover companies first, then explore their open roles. VC badges on company cards reinforce the trust signal at browse-time.',
  },
];

const designSystemTokens = {
  colors: [
    { name: 'Royal Blue', hex: '#0038FF', role: 'Primary' },
    { name: 'Charcoal', hex: '#0D1531', role: 'Text' },
    { name: 'Slate 05', hex: '#F9F9FA', role: 'Background' },
    { name: 'Slate 30', hex: '#D9DBE1', role: 'Borders' },
    { name: 'Kelly', hex: '#0EA02E', role: 'Success' },
    { name: 'Honey', hex: '#E19500', role: 'Warning' },
    { name: 'Ruby', hex: '#E13535', role: 'Error' },
    { name: 'Sky', hex: '#568FFF', role: 'Accent' },
  ],
  typography: 'Mulish, weights 400–700, scale from 12px caption to 36px display',
  spacing: '8px grid system',
  elevation: 'Ds1 (subtle), Ds2 (card), Ds3 (hover/elevated)',
};

const componentInventory = [
  { domain: 'Layout', count: 4, examples: 'TopNav (glassmorphism, 56px), AppSidebar, NavSwitcher, UserProfilePopup' },
  { domain: 'Jobs', count: 4, examples: 'JobCard, JobFilters, JobBoardTabBar, JobPostForm' },
  { domain: 'Careers', count: 13, examples: 'VcHeader, CareersHero, CareersJobCard, CareersFooter, OfflineScreen, SkeletonJobCard' },
  { domain: 'Admin', count: 8, examples: 'AdminTable, StatCard, SyncActionCard, ConfirmDialog' },
  { domain: 'VC Manager', count: 5, examples: 'JobTrendChart, VcBrandingForm, PreviewIframe' },
  { domain: 'Shared', count: 2, examples: 'CompanySidebarCard, WarmIntrosCard' },
  { domain: 'UI Primitives', count: 21, examples: 'Extended shadcn/ui with Bridge variants' },
];

const aiSkills = [
  {
    group: 'Design Quality',
    icon: IconEye,
    skills: [
      { name: 'bridge-design-system', desc: 'Master reference: color tokens, spacing rules, typography, shadows, transitions' },
      { name: 'ui-designer', desc: 'Layout, visual hierarchy, component composition decisions' },
      { name: 'ux-consultant', desc: 'Heuristic evaluation, accessibility, interaction patterns' },
      { name: 'ux-copywriter', desc: 'Tone, microcopy patterns, error messages, empty states' },
    ],
  },
  {
    group: 'Engineering Quality',
    icon: IconCog,
    skills: [
      { name: 'frontend-developer', desc: 'Server Components, dynamic imports, Tailwind merge strategies' },
      { name: 'backend-developer', desc: 'API routes, auth guards, Prisma queries, data validation' },
      { name: 'code-quality', desc: 'TypeScript patterns, error handling, performance optimization' },
      { name: 'code-reviewer', desc: 'Self-review checklist before any code ships' },
    ],
  },
  {
    group: 'Specialist',
    icon: IconSparkle,
    skills: [
      { name: 'accessibility-specialist', desc: 'WCAG AA compliance, focus management, reduced motion, semantic HTML' },
    ],
  },
];

const features = [
  {
    title: 'Public Job Board',
    route: '/jobs',
    description: 'Full-width hero with gradient. Search bar with rounded-full styling and elevated shadow. Tab bar for Jobs / Companies switching. Job cards in responsive grid with staggered fade-in (8 cards, 50ms delay each). Advanced filters: work type, employment type, experience level, salary range, department, VC network, posted within.',
    designDetails: 'The hero gradient establishes brand tone immediately. Search is visually dominant — it\'s the primary action. The filter bar uses horizontal scrolling on mobile to avoid a cramped multi-row layout.',
  },
  {
    title: 'Job Detail',
    route: '/jobs/:id',
    description: 'Two-column layout: main content (title, company, tags, rich HTML description rendered from ATS) + sidebar (company info card + warm intros card). Contextual breadcrumbs via ?from_company= query params.',
    designDetails: 'The sidebar stays fixed while the description scrolls on desktop. The warm intros card sits above the company card — warm paths are the primary differentiator and get top placement.',
  },
  {
    title: 'Companies Browser',
    route: '/jobs?tab=companies',
    description: 'Company cards showing logo, name, industry, team size, funding stage, open jobs count, and VC network badges. Deduplicated across VCs so companies appearing in multiple portfolios show once with multiple badges.',
    designDetails: 'VC badges are the trust signal — they sit on the card surface at all times, not tucked behind a click. Card density is optimized for scanning: enough info to decide if you want to dig in, not so much that it overwhelms.',
  },
  {
    title: 'Branded Career Pages',
    route: '/careers/:domain',
    description: 'Fully customizable per-VC: header with logo, hero section with custom colors and headline, job filters, job cards, companies tab, talent tab, and footer with social links. Custom domain support, SEO meta tags, Open Graph, JSON-LD structured data, and offline fallback screen.',
    designDetails: 'This is where multi-tenancy meets brand identity. Each VC fund\'s career page feels like their own product — not a widget embedded on someone else\'s site. The branding form in the VC dashboard includes a live preview iframe so managers see changes in real-time.',
  },
  {
    title: 'VC Manager Dashboard',
    route: '/vc/:domain/dashboard',
    description: 'Sidebar navigation, color-coded stat cards with freshness indicators (green < 6h, amber 6–48h, red > 48h since last sync), 12-week job trend chart using Recharts with Royal gradient fill, top hiring companies table, and activity audit log.',
    designDetails: 'The color-coded freshness system makes data staleness immediately visible — no need to read timestamps. The trend chart uses a gradient fill rather than a solid color to add depth without competing with the stat cards.',
  },
  {
    title: 'Admin Panel',
    route: '/admin/*',
    description: 'Global oversight with aggregate stats across all VC networks, job management with bulk edit capabilities, VC network CRUD, user management, and sync controls. Reuses VC Manager components via shared vc-dashboard-tables.tsx module with configurable basePath prop.',
    designDetails: 'Component reuse was a deliberate architectural choice. The Admin view and VC Manager view share the same table components — the only difference is the data scope (all networks vs. one network). This kept the design language consistent and reduced the component surface area.',
  },
];

const authLayers = [
  { layer: 'Edge Proxy', file: 'proxy.ts', responsibility: 'Read cookies, call Bridge API, set headers. Runs on every request at the edge.' },
  { layer: 'Server Resolver', file: 'auth.ts', responsibility: 'Build AuthUser object, determine role (talent, company, vc-manager, admin), resolve domain access.' },
  { layer: 'API Guard', file: 'check-api-access.ts', responsibility: 'Check role + domain permissions on every API route. Allow or deny with appropriate error codes.' },
];

const rolePermissions = [
  { capability: 'Job board', talent: true, company: true, vc: true, admin: true },
  { capability: 'Profile', talent: true, company: true, vc: true, admin: true },
  { capability: 'Post jobs', talent: false, company: true, vc: true, admin: true },
  { capability: 'Dashboard', talent: false, company: false, vc: true, admin: true },
  { capability: 'Portfolio mgmt', talent: false, company: false, vc: true, admin: true },
  { capability: 'Branding config', talent: false, company: false, vc: true, admin: true },
  { capability: 'Global oversight', talent: false, company: false, vc: false, admin: true },
  { capability: 'User management', talent: false, company: false, vc: false, admin: true },
];

const techStack = [
  { layer: 'Frontend', tech: 'Next.js 16 (App Router, Server Components, Turbopack)' },
  { layer: 'Language', tech: 'TypeScript (strict mode)' },
  { layer: 'Styling', tech: 'Tailwind CSS 4 + CSS custom properties + shadcn/ui' },
  { layer: 'State', tech: 'Zustand 5 (client) + React Server Components (server)' },
  { layer: 'Charts', tech: 'Recharts 3.8 (area, bar, trend charts)' },
  { layer: 'Database', tech: 'Supabase PostgreSQL via Prisma ORM (11 models, 5 indexes)' },
  { layer: 'Auth', tech: 'Bridge Cookie SSO — 3-layer: Edge proxy → Server resolver → API guard' },
  { layer: 'Scraping', tech: 'Cheerio + Playwright Core (JSON-LD, __NEXT_DATA__, DOM heuristics)' },
  { layer: 'Deployment', tech: 'Vercel (auto-deploy from main + 3 cron jobs)' },
  { layer: 'APIs', tech: 'Bridge REST (v1 + v4) + 13 public ATS provider APIs' },
  { layer: 'Accessibility', tech: 'WCAG AA, focus rings, reduced motion, semantic HTML, Radix primitives' },
];

const takeaways = [
  {
    icon: IconCube,
    title: 'Product designers can ship production software',
    description: 'With the right tools, design thinking translates directly into working systems. This isn\'t a prototype — it\'s a production SaaS with 13 API integrations, cron jobs, and real users.',
  },
  {
    icon: IconSparkle,
    title: 'Agentic AI is a multiplier, not a replacement',
    description: 'The AI handled TypeScript, Prisma queries, and API integrations. I handled every product decision, information architecture choice, visual hierarchy call, and quality gate. The division was clear.',
  },
  {
    icon: IconLayers,
    title: 'Design systems matter more with AI',
    description: 'A well-defined design system became the instruction set that kept AI-generated code on-brand. Without tokens, specs, and principles, the AI would have produced inconsistent output.',
  },
  {
    icon: IconBolt,
    title: 'The designer-developer gap is closing',
    description: 'Not because designers are becoming engineers, but because AI lets designers express their intent at a level of specificity that produces engineering-quality output.',
  },
];

/* ─── Utility Components ────────────────────────────── */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-medium text-[var(--color-text-tertiary)] uppercase tracking-wide mb-3">
      {children}
    </p>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color-text-primary)] tracking-tight mb-6 leading-snug">
      {children}
    </h2>
  );
}

function Divider() {
  return <hr className="border-[var(--color-border)] my-16 md:my-20" />;
}

/* ─── Page ──────────────────────────────────────────── */

export default function BridgeJobsCaseStudy() {
  const shouldReduceMotion = useReducedMotion();

  const Reveal = shouldReduceMotion ? 'div' : SectionReveal;
  const Stagger = shouldReduceMotion ? 'div' : StaggerContainer;
  const Item = shouldReduceMotion ? 'div' : StaggerItem;

  return (
    <>
      <Header />
      <main className="pt-24 md:pt-28 pb-20 md:pb-32">
        <div className="max-w-[var(--max-width-content)] mx-auto px-6 lg:px-8">

          {/* Back Link */}
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] transition-colors group mb-8"
          >
            <svg className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Back to work
          </Link>

          {/* ─── HERO ─── */}
          {shouldReduceMotion ? (
            <header className="mb-16 md:mb-20">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="text-xs font-medium text-[var(--color-text-tertiary)] uppercase tracking-wide">
                  Product Design · Full-Stack Development · Agentic AI
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-green-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  Live in Production
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-semibold text-[var(--color-text-primary)] tracking-tight leading-tight mb-4">
                Bridge Jobs
              </h1>
              <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed max-w-3xl mb-3">
                A multi-ATS job aggregation platform for VC networks — designed and developed by a product designer using agentic AI. Not a prototype. A production SaaS with 13 API integrations, enterprise auth, and real-time data sync.
              </p>
              <a href="https://jobs.brdg.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] transition-colors">
                jobs.brdg.app
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6m0 0v6m0-6L10 14" /></svg>
              </a>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 mt-10 pt-8 border-t border-[var(--color-border)]">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-2xl md:text-3xl font-semibold text-[var(--color-text-primary)] tracking-tight">{stat.value}</p>
                    <p className="text-xs text-[var(--color-text-tertiary)] mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </header>
          ) : (
            <HeroReveal>
              <header className="mb-16 md:mb-20">
                <HeroItem>
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="text-xs font-medium text-[var(--color-text-tertiary)] uppercase tracking-wide">Product Design · Full-Stack Development · Agentic AI</span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-green-600"><span className="w-1.5 h-1.5 rounded-full bg-green-500" />Live in Production</span>
                  </div>
                </HeroItem>
                <HeroItem>
                  <h1 className="text-3xl md:text-5xl font-semibold text-[var(--color-text-primary)] tracking-tight leading-tight mb-4">Bridge Jobs</h1>
                </HeroItem>
                <HeroItem>
                  <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed max-w-3xl mb-3">
                    A multi-ATS job aggregation platform for VC networks — designed and developed by a product designer using agentic AI. Not a prototype. A production SaaS with 13 API integrations, enterprise auth, and real-time data sync.
                  </p>
                  <a href="https://jobs.brdg.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] transition-colors">
                    jobs.brdg.app
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6m0 0v6m0-6L10 14" /></svg>
                  </a>
                </HeroItem>
                <HeroItem>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 mt-10 pt-8 border-t border-[var(--color-border)]">
                    {stats.map((stat) => (
                      <div key={stat.label}>
                        <p className="text-2xl md:text-3xl font-semibold text-[var(--color-text-primary)] tracking-tight">{stat.value}</p>
                        <p className="text-xs text-[var(--color-text-tertiary)] mt-1">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </HeroItem>
              </header>
            </HeroReveal>
          )}

          {/* ─── SECTION 1: THE PROBLEM ─── */}
          <Reveal>
            <section>
              <SectionLabel>01 — The Problem</SectionLabel>
              <SectionTitle>VC talent networks were fragmented across dozens of ATS providers</SectionTitle>

              <div className="max-w-3xl space-y-4 text-[var(--color-text-secondary)] leading-relaxed mb-10">
                <p>
                  Bridge is an existing VC networking platform that connects investors, portfolio companies, and talent through warm introductions. The platform had a strong social graph and intro system — but no way for portfolio companies to surface their open roles to network talent, and no way for talent to discover jobs across the VC ecosystem.
                </p>
                <p>
                  VC networks like Techstars, Orange DAO, and Angel Invest Ventures each had portfolio companies hiring across dozens of different ATS providers — Greenhouse, Lever, Workable, Ashby, and more. There was no unified view. Talent in the network had to manually check each company&apos;s career page — or worse, use noisy public job boards where the &quot;network advantage&quot; disappeared entirely.
                </p>
              </div>

              {/* Before / After */}
              <div className="grid md:grid-cols-2 gap-4 mb-10">
                <div className="rounded-xl border border-[var(--color-border)] p-6 bg-[var(--color-bg-elevated)]">
                  <p className="text-xs font-medium text-[var(--color-text-tertiary)] uppercase tracking-wide mb-4">Before — Fragmented</p>
                  <div className="space-y-2 text-sm text-[var(--color-text-secondary)]">
                    {['Greenhouse careers page', 'Lever careers page', 'Workable careers page', 'Ashby careers page', 'Recruitee careers page', '8 more ATS career pages...'].map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <IconX className="text-[var(--color-text-tertiary)] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                    <p className="text-xs text-[var(--color-text-tertiary)] mt-3 pt-3 border-t border-[var(--color-border)]">Talent checks 10+ separate pages manually. Network advantage = zero.</p>
                  </div>
                </div>
                <div className="rounded-xl border border-[var(--color-text-primary)] p-6">
                  <p className="text-xs font-medium text-[var(--color-text-primary)] uppercase tracking-wide mb-4">After — Unified</p>
                  <div className="space-y-2 text-sm text-[var(--color-text-secondary)]">
                    {['All 13 ATS providers → one board', 'VC trust signals on every job', 'Warm intro paths visible', 'Company discovery by network', 'Branded pages per VC fund', 'Real-time sync every 6 hours'].map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <IconCheck className="text-[var(--color-text-primary)] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                    <p className="text-xs text-[var(--color-text-tertiary)] mt-3 pt-3 border-t border-[var(--color-border)]">One trusted board. Network advantage = the product.</p>
                  </div>
                </div>
              </div>

              {/* Competitive landscape */}
              <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-4">Competitive Landscape</h3>
              <div className="rounded-xl border border-[var(--color-border)] overflow-hidden mb-10">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-[var(--color-border)] bg-[var(--color-bg-elevated)]">
                        <th className="text-left px-5 py-3 text-xs font-medium text-[var(--color-text-tertiary)] uppercase tracking-wide">Platform</th>
                        <th className="text-left px-5 py-3 text-xs font-medium text-[var(--color-text-tertiary)] uppercase tracking-wide">Model</th>
                        <th className="text-left px-5 py-3 text-xs font-medium text-[var(--color-text-tertiary)] uppercase tracking-wide">Price</th>
                        <th className="text-left px-5 py-3 text-xs font-medium text-[var(--color-text-tertiary)] uppercase tracking-wide">Limitation</th>
                        <th className="text-left px-5 py-3 text-xs font-medium text-[var(--color-text-tertiary)] uppercase tracking-wide">Bridge Advantage</th>
                      </tr>
                    </thead>
                    <tbody>
                      {competitors.map((comp) => (
                        <tr key={comp.name} className="border-b border-[var(--color-border)] last:border-0">
                          <td className="px-5 py-3 font-medium text-[var(--color-text-primary)]">{comp.name}</td>
                          <td className="px-5 py-3 text-[var(--color-text-secondary)]">{comp.model}</td>
                          <td className="px-5 py-3 text-[var(--color-text-secondary)]">{comp.price}</td>
                          <td className="px-5 py-3 text-[var(--color-text-secondary)]">{comp.limitation}</td>
                          <td className="px-5 py-3 text-[var(--color-text-primary)] font-medium">{comp.advantage}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="rounded-xl bg-[var(--color-bg-elevated)] border border-[var(--color-border)] p-6">
                <p className="text-sm font-semibold text-[var(--color-text-primary)] mb-2">Design Opportunity</p>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  Build a private, trust-first talent marketplace that leverages Bridge&apos;s existing social graph. Every job comes through a VC network. Every candidate has warm intro paths. Every company is investor-vetted. The network IS the product.
                </p>
              </div>
            </section>
          </Reveal>

          <Divider />

          {/* ─── SECTION 2: DESIGN PROCESS ─── */}
          <Reveal>
            <section>
              <SectionLabel>02 — Design Process</SectionLabel>
              <SectionTitle>From product spec to design system — designing for four user roles</SectionTitle>

              <div className="max-w-3xl space-y-4 text-[var(--color-text-secondary)] leading-relaxed mb-10">
                <p>
                  Before touching any UI, I wrote a comprehensive product specification covering three user personas with their goals, pain points, and workflows. I mapped a feature matrix with must-have vs. nice-to-have prioritization, designed the data model architecture aligned to Bridge&apos;s existing API, and synthesized a competitive analysis into five design principles that would guide every screen.
                </p>
              </div>

              {/* Personas */}
              <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-6">User Personas</h3>
              <div className="grid md:grid-cols-3 gap-4 mb-12">
                {personas.map((persona) => {
                  const Icon = persona.icon;
                  return (
                    <div key={persona.role} className="rounded-xl border border-[var(--color-border)] p-5">
                      <div className="w-9 h-9 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)] flex items-center justify-center mb-3">
                        <Icon className="text-[var(--color-text-primary)]" />
                      </div>
                      <p className="text-sm font-semibold text-[var(--color-text-primary)] mb-0.5">{persona.role}</p>
                      <p className="text-xs text-[var(--color-text-tertiary)] mb-3">{persona.context}</p>
                      <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-3">{persona.goal}</p>
                      <ul className="space-y-1.5">
                        {persona.needs.map((need) => (
                          <li key={need} className="text-xs text-[var(--color-text-tertiary)] flex gap-1.5">
                            <IconArrowRight className="shrink-0 mt-0.5" />
                            {need}
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>

              {/* Design Principles */}
              <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-6">Design Principles</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
                {designPrinciples.map((principle, i) => {
                  const Icon = principle.icon;
                  return (
                    <div key={principle.title} className="rounded-xl border border-[var(--color-border)] p-5">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-9 h-9 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)] flex items-center justify-center shrink-0">
                          <Icon className="text-[var(--color-text-primary)]" />
                        </div>
                        <div>
                          <p className="text-xs text-[var(--color-text-tertiary)]">0{i + 1}</p>
                          <p className="text-sm font-semibold text-[var(--color-text-primary)]">{principle.title}</p>
                        </div>
                      </div>
                      <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{principle.description}</p>
                    </div>
                  );
                })}
              </div>

              {/* Design System */}
              <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-4">Design System: Bridge Design Language</h3>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-6 max-w-3xl">
                I created a comprehensive design system that I then codified into CSS custom properties and Tailwind utilities. This became the single source of truth — and critically, the instruction set that kept AI-generated code consistent with the design intent.
              </p>
              <div className="rounded-xl border border-[var(--color-border)] p-6 mb-12">
                <p className="text-xs font-medium text-[var(--color-text-tertiary)] uppercase tracking-wide mb-4">Color Palette</p>
                <div className="flex flex-wrap gap-3 mb-6">
                  {designSystemTokens.colors.map((color) => (
                    <div key={color.name} className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-md border border-[var(--color-border)]" style={{ backgroundColor: color.hex }} />
                      <div>
                        <p className="text-xs font-medium text-[var(--color-text-primary)]">{color.name}</p>
                        <p className="text-[10px] text-[var(--color-text-tertiary)]">{color.hex} · {color.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid sm:grid-cols-3 gap-4 pt-4 border-t border-[var(--color-border)]">
                  <div>
                    <p className="text-xs font-medium text-[var(--color-text-tertiary)] mb-1">Typography</p>
                    <p className="text-xs text-[var(--color-text-secondary)]">{designSystemTokens.typography}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-[var(--color-text-tertiary)] mb-1">Spacing</p>
                    <p className="text-xs text-[var(--color-text-secondary)]">{designSystemTokens.spacing}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-[var(--color-text-tertiary)] mb-1">Elevation</p>
                    <p className="text-xs text-[var(--color-text-secondary)]">{designSystemTokens.elevation}</p>
                  </div>
                </div>
              </div>

              {/* Key Design Decisions */}
              <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-6">Key Design Decisions</h3>
              <div className="space-y-4">
                {designDecisions.map((item) => (
                  <div key={item.title} className="rounded-xl border border-[var(--color-border)] p-6">
                    <p className="text-sm font-semibold text-[var(--color-text-primary)] mb-3">{item.title}</p>
                    <div className="space-y-3 text-sm text-[var(--color-text-secondary)] leading-relaxed">
                      <div>
                        <span className="text-xs font-medium text-[var(--color-text-tertiary)] uppercase tracking-wide">Problem: </span>
                        {item.problem}
                      </div>
                      <div>
                        <span className="text-xs font-medium text-[var(--color-text-tertiary)] uppercase tracking-wide">Solution: </span>
                        {item.solution}
                      </div>
                      <div className="pt-3 border-t border-[var(--color-border)]">
                        <span className="text-xs font-medium text-[var(--color-text-tertiary)] uppercase tracking-wide">Design rationale: </span>
                        <span className="text-[var(--color-text-primary)]">{item.designRationale}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </Reveal>

          <Divider />

          {/* ─── SECTION 3: AI DEVELOPMENT STORY ─── */}
          <Reveal>
            <section>
              <SectionLabel>03 — The AI Development Story</SectionLabel>
              <SectionTitle>Design-driven development with agentic AI — not &quot;vibe coding&quot;</SectionTitle>

              <div className="max-w-3xl space-y-4 text-[var(--color-text-secondary)] leading-relaxed mb-10">
                <p>
                  I&apos;m a product designer, not a software engineer. I can read code, understand architecture, and think in systems — but I don&apos;t write production TypeScript from memory. For Bridge Jobs, I used Claude Code (Anthropic&apos;s agentic coding tool) as my development partner.
                </p>
                <p>
                  This wasn&apos;t &quot;vibe coding&quot; — asking AI to generate a landing page and hoping it works. This was a rigorous, design-driven development process where I wrote detailed specs, authored 9 custom AI skills to maintain design quality, reviewed every output against my design intent, and iterated until the implementation matched the vision.
                </p>
                <p>
                  The scope of what I shipped is equivalent to what a designer plus 2–3 engineers would produce over several months. The AI handled the implementation; I handled every design decision, architecture choice, and quality gate.
                </p>
              </div>

              {/* Approach comparison */}
              <div className="grid md:grid-cols-2 gap-4 mb-12">
                <div className="rounded-xl border border-[var(--color-border)] p-6 bg-[var(--color-bg-elevated)]">
                  <div className="flex items-center gap-2 mb-4">
                    <IconX className="text-[var(--color-text-tertiary)]" />
                    <p className="text-xs font-medium text-[var(--color-text-tertiary)] uppercase tracking-wide">Vibe Coding</p>
                  </div>
                  <ul className="space-y-2.5 text-sm text-[var(--color-text-secondary)]">
                    <li className="flex gap-2"><span className="text-[var(--color-text-tertiary)] shrink-0">→</span>Vague prompt</li>
                    <li className="flex gap-2"><span className="text-[var(--color-text-tertiary)] shrink-0">→</span>Generic output</li>
                    <li className="flex gap-2"><span className="text-[var(--color-text-tertiary)] shrink-0">→</span>Hope it works</li>
                    <li className="flex gap-2"><span className="text-[var(--color-text-tertiary)] shrink-0">→</span>Redo everything</li>
                  </ul>
                </div>
                <div className="rounded-xl border border-[var(--color-text-primary)] p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <IconCheck className="text-[var(--color-text-primary)]" />
                    <p className="text-xs font-medium text-[var(--color-text-primary)] uppercase tracking-wide">Design-Driven AI Dev</p>
                  </div>
                  <ul className="space-y-2.5 text-sm text-[var(--color-text-secondary)]">
                    <li className="flex gap-2"><span className="text-[var(--color-text-primary)] shrink-0">→</span>Write detailed spec</li>
                    <li className="flex gap-2"><span className="text-[var(--color-text-primary)] shrink-0">→</span>AI reads specs + custom skills</li>
                    <li className="flex gap-2"><span className="text-[var(--color-text-primary)] shrink-0">→</span>Review against design intent</li>
                    <li className="flex gap-2"><span className="text-[var(--color-text-primary)] shrink-0">→</span>Iterate until it matches the vision</li>
                  </ul>
                </div>
              </div>

              {/* Design-to-Code Pipeline */}
              <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-4">The Design-to-Code Pipeline</h3>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-6 max-w-3xl">
                This wasn&apos;t a linear waterfall. It was an iterative loop where I owned the design intent and quality, and the AI owned the implementation velocity.
              </p>
              <div className="flex flex-wrap gap-2 mb-12">
                {[
                  { step: 'Design Decision', owner: 'me' },
                  { step: 'Write Spec', owner: 'me' },
                  { step: 'AI Reads Specs + Skills', owner: 'ai' },
                  { step: 'AI Implements', owner: 'ai' },
                  { step: 'Review vs. Design Intent', owner: 'me' },
                  { step: 'Iterate', owner: 'both' },
                  { step: 'Ship to Vercel', owner: 'ai' },
                ].map((item) => (
                  <div key={item.step} className="flex items-center gap-2">
                    <span className={`px-3 py-1.5 text-xs font-medium rounded-lg border ${
                      item.owner === 'me'
                        ? 'border-[var(--color-text-primary)] text-[var(--color-text-primary)]'
                        : item.owner === 'ai'
                          ? 'border-[var(--color-border)] text-[var(--color-text-tertiary)] bg-[var(--color-bg-elevated)]'
                          : 'border-[var(--color-border)] text-[var(--color-text-secondary)]'
                    }`}>
                      {item.step}
                    </span>
                    <IconArrowRight className="text-[var(--color-text-tertiary)] last:hidden" />
                  </div>
                ))}
              </div>

              {/* AI Skills */}
              <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-4">9 Custom AI Skills I Authored</h3>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-6 max-w-3xl">
                These aren&apos;t prompts — they&apos;re structured skill files that encode design decisions, coding standards, and quality criteria. They act as a persistent design brief that the AI references on every task.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mb-12">
                {aiSkills.map((group) => {
                  const Icon = group.icon;
                  return (
                    <div key={group.group} className="rounded-xl border border-[var(--color-border)] p-5">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)] flex items-center justify-center">
                          <Icon className="text-[var(--color-text-primary)]" />
                        </div>
                        <p className="text-xs font-medium text-[var(--color-text-tertiary)] uppercase tracking-wide">{group.group}</p>
                      </div>
                      <div className="space-y-3">
                        {group.skills.map((skill) => (
                          <div key={skill.name}>
                            <p className="text-sm font-medium text-[var(--color-text-primary)]">{skill.name}</p>
                            <p className="text-xs text-[var(--color-text-tertiary)] leading-relaxed">{skill.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* AI vs Designer */}
              <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-6">What AI Handled vs. What Required a Designer</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="rounded-xl border border-[var(--color-border)] p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)] flex items-center justify-center">
                      <IconCog className="text-[var(--color-text-tertiary)]" />
                    </div>
                    <p className="text-xs font-medium text-[var(--color-text-tertiary)] uppercase tracking-wide">AI Handled</p>
                  </div>
                  <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
                    {['TypeScript implementation', 'Prisma DB queries & schemas', '13 ATS API integrations', 'Auth flows & RBAC logic', 'Build tooling & configuration', 'Edge cases derived from specs', 'Cron jobs & sync pipelines'].map((item) => (
                      <li key={item} className="flex gap-2"><span className="text-[var(--color-text-tertiary)] shrink-0">•</span>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl border border-[var(--color-border)] p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)] flex items-center justify-center">
                      <IconEye className="text-[var(--color-text-primary)]" />
                    </div>
                    <p className="text-xs font-medium text-[var(--color-text-tertiary)] uppercase tracking-wide">Designer Handled</p>
                  </div>
                  <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
                    {['Product decisions — what to build and why', 'Information architecture for 4 roles', 'Visual hierarchy and layout choices', 'Design system creation and codification', 'UX patterns (breadcrumbs, 3-state cards, trust signals)', 'Quality control & design consistency', 'Competitive analysis & product strategy'].map((item) => (
                      <li key={item} className="flex gap-2"><span className="text-[var(--color-text-primary)] shrink-0">•</span>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          </Reveal>

          <Divider />

          {/* ─── SECTION 4: THE PRODUCT ─── */}
          <Reveal>
            <section>
              <SectionLabel>04 — The Product</SectionLabel>
              <SectionTitle>15+ pages across 4 user roles — a feature deep-dive</SectionTitle>

              <Stagger className="grid md:grid-cols-2 gap-4 mb-12">
                {features.map((feature) => (
                  <Item key={feature.title}>
                    <div className="rounded-xl border border-[var(--color-border)] p-6 h-full">
                      <div className="flex items-baseline justify-between gap-2 mb-2">
                        <p className="text-sm font-semibold text-[var(--color-text-primary)]">{feature.title}</p>
                        <code className="text-[10px] text-[var(--color-text-tertiary)] bg-[var(--color-bg)] border border-[var(--color-border)] px-1.5 py-0.5 rounded shrink-0">{feature.route}</code>
                      </div>
                      <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-3">{feature.description}</p>
                      <p className="text-xs text-[var(--color-text-tertiary)] leading-relaxed pt-3 border-t border-[var(--color-border)]">
                        <span className="font-medium">Design detail: </span>{feature.designDetails}
                      </p>
                    </div>
                  </Item>
                ))}
              </Stagger>

              {/* Auth System */}
              <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-4">Authentication Architecture</h3>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-6 max-w-3xl">
                Enterprise-grade, three-layer authentication with role-based access control for four user types. Designed so that auth failures are graceful — users see appropriate UI for their role, never a broken page.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                {authLayers.map((layer, i) => (
                  <div key={layer.layer} className="rounded-xl border border-[var(--color-border)] p-5">
                    <p className="text-xs text-[var(--color-text-tertiary)] mb-1">Layer {i + 1}</p>
                    <p className="text-sm font-semibold text-[var(--color-text-primary)] mb-1">{layer.layer}</p>
                    <code className="text-[10px] text-[var(--color-text-tertiary)]">{layer.file}</code>
                    <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed mt-2">{layer.responsibility}</p>
                  </div>
                ))}
              </div>

              {/* Role Permissions */}
              <div className="rounded-xl border border-[var(--color-border)] overflow-hidden">
                <div className="bg-[var(--color-bg-elevated)] px-5 py-3 border-b border-[var(--color-border)]">
                  <p className="text-xs font-medium text-[var(--color-text-tertiary)] uppercase tracking-wide">Role Permissions Matrix</p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-[var(--color-border)]">
                        <th className="text-left px-5 py-2.5 text-xs font-medium text-[var(--color-text-tertiary)]">Capability</th>
                        <th className="text-center px-3 py-2.5 text-xs font-medium text-[var(--color-text-tertiary)]">Talent</th>
                        <th className="text-center px-3 py-2.5 text-xs font-medium text-[var(--color-text-tertiary)]">Company</th>
                        <th className="text-center px-3 py-2.5 text-xs font-medium text-[var(--color-text-tertiary)]">VC Mgr</th>
                        <th className="text-center px-3 py-2.5 text-xs font-medium text-[var(--color-text-tertiary)]">Admin</th>
                      </tr>
                    </thead>
                    <tbody>
                      {rolePermissions.map((row) => (
                        <tr key={row.capability} className="border-b border-[var(--color-border)] last:border-0">
                          <td className="px-5 py-2.5 text-[var(--color-text-secondary)]">{row.capability}</td>
                          {[row.talent, row.company, row.vc, row.admin].map((allowed, i) => (
                            <td key={i} className="text-center px-3 py-2.5">
                              {allowed
                                ? <IconCheck className="inline-block text-green-600" />
                                : <span className="text-[var(--color-text-tertiary)]">—</span>
                              }
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          </Reveal>

          <Divider />

          {/* ─── SECTION 5: DESIGN SYSTEM IN PRACTICE ─── */}
          <Reveal>
            <section>
              <SectionLabel>05 — Design System in Practice</SectionLabel>
              <SectionTitle>57 components across 7 domains — built for consistency at scale</SectionTitle>

              <div className="max-w-3xl text-sm text-[var(--color-text-secondary)] leading-relaxed mb-8">
                <p>
                  The component inventory was organized by domain, not by visual similarity. Each domain maps to a user context, making it intuitive for the AI to know which components to use where. The design system wasn&apos;t an afterthought — it was authored before the first line of code, then codified into CSS custom properties and Tailwind utilities.
                </p>
              </div>

              <div className="rounded-xl border border-[var(--color-border)] overflow-hidden mb-10">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-[var(--color-border)] bg-[var(--color-bg-elevated)]">
                      <th className="text-left px-5 py-3 text-xs font-medium text-[var(--color-text-tertiary)] uppercase tracking-wide">Domain</th>
                      <th className="text-center px-5 py-3 text-xs font-medium text-[var(--color-text-tertiary)] uppercase tracking-wide w-20">Count</th>
                      <th className="text-left px-5 py-3 text-xs font-medium text-[var(--color-text-tertiary)] uppercase tracking-wide">Key Components</th>
                    </tr>
                  </thead>
                  <tbody>
                    {componentInventory.map((row) => (
                      <tr key={row.domain} className="border-b border-[var(--color-border)] last:border-0">
                        <td className="px-5 py-3 font-medium text-[var(--color-text-primary)]">{row.domain}</td>
                        <td className="text-center px-5 py-3 text-[var(--color-text-secondary)]">{row.count}</td>
                        <td className="px-5 py-3 text-[var(--color-text-secondary)]">{row.examples}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Micro-interactions & Accessibility */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="rounded-xl border border-[var(--color-border)] p-5">
                  <p className="text-xs font-medium text-[var(--color-text-tertiary)] uppercase tracking-wide mb-4">Micro-Interaction Spec</p>
                  <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
                    <li className="flex gap-2"><span className="text-[var(--color-text-tertiary)] shrink-0">•</span>Card stagger: 8 cards, 50ms delay, 300ms total reveal</li>
                    <li className="flex gap-2"><span className="text-[var(--color-text-tertiary)] shrink-0">•</span>Card hover: translateY(-2px) + Ds3 shadow (200ms ease)</li>
                    <li className="flex gap-2"><span className="text-[var(--color-text-tertiary)] shrink-0">•</span>Nav transitions: 150ms color, 200ms shadow/transform</li>
                    <li className="flex gap-2"><span className="text-[var(--color-text-tertiary)] shrink-0">•</span>Page transitions: opacity 300ms with content shift</li>
                  </ul>
                </div>
                <div className="rounded-xl border border-[var(--color-border)] p-5">
                  <p className="text-xs font-medium text-[var(--color-text-tertiary)] uppercase tracking-wide mb-4">Accessibility Standards</p>
                  <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
                    <li className="flex gap-2"><IconCheck className="text-green-600 shrink-0" />WCAG AA color contrast on all text</li>
                    <li className="flex gap-2"><IconCheck className="text-green-600 shrink-0" />Focus rings: 2px Royal Blue, 2px offset</li>
                    <li className="flex gap-2"><IconCheck className="text-green-600 shrink-0" />Reduced motion via @media query</li>
                    <li className="flex gap-2"><IconCheck className="text-green-600 shrink-0" />Semantic HTML with heading hierarchy</li>
                    <li className="flex gap-2"><IconCheck className="text-green-600 shrink-0" />Keyboard navigation (Radix primitives)</li>
                  </ul>
                </div>
              </div>
            </section>
          </Reveal>

          <Divider />

          {/* ─── SECTION 6: TECH STACK ─── */}
          <Reveal>
            <section>
              <SectionLabel>06 — Technical Summary</SectionLabel>
              <SectionTitle>Built for production — not a prototype</SectionTitle>

              <div className="rounded-xl border border-[var(--color-border)] overflow-hidden">
                <table className="w-full text-sm">
                  <tbody>
                    {techStack.map((row) => (
                      <tr key={row.layer} className="border-b border-[var(--color-border)] last:border-0">
                        <td className="px-5 py-3 font-medium text-[var(--color-text-primary)] w-32 md:w-40 align-top">{row.layer}</td>
                        <td className="px-5 py-3 text-[var(--color-text-secondary)]">{row.tech}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </Reveal>

          <Divider />

          {/* ─── SECTION 7: OUTCOMES ─── */}
          <Reveal>
            <section>
              <SectionLabel>07 — Outcomes & Reflection</SectionLabel>
              <SectionTitle>What this project proves about designers and AI</SectionTitle>

              {/* Big stats */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
                {[
                  { value: '1', label: 'Production SaaS' },
                  { value: '57', label: 'UI Components (8,196 lines)' },
                  { value: '13', label: 'ATS Integrations (6,046 lines)' },
                  { value: '3', label: 'Scheduled Cron Jobs' },
                  { value: '9', label: 'Custom AI Skills' },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-xl border border-[var(--color-border)] p-4 text-center">
                    <p className="text-2xl font-semibold text-[var(--color-text-primary)] tracking-tight">{stat.value}</p>
                    <p className="text-xs text-[var(--color-text-tertiary)] mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Takeaways */}
              <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-6">What This Project Proves</h3>
              <Stagger className="grid md:grid-cols-2 gap-4 mb-12">
                {takeaways.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <Item key={item.title}>
                      <div className="rounded-xl border border-[var(--color-border)] p-6 h-full">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-9 h-9 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)] flex items-center justify-center shrink-0">
                            <Icon className="text-[var(--color-text-primary)]" />
                          </div>
                          <p className="text-xs text-[var(--color-text-tertiary)]">0{i + 1}</p>
                        </div>
                        <p className="text-sm font-semibold text-[var(--color-text-primary)] mb-2">{item.title}</p>
                        <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{item.description}</p>
                      </div>
                    </Item>
                  );
                })}
              </Stagger>

              {/* Retrospective */}
              <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-4">What I&apos;d Do Differently</h3>
              <ul className="space-y-2 text-sm text-[var(--color-text-secondary)] max-w-3xl">
                <li className="flex gap-2"><span className="text-[var(--color-text-tertiary)] shrink-0">•</span>Start with more visual artifacts (Figma mockups) before jumping to code — even with AI, having visual references speeds up review cycles</li>
                <li className="flex gap-2"><span className="text-[var(--color-text-tertiary)] shrink-0">•</span>Build a component playground earlier for design system validation — catching inconsistencies at the component level is cheaper than at the page level</li>
                <li className="flex gap-2"><span className="text-[var(--color-text-tertiary)] shrink-0">•</span>Invest in automated visual regression testing to catch design drift — as the codebase grew, manual review became a bottleneck</li>
              </ul>
            </section>
          </Reveal>

          <Divider />

          {/* ─── CTA ─── */}
          <Reveal>
            <section className="text-center">
              <p className="text-lg md:text-xl text-[var(--color-text-secondary)] mb-6">
                Want to see Bridge Jobs live?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://jobs.brdg.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3.5 text-base font-medium bg-[var(--color-accent)] text-[var(--color-bg)] rounded-lg border border-transparent hover:bg-[var(--color-bg)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-all duration-200"
                >
                  Visit jobs.brdg.app
                  <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6m0 0v6m0-6L10 14" /></svg>
                </a>
                <Link
                  href="/work"
                  className="inline-flex items-center justify-center px-6 py-3.5 text-base font-medium text-[var(--color-text-primary)] border border-[var(--color-border)] rounded-lg hover:bg-[var(--color-bg-elevated)] hover:border-[var(--color-text-tertiary)] transition-colors"
                >
                  Back to all work
                </Link>
              </div>
            </section>
          </Reveal>

        </div>
      </main>
      <Footer />
    </>
  );
}
