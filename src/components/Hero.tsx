'use client';

import { motion, useReducedMotion, Variants } from 'framer-motion';

/**
 * Temporal Storytelling Implementation
 *
 * Sequence:
 * 1. Eyebrow (0ms)
 * 2. Headline (120ms)
 * 3. Subheadline (240ms)
 * 4. CTAs (360ms)
 * 5. Process indicator (600ms+, staggered per step)
 *
 * Motion principles:
 * - Small vertical movement (6px max)
 * - Opacity fade only
 * - Runs once on load, never replays
 * - Respects reduced motion
 */

const processSteps = ['Understand', 'Design', 'Systemize', 'Build', 'Ship'];

// Base timing
const BASE_DELAY = 0.1;
const STAGGER = 0.12;

// Hero content variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: STAGGER,
      delayChildren: BASE_DELAY,
    },
  },
};

const itemVariants: Variants = {
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

// Process indicator variants (appears after main content)
const processContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.7, // After CTAs
      staggerChildren: 0.1,
    },
  },
};

const processStepVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 6,
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

const arrowVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 0.35,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
};

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  // Static render for reduced motion
  if (shouldReduceMotion) {
    return (
      <section className="min-h-screen flex items-start md:items-center pt-20 md:pt-0">
        <div className="max-w-[var(--max-width-content)] mx-auto px-6 lg:px-8 py-16 md:py-24">
          <div>
            <p className="text-sm font-medium text-[var(--color-text-tertiary)] mb-4 tracking-wide uppercase">
              Product Designer & Developer
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-semibold text-[var(--color-text-primary)] leading-[1.1] tracking-tight mb-6">
              I{' '}
              <span className="text-[var(--color-text-secondary)]">design</span>{' '}
              products and{' '}
              <span className="hero-emphasis">build</span>{' '}
              them too.
            </h1>
            <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed mb-10 max-w-2xl">
              Product designer with 4+ years of experience helping founders and teams
              turn ideas into real, working software. From early concepts to shipped
              products—I handle design, systems, and code.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-14">
              <a href="#contact" className="inline-flex items-center justify-center px-6 py-3.5 text-base font-medium bg-[var(--color-accent)] text-[var(--color-bg)] rounded-lg border border-transparent hover:bg-[var(--color-bg)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-all duration-200">
                Let&apos;s build together
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="/work" className="inline-flex items-center justify-center px-6 py-3.5 text-base font-medium text-[var(--color-text-primary)] border border-[var(--color-border)] rounded-lg hover:bg-[var(--color-bg-elevated)] hover:border-[var(--color-text-tertiary)] transition-colors">
                View my work
              </a>
            </div>
            <div className="flex items-center gap-2 text-xs md:text-sm text-[var(--color-text-tertiary)] font-medium">
              {processSteps.map((step, i) => (
                <span key={step} className="flex items-center gap-2">
                  <span>{step}</span>
                  {i < processSteps.length - 1 && <span className="opacity-35">→</span>}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen flex items-start md:items-center pt-20 md:pt-0">
      <div className="max-w-[var(--max-width-content)] mx-auto px-6 lg:px-8 py-16 md:py-24">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* 1. Eyebrow */}
          <motion.p
            className="text-sm font-medium text-[var(--color-text-tertiary)] mb-4 tracking-wide uppercase"
            variants={itemVariants}
          >
            Product Designer & Developer
          </motion.p>

          {/* 2. Headline */}
          <motion.h1
            className="text-4xl md:text-5xl lg:text-[3.5rem] font-semibold text-[var(--color-text-primary)] leading-[1.1] tracking-tight mb-6"
            variants={itemVariants}
          >
            I{' '}
            <span className="text-[var(--color-text-secondary)]">design</span>{' '}
            products and{' '}
            <span className="hero-emphasis">build</span>{' '}
            them too.
          </motion.h1>

          {/* 3. Subheadline */}
          <motion.p
            className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed mb-10 max-w-2xl"
            variants={itemVariants}
          >
            Product designer with 4+ years of experience helping founders and teams
            turn ideas into real, working software. From early concepts to shipped
            products—I handle design, systems, and code.
          </motion.p>

          {/* 4. CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-14"
            variants={itemVariants}
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3.5 text-base font-medium bg-[var(--color-accent)] text-[var(--color-bg)] rounded-lg border border-transparent hover:bg-[var(--color-bg)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-all duration-200"
            >
              Let&apos;s build together
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <a
              href="/work"
              className="inline-flex items-center justify-center px-6 py-3.5 text-base font-medium text-[var(--color-text-primary)] border border-[var(--color-border)] rounded-lg hover:bg-[var(--color-bg-elevated)] hover:border-[var(--color-text-tertiary)] transition-colors"
            >
              View my work
            </a>
          </motion.div>

          {/* 5. Process Indicator - Appears last */}
          <motion.div
            className="flex items-center gap-2 text-xs md:text-sm text-[var(--color-text-tertiary)] font-medium"
            initial="hidden"
            animate="visible"
            variants={processContainerVariants}
          >
            {processSteps.map((step, index) => (
              <motion.span
                key={step}
                className="flex items-center gap-2"
                variants={processStepVariants}
              >
                <span>{step}</span>
                {index < processSteps.length - 1 && (
                  <motion.span variants={arrowVariants}>→</motion.span>
                )}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
