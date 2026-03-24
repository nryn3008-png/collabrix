'use client';

import { useReducedMotion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SectionReveal, StaggerContainer, StaggerItem } from '@/lib/motion';

const experiences = [
  {
    role: 'Product Designer',
    company: 'Bridge (brdg.app)',
    duration: 'Dec 2023 — Present',
    location: 'Full-time',
    points: [
      'Established design system rules and trained AI to understand Bridge\u2019s design language for consistent output across mini apps',
      'Designed and shipped 100+ features, including a full app revamp and core intro flow redesign \u2014 working closely with the CEO and engineering team',
      'Built two standalone products from scratch: Bridge Jobs (VC-powered talent board with 13 ATS integrations) and Bridge Perks Portal (domain-gated marketplace with 400+ vendor perks)',
      'Own the entire product design lifecycle \u2014 from research and UX strategy to design systems, visual design, and production front-end code',
    ],
  },
  {
    role: 'Product Designer',
    company: 'Quantive (previously Gtmhub, acquired Workboard)',
    duration: 'Jun 2022 — Nov 2023',
    location: 'Full-time',
    points: [
      'Worked across 4 products: Cliff.ai (Signals), Results, Singularity, and Modern Data Stack \u2014 a B2B SaaS suite focused on OKRs, KPIs, and strategic decision-making',
      'Led design for Modern Data Stack and Cliff.ai (business observability platform with KPI dashboards and anomaly detection), collaborating with a global team of PMs, engineers, and designers',
      'Contributed to early product concepts for Singularity alongside the leadership team, incorporating customer feedback for continuous product improvement',
      'Identified 30+ AI use cases and led AI integration design for Results, collaborating with leadership to weave AI into existing workflows',
      'Managed and mentored 2 junior designers \u2014 assigning tasks, reviewing work, and promoting design best practices and standards',
    ],
  },
  {
    role: 'Industrial Design Intern',
    company: 'Maker\u2019s Asylum',
    duration: 'Mar 2022 — May 2022',
    location: 'North Goa, India \u00b7 On-site',
    points: [
      'Designed the UI for the new DIY Hour website and learning management system',
      'Contributed to research data collection for an upcoming foundation initiative',
      'Finalized the outreach strategy and ideated packaging designs for the toolbox and monthly DIY Hour box',
    ],
  },
  {
    role: 'User Experience Intern',
    company: 'Indigo Consulting',
    duration: 'May 2020 — Aug 2020',
    location: 'Mumbai \u00b7 Remote',
    points: [
      'Assisted the UX team in auditing, evaluating, designing, and wireframing digital experiences for prominent Indian and international fintech brands',
      'Collaborated with the design team to review and improve the online buying experience for top e-commerce and pharmaceutical companies',
    ],
  },
];

const skillGroups = [
  {
    category: 'Design',
    skills: ['Product Design', 'Design Systems', 'UX Strategy', 'User Research', 'Wireframing', 'Prototyping', 'Visual Design', 'Information Architecture'],
  },
  {
    category: 'Development',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'HTML/CSS', 'Supabase', 'Git'],
  },
  {
    category: 'Tools & Workflow',
    skills: ['Figma', 'Design Tokens', 'Claude Code', 'AI-Assisted Dev', 'Vercel', 'VS Code', 'Linear', 'Notion'],
  },
];

export default function KnowMore() {
  const shouldReduceMotion = useReducedMotion();

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
            </div>
          ) : (
            <SectionReveal>
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
              </div>
            </SectionReveal>
          )}

          {/* Experience Timeline */}
          <section className="mb-20 md:mb-28">
            {shouldReduceMotion ? (
              <>
                <h2 className="text-xl md:text-2xl font-semibold text-[var(--color-text-primary)] tracking-tight mb-10">
                  Experience
                </h2>
                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-[7px] top-2 bottom-2 w-px bg-[var(--color-border)]" />

                  <div className="space-y-10">
                    {experiences.map((exp) => (
                      <div key={exp.company} className="relative pl-8">
                        {/* Timeline dot */}
                        <div className="absolute left-0 top-2 w-[15px] h-[15px] rounded-full border-2 border-[var(--color-text-tertiary)] bg-[var(--color-bg)]" />

                        <div>
                          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                            <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
                              {exp.role}
                            </h3>
                            <span className="text-sm text-[var(--color-text-tertiary)] font-medium whitespace-nowrap">
                              {exp.duration}
                            </span>
                          </div>
                          <p className="text-sm font-medium text-[var(--color-text-secondary)] mb-3">
                            {exp.company}{exp.location && <span className="text-[var(--color-text-tertiary)] font-normal"> · {exp.location}</span>}
                          </p>
                          <ul className="space-y-1.5">
                            {exp.points.map((point) => (
                              <li
                                key={point}
                                className="text-sm text-[var(--color-text-secondary)] leading-relaxed flex gap-2"
                              >
                                <span className="text-[var(--color-text-tertiary)] mt-1 shrink-0">•</span>
                                {point}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
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
                  {/* Timeline line */}
                  <div className="absolute left-[7px] top-2 bottom-2 w-px bg-[var(--color-border)]" />

                  <StaggerContainer className="space-y-10">
                    {experiences.map((exp) => (
                      <StaggerItem key={exp.company} className="relative pl-8">
                        {/* Timeline dot */}
                        <div className="absolute left-0 top-2 w-[15px] h-[15px] rounded-full border-2 border-[var(--color-text-tertiary)] bg-[var(--color-bg)]" />

                        <div>
                          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                            <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
                              {exp.role}
                            </h3>
                            <span className="text-sm text-[var(--color-text-tertiary)] font-medium whitespace-nowrap">
                              {exp.duration}
                            </span>
                          </div>
                          <p className="text-sm font-medium text-[var(--color-text-secondary)] mb-3">
                            {exp.company}{exp.location && <span className="text-[var(--color-text-tertiary)] font-normal"> · {exp.location}</span>}
                          </p>
                          <ul className="space-y-1.5">
                            {exp.points.map((point) => (
                              <li
                                key={point}
                                className="text-sm text-[var(--color-text-secondary)] leading-relaxed flex gap-2"
                              >
                                <span className="text-[var(--color-text-tertiary)] mt-1 shrink-0">•</span>
                                {point}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                </div>
              </SectionReveal>
            )}
          </section>

          {/* Skills */}
          <section>
            {shouldReduceMotion ? (
              <>
                <h2 className="text-xl md:text-2xl font-semibold text-[var(--color-text-primary)] tracking-tight mb-10">
                  Skills & Tools
                </h2>
                <div className="grid md:grid-cols-3 gap-10">
                  {skillGroups.map((group) => (
                    <div key={group.category}>
                      <h3 className="text-sm font-medium text-[var(--color-text-tertiary)] uppercase tracking-wide mb-4">
                        {group.category}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {group.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1.5 text-sm font-medium text-[var(--color-text-secondary)] bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-lg"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <SectionReveal>
                <h2 className="text-xl md:text-2xl font-semibold text-[var(--color-text-primary)] tracking-tight mb-10">
                  Skills & Tools
                </h2>
                <StaggerContainer className="grid md:grid-cols-3 gap-10">
                  {skillGroups.map((group) => (
                    <StaggerItem key={group.category}>
                      <h3 className="text-sm font-medium text-[var(--color-text-tertiary)] uppercase tracking-wide mb-4">
                        {group.category}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {group.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1.5 text-sm font-medium text-[var(--color-text-secondary)] bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-lg"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </StaggerItem>
                  ))}
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
