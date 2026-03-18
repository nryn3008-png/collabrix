'use client';

import { useReducedMotion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { HeroReveal, HeroItem, StaggerContainer, StaggerItem } from '@/lib/motion';

const projects = [
  {
    title: 'FinFlow — Banking Dashboard Redesign',
    category: 'Product Design · Development',
    duration: '3 months',
    thumbnail: '/projects/finflow.jpg',
    problem:
      'A fintech startup struggled with low user engagement on their banking dashboard. Key metrics were buried, and users couldn\'t complete common tasks without navigating multiple screens.',
    process: [
      'Conducted user interviews with 12 active customers to map pain points',
      'Redesigned information architecture around top 5 user tasks',
      'Built a component library with Figma variables and design tokens',
      'Implemented the frontend in Next.js with real-time data visualizations',
    ],
    outcome:
      'Task completion rate improved by 40%. Average session duration increased by 25%. The redesigned dashboard became the primary selling point in sales demos.',
    tags: ['Figma', 'Next.js', 'Tailwind CSS', 'Design System', 'User Research'],
  },
  {
    title: 'Medica — Healthcare Appointment Platform',
    category: 'End-to-End Product',
    duration: '4 months',
    thumbnail: '/projects/medica.jpg',
    problem:
      'A healthcare provider needed a patient-facing platform for booking appointments, viewing records, and communicating with doctors. Their existing system was desktop-only and outdated.',
    process: [
      'Mapped the complete patient journey from booking to follow-up',
      'Designed a mobile-first responsive interface with accessibility as a priority',
      'Created a scalable design system supporting light and dark modes',
      'Built the frontend with React and integrated with their existing API',
    ],
    outcome:
      'Online bookings increased by 60% within the first month. Patient satisfaction scores improved from 3.2 to 4.6 out of 5. Mobile usage grew to 70% of all traffic.',
    tags: ['React', 'TypeScript', 'Accessibility', 'Mobile-First', 'Healthcare'],
  },
  {
    title: 'BuildKit — Developer Tool Landing Page',
    category: 'Design · Development',
    duration: '2 weeks',
    thumbnail: '/projects/buildkit.jpg',
    problem:
      'A developer tools company needed a high-converting landing page for their new CLI product. Their previous page had a 15% bounce rate improvement target.',
    process: [
      'Analyzed competitor landing pages and identified conversion patterns',
      'Designed a narrative-driven page structure: problem → solution → proof → CTA',
      'Implemented scroll-triggered animations and interactive code demos',
      'Set up A/B testing for headline and CTA variations',
    ],
    outcome:
      'Bounce rate decreased by 22%. Sign-up conversion improved by 35%. The page became a template for the company\'s other product launches.',
    tags: ['Next.js', 'Framer Motion', 'Copywriting', 'A/B Testing', 'Conversion'],
  },
  {
    title: 'TeamSync — Project Management Redesign',
    category: 'Product Design',
    duration: '6 weeks',
    thumbnail: '/projects/teamsync.jpg',
    problem:
      'A growing startup\'s internal project management tool had become unwieldy. Teams were abandoning it for spreadsheets because the interface was too complex for simple task tracking.',
    process: [
      'Ran workshops with 4 teams to understand different workflow needs',
      'Simplified the core experience around three views: list, board, and timeline',
      'Designed a flexible card system that adapted to different project types',
      'Prototyped and user-tested with 8 participants across two rounds',
    ],
    outcome:
      'Tool adoption returned to 90% across all teams. Support tickets related to the tool dropped by 50%. The simplified design reduced onboarding time from 2 hours to 20 minutes.',
    tags: ['Figma', 'Prototyping', 'User Testing', 'Workshop Facilitation', 'SaaS'],
  },
];

function ProjectCard({
  project,
}: {
  project: (typeof projects)[number];
}) {
  return (
    <div className="border border-[var(--color-border)] rounded-2xl overflow-hidden hover:border-[var(--color-text-tertiary)] transition-colors">
      {/* Thumbnail placeholder */}
      <div className="w-full h-48 md:h-56 bg-[var(--color-bg-elevated)] border-b border-[var(--color-border)] flex items-center justify-center">
        <span className="text-sm text-[var(--color-text-tertiary)]">Project Preview</span>
      </div>

      <div className="p-6 md:p-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
          <p className="text-xs font-medium text-[var(--color-text-tertiary)] uppercase tracking-wide">
            {project.category}
          </p>
          <span className="text-xs text-[var(--color-text-tertiary)]">{project.duration}</span>
        </div>
        <h3 className="text-xl md:text-2xl font-semibold text-[var(--color-text-primary)] tracking-tight mb-6">
          {project.title}
        </h3>

        {/* Problem */}
        <div className="mb-6">
          <h4 className="text-sm font-medium text-[var(--color-text-tertiary)] uppercase tracking-wide mb-2">
            The Problem
          </h4>
          <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
            {project.problem}
          </p>
        </div>

        {/* Process */}
        <div className="mb-6">
          <h4 className="text-sm font-medium text-[var(--color-text-tertiary)] uppercase tracking-wide mb-2">
            Process
          </h4>
          <ul className="space-y-1.5">
            {project.process.map((step) => (
              <li
                key={step}
                className="text-sm text-[var(--color-text-secondary)] leading-relaxed flex gap-2"
              >
                <span className="text-[var(--color-text-tertiary)] mt-0.5 shrink-0">•</span>
                {step}
              </li>
            ))}
          </ul>
        </div>

        {/* Outcome */}
        <div className="mb-6">
          <h4 className="text-sm font-medium text-[var(--color-text-tertiary)] uppercase tracking-wide mb-2">
            Outcome
          </h4>
          <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
            {project.outcome}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-xs font-medium text-[var(--color-text-tertiary)] bg-[var(--color-bg)] border border-[var(--color-border)] rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Work() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      <Header />
      <main className="pt-24 md:pt-28 pb-20 md:pb-32">
        <div className="max-w-[var(--max-width-content)] mx-auto px-6 lg:px-8">
          {/* Back Link */}
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] transition-colors group mb-6"
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

          {/* Page Title + Cards */}
          {shouldReduceMotion ? (
            <>
              <div className="mb-8 md:mb-10">
                <p className="text-sm font-medium text-[var(--color-text-tertiary)] mb-4 tracking-wide uppercase">
                  Portfolio
                </p>
                <h1 className="text-3xl md:text-5xl font-semibold text-[var(--color-text-primary)] tracking-tight leading-tight">
                  Selected Work
                </h1>
                <p className="mt-4 text-lg text-[var(--color-text-secondary)] leading-relaxed max-w-[var(--max-width-text)]">
                  Case studies from projects where I designed and built products end-to-end—from research to production code.
                </p>
              </div>
              <div className="grid gap-10 md:gap-12">
                {projects.map((project) => (
                  <ProjectCard key={project.title} project={project} />
                ))}
              </div>
            </>
          ) : (
            <HeroReveal>
              <HeroItem>
                <div className="mb-8 md:mb-10">
                  <p className="text-sm font-medium text-[var(--color-text-tertiary)] mb-4 tracking-wide uppercase">
                    Portfolio
                  </p>
                  <h1 className="text-3xl md:text-5xl font-semibold text-[var(--color-text-primary)] tracking-tight leading-tight">
                    Selected Work
                  </h1>
                  <p className="mt-4 text-lg text-[var(--color-text-secondary)] leading-relaxed max-w-[var(--max-width-text)]">
                    Case studies from projects where I designed and built products end-to-end—from research to production code.
                  </p>
                </div>
              </HeroItem>
              {projects.map((project) => (
                <HeroItem key={project.title} className="mb-10 md:mb-12 last:mb-0">
                  <ProjectCard project={project} />
                </HeroItem>
              ))}
            </HeroReveal>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
