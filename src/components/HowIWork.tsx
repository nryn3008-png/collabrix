'use client';

import { SectionReveal, StaggerContainer, StaggerItem } from '@/lib/motion';

/**
 * Process Icons - Simple line icons
 * Style: Single stroke, no fill, 18px, 60% opacity
 * Purpose: Visual scanning aid, not decoration
 */

// Search / Magnifying glass
function IconDiscover() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

// Target / Crosshair
function IconDefine() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

// Grid / Layout
function IconDesign() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
    </svg>
  );
}

// Code brackets
function IconDevelop() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

// Rocket / Upload
function IconDeploy() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}

const steps = [
  {
    number: '01',
    title: 'Discover',
    description:
      'I start by understanding your problem, your users, and your constraints. No assumptions. Just questions until the picture is clear.',
    icon: IconDiscover,
  },
  {
    number: '02',
    title: 'Define',
    description:
      'Together, we scope what matters. I help prioritize features, define success metrics, and set a direction that balances ambition with what\'s buildable.',
    icon: IconDefine,
  },
  {
    number: '03',
    title: 'Design',
    description:
      'I design in systems from day one—using Figma variables, tokens, and reusable components. You get a UI that scales, not just screens that look good.',
    icon: IconDesign,
  },
  {
    number: '04',
    title: 'Develop',
    description:
      'Using AI-assisted tools, I build real, functional code. Not throwaway prototypes—actual React components you can ship or hand off to engineers.',
    icon: IconDevelop,
  },
  {
    number: '05',
    title: 'Deploy',
    description:
      'I push to production. Vercel, Netlify, wherever your stack lives. You see your product working in the real world, not just in a deck.',
    icon: IconDeploy,
  },
];

export default function HowIWork() {
  return (
    <SectionReveal id="process" className="py-20 md:py-32 bg-[var(--color-bg-elevated)]">
      <div className="max-w-[var(--max-width-content)] mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color-text-primary)] tracking-tight mb-4">
            A process built for speed and clarity
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl">
            I keep things straightforward. Here&apos;s how projects typically move
            from idea to shipped product.
          </p>
        </div>

        {/* Process Steps */}
        <StaggerContainer className="space-y-0">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <StaggerItem key={index}>
                <div
                  className={`relative grid md:grid-cols-[60px_32px_1fr] gap-0 md:gap-0 py-8 items-start ${
                    index !== steps.length - 1
                      ? 'border-b border-[var(--color-border)]'
                      : ''
                  }`}
                >
                  {/* Step Number */}
                  <div className="flex items-center h-7">
                    <span className="text-sm font-mono text-[var(--color-text-tertiary)]">
                      {step.number}
                    </span>
                  </div>

                  {/* Icon - between number and title */}
                  <div className="flex items-center justify-center h-7">
                    <span
                      className="text-[var(--color-text-secondary)]"
                      style={{ opacity: 0.7 }}
                    >
                      <Icon />
                    </span>
                  </div>

                  {/* Step Content */}
                  <div className="max-w-xl pl-4">
                    <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-2 leading-7">
                      {step.title}
                    </h3>
                    <p className="text-[var(--color-text-secondary)] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </SectionReveal>
  );
}
