'use client';

import { IconContainer, IconProductDesign, IconDesignSystems, IconAIDevelopment, IconProduction } from './icons';

/**
 * What I Do Section - Two-Phase Scroll Model
 *
 * PHASE 1 — INTRODUCTION
 * - Section header scrolls normally
 * - Header is NOT sticky
 * - Header disappears under global nav naturally
 *
 * PHASE 2 — INTERACTION
 * - Cards are the ONLY sticky elements
 * - Cards stack progressively
 * - Cards pause briefly, then release
 * - Section exits cleanly
 *
 * NO competing sticky layers. NO transforms. NO JS scroll logic.
 */

// ============================================
// CONSTANTS
// ============================================
const NAV_HEIGHT = 72;
const STACK_OFFSET = 24;
const PAUSE_BUFFER = 80;
const CARD_COUNT = 4;

// Stack boundary scroll range
// Cards already occupy height in normal flow — do NOT include card heights
// Only account for: stacking offsets + brief pause
const SCROLL_RANGE = (CARD_COUNT - 1) * STACK_OFFSET + PAUSE_BUFFER;

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

      {/* ========================================
          PHASE 1 — INTRODUCTION
          Normal scroll. NOT sticky.
          Header scrolls away naturally.
          ======================================== */}
      <div
        style={{
          paddingTop: 80,
          paddingBottom: 48,
          paddingLeft: 24,
          paddingRight: 24,
          maxWidth: 'var(--max-width-content)',
          marginLeft: 'auto',
          marginRight: 'auto',
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
            maxWidth: 720,
            lineHeight: 1.6,
          }}
        >
          I combine design thinking with technical execution. Here&apos;s how that breaks down.
        </p>
      </div>

      {/* ========================================
          PHASE 2 — INTERACTION
          Cards are the ONLY sticky elements.
          Stack boundary defines scroll range.
          ======================================== */}
      <div
        style={{
          overflow: 'visible',
          paddingLeft: 24,
          paddingRight: 24,
          paddingBottom: SCROLL_RANGE,
          maxWidth: 'var(--max-width-content)',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        {/* Cards span full container width */}
        <div style={{ width: '100%', overflow: 'visible' }}>
          {expertise.map((item, i) => (
            <article
              key={i}
              style={{
                position: 'sticky',
                top: NAV_HEIGHT + i * STACK_OFFSET,
                zIndex: 10 + i,
                marginBottom: 24,
                padding: '32px 40px',
                backgroundColor: 'var(--color-bg-elevated)',
                border: '1px solid var(--color-border)',
                borderRadius: 16,
                boxShadow: '0 4px 24px rgba(0, 0, 0, 0.08)',
              }}
            >
              <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start' }}>
                <IconContainer size="lg" className="flex-shrink-0">
                  {item.icon}
                </IconContainer>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h3
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 600,
                      color: 'var(--color-text-primary)',
                      marginBottom: 8,
                    }}
                  >
                    {item.title}
                  </h3>
                  {/* Text max-width for readability */}
                  <p
                    style={{
                      color: 'var(--color-text-secondary)',
                      lineHeight: 1.6,
                      maxWidth: 640,
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

    </section>
  );
}
