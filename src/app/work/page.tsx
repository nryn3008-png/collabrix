'use client';

import Link from 'next/link';
import { useReducedMotion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { HeroReveal, HeroItem } from '@/lib/motion';

const projects = [
  {
    slug: 'bridge-jobs',
    title: 'Bridge Jobs — VC-Powered Talent Platform',
    category: 'Product Design · Full-Stack Development · Agentic AI',
    timeline: 'Feb 2026 — Present',
    description:
      'Designed and shipped a production-grade job aggregation platform for venture capital networks. 13 ATS integrations, 120+ portfolio companies, 4 user roles — conceived, designed, and built by one designer using agentic AI.',
    stats: [
      { value: '13', label: 'ATS Integrations' },
      { value: '120+', label: 'Companies Synced' },
      { value: '57', label: 'Components Built' },
      { value: '4', label: 'User Roles' },
    ],
    tags: [
      'Product Design',
      'Next.js 16',
      'Design Systems',
      'Supabase',
      'Agentic AI',
      'Multi-Tenant SaaS',
    ],
    status: 'Live',
    url: 'jobs.brdg.app',
  },
];

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="block border border-[var(--color-border)] rounded-2xl overflow-hidden hover:border-[var(--color-text-tertiary)] transition-all duration-200 group"
    >
      {/* Thumbnail area */}
      <div className="w-full h-48 md:h-64 bg-[var(--color-bg-elevated)] border-b border-[var(--color-border)] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0038FF]/5 to-[#7450DA]/5" />
        <div className="text-center z-10">
          <p className="text-2xl md:text-3xl font-semibold text-[var(--color-text-primary)] tracking-tight">
            Bridge Jobs
          </p>
          <p className="text-sm text-[var(--color-text-tertiary)] mt-1">
            jobs.brdg.app
          </p>
        </div>
      </div>

      <div className="p-6 md:p-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
          <p className="text-xs font-medium text-[var(--color-text-tertiary)] uppercase tracking-wide">
            {project.category}
          </p>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-green-600">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
              {project.status}
            </span>
            <span className="text-xs text-[var(--color-text-tertiary)]">
              {project.timeline}
            </span>
          </div>
        </div>

        <h3 className="text-xl md:text-2xl font-semibold text-[var(--color-text-primary)] tracking-tight mb-3 group-hover:text-[var(--color-text-secondary)] transition-colors">
          {project.title}
        </h3>

        <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6 py-5 border-y border-[var(--color-border)]">
          {project.stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl font-semibold text-[var(--color-text-primary)] tracking-tight">
                {stat.value}
              </p>
              <p className="text-xs text-[var(--color-text-tertiary)] mt-0.5">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Tags + CTA */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
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
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-text-tertiary)] group-hover:text-[var(--color-text-primary)] transition-colors shrink-0">
            Read case study
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
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
                  <ProjectCard key={project.slug} project={project} />
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
                <HeroItem key={project.slug} className="mb-10 md:mb-12 last:mb-0">
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
