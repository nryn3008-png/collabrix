'use client';

import { IconContainer, IconProductDesign, IconDesignSystems, IconAIDevelopment, IconProduction } from './icons';

/**
 * What I Do Section - CSS Sticky Stacking with Global Nav Awareness
 *
 * GLOBAL CONTEXT:
 * - Site has a sticky nav at top: 0
 * - ALL section sticky elements must account for nav height
 * - No element may use top: 0 or it will slide under the nav
 *
 * STICKY HIERARCHY:
 * 1. Global Nav:      top: 0,          z-index: 100 (defined elsewhere)
 * 2. Section Header:  top: NAV_HEIGHT, z-index: 40
 * 3. Cards:           top: NAV_HEIGHT + HEADER_HEIGHT + offset, z-index: 1-4
 *
 * SCROLL BEHAVIOR:
 * - Header sticks directly below the nav
 * - Cards stack below the header
 * - All sticky elements release when section exits viewport
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

// ============================================
// LAYOUT CONSTANTS - Derived from global nav
// ============================================
const NAV_HEIGHT = 72; // Height of global sticky nav (px)
const HEADER_HEIGHT = 100; // Section header height (px)
const CARD_STACK_OFFSET = 20; // Spacing between stacked cards (px)

// Derived values
const SECTION_HEADER_TOP = NAV_HEIGHT; // Header sticks below nav
const CARD_BASE_TOP = NAV_HEIGHT + HEADER_HEIGHT; // Cards start below header

export default function WhatIDo() {
  return (
    <section
      id="expertise"
      style={{
        // Section defines the sticky boundary
        paddingTop: '5rem',
        paddingBottom: '10rem', // Extra padding for clean scroll release
        overflow: 'visible', // CRITICAL for sticky to work
      }}
    >
      <div
        className="max-w-[var(--max-width-content)] mx-auto px-6 lg:px-8"
        style={{ overflow: 'visible' }}
      >
        {/* ============================================
            SECTION HEADER
            - Sticks directly below global nav
            - Solid background prevents bleed-through
            - Highest z-index within section
            ============================================ */}
        <div
          className="sticky bg-[var(--color-bg)]"
          style={{
            top: SECTION_HEADER_TOP,
            zIndex: 40,
            paddingTop: '1rem',
            paddingBottom: '1.5rem',
          }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color-text-primary)] tracking-tight mb-4">
            What I bring to the table
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl">
            I combine design thinking with technical execution. Here&apos;s how that breaks down.
          </p>
        </div>

        {/* ============================================
            STACKING CARDS
            - Each card sticks below the header
            - Progressive top values create stack effect
            - Higher index = higher z-index (stacks on top)
            ============================================ */}
        <div
          className="max-w-2xl"
          style={{ overflow: 'visible' }}
        >
          {expertise.map((item, index) => (
            <div
              key={index}
              className="sticky mb-6 last:mb-0"
              style={{
                // Each card sticks at: NAV + HEADER + (index × offset)
                top: CARD_BASE_TOP + index * CARD_STACK_OFFSET,
                // Later cards have higher z-index
                zIndex: index + 1,
              }}
            >
              <div
                className="p-6 lg:p-8 bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-xl"
                style={{
                  boxShadow: '0 4px 24px rgba(0, 0, 0, 0.08)',
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
