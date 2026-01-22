import { ReactNode } from 'react';

/**
 * Icon Container System
 *
 * Visual Design:
 * - Dark neutral background (#1a1a1a)
 * - Rounded corners (12px radius)
 * - Soft ambient shadow for depth
 * - Subtle inner glow for premium feel
 *
 * Sizing:
 * - sm: 40x40px container, 20px icon
 * - md: 48x48px container, 24px icon (default)
 * - lg: 56x56px container, 28px icon
 */

type IconSize = 'sm' | 'md' | 'lg';

interface IconContainerProps {
  children: ReactNode;
  size?: IconSize;
  className?: string;
}

const sizeClasses: Record<IconSize, string> = {
  sm: 'w-10 h-10',
  md: 'w-12 h-12',
  lg: 'w-14 h-14',
};

export default function IconContainer({
  children,
  size = 'md',
  className = ''
}: IconContainerProps) {
  return (
    <div
      className={`
        ${sizeClasses[size]}
        flex items-center justify-center
        rounded-xl
        bg-[#1a1a1a]
        shadow-[0_4px_20px_rgba(0,0,0,0.25),0_0_0_1px_rgba(255,255,255,0.05)_inset]
        ${className}
      `}
      style={{
        boxShadow: `
          0 4px 20px rgba(0, 0, 0, 0.25),
          0 0 0 1px rgba(255, 255, 255, 0.06) inset,
          0 1px 0 rgba(255, 255, 255, 0.05) inset
        `,
      }}
    >
      {children}
    </div>
  );
}
