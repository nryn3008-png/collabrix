import React from 'react';

export default function NexusPlatformCaseStudy() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-12 space-y-12">
      {/* Hero Section */}
      <section className="space-y-6">
        <div className="space-y-4">
          <h1 className="text-5xl font-bold text-gray-900 leading-tight">
            Transforming Compliance Workflows: From 3 Weeks to 4 Days
          </h1>
          <p className="text-xl text-gray-600 font-medium">
            Nexus Platform — Enterprise Workflow Automation — Product Design Lead — 2023–2024
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-gray-200">
          <div className="space-y-2">
            <p className="text-sm text-gray-600 font-semibold uppercase tracking-wide">Audit Prep Time</p>
            <p className="text-3xl font-bold text-gray-900">3 weeks → 4 days</p>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-gray-600 font-semibold uppercase tracking-wide">Regulatory Findings</p>
            <p className="text-3xl font-bold text-gray-900">Zero</p>
            <p className="text-xs text-gray-500">in first 2 post-launch audits</p>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-gray-600 font-semibold uppercase tracking-wide">Customer Adoption</p>
            <p className="text-3xl font-bold text-gray-900">15 firms</p>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-gray-600 font-semibold uppercase tracking-wide">NPS Improvement</p>
            <p className="text-3xl font-bold text-gray-900">28 → 67</p>
          </div>
        </div>
      </section>

      {/* Context */}
      <section className="space-y-4 border-t border-gray-200 pt-8">
        <h2 className="text-3xl font-bold text-gray-900">Context</h2>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            Nexus Platform is an enterprise workflow automation tool built specifically for compliance teams at financial institutions. These teams manage some of the most heavily scrutinized processes in modern business — audit cycles, regulatory reporting, and documentation workflows that carry real legal weight if they fail.
          </p>
          <p>
            I led product design for this 5-month initiative, working as the lead designer with one junior designer reporting to me, 8 engineers, 2 PMs, and a dedicated group of compliance SMEs. This was a greenfield redesign of an existing tool that had been built by engineers without design input, giving us the rare opportunity to completely reimagine the user experience from first principles.
          </p>
        </div>
      </section>

      {/* The Problem */}
      <section className="space-y-4 border-t border-gray-200 pt-8">
        <h2 className="text-3xl font-bold text-gray-900">The Problem</h2>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            Compliance teams at major financial institutions were drowning in process. Audit preparation — the process of gathering documentation, coordinating evidence, and proving readiness to regulators — was a disjointed nightmare. Teams relied on a patchwork of spreadsheets, email chains, and disconnected tools. An average audit cycle took three weeks, with the work scattered across multiple disconnected systems that couldn't talk to each other.
          </p>
          <p>
            The consequences were concrete: errors in documentation were causing regulatory findings. Teams had no visibility into what documentation was missing until the auditors pointed it out. Collaboration was asynchronous and error-prone. The existing tool attempted to handle this, but it was built as a technical solution without any understanding of the actual workflow — where bottlenecks happened, what information mattered most, or how teams actually worked together.
          </p>
        </div>
      </section>

      {/* Discovery & Research */}
      <section className="space-y-4 border-t border-gray-200 pt-8">
        <h2 className="text-3xl font-bold text-gray-900">Discovery & Research</h2>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            I knew we needed to understand the complexity before designing for it. I led a comprehensive discovery phase with 12 user interviews across different role types — audit managers, junior compliance officers, and evidence coordinators. But interviews alone wouldn't tell the story. I shadowed 3 complete audit cycles in real time, watching teams navigate the exact workflows we'd be redesigning. I analyzed 6 months of support tickets to understand the failure modes and friction points in the existing system.
          </p>
          <p>
            The breakthrough came from running a design sprint with stakeholders and engineering. Instead of me designing in isolation and bringing solutions back for feedback, we involved the people who understood both the regulatory requirements and the team dynamics. What emerged was a clear picture: the core issue wasn't missing features. It was that the system treated audit prep as a data management problem when it was really a coordination and evidence problem. Teams needed visibility, confidence, and structured workflows — not more places to type information.
          </p>
        </div>
      </section>

      {/* Design Process */}
      <section className="space-y-4 border-t border-gray-200 pt-8">
        <h2 className="text-3xl font-bold text-gray-900">Design Process & Key Decisions</h2>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            Compliance forms are notoriously complex. I encountered forms with 200+ fields, representing every possible piece of information a regulator might ask for. The naive approach would have been a single massive form. Instead, I designed a progressive disclosure pattern that revealed complexity only when needed. The system asked teams the essential 5–8 questions upfront, then dynamically showed additional sections based on their answers. This reduced cognitive load while ensuring nothing fell through the cracks.
          </p>
          <p>
            The most impactful design decision came from observing how teams actually tracked readiness. They didn't want another dashboard with metrics. What they desperately wanted was a real-time understanding of where they stood. I designed an "audit confidence score" visualization that synthesized all the scattered information into a single, updateable number. Documentation completeness, approval status, evidence verification — all rolled into one metric that teams could see changing in real time as they added information. This simple visualization became the emotional anchor of the entire product. Teams said it was the feature that made them feel in control for the first time.
          </p>
          <p>
            One decision required pushing back on a PM request. The team wanted to add a conversational interface — a chatbot that would guide teams through the audit process. Research strongly suggested this was wrong. Compliance teams weren't looking for a conversational buddy. They wanted structured, predictable workflows where they knew exactly where they stood. Conversational UI would create ambiguity where certainty was needed. I presented the research, explained the risk, and advocated for a different approach. The team aligned on structured workflows instead, which proved correct in post-launch feedback.
          </p>
          <p>
            Beyond the individual features, I established the design system for the platform. This meant defining patterns for complex form interactions, approval workflows, and audit trail documentation — creating a foundation that would scale beyond this initial product.
          </p>
        </div>
      </section>

      {/* The Solution */}
      <section className="space-y-4 border-t border-gray-200 pt-8">
        <h2 className="text-3xl font-bold text-gray-900">The Solution</h2>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            Nexus shipped as a complete end-to-end audit workflow management system. The core user journey was straightforward but powerful:
          </p>

          <div className="space-y-3 ml-4 border-l-2 border-blue-500 pl-4 py-2">
            <div>
              <p className="font-semibold text-gray-900">1. Audit Setup</p>
              <p className="text-sm text-gray-700">Teams define the scope of the audit and required documentation. The system uses progressive disclosure to guide them through regulatory requirements without overwhelming them upfront.</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900">2. Document Collection</p>
              <p className="text-sm text-gray-700">Automated requests pull evidence from across the organization. Teams can see what's been collected, what's missing, and what needs verification — all in one place.</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900">3. Real-time Collaboration</p>
              <p className="text-sm text-gray-700">Evidence coordinators, audit managers, and stakeholders collaborate on the same artifact. The system tracks who has reviewed what and maintains a complete audit trail.</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900">4. Approval Chains</p>
              <p className="text-sm text-gray-700">Configurable workflows ensure evidence goes through the right approvals before the audit. Status visibility means no surprises at the auditor meeting.</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900">5. Audit Trail Dashboard</p>
              <p className="text-sm text-gray-700">The confidence score lives here alongside comprehensive documentation of every decision, approval, and change made during prep. This dashboard is the story of the audit told through data.</p>
            </div>
          </div>

          <p className="pt-4">
            The system has been live since 2024 and is actively used by 15 financial institutions managing their most critical workflows through Nexus. Every major design decision was tested post-launch, and the product continues to evolve based on what we learned.
          </p>
        </div>
      </section>

      {/* Outcomes & Impact */}
      <section className="space-y-4 border-t border-gray-200 pt-8">
        <h2 className="text-3xl font-bold text-gray-900">Outcomes & Impact</h2>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            The metrics speak directly to the problem we set out to solve. Audit preparation time dropped from an average of 3 weeks to just 4 days — an 85% reduction. That time savings translates directly to efficiency and cost savings for our customers, but more importantly, it means less panic and more confidence heading into audits.
          </p>

          <p>
            In the first two audit cycles post-launch, there were zero regulatory findings. This is the outcome that mattered most to our customers. The system's design — particularly the audit confidence score and the approval workflows — eliminated the documentation gaps that were causing findings in previous cycles. Compliance leaders pointed to Nexus specifically as the reason they passed clean audits.
          </p>

          <p>
            Beyond the immediate users, the product created business impact. Adoption expanded to 15 financial institutions, and the success of this product line led to a $2M ARR expansion for the company. Customers cited the reliability and trustworthiness of the system in renewal conversations. The NPS shifted from 28 (the old tool's score) to 67, a dramatic shift that reflected how fundamentally the product had changed the team experience.
          </p>
        </div>
      </section>

      {/* Reflection */}
      <section className="space-y-4 border-t border-gray-200 pt-8">
        <h2 className="text-3xl font-bold text-gray-900">What I Learned</h2>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            This project fundamentally changed how I think about designing for regulated industries. In compliance, "delightful" doesn't mean clever interactions or novel patterns. It means trustworthy, predictable, and clear. Users in this domain are under regulatory pressure. They need systems that reduce anxiety, not systems that surprise them. The audit confidence score worked so well not because it was innovative, but because it was honest — teams could see exactly where they stood at any moment.
          </p>

          <p>
            The other lesson came from pushing back on the chatbot idea. It reinforced that research should directly inform decisions, even when those decisions contradict initial product instincts. My job wasn't to implement the feature request — it was to understand the underlying need and solve it the right way. That earned me credibility with both the team and the users.
          </p>
        </div>
      </section>

      {/* Footer note */}
      <section className="border-t border-gray-200 pt-8 text-sm text-gray-500">
        <p>Nexus Platform continues to evolve with new customers and updated regulatory requirements. This case study reflects the work through the initial 2024 launch and first year of production use.</p>
      </section>
    </article>
  );
}
