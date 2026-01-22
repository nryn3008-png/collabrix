'use client';

import { IconContainer, IconProductDesign, IconDesignSystems, IconAIDevelopment, IconProduction } from './icons';

/**
 * What I Do Section - Minimal Sticky Stacking
 *
 * BEHAVIOR:
 * 1. Header sticks below nav
 * 2. Cards stack one-by-one
 * 3. All cards stack → pause → release
 * 4. Next section appears
 *
 * NO animations. NO transforms. NO JS scroll logic.
 */

// ============================================
// EXPLICIT CONSTANTS (measured values)
// ============================================
const NAV_HEIGHT = 72;
const HEADER_HEIGHT = 120;
const CARD_HEIGHT = 240;
const STACK_OFFSET = 20;
const PAUSE_BUFFER = 100;
const CARD_COUNT = 4;

// Calculated values
const HEADER_STICKY_TOP = NAV_HEIGHT;
const CARD_STICKY_BASE = NAV_HEIGHT + HEADER_HEIGHT;
const SCROLL_RANGE = CARD_COUNT * CARD_HEIGHT + PAUSE_BUFFER;

// ============================================
// DATA
// ============================================
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
// COMPONENT
// ============================================
export default function WhatIDo() {
  return (
    <section id="expertise" style={{ overflow: 'visible' }}>
      {/* STICKY BOUNDARY - defines scroll range */}
      <div
        style={{
          overflow: 'visible',
          paddingTop: 80,
          paddingBottom: SCROLL_RANGE,
          paddingLeft: 24,
          paddingRight: 24,
          maxWidth: 'var(--max-width-content)',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        {/* SECTION HEADER - sticky below nav */}
        <header
          style={{
            position: 'sticky',
            top: HEADER_STICKY_TOP,
            zIndex: 50,
            backgroundColor: 'var(--color-bg)',
            paddingTop: 8,
            paddingBottom: 16,
          }}
        >
          <h2
            style={{
              fontSize: 'clamp(1.875rem, 4vw, 2.25rem)',
              fontWeight: 600,
              color: 'var(--color-text-primary)',
              letterSpacing: '-0.02em',
              marginBottom: 16,
            }}
          >
            What I bring to the table
          </h2>
          <p
            style={{
              fontSize: '1.125rem',
              color: 'var(--color-text-secondary)',
              maxWidth: 672,
              lineHeight: 1.6,
            }}
          >
            I combine design thinking with technical execution. Here&apos;s how that breaks down.
          </p>
        </header>

        {/* CARDS - stack one-by-one */}
        <div style={{ maxWidth: 672, overflow: 'visible' }}>
          {expertise.map((item, i) => (
            <article
              key={i}
              style={{
                position: 'sticky',
                top: CARD_STICKY_BASE + i * STACK_OFFSET,
                zIndex: 10 + i,
                marginBottom: 24,
                padding: 32,
                backgroundColor: 'var(--color-bg-elevated)',
                border: '1px solid var(--color-border)',
                borderRadius: 12,
                boxShadow: '0 4px 24px rgba(0, 0, 0, 0.08)',
              }}
            >
              <IconContainer size="lg" className="mb-5">
                {item.icon}
              </IconContainer>
              <h3
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  color: 'var(--color-text-primary)',
                  marginBottom: 12,
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  color: 'var(--color-text-secondary)',
                  lineHeight: 1.6,
                }}
              >
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
