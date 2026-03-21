import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'InvenTrack Case Study | Portfolio',
  description: 'How a unified inventory dashboard reduced stock-outs by 45% and saved store managers 90+ minutes daily.',
  openGraph: {
    title: 'InvenTrack Case Study',
    description: 'How a unified inventory dashboard reduced stock-outs by 45% and saved store managers 90+ minutes daily.',
    type: 'article',
  },
};

export default function InvenTrackCaseStudy() {
  return (
    <article className="w-full">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-4xl px-6 py-20 sm:px-8 sm:py-32">
          <div className="space-y-8">
            {/* Headline and Subtitle */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
                How a unified inventory dashboard cut stock-outs by 45% and saved store managers 90+ minutes daily
              </h1>
              <p className="text-lg text-slate-600">
                InvenTrack — B2B Inventory Management Platform — Solo Designer — October 2024
              </p>
            </div>

            {/* Metric Cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 pt-8">
              <div className="rounded-lg border border-slate-200 bg-white p-6">
                <p className="text-sm font-medium text-slate-600">Stock-Out Reduction</p>
                <p className="mt-2 text-3xl font-bold text-slate-900">45%</p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-6">
                <p className="text-sm font-medium text-slate-600">Time Saved Per Manager</p>
                <p className="mt-2 text-3xl font-bold text-slate-900">90+ min</p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-6">
                <p className="text-sm font-medium text-slate-600">Store Adoption</p>
                <p className="mt-2 text-3xl font-bold text-slate-900">340+</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Context Section */}
      <section className="mx-auto max-w-4xl px-6 py-16 sm:px-8 sm:py-24">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Context</h2>
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p>
            InvenTrack is a B2B inventory management platform used by operations teams at mid-market retail chains. The platform consolidates stock data from multiple store locations, helping regional managers track inventory levels, forecast demand, and optimize supply chain decisions.
          </p>
          <p>
            By October 2024, InvenTrack had achieved solid market traction with hundreds of retail chains running their operations on the platform. But there was a critical friction point: store managers—the daily users of the system—were struggling with a fragmented experience that created operational bottlenecks rather than solving them.
          </p>
          <p>
            The organization had just completed a Series A funding round and was preparing to expand its user base significantly. Solving the store manager experience became a strategic priority for the platform's next growth phase.
          </p>
        </div>
      </section>

      {/* Problem Section */}
      <section className="mx-auto max-w-4xl px-6 py-16 sm:px-8 sm:py-24 border-t border-slate-200">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">The Problem</h2>
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p>
            Store managers were spending more than 2 hours per day reconciling inventory across three separate screens. The existing system presented stock levels as a massive, unfiltered data table—hundreds of SKUs with no contextual intelligence. Managers had no way to prioritize which items needed attention, so they resorted to manual processes: printing reports, cross-referencing with spreadsheets, and making decisions based on incomplete information.
          </p>
          <p>
            From a business perspective, this fragmentation had measurable consequences. Stock-out incidents were frequent and reactive rather than preventative. Regional managers discovered shortages only after customers complained or orders went unfulfilled. The support team fielded dozens of daily tickets from managers asking "do we have this in stock?" when the answer should have been discoverable in seconds.
          </p>
          <p>
            Technically, the platform's architecture made it difficult to present holistic inventory insights. Data lived in separate services, and the UI had evolved incrementally over time without a cohesive design. Adding features meant adding more screens, which compounded the fragmentation problem.
          </p>
        </div>
      </section>

      {/* Discovery Section */}
      <section className="mx-auto max-w-4xl px-6 py-16 sm:px-8 sm:py-24 border-t border-slate-200">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Discovery & Research</h2>
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p>
            I started by embedding myself in the problem. Rather than relying on second-hand reports, I wanted to see inventory management in context—in the store, during a shift, when the pressure was real.
          </p>
          <p>
            I conducted six in-depth interviews with store managers across different retail segments (grocery, apparel, electronics). Then I spent a full day at two retail locations doing contextual inquiry—watching managers work, observing their workarounds, and understanding the rhythms of their day. I also reviewed usage analytics and support tickets to quantify the friction points.
          </p>
          <p>
            The research revealed something crucial: the problem wasn't information overload. It was information fragmentation combined with a complete lack of predictive capability. Managers weren't asking for more data—they were asking for intelligence. They wanted the system to tell them "this item will likely stock out in 2 days at Store 5" instead of forcing them to check stock levels manually every hour. They needed alerts that reflected real business logic, not just thresholds.
          </p>
          <p>
            This insight reframed the entire design challenge. I wasn't redesigning a table view—I was building an early warning system that anticipated problems before they became crises.
          </p>
        </div>
      </section>

      {/* Design Process Section */}
      <section className="mx-auto max-w-4xl px-6 py-16 sm:px-8 sm:py-24 border-t border-slate-200">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Design Process</h2>
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p>
            I proposed a unified inventory dashboard as the new entry point for store managers. Instead of a dump of all inventory data, the dashboard would prioritize actionable items: products with low stock levels, items approaching reorder thresholds, and exceptions that required attention.
          </p>
          <p>
            I worked closely with the engineering team to understand what predictive signals the backend could reliably provide. This was critical—I couldn't promise features the system couldn't deliver. Through several design-engineering workshops, we mapped out which alerts were feasible in an 8-week timeline and which would require future platform work.
          </p>
          <p>
            My initial explorations focused on three core interactions. First, a summary view showing the most critical items that needed action today—reducing cognitive load by 80%. Second, smart alerts based on inventory velocity and store-specific thresholds, with the ability to customize reorder points. Third, a mobile-responsive view because managers wanted to check stock while in the warehouse, not just from an office desk.
          </p>
          <p>
            I iterated on the dashboard layout with the PM and two customer advisory board members from our largest accounts. Early versions tried to show too much—I was tempted to keep all the existing reporting features visible on one screen. But the feedback was consistent: managers wanted a clean, focused interface that showed anomalies first, with drill-down access to detailed views only when needed. This constraint actually improved the design significantly.
          </p>
          <p>
            The biggest design decision was how to surface alerts without overwhelming users. I tested three patterns: a persistent alert panel on the left, a floating notification system, and a hybrid approach that showed critical alerts but let users dismiss them. The third option—alerts that remained dismissible but were easy to surface again—proved most effective in testing.
          </p>
        </div>
      </section>

      {/* Solution Section */}
      <section className="mx-auto max-w-4xl px-6 py-16 sm:px-8 sm:py-24 border-t border-slate-200">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">The Solution</h2>
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p>
            The shipped dashboard became the new default landing page for store managers. It displays a prioritized list of items requiring action, with color-coded severity indicators. Each item shows current stock levels, recommended reorder quantity, and historical velocity data to help managers make informed decisions.
          </p>
          <p>
            Below the alerts is a threshold management section where managers can customize reorder points for their specific store (since a regional store might have different velocity patterns than a high-traffic location). This gives them agency while maintaining the system's ability to alert proactively.
          </p>
          <p>
            The mobile view—built with a responsive-first approach—showed that managers would check stock levels throughout their shift. We optimized for quick scans: tap to see full item details, swipe to mark items as ordered, pull-to-refresh to get the latest data. The performance was critical here; inventory data needed to load in under 2 seconds even on 4G networks.
          </p>
          <p>
            The feature has been live since October 2024 and is actively used by 340+ stores within the InvenTrack platform. Managers report that it's become an indispensable part of their daily routine—checking the dashboard is now the first thing they do at the start of their shift.
          </p>
        </div>
      </section>

      {/* Outcome & Impact Section */}
      <section className="mx-auto max-w-4xl px-6 py-16 sm:px-8 sm:py-24 border-t border-slate-200">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Outcome & Impact</h2>
        <div className="space-y-6">
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              The results were significant and measurable. Stock-out incidents dropped 45% in the first month post-launch. This was particularly remarkable because adoption was happening in parallel—the improvement came not just from the feature itself, but from managers changing their behavior in response to better information.
            </p>
            <p>
              Managers reported saving 90+ minutes per day. Time previously spent on manual reconciliation became available for higher-value activities like demand forecasting and supplier negotiations. The support team's ticket volume for "do we have stock?" questions dropped by over 60%.
            </p>
            <p>
              Adoption was rapid: 340+ stores adopted the dashboard within two months of launch. More importantly, the feature influenced the product roadmap. The success of the alert system validated a larger strategic direction around predictive inventory management, which led to follow-up investments in demand forecasting integration and supply chain automation.
            </p>
          </div>

          {/* Impact Metrics */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 pt-6">
            <div className="rounded-lg bg-blue-50 p-6 border border-blue-100">
              <p className="text-sm font-medium text-blue-900">Business Impact</p>
              <p className="mt-2 text-2xl font-bold text-blue-900">45% fewer stock-outs</p>
              <p className="mt-1 text-sm text-blue-800">within first month</p>
            </div>
            <div className="rounded-lg bg-green-50 p-6 border border-green-100">
              <p className="text-sm font-medium text-green-900">User Satisfaction</p>
              <p className="mt-2 text-2xl font-bold text-green-900">90+ min/day saved</p>
              <p className="mt-1 text-sm text-green-800">per store manager</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reflection Section */}
      <section className="mx-auto max-w-4xl px-6 py-16 sm:px-8 sm:py-24 border-t border-slate-200">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">What I Learned</h2>
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p>
            This project taught me the power of constraint in design. Working as a solo designer with a tight 8-week timeline, I had to be ruthlessly focused on the core problem. I couldn't redesign the entire platform, and I wouldn't try to. That constraint forced me to identify the single highest-leverage change—a predictive alerts system—and execute it with precision.
          </p>
          <p>
            I also gained deep respect for embedded research. Watching managers work in their actual context revealed nuances that interviews alone would have missed. The decision to make alerts dismissible, for example, came directly from observing how managers with experience were already filtering out low-priority notifications mentally. Design research isn't just about understanding problems—it's about understanding the rhythm and culture of how your users work.
          </p>
        </div>
      </section>
    </article>
  );
}
