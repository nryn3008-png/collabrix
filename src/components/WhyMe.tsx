'use client';

import { SectionReveal, StaggerContainer, StaggerItem } from '@/lib/motion';

const differentiators = [
  {
    title: 'I understand both sides',
    description:
      'I\'ve spent years in the gap between design and engineering. I make decisions that look good AND are buildable. Fewer surprises, fewer delays.',
  },
  {
    title: 'Faster iteration with AI',
    description:
      'AI-assisted development lets me prototype and build faster than traditional workflows. You get working code, not just Figma links.',
  },
  {
    title: 'Fewer handoffs',
    description:
      'Most projects stall at handoff. Designer finishes, throws it over the wall, engineers have questions. I skip that. I design, build, and ship.',
  },
  {
    title: 'Decisions tied to outcomes',
    description:
      'I don\'t design for portfolios. I design for users, conversions, retention—whatever metric actually matters to your business.',
  },
];

export default function WhyMe() {
  return (
    <SectionReveal className="py-20 md:py-32 bg-[var(--color-bg-elevated)]">
      <div className="max-w-[var(--max-width-content)] mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color-text-primary)] tracking-tight mb-4">
            Why me, specifically
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl">
            There are plenty of designers. Here&apos;s what makes working with me
            different.
          </p>
        </div>

        {/* Differentiators Grid */}
        <StaggerContainer className="grid md:grid-cols-2 gap-x-12 gap-y-10">
          {differentiators.map((item, index) => (
            <StaggerItem key={index}>
              <div className="relative pl-6 border-l-2 border-[var(--color-border)]">
                <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">
                  {item.title}
                </h3>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </SectionReveal>
  );
}
