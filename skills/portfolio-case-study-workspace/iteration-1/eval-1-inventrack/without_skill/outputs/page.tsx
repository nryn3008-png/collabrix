'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function InvenTrackCaseStudy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <Link
            href="/portfolio"
            className="text-gray-600 hover:text-gray-900 text-sm font-medium"
          >
            ← Back to Portfolio
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <div className="max-w-3xl">
            <p className="text-indigo-600 font-semibold text-sm mb-4">CASE STUDY</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              InvenTrack
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              A unified inventory dashboard that helped store managers save 90+ minutes daily and reduce stock-out incidents by 45%.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div>
                <p className="text-gray-500 mb-1">Role</p>
                <p className="font-semibold text-gray-900">Solo Product Designer</p>
              </div>
              <div>
                <p className="text-gray-500 mb-1">Timeline</p>
                <p className="font-semibold text-gray-900">8 Weeks</p>
              </div>
              <div>
                <p className="text-gray-500 mb-1">Status</p>
                <p className="font-semibold text-gray-900">Live (Oct 2024)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        {/* Overview Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Overview</h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              <span className="font-semibold text-gray-900">InvenTrack</span> is a B2B inventory management platform designed specifically for mid-market retail chains. The product modernizes how store managers monitor stock levels, receive alerts, and manage reordering—transforming a time-consuming manual process into an intelligent, unified system.
            </p>
            <p>
              As the solo designer, I partnered with 4 engineers and 1 product manager to understand the real pain points store managers faced and deliver a solution that had immediate, measurable impact.
            </p>
          </div>
        </section>

        {/* The Problem */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">The Problem</h2>
          <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8 rounded-r">
            <p className="text-lg text-gray-900 font-semibold mb-2">
              Store managers were spending 2+ hours daily on manual stock reconciliation
            </p>
            <p className="text-gray-700">
              across 3 different screens, using an outdated inventory system that provided no insights or alerts.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900">Current State Issues</h3>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <span className="text-red-500 font-bold text-xl">•</span>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">No Visibility</p>
                  <p className="text-gray-700">
                    The existing inventory view was a giant table with no filtering, search, or ability to prioritize what matters most.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-red-500 font-bold text-xl">•</span>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Manual & Reactive</p>
                  <p className="text-gray-700">
                    Managers had to manually check multiple screens to find stock issues, then react after problems occurred.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-red-500 font-bold text-xl">•</span>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Context Switching</p>
                  <p className="text-gray-700">
                    No mobile option meant managers couldn't act on issues when they were on the store floor.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Research & Discovery */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Research & Discovery</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            I conducted in-depth research to understand how store managers actually worked and what would make the biggest difference.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2 text-lg">User Interviews</h4>
              <p className="text-2xl font-bold text-indigo-600 mb-2">6 interviews</p>
              <p className="text-gray-700">
                One-on-one conversations with store managers from different retail chains and store sizes.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2 text-lg">Contextual Inquiry</h4>
              <p className="text-2xl font-bold text-indigo-600 mb-2">2 on-site visits</p>
              <p className="text-gray-700">
                Observed store managers in their actual environment, watching how they checked inventory and managed restocking.
              </p>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Discovery</h3>
          <div className="bg-gradient-to-r from-indigo-100 to-blue-100 p-8 rounded-lg border border-indigo-200">
            <p className="text-gray-900 text-lg leading-relaxed">
              <span className="font-bold">The core issue wasn't just visibility—it was predictability.</span> Store managers needed <span className="font-semibold">smart alerts that predicted upcoming stock-outs</span>, not just dashboards that showed current levels. They wanted to act proactively, not firefight problems.
            </p>
          </div>
        </section>

        {/* Design & Solution */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Design & Solution</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Based on research insights, I designed a unified inventory dashboard with three core features:
          </p>

          <div className="space-y-12">
            {/* Feature 1 */}
            <div className="border-l-4 border-indigo-500 pl-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Smart Alerts</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Intelligent, threshold-based notifications that alert managers to potential stock-outs before inventory runs empty. Managers can set custom thresholds per product category and receive alerts on their preferred channel.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-indigo-500 mt-1">✓</span>
                  <span>Customizable thresholds by product and location</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-500 mt-1">✓</span>
                  <span>Priority-based alert queuing (critical, high, medium)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-500 mt-1">✓</span>
                  <span>One-click action to initiate reordering</span>
                </li>
              </ul>
            </div>

            {/* Feature 2 */}
            <div className="border-l-4 border-indigo-500 pl-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Unified Dashboard</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Replaced the sprawling, multi-screen inventory table with a single, coherent view. Smart filtering, search, and sorting made it easy to find and act on what matters most.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-indigo-500 mt-1">✓</span>
                  <span>Real-time stock levels across all products and locations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-500 mt-1">✓</span>
                  <span>Advanced filtering by category, status, and urgency</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-500 mt-1">✓</span>
                  <span>Visual status indicators (in-stock, low, critical)</span>
                </li>
              </ul>
            </div>

            {/* Feature 3 */}
            <div className="border-l-4 border-indigo-500 pl-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Mobile-Responsive View</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Designed the dashboard to work seamlessly on tablets and phones, allowing managers to check stock and take action directly from the store floor.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-indigo-500 mt-1">✓</span>
                  <span>Touch-optimized interactions for in-store use</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-500 mt-1">✓</span>
                  <span>Offline fallback for critical information</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-500 mt-1">✓</span>
                  <span>Barcode scanning integration for quick lookups</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Results</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-12">
            InvenTrack shipped in 8 weeks and has been live since October 2024. The impact has been significant:
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
              <p className="text-sm text-green-600 font-semibold uppercase mb-2">Reduction in Stock-Out Incidents</p>
              <p className="text-5xl font-bold text-green-700 mb-2">45%</p>
              <p className="text-gray-700 text-sm">Fewer emergency restocks and missed sales opportunities</p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
              <p className="text-sm text-green-600 font-semibold uppercase mb-2">Time Saved Per Manager Daily</p>
              <p className="text-5xl font-bold text-green-700 mb-2">90+ min</p>
              <p className="text-gray-700 text-sm">Managers freed up for higher-value store floor activities</p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
              <p className="text-sm text-green-600 font-semibold uppercase mb-2">Adoption Within 2 Months</p>
              <p className="text-5xl font-bold text-green-700 mb-2">340+</p>
              <p className="text-gray-700 text-sm">Retail stores actively using InvenTrack</p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
            <h4 className="font-semibold text-gray-900 mb-3 text-lg">Manager Feedback</h4>
            <p className="text-gray-700 italic">
              "I used to spend my whole morning buried in spreadsheets across different systems. Now I get an alert, check the dashboard, and can action it from the floor. I've got my time back."
            </p>
            <p className="text-gray-500 text-sm mt-3">— Store Manager, Mid-Market Retail Chain</p>
          </div>
        </section>

        {/* Learnings */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Learnings</h2>
          <div className="space-y-6">
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-gray-900 mb-2 text-lg">Talk to Users in Context</h4>
              <p className="text-gray-700">
                Visiting retail locations was crucial. Observing how managers actually worked revealed the real problem (predictability) that interviews alone wouldn't have surfaced.
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-gray-900 mb-2 text-lg">Design for the Workflow, Not the Feature</h4>
              <p className="text-gray-700">
                The unified dashboard worked because it matched how managers actually moved through their day—not because it had more features, but because it eliminated context switching.
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-gray-900 mb-2 text-lg">Mobile-First for Enterprise</h4>
              <p className="text-gray-700">
                Even in B2B workflows, users often operate on mobile/tablet. Treating mobile as a first-class experience, not an afterthought, was key to adoption.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="border-t border-gray-200 pt-12">
          <p className="text-gray-600 mb-6">Want to see more work?</p>
          <Link
            href="/portfolio"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            ← Back to Portfolio
          </Link>
        </section>
      </div>
    </div>
  );
}
