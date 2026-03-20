'use client';

import Link from 'next/link';
import { useReducedMotion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SectionReveal, StaggerContainer, StaggerItem, HeroReveal, HeroItem } from '@/lib/motion';

/* ─── SVG Icons (stroke style) ─── */

function IconShield({ className = '' }: { className?: string }) {
  return (<svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>);
}

function IconUser({ className = '' }: { className?: string }) {
  return (<svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>);
}

function IconBuilding({ className = '' }: { className?: string }) {
  return (<svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" /></svg>);
}

function IconCog({ className = '' }: { className?: string }) {
  return (<svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>);
}

function IconEye({ className = '' }: { className?: string }) {
  return (<svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>);
}

function IconLock({ className = '' }: { className?: string }) {
  return (<svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>);
}

function IconSparkle({ className = '' }: { className?: string }) {
  return (<svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" /></svg>);
}

function IconLayers({ className = '' }: { className?: string }) {
  return (<svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0L12 17.25l-5.571-3m11.142 0L21.75 16.5 12 21.75l-9.75-5.25 4.179-2.25" /></svg>);
}

function IconBolt({ className = '' }: { className?: string }) {
  return (<svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>);
}

function IconExclamation({ className = '' }: { className?: string }) {
  return (<svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" /></svg>);
}

function IconCheck({ className = '' }: { className?: string }) {
  return (<svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>);
}

function IconX({ className = '' }: { className?: string }) {
  return (<svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>);
}

function IconArrowRight({ className = '' }: { className?: string }) {
  return (<svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>);
}

/* ─── Utility Components ─── */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="text-xs font-medium text-[var(--color-text-tertiary)] uppercase tracking-wide mb-3">{children}</p>;
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color-text-primary)] tracking-tight mb-6 leading-snug">{children}</h2>;
}

function Divider() {
  return <hr className="border-[var(--color-border)] my-16 md:my-20" />;
}

function IconBox({ children }: { children: React.ReactNode }) {
  return <div className="w-9 h-9 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)] flex items-center justify-center shrink-0">{children}</div>;
}

/* ─── Page ─── */

export default function BridgePerksPortalCaseStudy() {
  const shouldReduceMotion = useReducedMotion();

  const Reveal = shouldReduceMotion ? 'div' : SectionReveal;
  const Stagger = shouldReduceMotion ? 'div' : StaggerContainer;
  const Item = shouldReduceMotion ? 'div' : StaggerItem;

  return (
    <>
      <Header />
      <main className="pt-24 md:pt-28 pb-20 md:pb-32">
        <article className="max-w-[var(--max-width-content)] mx-auto px-6 lg:px-8">

          {/* Back Link */}
          <Link href="/work" className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] transition-colors group mb-8">
            <svg className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" /></svg>
            Back to work
          </Link>

          {/* ━━━ HERO — The Hook ━━━ */}
          {shouldReduceMotion ? (
            <header className="mb-16 md:mb-20">
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-green-600 mb-4"><span className="w-1.5 h-1.5 rounded-full bg-green-500" />Live in Production</span>
              <h1 className="text-3xl md:text-5xl font-semibold text-[var(--color-text-primary)] tracking-tight leading-tight mb-4">
                How I turned access control into an engagement funnel for 400+ vendor perks
              </h1>
              <p className="text-base md:text-lg text-[var(--color-text-secondary)] mb-2">Bridge Perks Portal — Product Designer &amp; Developer — 2025–2026</p>
              <a href="https://perks.brdg.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] transition-colors">
                perks.brdg.app <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6m0 0v6m0-6L10 14" /></svg>
              </a>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10 pt-8 border-t border-[var(--color-border)]">
                {[{ v: '400+', l: 'Perks Available' }, { v: '100+', l: 'Vendors Integrated' }, { v: '300+', l: 'Whitelisted VC Domains' }, { v: 'AA', l: 'WCAG Accessibility' }].map((s) => (
                  <div key={s.l}><p className="text-2xl md:text-3xl font-semibold text-[var(--color-text-primary)] tracking-tight">{s.v}</p><p className="text-xs text-[var(--color-text-tertiary)] mt-1">{s.l}</p></div>
                ))}
              </div>
            </header>
          ) : (
            <HeroReveal>
              <header className="mb-16 md:mb-20">
                <HeroItem><span className="inline-flex items-center gap-1.5 text-xs font-medium text-green-600 mb-4"><span className="w-1.5 h-1.5 rounded-full bg-green-500" />Live in Production</span></HeroItem>
                <HeroItem>
                  <h1 className="text-3xl md:text-5xl font-semibold text-[var(--color-text-primary)] tracking-tight leading-tight mb-4">
                    How I turned access control into an engagement funnel for 400+ vendor perks
                  </h1>
                </HeroItem>
                <HeroItem>
                  <p className="text-base md:text-lg text-[var(--color-text-secondary)] mb-2">Bridge Perks Portal — Product Designer &amp; Developer — 2025–2026</p>
                  <a href="https://perks.brdg.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] transition-colors">
                    perks.brdg.app <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6m0 0v6m0-6L10 14" /></svg>
                  </a>
                </HeroItem>
                <HeroItem>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10 pt-8 border-t border-[var(--color-border)]">
                    {[{ v: '400+', l: 'Perks Available' }, { v: '100+', l: 'Vendors Integrated' }, { v: '300+', l: 'Whitelisted VC Domains' }, { v: 'AA', l: 'WCAG Accessibility' }].map((s) => (
                      <div key={s.l}><p className="text-2xl md:text-3xl font-semibold text-[var(--color-text-primary)] tracking-tight">{s.v}</p><p className="text-xs text-[var(--color-text-tertiary)] mt-1">{s.l}</p></div>
                    ))}
                  </div>
                </HeroItem>
              </header>
            </HeroReveal>
          )}

          {/* ━━━ CONTEXT — Setting the Stage ━━━ */}
          <Reveal>
            <section>
              <SectionLabel>Context</SectionLabel>
              <SectionTitle>Bridge needed to turn a generic vendor portal into a product that reinforced VC exclusivity</SectionTitle>
              <div className="max-w-3xl space-y-4 text-[var(--color-text-secondary)] leading-relaxed">
                <p>Bridge is a platform connecting VC firms with their portfolio companies. They had an existing perks marketplace powered by GetProven — a third-party vendor portal offering cloud credits, dev tools, marketing spend, and HR platforms to startup founders. But it was a generic iframe with no access control, no brand alignment, and no VC-specific flows.</p>
                <p>I owned the entire product — from discovery and access control UX strategy through design system creation, visual design, and production development. I used Claude Code as my development partner, writing detailed design specs that the AI implemented while I reviewed every output against my design intent.</p>
                <p>The timeline was approximately 3 months, and the core constraint was clear: the perks portal had to feel like a Bridge product, not a white-labeled third-party tool. And access control — the thing that makes these perks exclusive — had to feel motivating, not frustrating.</p>
              </div>
            </section>
          </Reveal>

          <Divider />

          {/* ━━━ THE PROBLEM — What Was Broken ━━━ */}
          <Reveal>
            <section>
              <SectionLabel>The Problem</SectionLabel>
              <SectionTitle>Without meaningful access control, a perks marketplace is just another coupon site</SectionTitle>

              <div className="max-w-3xl space-y-4 text-[var(--color-text-secondary)] leading-relaxed mb-10">
                <p><strong className="text-[var(--color-text-primary)]">From the user&apos;s perspective:</strong> Founders navigated a third-party interface that didn&apos;t feel like Bridge. There was no sense of exclusivity — anyone could browse and redeem, which undermined the core value proposition of being VC-backed. When GetProven went down, founders saw blank pages with no explanation.</p>
                <p><strong className="text-[var(--color-text-primary)]">From the business perspective:</strong> The perks program was a key retention lever for Bridge&apos;s VC network. If portfolio company founders didn&apos;t feel the perks were exclusive and valuable, VCs had less reason to stay on Bridge. The generic portal was actively undermining the network&apos;s value.</p>
                <p><strong className="text-[var(--color-text-primary)]">From the technical perspective:</strong> The upstream GetProven API had reliability issues, and there was no caching layer. Denied users received no context about why they were restricted or how to get access. Admin visibility into the marketplace was nonexistent.</p>
              </div>

              {/* Before / After */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="rounded-xl border border-[var(--color-border)] p-6 bg-[var(--color-bg-elevated)]">
                  <p className="text-xs font-medium text-[var(--color-text-tertiary)] uppercase tracking-wide mb-4">Before — GetProven iframe</p>
                  <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
                    {['No access control — anyone could browse and redeem', 'Generic third-party UI with no Bridge branding', 'Blank pages during API outages', 'No admin visibility into usage or vendor health', 'Denied users had no path to access'].map((item) => (
                      <li key={item} className="flex items-start gap-2"><IconX className="text-[var(--color-text-tertiary)] shrink-0 mt-0.5" />{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl border border-[var(--color-text-primary)] p-6">
                  <p className="text-xs font-medium text-[var(--color-text-primary)] uppercase tracking-wide mb-4">After — Bridge Perks Portal</p>
                  <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
                    {['Domain-gated access with 300+ whitelisted VCs', 'Full Bridge brand alignment across every screen', 'Tiered UX — granted, browse, and restricted states', 'Cached fallback with staleness indicators during outages', '7-section admin dashboard for full marketplace operations'].map((item) => (
                      <li key={item} className="flex items-start gap-2"><IconCheck className="text-[var(--color-text-primary)] shrink-0 mt-0.5" />{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          </Reveal>

          <Divider />

          {/* ━━━ DISCOVERY — How I Understood the Problem ━━━ */}
          <Reveal>
            <section>
              <SectionLabel>Discovery &amp; Research</SectionLabel>
              <SectionTitle>I started with the access control problem because it was the one nobody had solved well</SectionTitle>

              <div className="max-w-3xl space-y-4 text-[var(--color-text-secondary)] leading-relaxed mb-10">
                <p>Before designing any screens, I needed to answer four questions that would determine the shape of the entire product. Each one looked like a technical problem on the surface, but was actually a UX design challenge.</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {[
                  { icon: IconEye, q: 'How do you communicate "you\'re not approved yet" without killing engagement?', insight: 'I discovered that showing the catalog but blocking at redemption builds desire — hiding it kills both desire and trust.' },
                  { icon: IconShield, q: 'How do you make the verification process feel trustworthy?', insight: 'An instant "approved" feels cheap. I designed an 8-second scanning animation that communicates rigor even though the check is instant.' },
                  { icon: IconArrowRight, q: 'How should denied users discover the path to access?', insight: 'I designed an interactive VC directory where clicking a VC pre-fills the request form — reducing friction from a text input to a single tap.' },
                  { icon: IconCog, q: 'What does an admin need to manage a VC-gated marketplace at scale?', insight: 'Admins needed 7 distinct sections — from analytics and offer management to access request review with colleague lookup.' },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.q} className="rounded-xl border border-[var(--color-border)] p-5">
                      <div className="flex gap-3 mb-3">
                        <IconBox><Icon className="text-[var(--color-text-primary)]" /></IconBox>
                        <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{item.q}</p>
                      </div>
                      <p className="text-xs text-[var(--color-text-tertiary)] leading-relaxed pt-3 border-t border-[var(--color-border)]"><span className="font-medium">What I discovered:</span> {item.insight}</p>
                    </div>
                  );
                })}
              </div>

              {/* Personas */}
              <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-6">Three user types I designed for</h3>
              <Stagger className="grid md:grid-cols-3 gap-4">
                {[
                  { icon: IconUser, role: 'Startup Founders & Employees', ctx: 'VC-backed company team members', goal: 'Browse and redeem exclusive perks — cloud credits, dev tools, marketing spend, HR platforms.', needs: ['Quick browsing with filters', 'Clear redemption flow', 'Understand access status instantly'] },
                  { icon: IconBuilding, role: 'VC Firm Team Members', ctx: 'Partners, associates, talent partners', goal: 'Access perks themselves and manage their portfolio companies\' whitelist.', needs: ['Self-serve access', 'Portfolio company management', 'See what perks their network offers'] },
                  { icon: IconCog, role: 'Bridge Admins', ctx: 'Platform operations team', goal: 'Manage the full marketplace — providers, vendors, offers, access requests, analytics.', needs: ['Bulk operations', 'Vendor health monitoring', 'Access request review with context'] },
                ].map((p) => {
                  const Icon = p.icon;
                  return (
                    <Item key={p.role}>
                      <div className="rounded-xl border border-[var(--color-border)] p-5 h-full">
                        <IconBox><Icon className="text-[var(--color-text-primary)]" /></IconBox>
                        <p className="text-sm font-semibold text-[var(--color-text-primary)] mt-3 mb-0.5">{p.role}</p>
                        <p className="text-xs text-[var(--color-text-tertiary)] mb-3">{p.ctx}</p>
                        <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-3">{p.goal}</p>
                        <ul className="space-y-1.5">{p.needs.map((n) => (<li key={n} className="text-xs text-[var(--color-text-tertiary)] flex gap-1.5"><IconArrowRight className="shrink-0 mt-0.5" />{n}</li>))}</ul>
                      </div>
                    </Item>
                  );
                })}
              </Stagger>
            </section>
          </Reveal>

          <Divider />

          {/* ━━━ DESIGN PROCESS — Core Decisions ━━━ */}
          <Reveal>
            <section>
              <SectionLabel>Design Process</SectionLabel>
              <SectionTitle>Access control was the most design-intensive area — I treated it as a UX problem, not a technical gate</SectionTitle>

              <div className="max-w-3xl text-[var(--color-text-secondary)] leading-relaxed mb-10">
                <p>Access control is typically treated as a binary gate — you&apos;re in or you&apos;re out. I designed a tiered system with distinct UX for each state, turning the restriction itself into an engagement mechanism. The core insight: showing restricted content builds desire; hiding it kills it.</p>
              </div>
            </section>
          </Reveal>

              {/* The Access Gate */}
          <Reveal>
            <section>
              <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-4">The 8-second access gate I designed</h3>
              <div className="rounded-xl border border-[var(--color-border)] p-6 mb-8">
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
                  I designed a scanning metaphor: VC logos cycle through a conveyor belt while the user&apos;s email domain is verified against 300+ whitelisted domains. Pulsating rings, a progress bar, and sequential status messages create a sense of intentional verification — the technical check is instant, but the 8-second animation communicates &quot;we&apos;re checking something real.&quot;
                </p>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
                  This was a deliberate design choice. An instant &quot;approved&quot; feels cheap for a gated product. The animation builds trust and reinforces exclusivity. It respects <code className="text-xs bg-[var(--color-bg)] border border-[var(--color-border)] px-1 rounded">prefers-reduced-motion</code> and skips entirely on return visits.
                </p>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-[var(--color-border)]">
                  {['Conveyor belt logo animation', 'Pulsating ring effect', 'Sequential status messages', 'Progress bar', 'Reduced motion fallback', 'Skip on return visits'].map((tag) => (
                    <span key={tag} className="px-2.5 py-1 text-xs font-medium text-[var(--color-text-tertiary)] bg-[var(--color-bg)] border border-[var(--color-border)] rounded-md">{tag}</span>
                  ))}
                </div>
              </div>

            </section>
          </Reveal>

              {/* Three Access States */}
          <Reveal>
            <section>
              <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-4">Three result states I designed</h3>
              <div className="space-y-4 mb-10">
                {[
                  { icon: IconShield, state: 'Granted', visual: 'Green check, "Access Granted"', exp: 'Full access to all perk details, redemption links, and exclusive offers. The user\'s VC affiliation is shown as a trust badge throughout the session.', trigger: 'Email domain matches one of 300+ whitelisted VC/portfolio domains' },
                  { icon: IconEye, state: 'Denied — Work Email (Browse Mode)', visual: 'Eye icon, "Browse Perks"', exp: 'I made the deliberate choice to let denied users browse ALL perk cards freely — but block at redemption. Detail pages show blurred content with a modal overlay explaining how to request access. This was counterintuitive to stakeholders, but the data is clear: you can\'t want what you can\'t see. Showing the catalog builds desire; hiding it kills both desire and trust.', trigger: 'Work email recognized but domain not in whitelist' },
                  { icon: IconLock, state: 'Denied — Personal Email', visual: 'Compass icon, "Explore Perks"', exp: 'Same browse access as work-email denied users. The access request flow prompts them to re-enter a work email, since personal domains can\'t be verified against VC portfolios.', trigger: 'Gmail, Yahoo, Outlook, or other personal email provider' },
                ].map((s) => {
                  const Icon = s.icon;
                  return (
                    <div key={s.state} className="rounded-xl border border-[var(--color-border)] p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <IconBox><Icon className="text-[var(--color-text-primary)]" /></IconBox>
                        <div><p className="text-sm font-semibold text-[var(--color-text-primary)]">{s.state}</p><p className="text-xs text-[var(--color-text-tertiary)]">{s.visual}</p></div>
                      </div>
                      <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-2">{s.exp}</p>
                      <p className="text-xs text-[var(--color-text-tertiary)] pt-3 border-t border-[var(--color-border)]"><span className="font-medium">Trigger:</span> {s.trigger}</p>
                    </div>
                  );
                })}
              </div>

            </section>
          </Reveal>

              {/* Access Request Flow */}
          <Reveal>
            <section>
              <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-4">The access request flow I designed to minimize friction</h3>
              <div className="rounded-xl border border-[var(--color-border)] p-6 mb-12">
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">The biggest friction point in access request flows is the open-ended &quot;who&apos;s your VC?&quot; text input. I replaced it with an interactive directory — a searchable grid of 300+ approved VCs with logos. Clicking a VC pre-fills the form, reducing the entire question to a single tap.</p>
                <ol className="space-y-2.5">
                  {[
                    'User sees restricted modal on perk detail page',
                    'Clicks "Request Access" — opens multi-step flow',
                    'Discovered investors shown as green chips (auto-detected from Bridge API)',
                    'Interactive VC directory: searchable grid of 300+ approved VCs with logos',
                    'Clicking a VC pre-fills the request form — single tap, not a text input',
                    'Form collects VC contact info for admin verification',
                    'Admin reviews with expandable details and colleague lookup',
                  ].map((step, i) => (
                    <li key={step} className="flex gap-3 text-sm">
                      <span className="w-6 h-6 rounded-full bg-[var(--color-bg)] border border-[var(--color-border)] flex items-center justify-center text-xs font-medium text-[var(--color-text-tertiary)] shrink-0">{i + 1}</span>
                      <span className="text-[var(--color-text-secondary)] leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

            </section>
          </Reveal>

              {/* Design System */}
          <Reveal>
            <section>
              <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-4">The design system I built for brand alignment</h3>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-6 max-w-3xl">I created a complete design token system used across 60+ files — ensuring every screen felt unmistakably like a Bridge product. Tokens were codified as direct hex values, not abstraction layers that could drift.</p>
              <div className="rounded-xl border border-[var(--color-border)] p-6">
                <p className="text-xs font-medium text-[var(--color-text-tertiary)] uppercase tracking-wide mb-4">Color palette — 20+ named tokens</p>
                <div className="flex flex-wrap gap-3 mb-6">
                  {[
                    { n: 'Royal Blue', h: '#0038FF', r: 'Primary' }, { n: 'Charcoal', h: '#0D1531', r: 'Text' }, { n: 'Slate', h: '#F9F9FA', r: 'Background' }, { n: 'Mist', h: '#E8EAF0', r: 'Borders' },
                    { n: 'Kelly', h: '#0EA02E', r: 'Success' }, { n: 'Honey', h: '#E19500', r: 'Warning' }, { n: 'Ruby', h: '#E13535', r: 'Error' },
                  ].map((c) => (
                    <div key={c.n} className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-md border border-[var(--color-border)]" style={{ backgroundColor: c.h }} />
                      <div><p className="text-xs font-medium text-[var(--color-text-primary)]">{c.n}</p><p className="text-[10px] text-[var(--color-text-tertiary)]">{c.h} · {c.r}</p></div>
                    </div>
                  ))}
                </div>
                <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-[var(--color-border)]">
                  {[
                    { n: 'Button', d: '5 variants (primary/secondary/outline/ghost/destructive), pill-shaped, 3 sizes' },
                    { n: 'Badge', d: '6 color variants, single size, 4px radius, always-bordered, optional icon' },
                    { n: 'Card', d: 'Unified hover shadow token, subtle lift on interaction' },
                    { n: 'Input', d: 'Pill-shaped, token-based borders, focus ring in Royal Blue' },
                  ].map((c) => (
                    <div key={c.n}><p className="text-xs font-medium text-[var(--color-text-primary)] mb-0.5">{c.n}</p><p className="text-xs text-[var(--color-text-secondary)]">{c.d}</p></div>
                  ))}
                </div>
              </div>
            </section>
          </Reveal>

          <Divider />

          {/* ━━━ WHAT I SHIPPED ━━━ */}
          <Reveal>
            <section>
              <SectionLabel>What I Shipped</SectionLabel>
              <SectionTitle>Every page designed with intent — from landing to admin dashboard</SectionTitle>

              <div className="max-w-3xl text-[var(--color-text-secondary)] leading-relaxed mb-10">
                <p>Everything below is live at perks.brdg.app and actively used by Bridge&apos;s VC network. I owned the design end-to-end and partnered with Claude Code for implementation, writing detailed specs and reviewing every output against my design intent.</p>
              </div>

              <Stagger className="space-y-4 mb-12">
                {[
                  { t: 'Landing Page', desc: 'Scroll-triggered animations with staggered fade-in-up, count-up stats, infinite logo marquee. Three-step "How It Works" with animated connector lines. Gradient CTA section transitioning from Royal Blue to Accent Blue.', why: 'The page needs to do two things: communicate exclusivity and show breadth. The logo marquee signals "real companies use this." The count-up stats make the scale tangible. The gradient CTA creates urgency without being aggressive.' },
                  { t: 'Perks Listing', desc: 'Dual view modes: Grid (card layout) and By Vendor (accordion groups with smooth CSS grid height animation). Combined filter dropdown with 4 cascading categories. Three-tier default sort: Featured first, grouped second, ungrouped last. "Recently Added" section with time-based badging.', why: 'The dual view maps to two real browsing behaviors: "I know what I need" (grid + filters) vs. "I want to see what Stripe/AWS/etc. offers" (vendor view). Three-tier sort puts the best content at top without requiring user action.' },
                  { t: 'Perk Detail Page', desc: 'Two-column layout: offer context + redemption sidebar. Value pills showing deal value, discount, and estimated savings. Related perks grid. Glassmorphic hero section with backdrop blur. For denied users: blurred content + modal.', why: 'Value pills are the key conversion element — they translate abstract "perks" into concrete dollar amounts. For denied users, the blurred content + modal creates FOMO without frustration — you can see what you\'re missing.' },
                  { t: 'Admin Dashboard — 7 Sections', desc: 'Analytics with redemption metrics. Offer and vendor tracking tables with search, filters, sync-to-DB. CSV bulk upload with drag-drop, client-side validation, preview, and confirmation. Access request review with expandable rows and colleague lookup. Custom vendor group management. Provider config and audit log.', why: 'Designed for operators, not power users. Every table has search and filters because the data set is large. CSV upload has validation AND preview because a bad bulk import could break the marketplace. Access review surfaces colleague info for faster decisions.' },
                ].map((f) => (
                  <Item key={f.t}>
                    <div className="rounded-xl border border-[var(--color-border)] p-6">
                      <p className="text-sm font-semibold text-[var(--color-text-primary)] mb-3">{f.t}</p>
                      <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-3">{f.desc}</p>
                      <p className="text-xs text-[var(--color-text-tertiary)] leading-relaxed pt-3 border-t border-[var(--color-border)]"><span className="font-medium">Design rationale:</span> {f.why}</p>
                    </div>
                  </Item>
                ))}
              </Stagger>

              {/* Designing for Failure */}
              <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-4">How I designed for API failure</h3>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-6 max-w-3xl">The upstream vendor API had outages that previously showed founders blank pages. I designed a fallback experience that prioritizes user continuity over data freshness — because slightly stale perks are infinitely better than a broken page.</p>
              <div className="grid md:grid-cols-3 gap-4 mb-10">
                {[
                  { icon: IconLayers, t: 'Cached Data Layer', d: 'Supabase tracker tables store the last known good state. When the API is down, users see cached data — slightly stale but functional.' },
                  { icon: IconExclamation, t: 'Staleness Indicator', d: 'An amber "Showing cached data" banner appears when serving fallback. Users know it\'s not live but can still browse and plan.' },
                  { icon: IconCog, t: 'Sync Architecture', d: 'I designed what to cache, when to refresh, and how to reconcile when the API returns. The sync is invisible to users.' },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.t} className="rounded-xl border border-[var(--color-border)] p-5">
                      <IconBox><Icon className="text-[var(--color-text-primary)]" /></IconBox>
                      <p className="text-sm font-semibold text-[var(--color-text-primary)] mt-3 mb-1">{item.t}</p>
                      <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{item.d}</p>
                    </div>
                  );
                })}
              </div>

              {/* Accessibility */}
              <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-4">Accessibility (WCAG 2.2 AA)</h3>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
                {[
                  'Focus traps in all modals (restricted modal, CSV upload, confirmation dialogs)',
                  'aria-live regions for status updates during access gate animation',
                  'Full keyboard navigation — every interactive element reachable via Tab',
                  'All animations respect prefers-reduced-motion',
                  'Page-specific document titles and aria-current on navigation',
                  'Proper table semantics for admin data tables',
                  'Minimum 48px touch targets on all interactive elements',
                  'focus-visible rings (2px Royal Blue, 2px offset) on all controls',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)] py-1">
                    <IconCheck className="text-green-600 shrink-0 mt-0.5" />{item}
                  </div>
                ))}
              </div>
            </section>
          </Reveal>

          <Divider />

          {/* ━━━ OUTCOME & IMPACT ━━━ */}
          <Reveal>
            <section>
              <SectionLabel>Outcome &amp; Impact</SectionLabel>
              <SectionTitle>Shipped to production, serving Bridge&apos;s entire VC network</SectionTitle>

              <ul className="space-y-2 text-sm text-[var(--color-text-secondary)] max-w-3xl mb-12">
                {[
                  'Live at perks.brdg.app — serving Bridge\'s entire VC network',
                  '400+ perks from 100+ vendors available to whitelisted users',
                  'Complete access control system processing 300+ VC domains',
                  'Admin tooling across 7 sections for full marketplace operations',
                  'Resilient architecture handling upstream API outages gracefully',
                  'WCAG 2.2 AA accessible across all user flows',
                ].map((item) => (
                  <li key={item} className="flex gap-2"><IconCheck className="text-green-600 shrink-0 mt-0.5" />{item}</li>
                ))}
              </ul>

              <Stagger className="grid md:grid-cols-2 gap-4">
                {[
                  { icon: IconShield, t: 'Access control is a UX design challenge, not just a technical one', d: 'The difference between "you can\'t use this" and "here\'s how to get access" is entirely design. The tiered system turned a rejection into an onboarding funnel.' },
                  { icon: IconLayers, t: 'Showing restricted content builds desire; hiding it kills it', d: 'Letting denied users browse freely but blocking at redemption was counterintuitive — but it\'s the right UX. You can\'t want what you can\'t see.' },
                  { icon: IconBolt, t: 'Design for failure, not just success', d: 'The cached data fallback meant users never saw a blank page during API outages. Designing the failure state was as important as designing the happy path.' },
                  { icon: IconSparkle, t: 'A designer who ships is a designer who learns faster', d: 'Owning the full stack — from research to production — meant I could iterate on UX decisions in real-time, with real users, without waiting for handoffs.' },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <Item key={item.t}>
                      <div className="rounded-xl border border-[var(--color-border)] p-6 h-full">
                        <div className="flex items-center gap-3 mb-3"><IconBox><Icon className="text-[var(--color-text-primary)]" /></IconBox><p className="text-xs text-[var(--color-text-tertiary)]">0{i + 1}</p></div>
                        <p className="text-sm font-semibold text-[var(--color-text-primary)] mb-2">{item.t}</p>
                        <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{item.d}</p>
                      </div>
                    </Item>
                  );
                })}
              </Stagger>
            </section>
          </Reveal>

          <Divider />

          {/* ━━━ REFLECTION ━━━ */}
          <Reveal>
            <section>
              <SectionLabel>Reflection</SectionLabel>
              <SectionTitle>What this project taught me about designing for exclusivity</SectionTitle>
              <div className="max-w-3xl space-y-4 text-[var(--color-text-secondary)] leading-relaxed">
                <p>The biggest lesson from this project was that access control is fundamentally a UX problem. The technical implementation of domain gating is straightforward — the hard part is designing an experience where being restricted doesn&apos;t feel punishing. The tiered browse mode was the most debated design decision, and it turned out to be the most important one.</p>
                <p>If I were starting over, I&apos;d invest more in the admin experience earlier. The 7-section dashboard grew organically as operational needs surfaced, and some of the information architecture could be tighter. I&apos;d also build analytics into the admin panel from day one — tracking which perks get redeemed most would help Bridge prioritize vendor relationships.</p>
              </div>
            </section>
          </Reveal>

          <Divider />

          {/* ━━━ CTA ━━━ */}
          <Reveal>
            <section className="text-center">
              <p className="text-lg md:text-xl text-[var(--color-text-secondary)] mb-6">Want to see Bridge Perks Portal live?</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://perks.brdg.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3.5 text-base font-medium bg-[var(--color-accent)] text-[var(--color-bg)] rounded-lg border border-transparent hover:bg-[var(--color-bg)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-all duration-200">
                  Visit perks.brdg.app <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6m0 0v6m0-6L10 14" /></svg>
                </a>
                <Link href="/work" className="inline-flex items-center justify-center px-6 py-3.5 text-base font-medium text-[var(--color-text-primary)] border border-[var(--color-border)] rounded-lg hover:bg-[var(--color-bg-elevated)] hover:border-[var(--color-text-tertiary)] transition-colors">Back to all work</Link>
              </div>
            </section>
          </Reveal>

        </article>
      </main>
      <Footer />
    </>
  );
}
