'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { IconContainer, IconProductDesign, IconDesignSystems, IconAIDevelopment, IconProduction } from './icons';

/**
 * What I Do Section - Temporal Storytelling (Chapter 3)
 *
 * DIFFERENT APPROACH from Hero/About:
 * - No reveal animations - all cards visible immediately
 * - Emphasis SHIFTS across cards one by one
 * - Guides reading without decorating with motion
 *
 * Sequence:
 * 1. Section enters viewport
 * 2. Heading settles (minimal)
 * 3. Cards are all visible
 * 4. Emphasis moves: Card 1 → Card 2 → Card 3 → Card 4
 * 5. After one pass, emphasis clears - motion complete
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

// Timing for emphasis shift
const EMPHASIS_DELAY = 400; // Initial delay after viewport entry
const EMPHASIS_DURATION = 800; // How long each card stays emphasized
const EMPHASIS_TRANSITION = 250; // CSS transition duration

export default function WhatIDo() {
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const [emphasizedIndex, setEmphasizedIndex] = useState<number | null>(null);
  const [sequenceComplete, setSequenceComplete] = useState(false);

  // Run emphasis sequence when section enters view
  useEffect(() => {
    if (!isInView || shouldReduceMotion || sequenceComplete) return;

    const timeouts: NodeJS.Timeout[] = [];

    // Start sequence after initial delay
    const startSequence = setTimeout(() => {
      expertise.forEach((_, index) => {
        // Set emphasis for this card
        const emphasizeTimeout = setTimeout(() => {
          setEmphasizedIndex(index);
        }, index * EMPHASIS_DURATION);
        timeouts.push(emphasizeTimeout);

        // Clear emphasis after last card
        if (index === expertise.length - 1) {
          const clearTimeout = setTimeout(() => {
            setEmphasizedIndex(null);
            setSequenceComplete(true);
          }, (index + 1) * EMPHASIS_DURATION);
          timeouts.push(clearTimeout);
        }
      });
    }, EMPHASIS_DELAY);
    timeouts.push(startSequence);

    return () => timeouts.forEach(clearTimeout);
  }, [isInView, shouldReduceMotion, sequenceComplete]);

  // Static render for reduced motion
  if (shouldReduceMotion) {
    return (
      <section id="expertise" className="py-20 md:py-32" ref={sectionRef}>
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
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="expertise" className="py-20 md:py-32" ref={sectionRef}>
      <div className="max-w-[var(--max-width-content)] mx-auto px-6 lg:px-8">
        {/* Section Header - minimal settle animation */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 6 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color-text-primary)] tracking-tight mb-4">
            What I bring to the table
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl">
            I combine design thinking with technical execution. Here&apos;s how that breaks down.
          </p>
        </motion.div>

        {/* Cards Grid - all visible, emphasis shifts */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {expertise.map((item, index) => {
            const isEmphasized = emphasizedIndex === index;

            return (
              <div
                key={index}
                className="card-hover-effect h-full p-6 lg:p-8 rounded-xl"
                style={{
                  backgroundColor: isEmphasized
                    ? 'rgba(250, 252, 255, 1)'
                    : 'var(--color-bg-elevated)',
                  borderWidth: '1px',
                  borderStyle: 'solid',
                  borderColor: isEmphasized
                    ? 'rgba(80, 120, 200, 0.2)'
                    : 'var(--color-border)',
                  boxShadow: isEmphasized
                    ? '0 4px 20px rgba(80, 120, 200, 0.08), 0 0 0 1px rgba(80, 120, 200, 0.05)'
                    : 'none',
                  transition: `
                    background-color ${EMPHASIS_TRANSITION}ms ease,
                    border-color ${EMPHASIS_TRANSITION}ms ease,
                    box-shadow ${EMPHASIS_TRANSITION}ms ease
                  `,
                }}
              >
                <div className="card-hover-content">
                  <div
                    style={{
                      transition: `transform ${EMPHASIS_TRANSITION}ms ease`,
                      transform: isEmphasized ? 'scale(1.02)' : 'scale(1)',
                    }}
                  >
                    <IconContainer size="lg" className="mb-5">
                      {item.icon}
                    </IconContainer>
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
