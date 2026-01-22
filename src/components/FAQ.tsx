'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { SectionReveal, StaggerContainer, StaggerItem } from '@/lib/motion';

/**
 * FAQ Section - Accordion Style
 *
 * PURPOSE:
 * - Reduce user hesitation before conversion
 * - Address common doubts and questions
 * - Build trust through transparency
 *
 * INTERACTION:
 * - Single accordion (one open at a time)
 * - Smooth expand/collapse animation
 * - Keyboard accessible
 * - Screen reader friendly
 *
 * STYLING:
 * - Calm, minimal aesthetic
 * - Subtle dividers between items
 * - Comfortable reading width
 */

// ============================================
// TYPES
// ============================================
interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items?: FAQItem[];
}

// ============================================
// FAQ DATA
// ============================================
const faqItems: FAQItem[] = [
  {
    question: 'What does working with you actually look like?',
    answer:
      "We work closely and directly. No layers, no handoffs.\nWe start by understanding the problem, then design and build in small, practical steps. You always know what's happening and why.",
  },
  {
    question: 'Are you a designer or a developer?',
    answer:
      'Both.\nI design with implementation in mind and build without losing design intent. That keeps things faster, cleaner, and more cohesive.',
  },
  {
    question: 'How are you different from an agency or studio?',
    answer:
      'You work directly with me.\nThat means full context, faster decisions, and clearer trade-offs. No account managers, no fragmented ownership.',
  },
  {
    question: 'What kind of projects are you best suited for?',
    answer:
      "Early-stage products, complex ideas, and teams that value clarity.\nI'm especially useful when things are still evolving or need structure before scaling.",
  },
  {
    question: 'How involved do I need to be as a client?',
    answer:
      "Involved, but not overloaded.\nClear feedback and timely decisions make the work better. I'll guide the process and keep it focused.",
  },
  {
    question: 'Do you work on fixed scope or ongoing engagements?',
    answer:
      "Both.\nSome problems need a defined scope. Others work better as an ongoing partnership. We'll decide once the problem is clear.",
  },
  {
    question: "What if I'm not sure about the solution yet?",
    answer:
      "That's completely fine.\nYou don't need a perfect brief. Figuring out what to build is part of the work.",
  },
  {
    question: 'When might I not be the right fit?',
    answer:
      'If you need a large team, heavy process, or pure execution.\nI work best with trust, speed, and room to think.',
  },
];

// ============================================
// CHEVRON ICON
// ============================================
function ChevronIcon({ isOpen }: { isOpen: boolean }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      animate={{ rotate: isOpen ? 180 : 0 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.2,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="text-[var(--color-text-tertiary)] flex-shrink-0"
    >
      <polyline points="6 9 12 15 18 9" />
    </motion.svg>
  );
}

// ============================================
// FAQ ITEM COMPONENT
// ============================================
interface FAQItemProps {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
  isLast: boolean;
}

function FAQItemComponent({ item, isOpen, onToggle, isLast }: FAQItemProps) {
  const shouldReduceMotion = useReducedMotion();

  const duration = shouldReduceMotion ? 0 : 0.25;

  return (
    <div
      className={`${
        !isLast ? 'border-b border-[var(--color-border)]' : ''
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between gap-4 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-text-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]"
      >
        <span className="text-base md:text-lg font-medium text-[var(--color-text-primary)] leading-snug">
          {item.question}
        </span>
        <ChevronIcon isOpen={isOpen} />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: { duration, ease: [0.22, 1, 0.36, 1] },
              opacity: { duration: duration * 0.8 },
            }}
            className="overflow-hidden"
          >
            <div className="pb-5 pr-10">
              <p className="text-[var(--color-text-secondary)] leading-relaxed whitespace-pre-line">
                {item.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ============================================
// MAIN FAQ COMPONENT
// ============================================
export default function FAQ({ items = faqItems }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = useCallback((index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  }, []);

  // Don't render if no items
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <SectionReveal id="faq" className="py-20 md:py-32">
      <div className="max-w-[var(--max-width-content)] mx-auto px-6 lg:px-8">
        <StaggerContainer>
          {/* Section Header */}
          <StaggerItem>
            <div className="mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color-text-primary)] tracking-tight mb-4">
                Frequently asked questions
              </h2>
              <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl">
                Common questions about working together. If you don&apos;t see yours here, feel free to reach out.
              </p>
            </div>
          </StaggerItem>

          {/* FAQ List */}
          <StaggerItem>
            <div>
              {items.map((item, index) => (
                <FAQItemComponent
                  key={index}
                  item={item}
                  isOpen={openIndex === index}
                  onToggle={() => handleToggle(index)}
                  isLast={index === items.length - 1}
                />
              ))}
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </SectionReveal>
  );
}
