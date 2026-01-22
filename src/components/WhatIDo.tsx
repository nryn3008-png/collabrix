'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion, MotionValue } from 'framer-motion';
import { IconContainer, IconProductDesign, IconDesignSystems, IconAIDevelopment, IconProduction } from './icons';

/**
 * What I Do Section - Cumulative Scroll-Stacking Cards
 *
 * CRITICAL BEHAVIOR:
 * 1. At scroll=0: ONLY card 0 is visible
 * 2. Cards stack CUMULATIVELY - once stacked, position is LOCKED
 * 3. New cards slide up from below and stack underneath previous cards
 * 4. Cards never disappear or replace each other
 * 5. Sticky releases ONLY after all cards are fully stacked
 *
 * SCROLL SEGMENTS (for 4 cards):
 * - 0.00 → 0.25: Card 1 slides up and locks
 * - 0.25 → 0.50: Card 2 slides up and locks
 * - 0.50 → 0.75: Card 3 slides up and locks
 * - 0.75 → 1.00: Buffer for sticky release
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

const CARD_COUNT = expertise.length;
const CARD_HEIGHT = 220;
const CARD_PEEK = 24; // Visible peek of each stacked card

// Card that stacks cumulatively with LOCKED position after animation
function StackingCard({
  item,
  index,
  scrollYProgress,
  totalCards,
}: {
  item: typeof expertise[0];
  index: number;
  scrollYProgress: MotionValue<number>;
  totalCards: number;
}) {
  // First card is always visible and locked at y=0
  if (index === 0) {
    return (
      <div
        className="absolute left-0 right-0 p-6 lg:p-8 bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-xl shadow-sm"
        style={{
          top: 0,
          zIndex: totalCards - index,
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
    );
  }

  // Cards 1-3: Animate during their segment, then LOCK in place
  // Segment size for animation (leaving buffer at end for clean release)
  const animationRange = 0.75; // Use 75% of scroll for stacking
  const segmentSize = animationRange / (totalCards - 1); // Divide among cards 1, 2, 3

  const startProgress = (index - 1) * segmentSize;
  const endProgress = index * segmentSize;

  // Final stacked position
  const stackedY = index * CARD_PEEK;

  // Off-screen starting position
  const hiddenY = CARD_HEIGHT + 100;

  // CLAMPED transform:
  // - Before startProgress: hidden (below viewport)
  // - During startProgress → endProgress: animate to stacked position
  // - After endProgress: LOCKED at stacked position
  const y = useTransform(
    scrollYProgress,
    [0, startProgress, endProgress, 1],
    [hiddenY, hiddenY, stackedY, stackedY]
  );

  return (
    <motion.div
      className="absolute left-0 right-0 p-6 lg:p-8 bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-xl shadow-sm"
      style={{
        top: 0,
        y,
        zIndex: totalCards - index,
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
    </motion.div>
  );
}

export default function WhatIDo() {
  const shouldReduceMotion = useReducedMotion();
  const scrollWrapperRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: scrollWrapperRef,
    offset: ['start start', 'end end'],
  });

  // Total height when all cards are stacked
  const totalStackHeight = CARD_HEIGHT + (CARD_COUNT - 1) * CARD_PEEK;

  // REDUCED MOTION: Static stacked layout
  if (shouldReduceMotion) {
    return (
      <section id="expertise" className="py-20 md:py-32">
        <div className="max-w-[var(--max-width-content)] mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color-text-primary)] tracking-tight mb-4">
              What I bring to the table
            </h2>
            <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl">
              I combine design thinking with technical execution. Here&apos;s how that breaks down.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {expertise.map((item, index) => (
              <div
                key={index}
                className="p-6 lg:p-8 bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-xl"
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

  // ANIMATED VERSION
  return (
    <section id="expertise">
      {/* Section Header - OUTSIDE scroll wrapper */}
      <div className="pt-20 md:pt-32 pb-12">
        <div className="max-w-[var(--max-width-content)] mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color-text-primary)] tracking-tight mb-4">
            What I bring to the table
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl">
            I combine design thinking with technical execution. Here&apos;s how that breaks down.
          </p>
        </div>
      </div>

      {/* Scroll Wrapper - consumes scroll */}
      <div
        ref={scrollWrapperRef}
        style={{
          // Height = enough to complete stacking + small buffer
          height: `${(CARD_COUNT - 1) * 80 + 100}vh`,
        }}
      >
        {/* Sticky Container - stays fixed during scroll */}
        <div
          className="sticky"
          style={{
            top: '10vh',
            height: `calc(80vh)`, // Plenty of room for stack
            overflow: 'visible',
          }}
        >
          <div className="max-w-[var(--max-width-content)] mx-auto px-6 lg:px-8">
            {/* Cards Container - holds stacking cards ONLY */}
            <div
              className="relative max-w-2xl"
              style={{
                height: totalStackHeight,
              }}
            >
              {expertise.map((item, index) => (
                <StackingCard
                  key={index}
                  item={item}
                  index={index}
                  scrollYProgress={scrollYProgress}
                  totalCards={CARD_COUNT}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
