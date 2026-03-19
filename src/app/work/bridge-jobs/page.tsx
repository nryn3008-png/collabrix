'use client';

import Link from 'next/link';
import { useReducedMotion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SectionReveal, StaggerContainer, StaggerItem, HeroReveal, HeroItem } from '@/lib/motion';

/* ─── SVG Icons (stroke style) ─── */

function IconUser({ className = '' }: { className?: string }) {
  return (<svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>);
}

function IconBuilding({ className = '' }: { className?: string }) {
  return (<svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" /></svg>);
}

function IconChart({ className = '' }: { className?: string }) {
  return (<svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>);
}

function IconShield({ className = '' }: { className?: string }) {
  return (<svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>);
}

function IconLayers({ className = '' }: { className?: string }) {
  return (<svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0L12 17.25l-5.571-3m11.142 0L21.75 16.5 12 21.75l-9.75-5.25 4.179-2.25" /></svg>);
}

function IconEye({ className = '' }: { className?: string }) {
  return (<svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>);
}

function IconHeart({ className = '' }: { className?: string }) {
  return (<svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>);
}

function IconBolt({ className = '' }: { className?: string }) {
  return (<svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>);
}

function IconGlobe({ className = '' }: { className?: string }) {
  return (<svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>);
}

function IconCube({ className = '' }: { className?: string }) {
  return (<svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" /></svg>);
}

function IconCog({ className = '' }: { className?: string }) {
  return (<svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>);
}

function IconSparkle({ className = '' }: { className?: string }) {
  return (<svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" /></svg>);
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

export default function BridgeJobsCaseStudy() {
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
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-green-600"><span className="w-1.5 h-1.5 rounded-full bg-green-500" />Live in Production</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-semibold text-[var(--color-text-primary)] tracking-tight leading-tight mb-4">
                How I unified 13 ATS providers into one trusted talent board for VC networks
              </h1>
              <p className="text-base md:text-lg text-[var(--color-text-secondary)] mb-2">
                Bridge Jobs — Product Designer &amp; Developer — 2026
              </p>
              <a href="https://jobs.brdg.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] transition-colors">
                jobs.brdg.app <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6m0 0v6m0-6L10 14" /></svg>
              </a>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-10 pt-8 border-t border-[var(--color-border)]">
                {[{ v: '13', l: 'ATS Integrations' }, { v: '120+', l: 'Portfolio Companies Synced' }, { v: '15+', l: 'Pages Across 4 Roles' }, { v: '57', l: 'UI Components Shipped' }].map((s) => (
                  <div key={s.l}><p className="text-2xl md:text-3xl font-semibold text-[var(--color-text-primary)] tracking-tight">{s.v}</p><p className="text-xs text-[var(--color-text-tertiary)] mt-1">{s.l}</p></div>
                ))}
              </div>
            </header>
          ) : (
            <HeroReveal>
              <header className="mb-16 md:mb-20">
                <HeroItem>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-green-600 mb-4"><span className="w-1.5 h-1.5 rounded-full bg-green-500" />Live in Production</span>
                </HeroItem>
                <HeroItem>
                  <h1 className="text-3xl md:text-5xl font-semibold text-[var(--color-text-primary)] tracking-tight leading-tight mb-4">
                    How I unified 13 ATS providers into one trusted talent board for VC networks
                  </h1>
                </HeroItem>
                <HeroItem>
                  <p className="text-base md:text-lg text-[var(--color-text-secondary)] mb-2">Bridge Jobs — Product Designer &amp; Developer — 2026</p>
                  <a href="https://jobs.brdg.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] transition-colors">
                    jobs.brdg.app <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6m0 0v6m0-6L10 14" /></svg>
                  </a>
                </HeroItem>
                <HeroItem>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-10 pt-8 border-t border-[var(--color-border)]">
                    {[{ v: '13', l: 'ATS Integrations' }, { v: '120+', l: 'Portfolio Companies Synced' }, { v: '15+', l: 'Pages Across 4 Roles' }, { v: '57', l: 'UI Components Shipped' }].map((s) => (
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
              <SectionTitle>Bridge needed a way to turn its VC social graph into a hiring advantage</SectionTitle>
              <div className="max-w-3xl space-y-4 text-[var(--color-text-secondary)] leading-relaxed">
                <p>Bridge is a VC networking platform connecting investors, portfolio companies, and talent through warm introductions. The platform had a strong social graph and intro system — but no way for portfolio companies to surface their open roles to network talent, and no way for talent to discover jobs across the VC ecosystem.</p>
                <p>I owned the entire product — from discovery and competitive research through UX strategy, design system creation, and production development. The scope was equivalent to what a designer plus 2–3 engineers would deliver over several months. I used Claude Code (Anthropic&apos;s agentic AI) as my development partner, authoring 9 custom skills to maintain design quality throughout.</p>
                <p>The constraint: Bridge&apos;s existing users already had access to warm intros and investor profiles. The talent product had to feel native to that ecosystem — not a bolted-on job board.</p>
              </div>
            </section>
          </Reveal>

          <Divider />

          {/* ━━━ THE PROBLEM — What Was Broken ━━━ */}
          <Reveal>
            <section>
              <SectionLabel>The Problem</SectionLabel>
              <SectionTitle>Talent in VC networks had no way to discover jobs — the network advantage was invisible</SectionTitle>

              <div className="max-w-3xl space-y-4 text-[var(--color-text-secondary)] leading-relaxed mb-10">
                <p><strong className="text-[var(--color-text-primary)]">From the user&apos;s perspective:</strong> Talent in networks like Techstars, Orange DAO, and Angel Invest Ventures had to manually check each portfolio company&apos;s career page across Greenhouse, Lever, Workable, Ashby, and a dozen more ATS providers. The &quot;network advantage&quot; they were promised by their VC connection didn&apos;t translate into an actual hiring experience.</p>
                <p><strong className="text-[var(--color-text-primary)]">From the business perspective:</strong> Bridge&apos;s value proposition was warm introductions — but without jobs surfaced in the network, there was nothing to introduce talent TO. Competing platforms like Getro ($210–500/mo) and Consider (enterprise pricing) had staked out this space, but with generic UI and no community layer.</p>
                <p><strong className="text-[var(--color-text-primary)]">From the technical perspective:</strong> Each VC network&apos;s portfolio companies used different ATS providers with different APIs, different data formats, and different rate limits. There was no unified way to aggregate jobs across 13+ providers without building a custom sync layer for each one.</p>
              </div>

              {/* Before / After */}
              <div className="grid md:grid-cols-2 gap-4 mb-10">
                <div className="rounded-xl border border-[var(--color-border)] p-6 bg-[var(--color-bg-elevated)]">
                  <p className="text-xs font-medium text-[var(--color-text-tertiary)] uppercase tracking-wide mb-4">Before — Fragmented</p>
                  <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
                    {['Greenhouse careers page', 'Lever careers page', 'Workable careers page', 'Ashby careers page', '9 more ATS career pages...'].map((item) => (
                      <li key={item} className="flex items-start gap-2"><IconX className="text-[var(--color-text-tertiary)] shrink-0 mt-0.5" />{item}</li>
                    ))}
                    <li className="text-xs text-[var(--color-text-tertiary)] mt-3 pt-3 border-t border-[var(--color-border)]">Talent checks 10+ separate pages. Network advantage = zero.</li>
                  </ul>
                </div>
                <div className="rounded-xl border border-[var(--color-text-primary)] p-6">
                  <p className="text-xs font-medium text-[var(--color-text-primary)] uppercase tracking-wide mb-4">After — Unified</p>
                  <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
                    {['All 13 ATS providers in one board', 'VC trust signals on every job', 'Warm intro paths visible', 'Company discovery by network', 'Branded pages per VC fund'].map((item) => (
                      <li key={item} className="flex items-start gap-2"><IconCheck className="text-[var(--color-text-primary)] shrink-0 mt-0.5" />{item}</li>
                    ))}
                    <li className="text-xs text-[var(--color-text-tertiary)] mt-3 pt-3 border-t border-[var(--color-border)]">One trusted board. Network advantage = the product.</li>
                  </ul>
                </div>
              </div>

              {/* Competitive Landscape */}
              <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-4">Competitive landscape</h3>
              <div className="rounded-xl border border-[var(--color-border)] overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead><tr className="border-b border-[var(--color-border)] bg-[var(--color-bg-elevated)]">
                      {['Platform', 'Model', 'Price', 'Limitation', 'Bridge Advantage'].map((h) => (<th key={h} className="text-left px-5 py-3 text-xs font-medium text-[var(--color-text-tertiary)] uppercase tracking-wide">{h}</th>))}
                    </tr></thead>
                    <tbody>
                      {[
                        { n: 'Getro', m: 'Auto-scraping aggregator + warm intros', p: '$210–500/mo', l: 'Basic UI, no rich profiles', a: 'Rich profiles, community, endorsements' },
                        { n: 'Consider', m: 'Talent circles + recruiter tools', p: 'Enterprise', l: 'Expensive, complex setup', a: 'Integrated platform ecosystem' },
                        { n: 'Wellfound', m: 'Public marketplace, 10M+ candidates', p: 'Free–$499/mo', l: 'Public = noisy, no trust signals', a: 'Private, vetted, network-endorsed' },
                      ].map((c) => (
                        <tr key={c.n} className="border-b border-[var(--color-border)] last:border-0">
                          <td className="px-5 py-3 font-medium text-[var(--color-text-primary)]">{c.n}</td>
                          <td className="px-5 py-3 text-[var(--color-text-secondary)]">{c.m}</td>
                          <td className="px-5 py-3 text-[var(--color-text-secondary)]">{c.p}</td>
                          <td className="px-5 py-3 text-[var(--color-text-secondary)]">{c.l}</td>
                          <td className="px-5 py-3 text-[var(--color-text-primary)] font-medium">{c.a}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          </Reveal>

          <Divider />

          {/* ━━━ DISCOVERY — How I Understood the Problem ━━━ */}
          <Reveal>
            <section>
              <SectionLabel>Discovery &amp; Research</SectionLabel>
              <SectionTitle>I mapped three user worlds before drawing a single screen</SectionTitle>

              <div className="max-w-3xl space-y-4 text-[var(--color-text-secondary)] leading-relaxed mb-10">
                <p>I started with a comprehensive product specification — not wireframes. Before I could design interfaces for a multi-role platform, I needed to understand what each user type actually needed to accomplish and where those needs overlapped or conflicted.</p>
                <p>The competitive analysis revealed an insight that shaped the entire product: existing solutions treated job boards as a standalone feature. None of them leveraged an existing social graph. Bridge already had the trust layer — warm intros, investor profiles, portfolio relationships. The design opportunity was to make that trust layer visible in the hiring experience.</p>
                <p>I synthesized the research into five design principles that would guide every screen, and defined three primary personas with distinct goals, pain points, and permission levels.</p>
              </div>

              {/* Personas */}
              <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-6">User personas I designed for</h3>
              <Stagger className="grid md:grid-cols-3 gap-4 mb-10">
                {[
                  { icon: IconUser, role: 'Talent', ctx: 'Job seekers in the Bridge network', goal: 'Discover curated roles with warm intro paths instead of competing on noisy public boards.', needs: ['See which VCs back each company', 'Find mutual connections for warm intros', 'One-click apply with pre-filled profile'] },
                  { icon: IconBuilding, role: 'Hiring Manager', ctx: 'CEOs, CTOs, VP People at portfolio companies', goal: 'Fill roles fast with vetted, network-endorsed candidates.', needs: ['Post jobs from existing ATS without duplication', 'See which candidates have warm paths', 'Track pipeline per VC network'] },
                  { icon: IconChart, role: 'VC / Fund Manager', ctx: 'Partners and talent partners at VC firms', goal: 'Help portfolio companies hire and track talent flow across the network.', needs: ['Dashboard with hiring velocity metrics', 'Branded career page for the fund', 'Control which companies are visible'] },
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

              {/* Design Principles */}
              <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-6">Design principles I established</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { icon: IconGlobe, t: 'Network-first', d: 'Every screen reinforces this is a private, trusted network — not a public job board. The VC brand is always visible.' },
                  { icon: IconShield, t: 'Trust signals everywhere', d: 'VC badges, endorsements, and mutual connections at all interaction points. Trust is the core differentiator.' },
                  { icon: IconLayers, t: 'Progressive disclosure', d: 'Essential info first, detail on demand. Job cards show what matters — the full story lives in the detail view.' },
                  { icon: IconHeart, t: 'Warm over cold', d: 'Always surface warm intro paths before a generic "Apply." The network advantage should feel tangible.' },
                  { icon: IconBolt, t: 'Minimal friction', d: 'One-click apply, auto-filled forms, SSO login. Every extra step is a candidate lost.' },
                ].map((p, i) => {
                  const Icon = p.icon;
                  return (
                    <div key={p.t} className="rounded-xl border border-[var(--color-border)] p-5">
                      <div className="flex items-center gap-3 mb-3">
                        <IconBox><Icon className="text-[var(--color-text-primary)]" /></IconBox>
                        <div><p className="text-xs text-[var(--color-text-tertiary)]">0{i + 1}</p><p className="text-sm font-semibold text-[var(--color-text-primary)]">{p.t}</p></div>
                      </div>
                      <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{p.d}</p>
                    </div>
                  );
                })}
              </div>
            </section>
          </Reveal>

          <Divider />

          {/* ━━━ DESIGN PROCESS — Decisions & Tradeoffs ━━━ */}
          <Reveal>
            <section>
              <SectionLabel>Design Process</SectionLabel>
              <SectionTitle>Four product decisions that shaped the architecture</SectionTitle>

              <div className="max-w-3xl text-[var(--color-text-secondary)] leading-relaxed mb-14">
                <p>These aren&apos;t UI polish decisions. Each one determined how four user roles, 120+ companies, and 13 ATS providers coexist in a single product — and each one required choosing the harder path because the obvious solution didn&apos;t scale.</p>
              </div>

              {/* ── Decision 1: One Job Record, Three Experiences ── */}
              <div className="mb-20">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-mono font-medium text-[#0038FF] bg-[#0038FF]/8 px-2.5 py-0.5 rounded">01</span>
                  <p className="text-xs font-medium text-[var(--color-text-tertiary)] uppercase tracking-wide">Data architecture</p>
                </div>
                <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-4">One job record, three completely different experiences</h3>
                <div className="max-w-3xl text-sm text-[var(--color-text-secondary)] leading-relaxed space-y-3 mb-8">
                  <p>The obvious approach: build a job board and bolt on VC management later. Instead, I treated each VC&apos;s data scope as the fundamental design unit. A single job record in the database flows through three entirely different user experiences — with zero data duplication.</p>
                  <p>The key insight: a VC should be able to hide a job from their branded career page without affecting the public board or other VCs. This isn&apos;t a visibility toggle on the job itself — it&apos;s <em>context-dependent availability</em>. The same &quot;Senior Engineer at Stripe&quot; listing can be visible on the public board, hidden from Techstars&apos; career page, and featured on Orange DAO&apos;s — all from one database record.</p>
                </div>

                {/* Visual: Single record → three surfaces */}
                <div className="rounded-xl border border-[var(--color-border)] overflow-hidden mb-6">
                  <div className="p-5 bg-[var(--color-bg)] border-b border-[var(--color-border)]">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#0038FF]/10 flex items-center justify-center"><IconCube className="text-[#0038FF]" /></div>
                      <div>
                        <p className="text-xs font-semibold text-[var(--color-text-primary)]">Senior Engineer at Stripe</p>
                        <p className="text-[10px] text-[var(--color-text-tertiary)]">Single record in database &middot; source: Greenhouse &middot; synced 2h ago</p>
                      </div>
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[var(--color-border)]">
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <IconGlobe className="text-[#0038FF]" />
                        <p className="text-xs font-semibold text-[var(--color-text-primary)]">Public Job Board</p>
                      </div>
                      <div className="flex items-center gap-1.5 mb-2"><IconCheck className="text-[#0EA02E]" /><p className="text-[11px] text-[var(--color-text-secondary)]">Visible to all talent</p></div>
                      <p className="text-[10px] text-[var(--color-text-tertiary)] leading-relaxed">Aggregated across all VCs. Deduplicated by company domain. Shows every active job.</p>
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-5 h-5 rounded" style={{ backgroundColor: '#00B2A9' }} />
                        <p className="text-xs font-semibold text-[var(--color-text-primary)]">Techstars Careers</p>
                      </div>
                      <div className="flex items-center gap-1.5 mb-2"><IconX className="text-[#E13535]" /><p className="text-[11px] text-[var(--color-text-secondary)]">Hidden by VC manager</p></div>
                      <p className="text-[10px] text-[var(--color-text-tertiary)] leading-relaxed">VcHiddenJob record exists. This job won&apos;t appear on Techstars&apos; branded page.</p>
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-5 h-5 rounded" style={{ backgroundColor: '#FF6B00' }} />
                        <p className="text-xs font-semibold text-[var(--color-text-primary)]">Orange DAO Careers</p>
                      </div>
                      <div className="flex items-center gap-1.5 mb-2"><IconCheck className="text-[#0EA02E]" /><p className="text-[11px] text-[var(--color-text-secondary)]">Featured on their page</p></div>
                      <p className="text-[10px] text-[var(--color-text-tertiary)] leading-relaxed">No hidden record. Stripe is in Orange DAO&apos;s portfolio, so the job appears.</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)] px-4 py-3">
                  <p className="text-xs text-[var(--color-text-tertiary)] leading-relaxed"><span className="font-medium text-[var(--color-text-secondary)]">Why this matters:</span> Most multi-tenant platforms duplicate data per tenant or use simple boolean flags. I designed a join-table approach (<code className="text-[10px] font-mono bg-[var(--color-bg-elevated)] px-1 rounded">VcHiddenJob</code>) that creates scope isolation without copying records. One source of truth, infinite presentation contexts. This applies <span className="text-[var(--color-text-secondary)] font-medium">Jakob&apos;s Law</span> at the platform level — each user group experiences an interface that matches the mental model of their own domain (talent sees a job board, VCs see a portfolio tool), even though the underlying data is shared.</p>
                </div>
              </div>

              {/* ── Decision 2: Role as a Lens, Not a Gate ── */}
              <div className="mb-20">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-mono font-medium text-[#0038FF] bg-[#0038FF]/8 px-2.5 py-0.5 rounded">02</span>
                  <p className="text-xs font-medium text-[var(--color-text-tertiary)] uppercase tracking-wide">Multi-role UX</p>
                </div>
                <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-4">Same data, four different relationships — role as a lens, not a gate</h3>
                <div className="max-w-3xl text-sm text-[var(--color-text-secondary)] leading-relaxed space-y-3 mb-8">
                  <p>The standard approach to multi-role products: show different features per role. Show more buttons for admins, fewer for talent. But Bridge&apos;s users don&apos;t just need different features — they need a fundamentally different <em>relationship</em> with the same data.</p>
                  <p>A VC manager looking at &quot;23 jobs this week&quot; sees a portfolio health metric. An admin seeing the same number sees a platform growth signal. Talent sees opportunity. Same number, three meanings. I designed the entire interface around this principle: roles don&apos;t just gate access — they change what data <em>means</em>.</p>
                </div>

                {/* Visual: NavSwitcher + Data reinterpretation */}
                <div className="rounded-xl border border-[var(--color-border)] overflow-hidden mb-6">
                  {/* NavSwitcher mockup */}
                  <div className="flex items-center gap-3 px-5 py-3 bg-[var(--color-bg)] border-b border-[var(--color-border)]">
                    <p className="text-xs font-medium text-[var(--color-text-tertiary)]">NavSwitcher</p>
                    <div className="flex gap-1">
                      {['Job Board', 'VC Manager', 'Admin'].map((v, i) => (
                        <span key={v} className={`text-[10px] font-medium px-2.5 py-1 rounded-full ${i === 1 ? 'bg-[#0038FF] text-white' : 'text-[var(--color-text-tertiary)] bg-[var(--color-bg-elevated)]'}`}>{v}</span>
                      ))}
                    </div>
                    <p className="text-[10px] text-[var(--color-text-tertiary)] ml-auto">One dropdown changes everything</p>
                  </div>
                  <div className="grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[var(--color-border)]">
                    {[
                      { role: 'Talent', metric: '23 new jobs', meaning: 'Opportunity to explore', sees: 'Job cards with salary, location, warm intro paths', color: '#568FFF' },
                      { role: 'VC Manager', metric: '23 new jobs', meaning: 'Portfolio hiring velocity', sees: 'Trend chart, top hiring companies, sync freshness', color: '#0038FF' },
                      { role: 'Admin', metric: '23 new jobs', meaning: 'Platform-wide growth', sees: 'Cross-VC aggregates, provider distribution, system health', color: '#7450DA' },
                    ].map((r) => (
                      <div key={r.role} className="p-5">
                        <p className="text-[10px] font-medium uppercase tracking-widest mb-3" style={{ color: r.color }}>{r.role}</p>
                        <p className="text-2xl font-bold text-[var(--color-text-primary)] mb-1">23</p>
                        <p className="text-xs font-medium text-[var(--color-text-secondary)] mb-3">{r.meaning}</p>
                        <p className="text-[10px] text-[var(--color-text-tertiary)] leading-relaxed pt-3 border-t border-[var(--color-border)]">{r.sees}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Shared component reuse diagram */}
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  <div className="rounded-xl border border-[var(--color-border)] p-5">
                    <p className="text-[10px] font-medium text-[var(--color-text-tertiary)] uppercase tracking-widest mb-3">The component architecture</p>
                    <div className="space-y-2">
                      {[
                        { component: 'VcDashboardSections', usedBy: 'VC dashboard, Admin dashboard, Admin VC detail' },
                        { component: 'StatCard + valueColor', usedBy: 'Same card shows green/amber/red based on data freshness' },
                        { component: 'JobTrendChart', usedBy: 'VC sees their portfolio; Admin sees all networks' },
                      ].map((c) => (
                        <div key={c.component} className="flex items-start gap-2">
                          <IconLayers className="text-[#0038FF] mt-0.5 shrink-0" />
                          <div>
                            <p className="text-[11px] font-medium text-[var(--color-text-primary)]">{c.component}</p>
                            <p className="text-[10px] text-[var(--color-text-tertiary)]">{c.usedBy}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-xl border border-[var(--color-border)] p-5">
                    <p className="text-[10px] font-medium text-[var(--color-text-tertiary)] uppercase tracking-widest mb-3">What changes per role</p>
                    <div className="space-y-2">
                      {[
                        { what: 'Data scope', how: 'basePath prop switches between /vc/:domain and /admin' },
                        { what: 'Stat meaning', how: 'Color-coded freshness: green (<6h), amber (6-48h), red (>48h)' },
                        { what: 'Available actions', how: 'VC: sync + brand. Admin: sync + edit + manage users' },
                      ].map((c) => (
                        <div key={c.what} className="flex items-start gap-2">
                          <IconCog className="text-[var(--color-text-tertiary)] mt-0.5 shrink-0" />
                          <div>
                            <p className="text-[11px] font-medium text-[var(--color-text-primary)]">{c.what}</p>
                            <p className="text-[10px] text-[var(--color-text-tertiary)]">{c.how}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)] px-4 py-3">
                  <p className="text-xs text-[var(--color-text-tertiary)] leading-relaxed"><span className="font-medium text-[var(--color-text-secondary)]">Why this matters:</span> I designed one shared <code className="text-[10px] font-mono bg-[var(--color-bg-elevated)] px-1 rounded">VcDashboardSections</code> component that renders identically across three dashboards — only the data scope changes via a <code className="text-[10px] font-mono bg-[var(--color-bg-elevated)] px-1 rounded">basePath</code> prop. This applies <span className="text-[var(--color-text-secondary)] font-medium">Miller&apos;s Law</span> — by keeping the visual structure consistent across roles, users chunk information the same way regardless of which dashboard they&apos;re on. A VC manager promoted to admin doesn&apos;t relearn the interface. And it embodies the <span className="text-[var(--color-text-secondary)] font-medium">Aesthetic-Usability Effect</span> — the visual consistency signals reliability, making users trust the data more because the container feels familiar.</p>
                </div>
              </div>

              {/* ── Decision 3: Making Bridge Disappear ── */}
              <div className="mb-20">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-mono font-medium text-[#0038FF] bg-[#0038FF]/8 px-2.5 py-0.5 rounded">03</span>
                  <p className="text-xs font-medium text-[var(--color-text-tertiary)] uppercase tracking-wide">Platform strategy</p>
                </div>
                <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-4">Making Bridge disappear — career pages as invisible infrastructure</h3>
                <div className="max-w-3xl text-sm text-[var(--color-text-secondary)] leading-relaxed space-y-3 mb-8">
                  <p>Here&apos;s the counterintuitive product decision: Bridge&apos;s best outcome is when VCs forget they&apos;re using Bridge. The career page at <code className="text-xs bg-[var(--color-bg)] border border-[var(--color-border)] px-1.5 py-0.5 rounded font-mono">careers.techstars.com</code> shouldn&apos;t look like a Bridge product — it should look like Techstars built it themselves.</p>
                  <p>I designed the career pages not as white-label templates (slap a logo on and ship), but as fully owned product surfaces. Custom domain routing at the edge proxy level. Per-VC navigation, hero content, footer links, and social icons — all configurable from the VC Manager settings panel. JSON-LD structured data scoped to each VC. Even an offline screen that carries the VC&apos;s brand, not Bridge&apos;s.</p>
                  <p>This changed Bridge&apos;s distribution model. VCs don&apos;t share bridge.app links — they share <em>their own</em> career page URL. Bridge becomes invisible infrastructure, and that&apos;s exactly what makes VCs adopt it.</p>
                </div>

                {/* Visual: What the VC Manager controls */}
                <div className="rounded-xl border border-[var(--color-border)] overflow-hidden mb-6">
                  <div className="px-5 py-3 bg-[var(--color-bg)] border-b border-[var(--color-border)]">
                    <p className="text-[10px] font-medium text-[var(--color-text-tertiary)] uppercase tracking-widest">VC Manager Settings &rarr; what they control</p>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-[var(--color-border)]">
                    {[
                      { area: 'Brand', items: ['Logo (light + dark)', 'Brand color', 'Accent color', 'Favicon'] },
                      { area: 'Content', items: ['Hero headline', 'Hero subtext', 'Display name', 'Description'] },
                      { area: 'Navigation', items: ['Custom nav links', 'Footer links', 'Social links', '"Post a Job" toggle'] },
                      { area: 'Distribution', items: ['Custom domain', 'SEO metadata', 'JSON-LD schema', 'Owner banner'] },
                    ].map((section) => (
                      <div key={section.area} className="p-4">
                        <p className="text-[10px] font-semibold text-[#0038FF] uppercase tracking-widest mb-2">{section.area}</p>
                        {section.items.map((item) => (
                          <p key={item} className="text-[10px] text-[var(--color-text-tertiary)] leading-relaxed">{item}</p>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual: Three different branded pages */}
                <div className="grid sm:grid-cols-3 gap-3 mb-6">
                  {[
                    { name: 'Techstars', color: '#00B2A9', domain: 'careers.techstars.com' },
                    { name: 'Orange DAO', color: '#FF6B00', domain: 'careers.orangedao.xyz' },
                    { name: 'Angel Invest', color: '#7450DA', domain: 'careers.angelinvest.ventures' },
                  ].map((vc) => (
                    <div key={vc.name} className="rounded-xl overflow-hidden border border-[var(--color-border)]">
                      <div className="h-2" style={{ backgroundColor: vc.color }} />
                      <div className="p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-4 h-4 rounded" style={{ backgroundColor: vc.color }} />
                          <p className="text-[11px] font-semibold text-[var(--color-text-primary)]">{vc.name}</p>
                        </div>
                        <p className="text-[10px] text-[var(--color-text-tertiary)] font-mono mb-3">{vc.domain}</p>
                        <div className="flex gap-1">
                          {['Jobs', 'Companies'].map((tab, i) => (
                            <span key={tab} className="text-[9px] px-2 py-0.5 rounded-full" style={{ backgroundColor: i === 0 ? vc.color + '15' : 'transparent', color: i === 0 ? vc.color : 'var(--color-text-tertiary)' }}>{tab}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)] px-4 py-3">
                  <p className="text-xs text-[var(--color-text-tertiary)] leading-relaxed"><span className="font-medium text-[var(--color-text-secondary)]">Why this matters:</span> This applies <span className="text-[var(--color-text-secondary)] font-medium">Tesler&apos;s Law</span> (the conservation of complexity) — the complexity of custom domains, SEO schemas, and brand theming doesn&apos;t disappear; it shifts from the VC to the system. The settings panel absorbs all the technical complexity so fund operators never touch code. The owner banner applies <span className="text-[var(--color-text-secondary)] font-medium">Postel&apos;s Law</span> to UI — be generous in what context you show the user. When a VC visits their own page, the system proactively tells them &quot;You&apos;re viewing your own directory,&quot; reducing the cognitive load of figuring out what mode they&apos;re in.</p>
                </div>
              </div>

              {/* ── Decision 4: Sync Freshness as a First-Class Metric ── */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-mono font-medium text-[#0038FF] bg-[#0038FF]/8 px-2.5 py-0.5 rounded">04</span>
                  <p className="text-xs font-medium text-[var(--color-text-tertiary)] uppercase tracking-wide">Trust through transparency</p>
                </div>
                <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-4">Exposing the machine — sync freshness as a visible trust metric</h3>
                <div className="max-w-3xl text-sm text-[var(--color-text-secondary)] leading-relaxed space-y-3 mb-8">
                  <p>A job board that shows stale listings is worse than no job board at all. But most platforms hide their sync status behind admin dashboards or monitoring tools. I made a different choice: make data freshness a first-class, visible metric that VC managers and admins see every time they open their dashboard.</p>
                  <p>The &quot;Last synced&quot; stat card uses color-coded urgency — green when fresh, amber when aging, red when stale. This isn&apos;t decoration. It&apos;s a trust mechanism that turns infrastructure health into a product feature. VCs can immediately tell if their job data is current without filing a support ticket.</p>
                </div>

                {/* Visual: Freshness color system */}
                <div className="grid sm:grid-cols-3 gap-4 mb-6">
                  {[
                    { label: 'Fresh', time: '2 hours ago', color: '#0D7C47', bg: '#0D7C47', desc: 'Synced within the last 6 hours. Jobs are current. No action needed.' },
                    { label: 'Aging', time: '18 hours ago', color: '#B08A00', bg: '#B08A00', desc: 'Between 6-48 hours since last sync. May be worth a manual refresh.' },
                    { label: 'Stale', time: '3 days ago', color: '#D93025', bg: '#D93025', desc: 'Over 48 hours. Something may be wrong. Investigate immediately.' },
                  ].map((s) => (
                    <div key={s.label} className="rounded-xl border border-[var(--color-border)] p-5">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: s.bg }} />
                        <p className="text-[10px] font-medium uppercase tracking-widest" style={{ color: s.color }}>{s.label}</p>
                      </div>
                      <p className="text-lg font-bold mb-1" style={{ color: s.color }}>{s.time}</p>
                      <p className="text-[10px] text-[var(--color-text-tertiary)] uppercase tracking-wide mb-3">Last synced</p>
                      <p className="text-[11px] text-[var(--color-text-secondary)] leading-relaxed pt-3 border-t border-[var(--color-border)]">{s.desc}</p>
                    </div>
                  ))}
                </div>

                {/* How it connects to the bigger picture */}
                <div className="rounded-xl border border-[var(--color-border)] p-5 mb-6">
                  <p className="text-[10px] font-medium text-[var(--color-text-tertiary)] uppercase tracking-widest mb-4">The full trust chain</p>
                  <div className="flex flex-wrap items-center gap-2 text-[11px]">
                    {[
                      '13 ATS providers sync every 6h',
                      'Freshness color on dashboard',
                      'Activity log records every sync',
                      'VC manager sees audit trail',
                      'Candidates see current jobs',
                    ].map((step, i) => (
                      <span key={step} className="flex items-center gap-2">
                        <span className="px-2.5 py-1 rounded-full bg-[var(--color-bg)] border border-[var(--color-border)] text-[var(--color-text-secondary)] font-medium">{step}</span>
                        {i < 4 && <IconArrowRight className="text-[var(--color-text-tertiary)]" />}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)] px-4 py-3">
                  <p className="text-xs text-[var(--color-text-tertiary)] leading-relaxed"><span className="font-medium text-[var(--color-text-secondary)]">Why this matters:</span> This applies <span className="text-[var(--color-text-secondary)] font-medium">the Visibility of System Status</span> (Nielsen&apos;s #1 heuristic) — but elevated from a loading spinner to a persistent trust metric. Green/amber/red follows the <span className="text-[var(--color-text-secondary)] font-medium">Pre-attentive Processing</span> principle: users process color faster than reading text, so a stale sync registers as a problem before the number is even read. The <code className="text-[10px] font-mono bg-[var(--color-bg-elevated)] px-1 rounded">valueColor</code> prop creates what <span className="text-[var(--color-text-secondary)] font-medium">Doherty Threshold</span> research calls &quot;system confidence&quot; — when the interface communicates its own health, users trust the data it shows. Combined with the activity audit log, this closes the loop: VCs never ask &quot;is this current?&quot; — the interface answers before they think to ask.</p>
                </div>
              </div>

              {/* Design System */}
              <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-4">The design system I built</h3>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-6 max-w-3xl">I created a comprehensive design system before the first line of code — then codified it into CSS custom properties and Tailwind utilities. This became the single source of truth, and critically, the instruction set that kept AI-generated code consistent with my design intent.</p>
              <div className="rounded-xl border border-[var(--color-border)] p-6">
                <p className="text-xs font-medium text-[var(--color-text-tertiary)] uppercase tracking-wide mb-4">Color palette</p>
                <div className="flex flex-wrap gap-3 mb-6">
                  {[
                    { n: 'Royal Blue', h: '#0038FF', r: 'Primary' }, { n: 'Charcoal', h: '#0D1531', r: 'Text' }, { n: 'Slate 05', h: '#F9F9FA', r: 'Background' }, { n: 'Slate 30', h: '#D9DBE1', r: 'Borders' },
                    { n: 'Kelly', h: '#0EA02E', r: 'Success' }, { n: 'Honey', h: '#E19500', r: 'Warning' }, { n: 'Ruby', h: '#E13535', r: 'Error' }, { n: 'Sky', h: '#568FFF', r: 'Accent' },
                  ].map((c) => (
                    <div key={c.n} className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-md border border-[var(--color-border)]" style={{ backgroundColor: c.h }} />
                      <div><p className="text-xs font-medium text-[var(--color-text-primary)]">{c.n}</p><p className="text-[10px] text-[var(--color-text-tertiary)]">{c.h} · {c.r}</p></div>
                    </div>
                  ))}
                </div>
                <div className="grid sm:grid-cols-3 gap-4 pt-4 border-t border-[var(--color-border)]">
                  <div><p className="text-xs font-medium text-[var(--color-text-tertiary)] mb-1">Typography</p><p className="text-xs text-[var(--color-text-secondary)]">Mulish, weights 400–700, 12px–36px scale</p></div>
                  <div><p className="text-xs font-medium text-[var(--color-text-tertiary)] mb-1">Spacing</p><p className="text-xs text-[var(--color-text-secondary)]">8px grid system</p></div>
                  <div><p className="text-xs font-medium text-[var(--color-text-tertiary)] mb-1">Elevation</p><p className="text-xs text-[var(--color-text-secondary)]">Ds1 (subtle), Ds2 (card), Ds3 (hover)</p></div>
                </div>
              </div>
            </section>
          </Reveal>

          <Divider />

          {/* ━━━ THE SOLUTION — What I Shipped ━━━ */}
          <Reveal>
            <section>
              <SectionLabel>What I Shipped</SectionLabel>
              <SectionTitle>15+ pages across 4 user roles — live at jobs.brdg.app</SectionTitle>

              <div className="max-w-3xl text-[var(--color-text-secondary)] leading-relaxed mb-10">
                <p>Every feature below is live in production and actively used. I owned the design end-to-end and partnered with Claude Code for implementation — authoring 9 custom AI skills to maintain design system fidelity, accessibility standards, and UX consistency throughout development.</p>
              </div>

              <Stagger className="grid md:grid-cols-2 gap-4 mb-12">
                {[
                  { t: 'Public Job Board', r: '/jobs', desc: 'Full-width hero with gradient, elevated search bar, Jobs/Companies tab bar, advanced filters, staggered card animations.', why: 'The hero gradient establishes brand tone immediately. Search is visually dominant — it\'s the primary action. Horizontal filter scrolling on mobile avoids a cramped multi-row layout.' },
                  { t: 'Job Detail', r: '/jobs/:id', desc: 'Two-column layout with rich content + sidebar. Contextual breadcrumbs via URL params. Warm intros card with three auth states.', why: 'The sidebar stays fixed while content scrolls on desktop. Warm intros card sits above the company card — warm paths are the differentiator and get top placement.' },
                  { t: 'Companies Browser', r: '/jobs?tab=companies', desc: 'Company cards with logo, industry, funding stage, open jobs count, and VC network badges. Deduplicated across VCs.', why: 'VC badges are the trust signal — always visible on the card, not behind a click. Card density optimized for scanning: enough to decide, not so much it overwhelms.' },
                  { t: 'Branded Career Pages', r: '/careers/:domain', desc: 'Fully customizable per-VC: header, hero with custom colors, job filters, company listings, footer. Custom domain support, SEO, JSON-LD.', why: 'Each VC fund\'s career page feels like their own product. The branding form includes a live preview iframe so managers see changes in real-time.' },
                  { t: 'VC Manager Dashboard', r: '/vc/:domain/dashboard', desc: 'Stat cards with color-coded freshness (green < 6h, amber 6–48h, red > 48h), 12-week trend chart, top hiring companies, activity log.', why: 'Color-coded freshness makes data staleness immediately visible — no need to read timestamps. Gradient chart fill adds depth without competing with stats.' },
                  { t: 'Admin Panel', r: '/admin/*', desc: 'Aggregate stats, bulk job management, VC network CRUD, user management, sync controls. Reuses VC Manager components via shared module with basePath prop.', why: 'Component reuse was deliberate — same tables, different data scope. This kept the design language consistent and reduced surface area.' },
                ].map((f) => (
                  <Item key={f.t}>
                    <div className="rounded-xl border border-[var(--color-border)] p-6 h-full">
                      <div className="flex items-baseline justify-between gap-2 mb-2">
                        <p className="text-sm font-semibold text-[var(--color-text-primary)]">{f.t}</p>
                        <code className="text-[10px] text-[var(--color-text-tertiary)] bg-[var(--color-bg)] border border-[var(--color-border)] px-1.5 py-0.5 rounded shrink-0">{f.r}</code>
                      </div>
                      <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-3">{f.desc}</p>
                      <p className="text-xs text-[var(--color-text-tertiary)] leading-relaxed pt-3 border-t border-[var(--color-border)]"><span className="font-medium">Design rationale:</span> {f.why}</p>
                    </div>
                  </Item>
                ))}
              </Stagger>

              {/* Component inventory */}
              <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-4">57 components across 7 domains</h3>
              <div className="rounded-xl border border-[var(--color-border)] overflow-hidden mb-10">
                <table className="w-full text-sm">
                  <thead><tr className="border-b border-[var(--color-border)] bg-[var(--color-bg-elevated)]">
                    <th className="text-left px-5 py-3 text-xs font-medium text-[var(--color-text-tertiary)] uppercase tracking-wide">Domain</th>
                    <th className="text-center px-5 py-3 text-xs font-medium text-[var(--color-text-tertiary)] uppercase tracking-wide w-16">Count</th>
                    <th className="text-left px-5 py-3 text-xs font-medium text-[var(--color-text-tertiary)] uppercase tracking-wide">Key Components</th>
                  </tr></thead>
                  <tbody>
                    {[
                      { d: 'Layout', c: 4, e: 'TopNav (glassmorphism), AppSidebar, NavSwitcher, UserProfilePopup' },
                      { d: 'Jobs', c: 4, e: 'JobCard, JobFilters, JobBoardTabBar, JobPostForm' },
                      { d: 'Careers', c: 13, e: 'VcHeader, CareersHero, CareersJobCard, CareersFooter, OfflineScreen' },
                      { d: 'Admin', c: 8, e: 'AdminTable, StatCard, SyncActionCard, ConfirmDialog' },
                      { d: 'VC Manager', c: 5, e: 'JobTrendChart, VcBrandingForm, PreviewIframe' },
                      { d: 'Shared', c: 2, e: 'CompanySidebarCard, WarmIntrosCard' },
                      { d: 'UI Primitives', c: 21, e: 'Extended shadcn/ui with Bridge variants' },
                    ].map((r) => (
                      <tr key={r.d} className="border-b border-[var(--color-border)] last:border-0">
                        <td className="px-5 py-3 font-medium text-[var(--color-text-primary)]">{r.d}</td>
                        <td className="text-center px-5 py-3 text-[var(--color-text-secondary)]">{r.c}</td>
                        <td className="px-5 py-3 text-[var(--color-text-secondary)]">{r.e}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Accessibility */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="rounded-xl border border-[var(--color-border)] p-5">
                  <p className="text-xs font-medium text-[var(--color-text-tertiary)] uppercase tracking-wide mb-4">Accessibility</p>
                  <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
                    {['WCAG AA color contrast on all text', 'Focus rings: 2px Royal Blue, 2px offset', 'Reduced motion via @media query', 'Semantic HTML with heading hierarchy', 'Keyboard navigation (Radix primitives)'].map((a) => (
                      <li key={a} className="flex gap-2"><IconCheck className="text-green-600 shrink-0" />{a}</li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl border border-[var(--color-border)] p-5">
                  <p className="text-xs font-medium text-[var(--color-text-tertiary)] uppercase tracking-wide mb-4">Micro-interactions I specified</p>
                  <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
                    {['Card stagger: 8 cards, 50ms delay, 300ms total', 'Card hover: translateY(-2px) + Ds3 shadow (200ms)', 'Nav transitions: 150ms color, 200ms shadow', 'Page transitions: opacity 300ms with content shift'].map((a) => (
                      <li key={a} className="flex gap-2"><span className="text-[var(--color-text-tertiary)] shrink-0">•</span>{a}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          </Reveal>

          <Divider />

          {/* ━━━ OUTCOME & IMPACT ━━━ */}
          <Reveal>
            <section>
              <SectionLabel>Outcome &amp; Impact</SectionLabel>
              <SectionTitle>A production SaaS serving Bridge&apos;s entire VC network</SectionTitle>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                {[
                  { v: '1', l: 'Production SaaS — live at jobs.brdg.app' },
                  { v: '57', l: 'UI components (8,196 lines of code)' },
                  { v: '13', l: 'ATS integrations (6,046 lines of sync logic)' },
                  { v: '3', l: 'Scheduled cron jobs running daily' },
                ].map((s) => (
                  <div key={s.l} className="rounded-xl border border-[var(--color-border)] p-4 text-center">
                    <p className="text-2xl font-semibold text-[var(--color-text-primary)] tracking-tight">{s.v}</p>
                    <p className="text-xs text-[var(--color-text-tertiary)] mt-1">{s.l}</p>
                  </div>
                ))}
              </div>

              <Stagger className="grid md:grid-cols-2 gap-4 mb-12">
                {[
                  { icon: IconCube, t: 'Product designers can ship production software', d: 'With the right tools, design thinking translates directly into working systems. This isn\'t a prototype — it\'s a production SaaS with enterprise auth, cron jobs, and real users.' },
                  { icon: IconSparkle, t: 'Agentic AI is a multiplier, not a replacement', d: 'I handled every product decision, information architecture choice, and visual hierarchy call. The AI handled TypeScript, Prisma queries, and API integrations. The division was clear.' },
                  { icon: IconLayers, t: 'Design systems matter more with AI', d: 'A well-defined design system became the instruction set that kept AI-generated code on-brand. Without tokens, specs, and principles, the output would have been inconsistent.' },
                  { icon: IconBolt, t: 'The designer-developer gap is closing', d: 'Not because designers are becoming engineers, but because AI lets designers express intent at a level of specificity that produces engineering-quality output.' },
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
              <SectionTitle>What I&apos;d do differently next time</SectionTitle>
              <div className="max-w-3xl space-y-4 text-[var(--color-text-secondary)] leading-relaxed mb-10">
                <p>If I were starting Bridge Jobs again, I&apos;d invest more in visual artifacts before jumping to code. Even with AI, having Figma mockups to reference speeds up review cycles significantly — my design intent was clear in my head, but verifying it against production output was slower than verifying against a visual spec.</p>
                <p>I&apos;d also build a component playground earlier. I caught most inconsistencies at the page level, but catching them at the component level is cheaper. And as the codebase grew past 50+ components, I wished I had automated visual regression testing to catch design drift before I had to spot it manually.</p>
              </div>
            </section>
          </Reveal>

          <Divider />

          {/* ━━━ CTA ━━━ */}
          <Reveal>
            <section className="text-center">
              <p className="text-lg md:text-xl text-[var(--color-text-secondary)] mb-6">Want to see Bridge Jobs live?</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://jobs.brdg.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3.5 text-base font-medium bg-[var(--color-accent)] text-[var(--color-bg)] rounded-lg border border-transparent hover:bg-[var(--color-bg)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-all duration-200">
                  Visit jobs.brdg.app <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6m0 0v6m0-6L10 14" /></svg>
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
