/**
 * Custom Icon System
 *
 * Design Principles:
 * - Filled glyph style (no strokes/outlines)
 * - Minimal, geometric shapes
 * - 1-2 accent colors per icon
 * - Product icon feel, not UI icons
 *
 * Color Palette:
 * - Primary: #ffffff (white)
 * - Accent: #a8a8a8 (soft gray) for secondary elements
 * - Highlight: #d4d4d4 (light gray) for subtle accents
 */

interface IconProps {
  size?: number;
  className?: string;
}

// ============================================
// SERVICE ICONS (for "What I Do" section)
// ============================================

// Product & UX Design - Layered screens representing interface design
export function IconProductDesign({ size = 24, className = '' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      {/* Back layer */}
      <rect x="6" y="4" width="14" height="12" rx="2" fill="#6b6b6b" />
      {/* Front layer - main screen */}
      <rect x="4" y="8" width="14" height="12" rx="2" fill="#ffffff" />
      {/* Content lines */}
      <rect x="7" y="11" width="6" height="1.5" rx="0.75" fill="#1a1a1a" />
      <rect x="7" y="14" width="8" height="1.5" rx="0.75" fill="#1a1a1a" />
      <rect x="7" y="17" width="4" height="1.5" rx="0.75" fill="#1a1a1a" />
    </svg>
  );
}

// Design Systems - Modular blocks representing component system
export function IconDesignSystems({ size = 24, className = '' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      {/* Grid of connected blocks */}
      <rect x="4" y="4" width="6" height="6" rx="1.5" fill="#ffffff" />
      <rect x="14" y="4" width="6" height="6" rx="1.5" fill="#6b6b6b" />
      <rect x="4" y="14" width="6" height="6" rx="1.5" fill="#6b6b6b" />
      <rect x="14" y="14" width="6" height="6" rx="1.5" fill="#ffffff" />
      {/* Connecting element */}
      <circle cx="12" cy="12" r="2" fill="#ffffff" />
    </svg>
  );
}

// AI-Assisted Development - Neural/code hybrid
export function IconAIDevelopment({ size = 24, className = '' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      {/* Central brain/chip */}
      <rect x="8" y="8" width="8" height="8" rx="2" fill="#ffffff" />
      {/* Neural connections */}
      <circle cx="6" cy="6" r="2" fill="#6b6b6b" />
      <circle cx="18" cy="6" r="2" fill="#6b6b6b" />
      <circle cx="6" cy="18" r="2" fill="#6b6b6b" />
      <circle cx="18" cy="18" r="2" fill="#6b6b6b" />
      {/* Connection lines as rectangles */}
      <rect x="7" y="7" width="2" height="2" rx="0.5" fill="#888888" />
      <rect x="15" y="7" width="2" height="2" rx="0.5" fill="#888888" />
      <rect x="7" y="15" width="2" height="2" rx="0.5" fill="#888888" />
      <rect x="15" y="15" width="2" height="2" rx="0.5" fill="#888888" />
    </svg>
  );
}

// Prototype to Production - Rocket/ship launch
export function IconProduction({ size = 24, className = '' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      {/* Rocket body */}
      <path
        d="M12 3L8 10V17L12 21L16 17V10L12 3Z"
        fill="#ffffff"
      />
      {/* Window */}
      <circle cx="12" cy="11" r="2" fill="#1a1a1a" />
      {/* Fins */}
      <path d="M8 14L5 17V19L8 17V14Z" fill="#6b6b6b" />
      <path d="M16 14L19 17V19L16 17V14Z" fill="#6b6b6b" />
      {/* Flame */}
      <ellipse cx="12" cy="20" rx="2" ry="1" fill="#888888" />
    </svg>
  );
}

// ============================================
// VALUE PROPOSITION ICONS
// ============================================

// Clear Costs - Transparent pricing/clarity
export function IconClearCosts({ size = 24, className = '' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      {/* Coin base */}
      <circle cx="12" cy="12" r="8" fill="#ffffff" />
      {/* Inner ring */}
      <circle cx="12" cy="12" r="5.5" fill="#1a1a1a" />
      {/* Dollar sign */}
      <path
        d="M12 7V8.5M12 15.5V17M10 14.5C10 15.33 10.9 16 12 16C13.1 16 14 15.33 14 14.5C14 13.67 13.1 13 12 13C10.9 13 10 12.33 10 11.5C10 10.67 10.9 10 12 10C13.1 10 14 10.67 14 11.5"
        stroke="#ffffff"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Flexibility - Adaptive/bendable shape
export function IconFlexibility({ size = 24, className = '' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      {/* Flexible wave form */}
      <path
        d="M4 12C4 12 6 6 9 6C12 6 12 18 15 18C18 18 20 12 20 12"
        stroke="#ffffff"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      {/* Anchor points */}
      <circle cx="4" cy="12" r="2" fill="#ffffff" />
      <circle cx="20" cy="12" r="2" fill="#ffffff" />
      <circle cx="9" cy="6" r="1.5" fill="#6b6b6b" />
      <circle cx="15" cy="18" r="1.5" fill="#6b6b6b" />
    </svg>
  );
}

// Consistency - Aligned, uniform blocks
export function IconConsistency({ size = 24, className = '' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      {/* Three aligned bars */}
      <rect x="4" y="5" width="16" height="3" rx="1.5" fill="#ffffff" />
      <rect x="4" y="10.5" width="16" height="3" rx="1.5" fill="#ffffff" />
      <rect x="4" y="16" width="16" height="3" rx="1.5" fill="#ffffff" />
      {/* Alignment indicator */}
      <rect x="3" y="4" width="1" height="16" rx="0.5" fill="#6b6b6b" />
    </svg>
  );
}

// Custom (Not Template) - Unique star/diamond shape
export function IconCustom({ size = 24, className = '' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      {/* Custom unique shape - rotated square with cuts */}
      <path
        d="M12 3L15 8L21 9L17 14L18 21L12 18L6 21L7 14L3 9L9 8L12 3Z"
        fill="#ffffff"
      />
      {/* Inner unique detail */}
      <circle cx="12" cy="12" r="2.5" fill="#1a1a1a" />
    </svg>
  );
}

// Strategic Fit - Puzzle piece fitting perfectly
export function IconStrategicFit({ size = 24, className = '' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      {/* Main puzzle piece */}
      <path
        d="M6 4H14C14 4 14 6 16 6C18 6 18 4 18 4H18C19.1 4 20 4.9 20 6V10C20 10 18 10 18 12C18 14 20 14 20 14V18C20 19.1 19.1 20 18 20H14C14 20 14 18 12 18C10 18 10 20 10 20H6C4.9 20 4 19.1 4 18V14C4 14 6 14 6 12C6 10 4 10 4 10V6C4 4.9 4.9 4 6 4Z"
        fill="#ffffff"
      />
      {/* Center indicator */}
      <circle cx="12" cy="12" r="2" fill="#1a1a1a" />
    </svg>
  );
}

// Compound Value - Stacked growing layers
export function IconCompoundValue({ size = 24, className = '' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      {/* Stacked layers growing upward */}
      <rect x="7" y="17" width="10" height="3" rx="1" fill="#6b6b6b" />
      <rect x="5" y="12" width="14" height="3" rx="1" fill="#888888" />
      <rect x="3" y="7" width="18" height="3" rx="1" fill="#ffffff" />
      {/* Growth arrow */}
      <path
        d="M12 2L15 5H13V7H11V5H9L12 2Z"
        fill="#ffffff"
      />
    </svg>
  );
}

// Support - Shield with check
export function IconSupport({ size = 24, className = '' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      {/* Shield shape */}
      <path
        d="M12 3L4 7V12C4 16.4 7.3 20.5 12 21.5C16.7 20.5 20 16.4 20 12V7L12 3Z"
        fill="#ffffff"
      />
      {/* Check mark */}
      <path
        d="M9 12L11 14L15 10"
        stroke="#1a1a1a"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Convenience - Lightning/speed indicator
export function IconConvenience({ size = 24, className = '' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      {/* Lightning bolt */}
      <path
        d="M13 3L6 14H11L10 21L18 10H13L14 3H13Z"
        fill="#ffffff"
      />
      {/* Speed lines */}
      <rect x="3" y="8" width="3" height="1.5" rx="0.75" fill="#6b6b6b" />
      <rect x="2" y="11" width="4" height="1.5" rx="0.75" fill="#6b6b6b" />
      <rect x="3" y="14" width="3" height="1.5" rx="0.75" fill="#6b6b6b" />
    </svg>
  );
}

// ============================================
// EXPORT ALL ICONS
// ============================================

export const Icons = {
  // Service icons
  ProductDesign: IconProductDesign,
  DesignSystems: IconDesignSystems,
  AIDevelopment: IconAIDevelopment,
  Production: IconProduction,
  // Value proposition icons
  ClearCosts: IconClearCosts,
  Flexibility: IconFlexibility,
  Consistency: IconConsistency,
  Custom: IconCustom,
  StrategicFit: IconStrategicFit,
  CompoundValue: IconCompoundValue,
  Support: IconSupport,
  Convenience: IconConvenience,
};
