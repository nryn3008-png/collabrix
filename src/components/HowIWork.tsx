const steps = [
  {
    number: '01',
    title: 'Discover',
    description:
      'I start by understanding your problem, your users, and your constraints. No assumptions. Just questions until the picture is clear.',
  },
  {
    number: '02',
    title: 'Define',
    description:
      'Together, we scope what matters. I help prioritize features, define success metrics, and set a direction that balances ambition with what\'s buildable.',
  },
  {
    number: '03',
    title: 'Design',
    description:
      'I design in systems from day one—using Figma variables, tokens, and reusable components. You get a UI that scales, not just screens that look good.',
  },
  {
    number: '04',
    title: 'Develop',
    description:
      'Using AI-assisted tools, I build real, functional code. Not throwaway prototypes—actual React components you can ship or hand off to engineers.',
  },
  {
    number: '05',
    title: 'Deploy',
    description:
      'I push to production. Vercel, Netlify, wherever your stack lives. You see your product working in the real world, not just in a deck.',
  },
];

export default function HowIWork() {
  return (
    <section id="process" className="py-20 md:py-32 bg-[var(--color-bg-elevated)]">
      <div className="max-w-[var(--max-width-content)] mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color-text-primary)] tracking-tight mb-4">
            A process built for speed and clarity
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl">
            I keep things straightforward. Here&apos;s how projects typically move
            from idea to shipped product.
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-0">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative grid md:grid-cols-[80px_1fr] gap-4 md:gap-8 py-8 ${
                index !== steps.length - 1
                  ? 'border-b border-[var(--color-border)]'
                  : ''
              }`}
            >
              {/* Step Number */}
              <div className="flex items-start">
                <span className="text-sm font-mono text-[var(--color-text-tertiary)]">
                  {step.number}
                </span>
              </div>

              {/* Step Content */}
              <div className="max-w-xl">
                <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-2">
                  {step.title}
                </h3>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
