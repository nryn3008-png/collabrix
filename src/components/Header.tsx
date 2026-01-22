'use client';

import { useState, useEffect } from 'react';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#expertise', label: 'What I Do' },
  { href: '#process', label: 'Process' },
  { href: '#clients', label: 'Who I Help' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-[var(--color-bg)]/95 backdrop-blur-sm border-b border-[var(--color-border)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[var(--max-width-content)] mx-auto px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#"
            className="text-lg font-semibold tracking-tight text-[var(--color-text-primary)]"
          >
            Aman Soni
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="text-sm font-medium px-4 py-2 bg-[var(--color-accent)] text-[var(--color-bg)] rounded-lg hover:bg-[var(--color-accent-hover)] transition-colors"
            >
              Work with me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 -mr-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-[var(--color-border)]">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-base text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="inline-flex justify-center text-base font-medium px-4 py-3 bg-[var(--color-accent)] text-[var(--color-bg)] rounded-lg hover:bg-[var(--color-accent-hover)] transition-colors mt-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Work with me
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
