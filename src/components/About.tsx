'use client';

import Image from 'next/image';
import { SectionReveal, StaggerContainer, StaggerItem } from '@/lib/motion';

export default function About() {
  return (
    <SectionReveal id="about" className="py-20 md:py-32 bg-[var(--color-bg-elevated)]">
      <div className="max-w-[var(--max-width-content)] mx-auto px-6 lg:px-8">
        {/* Section Label */}
        <p className="text-sm font-medium text-[var(--color-text-tertiary)] mb-4 tracking-wide uppercase">
          About
        </p>

        <div className="grid md:grid-cols-[200px_1fr] lg:grid-cols-[240px_1fr] gap-10 md:gap-16">
          {/* Avatar Column */}
          <div className="flex-shrink-0">
            <Image
              src="/avatar.jpg"
              alt="Aman Soni"
              width={200}
              height={200}
              className="rounded-2xl object-cover border border-[var(--color-border)] w-32 h-32 md:w-full md:h-auto md:aspect-square"
              priority
            />
          </div>

          {/* Content Column */}
          <StaggerContainer className="max-w-xl">
            <StaggerItem>
              <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color-text-primary)] tracking-tight mb-6 leading-snug">
                I&apos;m Aman—a product designer who writes code and ships real products.
              </h2>
            </StaggerItem>

            <div className="space-y-4 text-[var(--color-text-secondary)] leading-relaxed">
              <StaggerItem>
                <p>
                  Over the past 4+ years, I&apos;ve worked across startups and product teams,
                  designing everything from MVPs to complex SaaS platforms. But I got tired
                  of handing off designs and watching them get lost in translation.
                </p>
              </StaggerItem>

              <StaggerItem>
                <p>
                  So I learned to build. Now I design in Figma with real systems—variables,
                  tokens, scalable components—and then I write the code myself using AI-assisted
                  tools like Claude Code. The result: fewer handoffs, faster iteration, and
                  products that actually ship.
                </p>
              </StaggerItem>

              <StaggerItem>
                <p>
                  I think the best products come from people who understand both sides.
                  When you can see the constraints of code while designing, you make better
                  decisions. When you understand design intent while building, you don&apos;t
                  cut corners. That&apos;s how I work.
                </p>
              </StaggerItem>
            </div>
          </StaggerContainer>
        </div>
      </div>
    </SectionReveal>
  );
}
