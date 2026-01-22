'use client';

import { IconContainer, IconProductDesign, IconDesignSystems, IconAIDevelopment, IconProduction } from './icons';

/**
 * What I Do Section - Sticky Stacking with Hard Stop
 *
 * MECHANISM:
 * 1. Sticky-boundary defines the scroll range
 * 2. Header sticks at NAV_HEIGHT
 * 3. Cards stack progressively below header
 * 4. padding-bottom controls when sticky releases
 * 5. Once last card stacks, section "pauses" then scrolls away
 *
 * STOPPING LOGIC:
 * - padding-bottom = (CARD_COUNT × CARD_HEIGHT) + LOCK_BUFFER
 * - This ensures all cards fully stack before release
 * - The "pause" feeling comes from the LOCK_BUFFER
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
// LAYOUT CONSTANTS
// ============================================
const NAV_HEIGHT = 72; // Global sticky nav height
const HEADER_HEIGHT = 120; // Section header height
const CARD_HEIGHT = 240; // Approximate height of each card
const CARD_STACK_OFFSET = 20; // Vertical offset between stacked cards
const LOCK_BUFFER = 100; // Extra scroll before release (creates "pause")

const CARD_COUNT = expertise.length;

// Derived sticky positions
const HEADER_TOP = NAV_HEIGHT;
const CARD_BASE_TOP = NAV_HEIGHT + HEADER_HEIGHT;

// Calculate padding-bottom for sticky boundary
// This determines when sticky elements release
const STICKY_SCROLL_DISTANCE = CARD_COUNT * CARD_HEIGHT + LOCK_BUFFER;

export default function WhatIDo() {
  return (
    <section
      id="expertise"
      style={{
        overflow: 'visible',
      }}
    >
      {/* ============================================
          STICKY BOUNDARY
          - Defines the scroll range for sticky elements
          - padding-bottom controls release timing
          - All sticky elements share this boundary
          ============================================ */}
      <div
        className="max-w-[var(--max-width-content)] mx-auto px-6 lg:px-8"
        style={{
          overflow: 'visible',
          paddingTop: '5rem',
          // CRITICAL: This padding defines when sticky releases
          paddingBottom: STICKY_SCROLL_DISTANCE,
        }}
      >
        {/* ============================================
            SECTION HEADER
            - Sticks below global nav
            - Stays locked until boundary scrolls past
            ============================================ */}
        <div
          className="sticky bg-[var(--color-bg)]"
          style={{
            top: HEADER_TOP,
            zIndex: 40,
            paddingTop: '0.5rem',
            paddingBottom: '1rem',
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
            - Each card sticks at progressive offset
            - Cards stack on top of each other
            - Last card determines final stack height
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
                // Progressive sticky top
                top: CARD_BASE_TOP + index * CARD_STACK_OFFSET,
                // Higher index = stacks on top
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
