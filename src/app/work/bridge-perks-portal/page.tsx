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

function IconChart({ className = '' }: { className?: string }) {
  return (<svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>);
}

function IconGlobe({ className = '' }: { className?: string }) {
  return (<svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>);
}

function IconHeart({ className = '' }: { className?: string }) {
  return (<svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>);
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
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-mono font-medium text-[#0038FF] bg-[#0038FF]/8 px-2.5 py-0.5 rounded">Context</span>
                <p className="text-xs font-medium text-[var(--color-text-tertiary)] uppercase tracking-wide">Setting the stage</p>
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color-text-primary)] tracking-tight mb-6 leading-snug">Bridge needed to turn a generic vendor portal into a product that reinforced VC exclusivity</h2>

              <div className="max-w-3xl text-sm text-[var(--color-text-secondary)] leading-relaxed space-y-3 mb-10">
                <p>Bridge is a platform connecting VC firms with their portfolio companies. They had an existing perks marketplace powered by GetProven — a third-party vendor portal offering cloud credits, dev tools, marketing spend, and HR platforms to startup founders. But it was a generic iframe with no access control, no brand alignment, and no VC-specific flows.</p>
                <p>I owned the entire product — from discovery and access control UX strategy through design system creation, visual design, and production development. I used Claude Code as my development partner, writing detailed design specs that the AI implemented while I reviewed every output against my design intent.</p>
              </div>

              {/* Visual: Ecosystem gap diagram */}
              <div className="rounded-xl border border-[var(--color-border)] overflow-hidden mb-6">
                <div className="px-5 py-3 bg-[var(--color-bg)] border-b border-[var(--color-border)]">
                  <p className="text-[10px] font-medium text-[var(--color-text-tertiary)] uppercase tracking-widest">Bridge perks ecosystem &mdash; the missing layer</p>
                </div>
                <div className="grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[var(--color-border)]">
                  {[
                    { icon: IconShield, label: 'What Bridge had', items: ['VC social graph', 'Portfolio relationships', 'GetProven vendor API', 'Basic perk listings'], color: '#0EA02E' },
                    { icon: IconX, label: 'What was missing', items: ['Domain-gated access control', 'Brand alignment with Bridge', 'API failure resilience', 'Admin marketplace tooling'], color: '#E13535' },
                    { icon: IconBolt, label: 'What I built', items: ['Tiered access gate system', 'Full Bridge design system', 'Cached fallback architecture', '7-section admin dashboard'], color: '#0038FF' },
                  ].map((col) => {
                    const Icon = col.icon;
                    return (
                      <div key={col.label} className="p-5">
                        <div className="flex items-center gap-2 mb-3" style={{ color: col.color }}>
                          <Icon className="shrink-0" />
                          <p className="text-xs font-semibold text-[var(--color-text-primary)]">{col.label}</p>
                        </div>
                        <div className="space-y-1.5">
                          {col.items.map((item) => (
                            <p key={item} className="text-[11px] text-[var(--color-text-secondary)] leading-relaxed">{item}</p>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* My role + scope */}
              <div className="grid sm:grid-cols-3 gap-4 mb-6">
                {[
                  { label: 'My role', value: 'Solo Product Designer + Developer', detail: 'End-to-end ownership: research, UX strategy, design system, visual design, production code' },
                  { label: 'AI partnership', value: 'Claude Code as Dev Partner', detail: 'Wrote detailed design specs; AI implemented while I reviewed every output against design intent' },
                  { label: 'Timeline', value: '~3 Months', detail: 'Dec 2025 – Feb 2026. Next.js 14, TypeScript, Tailwind CSS, Supabase' },
                ].map((s) => (
                  <div key={s.label} className="rounded-xl border border-[var(--color-border)] p-5">
                    <p className="text-[10px] font-medium text-[var(--color-text-tertiary)] uppercase tracking-widest mb-2">{s.label}</p>
                    <p className="text-sm font-semibold text-[var(--color-text-primary)] mb-1">{s.value}</p>
                    <p className="text-[11px] text-[var(--color-text-tertiary)] leading-relaxed">{s.detail}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)] px-4 py-3">
                <p className="text-xs text-[var(--color-text-tertiary)] leading-relaxed"><span className="font-medium text-[var(--color-text-secondary)]">The constraint:</span> The perks portal had to feel like a Bridge product, not a white-labeled third-party tool. And access control — the thing that makes these perks exclusive — had to feel motivating, not frustrating. Every design decision flowed from this constraint.</p>
              </div>
            </section>
          </Reveal>

          <Divider />

          {/* ━━━ THE PROBLEM — What Was Broken ━━━ */}
          <Reveal>
            <section>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-mono font-medium text-[#0038FF] bg-[#0038FF]/8 px-2.5 py-0.5 rounded">Problem</span>
                <p className="text-xs font-medium text-[var(--color-text-tertiary)] uppercase tracking-wide">What was broken</p>
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color-text-primary)] tracking-tight mb-6 leading-snug">Without meaningful access control, a perks marketplace is just another coupon site</h2>

              {/* Three perspectives as numbered cards */}
              <div className="grid md:grid-cols-3 gap-4 mb-10">
                {[
                  { num: '01', lens: 'User perspective', icon: IconUser, text: 'Founders navigated a third-party interface that didn\u2019t feel like Bridge. There was no sense of exclusivity \u2014 anyone could browse and redeem, which undermined the core value proposition of being VC-backed. When GetProven went down, founders saw blank pages with no explanation.', color: '#568FFF' },
                  { num: '02', lens: 'Business perspective', icon: IconChart, text: 'The perks program was a key retention lever for Bridge\u2019s VC network. If portfolio company founders didn\u2019t feel the perks were exclusive and valuable, VCs had less reason to stay on Bridge. The generic portal was actively undermining the network\u2019s value.', color: '#0038FF' },
                  { num: '03', lens: 'Technical perspective', icon: IconCog, text: 'The upstream GetProven API had reliability issues, and there was no caching layer. Denied users received no context about why they were restricted or how to get access. Admin visibility into the marketplace was nonexistent.', color: '#7450DA' },
                ].map((p) => {
                  const Icon = p.icon;
                  return (
                    <div key={p.num} className="rounded-xl border border-[var(--color-border)] p-5">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-xs font-mono font-medium px-2 py-0.5 rounded" style={{ color: p.color, backgroundColor: p.color + '12' }}>{p.num}</span>
                        <p className="text-[10px] font-medium text-[var(--color-text-tertiary)] uppercase tracking-widest">{p.lens}</p>
                      </div>
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-3" style={{ backgroundColor: p.color + '10', color: p.color }}>
                        <Icon />
                      </div>
                      <p className="text-[11px] text-[var(--color-text-secondary)] leading-relaxed">{p.text}</p>
                    </div>
                  );
                })}
              </div>

              {/* Before / After */}
              <div className="rounded-xl border border-[var(--color-border)] overflow-hidden">
                <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[var(--color-border)]">
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-2 h-2 rounded-full bg-[#E13535]" />
                      <p className="text-[10px] font-medium text-[#E13535] uppercase tracking-widest">Before &mdash; GetProven iframe</p>
                    </div>
                    <div className="space-y-2">
                      {['No access control — anyone could browse and redeem', 'Generic third-party UI with no Bridge branding', 'Blank pages during API outages', 'No admin visibility into usage or vendor health', 'Denied users had no path to access'].map((item) => (
                        <div key={item} className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]"><IconX className="text-[#E13535]/60 shrink-0 mt-0.5" />{item}</div>
                      ))}
                    </div>
                    <p className="text-[10px] text-[var(--color-text-tertiary)] mt-4 pt-3 border-t border-[var(--color-border)]">Generic portal. No exclusivity. No brand. No resilience.</p>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-2 h-2 rounded-full bg-[#0EA02E]" />
                      <p className="text-[10px] font-medium text-[#0EA02E] uppercase tracking-widest">After &mdash; Bridge Perks Portal</p>
                    </div>
                    <div className="space-y-2">
                      {['Domain-gated access with 300+ whitelisted VCs', 'Full Bridge brand alignment across every screen', 'Tiered UX — granted, browse, and restricted states', 'Cached fallback with staleness indicators during outages', '7-section admin dashboard for full marketplace operations'].map((item) => (
                        <div key={item} className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]"><IconCheck className="text-[#0EA02E] shrink-0 mt-0.5" />{item}</div>
                      ))}
                    </div>
                    <p className="text-[10px] text-[var(--color-text-tertiary)] mt-4 pt-3 border-t border-[var(--color-border)]">VC-gated exclusivity. Bridge brand. Resilient architecture.</p>
                  </div>
                </div>
              </div>
            </section>
          </Reveal>

          <Divider />

          {/* ━━━ DISCOVERY — How I Understood the Problem ━━━ */}
          <Reveal>
            <section>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-mono font-medium text-[#0038FF] bg-[#0038FF]/8 px-2.5 py-0.5 rounded">Discovery</span>
                <p className="text-xs font-medium text-[var(--color-text-tertiary)] uppercase tracking-wide">Research &amp; synthesis</p>
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color-text-primary)] tracking-tight mb-6 leading-snug">I started with the access control problem because it was the one nobody had solved well</h2>

              <div className="max-w-3xl text-sm text-[var(--color-text-secondary)] leading-relaxed space-y-3 mb-10">
                <p>Before designing any screens, I needed to answer four questions that would determine the shape of the entire product. Each one looked like a technical problem on the surface, but was actually a UX design challenge.</p>
                <p>The core insight came early: access to perks IS the product. Without meaningful access control, the portal is just another vendor directory. The design challenge was making exclusivity feel motivating for both approved and denied users.</p>
              </div>

              {/* Research process flow */}
              <div className="rounded-xl border border-[var(--color-border)] p-5 mb-10">
                <p className="text-[10px] font-medium text-[var(--color-text-tertiary)] uppercase tracking-widest mb-4">Research &rarr; synthesis process</p>
                <div className="flex flex-wrap items-center gap-2 text-[11px]">
                  {[
                    'Access control UX audit',
                    'User role mapping (3 types)',
                    'GetProven API reliability analysis',
                    'Design principles (4 pillars)',
                    'Product specification document',
                  ].map((step, i) => (
                    <span key={step} className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-full bg-[var(--color-bg)] border border-[var(--color-border)] text-[var(--color-text-secondary)] font-medium">{step}</span>
                      {i < 4 && <IconArrowRight className="text-[var(--color-text-tertiary)]" />}
                    </span>
                  ))}
                </div>
              </div>

              {/* Personas */}
              <div className="flex items-center gap-3 mb-6">
                <IconUser className="text-[#0038FF]" />
                <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">User personas I designed for</h3>
              </div>
              <Stagger className="grid md:grid-cols-3 gap-4 mb-10">
                {[
                  { icon: IconUser, role: 'Startup Founders & Employees', ctx: 'VC-backed company team members', goal: 'Browse and redeem exclusive perks — cloud credits, dev tools, marketing spend, HR platforms.', needs: ['Quick browsing with filters', 'Clear redemption flow', 'Understand access status instantly'], color: '#568FFF' },
                  { icon: IconBuilding, role: 'VC Firm Team Members', ctx: 'Partners, associates, talent partners', goal: 'Access perks themselves and manage their portfolio companies\u2019 whitelist.', needs: ['Self-serve access', 'Portfolio company management', 'See what perks their network offers'], color: '#0038FF' },
                  { icon: IconCog, role: 'Bridge Admins', ctx: 'Platform operations team', goal: 'Manage the full marketplace — providers, vendors, offers, access requests, analytics.', needs: ['Bulk operations', 'Vendor health monitoring', 'Access request review with context'], color: '#7450DA' },
                ].map((p) => {
                  const Icon = p.icon;
                  return (
                    <Item key={p.role}>
                      <div className="rounded-xl border border-[var(--color-border)] overflow-hidden h-full">
                        <div className="p-5">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: p.color + '10', color: p.color }}>
                              <Icon />
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-[var(--color-text-primary)]">{p.role}</p>
                              <p className="text-[10px] text-[var(--color-text-tertiary)]">{p.ctx}</p>
                            </div>
                          </div>
                          <p className="text-[11px] text-[var(--color-text-secondary)] leading-relaxed mb-4">{p.goal}</p>
                          <div className="space-y-2 pt-3 border-t border-[var(--color-border)]">
                            {p.needs.map((n) => (
                              <div key={n} className="flex items-start gap-2">
                                <span style={{ color: p.color }}><IconCheck className="shrink-0 mt-0.5" /></span>
                                <p className="text-[11px] text-[var(--color-text-tertiary)]">{n}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Item>
                  );
                })}
              </Stagger>

              {/* Design Principles */}
              <div className="flex items-center gap-3 mb-6">
                <IconShield className="text-[#0038FF]" />
                <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">Design principles I established</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: IconLock, t: 'Exclusivity as engagement', d: 'Access control should feel motivating, not punishing. Showing restricted content builds desire; hiding it kills both desire and trust.' },
                  { icon: IconShield, t: 'Trust through designed delay', d: 'Instant verification feels cheap for a gated product. Intentional animation communicates rigor and reinforces the value of what\u2019s behind the gate.' },
                  { icon: IconGlobe, t: 'Bridge-native experience', d: 'Every screen must feel unmistakably like a Bridge product. No generic white-label aesthetics. Full design token alignment.' },
                  { icon: IconBolt, t: 'Graceful degradation', d: 'When the upstream API fails, users see cached data with clear staleness indicators \u2014 never a blank page or error screen.' },
                ].map((p) => {
                  const Icon = p.icon;
                  return (
                    <div key={p.t} className="rounded-xl border border-[var(--color-border)] p-5">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)] flex items-center justify-center">
                          <Icon className="text-[var(--color-text-primary)]" />
                        </div>
                        <p className="text-sm font-semibold text-[var(--color-text-primary)]">{p.t}</p>
                      </div>
                      <p className="text-[11px] text-[var(--color-text-secondary)] leading-relaxed">{p.d}</p>
                    </div>
                  );
                })}
              </div>
            </section>
          </Reveal>

          <Divider />

          {/* ━━━ DESIGN PROCESS — Core Decisions ━━━ */}
          <Reveal>
            <section>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-mono font-medium text-[#0038FF] bg-[#0038FF]/8 px-2.5 py-0.5 rounded">Process</span>
                <p className="text-xs font-medium text-[var(--color-text-tertiary)] uppercase tracking-wide">Architecture decisions</p>
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color-text-primary)] tracking-tight mb-6 leading-snug">Four design decisions that shaped the product</h2>

              <div className="max-w-3xl text-sm text-[var(--color-text-secondary)] leading-relaxed mb-14">
                <p>Access control is typically treated as a binary gate — you&apos;re in or you&apos;re out. I designed a tiered system with distinct UX for each state, turning the restriction itself into an engagement mechanism. Each decision below required choosing the harder path because the obvious solution undermined the product&apos;s core value.</p>
              </div>
            </section>
          </Reveal>

          {/* ── Decision 1: The 8-Second Access Gate ── */}
          <Reveal>
            <section>
              <div className="mb-20">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-mono font-medium text-[#0038FF] bg-[#0038FF]/8 px-2.5 py-0.5 rounded">01</span>
                  <p className="text-xs font-medium text-[var(--color-text-tertiary)] uppercase tracking-wide">Trust through delay</p>
                </div>
                <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-4">The 8-second access gate — a scanning metaphor that builds trust</h3>
                <div className="max-w-3xl text-sm text-[var(--color-text-secondary)] leading-relaxed space-y-3 mb-8">
                  <p>The obvious approach: check the user&apos;s email domain against the whitelist and show an instant result. But instant &quot;approved&quot; feels cheap for a gated product. I designed an 8-second scanning metaphor that communicates &quot;we&apos;re checking something real.&quot;</p>
                  <p>VC logos cycle through a conveyor belt while the user&apos;s email domain is verified against 300+ whitelisted domains. Pulsating rings, a progress bar, and sequential status messages create a sense of intentional verification. The technical check is instant, but the animation communicates rigor and reinforces exclusivity.</p>
                </div>

                {/* Visual: The three result states */}
                <div className="rounded-xl border border-[var(--color-border)] overflow-hidden mb-6">
                  <div className="px-5 py-3 bg-[var(--color-bg)] border-b border-[var(--color-border)]">
                    <p className="text-[10px] font-medium text-[var(--color-text-tertiary)] uppercase tracking-widest">Access gate &mdash; three result states</p>
                  </div>
                  <div className="grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[var(--color-border)]">
                    {[
                      { icon: IconShield, state: 'Granted', visual: 'Green check', trigger: 'Email matches whitelisted VC/portfolio domain', desc: 'Full access to all perk details and redemption links. VC affiliation shown as trust badge.', color: '#0EA02E' },
                      { icon: IconEye, state: 'Browse Mode', visual: 'Eye icon', trigger: 'Work email not in whitelist', desc: 'Can browse all perk cards freely. Blocked at redemption with access request flow.', color: '#568FFF' },
                      { icon: IconGlobe, state: 'Explore Mode', visual: 'Compass icon', trigger: 'Personal email (Gmail, Yahoo, etc.)', desc: 'Same browse access. Prompted to re-enter work email for domain verification.', color: '#7450DA' },
                    ].map((s) => (
                      <div key={s.state} className="p-5">
                        <div className="flex items-center gap-2 mb-3" style={{ color: s.color }}>
                          <s.icon className="shrink-0" />
                          <p className="text-xs font-semibold text-[var(--color-text-primary)]">{s.state}</p>
                        </div>
                        <p className="text-[10px] text-[var(--color-text-tertiary)] mb-2">{s.visual} &middot; {s.trigger}</p>
                        <p className="text-[11px] text-[var(--color-text-secondary)] leading-relaxed">{s.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Animation components */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {['Conveyor belt logo animation', 'Pulsating ring effect', 'Sequential status messages', 'Progress bar', 'Reduced motion fallback', 'Skip on return visits'].map((tag) => (
                    <span key={tag} className="px-2.5 py-1 text-xs font-medium text-[var(--color-text-tertiary)] bg-[var(--color-bg)] border border-[var(--color-border)] rounded-md">{tag}</span>
                  ))}
                </div>

                <div className="rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)] px-4 py-3">
                  <p className="text-xs text-[var(--color-text-tertiary)] leading-relaxed"><span className="font-medium text-[var(--color-text-secondary)]">Why this matters:</span> This applies <span className="text-[var(--color-text-secondary)] font-medium">the Aesthetic-Usability Effect</span> — users perceive a more carefully designed experience as more trustworthy. The 8-second delay is &quot;security theater&quot; in the best sense: it makes the real verification (which is instant) feel rigorous. It respects <code className="text-[10px] font-mono bg-[var(--color-bg-elevated)] px-1 rounded">prefers-reduced-motion</code> and skips entirely on return visits, applying <span className="text-[var(--color-text-secondary)] font-medium">Jakob&apos;s Law</span> — repeat users get the fast path they expect.</p>
                </div>
              </div>
            </section>
          </Reveal>

          {/* ── Decision 2: Browse Mode for Denied Users ── */}
          <Reveal>
            <section>
              <div className="mb-20">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-mono font-medium text-[#0038FF] bg-[#0038FF]/8 px-2.5 py-0.5 rounded">02</span>
                  <p className="text-xs font-medium text-[var(--color-text-tertiary)] uppercase tracking-wide">Engagement architecture</p>
                </div>
                <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-4">Browse mode for denied users — show the catalog, block at redemption</h3>
                <div className="max-w-3xl text-sm text-[var(--color-text-secondary)] leading-relaxed space-y-3 mb-8">
                  <p>The standard approach: denied users see a locked door. &quot;You don&apos;t have access. Request it.&quot; This kills engagement instantly because users can&apos;t evaluate whether access is worth requesting.</p>
                  <p>I made the deliberate choice to let denied users browse ALL perk cards freely — but block at redemption. Detail pages show blurred content with a modal overlay explaining how to request access. This was counterintuitive to stakeholders, but the logic is clear: you can&apos;t want what you can&apos;t see. Showing the catalog builds desire; hiding it kills both desire and trust.</p>
                </div>

                {/* Visual: Browse vs Restricted comparison */}
                <div className="rounded-xl border border-[var(--color-border)] overflow-hidden mb-6">
                  <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-[var(--color-border)]">
                    <div className="p-5">
                      <p className="text-[10px] font-medium text-[#0EA02E] uppercase tracking-widest mb-3">What denied users CAN do</p>
                      <div className="space-y-2">
                        {['Browse all 400+ perk cards freely', 'Use filters and search', 'Switch between Grid and By Vendor views', 'See perk titles, vendors, and categories', 'Discover the full breadth of the marketplace'].map((item) => (
                          <div key={item} className="flex items-start gap-2 text-[11px] text-[var(--color-text-secondary)]"><IconCheck className="text-[#0EA02E] shrink-0 mt-0.5" />{item}</div>
                        ))}
                      </div>
                    </div>
                    <div className="p-5">
                      <p className="text-[10px] font-medium text-[#E13535] uppercase tracking-widest mb-3">What denied users CANNOT do</p>
                      <div className="space-y-2">
                        {['See perk detail content (blurred)', 'Access redemption links', 'View deal values and discount specifics', 'Redeem any offer'].map((item) => (
                          <div key={item} className="flex items-start gap-2 text-[11px] text-[var(--color-text-secondary)]"><IconX className="text-[#E13535]/60 shrink-0 mt-0.5" />{item}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* The restricted modal spec */}
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  <div className="rounded-xl border border-[var(--color-border)] p-5">
                    <p className="text-[10px] font-medium text-[var(--color-text-tertiary)] uppercase tracking-widest mb-3">Restricted modal — design system component</p>
                    <div className="space-y-2">
                      {[
                        { what: 'Mobile', how: 'Full-screen bottom sheet' },
                        { what: 'Desktop', how: 'Centered card with backdrop blur' },
                        { what: 'Interaction', how: 'Focus-trapped, keyboard-dismissible, exit animations' },
                        { what: 'Content', how: 'Explains restriction + path to access in 3 steps' },
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
                  <div className="rounded-xl border border-[var(--color-border)] p-5">
                    <p className="text-[10px] font-medium text-[var(--color-text-tertiary)] uppercase tracking-widest mb-3">The engagement funnel</p>
                    <div className="space-y-2">
                      {[
                        'User browses perk cards freely',
                        'Clicks into a perk they want',
                        'Sees blurred detail + restricted modal',
                        'Modal explains: "Request access from your VC"',
                        'One tap to start access request flow',
                      ].map((step, i) => (
                        <div key={step} className="flex gap-2 text-[11px]">
                          <span className="w-5 h-5 rounded-full bg-[var(--color-bg)] border border-[var(--color-border)] flex items-center justify-center text-[9px] font-medium text-[var(--color-text-tertiary)] shrink-0">{i + 1}</span>
                          <span className="text-[var(--color-text-secondary)] leading-relaxed">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)] px-4 py-3">
                  <p className="text-xs text-[var(--color-text-tertiary)] leading-relaxed"><span className="font-medium text-[var(--color-text-secondary)]">Why this matters:</span> This applies <span className="text-[var(--color-text-secondary)] font-medium">the Peak-End Rule</span> — by letting users explore freely before hitting the restriction, the &quot;peak&quot; of their experience is discovering valuable perks, not being told &quot;no.&quot; The restriction at redemption (not at browse) creates <span className="text-[var(--color-text-secondary)] font-medium">the IKEA Effect</span> in reverse — users who invested time browsing are more motivated to request access than users who were blocked at the door.</p>
                </div>
              </div>
            </section>
          </Reveal>

          {/* ── Decision 3: Interactive VC Directory ── */}
          <Reveal>
            <section>
              <div className="mb-20">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-mono font-medium text-[#0038FF] bg-[#0038FF]/8 px-2.5 py-0.5 rounded">03</span>
                  <p className="text-xs font-medium text-[var(--color-text-tertiary)] uppercase tracking-wide">Friction reduction</p>
                </div>
                <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-4">Interactive VC directory — replacing text input with single-tap selection</h3>
                <div className="max-w-3xl text-sm text-[var(--color-text-secondary)] leading-relaxed space-y-3 mb-8">
                  <p>The biggest friction point in access request flows is the open-ended &quot;who&apos;s your VC?&quot; text input. Users misspell fund names, use abbreviations, or don&apos;t know which entity to list. Every failed submission is a user lost.</p>
                  <p>I replaced the text input with an interactive directory — a searchable grid of 300+ approved VCs with logos. Clicking a VC pre-fills the request form, reducing the entire question to a single tap. Discovered investors are shown as green chips, auto-detected from Bridge&apos;s API.</p>
                </div>

                {/* Visual: Access request flow */}
                <div className="rounded-xl border border-[var(--color-border)] overflow-hidden mb-6">
                  <div className="px-5 py-3 bg-[var(--color-bg)] border-b border-[var(--color-border)]">
                    <p className="text-[10px] font-medium text-[var(--color-text-tertiary)] uppercase tracking-widest">Access request flow &mdash; 7 steps</p>
                  </div>
                  <div className="p-5">
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
                </div>

                <div className="rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)] px-4 py-3">
                  <p className="text-xs text-[var(--color-text-tertiary)] leading-relaxed"><span className="font-medium text-[var(--color-text-secondary)]">Why this matters:</span> This applies <span className="text-[var(--color-text-secondary)] font-medium">Hick&apos;s Law</span> — by presenting a visual directory instead of an open text field, I transformed an unbounded decision (type any name) into a bounded selection (pick from a grid). The auto-detected green chips apply <span className="text-[var(--color-text-secondary)] font-medium">Recognition over Recall</span> — users don&apos;t have to remember their VC; the system surfaces it. This also follows <span className="text-[var(--color-text-secondary)] font-medium">Fitts&apos;s Law</span> — a large, clickable VC card is faster to hit than typing a name in a small input field.</p>
                </div>
              </div>
            </section>
          </Reveal>

          {/* ── Decision 4: Designing for API Failure ── */}
          <Reveal>
            <section>
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-mono font-medium text-[#0038FF] bg-[#0038FF]/8 px-2.5 py-0.5 rounded">04</span>
                  <p className="text-xs font-medium text-[var(--color-text-tertiary)] uppercase tracking-wide">Resilience architecture</p>
                </div>
                <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-4">Designing for API failure — cached fallback with staleness indicators</h3>
                <div className="max-w-3xl text-sm text-[var(--color-text-secondary)] leading-relaxed space-y-3 mb-8">
                  <p>The upstream GetProven API had reliability issues — and previously, outages meant founders saw blank pages. The naive solution: show an error message. The better solution: design a fallback experience that prioritizes user continuity over data freshness.</p>
                  <p>I designed a cached data layer using Supabase tracker tables that stores the last known good state. When the API is down, users see slightly stale perks with clear visual indicators — never a blank page. The design challenge wasn&apos;t technical caching; it was communicating staleness honestly without undermining trust.</p>
                </div>

                {/* Visual: Freshness states */}
                <div className="grid sm:grid-cols-3 gap-4 mb-6">
                  {[
                    { label: 'Live', time: 'API responding', color: '#0D7C47', desc: 'Fresh data from GetProven. No indicators needed. This is the normal state.' },
                    { label: 'Cached', time: 'API down, data < 24h', color: '#B08A00', desc: 'Amber "Showing cached data" banner. Users can browse and plan. Data is slightly stale but functional.' },
                    { label: 'Stale', time: 'API down, data > 24h', color: '#D93025', desc: 'Enhanced warning with timestamp. Users know the data may be outdated. Admin gets sync failure alerts.' },
                  ].map((s) => (
                    <div key={s.label} className="rounded-xl border border-[var(--color-border)] p-5">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: s.color }} />
                        <p className="text-[10px] font-medium uppercase tracking-widest" style={{ color: s.color }}>{s.label}</p>
                      </div>
                      <p className="text-lg font-bold mb-1" style={{ color: s.color }}>{s.time}</p>
                      <p className="text-[10px] text-[var(--color-text-tertiary)] uppercase tracking-wide mb-3">Status</p>
                      <p className="text-[11px] text-[var(--color-text-secondary)] leading-relaxed pt-3 border-t border-[var(--color-border)]">{s.desc}</p>
                    </div>
                  ))}
                </div>

                {/* The full resilience chain */}
                <div className="rounded-xl border border-[var(--color-border)] p-5 mb-6">
                  <p className="text-[10px] font-medium text-[var(--color-text-tertiary)] uppercase tracking-widest mb-4">The resilience chain</p>
                  <div className="flex flex-wrap items-center gap-2 text-[11px]">
                    {[
                      'GetProven API syncs to Supabase',
                      'Tracker tables store last good state',
                      'API health check on each request',
                      'Fallback to cached data if down',
                      'Staleness banner shown to users',
                    ].map((step, i) => (
                      <span key={step} className="flex items-center gap-2">
                        <span className="px-2.5 py-1 rounded-full bg-[var(--color-bg)] border border-[var(--color-border)] text-[var(--color-text-secondary)] font-medium">{step}</span>
                        {i < 4 && <IconArrowRight className="text-[var(--color-text-tertiary)]" />}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)] px-4 py-3">
                  <p className="text-xs text-[var(--color-text-tertiary)] leading-relaxed"><span className="font-medium text-[var(--color-text-secondary)]">Why this matters:</span> This applies <span className="text-[var(--color-text-secondary)] font-medium">the Visibility of System Status</span> (Nielsen&apos;s #1 heuristic) — but elevated from error messages to honest communication. The amber/red color system follows <span className="text-[var(--color-text-secondary)] font-medium">Pre-attentive Processing</span> — users process color faster than reading text, so staleness registers visually before the banner is even read. Slightly stale perks are infinitely better than a blank page, applying <span className="text-[var(--color-text-secondary)] font-medium">Postel&apos;s Law</span> to UX — be liberal in what you accept (stale data), conservative in what you show (clear indicators).</p>
                </div>
              </div>
            </section>
          </Reveal>

          {/* Design System */}
          <Reveal>
            <section>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-mono font-medium text-[#0038FF] bg-[#0038FF]/8 px-2.5 py-0.5 rounded">System</span>
                <p className="text-xs font-medium text-[var(--color-text-tertiary)] uppercase tracking-wide">Design foundation</p>
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-4">The design system I built for brand alignment</h3>
              <div className="max-w-3xl text-sm text-[var(--color-text-secondary)] leading-relaxed space-y-3 mb-8">
                <p>I created a complete design token system used across 60+ files — ensuring every screen felt unmistakably like a Bridge product. Tokens were codified as direct hex values, not abstraction layers that could drift.</p>
              </div>

              {/* Color palette */}
              <div className="rounded-xl border border-[var(--color-border)] overflow-hidden mb-4">
                <div className="px-5 py-3 bg-[var(--color-bg)] border-b border-[var(--color-border)]">
                  <p className="text-[10px] font-medium text-[var(--color-text-tertiary)] uppercase tracking-widest">Color palette &mdash; 20+ named tokens</p>
                </div>
                <div className="p-5">
                  <div className="grid grid-cols-4 sm:grid-cols-7 gap-3">
                    {[
                      { n: 'Royal Blue', h: '#0038FF', r: 'Primary' }, { n: 'Charcoal', h: '#0D1531', r: 'Text' }, { n: 'Slate', h: '#F9F9FA', r: 'Background' }, { n: 'Mist', h: '#E8EAF0', r: 'Borders' },
                      { n: 'Kelly', h: '#0EA02E', r: 'Success' }, { n: 'Honey', h: '#E19500', r: 'Warning' }, { n: 'Ruby', h: '#E13535', r: 'Error' },
                    ].map((c) => (
                      <div key={c.n} className="text-center">
                        <div className="w-full aspect-square rounded-lg border border-[var(--color-border)] mb-2" style={{ backgroundColor: c.h }} />
                        <p className="text-[10px] font-medium text-[var(--color-text-primary)]">{c.n}</p>
                        <p className="text-[9px] text-[var(--color-text-tertiary)] font-mono">{c.h}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* System specs grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {[
                  { label: 'Typography', value: 'Mulish', detail: 'Weights 400\u2013700, consistent sizing hierarchy' },
                  { label: 'Components', value: 'Button + Badge + Card + Input', detail: '5 button variants, 6 badge colors, pill-shaped inputs' },
                  { label: 'Animation', value: '6 Tokens', detail: 'fade-in, fade-in-up, scale-in, scale-out, fade-out, shimmer' },
                  { label: 'Radii', value: 'Contextual', detail: 'xl for cards, full for buttons/search, 4px for badges' },
                ].map((s) => (
                  <div key={s.label} className="rounded-xl border border-[var(--color-border)] p-4">
                    <p className="text-[10px] font-medium text-[var(--color-text-tertiary)] uppercase tracking-widest mb-1">{s.label}</p>
                    <p className="text-sm font-semibold text-[var(--color-text-primary)] mb-1">{s.value}</p>
                    <p className="text-[10px] text-[var(--color-text-tertiary)] leading-relaxed">{s.detail}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)] px-4 py-3">
                <p className="text-xs text-[var(--color-text-tertiary)] leading-relaxed"><span className="font-medium text-[var(--color-text-secondary)]">Why this matters for AI development:</span> The design system wasn&apos;t just documentation — it was the <em>instruction set</em> for Claude Code. Every CSS custom property, animation token, and component spec became a constraint that kept AI-generated code on-brand. Without this system, the output would have drifted into visual inconsistency.</p>
              </div>
            </section>
          </Reveal>

          <Divider />

          {/* ━━━ WHAT I SHIPPED ━━━ */}
          <Reveal>
            <section>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-mono font-medium text-[#0038FF] bg-[#0038FF]/8 px-2.5 py-0.5 rounded">Shipped</span>
                <p className="text-xs font-medium text-[var(--color-text-tertiary)] uppercase tracking-wide">Production features</p>
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color-text-primary)] tracking-tight mb-6 leading-snug">Every page designed with intent — from landing to admin dashboard</h2>

              <div className="max-w-3xl text-sm text-[var(--color-text-secondary)] leading-relaxed mb-10">
                <p>Everything below is live at perks.brdg.app and actively used by Bridge&apos;s VC network. I owned the design end-to-end and partnered with Claude Code for implementation, writing detailed specs and reviewing every output against my design intent.</p>
              </div>

              <Stagger className="grid md:grid-cols-2 gap-4 mb-12">
                {[
                  { t: 'Landing Page', desc: 'Scroll-triggered animations with staggered fade-in-up, count-up stats, infinite logo marquee. Three-step "How It Works" with animated connector lines. Gradient CTA section.', why: 'The page communicates exclusivity and breadth. Logo marquee signals "real companies use this." Count-up stats make the scale tangible. Gradient CTA creates urgency without aggression.', color: '#568FFF' },
                  { t: 'Perks Listing', desc: 'Dual view modes: Grid (card layout) and By Vendor (accordion groups with smooth CSS grid height animation). Combined filter dropdown with 4 cascading categories. Three-tier default sort.', why: 'Dual view maps to two browsing behaviors: "I know what I need" (grid + filters) vs. "I want to see what Stripe offers" (vendor view). Three-tier sort surfaces best content without user action.', color: '#0038FF' },
                  { t: 'Perk Detail Page', desc: 'Two-column layout: offer context + redemption sidebar. Value pills showing deal value, discount, and estimated savings. Related perks grid. Glassmorphic hero with backdrop blur.', why: 'Value pills translate abstract "perks" into concrete dollar amounts — the key conversion element. For denied users, blurred content + modal creates FOMO without frustration.', color: '#7450DA' },
                  { t: 'Admin Dashboard — 7 Sections', desc: 'Analytics with redemption metrics. Offer and vendor tracking tables with search, filters, sync-to-DB. CSV bulk upload with drag-drop, validation, preview, confirmation. Access request review with colleague lookup. Vendor group management. Provider config and audit log.', why: 'Designed for operators. Every table has search and filters because data sets are large. CSV upload has validation AND preview because bad imports break the marketplace. Access review surfaces colleague info for faster decisions.', color: '#0D7C47' },
                ].map((f, i) => (
                  <Item key={f.t}>
                    <div className="rounded-xl border border-[var(--color-border)] overflow-hidden h-full">
                      <div className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-xs font-mono font-medium px-2 py-0.5 rounded" style={{ color: f.color, backgroundColor: f.color + '12' }}>0{i + 1}</span>
                          <p className="text-sm font-semibold text-[var(--color-text-primary)]">{f.t}</p>
                        </div>
                        <p className="text-[11px] text-[var(--color-text-secondary)] leading-relaxed mb-3">{f.desc}</p>
                        <div className="rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)] px-3 py-2">
                          <p className="text-[10px] text-[var(--color-text-tertiary)] leading-relaxed"><span className="font-medium text-[var(--color-text-secondary)]">Design rationale:</span> {f.why}</p>
                        </div>
                      </div>
                    </div>
                  </Item>
                ))}
              </Stagger>

              {/* Accessibility + Micro-interactions */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="rounded-xl border border-[#0EA02E]/20 p-5 bg-[#0EA02E]/[0.02]">
                  <div className="flex items-center gap-2 mb-4">
                    <IconShield className="text-[#0EA02E]" />
                    <p className="text-[10px] font-medium text-[#0EA02E] uppercase tracking-widest">Accessibility (WCAG 2.2 AA)</p>
                  </div>
                  <div className="space-y-2">
                    {['Focus traps in all modals (restricted modal, CSV upload, confirmation dialogs)', 'aria-live regions for access gate status updates', 'Full keyboard navigation — every element reachable via Tab', 'All animations respect prefers-reduced-motion', 'Page-specific document titles and aria-current on navigation', 'Minimum 48px touch targets, focus-visible rings on all controls'].map((a) => (
                      <div key={a} className="flex gap-2 text-[11px] text-[var(--color-text-secondary)]"><IconCheck className="text-[#0EA02E] shrink-0 mt-0.5" />{a}</div>
                    ))}
                  </div>
                </div>
                <div className="rounded-xl border border-[#0038FF]/20 p-5 bg-[#0038FF]/[0.02]">
                  <div className="flex items-center gap-2 mb-4">
                    <IconSparkle className="text-[#0038FF]" />
                    <p className="text-[10px] font-medium text-[#0038FF] uppercase tracking-widest">Micro-interactions I specified</p>
                  </div>
                  <div className="space-y-2">
                    {[
                      { label: 'Access gate', value: '8-second sequence with 5 animation layers' },
                      { label: 'Card hover', value: 'translateY(-2px) + shadow elevation (200ms)' },
                      { label: 'Accordion', value: 'CSS grid height animation for smooth expand/collapse' },
                      { label: 'Logo marquee', value: 'Infinite scroll, pauses on hover' },
                    ].map((a) => (
                      <div key={a.label} className="flex items-start gap-2">
                        <IconBolt className="text-[#0038FF] shrink-0 mt-0.5" />
                        <p className="text-[11px] text-[var(--color-text-secondary)]"><span className="font-medium text-[var(--color-text-primary)]">{a.label}:</span> {a.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </Reveal>

          <Divider />

          {/* ━━━ OUTCOME & IMPACT ━━━ */}
          <Reveal>
            <section>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-mono font-medium text-[#0038FF] bg-[#0038FF]/8 px-2.5 py-0.5 rounded">Impact</span>
                <p className="text-xs font-medium text-[var(--color-text-tertiary)] uppercase tracking-wide">Outcome &amp; results</p>
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color-text-primary)] tracking-tight mb-6 leading-snug">Shipped to production, serving Bridge&apos;s entire VC network</h2>

              {/* Stats row */}
              <div className="rounded-xl border border-[var(--color-border)] overflow-hidden mb-10">
                <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[var(--color-border)]">
                  {[
                    { v: '400+', l: 'Perks Available', sub: 'From 100+ vendors', color: '#0EA02E' },
                    { v: '300+', l: 'Whitelisted Domains', sub: 'VC + portfolio companies', color: '#0038FF' },
                    { v: '7', l: 'Admin Sections', sub: 'Full marketplace operations', color: '#7450DA' },
                    { v: 'AA', l: 'WCAG Accessible', sub: 'Across all user flows', color: '#B08A00' },
                  ].map((s) => (
                    <div key={s.l} className="p-5 text-center">
                      <p className="text-3xl font-bold tracking-tight mb-1" style={{ color: s.color }}>{s.v}</p>
                      <p className="text-xs font-semibold text-[var(--color-text-primary)]">{s.l}</p>
                      <p className="text-[10px] text-[var(--color-text-tertiary)] mt-0.5">{s.sub}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key takeaways */}
              <Stagger className="grid md:grid-cols-2 gap-4 mb-10">
                {[
                  { icon: IconShield, t: 'Access control is a UX design challenge, not just a technical one', d: 'The difference between "you can\'t use this" and "here\'s how to get access" is entirely design. The tiered system turned a rejection into an onboarding funnel.', color: '#568FFF' },
                  { icon: IconEye, t: 'Showing restricted content builds desire; hiding it kills it', d: 'Letting denied users browse freely but blocking at redemption was counterintuitive \u2014 but it\'s the right UX. You can\'t want what you can\'t see.', color: '#0038FF' },
                  { icon: IconBolt, t: 'Design for failure, not just success', d: 'The cached data fallback meant users never saw a blank page during API outages. Designing the failure state was as important as designing the happy path.', color: '#7450DA' },
                  { icon: IconSparkle, t: 'A designer who ships is a designer who learns faster', d: 'Owning the full stack \u2014 from research to production \u2014 meant I could iterate on UX decisions in real-time, with real users, without waiting for handoffs.', color: '#0D7C47' },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <Item key={item.t}>
                      <div className="rounded-xl border border-[var(--color-border)] overflow-hidden h-full">
                        <div className="p-6">
                          <div className="flex items-center gap-3 mb-3">
                            <span className="text-xs font-mono font-medium px-2 py-0.5 rounded" style={{ color: item.color, backgroundColor: item.color + '12' }}>0{i + 1}</span>
                            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: item.color + '10', color: item.color }}>
                              <Icon />
                            </div>
                          </div>
                          <p className="text-sm font-semibold text-[var(--color-text-primary)] mb-2">{item.t}</p>
                          <p className="text-[11px] text-[var(--color-text-secondary)] leading-relaxed">{item.d}</p>
                        </div>
                      </div>
                    </Item>
                  );
                })}
              </Stagger>

              {/* What I owned vs what AI handled */}
              <div className="rounded-xl border border-[var(--color-border)] overflow-hidden">
                <div className="px-5 py-3 bg-[var(--color-bg)] border-b border-[var(--color-border)]">
                  <p className="text-[10px] font-medium text-[var(--color-text-tertiary)] uppercase tracking-widest">Division of labor &mdash; designer + agentic AI</p>
                </div>
                <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-[var(--color-border)]">
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <IconUser className="text-[#0038FF]" />
                      <p className="text-xs font-semibold text-[var(--color-text-primary)]">Me (Product Designer)</p>
                    </div>
                    <div className="space-y-1.5">
                      {['Product strategy & scope definition', 'Access control UX architecture', 'Design system tokens & specifications', 'UX flows & interaction patterns', 'Visual hierarchy & layout decisions', 'API resilience design strategy'].map((item) => (
                        <div key={item} className="flex items-start gap-2">
                          <IconCheck className="text-[#0038FF] shrink-0 mt-0.5" />
                          <p className="text-[11px] text-[var(--color-text-secondary)]">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <IconSparkle className="text-[#7450DA]" />
                      <p className="text-xs font-semibold text-[var(--color-text-primary)]">Claude Code (AI Partner)</p>
                    </div>
                    <div className="space-y-1.5">
                      {['TypeScript implementation', 'Supabase database & queries', 'GetProven API integration', 'Next.js routing & server components', 'Caching layer & sync engine', 'Admin dashboard tables & forms'].map((item) => (
                        <div key={item} className="flex items-start gap-2">
                          <IconCheck className="text-[#7450DA] shrink-0 mt-0.5" />
                          <p className="text-[11px] text-[var(--color-text-secondary)]">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </Reveal>

          <Divider />

          {/* ━━━ REFLECTION ━━━ */}
          <Reveal>
            <section>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-mono font-medium text-[#0038FF] bg-[#0038FF]/8 px-2.5 py-0.5 rounded">Reflection</span>
                <p className="text-xs font-medium text-[var(--color-text-tertiary)] uppercase tracking-wide">Lessons learned</p>
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color-text-primary)] tracking-tight mb-8 leading-snug">What I&apos;d do differently next time</h2>

              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                {[
                  { num: '01', title: 'Invest in the admin experience earlier', desc: 'The 7-section dashboard grew organically as operational needs surfaced, and some of the information architecture could be tighter. I\'d build analytics into the admin panel from day one \u2014 tracking which perks get redeemed most would help Bridge prioritize vendor relationships.', icon: IconChart, color: '#0038FF' },
                  { num: '02', title: 'Prototype the access gate animation sooner', desc: 'The 8-second scanning animation was the most debated design decision. Getting stakeholder buy-in earlier through a quick prototype would have saved iteration time. The final result validated the approach, but the path there was longer than necessary.', icon: IconEye, color: '#7450DA' },
                ].map((r) => {
                  const Icon = r.icon;
                  return (
                    <div key={r.num} className="rounded-xl border border-[var(--color-border)] overflow-hidden">
                      <div className="p-5">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-xs font-mono font-medium px-2 py-0.5 rounded" style={{ color: r.color, backgroundColor: r.color + '12' }}>{r.num}</span>
                          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: r.color + '10', color: r.color }}>
                            <Icon />
                          </div>
                        </div>
                        <p className="text-sm font-semibold text-[var(--color-text-primary)] mb-2">{r.title}</p>
                        <p className="text-[11px] text-[var(--color-text-secondary)] leading-relaxed">{r.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)] px-4 py-3">
                <p className="text-xs text-[var(--color-text-tertiary)] leading-relaxed"><span className="font-medium text-[var(--color-text-secondary)]">The bigger takeaway:</span> Access control is fundamentally a UX problem. The technical implementation of domain gating is straightforward — the hard part is designing an experience where being restricted doesn&apos;t feel punishing. The tiered browse mode was the most debated design decision, and it turned out to be the most important one.</p>
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
