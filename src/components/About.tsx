'use client';

import Image from 'next/image';
import { motion, useReducedMotion, Variants } from 'framer-motion';

/**
 * About Section - Temporal Storytelling (Chapter 2)
 *
 * Three intentional beats:
 * 1. CONTEXT - Headline + Avatar (who I am, reframed)
 * 2. EXPERIENCE - Body paragraphs (why I work this way)
 * 3. PRINCIPLE - Closing philosophy (definitive statement)
 *
 * Animations:
 * - Triggered on viewport entry
 * - Runs once, no replay
 * - Slower, more grounded than hero
 */

// Variants - slightly slower than hero for grounded feel
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 8,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const experienceVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3, // After headline settles
    },
  },
};

const paragraphVariants: Variants = {
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

const principleVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 6,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.8, // Appears last, after body text
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Viewport settings - trigger once
const viewportConfig = {
  once: true,
  amount: 0.3,
  margin: '-50px',
};

export default function About() {
  const shouldReduceMotion = useReducedMotion();

  // Static render for reduced motion
  if (shouldReduceMotion) {
    return (
      <section id="about" className="py-20 md:py-32 bg-[var(--color-bg-elevated)]">
        <div className="max-w-[var(--max-width-content)] mx-auto px-6 lg:px-8">
          <p className="text-sm font-medium text-[var(--color-text-tertiary)] mb-8 tracking-wide uppercase">
            About
          </p>

          <div className="grid md:grid-cols-[180px_1fr] lg:grid-cols-[200px_1fr] gap-10 md:gap-14">
            <div className="flex-shrink-0">
              <Image
                src="/avatar.jpg"
                alt="Aman Soni"
                width={200}
                height={200}
                className="rounded-2xl object-cover border border-[var(--color-border)] w-28 h-28 md:w-full md:h-auto md:aspect-square"
                priority
              />
            </div>

            <div className="">
              <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color-text-primary)] tracking-tight mb-8 leading-snug">
                I bridge the gap between design and engineering—so products ship faster and better.
              </h2>

              <div className="space-y-4 text-[var(--color-text-secondary)] leading-relaxed mb-10">
                <p>
                  4+ years across startups and product teams taught me that the best work happens
                  when design and development aren&apos;t siloed. I got tired of handing off mockups
                  and watching them get lost in translation.
                </p>
                <p>
                  So I learned to build. Now I design with real systems—Figma variables, tokens,
                  scalable components—and write production code using AI-assisted tools. Fewer
                  handoffs. Faster iteration. Products that actually ship.
                </p>
              </div>

              <p className="text-base md:text-lg font-medium text-[var(--color-text-primary)]">
                One person. Full context. From idea to production.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="about" className="py-20 md:py-32 bg-[var(--color-bg-elevated)]">
      <div className="max-w-[var(--max-width-content)] mx-auto px-6 lg:px-8">
        {/* Section Label */}
        <motion.p
          className="text-sm font-medium text-[var(--color-text-tertiary)] mb-8 tracking-wide uppercase"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportConfig}
          transition={{ duration: 0.4 }}
        >
          About
        </motion.p>

        <div className="grid md:grid-cols-[180px_1fr] lg:grid-cols-[200px_1fr] gap-10 md:gap-14">
          {/* Avatar - appears with context */}
          <motion.div
            className="flex-shrink-0"
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={itemVariants}
          >
            <Image
              src="/avatar.jpg"
              alt="Aman Soni"
              width={200}
              height={200}
              className="rounded-2xl object-cover border border-[var(--color-border)] w-28 h-28 md:w-full md:h-auto md:aspect-square"
              priority
            />
          </motion.div>

          {/* Content Column */}
          <motion.div
            className=""
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={containerVariants}
          >
            {/* Beat 1: CONTEXT - Headline */}
            <motion.h2
              className="text-2xl md:text-3xl font-semibold text-[var(--color-text-primary)] tracking-tight mb-8 leading-snug"
              variants={itemVariants}
            >
              I bridge the gap between design and engineering—so products ship faster and better.
            </motion.h2>

            {/* Beat 2: EXPERIENCE - Body paragraphs */}
            <motion.div
              className="space-y-4 text-[var(--color-text-secondary)] leading-relaxed mb-10"
              variants={experienceVariants}
            >
              <motion.p variants={paragraphVariants}>
                4+ years across startups and product teams taught me that the best work happens
                when design and development aren&apos;t siloed. I got tired of handing off mockups
                and watching them get lost in translation.
              </motion.p>
              <motion.p variants={paragraphVariants}>
                So I learned to build. Now I design with real systems—Figma variables, tokens,
                scalable components—and write production code using AI-assisted tools. Fewer
                handoffs. Faster iteration. Products that actually ship.
              </motion.p>
            </motion.div>

            {/* Beat 3: PRINCIPLE - Closing philosophy */}
            <motion.p
              className="text-base md:text-lg font-medium text-[var(--color-text-primary)]"
              variants={principleVariants}
            >
              One person. Full context. From idea to production.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
