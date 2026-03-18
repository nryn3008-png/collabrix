'use client';

import Link from 'next/link';
import { useReducedMotion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SectionReveal, StaggerContainer, StaggerItem, HeroReveal, HeroItem } from '@/lib/motion';

/* ─── SVG Icons ─── */

function IconShield({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  );
}

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

function IconCog({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
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

function IconLock({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
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

function IconLayers({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0L12 17.25l-5.571-3m11.142 0L21.75 16.5 12 21.75l-9.75-5.25 4.179-2.25" />
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

function IconExclamation({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
    </svg>
  );
}

/* ─── Data ──────────────────────────────────────────── */

const stats = [
  { value: '400+', label: 'Perks Available' },
  { value: '100+', label: 'Vendors' },
  { value: '300+', label: 'Whitelisted Domains' },
  { value: '7', label: 'Admin Sections' },
  { value: '60+', label: 'Files Using Design Tokens' },
  { value: 'AA', label: 'WCAG Accessibility' },
];

const personas = [
  {
    icon: IconUser,
    role: 'Startup Founders & Employees',
    context: 'VC-backed company team members',
    goal: 'Browse and redeem exclusive perks — cloud credits, dev tools, marketing spend, HR platforms.',
    needs: ['Quick browsing with filters', 'Clear redemption flow', 'Understand access status instantly'],
  },
  {
    icon: IconBuilding,
    role: 'VC Firm Team Members',
    context: 'Partners, associates, talent partners',
    goal: 'Access perks themselves and manage their portfolio companies\' whitelist.',
    needs: ['Self-serve access', 'Portfolio company management', 'See what perks their network offers'],
  },
  {
    icon: IconCog,
    role: 'Bridge Admins',
    context: 'Platform operations team',
    goal: 'Manage the full marketplace — providers, vendors, offers, access requests, analytics.',
    needs: ['Bulk operations', 'Vendor health monitoring', 'Access request review', 'API resilience visibility'],
  },
];

const accessStates = [
  {
    state: 'Granted',
    icon: IconShield,
    visual: 'Green check, "Access Granted" confirmation',
    experience: 'Full access to all perk details, redemption links, and exclusive offers. The user\'s VC affiliation is shown as a trust badge throughout the session.',
    trigger: 'Email domain matches one of 300+ whitelisted VC/portfolio domains',
  },
  {
    state: 'Denied — Work Email',
    icon: IconEye,
    visual: 'Eye icon, "Browse Perks" in neutral tone',
    experience: 'Can browse all perk cards freely but is blocked at redemption. Detail pages show blurred content with a modal overlay explaining how to request access. This was deliberate — showing the catalog builds desire and trust; hiding it kills both.',
    trigger: 'Work email recognized but domain not in whitelist',
  },
  {
    state: 'Denied — Personal Email',
    icon: IconLock,
    visual: 'Compass icon, "Explore Perks" with softer framing',
    experience: 'Same browse access as work-email denied users. The access request flow prompts them to re-enter a work email, since personal domains can\'t be verified against VC portfolios.',
    trigger: 'Gmail, Yahoo, Outlook, or other personal email provider',
  },
];

const designTokens = {
  colors: [
    { name: 'Royal Blue', hex: '#0038FF', role: 'Primary' },
    { name: 'Charcoal', hex: '#0D1531', role: 'Text' },
    { name: 'Slate', hex: '#F9F9FA', role: 'Background' },
    { name: 'Mist', hex: '#E8EAF0', role: 'Borders' },
    { name: 'Silver', hex: '#9A9FB0', role: 'Tertiary text' },
    { name: 'Kelly', hex: '#0EA02E', role: 'Success' },
    { name: 'Honey', hex: '#E19500', role: 'Warning' },
    { name: 'Ruby', hex: '#E13535', role: 'Error' },
  ],
  components: [
    { name: 'Button', detail: '5 variants (primary/secondary/outline/ghost/destructive), pill-shaped, 3 sizes' },
    { name: 'Badge', detail: '6 color variants, single size, 4px radius, always-bordered, optional icon' },
    { name: 'Card', detail: 'Unified hover shadow token, subtle lift on interaction' },
    { name: 'Input', detail: 'Pill-shaped, token-based borders, focus ring in Royal Blue' },
  ],
};

const pages = [
  {
    title: 'Landing Page',
    description: 'Scroll-triggered animations with staggered fade-in-up, count-up stats, infinite logo marquee. Three-step "How It Works" with animated connector lines. Gradient CTA section transitioning from Royal Blue to Accent Blue.',
    designDetail: 'The landing page needs to do two things: communicate exclusivity and show breadth. The logo marquee signals "real companies use this." The count-up stats make the scale tangible. The gradient CTA creates urgency without being aggressive.',
  },
  {
    title: 'Perks Listing',
    description: 'Dual view modes: Grid (card layout) and By Vendor (accordion groups with smooth CSS grid height animation). Combined filter dropdown with 4 cascading categories. Three-tier default sort: Featured vendors first, grouped second, ungrouped last. "Recently Added" section with time-based badging.',
    designDetail: 'The dual view wasn\'t a nice-to-have — it maps to two real browsing behaviors. "I know what I need" (grid + filters) vs. "I want to see what Stripe/AWS/etc. offers" (vendor view). The three-tier sort puts the best content at the top without requiring user action.',
  },
  {
    title: 'Perk Detail Page',
    description: 'Two-column layout: offer context + redemption sidebar. Value pills showing deal value, discount, and estimated savings. Related perks grid. Glassmorphic hero section with backdrop blur.',
    designDetail: 'The value pills are the key conversion element — they translate abstract "perks" into concrete dollar amounts. The glassmorphic hero elevates the perk above a basic card view, signaling "this is worth your attention." For denied users, the blurred content + modal creates FOMO without frustration.',
  },
  {
    title: 'Admin Dashboard — 7 Sections',
    description: 'Analytics with redemption metrics and charts. Offer and vendor tracking tables with search, filters, sync-to-DB. CSV bulk upload modal with drag-drop, client-side validation, preview, and confirmation. Access request review with expandable rows and colleague lookup. Custom vendor group management (CRUD). Provider configuration and audit log.',
    designDetail: 'The admin panel was designed for operators, not power users. Every table has search and filters because the data set is large (400+ perks). The CSV upload flow has validation AND preview because a bad bulk import could break the marketplace. The access request review surfaces colleague info to help admins make faster decisions.',
  },
];

const accessRequestFlow = [
  'User sees restricted modal on perk detail page',
  'Clicks "Request Access" — opens request flow',
  'Discovered investors shown as green chips (auto-detected from Bridge API)',
  'Interactive VC directory: searchable grid of 300+ approved VCs with logos',
  'Clicking a VC pre-fills the form — reduces "who\'s your VC?" to a single tap',
  'Form collects VC contact info for admin verification',
  'Admin reviews request with colleague lookup and expandable details',
];

const techStack = [
  { layer: 'Frontend', tech: 'Next.js 14 (App Router, Server Components)' },
  { layer: 'Language', tech: 'TypeScript (strict)' },
  { layer: 'Styling', tech: 'Tailwind CSS + CSS custom properties' },
  { layer: 'Database', tech: 'Supabase PostgreSQL' },
  { layer: 'Auth', tech: 'Domain-gated email verification against 300+ whitelisted domains' },
  { layer: 'Upstream API', tech: 'GetProven (vendor data) with Supabase cache fallback' },
  { layer: 'Animations', tech: 'CSS @keyframes + Intersection Observer (no JS animation library)' },
  { layer: 'Accessibility', tech: 'WCAG 2.2 AA — focus traps, aria-live, reduced motion, semantic HTML' },
  { layer: 'Deployment', tech: 'Vercel (auto-deploy)' },
];

const takeaways = [
  {
    icon: IconShield,
    title: 'Access control is a UX design challenge, not just a technical one',
    description: 'The difference between "you can\'t use this" and "here\'s how to get access" is entirely design. The tiered system with browse mode turned a rejection into an onboarding funnel.',
  },
  {
    icon: IconLayers,
    title: 'Showing restricted content builds desire; hiding it kills it',
    description: 'Letting denied users browse freely but blocking at redemption was counterintuitive to stakeholders — but it\'s the right UX. You can\'t want what you can\'t see.',
  },
  {
    icon: IconBolt,
    title: 'Design for failure, not just success',
    description: 'The cached data fallback with staleness indicators meant users never saw a blank page during API outages. Designing the failure state was as important as designing the happy path.',
  },
  {
    icon: IconSparkle,
    title: 'A designer who ships is a designer who learns faster',
    description: 'Owning the full stack — from research to production — meant I could iterate on UX decisions in real-time, with real users, without waiting for engineering handoffs.',
  },
];

/* ─── Utility Components ────────────────────────────── */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="text-xs font-medium text-[var(--color-text-tertiary)] uppercase tracking-wide mb-3">{children}</p>;
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color-text-primary)] tracking-tight mb-6 leading-snug">{children}</h2>;
}

function Divider() {
  return <hr className="border-[var(--color-border)] my-16 md:my-20" />;
}

/* ─── Page ──────────────────────────────────────────── */

export default function BridgePerksPortalCaseStudy() {
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
          <Link href="/work" className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] transition-colors group mb-8">
            <svg className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" /></svg>
            Back to work
          </Link>

          {/* ─── HERO ─── */}
          {shouldReduceMotion ? (
            <header className="mb-16 md:mb-20">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="text-xs font-medium text-[var(--color-text-tertiary)] uppercase tracking-wide">Product Design · Design System · Full-Stack Development · SaaS</span>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-green-600"><span className="w-1.5 h-1.5 rounded-full bg-green-500" />Live in Production</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-semibold text-[var(--color-text-primary)] tracking-tight leading-tight mb-4">Bridge Perks Portal</h1>
              <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed max-w-3xl mb-3">
                Exclusive vendor perks for VC-backed startups. A domain-gated marketplace with tiered access control, admin analytics, and API resilience — designed and developed solo as a product designer using agentic AI.
              </p>
              <a href="https://perks.brdg.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] transition-colors">
                perks.brdg.app
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6m0 0v6m0-6L10 14" /></svg>
              </a>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 mt-10 pt-8 border-t border-[var(--color-border)]">
                {stats.map((s) => (<div key={s.label}><p className="text-2xl md:text-3xl font-semibold text-[var(--color-text-primary)] tracking-tight">{s.value}</p><p className="text-xs text-[var(--color-text-tertiary)] mt-1">{s.label}</p></div>))}
              </div>
            </header>
          ) : (
            <HeroReveal>
              <header className="mb-16 md:mb-20">
                <HeroItem><div className="flex flex-wrap items-center gap-3 mb-4"><span className="text-xs font-medium text-[var(--color-text-tertiary)] uppercase tracking-wide">Product Design · Design System · Full-Stack Development · SaaS</span><span className="inline-flex items-center gap-1.5 text-xs font-medium text-green-600"><span className="w-1.5 h-1.5 rounded-full bg-green-500" />Live in Production</span></div></HeroItem>
                <HeroItem><h1 className="text-3xl md:text-5xl font-semibold text-[var(--color-text-primary)] tracking-tight leading-tight mb-4">Bridge Perks Portal</h1></HeroItem>
                <HeroItem>
                  <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed max-w-3xl mb-3">Exclusive vendor perks for VC-backed startups. A domain-gated marketplace with tiered access control, admin analytics, and API resilience — designed and developed solo as a product designer using agentic AI.</p>
                  <a href="https://perks.brdg.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] transition-colors">perks.brdg.app<svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6m0 0v6m0-6L10 14" /></svg></a>
                </HeroItem>
                <HeroItem>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 mt-10 pt-8 border-t border-[var(--color-border)]">
                    {stats.map((s) => (<div key={s.label}><p className="text-2xl md:text-3xl font-semibold text-[var(--color-text-primary)] tracking-tight">{s.value}</p><p className="text-xs text-[var(--color-text-tertiary)] mt-1">{s.label}</p></div>))}
                  </div>
                </HeroItem>
              </header>
            </HeroReveal>
          )}

          {/* ─── 01: DISCOVERY ─── */}
          <Reveal>
            <section>
              <SectionLabel>01 — Discovery & Problem Framing</SectionLabel>
              <SectionTitle>Access to perks IS the product — without meaningful access control, it&apos;s just another vendor directory</SectionTitle>

              <div className="max-w-3xl space-y-4 text-[var(--color-text-secondary)] leading-relaxed mb-10">
                <p>Bridge had an existing perks marketplace powered by GetProven, but it was a generic vendor portal with no access control, no brand alignment, and no VC-specific flows. Founders navigated a third-party interface that didn&apos;t feel like a Bridge product.</p>
                <p>The core insight: exclusivity is the value proposition. VC-backed founders get perks BECAUSE of their network. Without meaningful gating, the portal is indistinguishable from a public coupon site.</p>
              </div>

              <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-4">Key Design Questions</h3>
              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {[
                  { q: 'How do you communicate "you\'re not approved yet" without killing engagement?', icon: IconEye },
                  { q: 'How do you make the verification process feel trustworthy and intentional?', icon: IconShield },
                  { q: 'How should denied users discover the path to access?', icon: IconArrowRight },
                  { q: 'What does an admin need to manage a VC-gated marketplace at scale?', icon: IconCog },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.q} className="rounded-xl border border-[var(--color-border)] p-5 flex gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)] flex items-center justify-center shrink-0">
                        <Icon className="text-[var(--color-text-primary)]" />
                      </div>
                      <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{item.q}</p>
                    </div>
                  );
                })}
              </div>

              {/* Before / After */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="rounded-xl border border-[var(--color-border)] p-6 bg-[var(--color-bg-elevated)]">
                  <p className="text-xs font-medium text-[var(--color-text-tertiary)] uppercase tracking-wide mb-4">Before — GetProven</p>
                  <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
                    {['No access control — anyone could browse and redeem', 'Generic third-party interface', 'No VC-specific branding or flows', 'Blank pages during API outages', 'No admin visibility into usage or health'].map((item) => (
                      <li key={item} className="flex items-start gap-2"><IconX className="text-[var(--color-text-tertiary)] shrink-0 mt-0.5" />{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl border border-[var(--color-text-primary)] p-6">
                  <p className="text-xs font-medium text-[var(--color-text-primary)] uppercase tracking-wide mb-4">After — Bridge Perks Portal</p>
                  <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
                    {['Domain-gated access with 300+ whitelisted VCs', 'Full Bridge brand alignment', 'Tiered UX for granted, denied, and personal email users', 'Cached fallback serving stale data during outages', 'Complete admin dashboard with 7 operational sections'].map((item) => (
                      <li key={item} className="flex items-start gap-2"><IconCheck className="text-[var(--color-text-primary)] shrink-0 mt-0.5" />{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          </Reveal>

          <Divider />

          {/* ─── 02: ACCESS CONTROL UX ─── */}
          <Reveal>
            <section>
              <SectionLabel>02 — Access Control as a UX Problem</SectionLabel>
              <SectionTitle>Making exclusivity feel motivating, not frustrating</SectionTitle>

              <div className="max-w-3xl space-y-4 text-[var(--color-text-secondary)] leading-relaxed mb-10">
                <p>This was the most design-intensive area of the project. Access control is typically treated as a binary gate — you&apos;re in or you&apos;re out. I designed a tiered system with distinct UX for each state, turning the restriction into an engagement mechanism.</p>
              </div>

              {/* The Access Gate */}
              <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-4">The Access Gate Animation (8 Seconds)</h3>
              <div className="rounded-xl border border-[var(--color-border)] p-6 mb-8">
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
                  I designed a scanning metaphor: VC logos cycle through a conveyor belt while the user&apos;s email domain is verified against 300+ whitelisted domains. Pulsating rings, a progress bar, and sequential status messages create a sense of security theater — the verification is instant, but the animation communicates rigor and trust.
                </p>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
                  This was a deliberate design choice. An instant &quot;approved&quot; feels cheap. An 8-second verification sequence communicates &quot;we&apos;re checking something real.&quot; It also respects <code className="text-xs bg-[var(--color-bg)] border border-[var(--color-border)] px-1 rounded">prefers-reduced-motion</code> and skips on return visits.
                </p>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-[var(--color-border)]">
                  {['Conveyor belt logo animation', 'Pulsating ring effect', 'Sequential status messages', 'Progress bar', 'Reduced motion fallback', 'Skip on return visits'].map((item) => (
                    <span key={item} className="px-2.5 py-1 text-xs font-medium text-[var(--color-text-tertiary)] bg-[var(--color-bg)] border border-[var(--color-border)] rounded-md">{item}</span>
                  ))}
                </div>
              </div>

              {/* Three Access States */}
              <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-4">Three Result States</h3>
              <Stagger className="space-y-4 mb-10">
                {accessStates.map((as) => {
                  const Icon = as.icon;
                  return (
                    <Item key={as.state}>
                      <div className="rounded-xl border border-[var(--color-border)] p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-9 h-9 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)] flex items-center justify-center shrink-0">
                            <Icon className="text-[var(--color-text-primary)]" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-[var(--color-text-primary)]">{as.state}</p>
                            <p className="text-xs text-[var(--color-text-tertiary)]">{as.visual}</p>
                          </div>
                        </div>
                        <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-2">{as.experience}</p>
                        <p className="text-xs text-[var(--color-text-tertiary)]"><span className="font-medium">Trigger:</span> {as.trigger}</p>
                      </div>
                    </Item>
                  );
                })}
              </Stagger>

              {/* Access Request Flow */}
              <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-4">Access Request Flow</h3>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4 max-w-3xl">
                The request flow was designed to minimize friction — clicking a VC in the searchable directory pre-fills the form, reducing &quot;who&apos;s your VC?&quot; from a text input to a single tap.
              </p>
              <div className="rounded-xl border border-[var(--color-border)] p-6">
                <ol className="space-y-3">
                  {accessRequestFlow.map((step, i) => (
                    <li key={step} className="flex gap-3 text-sm">
                      <span className="w-6 h-6 rounded-full bg-[var(--color-bg)] border border-[var(--color-border)] flex items-center justify-center text-xs font-medium text-[var(--color-text-tertiary)] shrink-0">{i + 1}</span>
                      <span className="text-[var(--color-text-secondary)] leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </section>
          </Reveal>

          <Divider />

          {/* ─── 03: PERSONAS ─── */}
          <Reveal>
            <section>
              <SectionLabel>03 — Users & Personas</SectionLabel>
              <SectionTitle>Three distinct user types, each with different goals and permissions</SectionTitle>

              <Stagger className="grid md:grid-cols-3 gap-4">
                {personas.map((p) => {
                  const Icon = p.icon;
                  return (
                    <Item key={p.role}>
                      <div className="rounded-xl border border-[var(--color-border)] p-5 h-full">
                        <div className="w-9 h-9 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)] flex items-center justify-center mb-3">
                          <Icon className="text-[var(--color-text-primary)]" />
                        </div>
                        <p className="text-sm font-semibold text-[var(--color-text-primary)] mb-0.5">{p.role}</p>
                        <p className="text-xs text-[var(--color-text-tertiary)] mb-3">{p.context}</p>
                        <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-3">{p.goal}</p>
                        <ul className="space-y-1.5">
                          {p.needs.map((n) => (
                            <li key={n} className="text-xs text-[var(--color-text-tertiary)] flex gap-1.5"><IconArrowRight className="shrink-0 mt-0.5" />{n}</li>
                          ))}
                        </ul>
                      </div>
                    </Item>
                  );
                })}
              </Stagger>
            </section>
          </Reveal>

          <Divider />

          {/* ─── 04: DESIGN SYSTEM ─── */}
          <Reveal>
            <section>
              <SectionLabel>04 — Design System</SectionLabel>
              <SectionTitle>Bridge Design Tokens — used across 60+ files for 1:1 brand alignment</SectionTitle>

              <div className="max-w-3xl text-sm text-[var(--color-text-secondary)] leading-relaxed mb-8">
                <p>I built and maintained a complete design token system ensuring every screen felt unmistakably like a Bridge product. Tokens were codified as direct hex values in Tailwind config and CSS custom properties — no abstraction layers that could drift.</p>
              </div>

              {/* Color palette */}
              <div className="rounded-xl border border-[var(--color-border)] p-6 mb-8">
                <p className="text-xs font-medium text-[var(--color-text-tertiary)] uppercase tracking-wide mb-4">Color Palette — 20+ Named Tokens</p>
                <div className="flex flex-wrap gap-3 mb-6">
                  {designTokens.colors.map((c) => (
                    <div key={c.name} className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-md border border-[var(--color-border)]" style={{ backgroundColor: c.hex }} />
                      <div>
                        <p className="text-xs font-medium text-[var(--color-text-primary)]">{c.name}</p>
                        <p className="text-[10px] text-[var(--color-text-tertiary)]">{c.hex} · {c.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-[var(--color-text-tertiary)] pt-4 border-t border-[var(--color-border)]">Typography: Mulish (Google Fonts), weights 400–700. Animation tokens: fade-in, fade-in-up, scale-in, scale-out with consistent timing curves.</p>
              </div>

              {/* Component library */}
              <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-4">Component Library</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {designTokens.components.map((c) => (
                  <div key={c.name} className="rounded-xl border border-[var(--color-border)] p-5">
                    <p className="text-sm font-semibold text-[var(--color-text-primary)] mb-1">{c.name}</p>
                    <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{c.detail}</p>
                  </div>
                ))}
              </div>
            </section>
          </Reveal>

          <Divider />

          {/* ─── 05: KEY PAGES ─── */}
          <Reveal>
            <section>
              <SectionLabel>05 — Key Pages & Interactions</SectionLabel>
              <SectionTitle>Every page designed with intent — from landing to admin</SectionTitle>

              <Stagger className="space-y-4 mb-10">
                {pages.map((page) => (
                  <Item key={page.title}>
                    <div className="rounded-xl border border-[var(--color-border)] p-6">
                      <p className="text-sm font-semibold text-[var(--color-text-primary)] mb-3">{page.title}</p>
                      <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-3">{page.description}</p>
                      <p className="text-xs text-[var(--color-text-tertiary)] leading-relaxed pt-3 border-t border-[var(--color-border)]">
                        <span className="font-medium">Design rationale:</span> {page.designDetail}
                      </p>
                    </div>
                  </Item>
                ))}
              </Stagger>
            </section>
          </Reveal>

          <Divider />

          {/* ─── 06: RESILIENCE ─── */}
          <Reveal>
            <section>
              <SectionLabel>06 — Designing for Failure</SectionLabel>
              <SectionTitle>API resilience as a UX problem, not just an engineering one</SectionTitle>

              <div className="max-w-3xl space-y-4 text-[var(--color-text-secondary)] leading-relaxed mb-8">
                <p>The upstream vendor API (GetProven) had outages that previously showed founders blank pages or error screens. I designed a fallback experience that prioritizes user continuity over data freshness.</p>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mb-8">
                {[
                  { icon: IconLayers, title: 'Cached Data Layer', desc: 'Supabase tracker tables store the last known good state of all perk data. When the API is down, users see cached data — slightly stale but functional.' },
                  { icon: IconExclamation, title: 'Staleness Indicator', desc: 'An amber "Showing cached data" banner appears when serving fallback content. Users know the data isn\'t live but can still browse and plan.' },
                  { icon: IconCog, title: 'Sync Architecture', desc: 'Designed what to cache, when to refresh, and how to reconcile when the API returns. The sync is invisible to users — they just see perks that work.' },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="rounded-xl border border-[var(--color-border)] p-5">
                      <div className="w-9 h-9 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)] flex items-center justify-center mb-3">
                        <Icon className="text-[var(--color-text-primary)]" />
                      </div>
                      <p className="text-sm font-semibold text-[var(--color-text-primary)] mb-1">{item.title}</p>
                      <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            </section>
          </Reveal>

          <Divider />

          {/* ─── 07: ACCESSIBILITY ─── */}
          <Reveal>
            <section>
              <SectionLabel>07 — Accessibility</SectionLabel>
              <SectionTitle>WCAG 2.2 AA across all user flows</SectionTitle>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  'Focus traps in all modals (restricted modal, CSV upload, confirmation dialogs)',
                  'aria-live regions for status updates during access gate animation',
                  'Full keyboard navigation — every interactive element reachable via Tab',
                  'All animations respect prefers-reduced-motion media query',
                  'Page-specific document titles and aria-current on navigation',
                  'Proper table semantics for admin data tables',
                  'Minimum 48px touch targets on all interactive elements',
                  'focus-visible rings (2px Royal Blue, 2px offset) on all controls',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]">
                    <IconCheck className="text-green-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </section>
          </Reveal>

          <Divider />

          {/* ─── 08: TECH STACK ─── */}
          <Reveal>
            <section>
              <SectionLabel>08 — Technical Summary</SectionLabel>
              <SectionTitle>Solo product designer, full production stack</SectionTitle>

              <div className="max-w-3xl text-sm text-[var(--color-text-secondary)] leading-relaxed mb-8">
                <p>I designed and developed this product solo, using agentic AI (Claude Code) as my development partner. My workflow: define the UX and visual specs through design thinking, describe the implementation intent to Claude, review, iterate, and ship production code. This isn&apos;t about AI replacing design thinking — it&apos;s about a designer using new tools to close the gap between vision and execution.</p>
              </div>

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

          {/* ─── 09: OUTCOMES ─── */}
          <Reveal>
            <section>
              <SectionLabel>09 — Outcomes & Reflection</SectionLabel>
              <SectionTitle>What this project taught me about access control, resilience, and shipping</SectionTitle>

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

              {/* Impact */}
              <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-4">Impact</h3>
              <ul className="space-y-2 text-sm text-[var(--color-text-secondary)] max-w-3xl mb-8">
                {[
                  'Shipped to production at perks.brdg.app, serving Bridge\'s entire VC network',
                  '400+ perks from 100+ vendors available to whitelisted users',
                  'Complete access control system processing 300+ VC domains',
                  'Admin tooling for full marketplace operations across 7 sections',
                  'Resilient architecture handling upstream API outages gracefully',
                  'WCAG 2.2 AA accessible across all user flows',
                ].map((item) => (
                  <li key={item} className="flex gap-2"><IconCheck className="text-green-600 shrink-0 mt-0.5" />{item}</li>
                ))}
              </ul>
            </section>
          </Reveal>

          <Divider />

          {/* ─── CTA ─── */}
          <Reveal>
            <section className="text-center">
              <p className="text-lg md:text-xl text-[var(--color-text-secondary)] mb-6">Want to see Bridge Perks Portal live?</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://perks.brdg.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3.5 text-base font-medium bg-[var(--color-accent)] text-[var(--color-bg)] rounded-lg border border-transparent hover:bg-[var(--color-bg)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-all duration-200">
                  Visit perks.brdg.app
                  <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6m0 0v6m0-6L10 14" /></svg>
                </a>
                <Link href="/work" className="inline-flex items-center justify-center px-6 py-3.5 text-base font-medium text-[var(--color-text-primary)] border border-[var(--color-border)] rounded-lg hover:bg-[var(--color-bg-elevated)] hover:border-[var(--color-text-tertiary)] transition-colors">Back to all work</Link>
              </div>
            </section>
          </Reveal>

        </div>
      </main>
      <Footer />
    </>
  );
}
