'use client';

import { SectionReveal, StaggerContainer, StaggerItem, FadeIn } from '@/lib/motion';

const clients = [
  {
    title: 'Founders',
    description:
      'You have an idea and need to move from concept to MVP. I help you design and build the first version—fast, focused, and fundable.',
  },
  {
    title: 'Startups',
    description:
      'Your product exists but needs better UX, a design system, or faster iteration cycles. I plug in and help your team ship better work.',
  },
  {
    title: 'Product Teams',
    description:
      'You need design support that understands engineering tradeoffs. I work alongside your devs, not in a silo.',
  },
  {
    title: 'Solo Builders',
    description:
      'You\'re technical but need design help—or you\'re a designer who needs build support. I fill the gap.',
  },
];

const projectTypes = [
  'MVPs',
  'SaaS products',
  'Internal tools',
  'Design systems',
  'Landing pages',
  'Product redesigns',
];

export default function WhoIHelp() {
  return (
    <SectionReveal id="clients" className="py-20 md:py-32">
      <div className="max-w-[var(--max-width-content)] mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color-text-primary)] tracking-tight mb-4">
            Who I work with
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl">
            I partner with people building products—whether you&apos;re just starting
            or scaling something that already exists.
          </p>
        </div>

        {/* Client Types Grid */}
        <StaggerContainer className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {clients.map((client, index) => (
            <StaggerItem key={index}>
              <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-2">
                {client.title}
              </h3>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                {client.description}
              </p>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Project Types */}
        <FadeIn>
          <div className="pt-8 border-t border-[var(--color-border)]">
            <p className="text-sm font-medium text-[var(--color-text-tertiary)] mb-4 uppercase tracking-wide">
              Common projects
            </p>
            <div className="flex flex-wrap gap-3">
              {projectTypes.map((type, index) => (
                <span
                  key={index}
                  className="px-4 py-2 text-sm text-[var(--color-text-secondary)] bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-full"
                >
                  {type}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </SectionReveal>
  );
}
