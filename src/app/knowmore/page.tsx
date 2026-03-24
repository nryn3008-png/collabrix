'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SectionReveal, StaggerContainer, StaggerItem, HeroReveal, HeroItem } from '@/lib/motion';

// ============================================
// LOCAL SVG ICONS (stroke-style, currentColor)
// ============================================

function BriefcaseIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}

function MapPinIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function CalendarIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function ChevronIcon({ isOpen }: { isOpen: boolean }) {
  const shouldReduceMotion = useReducedMotion();
  return (
    <motion.svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      animate={{ rotate: isOpen ? 180 : 0 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.2,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="text-[var(--color-text-tertiary)] flex-shrink-0"
    >
      <polyline points="6 9 12 15 18 9" />
    </motion.svg>
  );
}

// Skill category icons
function PenToolIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 19l7-7 3 3-7 7-3-3z" />
      <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
      <path d="M2 2l7.586 7.586" />
      <circle cx="11" cy="11" r="2" />
    </svg>
  );
}

function UsersIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function WrenchIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  );
}

// ============================================
// DATA
// ============================================

interface Metric {
  value: string;
  label: string;
}

interface Experience {
  role: string;
  company: string;
  companyShort: string;
  duration: string;
  location: string;
  isCurrent: boolean;
  summary: string;
  metrics?: Metric[];
  points: string[];
  transitionNote?: string;
}

const experiences: Experience[] = [
  {
    role: 'Product Designer',
    company: 'Bridge (brdg.app)',
    companyShort: 'Bridge',
    duration: 'Dec 2023 — Present',
    location: 'India · Remote',
    isCurrent: true,
    summary: 'Own the entire product design lifecycle — from research and UX strategy to design systems, visual design, and production front-end code.',
    metrics: [
      { value: '100+', label: 'Features shipped' },
      { value: '2', label: 'Products built from scratch' },
      { value: '13', label: 'ATS integrations' },
      { value: '400+', label: 'Vendor perks' },
    ],
    points: [
      'Established design system rules and trained AI to understand Bridge\u2019s design language for consistent output across mini apps',
      'Designed and shipped 100+ features, including a full app revamp and core intro flow redesign — working closely with the CEO and engineering team',
      'Built two standalone products from scratch: Bridge Jobs (VC-powered talent board with 13 ATS integrations) and Bridge Perks Portal (domain-gated marketplace with 400+ vendor perks)',
    ],
  },
  {
    role: 'Product Designer',
    company: 'Quantive (previously Gtmhub, acquired Workboard)',
    companyShort: 'Quantive',
    duration: 'Jun 2022 — Nov 2023',
    location: 'Indore, India · On-site',
    isCurrent: false,
    summary: 'Led design for business observability products and drove AI integration across the OKR platform, working with a global cross-functional team.',
    metrics: [
      { value: '4', label: 'Products designed' },
      { value: '30+', label: 'AI use cases identified' },
      { value: '2', label: 'Designers mentored' },
    ],
    points: [
      'Worked across 4 products: Cliff.ai (Signals), Results, Singularity, and Modern Data Stack — a B2B SaaS suite focused on OKRs, KPIs, and strategic decision-making',
      'Led design for Modern Data Stack and Cliff.ai (business observability platform with KPI dashboards and anomaly detection), collaborating with a global team of PMs, engineers, and designers',
      'Contributed to early product concepts for Singularity alongside the leadership team, incorporating customer feedback for continuous product improvement',
      'Identified 30+ AI use cases and led AI integration design for Results, collaborating with leadership to weave AI into existing workflows',
      'Managed and mentored 2 junior designers — assigning tasks, reviewing work, and promoting design best practices and standards',
    ],
    transitionNote: 'This role deepened my product thinking — leading me to take on full ownership at Bridge.',
  },
  {
    role: 'Industrial Design Intern',
    company: 'Maker\u2019s Asylum',
    companyShort: 'Maker\u2019s Asylum',
    duration: 'Mar 2022 — May 2022',
    location: 'North Goa, India · On-site',
    isCurrent: false,
    summary: 'Designed the UI for a learning platform and contributed to packaging and outreach strategy for a foundation initiative.',
    points: [
      'Designed the UI for the new DIY Hour website and learning management system',
      'Contributed to research data collection for an upcoming foundation initiative',
      'Finalized the outreach strategy and ideated packaging designs for the toolbox and monthly DIY Hour box',
    ],
    transitionNote: 'A hands-on maker environment that sharpened how I think about physical and digital product design.',
  },
  {
    role: 'User Experience Intern',
    company: 'Indigo Consulting',
    companyShort: 'Indigo Consulting',
    duration: 'May 2020 — Aug 2020',
    location: 'Mumbai · Remote',
    isCurrent: false,
    summary: 'Assisted in auditing and designing digital experiences for prominent fintech and e-commerce brands.',
    points: [
      'Assisted the UX team in auditing, evaluating, designing, and wireframing digital experiences for prominent Indian and international fintech brands',
      'Collaborated with the design team to review and improve the online buying experience for top e-commerce and pharmaceutical companies',
    ],
    transitionNote: 'Where it all started — learning UX foundations from an agency perspective.',
  },
];

const skillGroups = [
  {
    category: 'Design',
    icon: PenToolIcon,
    skills: ['Product Design', 'Design Systems', 'UX Strategy', 'User Research', 'Wireframing', 'Prototyping', 'Visual Design', 'Information Architecture', 'Interaction Design', 'Accessibility (WCAG)'],
  },
  {
    category: 'Collaboration',
    icon: UsersIcon,
    skills: ['Cross-functional Teams', 'Global Team Coordination', 'Design-to-Dev Handoff', 'Stakeholder Communication', 'Mentoring Designers', 'Design Reviews', 'Product Strategy'],
  },
  {
    category: 'Tools & Workflow',
    icon: WrenchIcon,
    skills: ['Figma', 'Design Tokens', 'Claude Code', 'AI-Assisted Development', 'Linear', 'Notion', 'Miro', 'Vercel'],
  },
];

// ============================================
// EXPERIENCE YEARS COUNTER
// ============================================
function YearsCounter() {
  // Calculate roughly from May 2020 (first role)
  const startDate = new Date(2020, 4); // May 2020
  const now = new Date();
  const years = Math.floor((now.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 365.25));

  return (
    <div className="flex items-center gap-3 mb-10">
      <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[var(--color-text-primary)]">
        <BriefcaseIcon className="text-[var(--color-bg)]" />
      </div>
      <div>
        <p className="text-2xl font-semibold text-[var(--color-text-primary)] tracking-tight leading-none">
          {years}+ years
        </p>
        <p className="text-sm text-[var(--color-text-tertiary)] mt-0.5">
          in product design
        </p>
      </div>
    </div>
  );
}

// ============================================
// EXPERIENCE CARD COMPONENT
// ============================================
interface ExperienceCardProps {
  exp: Experience;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
  isLast: boolean;
}

function ExperienceCard({ exp, index, isOpen, onToggle, isLast }: ExperienceCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const duration = shouldReduceMotion ? 0 : 0.25;

  return (
    <div className="relative pl-8 md:pl-10">
      {/* Timeline dot — filled for current, outlined for past */}
      <div
        className={`absolute left-0 top-6 w-[15px] h-[15px] rounded-full border-2 transition-colors ${
          exp.isCurrent
            ? 'border-[var(--color-text-primary)] bg-[var(--color-text-primary)]'
            : 'border-[var(--color-text-tertiary)] bg-[var(--color-bg)]'
        }`}
      >
        {/* Active pulse for current role */}
        {exp.isCurrent && (
          <span className="absolute inset-0 rounded-full animate-ping bg-[var(--color-text-primary)] opacity-20" />
        )}
      </div>

      {/* Card */}
      <div
        className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-5 md:p-6 card-hover-effect"
      >
        <div className="card-hover-content">
          {/* Current badge */}
          {exp.isCurrent && (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-[var(--color-bg)] bg-[var(--color-text-primary)] rounded-full mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-bg)] animate-pulse" />
              Current role
            </span>
          )}

          {/* Header row */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
            <h3 className="text-lg font-semibold text-[var(--color-text-primary)] leading-snug">
              {exp.role}
            </h3>
          </div>

          {/* Company */}
          <p className="text-base font-medium text-[var(--color-text-secondary)] mb-2">
            {exp.company}
          </p>

          {/* Meta: duration + location */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-[var(--color-text-tertiary)] mb-4">
            <span className="inline-flex items-center gap-1.5">
              <CalendarIcon className="text-[var(--color-text-tertiary)]" />
              {exp.duration}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPinIcon className="text-[var(--color-text-tertiary)]" />
              {exp.location}
            </span>
          </div>

          {/* Summary — always visible */}
          <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
            {exp.summary}
          </p>

          {/* Metrics row */}
          {exp.metrics && exp.metrics.length > 0 && (
            <div className="flex flex-wrap gap-3 mb-4">
              {exp.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="flex items-baseline gap-1.5 px-3 py-2 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border-subtle)]"
                >
                  <span className="text-lg font-semibold text-[var(--color-text-primary)] tracking-tight leading-none">
                    {metric.value}
                  </span>
                  <span className="text-xs text-[var(--color-text-tertiary)] font-medium">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Expand toggle */}
          <button
            type="button"
            onClick={onToggle}
            aria-expanded={isOpen}
            aria-controls={`exp-details-${index}`}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-text-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-elevated)] rounded-md px-1 -ml-1"
          >
            {isOpen ? 'Show less' : 'Show details'}
            <ChevronIcon isOpen={isOpen} />
          </button>

          {/* Expandable detail list */}
          <AnimatePresence initial={false}>
            {isOpen && (
              <motion.div
                id={`exp-details-${index}`}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{
                  height: { duration, ease: [0.22, 1, 0.36, 1] },
                  opacity: { duration: duration * 0.8 },
                }}
                className="overflow-hidden"
              >
                <ul className="space-y-2 mt-4 pt-4 border-t border-[var(--color-border-subtle)] list-disc list-outside pl-4 marker:text-[var(--color-text-tertiary)]">
                  {exp.points.map((point) => (
                    <li
                      key={point}
                      className="text-sm text-[var(--color-text-secondary)] leading-relaxed"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Career arc connector */}
      {!isLast && exp.transitionNote && (
        <div className="relative ml-2 md:ml-4 my-3 pl-4 border-l border-dashed border-[var(--color-border)]">
          <p className="text-xs text-[var(--color-text-tertiary)] italic leading-relaxed py-1">
            {exp.transitionNote}
          </p>
        </div>
      )}
    </div>
  );
}

// ============================================
// MAIN PAGE
// ============================================
export default function KnowMore() {
  const shouldReduceMotion = useReducedMotion();
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First card open by default

  const handleToggle = useCallback((index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  }, []);

  const renderPageTitle = () => (
    <div className="mb-16 md:mb-24">
      <p className="text-sm font-medium text-[var(--color-text-tertiary)] mb-4 tracking-wide uppercase">
        Know More
      </p>
      <h1 className="text-3xl md:text-5xl font-semibold text-[var(--color-text-primary)] tracking-tight leading-tight">
        My Journey
      </h1>
      <p className="mt-4 text-lg text-[var(--color-text-secondary)] leading-relaxed max-w-[var(--max-width-text)]">
        From UX internships to leading product design at a B2B SaaS company and shipping full products with AI—here&apos;s where I&apos;ve been.
      </p>
      <div className="mt-8">
        <YearsCounter />
      </div>
    </div>
  );

  return (
    <>
      <Header />
      <main className="pt-28 md:pt-36 pb-20 md:pb-32">
        <div className="max-w-[var(--max-width-content)] mx-auto px-6 lg:px-8">
          {/* Back Link */}
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] transition-colors group mb-12"
          >
            <svg
              className="w-4 h-4 transition-transform group-hover:-translate-x-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Back to home
          </a>

          {/* Page Title */}
          {shouldReduceMotion ? (
            renderPageTitle()
          ) : (
            <HeroReveal>
              <HeroItem>
                {renderPageTitle()}
              </HeroItem>
            </HeroReveal>
          )}

          {/* ============================================
              EXPERIENCE SECTION
              ============================================ */}
          <section className="mb-20 md:mb-28">
            {shouldReduceMotion ? (
              <>
                <h2 className="text-xl md:text-2xl font-semibold text-[var(--color-text-primary)] tracking-tight mb-10">
                  Experience
                </h2>

                <div className="relative">
                  {/* Timeline line with gradient */}
                  <div
                    className="absolute left-[7px] top-2 bottom-2 w-px"
                    style={{
                      background: 'linear-gradient(to bottom, var(--color-text-primary) 0%, var(--color-border) 40%, var(--color-border) 100%)',
                    }}
                  />

                  <div className="space-y-6">
                    {experiences.map((exp, index) => (
                      <ExperienceCard
                        key={exp.company}
                        exp={exp}
                        index={index}
                        isOpen={openIndex === index}
                        onToggle={() => handleToggle(index)}
                        isLast={index === experiences.length - 1}
                      />
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <SectionReveal>
                <h2 className="text-xl md:text-2xl font-semibold text-[var(--color-text-primary)] tracking-tight mb-10">
                  Experience
                </h2>

                <div className="relative">
                  {/* Timeline line with gradient */}
                  <div
                    className="absolute left-[7px] top-2 bottom-2 w-px"
                    style={{
                      background: 'linear-gradient(to bottom, var(--color-text-primary) 0%, var(--color-border) 40%, var(--color-border) 100%)',
                    }}
                  />

                  <StaggerContainer className="space-y-6">
                    {experiences.map((exp, index) => (
                      <StaggerItem key={exp.company}>
                        <ExperienceCard
                          exp={exp}
                          index={index}
                          isOpen={openIndex === index}
                          onToggle={() => handleToggle(index)}
                          isLast={index === experiences.length - 1}
                        />
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                </div>
              </SectionReveal>
            )}
          </section>

          {/* ============================================
              SKILLS SECTION
              ============================================ */}
          <section>
            {shouldReduceMotion ? (
              <>
                <h2 className="text-xl md:text-2xl font-semibold text-[var(--color-text-primary)] tracking-tight mb-10">
                  Skills & Tools
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {skillGroups.map((group) => {
                    const Icon = group.icon;
                    return (
                      <div
                        key={group.category}
                        className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-5 md:p-6"
                      >
                        <div className="flex items-center gap-3 mb-5">
                          <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border-subtle)]">
                            <span className="text-[var(--color-text-secondary)]">
                              <Icon />
                            </span>
                          </div>
                          <h3 className="text-sm font-semibold text-[var(--color-text-primary)] uppercase tracking-wide">
                            {group.category}
                          </h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {group.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-3 py-1.5 text-sm font-medium text-[var(--color-text-secondary)] bg-[var(--color-bg)] border border-[var(--color-border-subtle)] rounded-lg"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </>
            ) : (
              <SectionReveal>
                <h2 className="text-xl md:text-2xl font-semibold text-[var(--color-text-primary)] tracking-tight mb-10">
                  Skills & Tools
                </h2>
                <StaggerContainer className="grid md:grid-cols-3 gap-6">
                  {skillGroups.map((group) => {
                    const Icon = group.icon;
                    return (
                      <StaggerItem key={group.category}>
                        <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-5 md:p-6 card-hover-effect h-full">
                          <div className="card-hover-content">
                            <div className="flex items-center gap-3 mb-5">
                              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border-subtle)]">
                                <span className="text-[var(--color-text-secondary)]">
                                  <Icon />
                                </span>
                              </div>
                              <h3 className="text-sm font-semibold text-[var(--color-text-primary)] uppercase tracking-wide">
                                {group.category}
                              </h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {group.skills.map((skill) => (
                                <span
                                  key={skill}
                                  className="px-3 py-1.5 text-sm font-medium text-[var(--color-text-secondary)] bg-[var(--color-bg)] border border-[var(--color-border-subtle)] rounded-lg"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </StaggerItem>
                    );
                  })}
                </StaggerContainer>
              </SectionReveal>
            )}
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
