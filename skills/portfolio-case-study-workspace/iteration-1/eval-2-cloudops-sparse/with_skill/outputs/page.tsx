'use client';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Alert Fatigue Solution — CloudOps Case Study',
  description: 'How intelligent alert grouping reduced false positives and made monitoring accessible to 800+ engineers.',
};

export default function CloudOpsCase Study() {
  return (
    <article className="w-full bg-white">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 md:px-12 py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            How intelligent alert grouping solved alert fatigue for 800+ engineers
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-12 font-light">
            CloudOps Reporting Module — 2 Sprints — Live in Production
          </p>

          {/* Metric Callouts */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-slate-800 bg-opacity-50 rounded-lg p-8 backdrop-blur">
              <div className="text-4xl font-bold text-blue-400 mb-2">800+</div>
              <p className="text-slate-200">Engineers now using the system</p>
            </div>
            <div className="bg-slate-800 bg-opacity-50 rounded-lg p-8 backdrop-blur">
              <div className="text-4xl font-bold text-green-400 mb-2">Significant</div>
              <p className="text-slate-200">Reduction in false positive complaints</p>
            </div>
            <div className="bg-slate-800 bg-opacity-50 rounded-lg p-8 backdrop-blur">
              <div className="text-4xl font-bold text-purple-400 mb-2">2 Sprints</div>
              <p className="text-slate-200">From concept to shipping</p>
            </div>
          </div>
        </div>
      </section>

      {/* Context */}
      <section className="px-6 md:px-12 py-16 md:py-24 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900">Context</h2>
        <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
          <p>
            CloudOps is a DevOps monitoring platform used by engineering teams to track system health, performance, and incidents. It sits at the critical intersection of infrastructure observability and incident response—every alert represents a potential production issue that needs immediate attention.
          </p>
          <p>
            The platform had an adoption problem that wasn't visible in the metrics. The reporting module existed, but engineers were systematically ignoring it. Not because the feature was poorly designed—but because the signal-to-noise ratio had become unbearable. False positives were so frequent that alerts stopped being trusted.
          </p>
        </div>
      </section>

      {/* The Problem */}
      <section className="px-6 md:px-12 py-16 md:py-24 max-w-4xl mx-auto border-t border-slate-200">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900">The Problem: Alert Fatigue</h2>
        <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
          <p>
            Engineers weren't ignoring alerts because they were lazy. They were ignoring them because the system had trained them to. Flaky thresholds triggered too many false alarms. Critical issues were buried in the noise. And when someone did need to investigate, there was no way to quickly distinguish signal from noise.
          </p>
          <p>
            The core issue wasn't poor design or missing features—it was alert fatigue. The system was sending too many notifications about things that didn't matter, which meant the alerts that *did* matter were getting overlooked. This created a dangerous gap: real incidents were happening, but the team's trust in the alerting system had eroded.
          </p>
          <p>
            This was costing the business. Every missed or delayed alert increased incident response time and customer impact. It also made the platform less valuable—monitoring only works if you act on what you see.
          </p>
        </div>
      </section>

      {/* Discovery & Research */}
      <section className="px-6 md:px-12 py-16 md:py-24 max-w-4xl mx-auto border-t border-slate-200">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900">Discovery: Understanding the Root Cause</h2>
        <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
          <p>
            Rather than jump to "add more filtering options," I spent time understanding how engineers actually used (or ignored) the alert system. Conversations with teams revealed a consistent pattern: they weren't dismissing alerts because they were overwhelmed by choice—they were dismissing alerts because they'd learned to distrust them.
          </p>
          <p>
            The insight was crucial: the problem wasn't that engineers needed more control. They needed the system to be smarter about *what* it was telling them. They needed confidence that an alert meant something important. This reframed the entire approach from "give users more options to ignore alerts" to "reduce noise so alerts actually matter."
          </p>
        </div>
      </section>

      {/* Solution */}
      <section className="px-6 md:px-12 py-16 md:py-24 max-w-4xl mx-auto border-t border-slate-200">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900">The Solution: Intelligent Alert Grouping</h2>
        <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
          <p>
            I designed an intelligent alert grouping system with three core components: severity scoring that ranked alerts by actual impact, grouping that correlated related alerts into actionable clusters, and customizable thresholds that let teams tune the system to their infrastructure without creating a maintenance burden.
          </p>
          <p>
            The key design decision was making customization accessible without requiring deep platform expertise. Teams could adjust thresholds for their specific environments, but the defaults worked well out of the box—reducing setup friction and ensuring immediate value.
          </p>
          <p>
            I also added a weekly digest email that summarized alert trends and patterns. This gave engineers visibility into their monitoring health without forcing them to check the platform constantly. It created a feedback loop where they could see patterns over time and understand what the system was protecting them from.
          </p>
          <p>
            The feature shipped in 2 sprints and went live immediately. This was a production change on day one—no gradual rollout needed.
          </p>
        </div>
      </section>

      {/* Outcome */}
      <section className="px-6 md:px-12 py-16 md:py-24 max-w-4xl mx-auto border-t border-slate-200">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900">Outcome & Impact</h2>
        <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
          <p>
            False positive complaints dropped significantly. More importantly, adoption of the reporting module increased—engineers started trusting and using the system again. The feature spread quickly across teams, and within weeks, it was being demo'd in customer sales calls as a key differentiator.
          </p>
          <p>
            Today, about 800 engineers use the intelligent alert system across CloudOps. It's become core to how teams monitor their infrastructure. The system went from being ignored to being indispensable—not because the UI got flashier, but because it became smarter about what it was telling people.
          </p>
        </div>

        {/* Outcome Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 pt-12 border-t border-slate-200">
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">800+</div>
            <p className="text-slate-600">Active users relying on the system</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-600 mb-2">Sales Asset</div>
            <p className="text-slate-600">Now demo'd in customer acquisition calls</p>
          </div>
        </div>
      </section>

      {/* Reflection */}
      <section className="px-6 md:px-12 py-16 md:py-24 max-w-4xl mx-auto border-t border-slate-200">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900">Reflection</h2>
        <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
          <p>
            This project reinforced an important lesson: the best solutions aren't always about adding features. Sometimes the most impactful work is making the system smarter about what it already does. Alert fatigue wasn't solved by giving people more options—it was solved by reducing noise and building trust.
          </p>
          <p>
            The 2-sprint timeline also taught me the value of shipping focused solutions early. We didn't try to build the perfect alert system. We built the minimal system that solved the core problem, shipped it, and let real usage guide what came next. Speed and focus often matter more than comprehensiveness.
          </p>
        </div>
      </section>

      {/* Footer spacing */}
      <section className="h-12 md:h-20 bg-slate-50"></section>
    </article>
  );
}
