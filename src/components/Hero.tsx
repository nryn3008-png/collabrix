'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { HeroReveal, HeroItem } from '@/lib/motion';

const processSteps = ['Idea', 'Design', 'Build', 'Ship'];

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="min-h-screen flex items-center pt-20 md:pt-0">
      <div className="max-w-[var(--max-width-content)] mx-auto px-6 lg:px-8 py-16 md:py-24">
        <HeroReveal className="max-w-3xl">
          {/* Eyebrow */}
          <HeroItem>
            <p className="text-sm font-medium text-[var(--color-text-tertiary)] mb-4 tracking-wide uppercase">
              Product Designer & Developer
            </p>
          </HeroItem>

          {/* Main Headline */}
          <HeroItem>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[var(--color-text-primary)] leading-[1.1] tracking-tight mb-6">
              I{' '}
              <span className="text-[var(--color-text-secondary)]">design</span>{' '}
              products and{' '}
              <span
                className="text-[var(--color-text-emphasis)] relative inline-block"
                style={{
                  textDecoration: 'underline',
                  textDecorationColor: 'var(--color-emphasis-underline)',
                  textUnderlineOffset: '0.15em',
                  textDecorationThickness: '0.08em',
                }}
              >
                build
              </span>{' '}
              them too.
            </h1>
          </HeroItem>

          {/* Subheadline */}
          <HeroItem>
            <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed mb-10 max-w-2xl">
              Product designer with 4+ years of experience helping founders and teams
              turn ideas into real, working software. From early concepts to shipped
              products—I handle design, systems, and code.
            </p>
          </HeroItem>

          {/* CTAs */}
          <HeroItem>
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3.5 text-base font-medium bg-[var(--color-accent)] text-[var(--color-bg)] rounded-lg hover:bg-[var(--color-accent-hover)] transition-colors"
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
                href="#process"
                className="inline-flex items-center justify-center px-6 py-3.5 text-base font-medium text-[var(--color-text-primary)] border border-[var(--color-border)] rounded-lg hover:bg-[var(--color-bg-elevated)] hover:border-[var(--color-text-tertiary)] transition-colors"
              >
                See how I work
              </a>
            </div>
          </HeroItem>

          {/* Process Flow - Text-based motion element */}
          <HeroItem>
            <div className="pt-8 border-t border-[var(--color-border-subtle)]">
              <div className="flex items-center gap-3 md:gap-4 flex-wrap">
                {processSteps.map((step, index) => (
                  <div key={step} className="flex items-center gap-3 md:gap-4">
                    {shouldReduceMotion ? (
                      <span className="text-sm md:text-base font-medium text-[var(--color-text-tertiary)]">
                        {step}
                      </span>
                    ) : (
                      <motion.span
                        className="text-sm md:text-base font-medium text-[var(--color-text-tertiary)]"
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.4,
                          delay: 0.8 + index * 0.15,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      >
                        {step}
                      </motion.span>
                    )}
                    {index < processSteps.length - 1 && (
                      shouldReduceMotion ? (
                        <span className="text-[var(--color-text-tertiary)] opacity-40">
                          →
                        </span>
                      ) : (
                        <motion.span
                          className="text-[var(--color-text-tertiary)] opacity-40"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 0.4 }}
                          transition={{
                            duration: 0.3,
                            delay: 0.95 + index * 0.15,
                            ease: 'easeOut',
                          }}
                        >
                          →
                        </motion.span>
                      )
                    )}
                  </div>
                ))}
              </div>
            </div>
          </HeroItem>
        </HeroReveal>
      </div>
    </section>
  );
}
