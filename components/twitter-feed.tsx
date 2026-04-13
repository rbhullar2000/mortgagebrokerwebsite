'use client'

export function TwitterFeed() {
  return (
    <div className="space-y-6">

      {/* FEATURED POST */}
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
          Latest Insight
        </p>

        <h3 className="mt-2 text-lg font-semibold text-slate-900">
          Housing Market Reality Right Now
        </h3>

        <p className="mt-2 text-sm text-gray-600 leading-relaxed">
          Demand is shifting, supply remains tight, and rates are still elevated.
          No single factor is fixing affordability — which is why strategy matters
          more than timing in today’s market.
        </p>

        <a
          href="https://x.com/robbhullar"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-sm font-medium text-blue-600 hover:underline"
        >
          Read full post →
        </a>
      </div>

      {/* SECOND POST */}
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h4 className="text-md font-semibold text-slate-900">
          Fixed vs Variable: What Matters Right Now
        </h4>

        <p className="mt-2 text-sm text-gray-600 leading-relaxed">
          With rates still high, the decision between fixed and variable isn’t about
          guessing the market — it’s about aligning with your timeline, risk tolerance,
          and long-term plan.
        </p>

        <a
          href="https://x.com/robbhullar"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block text-sm font-medium text-blue-600 hover:underline"
        >
          View insight →
        </a>
      </div>

      {/* CTA */}
      <div className="rounded-xl border border-gray-200 bg-slate-50 p-6">
        <p className="text-sm font-medium text-slate-900">
          Want help applying this to your situation?
        </p>

        <p className="mt-1 text-sm text-gray-600">
          I can run numbers based on your exact scenario — purchase, renewal, or refinance.
        </p>

        <a
  href="https://kanwal-jeet-bhullar.mtg-app.com/signup?brokerId=1b8790a6-314c-429f-884d-77ceebfa2b96"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-4 inline-block rounded-md bg-[#0A2A43] px-4 py-2 text-sm font-medium text-white hover:opacity-90"
>
          Start Your Application → →
        </a>
      </div>

    </div>
  )
}
