import React from 'react';

export default function CloudOpsPortfolioPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">
          Alert Fatigue Solution for CloudOps
        </h1>
        <p className="text-xl text-gray-600">
          Intelligent alert grouping system that reduced false positives and improved engineer engagement
        </p>
      </div>

      {/* Problem */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">The Problem</h2>
        <p className="text-gray-700 leading-relaxed">
          Engineers at CloudOps were systematically ignoring alerts. Through research, I identified the root cause: alert fatigue from too many false positives. The monitoring platform was generating noise that made it harder to spot genuine issues.
        </p>
      </section>

      {/* Solution */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">The Solution</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          I designed and shipped an intelligent alert management system with three key components:
        </p>
        <ul className="space-y-3 ml-6">
          <li className="text-gray-700">
            <strong>Alert Grouping:</strong> Automatically clusters related alerts to reduce noise
          </li>
          <li className="text-gray-700">
            <strong>Severity Scoring:</strong> ML-based scoring to prioritize critical issues
          </li>
          <li className="text-gray-700">
            <strong>Customizable Thresholds:</strong> Teams can adjust sensitivity for their workflows
          </li>
          <li className="text-gray-700">
            <strong>Weekly Digest:</strong> Email summaries to keep context without alert fatigue
          </li>
        </ul>
      </section>

      {/* Execution */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">Execution</h2>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 space-y-3">
          <div>
            <span className="font-semibold text-gray-900">Timeline:</span>
            <span className="text-gray-700"> 2 sprints</span>
          </div>
          <div>
            <span className="font-semibold text-gray-900">User Base:</span>
            <span className="text-gray-700"> ~800 engineers</span>
          </div>
          <div>
            <span className="font-semibold text-gray-900">Impact:</span>
            <span className="text-gray-700"> Significant reduction in false positive complaints</span>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">Outcomes</h2>
        <ul className="space-y-2 ml-6 list-disc">
          <li className="text-gray-700">Reduced false positive complaints across the user base</li>
          <li className="text-gray-700">Increased alert engagement and faster incident response</li>
          <li className="text-gray-700">Became a demo highlight in sales calls, demonstrating product quality and responsiveness to user needs</li>
        </ul>
      </section>

      {/* Skills */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">Skills Demonstrated</h2>
        <div className="flex flex-wrap gap-2">
          {[
            'Problem Research',
            'Systems Design',
            'Product Thinking',
            'Full-Stack Development',
            'User Experience',
            'Cross-team Collaboration'
          ].map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-blue-100 text-blue-900 rounded-full text-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
