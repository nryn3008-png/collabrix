'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion, MotionValue } from 'framer-motion';
import { IconContainer, IconProductDesign, IconDesignSystems, IconAIDevelopment, IconProduction } from './icons';

/**
 * What I Do Section - Scroll-Stacking Cards
 *
 * STRUCTURE (critical for correct behavior):
 *
 * <section>
 *   <SectionHeader />                    ← OUTSIDE sticky, normal flow
 *   <ScrollWrapper height={N * 100vh}>   ← Consumes scroll
 *     <StickyContainer top={15vh}>       ← Stays fixed
 *       <CardsContainer>                 ← Holds stacking cards ONLY
 *         {StackingCards}
 *       </CardsContainer>
 *     </StickyContainer>
 *   </ScrollWrapper>
 * </section>
 *
 * Scroll Ownership:
 * - Extended height wrapper creates scrollable area
 * - Sticky container stays fixed while scrolling through wrapper
 * - Scroll progress (0→1) maps to card positions
 * - When progress hits 100%, sticky releases and normal scroll resumes
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
const CARD_HEIGHT = 220; // Card height in pixels
const CARD_PEEK = 20; // How much each card peeks out below

// Individual stacking card - position absolute, scroll-driven translateY
function StackingCard({
  item,
  index,
  scrollYProgress,
}: {
  item: typeof expertise[0];
  index: number;
  scrollYProgress: MotionValue<number>;
}) {
  // Scroll segments: divide 0→1 into equal parts per card
  // Card 0: visible from start
  // Card 1: animates during 0.00 → 0.33
  // Card 2: animates during 0.33 → 0.66
  // Card 3: animates during 0.66 → 1.00
  const segmentSize = 1 / CARD_COUNT;
  const startProgress = index * segmentSize;
  const endProgress = (index + 1) * segmentSize;

  // Final stacked position: each card peeks below the previous
  const stackedY = index * CARD_PEEK;

  // Animate from below viewport to stacked position
  const y = useTransform(
    scrollYProgress,
    [startProgress, endProgress],
    [CARD_HEIGHT + 100, stackedY]
  );

  // First card: no animation needed, always at top
  if (index === 0) {
    return (
      <div
        className="absolute left-0 right-0 p-6 lg:p-8 bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-xl shadow-sm"
        style={{
          top: 0,
          zIndex: CARD_COUNT - index, // Card 0 = highest z-index
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

  // Cards 1-3: scroll-driven animation
  return (
    <motion.div
      className="absolute left-0 right-0 p-6 lg:p-8 bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-xl shadow-sm"
      style={{
        top: 0,
        y,
        zIndex: CARD_COUNT - index, // Lower index = higher z-index
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

  // Track scroll progress through the scroll wrapper ONLY
  const { scrollYProgress } = useScroll({
    target: scrollWrapperRef,
    offset: ['start start', 'end end'],
  });

  // Total height of stacked cards
  const totalStackHeight = CARD_HEIGHT + (CARD_COUNT - 1) * CARD_PEEK;

  // REDUCED MOTION: Static grid layout, no sticky behavior
  if (shouldReduceMotion) {
    return (
      <section id="expertise" className="py-20 md:py-32">
        <div className="max-w-[var(--max-width-content)] mx-auto px-6 lg:px-8">
          {/* Section Header - normal flow */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color-text-primary)] tracking-tight mb-4">
              What I bring to the table
            </h2>
            <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl">
              I combine design thinking with technical execution. Here&apos;s how that breaks down.
            </p>
          </div>

          {/* Static grid - no animation */}
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

  // ANIMATED VERSION: Scroll-stacking with sticky container
  return (
    <section id="expertise">
      {/* ========== SECTION HEADER - OUTSIDE STICKY ========== */}
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

      {/* ========== SCROLL WRAPPER - CONSUMES SCROLL ========== */}
      <div
        ref={scrollWrapperRef}
        style={{
          height: `${CARD_COUNT * 100}vh`, // Extended height to consume scroll
        }}
      >
        {/* ========== STICKY CONTAINER - STAYS FIXED ========== */}
        <div
          className="sticky"
          style={{
            top: '12vh',
            height: '76vh', // Constrain height to prevent overflow
            display: 'flex',
            alignItems: 'flex-start',
          }}
        >
          <div className="max-w-[var(--max-width-content)] mx-auto px-6 lg:px-8 w-full">
            {/* ========== CARDS CONTAINER - STACKING AREA ONLY ========== */}
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
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ========== BOTTOM PADDING - AFTER STICKY RELEASES ========== */}
      <div className="pb-20 md:pb-32" />
    </section>
  );
}
