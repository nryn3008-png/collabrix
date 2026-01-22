'use client';

import { useRef } from 'react';
import { motion, useInView, useReducedMotion, Variants } from 'framer-motion';
import { IconContainer, IconProductDesign, IconDesignSystems, IconAIDevelopment, IconProduction } from './icons';

/**
 * What I Do Section - Step-by-Step Card Reveal
 *
 * Pattern: Each card reveals independently when it enters viewport
 * - Fade + small translateY (8px)
 * - 400ms duration, staggered by position
 * - Runs once, no replay on scroll up
 * - Hover effects remain separate
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
      'I don\'t stop at mockups. I build working prototypes, deploy to Vercel, and iterate based on real usage. The gap between "designed" and "shipped" is where most projects stall. I close that gap.',
    icon: <IconProduction size={24} />,
  },
];

// Card reveal variants
const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 8,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Header variants
const headerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 6,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Individual card component with viewport detection
function ExpertiseCard({
  item,
  index,
  shouldReduceMotion,
}: {
  item: typeof expertise[0];
  index: number;
  shouldReduceMotion: boolean | null;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, {
    once: true,
    amount: 0.3,
    margin: '-50px',
  });

  // Static render for reduced motion
  if (shouldReduceMotion) {
    return (
      <div
        ref={cardRef}
        className="card-hover-effect h-full p-6 lg:p-8 bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-xl"
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
      ref={cardRef}
      className="card-hover-effect h-full p-6 lg:p-8 bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-xl"
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={cardVariants}
      style={{
        // Small stagger based on position for cards entering together
        transitionDelay: `${index * 0.08}s`,
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
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, amount: 0.5 });

  return (
    <section id="expertise" className="py-20 md:py-32">
      <div className="max-w-[var(--max-width-content)] mx-auto px-6 lg:px-8">
        {/* Section Header */}
        {shouldReduceMotion ? (
          <div className="mb-16" ref={headerRef}>
            <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color-text-primary)] tracking-tight mb-4">
              What I bring to the table
            </h2>
            <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl">
              I combine design thinking with technical execution. Here&apos;s how that breaks down.
            </p>
          </div>
        ) : (
          <motion.div
            ref={headerRef}
            className="mb-16"
            initial="hidden"
            animate={headerInView ? 'visible' : 'hidden'}
            variants={headerVariants}
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color-text-primary)] tracking-tight mb-4">
              What I bring to the table
            </h2>
            <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl">
              I combine design thinking with technical execution. Here&apos;s how that breaks down.
            </p>
          </motion.div>
        )}

        {/* Cards Grid - each card reveals independently */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {expertise.map((item, index) => (
            <ExpertiseCard
              key={index}
              item={item}
              index={index}
              shouldReduceMotion={shouldReduceMotion}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
