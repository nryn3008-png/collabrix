'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion, MotionValue } from 'framer-motion';
import { IconContainer, IconProductDesign, IconDesignSystems, IconAIDevelopment, IconProduction } from './icons';

/**
 * What I Do Section - Scroll-Stacking Cards
 *
 * Pattern: Sticky container with scroll-driven card stacking
 *
 * How it works:
 * 1. Outer wrapper has extended height (cards × 100vh)
 * 2. Inner sticky container stays fixed during scroll
 * 3. Scroll progress drives card translateY (cards stack from bottom)
 * 4. Once all cards stacked, sticky releases and normal scroll resumes
 *
 * The scroll is "consumed" by the extended height - the viewport stays
 * on the sticky container while scroll input advances the card stack.
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
const CARD_HEIGHT = 220; // Approximate card height in pixels
const CARD_OFFSET = 16; // Vertical offset between stacked cards

// Individual stacking card
function StackingCard({
  item,
  index,
  scrollYProgress,
}: {
  item: typeof expertise[0];
  index: number;
  scrollYProgress: MotionValue<number>;
}) {
  // Calculate scroll range for this card
  // Card 0: already visible (no animation needed)
  // Card 1: animates in during 0.0-0.33
  // Card 2: animates in during 0.33-0.66
  // Card 3: animates in during 0.66-1.0
  const segmentSize = 1 / CARD_COUNT;
  const startProgress = index * segmentSize;
  const endProgress = (index + 1) * segmentSize;

  // Card starts below (translateY = 100%) and moves to its stacked position
  // First card is always at position 0, subsequent cards stack with offset
  const targetY = index * CARD_OFFSET;

  const y = useTransform(
    scrollYProgress,
    [startProgress, endProgress],
    [CARD_HEIGHT + 50, targetY] // Start off-screen, end at stacked position
  );

  // First card doesn't need animation - it's always visible
  if (index === 0) {
    return (
      <div
        className="absolute left-0 right-0 card-hover-effect p-6 lg:p-8 bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-xl"
        style={{
          top: 0,
          zIndex: CARD_COUNT - index, // First card has highest z-index
        }}
      >
        <div className="card-hover-content">
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
    );
  }

  return (
    <motion.div
      className="absolute left-0 right-0 card-hover-effect p-6 lg:p-8 bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-xl"
      style={{
        top: 0,
        y,
        zIndex: CARD_COUNT - index, // Higher index = lower z-index (stacks underneath)
      }}
    >
      <div className="card-hover-content">
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
    </motion.div>
  );
}

export default function WhatIDo() {
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);

  // Track scroll progress through the extended-height section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  // Static stacked layout for reduced motion
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
                className="card-hover-effect p-6 lg:p-8 bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-xl"
              >
                <div className="card-hover-content">
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

  // Calculate total stack height when all cards are stacked
  const totalStackHeight = CARD_HEIGHT + (CARD_COUNT - 1) * CARD_OFFSET;

  return (
    <section id="expertise">
      {/* Extended height wrapper - this is what gets scrolled through */}
      <div
        ref={sectionRef}
        style={{
          height: `${CARD_COUNT * 100}vh`, // Extended scroll height
        }}
      >
        {/* Sticky container - stays fixed while scrolling through wrapper */}
        <div
          className="sticky"
          style={{
            top: '15vh', // Positioned from top of viewport
            paddingTop: '2rem',
            paddingBottom: '2rem',
          }}
        >
          <div className="max-w-[var(--max-width-content)] mx-auto px-6 lg:px-8">
            {/* Section Header */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color-text-primary)] tracking-tight mb-4">
                What I bring to the table
              </h2>
              <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl">
                I combine design thinking with technical execution. Here&apos;s how that breaks down.
              </p>
            </div>

            {/* Stacking cards container */}
            <div
              className="relative max-w-2xl"
              style={{
                height: totalStackHeight, // Reserve space for all stacked cards
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
    </section>
  );
}
