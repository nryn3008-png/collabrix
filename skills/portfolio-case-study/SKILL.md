---
name: portfolio-case-study
description: >
  Create polished product design portfolio case study pages for an existing Next.js portfolio site.
  Takes raw project details (problem, role, process, outcomes) and transforms them into
  compelling, impact-first case studies that position the designer as a senior product designer
  without explicitly claiming the title — letting craft, strategic thinking, and real-world
  impact speak for themselves. Use this skill whenever the user mentions: adding a project to
  their portfolio, writing a case study, portfolio page, showcasing design work, project writeup,
  case study page, portfolio content, or wants to present their product design work professionally.
  Also trigger when the user shares raw project details and wants them turned into a structured
  narrative for their portfolio, or when they want to improve/rewrite an existing case study.
---

# Portfolio Case Study Skill

You are helping a senior product designer with 4 years of experience create case study pages for their existing Next.js portfolio. Every project they've worked on is live and used by real users — this is not concept work or student projects. This distinction matters and should be woven naturally into every case study.

## The Designer's Positioning

The portfolio should communicate senior-level craft without ever saying "I am a senior designer." Instead, the work itself demonstrates it through:

- **Strategic framing**: Every case study starts with the business problem, not the design task. Senior designers think in terms of product outcomes, not just pixels.
- **Ownership language**: Use phrases like "I led the design for...", "I drove the discovery process...", "I partnered with engineering to..." — language that shows you owned the problem, not just the UI.
- **Systems thinking**: Show how individual features connect to larger product strategy. Mention how your work influenced adjacent features, team processes, or product direction.
- **Cross-functional fluency**: Reference collaboration with PMs, engineers, data scientists, and stakeholders naturally. Senior designers don't work in isolation.
- **Real impact on real users**: Every feature is in production. Mention user counts, engagement metrics, or customer feedback where available. Even directional outcomes ("reduced support tickets related to X") signal maturity.

The tone is **warm but confident, narrative-driven but metrics-forward**. Think of it as telling a compelling story to a design leader over coffee — you're personable and genuine, but every anecdote lands on something concrete.

## How This Skill Works

The user provides raw project details — messy notes, bullet points, Slack messages, whatever they have. Your job is to:

1. Ask clarifying questions if critical details are missing (see the Interview Checklist below)
2. Structure the content into a compelling case study narrative
3. Generate a Next.js page component that fits their existing site

## Interview Checklist

When the user provides raw project details, scan for these elements. If any are missing, ask for them — but be efficient. Group your questions, don't interrogate one at a time.

**Must-have (ask if missing):**
- What was the product and who uses it?
- What was the specific problem or opportunity?
- What was your role? What did you personally own vs. collaborate on?
- What did you ship? Is it live?
- What was the outcome? (metrics, user feedback, business result — even directional)

**Nice-to-have (use if provided, don't block on these):**
- Timeline / constraints
- Team composition
- Key design decisions and why you made them
- What you'd do differently
- Specific user research methods used
- Before/after comparisons
- Stakeholder dynamics or organizational context

## Case Study Structure

Each case study follows this structure. The order is intentional — it mirrors how hiring managers at top companies scan portfolios. They look for impact first, then process, then craft.

### 1. Hero Section — The Hook

This is the most important part. Hiring managers spend 6-8 seconds deciding whether to keep reading.

**What goes here:**
- A single powerful headline that leads with the outcome or transformation, not the project name
- A subtitle with the product name, your role, and the year
- A hero image showing the final shipped product (not wireframes)
- 2-3 key metrics displayed prominently (like stat cards)

**Headline formula:**
Instead of: "Redesigning the Dashboard"
Write: "How a reimagined analytics dashboard cut decision time by 40% for 2,000+ enterprise users"

The headline should make someone think "I want to know how they did that." It positions you as someone who solves business problems, not someone who pushes pixels.

**Metrics display:**
Show 2-3 metrics as large, scannable numbers. These could be:
- Usage/adoption: "Used by 12,000+ users daily"
- Performance: "35% reduction in task completion time"
- Business: "Contributed to 20% increase in platform retention"
- Satisfaction: "NPS improved from 32 to 58"

If exact numbers aren't available, use directional language: "Significant reduction in support tickets" or "Adopted by the majority of enterprise accounts within 3 months." Directional is better than nothing — it still shows you think about outcomes.

### 2. Context — Setting the Stage (2-3 paragraphs)

Briefly establish:
- The product and its users (be specific: "a B2B SaaS platform used by operations teams at mid-market logistics companies" not "a business tool")
- The business context — why this project mattered NOW
- The constraints you were working within (timeline, tech debt, team size, organizational dynamics)

This section demonstrates business acumen. It shows you understand why you were asked to solve this problem, not just what you were asked to design.

### 3. The Problem — What Was Broken (2-3 paragraphs + optional visual)

Frame the problem from multiple angles:
- **User perspective**: What pain were real users experiencing? Use quotes if available.
- **Business perspective**: What was this costing the company? (churn, support load, lost deals, etc.)
- **Technical perspective**: What constraints did the existing system impose?

Avoid vague problem statements like "users were confused." Be specific: "Operations managers were spending 25 minutes per day reconciling data across three separate views because the platform lacked a unified dashboard."

A screenshot or annotated mockup of the "before" state is powerful here if available.

### 4. Discovery & Research — How You Understood the Problem (3-4 paragraphs + artifacts)

This is where senior thinking shines. Don't just list methods — explain your reasoning for choosing them.

**Show your thinking:**
- Why did you choose these specific research methods?
- What surprised you in the findings?
- How did the research redirect or validate your assumptions?
- What stakeholder dynamics did you navigate?

**Artifacts to include (if available):**
- User interview synthesis or affinity maps
- Journey maps or service blueprints
- Competitive analysis highlights
- Data analysis findings

Frame research as discovery, not as box-checking. "I ran 8 user interviews" is less compelling than "Through conversations with 8 operations managers, I discovered that the core issue wasn't information overload — it was information fragmentation."

### 5. Design Process — From Insight to Solution (4-6 paragraphs + visuals)

Walk through your process, but focus on the **decisions**, not the deliverables.

**What to cover:**
- How you framed the design challenge based on research
- Key design explorations and why you chose one direction over another
- How you involved stakeholders and engineering in the process
- Iteration based on feedback — what changed and why

**Visuals to include:**
- Early sketches or wireframes (show the evolution)
- Key design explorations that were considered
- Annotated mockups showing the reasoning behind layout/interaction choices

Avoid showing every wireframe you ever drew. Pick 2-3 pivotal moments where a decision fundamentally shaped the outcome. Explain those decisions deeply.

**Senior signal**: Show that you made tradeoffs. "We considered X but chose Y because of [constraint/insight]. In retrospect, this was the right call because [outcome]."

### 6. The Solution — What You Shipped (3-4 paragraphs + polished visuals)

Now show the final, shipped product in its full glory.

**What to include:**
- High-quality screenshots or recordings of the live product
- Callouts for key interactions and micro-decisions
- How the design system was applied or extended
- Technical considerations you accounted for (responsive behavior, accessibility, performance)

Emphasize that this is **live and in production**. Use language like "This feature has been live since [date] and is actively used by [user count]." This separates your work from concept projects.

### 7. Outcome & Impact — The Proof (2-3 paragraphs + metric callouts)

Bring it full circle. Restate the key metrics from the hero, but now with context.

**Structure:**
- Quantitative results (metrics, before/after comparisons)
- Qualitative results (user feedback, stakeholder reactions)
- Business impact (how this influenced product roadmap, revenue, retention)

If you don't have hard metrics, use qualitative signals with confidence:
- "Adopted as the default view by 80% of enterprise accounts"
- "Led to follow-up investment in the analytics platform"
- "Directly cited in customer renewal conversations"

### 8. Reflection — What You Learned (1-2 paragraphs)

A short, honest reflection. This isn't a humble-brag section — it's where you show growth mindset and intellectual honesty.

Cover one or two of:
- What would you do differently?
- What did this project teach you about [design/product/yourself]?
- How did this influence your approach on subsequent projects?

Keep it brief and genuine. This section should feel like a conversation, not a performance review.

## Writing Style Guide

### Voice & Tone

- **First person, active voice**: "I led", "I discovered", "I designed" — not "the design was created" or "we redesigned" (unless clarifying team contribution)
- **Confident but not arrogant**: State what you did and what happened. The results speak for themselves — you don't need superlatives.
- **Specific over vague**: "12,000 daily active users" not "thousands of users". "3-week sprint" not "a short timeline."
- **Warm and human**: You're telling a story to a person, not writing a research paper. Brief moments of personality are welcome — a sentence about what excited you, what surprised you, what was hard.

### Things to Avoid

- **"Just" and "simply"**: These minimize your work. You didn't "just redesign a form" — you solved a problem.
- **Passive constructions**: "The research was conducted" → "I conducted research with..."
- **Process-only narratives**: Don't describe your design process without connecting it to outcomes. Every section should answer "so what?"
- **Apologetic language**: Don't hedge with "I think" or "I believe" when describing your decisions. You made the call — own it.
- **Buzzword soup**: "Leveraging synergies to create a holistic user-centric paradigm" — no. Speak plainly.
- **Claiming titles**: Never write "As a senior designer, I..." Let the work demonstrate seniority. The way you frame problems, the scope of your ownership, and the quality of your outcomes will signal your level.

### Length Guidelines

- Total case study: 800-1,500 words of body copy (excluding headers and metric callouts)
- Hero headline: 10-20 words
- Each section: 2-4 paragraphs
- Paragraphs: 2-4 sentences each

Hiring managers skim. Dense walls of text lose them. Use visual hierarchy — clear headers, metric callouts, captioned images — to make the case study scannable while remaining deep enough for someone who wants to read every word.

## Next.js Page Generation

When generating the case study page component, follow these guidelines:

### File Structure
```
app/work/[project-slug]/page.tsx    — The case study page
```

### Component Guidelines

- Use TypeScript with proper typing
- Follow the existing site's conventions for layout, spacing, and components
- Build responsive by default — the case study should read well on mobile
- Use semantic HTML: `<article>`, `<section>`, `<figure>`, `<figcaption>`
- Implement proper heading hierarchy (h1 for title, h2 for sections, h3 for subsections)
- Add alt text to all images that describes what the image shows in context
- Use `next/image` for optimized image loading
- Include proper metadata for SEO (title, description, og:image)

### Visual Design Principles for Case Studies

- **Let images breathe**: Full-width hero, generous padding around screenshots
- **Typography hierarchy**: Clear distinction between section headers, body text, and callouts
- **Metric callouts**: Display key numbers in large, prominent type — these are the most scannable elements
- **Progressive disclosure**: Lead with the polished result, then show the process behind it
- **Consistent image treatment**: All screenshots should have consistent framing (rounded corners, subtle shadows, or device mockups)
- **Transitions between sections**: Use spacing and subtle dividers to create rhythm

### Before You Generate Code

1. Read the user's existing portfolio code first to understand their conventions:
   - Layout components, design tokens, and typography system
   - How existing pages/routes are structured
   - Any shared components (Image galleries, stat cards, section wrappers)
   - Tailwind config or CSS variables in use
2. Match the existing visual language — don't introduce new patterns
3. If no existing case study pages exist, create a clean, professional template that matches the site's overall aesthetic

## Example: Transforming Raw Input to Case Study

**Raw input from the user:**
```
worked on the reporting dashboard for DataPulse. B2B analytics platform.
operations teams use it. they had an old dashboard that nobody used
because it was slow and confusing. I did user research, found out people
were exporting to excel instead. redesigned the whole thing with filters
and saved views. shipped in 6 weeks. usage went up like 3x after launch.
about 2000 users on it now.
```

**What the skill produces:**

Hero headline: "How a reimagined reporting dashboard eliminated the Excel workaround for 2,000+ operations teams"

Subtitle: "DataPulse Analytics Platform — Product Designer — 2025"

Key metrics:
- 3x increase in dashboard adoption
- 2,000+ active users
- 6-week delivery

...followed by a full narrative case study structured according to the sections above, with placeholder image components and a complete Next.js page.

## Quick Reference: Senior Signals Checklist

Before finalizing any case study, verify it demonstrates these qualities:

- [ ] Headline leads with business/user outcome, not design activity
- [ ] Problem is framed from business + user + technical angles
- [ ] Research section explains *why* specific methods were chosen
- [ ] Design process highlights decisions and tradeoffs, not just deliverables
- [ ] Cross-functional collaboration is mentioned naturally
- [ ] Solution section emphasizes this is live, in production, used by real people
- [ ] Metrics or directional outcomes are present and prominent
- [ ] Writing uses ownership language ("I led", "I drove", "I partnered")
- [ ] Reflection shows growth mindset without undermining confidence
- [ ] No explicit seniority claims — the work speaks for itself
