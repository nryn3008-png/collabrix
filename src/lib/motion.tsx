'use client';

import { motion, useReducedMotion, Variants } from 'framer-motion';
import { ReactNode } from 'react';

/**
 * Animation Strategy:
 *
 * 1. Subtle fade + small translateY (12-16px) for section reveals
 * 2. Staggered children with tight timing (80ms delay)
 * 3. Single trigger - animations run once on viewport entry
 * 4. Reduced motion support - instant transitions when preferred
 * 5. Mobile-optimized - smaller translate distances
 */

// Base animation config - calm, premium timing
const baseTransition = {
  duration: 0.6,
  ease: [0.22, 1, 0.36, 1] as const, // Custom ease - smooth deceleration
};

// Variants for section reveal
export const sectionVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: baseTransition,
  },
};

// Variants for staggered container
export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

// Variants for staggered items
export const staggerItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 12,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: baseTransition,
  },
};

// Variants for hero (slightly different - appears on load)
export const heroVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 8,
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

// Hero stagger container
export const heroContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

// Viewport trigger settings
const viewportSettings = {
  once: true,       // Only animate once
  amount: 0.15,     // Trigger when 15% visible
  margin: '-50px',  // Start slightly before in view
};

// Section wrapper - reveals entire section on scroll
interface SectionRevealProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function SectionReveal({ children, className = '', id }: SectionRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <section id={id} className={className}>
        {children}
      </section>
    );
  }

  return (
    <motion.section
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
      variants={sectionVariants}
    >
      {children}
    </motion.section>
  );
}

// Stagger container - for grids and lists
interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'ul' | 'ol';
}

export function StaggerContainer({ children, className = '', as = 'div' }: StaggerContainerProps) {
  const shouldReduceMotion = useReducedMotion();
  const Component = motion[as];

  if (shouldReduceMotion) {
    const Element = as;
    return <Element className={className}>{children}</Element>;
  }

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
      variants={staggerContainerVariants}
    >
      {children}
    </Component>
  );
}

// Stagger item - individual items in a staggered container
interface StaggerItemProps {
  children: ReactNode;
  className?: string;
}

export function StaggerItem({ children, className = '' }: StaggerItemProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div className={className} variants={staggerItemVariants}>
      {children}
    </motion.div>
  );
}

// Hero container - for page load animation
interface HeroRevealProps {
  children: ReactNode;
  className?: string;
}

export function HeroReveal({ children, className = '' }: HeroRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      variants={heroContainerVariants}
    >
      {children}
    </motion.div>
  );
}

// Hero item - individual elements in hero
interface HeroItemProps {
  children: ReactNode;
  className?: string;
}

export function HeroItem({ children, className = '' }: HeroItemProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div className={className} variants={heroVariants}>
      {children}
    </motion.div>
  );
}

// Fade in only (no translate) - for subtle elements
export const fadeVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export function FadeIn({ children, className = '' }: { children: ReactNode; className?: string }) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
      variants={fadeVariants}
    >
      {children}
    </motion.div>
  );
}
