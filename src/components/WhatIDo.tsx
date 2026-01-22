'use client';

import { SectionReveal, StaggerContainer, StaggerItem } from '@/lib/motion';
import { IconContainer, IconProductDesign, IconDesignSystems, IconAIDevelopment, IconProduction } from './icons';

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

export default function WhatIDo() {
  return (
    <SectionReveal id="expertise" className="py-20 md:py-32">
      <div className="max-w-[var(--max-width-content)] mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color-text-primary)] tracking-tight mb-4">
            What I bring to the table
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl">
            I combine design thinking with technical execution. Here&apos;s how that
            breaks down.
          </p>
        </div>

        {/* Expertise Grid */}
        <StaggerContainer className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {expertise.map((item, index) => (
            <StaggerItem key={index}>
              <div className="h-full p-6 lg:p-8 bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-xl hover:border-[var(--color-text-tertiary)] transition-colors">
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
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </SectionReveal>
  );
}
