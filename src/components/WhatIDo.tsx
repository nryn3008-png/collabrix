'use client';

import { IconContainer, IconProductDesign, IconDesignSystems, IconAIDevelopment, IconProduction } from './icons';

/**
 * What I Do Section - CSS Sticky Stacking
 *
 * SIMPLE MODEL:
 * - All cards visible in normal vertical flow
 * - Each card has position: sticky with increasing top offset
 * - As you scroll, cards naturally stack at their sticky positions
 * - z-index increases so later cards appear on top of earlier ones
 * - No scroll math, no transforms, no IntersectionObserver
 *
 * HOW IT WORKS:
 * 1. Card 0: sticky at top: 120px → sticks first
 * 2. Card 1: sticky at top: 140px → sticks 20px below card 0, appears on top
 * 3. Card 2: sticky at top: 160px → sticks 20px below card 1, appears on top
 * 4. Card 3: sticky at top: 180px → sticks 20px below card 2, appears on top
 *
 * When you scroll past all cards, the sticky behavior ends and
 * the stack scrolls away naturally.
 */

const expertise = [
  {
    title: 'Product & UX Design',
    description:
      'I design interfaces that make sense. Not just visually, but structurally. I focus on user flows, information architecture, and interactions that feel intuitive—because good design reduces confusion and increases trust.',
    icon: <IconProductDesign size={24} />,
  },
  {
    title: 'Design Systems',
    description:
      'I build scalable design systems using Figma variables and tokens. When your product grows, your UI shouldn\'t break. Systems let teams move fast without reinventing components every sprint.',
    icon: <IconDesignSystems size={24} />,
  },
  {
    title: 'AI-Assisted Development',
    description:
      'I use tools like Claude Code and Figma Make to write production-ready code. This isn\'t about replacing engineering—it\'s about reducing handoff friction and shipping faster iterations.',
    icon: <IconAIDevelopment size={24} />,
  },
  {
    title: 'Prototype to Production',
    description:
      'I don\'t stop at mockups. I build working prototypes, deploy to Vercel, and iterate based on real usage. The gap between \"designed\" and \"shipped\" is where most projects stall. I close that gap.',
    icon: <IconProduction size={24} />,
  },
];

// Sticky positioning constants
const HEADER_STICKY_TOP = 80; // Where header sticks (below nav)
const CARD_BASE_TOP = 180; // Where first card sticks
const CARD_STACK_OFFSET = 24; // Overlap between stacked cards

export default function WhatIDo() {
  return (
    <section id="expertise" className="py-20 md:py-32">
      <div className="max-w-[var(--max-width-content)] mx-auto px-6 lg:px-8">
        {/* Section Header - sticky at top */}
        <div
          className="sticky bg-[var(--color-bg)] pb-8 mb-4 z-10"
          style={{
            top: HEADER_STICKY_TOP,
          }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color-text-primary)] tracking-tight mb-4">
            What I bring to the table
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl">
            I combine design thinking with technical execution. Here&apos;s how that breaks down.
          </p>
        </div>

        {/* Cards - each sticky with progressive top offset */}
        <div className="max-w-2xl space-y-6">
          {expertise.map((item, index) => (
            <div
              key={index}
              className="sticky p-6 lg:p-8 bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-xl shadow-sm"
              style={{
                // Each card sticks at a progressively lower position
                top: CARD_BASE_TOP + index * CARD_STACK_OFFSET,
                // Later cards have higher z-index (appear on top)
                zIndex: index + 1,
              }}
            >
              <IconContainer size="lg" className="mb-5">
                {item.icon}
              </IconContainer>
              <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-3">
                {item.title}
              </h3>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
