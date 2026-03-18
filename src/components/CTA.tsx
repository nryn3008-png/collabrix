'use client';

import { SectionReveal, StaggerContainer, StaggerItem } from '@/lib/motion';

export default function CTA() {
  return (
    <SectionReveal id="contact" className="py-20 md:py-32">
      <div className="max-w-[var(--max-width-content)] mx-auto px-6 lg:px-8">
        <StaggerContainer className="max-w-2xl mx-auto text-center">
          {/* Headline */}
          <StaggerItem>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[var(--color-text-primary)] tracking-tight mb-6">
              Ready to build something real?
            </h2>
          </StaggerItem>

          {/* Body */}
          <StaggerItem>
            <p className="text-lg text-[var(--color-text-secondary)] mb-10 leading-relaxed">
              If you have an idea, a product that needs design work, or a team that
              needs help shipping—let&apos;s talk. I&apos;m available for freelance and
              contract work.
            </p>
          </StaggerItem>

          {/* CTA Buttons */}
          <StaggerItem>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:amansoni.design@gmail.com"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium bg-[var(--color-accent)] text-[var(--color-bg)] rounded-lg border border-transparent hover:bg-[var(--color-bg)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-all duration-200"
              >
                Get in touch
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
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </a>
              <a
                href="/work"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-[var(--color-text-primary)] border border-[var(--color-border)] rounded-lg hover:bg-[var(--color-bg-elevated)] hover:border-[var(--color-text-tertiary)] transition-colors"
              >
                View my work
              </a>
            </div>
          </StaggerItem>

          {/* Alternative Contact */}
          <StaggerItem>
            <p className="mt-8 text-base text-[var(--color-text-tertiary)]">
              Prefer to schedule a call?{' '}
              <a
                href="https://cal.com/aman-soni-jjx19i/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-text-primary)] underline underline-offset-2 hover:no-underline"
              >
                Book a call
              </a>
            </p>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </SectionReveal>
  );
}
