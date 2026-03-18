'use client';

import { useReducedMotion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SectionReveal, StaggerContainer, StaggerItem } from '@/lib/motion';

const experiences = [
  {
    role: 'Product Designer & Developer',
    company: 'Freelance',
    duration: '2024 — Present',
    points: [
      'Designing and building end-to-end digital products for startups',
      'Combining Figma design systems with production-ready Next.js code',
      'Reduced client handoff cycles by 60% through unified design-dev workflow',
    ],
  },
  {
    role: 'Senior Product Designer',
    company: 'TechStartup Inc.',
    duration: '2022 — 2024',
    points: [
      'Led product design for a B2B SaaS platform serving 10K+ users',
      'Built and maintained a component library with design tokens',
      'Collaborated with engineering to ship features 2x faster',
    ],
  },
  {
    role: 'UI/UX Designer',
    company: 'Digital Agency',
    duration: '2021 — 2022',
    points: [
      'Designed interfaces for 15+ client projects across fintech and healthcare',
      'Established design system foundations and style guides',
      'Conducted user research and usability testing sessions',
    ],
  },
  {
    role: 'Junior Designer',
    company: 'Creative Studio',
    duration: '2020 — 2021',
    points: [
      'Created responsive web designs and marketing landing pages',
      'Assisted in brand identity projects and visual systems',
      'Learned front-end development to better communicate with engineers',
    ],
  },
];

const skillGroups = [
  {
    category: 'Design',
    skills: ['Product Design', 'Design Systems', 'Figma', 'Prototyping', 'User Research', 'Wireframing', 'Visual Design'],
  },
  {
    category: 'Development',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'HTML/CSS', 'Git'],
  },
  {
    category: 'Tools & Workflow',
    skills: ['Figma Variables', 'Design Tokens', 'AI-Assisted Dev', 'Vercel', 'VS Code', 'Linear', 'Notion'],
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
                4+ years of bridging design and development—here&apos;s where I&apos;ve been and what I&apos;ve picked up along the way.
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
                  4+ years of bridging design and development—here&apos;s where I&apos;ve been and what I&apos;ve picked up along the way.
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
                            {exp.company}
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
                            {exp.company}
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
