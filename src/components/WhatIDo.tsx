'use client';

import { IconContainer, IconProductDesign, IconDesignSystems, IconAIDevelopment, IconProduction } from './icons';

/**
 * What I Do Section - Pure CSS Sticky Stacking
 *
 * LAYOUT STRUCTURE:
 * ┌─────────────────────────────────────────┐
 * │ Section (overflow: visible)            │
 * │ ┌─────────────────────────────────────┐ │
 * │ │ Header (sticky, top: 0, z: 50)     │ │
 * │ └─────────────────────────────────────┘ │
 * │ ┌─────────────────────────────────────┐ │
 * │ │ Card 0 (sticky, top: 140px, z: 1)  │ │
 * │ └─────────────────────────────────────┘ │
 * │ ┌─────────────────────────────────────┐ │
 * │ │ Card 1 (sticky, top: 160px, z: 2)  │ │
 * │ └─────────────────────────────────────┘ │
 * │ ┌─────────────────────────────────────┐ │
 * │ │ Card 2 (sticky, top: 180px, z: 3)  │ │
 * │ └─────────────────────────────────────┘ │
 * │ ┌─────────────────────────────────────┐ │
 * │ │ Card 3 (sticky, top: 200px, z: 4)  │ │
 * │ └─────────────────────────────────────┘ │
 * └─────────────────────────────────────────┘
 *
 * HOW STACKING WORKS:
 * 1. Header sticks at top: 0
 * 2. Card 0 scrolls up, sticks at top: 140px (below header)
 * 3. Card 1 scrolls up, sticks at top: 160px, appears ON TOP of Card 0
 * 4. Card 2 scrolls up, sticks at top: 180px, appears ON TOP of Cards 0-1
 * 5. Card 3 scrolls up, sticks at top: 200px, appears ON TOP of Cards 0-2
 * 6. When section ends, everything scrolls away together
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

// Layout constants
const HEADER_HEIGHT = 140; // Height reserved for sticky header
const CARD_STACK_OFFSET = 20; // Vertical spacing between stacked cards

export default function WhatIDo() {
  return (
    <section
      id="expertise"
      className="pt-20 md:pt-32 pb-20 md:pb-32"
      style={{
        // CRITICAL: overflow must be visible for sticky to work
        overflow: 'visible',
      }}
    >
      <div
        className="max-w-[var(--max-width-content)] mx-auto px-6 lg:px-8"
        style={{ overflow: 'visible' }}
      >
        {/* ===== STICKY HEADER ===== */}
        <div
          className="sticky top-0 z-50 bg-[var(--color-bg)] pt-4 pb-8"
          style={{
            // Gradient fade at bottom for smooth visual transition
            backgroundImage: 'linear-gradient(to bottom, var(--color-bg) 85%, transparent)',
          }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color-text-primary)] tracking-tight mb-4">
            What I bring to the table
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl">
            I combine design thinking with technical execution. Here&apos;s how that breaks down.
          </p>
        </div>

        {/* ===== STACKING CARDS ===== */}
        <div
          className="max-w-2xl"
          style={{ overflow: 'visible' }}
        >
          {expertise.map((item, index) => (
            <div
              key={index}
              className="sticky mb-6 p-6 lg:p-8 bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-xl"
              style={{
                // Progressive sticky top: each card sticks lower than the previous
                top: HEADER_HEIGHT + index * CARD_STACK_OFFSET,
                // Later cards have higher z-index (stack on top)
                zIndex: index + 1,
                // Subtle shadow for depth
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
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
