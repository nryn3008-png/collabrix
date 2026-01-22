'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion, MotionValue } from 'framer-motion';
import { IconContainer, IconProductDesign, IconDesignSystems, IconAIDevelopment, IconProduction } from './icons';

/**
 * What I Do Section - Scroll-Linked Step Progression
 *
 * Pattern: Scroll-driven animation
 * - As user scrolls, each card becomes "active" in sequence
 * - Active card is highlighted with border glow, others are calm/neutral
 * - Scroll position drives which card is currently emphasized
 * - Runs once per page load, respects reduced motion
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

// Calculate which card should be active based on scroll progress
function useActiveIndex(scrollYProgress: MotionValue<number>, totalCards: number): MotionValue<number> {
  // Map scroll progress (0-1) to card index with some padding
  // 0.15 start padding, 0.85 end padding to allow first and last to be fully visible
  return useTransform(scrollYProgress, [0.1, 0.9], [0, totalCards - 1]);
}

// Individual card with scroll-linked active state
function ExpertiseCard({
  item,
  index,
  activeIndex,
  shouldReduceMotion,
}: {
  item: typeof expertise[0];
  index: number;
  activeIndex: MotionValue<number>;
  shouldReduceMotion: boolean | null;
}) {
  // Transform active index to opacity and scale for this card
  const opacity = useTransform(activeIndex, (latest) => {
    const distance = Math.abs(latest - index);
    if (distance < 0.5) return 1;
    if (distance < 1.5) return 0.5;
    return 0.35;
  });

  const scale = useTransform(activeIndex, (latest) => {
    const distance = Math.abs(latest - index);
    if (distance < 0.5) return 1;
    return 0.98;
  });

  const borderOpacity = useTransform(activeIndex, (latest) => {
    const distance = Math.abs(latest - index);
    if (distance < 0.5) return 1;
    return 0;
  });

  // Static render for reduced motion
  if (shouldReduceMotion) {
    return (
      <div className="card-hover-effect p-6 lg:p-8 bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-xl">
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
      style={{ opacity }}
    >
      <motion.div
        className="card-hover-effect p-6 lg:p-8 bg-[var(--color-bg-elevated)] rounded-xl transition-colors duration-300"
        style={{
          scale,
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: useTransform(borderOpacity, (o) =>
            o > 0.5 ? 'rgba(80, 120, 200, 0.35)' : 'var(--color-border)'
          ),
          boxShadow: useTransform(borderOpacity, (o) =>
            o > 0.5
              ? '0 4px 24px rgba(80, 120, 200, 0.12), 0 0 0 1px rgba(80, 120, 200, 0.08)'
              : 'none'
          ),
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
    </motion.div>
  );
}

export default function WhatIDo() {
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress through the section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Calculate active card index based on scroll
  const activeIndex = useActiveIndex(scrollYProgress, expertise.length);

  // Header animation based on scroll
  const headerOpacity = useTransform(scrollYProgress, [0, 0.15], [0, 1]);
  const headerY = useTransform(scrollYProgress, [0, 0.15], [20, 0]);

  // Static render for reduced motion
  if (shouldReduceMotion) {
    return (
      <section id="expertise" className="py-20 md:py-32" ref={sectionRef}>
        <div className="max-w-[var(--max-width-content)] mx-auto px-6 lg:px-8">
          <div className="mb-16" ref={headerRef}>
            <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color-text-primary)] tracking-tight mb-4">
              What I bring to the table
            </h2>
            <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl">
              I combine design thinking with technical execution. Here&apos;s how that breaks down.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {expertise.map((item, index) => (
              <ExpertiseCard
                key={index}
                item={item}
                index={index}
                activeIndex={activeIndex}
                shouldReduceMotion={shouldReduceMotion}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="expertise" className="py-20 md:py-32" ref={sectionRef}>
      <div className="max-w-[var(--max-width-content)] mx-auto px-6 lg:px-8">
        {/* Section Header - fades in as section enters */}
        <motion.div
          ref={headerRef}
          className="mb-16"
          style={{
            opacity: headerOpacity,
            y: headerY,
          }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color-text-primary)] tracking-tight mb-4">
            What I bring to the table
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl">
            I combine design thinking with technical execution. Here&apos;s how that breaks down.
          </p>
        </motion.div>

        {/* Cards Grid - scroll-linked active state */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {expertise.map((item, index) => (
            <ExpertiseCard
              key={index}
              item={item}
              index={index}
              activeIndex={activeIndex}
              shouldReduceMotion={shouldReduceMotion}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
