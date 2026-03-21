import React from 'react';
import { ArrowRight, Users, Clock, TrendingUp, CheckCircle, AlertCircle } from 'lucide-react';

export default function NexusPlatformCaseStudy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-900/50 px-4 py-2 text-sm font-medium text-blue-200">
            <span className="h-2 w-2 rounded-full bg-blue-400"></span>
            Enterprise Case Study
          </div>

          <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Nexus Platform
            <span className="block text-blue-400">Enterprise Workflow Automation</span>
          </h1>

          <p className="mb-8 max-w-2xl text-lg text-slate-300">
            Transforming compliance audit workflows for financial institutions through design-driven innovation, reducing audit preparation from 3 weeks to 4 days while achieving zero regulatory findings.
          </p>

          <div className="grid gap-4 sm:grid-cols-4">
            <div>
              <div className="text-3xl font-bold text-blue-400">5 months</div>
              <p className="text-sm text-slate-400">Project Timeline</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400">15+</div>
              <p className="text-sm text-slate-400">Institutions Adopted</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400">$2M</div>
              <p className="text-sm text-slate-400">ARR Expansion</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400">67</div>
              <p className="text-sm text-slate-400">NPS Score</p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold text-slate-900">Overview</h2>
            <p className="mb-6 text-lg text-slate-700">
              Nexus Platform is an enterprise workflow automation system designed specifically for compliance teams at financial institutions. This project transformed how audit workflows were managed, replacing fragmented spreadsheets and email chains with a unified, trustworthy system.
            </p>
            <p className="text-lg text-slate-700">
              As the lead designer, I drove the end-to-end design process from research through to launch, establishing design systems and advocating for user-centered solutions in a highly regulated environment.
            </p>
          </div>

          <div className="space-y-4">
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-2 font-semibold text-slate-900">Role</h3>
              <p className="text-slate-700">Lead Product Designer</p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-2 font-semibold text-slate-900">Team Composition</h3>
              <p className="text-slate-700">1 Junior Designer, 8 Engineers, 2 Product Managers, Compliance SMEs</p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-2 font-semibold text-slate-900">Timeline</h3>
              <p className="text-slate-700">5 months (2023–2024)</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-4 text-3xl font-bold text-slate-900">The Problem</h2>
          <p className="mb-8 text-lg text-slate-600">
            Compliance teams at financial institutions faced significant operational and regulatory challenges with their current audit workflows.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-red-200 bg-red-50 p-6">
              <div className="mb-3 inline-block rounded-lg bg-red-100 p-3">
                <AlertCircle className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="mb-2 font-semibold text-slate-900">Fragmented Tools</h3>
              <p className="text-slate-700">
                Patchwork of spreadsheets and email chains managing critical audit workflows with no centralized coordination.
              </p>
            </div>

            <div className="rounded-lg border border-orange-200 bg-orange-50 p-6">
              <div className="mb-3 inline-block rounded-lg bg-orange-100 p-3">
                <Clock className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="mb-2 font-semibold text-slate-900">Time-Intensive Process</h3>
              <p className="text-slate-700">
                Audit preparation took 3 weeks due to manual coordination and documentation collection across teams.
              </p>
            </div>

            <div className="rounded-lg border border-red-200 bg-red-50 p-6">
              <div className="mb-3 inline-block rounded-lg bg-red-100 p-3">
                <AlertCircle className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="mb-2 font-semibold text-slate-900">Documentation Errors</h3>
              <p className="text-slate-700">
                Errors in documentation were causing regulatory findings, creating compliance risk and audit failures.
              </p>
            </div>

            <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-6">
              <div className="mb-3 inline-block rounded-lg bg-yellow-100 p-3">
                <Users className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="mb-2 font-semibold text-slate-900">No Design Input</h3>
              <p className="text-slate-700">
                Existing tool had been built by engineers with no design input, resulting in poor user experience and low adoption.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research & Discovery */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <h2 className="mb-4 text-3xl font-bold text-slate-900">Research & Discovery</h2>
        <p className="mb-8 max-w-3xl text-lg text-slate-600">
          I conducted comprehensive user research to deeply understand compliance workflows, pain points, and the regulatory context that shapes how these teams operate.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg bg-blue-50 p-6">
            <div className="mb-3 flex items-center gap-2">
              <span className="text-2xl font-bold text-blue-600">12</span>
            </div>
            <p className="text-sm font-medium text-slate-900">User Interviews</p>
            <p className="mt-1 text-sm text-slate-600">In-depth conversations with compliance officers and audit coordinators</p>
          </div>

          <div className="rounded-lg bg-indigo-50 p-6">
            <div className="mb-3 flex items-center gap-2">
              <span className="text-2xl font-bold text-indigo-600">3</span>
            </div>
            <p className="text-sm font-medium text-slate-900">Audit Cycles Shadowed</p>
            <p className="mt-1 text-sm text-slate-600">Observed real workflows from initiation through completion</p>
          </div>

          <div className="rounded-lg bg-purple-50 p-6">
            <div className="mb-3 flex items-center gap-2">
              <span className="text-2xl font-bold text-purple-600">6 months</span>
            </div>
            <p className="text-sm font-medium text-slate-900">Support Tickets Analyzed</p>
            <p className="mt-1 text-sm text-slate-600">Identified patterns in user pain points and feature requests</p>
          </div>

          <div className="rounded-lg bg-pink-50 p-6">
            <div className="mb-3 flex items-center gap-2">
              <span className="text-2xl font-bold text-pink-600">1</span>
            </div>
            <p className="text-sm font-medium text-slate-900">Design Sprint</p>
            <p className="mt-1 text-sm text-slate-600">Facilitated workshop with stakeholders to identify core needs</p>
          </div>
        </div>

        <div className="mt-12 rounded-lg bg-slate-50 p-8">
          <h3 className="mb-4 text-xl font-semibold text-slate-900">Key Research Insights</h3>
          <ul className="space-y-3">
            <li className="flex gap-4">
              <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
              <p className="text-slate-700">
                <span className="font-medium">Predictability matters more than innovation:</span> Compliance teams value structured, consistent workflows over novel or "clever" interfaces.
              </p>
            </li>
            <li className="flex gap-4">
              <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
              <p className="text-slate-700">
                <span className="font-medium">Audit trail is critical:</span> Every action must be traceable and documented for regulatory accountability.
              </p>
            </li>
            <li className="flex gap-4">
              <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
              <p className="text-slate-700">
                <span className="font-medium">Real-time visibility is essential:</span> Teams need to know audit readiness status at a glance.
              </p>
            </li>
            <li className="flex gap-4">
              <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
              <p className="text-slate-700">
                <span className="font-medium">Collaboration challenges are manual:</span> No shared workspace means constant context switching and communication overhead.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* Solution */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-4 text-3xl font-bold">The Solution</h2>
          <p className="mb-12 max-w-3xl text-lg text-slate-300">
            Nexus Platform is a comprehensive end-to-end audit workflow management system that replaces fragmented tools with a unified, purpose-built platform for compliance teams.
          </p>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-6">
              <div>
                <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500 text-sm font-bold">1</span>
                  Automated Document Collection
                </h3>
                <p className="text-slate-300">
                  Intelligent system that automatically gathers required documents and evidence from across the organization, eliminating manual collection and reducing errors.
                </p>
              </div>

              <div>
                <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500 text-sm font-bold">2</span>
                  Real-Time Collaboration
                </h3>
                <p className="text-slate-300">
                  Centralized workspace where compliance teams, auditors, and stakeholders collaborate on audit preparation with live visibility into progress and status.
                </p>
              </div>

              <div>
                <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500 text-sm font-bold">3</span>
                  Approval Chains
                </h3>
                <p className="text-slate-300">
                  Structured approval workflows that ensure proper review and sign-off at every stage, maintaining compliance and creating an audit trail.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-green-500 text-sm font-bold">4</span>
                  Audit Trail Dashboard
                </h3>
                <p className="text-slate-300">
                  Comprehensive dashboard showing complete history of all audit activities, changes, and approvals with full traceability for regulatory accountability.
                </p>
              </div>

              <div>
                <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-green-500 text-sm font-bold">5</span>
                  Design System
                </h3>
                <p className="text-slate-300">
                  Established comprehensive design system providing consistency, accessibility, and a foundation for future product development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Decisions */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <h2 className="mb-4 text-3xl font-bold text-slate-900">Key Design Decisions</h2>
        <p className="mb-12 max-w-3xl text-lg text-slate-600">
          Strategic design choices that addressed the unique needs of compliance workflows and the constraints of highly regulated environments.
        </p>

        <div className="space-y-8">
          {/* Progressive Disclosure */}
          <div className="rounded-lg border border-slate-200 bg-white p-8">
            <div className="mb-4 inline-block rounded-lg bg-blue-100 px-3 py-1">
              <span className="text-sm font-semibold text-blue-900">Design Pattern</span>
            </div>
            <h3 className="mb-3 text-2xl font-bold text-slate-900">Progressive Disclosure for Complex Forms</h3>
            <p className="mb-4 text-slate-700">
              Compliance forms often contain 200+ fields. Rather than overwhelming users with all fields at once, I implemented a progressive disclosure pattern that reveals fields contextually based on previous answers and user requirements.
            </p>
            <div className="rounded-lg bg-slate-50 p-4">
              <p className="text-sm text-slate-600">
                <span className="font-medium">Impact:</span> Users could navigate complex forms with confidence, understanding why each field was required and reducing form-filling errors by providing clear context.
              </p>
            </div>
          </div>

          {/* Audit Confidence Score */}
          <div className="rounded-lg border border-slate-200 bg-white p-8">
            <div className="mb-4 inline-block rounded-lg bg-green-100 px-3 py-1">
              <span className="text-sm font-semibold text-green-900">Custom Visualization</span>
            </div>
            <h3 className="mb-3 text-2xl font-bold text-slate-900">Audit Confidence Score</h3>
            <p className="mb-4 text-slate-700">
              Designed a novel visualization that calculates and displays real-time "audit readiness" status. This metric aggregates the completion status of all audit components, documentation, approvals, and risk assessments into a single, instantly understood indicator.
            </p>
            <div className="rounded-lg bg-slate-50 p-4">
              <p className="text-sm text-slate-600">
                <span className="font-medium">Impact:</span> Teams could make informed decisions about audit readiness, identify bottlenecks, and prioritize work—reducing planning time and increasing confidence before external audits.
              </p>
            </div>
          </div>

          {/* Chatbot Pushback */}
          <div className="rounded-lg border border-slate-200 bg-white p-8">
            <div className="mb-4 inline-block rounded-lg bg-purple-100 px-3 py-1">
              <span className="text-sm font-semibold text-purple-900">Research-Driven Decision</span>
            </div>
            <h3 className="mb-3 text-2xl font-bold text-slate-900">Rejected Conversational UI (Chatbot)</h3>
            <p className="mb-4 text-slate-700">
              A product manager requested the addition of an AI chatbot to assist compliance teams. Research revealed that users explicitly wanted structured, predictable workflows—not conversational interfaces. In compliance, ambiguity and interpretation create risk.
            </p>
            <div className="rounded-lg bg-slate-50 p-4">
              <p className="text-sm text-slate-600">
                <span className="font-medium">Impact:</span> By pushing back with data, I prevented feature creep that would have added complexity without solving user needs. This decision protected the system's trustworthiness and regulatory alignment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-4 text-3xl font-bold text-slate-900">Results & Impact</h2>
          <p className="mb-12 max-w-3xl text-lg text-slate-700">
            The Nexus Platform delivered significant operational and business impact for compliance teams and the organization.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-green-200 bg-white p-6 shadow-sm">
              <div className="mb-4 inline-block rounded-lg bg-green-100 p-3">
                <Clock className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="mb-2 text-2xl font-bold text-slate-900">75% Time Reduction</h3>
              <p className="text-slate-700">
                Audit preparation time reduced from 3 weeks to 4 days through automation and coordination.
              </p>
            </div>

            <div className="rounded-lg border border-blue-200 bg-white p-6 shadow-sm">
              <div className="mb-4 inline-block rounded-lg bg-blue-100 p-3">
                <CheckCircle className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="mb-2 text-2xl font-bold text-slate-900">Zero Regulatory Findings</h3>
              <p className="text-slate-700">
                No regulatory findings in the first 2 audits post-launch, demonstrating trustworthiness and compliance adherence.
              </p>
            </div>

            <div className="rounded-lg border border-purple-200 bg-white p-6 shadow-sm">
              <div className="mb-4 inline-block rounded-lg bg-purple-100 p-3">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="mb-2 text-2xl font-bold text-slate-900">15+ Institutions</h3>
              <p className="text-slate-700">
                Adopted by 15+ financial institutions within the first year post-launch.
              </p>
            </div>

            <div className="rounded-lg border border-orange-200 bg-white p-6 shadow-sm">
              <div className="mb-4 inline-block rounded-lg bg-orange-100 p-3">
                <TrendingUp className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="mb-2 text-2xl font-bold text-slate-900">$2M ARR Expansion</h3>
              <p className="text-slate-700">
                Led to $2 million annual recurring revenue expansion through adoption and upsells.
              </p>
            </div>

            <div className="rounded-lg border border-pink-200 bg-white p-6 shadow-sm">
              <div className="mb-4 inline-block rounded-lg bg-pink-100 p-3">
                <TrendingUp className="h-6 w-6 text-pink-600" />
              </div>
              <h3 className="mb-2 text-2xl font-bold text-slate-900">NPS Score: 67</h3>
              <p className="text-slate-700">
                Net Promoter Score increased from 28 to 67, indicating strong user satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reflection */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="rounded-lg border border-slate-200 bg-white p-8 sm:p-12">
          <h2 className="mb-6 text-3xl font-bold text-slate-900">Reflection & Lessons Learned</h2>

          <div className="space-y-6">
            <p className="text-lg text-slate-700">
              This project fundamentally shaped my understanding of design in highly regulated industries. The compliance space operates with different values and constraints than consumer products, and recognizing those differences was critical to success.
            </p>

            <div className="rounded-lg border-l-4 border-blue-600 bg-blue-50 p-6">
              <h3 className="mb-2 text-xl font-semibold text-slate-900">The Core Insight</h3>
              <p className="text-lg font-medium text-slate-700 italic">
                In compliance, "delightful" means "trustworthy and predictable," not "clever and novel."
              </p>
              <p className="mt-4 text-slate-700">
                This realization transformed how I approach design decisions in regulated environments. Rather than seeking innovation for innovation's sake, I learned to ask: "Does this build trust? Is it predictable? Can users reliably understand and use it under pressure?"
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-slate-900">Key Takeaways</h3>

              <ul className="space-y-3">
                <li className="flex gap-4">
                  <ArrowRight className="mt-1 h-5 w-5 flex-shrink-0 text-blue-600" />
                  <p className="text-slate-700">
                    <span className="font-medium">Research-driven advocacy:</span> Data from user research became my most powerful tool for pushing back on features that didn't serve user needs.
                  </p>
                </li>
                <li className="flex gap-4">
                  <ArrowRight className="mt-1 h-5 w-5 flex-shrink-0 text-blue-600" />
                  <p className="text-slate-700">
                    <span className="font-medium">Collaboration across disciplines:</span> Working closely with compliance SMEs elevated my understanding of the regulatory context and informed every design decision.
                  </p>
                </li>
                <li className="flex gap-4">
                  <ArrowRight className="mt-1 h-5 w-5 flex-shrink-0 text-blue-600" />
                  <p className="text-slate-700">
                    <span className="font-medium">Design systems matter:</span> Establishing a design system early provided consistency, enabled the team to move faster, and created a foundation for sustainable product growth.
                  </p>
                </li>
                <li className="flex gap-4">
                  <ArrowRight className="mt-1 h-5 w-5 flex-shrink-0 text-blue-600" />
                  <p className="text-slate-700">
                    <span className="font-medium">Predictability builds adoption:</span> Users embraced a product that felt reliable and understandable, even when it was feature-light compared to alternatives.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-slate-900 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="mb-4 text-3xl font-bold">Want to learn more?</h2>
          <p className="mb-8 max-w-2xl text-lg text-slate-300">
            Each project in my portfolio demonstrates a different facet of my design approach. Explore how I tackle complex problems across different domains.
          </p>
          <button className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-blue-700">
            Back to Portfolio
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
