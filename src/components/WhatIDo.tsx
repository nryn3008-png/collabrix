'use client';

import { IconContainer, IconProductDesign, IconDesignSystems, IconAIDevelopment, IconProduction } from './icons';

/**
 * What I Do Section - Pure CSS Sticky Stacking
 *
 * SINGLE STICKY CONTEXT:
 * - The <section> element defines the scroll boundary
 * - Header and cards share the SAME sticky context
 * - Header sticks at top of viewport (below nav)
 * - Cards stick below the header with progressive offsets
 *
 * SCROLL BEHAVIOR:
 * 1. User scrolls into section
 * 2. Header becomes sticky at top: 80px (below nav)
 * 3. Card 0 becomes sticky at top: 200px
 * 4. Card 1 stacks on top at top: 224px
 * 5. Card 2 stacks on top at top: 248px
 * 6. Card 3 stacks on top at top: 272px
 * 7. Section scrolls out, header and cards release together
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
const NAV_HEIGHT = 80; // Global nav height
const HEADER_TOP = NAV_HEIGHT; // Header sticks below nav
const HEADER_HEIGHT = 120; // Approx height of section header
const CARD_BASE_TOP = HEADER_TOP + HEADER_HEIGHT; // Cards start below header
const CARD_STACK_OFFSET = 24; // Spacing between stacked cards

export default function WhatIDo() {
  return (
    <section
      id="expertise"
      style={{
        // Section defines the sticky boundary
        // Sufficient padding for scroll release
        paddingTop: '5rem',
        paddingBottom: '8rem',
        // CRITICAL: overflow visible for sticky to work
        overflow: 'visible',
      }}
    >
      {/* Single container - header and cards in same flow */}
      <div
        className="max-w-[var(--max-width-content)] mx-auto px-6 lg:px-8"
        style={{ overflow: 'visible' }}
      >
        {/* ===== SECTION HEADER ===== */}
        {/* Sticky at top of viewport, below nav */}
        <div
          className="sticky bg-[var(--color-bg)] pb-6"
          style={{
            top: HEADER_TOP,
            zIndex: 50,
            // Solid background prevents card bleed-through
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
        {/* Same sticky context as header */}
        <div
          className="max-w-2xl pt-4"
          style={{ overflow: 'visible' }}
        >
          {expertise.map((item, index) => (
            <div
              key={index}
              className="sticky mb-6 last:mb-0"
              style={{
                // Cards stick below the header
                // Each card sticks slightly lower to create stack effect
                top: CARD_BASE_TOP + index * CARD_STACK_OFFSET,
                // Higher index = higher z-index (stacks on top)
                zIndex: index + 1,
              }}
            >
              <div
                className="p-6 lg:p-8 bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-xl"
                style={{
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
