'use client';

import { HeroReveal, HeroItem } from '@/lib/motion';

export default function Hero() {
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
            <div className="flex flex-col sm:flex-row gap-4">
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
        </HeroReveal>
      </div>
    </section>
  );
}
