export async function generateMetadata({ params }: { params: { slug: string } }) {
  const posts = getPostData()
  const post = posts[params.slug] || posts["bank-of-canada-cuts-rates-again"]

  return {
    title: `${post.title} | Rob Bhullar Mortgage Blog`,
    description: post.excerpt,
  }
}

function getPostData() {
  return {
return {
  "bank-of-canada-holds-key-interest-rate-June-2025": {
    title: "Bank of Canada Holds Key Interest Rate at 2.75%: What It Means for Your Mortgage",
    excerpt:
      "On June 5, 2025, the Bank of Canada held its key overnight rate at 2.75%. Here's why the central bank paused and what it means for Canadian homeowners and buyers.",
    content: `
      <div class="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8 rounded-r-lg">
        <h3 class="text-lg font-semibold text-yellow-800 mb-2">Policy Update Summary</h3>
        <p class="text-yellow-700">
          At its June 5, 2025 meeting, the Bank of Canada decided to hold its target for the overnight rate at 2.75%.
          This decision reflects continued progress in reducing core inflation and a desire to evaluate the impact of earlier rate cuts.
        </p>
      </div>

      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 border-gray-200 pb-2">
        Why Did the Bank Pause Now?
      </h2>

      <p class="mb-6 text-gray-700">
        Canada’s central bank cited improving inflation trends as a key reason for the pause.
        April’s core inflation readings showed further softening, and economic growth remained subdued.
        Policymakers emphasized they are taking a cautious approach to avoid reigniting inflation or tightening prematurely.
      </p>

      <p class="mb-6 text-gray-700">
        The Bank noted that while shelter price inflation remains elevated, other components of the Consumer Price Index (CPI) are easing.
        Labour market conditions have also loosened slightly, which is helping reduce wage pressures.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 border-gray-200 pb-2">
        What It Means for Borrowers
      </h2>

      <ul class="space-y-2 mb-6 text-gray-700">
        <li>• If you have a variable-rate mortgage, your payment remains unchanged — for now.</li>
        <li>• Fixed mortgage rates have already adjusted based on bond market expectations.</li>
        <li>• More rate cuts are still expected later in 2025, but timing is data-dependent.</li>
      </ul>

      <p class="mb-6 text-gray-700">
        For many Canadian homeowners, this rate hold offers an opportunity to reassess their mortgage strategy.
        Whether you’re renewing, refinancing, or entering the market for the first time, understanding your options is more important than ever.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 border-gray-200 pb-2">
        Strategic Advice for the Months Ahead
      </h2>

      <p class="mb-6 text-gray-700">
        Borrowers are encouraged to:
      </p>
      <ul class="space-y-2 mb-6 text-gray-700">
        <li>• Lock in pre-approvals if planning to buy in the next 90 days</li>
        <li>• Consider shorter-term fixed options as rates evolve</li>
        <li>• Use rate holds and renewal windows to negotiate with leverage</li>
      </ul>

      <div class="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
        <h3 class="text-lg font-semibold text-blue-800 mb-2">Market Outlook</h3>
        <p class="text-blue-700">
          Economists are divided on the pace of future cuts.
          While many expect one or two more reductions in 2025, the Bank made it clear that decisions will depend on inflation, consumer spending, and global risks.
        </p>
      </div>

      <div class="bg-gradient-to-r from-blue-600 to-green-600 text-white p-6 rounded-lg">
        <p class="font-semibold text-center">
          Have questions about how this decision impacts your mortgage?
          Book a free consultation to review your options.
        </p>
        <div class="mt-4 text-center">
          <a href="/#contact"
            class="inline-block bg-white text-blue-600 hover:bg-gray-100 px-5 py-3 rounded-lg font-medium">
            Book a Call
          </a>
        </div>
      </div>
    `,
    date: "June 8, 2025",
    author: "Rob Bhullar",
    category: "Interest Rates",
    image: "bank-of-canada-building.png?height=400&width=800",
  },
    "bank-of-canada-cuts-rates-again": {
      title: "Bank of Canada Cuts Key Interest Rate to 2.75%: Historic Relief for Mortgage Holders",
      excerpt:
        "The Bank of Canada cut its overnight rate by 0.25% to 2.75%, marking the fifth consecutive rate cut since June 2024. This brings significant relief to variable-rate mortgage holders and new opportunities for homebuyers.",
      content: `
        <div class="bg-green-50 border-l-4 border-green-500 p-6 mb-8 rounded-r-lg">
          <div class="flex items-center mb-3">
            <svg class="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <h3 class="text-lg font-semibold text-green-800">Great News for Borrowers</h3>
          </div>
          <p class="text-green-700">The Bank of Canada cut its overnight rate to 2.75%, down from the 5% peak in 2023-2024. This represents a total reduction of 2.25% since rate cuts began, providing substantial savings for mortgage holders and improved affordability for homebuyers. This is the most recent information as of June 2025.</p>
        </div>

        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 border-gray-200 pb-2">The Bank of Canada's Decision</h2>
        
        <p class="mb-6 text-lg leading-relaxed">The Bank of Canada, in its announcement on June 13, 2025, lowered its target for the overnight rate by 25 basis points to <strong>2.75%</strong>, with the Bank Rate now at <strong>3.00%</strong> and the deposit rate at <strong>2.75%</strong>. This marks the fifth consecutive rate cut since the easing cycle began in June 2024, as inflation has returned closer to the 2% target and economic growth has moderated. This is the most recent information as of June 2025.</p>

        <div class="bg-gray-50 p-6 rounded-lg mb-8">
          <h3 class="text-xl font-semibold mb-4 text-gray-800">Rate History at a Glance</h3>
          <div class="grid md:grid-cols-3 gap-4">
            <div class="text-center p-4 bg-white rounded-lg shadow-sm">
              <div class="text-2xl font-bold text-green-600">2.75%</div>
              <div class="text-sm text-gray-600">Current Overnight Rate</div>
            </div>
            <div class="text-center p-4 bg-white rounded-lg shadow-sm">
              <div class="text-2xl font-bold text-blue-600">3.00%</div>
              <div class="text-sm text-gray-600">Bank Rate</div>
            </div>
            <div class="text-center p-4 bg-white rounded-lg shadow-sm">
              <div class="text-2xl font-bold text-purple-600">2.25%</div>
              <div class="text-sm text-gray-600">Total Rate Cuts Since Peak</div>
            </div>
          </div>
        </div>

        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 border-gray-200 pb-2">Why Rates Were Cut</h2>
        
        <p class="mb-4 leading-relaxed">The Bank's decision reflects several key economic developments:</p>
        
        <div class="grid md:grid-cols-2 gap-6 mb-8">
          <div class="bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
            <h3 class="font-semibold text-green-800 mb-3">Positive Economic Indicators</h3>
            <ul class="space-y-2 text-green-700">
              <li>• Inflation has fallen to 2.8%, near the 2% target</li>
              <li>• Core inflation measures showing sustained decline</li>
              <li>• Economic growth moderating as intended</li>
              <li>• Labor market rebalancing without major disruption</li>
            </ul>
          </div>
          <div class="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
            <h3 class="font-semibold text-blue-800 mb-3">Supporting Factors</h3>
            <ul class="space-y-2 text-blue-700">
              <li>• Housing market showing signs of stabilization</li>
              <li>• Consumer spending adjusting to higher rates</li>
              <li>• Business investment remaining resilient</li>
              <li>• Global economic conditions improving</li>
            </ul>
          </div>
        </div>

        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 border-gray-200 pb-2">Impact on Different Mortgage Types</h2>

        <div class="space-y-6 mb-8">
          <div class="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
            <h3 class="text-xl font-semibold text-green-800 mb-3 flex items-center">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
              </svg>
              Variable-Rate Mortgage Holders
            </h3>
            <p class="text-green-700 mb-3">Variable-rate mortgage holders are the biggest winners from this rate cut:</p>
            <ul class="space-y-1 text-green-700">
              <li>• <strong>Immediate Savings:</strong> Monthly payments decrease automatically</li>
              <li>• <strong>Cumulative Relief:</strong> Total savings of ~$750/month on a $500K mortgage since peak rates</li>
              <li>• <strong>Principal Paydown:</strong> More of your payment goes toward principal</li>
            </ul>
            <div class="mt-4 p-3 bg-green-100 rounded-lg">
              <div class="text-sm text-green-800">
                <strong>Example:</strong> On a $500,000 variable mortgage, you're now saving approximately $750/month compared to the 5% peak rate.
              </div>
            </div>
          </div>

          <div class="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
            <h3 class="text-xl font-semibold text-blue-800 mb-3 flex items-center">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
              </svg>
              Fixed-Rate Mortgage Renewals
            </h3>
            <p class="text-blue-700 mb-3">Those renewing fixed-rate mortgages are seeing much better options:</p>
            <ul class="space-y-1 text-blue-700">
              <li>• <strong>Lower Renewal Rates:</strong> 5-year fixed rates now around 4.5-5.0%</li>
              <li>• <strong>Better Terms:</strong> Lenders competing more aggressively</li>
              <li>• <strong>Refinancing Opportunities:</strong> Consider breaking existing high-rate mortgages</li>
            </ul>
          </div>

          <div class="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
            <h3 class="text-xl font-semibold text-purple-800 mb-3 flex items-center">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
              </svg>
              Prospective Homebuyers
            </h3>
            <p class="text-purple-700 mb-3">New homebuyers are benefiting from improved affordability:</p>
            <ul class="space-y-1 text-purple-700">
              <li>• <strong>Lower Mortgage Rates:</strong> Variable rates now starting around 4.5%</li>
              <li>• <strong>Increased Buying Power:</strong> Qualify for larger mortgages</li>
              <li>• <strong>Market Opportunities:</strong> More balanced market conditions</li>
            </ul>
          </div>
        </div>

        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 border-gray-200 pb-2">Current Mortgage Rate Environment</h2>

        <div class="bg-gray-50 p-6 rounded-lg mb-8">
          <h3 class="text-xl font-semibold mb-4 text-gray-800">Typical Rates as of June 2025</h3>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-semibold text-gray-800 mb-2">Variable Rates</h4>
              <div class="space-y-2">
                <div class="flex justify-between">
                  <span class="text-gray-600">Prime - 0.5%</span>
                  <span class="font-bold text-green-600">3.95%</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Prime - 0.25%</span>
                  <span class="font-bold text-green-600">4.20%</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Prime</span>
                  <span class="font-bold text-green-600">4.45%</span>
                </div>
              </div>
            </div>
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-semibold text-gray-800 mb-2">Fixed Rates</h4>
              <div class="space-y-2">
                <div class="flex justify-between">
                  <span class="text-gray-600">1-Year Fixed</span>
                  <span class="font-bold text-blue-600">3.75%</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">3-Year Fixed</span>
                  <span class="font-bold text-blue-600">4.15%</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">5-Year Fixed</span>
                  <span class="font-bold text-blue-600">4.39%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 border-gray-200 pb-2">What's Next for Interest Rates?</h2>

        <div class="space-y-4 mb-8">
          <div class="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
            <h3 class="text-lg font-semibold text-yellow-800 mb-3">Bank of Canada's Forward Guidance</h3>
            <p class="text-yellow-700 mb-3">The Bank has indicated that further rate cuts are possible if:</p>
            <ul class="space-y-2 text-yellow-700">
              <li>• Inflation continues to move toward the 2% target</li>
              <li>• Economic growth remains below potential</li>
              <li>• Labor market conditions continue to normalize</li>
              <li>• Global economic conditions remain supportive</li>
            </ul>
          </div>

          <div class="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
            <h3 class="text-lg font-semibold text-blue-800 mb-3">Market Expectations</h3>
            <p class="text-blue-700 mb-3">Financial markets are pricing in:</p>
            <ul class="space-y-2 text-blue-700">
              <li>• Potential for 1-2 more rate cuts in 2025</li>
              <li>• Overnight rate potentially reaching 2.75-3.00%</li>
              <li>• Gradual approach to further easing</li>
              <li>• Data-dependent decision making</li>
            </ul>
          </div>
        </div>

        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 border-gray-200 pb-2">Strategic Considerations</h2>

        <div class="space-y-4 mb-8">
          <div class="bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
            <h3 class="text-lg font-semibold text-green-800 mb-3">If You Have a Variable Rate</h3>
            <ul class="space-y-2 text-green-700">
              <li>• <strong>Enjoy the Savings:</strong> Your payments are automatically lower</li>
              <li>• <strong>Consider Prepayments:</strong> Use savings to pay down principal</li>
              <li>• <strong>Stay Flexible:</strong> Variable rates may continue to benefit from cuts</li>
              <li>• <strong>Monitor Trends:</strong> Watch for signs of rate stabilization</li>
            </ul>
          </div>

          <div class="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-400">
            <h3 class="text-lg font-semibold text-orange-800 mb-3">If You Have a High Fixed Rate</h3>
            <ul class="space-y-2 text-orange-700">
              <li>• <strong>Consider Breaking:</strong> Calculate penalty vs. savings</li>
              <li>• <strong>Blend and Extend:</strong> Some lenders offer this option</li>
              <li>• <strong>Wait for Renewal:</strong> If penalty is too high</li>
              <li>• <strong>Get Professional Advice:</strong> Complex calculations required</li>
            </ul>
          </div>

          <div class="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-400">
            <h3 class="text-lg font-semibold text-purple-800 mb-3">If You're Buying a Home</h3>
            <ul class="space-y-2 text-purple-700">
              <li>• <strong>Get Pre-Approved:</strong> Lock in current improved rates</li>
              <li>• <strong>Consider Variable:</strong> May benefit from further cuts</li>
              <li>• <strong>Shop Around:</strong> Lenders are competing aggressively</li>
              <li>• <strong>Act Strategically:</strong> Market conditions are improving</li>
            </ul>
          </div>
        </div>

        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 border-gray-200 pb-2">Looking Ahead: Key Dates</h2>

        <div class="bg-slate-50 p-6 rounded-lg mb-8">
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <h3 class="text-lg font-semibold text-slate-800 mb-3">Upcoming Announcements</h3>
              <div class="space-y-3">
                <div class="flex items-center">
                  <div class="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                  <div>
                    <div class="font-medium">September 4, 2025</div>
                    <div class="text-sm text-gray-600">Next BoC Rate Decision</div>
                  </div>
                </div>
                <div class="flex items-center">
                  <div class="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <div>
                    <div class="font-medium">October 29, 2025</div>
                    <div class="text-sm text-gray-600">Rate Decision + MPR</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-slate-800 mb-3">What to Watch</h3>
              <ul class="space-y-2 text-slate-700">
                <li>• Monthly inflation data</li>
                <li>• Employment statistics</li>
                <li>• Housing market activity</li>
                <li>• Consumer spending patterns</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-r from-green-600 to-blue-600 text-white p-8 rounded-lg mb-8">
          <div class="text-center">
            <h3 class="text-2xl font-bold mb-4">Ready to Take Advantage of Lower Rates?</h3>
            <p class="mb-6 text-green-100">With rates at their lowest levels since early 2023, now is an excellent time to review your mortgage strategy. Whether you're looking to refinance, renew, or purchase, let's discuss how these rate cuts can benefit you.</p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/#contact" class="bg-white text-green-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors">
                Free Rate Review
              </a>
              <a href="https://r.mtg-app.com/robbhullar" target="_blank" rel="noopener noreferrer" class="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-600 px-6 py-3 rounded-lg font-semibold transition-colors">
                Get Current Rates
              </a>
            </div>
          </div>
        </div>

        <div class="border-t border-gray-200 pt-6 mt-8">
          <p class="text-sm text-gray-600 italic">
            <strong>Disclaimer:</strong> This analysis is for informational purposes only and should not be considered financial advice. Mortgage rates and terms are subject to change and individual circumstances may vary. Always consult with a qualified mortgage professional for personalized advice.
          </p>
        </div>
      `,
      date: "June 13, 2025",
      author: "Rob Bhullar",
      category: "Interest Rates",
      image: "bank-of-canada-building.png",
    },

    "first-time-home-buyer-incentive-changes": {
      title: "First-Time Home Buyer Programs Enhanced for 2025: New Opportunities in BC",
      excerpt:
        "The federal and provincial governments have expanded first-time homebuyer programs for 2025, with increased price thresholds, enhanced down payment assistance, and new tax credits making homeownership more accessible.",
      content: `
        <div class="bg-green-50 border-l-4 border-green-500 p-6 mb-8 rounded-r-lg">
          <div class="flex items-center mb-3">
            <svg class="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
            </svg>
            <h3 class="text-lg font-semibold text-green-800">Enhanced Support for 2025</h3>
          </div>
          <p class="text-green-700">Multiple government programs have been enhanced for 2025, with the First-Time Home Buyer Incentive increasing price thresholds to $850,000 in BC, new provincial down payment assistance, and expanded tax credits.</p>
        </div>

        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 border-gray-200 pb-2">What's New for 2025?</h2>
        
        <div class="grid md:grid-cols-2 gap-6 mb-8">
          <div class="bg-red-50 p-6 rounded-lg border-l-4 border-red-400">
            <h3 class="font-semibold text-red-800 mb-3">Previous Limits (2024)</h3>
            <ul class="space-y-2 text-red-700">
              <li>• Maximum home price: $750,000 in BC</li>
              <li>• Income limit: $150,000</li>
              <li>• Limited down payment assistance</li>
              <li>• Basic tax credit: $5,000</li>
            </ul>
          </div>
          <div class="bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
            <h3 class="font-semibold text-green-800 mb-3">Enhanced Limits (2025)</h3>
            <ul class="space-y-2 text-green-700">
              <li>• Maximum home price: $850,000 in BC</li>
              <li>• Income limit: $175,000</li>
              <li>• New BC down payment loan program</li>
              <li>• Enhanced tax credit: $8,000</li>
            </ul>
          </div>
        </div>

        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 border-gray-200 pb-2">Federal Programs</h2>

        <div class="space-y-6 mb-8">
          <div class="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
            <h3 class="text-xl font-semibold text-blue-800 mb-3">First-Time Home Buyer Incentive (Enhanced)</h3>
            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <h4 class="font-medium text-blue-700 mb-2">Eligibility</h4>
                <ul class="space-y-1 text-blue-600 text-sm">
                  <li>• Household income up to $175,000</li>
                  <li>• Home price up to $850,000 in BC</li>
                  <li>• First-time buyer status</li>
                  <li>• Primary residence only</li>
                </ul>
              </div>
              <div>
                <h4 class="font-medium text-blue-700 mb-2">Benefits</h4>
                <ul class="space-y-1 text-blue-600 text-sm">
                  <li>• 5% shared equity (existing homes)</li>
                  <li>• 10% shared equity (new homes)</li>
                  <li>• No monthly payments</li>
                  <li>• Repay when you sell or refinance</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-400">
            <h3 class="text-xl font-semibold text-purple-800 mb-3">Enhanced Home Buyers' Tax Credit</h3>
            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <h4 class="font-medium text-purple-700 mb-2">2025 Enhancements</h4>
                <ul class="space-y-1 text-purple-600 text-sm">
                  <li>• Increased to $8,000 (from $5,000)</li>
                  <li>• Up to $1,200 tax refund</li>
                  <li>• Applies to closing costs</li>
                  <li>• One-time credit per person</li>
                </ul>
              </div>
              <div>
                <h4 class="font-medium text-purple-700 mb-2">Eligible Expenses</h4>
                <ul class="space-y-1 text-purple-600 text-sm">
                  <li>• Legal fees</li>
                  <li>• Home inspection</li>
                  <li>• Appraisal fees</li>
                  <li>• Title insurance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 border-gray-200 pb-2">New BC Provincial Programs</h2>

        <div class="space-y-6 mb-8">
          <div class="bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
            <h3 class="text-xl font-semibold text-green-800 mb-3">BC First-Time Home Buyer Down Payment Loan (NEW)</h3>
            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <h4 class="font-medium text-green-700 mb-2">Program Details</h4>
                <ul class="space-y-1 text-green-600 text-sm">
                  <li>• Up to $40,000 interest-free loan</li>
                  <li>• 5% of home purchase price maximum</li>
                  <li>• No payments for 5 years</li>
                  <li>• Repayable when you sell</li>
                </ul>
              </div>
              <div>
                <h4 class="font-medium text-green-700 mb-2">Eligibility</h4>
                <ul class="space-y-1 text-green-600 text-sm">
                  <li>• Household income under $150,000</li>
                  <li>• Home price under $800,000</li>
                  <li>• BC resident for 12+ months</li>
                  <li>• First-time buyer in BC</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-400">
            <h3 class="text-xl font-semibold text-orange-800 mb-3">Enhanced Property Transfer Tax Exemption</h3>
            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <h4 class="font-medium text-orange-700 mb-2">2025 Updates</h4>
                <ul class="space-y-1 text-orange-600 text-sm">
                  <li>• Full exemption up to $835,000</li>
                  <li>• Partial exemption up to $885,000</li>
                  <li>• Saves up to $13,000+ in taxes</li>
                  <li>• Automatic application</li>
                </ul>
              </div>
              <div>
                <h4 class="font-medium text-orange-700 mb-2">Requirements</h4>
                <ul class="space-y-1 text-orange-600 text-sm">
                  <li>• Canadian citizen or permanent resident</li>
                  <li>• BC resident for 12+ months</li>
                  <li>• First-time buyer in the world</li>
                  <li>• Primary residence</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 border-gray-200 pb-2">RRSP Home Buyers' Plan Updates</h2>

        <div class="bg-yellow-50 p-6 rounded-lg mb-8 border-l-4 border-yellow-400">
          <h3 class="text-xl font-semibold text-yellow-800 mb-3">Enhanced for 2025</h3>
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <h4 class="font-medium text-yellow-700 mb-2">Increased Limits</h4>
              <ul class="space-y-2 text-yellow-600">
                <li>• <strong>Individual limit:</strong> $60,000 (up from $35,000)</li>
                <li>• <strong>Couple limit:</strong> $120,000 combined</li>
                <li>• <strong>Repayment period:</strong> Still 15 years</li>
                <li>• <strong>No tax on withdrawal</strong></li>
              </ul>
            </div>
            <div>
              <h4 class="font-medium text-yellow-700 mb-2">New Flexibility</h4>
              <ul class="space-y-2 text-yellow-600">
                <li>• <strong>Extended eligibility:</strong> Can use again after 4 years</li>
                <li>• <strong>Divorce provision:</strong> Special rules for separated couples</li>
                <li>• <strong>Disability provision:</strong> Enhanced access for disabled persons</li>
              </ul>
            </div>
          </div>
        </div>

        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 border-gray-200 pb-2">Real-World Examples</h2>

        <div class="space-y-6 mb-8">
          <div class="bg-slate-50 p-6 rounded-lg">
            <h3 class="text-xl font-semibold text-slate-800 mb-4">Example 1: Vancouver Condo Purchase</h3>
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-white p-4 rounded-lg shadow-sm">
                <h4 class="font-semibold text-slate-800 mb-3">Purchase Details</h4>
                <ul class="space-y-2 text-slate-700 text-sm">
                  <li>• Home price: $750,000</li>
                  <li>• Household income: $140,000</li>
                  <li>• Personal savings: $50,000</li>
                  <li>• RRSP available: $80,000</li>
                </ul>
              </div>
              <div class="bg-white p-4 rounded-lg shadow-sm">
                <h4 class="font-semibold text-slate-800 mb-3">Available Assistance</h4>
                <ul class="space-y-2 text-slate-700 text-sm">
                  <li>• FTHBI shared equity: $75,000 (10%)</li>
                  <li>• BC down payment loan: $37,500 (5%)</li>
                  <li>• RRSP HBP: $60,000</li>
                  <li>• PTT exemption: $11,500 saved</li>
                  <li>• Tax credit: $1,200</li>
                </ul>
              </div>
            </div>
            <div class="mt-4 p-4 bg-green-100 rounded-lg">
              <div class="text-center">
                <div class="text-lg font-bold text-green-800">Total Down Payment Assistance: $172,500</div>
                <div class="text-sm text-green-600">Reduces required cash down payment from $150,000 to just $27,500</div>
              </div>
            </div>
          </div>

          <div class="bg-blue-50 p-6 rounded-lg">
            <h3 class="text-xl font-semibold text-blue-800 mb-4">Example 2: Surrey Townhouse</h3>
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-white p-4 rounded-lg shadow-sm">
                <h4 class="font-semibold text-blue-800 mb-3">Purchase Details</h4>
                <ul class="space-y-2 text-blue-700 text-sm">
                  <li>• Home price: $820,000</li>
                  <li>• Household income: $160,000</li>
                  <li>• Personal savings: $70,000</li>
                  <li>• RRSP available: $100,000</li>
                </ul>
              </div>
              <div class="bg-white p-4 rounded-lg shadow-sm">
                <h4 class="font-semibold text-blue-800 mb-3">Available Assistance</h4>
                <ul class="space-y-2 text-blue-700 text-sm">
                  <li>• FTHBI shared equity: $41,000 (5%)</li>
                  <li>• BC down payment loan: $40,000 (max)</li>
                  <li>• RRSP HBP: $60,000</li>
                  <li>• PTT partial exemption: $8,500 saved</li>
                  <li>• Tax credit: $1,200</li>
                </ul>
              </div>
            </div>
            <div class="mt-4 p-4 bg-blue-100 rounded-lg">
              <div class="text-center">
                <div class="text-lg font-bold text-blue-800">Total Down Payment Assistance: $141,000</div>
                <div class="text-sm text-blue-600">Reduces required cash down payment from $164,000 to just $23,000</div>
              </div>
            </div>
          </div>
        </div>

        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 border-gray-200 pb-2">How to Apply</h2>

        <div class="bg-slate-50 p-6 rounded-lg mb-8">
          <h3 class="text-xl font-semibold text-slate-800 mb-4">Step-by-Step Process</h3>
          <div class="space-y-4">
            <div class="flex items-start">
              <div class="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">1</div>
              <div>
                <div class="font-medium text-slate-800">Get Pre-Approved</div>
                <div class="text-sm text-slate-600">Work with a mortgage broker to understand your borrowing capacity and program eligibility</div>
              </div>
            </div>
            <div class="flex items-start">
              <div class="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">2</div>
              <div>
                <div class="font-medium text-slate-800">Apply for Programs</div>
                <div class="text-sm text-slate-600">Submit applications for FTHBI, BC down payment loan, and RRSP HBP simultaneously</div>
              </div>
            </div>
            <div class="flex items-start">
              <div class="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">3</div>
              <div>
                <div class="font-medium text-slate-800">Find Your Home</div>
                <div class="text-sm text-slate-600">Shop within program price limits and ensure property meets eligibility requirements</div>
              </div>
            </div>
            <div class="flex items-start">
              <div class="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">4</div>
              <div>
                <div class="font-medium text-slate-800">Complete Purchase</div>
                <div class="text-sm text-slate-600">Coordinate with lawyer to ensure all programs are properly applied at closing</div>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-r from-green-600 to-blue-600 text-white p-8 rounded-lg mb-8">
          <div class="text-center">
            <h3 class="text-2xl font-bold mb-4">Ready to Take Advantage of These Enhanced Programs?</h3>
            <p class="mb-6 text-green-100">With over $170,000 in potential assistance available, 2025 is an excellent year for first-time homebuyers. Let's review your eligibility and create a strategy to maximize your benefits.</p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/#contact" class="bg-white text-green-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors">
                Free Program Review
              </a>
              <a href="https://r.mtg-app.com/robbhullar" target="_blank" rel="noopener noreferrer" class="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-600 px-6 py-3 rounded-lg font-semibold transition-colors">
                Start Application
              </a>
            </div>
          </div>
        </div>

        <div class="border-t border-gray-200 pt-6 mt-8">
          <p class="text-sm text-gray-600 italic">
            <strong>Disclaimer:</strong> Program details and eligibility requirements are subject to change. This information is current as of June 2025 and is for educational purposes only. Always verify current program details and consult with a qualified mortgage professional for personalized advice.
          </p>
        </div>
      `,
      date: "June 10, 2025",
      author: "Rob Bhullar",
      category: "Government Programs",
      image: "first-time-homebuyer-family.png",
    },

    "vancouver-housing-market-update": {
      title: "Vancouver Housing Market Update (June 2025): Recovery Underway as Rates Fall",
      excerpt:
        "Vancouver's housing market is showing strong signs of recovery as interest rate cuts boost buyer confidence. Sales are up 25% year-over-year while inventory remains balanced, creating favorable conditions for both buyers and sellers.",
      content: `
        <div class="bg-green-50 border-l-4 border-green-500 p-6 mb-8 rounded-r-lg">
          <div class="flex items-center mb-3">
            <svg class="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
            </svg>
            <h3 class="text-lg font-semibold text-green-800">Market Recovery in Progress</h3>
          </div>
          <p class="text-green-700">Vancouver's housing market is experiencing a strong recovery driven by falling interest rates, improved affordability, and renewed buyer confidence. Sales activity is up significantly while maintaining balanced inventory levels.</p>
        </div>

        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 border-gray-200 pb-2">Key Market Statistics (June 2025)</h2>
        
        <div class="grid md:grid-cols-3 gap-6 mb-8">
          <div class="bg-green-50 p-6 rounded-lg text-center">
            <div class="text-3xl font-bold text-green-600 mb-2">$1.40M</div>
            <div class="text-sm text-green-800 font-medium">Average Home Price</div>
            <div class="text-xs text-green-600 mt-1">↓ 2.0% vs peak (2024)</div>
          </div>
          <div class="bg-blue-50 p-6 rounded-lg text-center">
            <div class="text-3xl font-bold text-blue-600 mb-2">3,600</div>
            <div class="text-sm text-blue-800 font-medium">Sales This Month</div>
            <div class="text-xs text-blue-600 mt-1">↑ 26.0% vs last year</div>
          </div>
          <div class="bg-purple-50 p-6 rounded-lg text-center">
            <div class="text-3xl font-bold text-purple-600 mb-2">5,000</div>
            <div class="text-sm text-purple-800 font-medium">Active Listings</div>
            <div class="text-xs text-purple-600 mt-1">↑ 4.0% vs last month</div>
          </div>
        </div>

        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 border-gray-200 pb-2">Market Trends by Property Type</h2>

        <div class="space-y-6 mb-8">
          <div class="bg-slate-50 p-6 rounded-lg">
            <h3 class="text-xl font-semibold text-slate-800 mb-4">Detached Homes</h3>
            <div class="grid md:grid-cols-4 gap-4">
              <div class="text-center">
                <div class="text-2xl font-bold text-slate-700">$1.97M</div>
                <div class="text-sm text-slate-600">Average Price</div>
                <div class="text-xs text-slate-500">↓ 6.5% vs peak</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-green-600">+29%</div>
                <div class="text-sm text-slate-600">Sales Volume</div>
                <div class="text-xs text-slate-500">vs last year</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-blue-600">2.9 months</div>
                <div class="text-sm text-slate-600">Inventory Supply</div>
                <div class="text-xs text-slate-500">Balanced market</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-slate-700">20 days</div>
                <div class="text-sm text-slate-600">Avg. Days on Market</div>
                <div class="text-xs text-slate-500">↓ 8 days</div>
              </div>
            </div>
          </div>

          <div class="bg-blue-50 p-6 rounded-lg">
            <h3 class="text-xl font-semibold text-blue-800 mb-4">Condominiums</h3>
            <div class="grid md:grid-cols-4 gap-4">
              <div class="text-center">
                <div class="text-2xl font-bold text-blue-700">$750K</div>
                <div class="text-sm text-blue-600">Average Price</div>
                <div class="text-xs text-blue-500">↓ 5.0% vs peak</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-green-600">+23%</div>
                <div class="text-sm text-blue-600">Sales Volume</div>
                <div class="text-xs text-blue-500">vs last year</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-blue-600">2.2 months</div>
                <div class="text-sm text-blue-600">Inventory Supply</div>
                <div class="text-xs text-blue-500">Seller's market</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-blue-700">17 days</div>
                <div class="text-sm text-blue-600">Avg. Days on Market</div>
                <div class="text-xs text-blue-500">↓ 5 days</div>
              </div>
            </div>
          </div>

          <div class="bg-green-50 p-6 rounded-lg">
            <h3 class="text-xl font-semibold text-green-800 mb-4">Townhomes</h3>
            <div class="grid md:grid-cols-4 gap-4">
              <div class="text-center">
                <div class="text-2xl font-bold text-green-700">$1.23M</div>
                <div class="text-sm text-green-600">Average Price</div>
                <div class="text-xs text-green-500">↓ 6.0% vs peak</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-green-600">+32%</div>
                <div class="text-sm text-green-600">Sales Volume</div>
                <div class="text-xs text-green-500">vs last year</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-green-600">2.6 months</div>
                <div class="text-sm text-green-600">Inventory Supply</div>
                <div class="text-xs text-green-500">Balanced market</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-green-700">18 days</div>
                <div class="text-sm text-green-600">Avg. Days on Market</div>
                <div class="text-xs text-green-500">↓ 7 days</div>
              </div>
            </div>
          </div>
        </div>

        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 border-gray-200 pb-2">What's Driving the Recovery?</h2>

        <div class="grid md:grid-cols-2 gap-6 mb-8">
          <div class="bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
            <h3 class="font-semibold text-green-800 mb-3">Recovery Drivers</h3>
            <ul class="space-y-2 text-green-700">
              <li>• Interest rates down 1.75% from peak</li>
              <li>• Improved mortgage affordability</li>
              <li>• Pent-up buyer demand being released</li>
              <li>• Enhanced first-time buyer programs</li>
              <li>• Economic stability and job growth</li>
              <li>• Immigration targets supporting demand</li>
            </ul>
          </div>
          <div class="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
            <h3 class="font-semibold text-blue-800 mb-3">Market Fundamentals</h3>
            <ul class="space-y-2 text-blue-700">
              <li>• Population growth continues</li>
              <li>• Limited land supply constraints</li>
              <li>• Strong employment market</li>
              <li>• Infrastructure investments</li>
              <li>• Tech sector expansion</li>
              <li>• International investment returning</li>
            </ul>
          </div>
        </div>

        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 border-gray-200 pb-2">Regional Performance</h2>

        <div class="space-y-4 mb-8">
          <div class="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
            <h3 class="text-lg font-semibold text-yellow-800 mb-3">Vancouver West</h3>
            <div class="grid md:grid-cols-4 gap-4">
              <div>
                <div class="text-xl font-bold text-yellow-700">$2.67M</div>
                <div class="text-sm text-yellow-600">Avg. Detached Price</div>
                <div class="text-xs text-yellow-500">↓ 5.0% vs peak</div>
              </div>
              <div>
                <div class="text-xl font-bold text-yellow-700">$900K</div>
                <div class="text-sm text-yellow-600">Avg. Condo Price</div>
                <div class="text-xs text-yellow-500">↓ 5.5% vs peak</div>
              </div>
              <div>
                <div class="text-xl font-bold text-green-600">+25%</div>
                <div class="text-sm text-yellow-600">Sales Change</div>
                <div class="text-xs text-yellow-500">vs last year</div>
              </div>
              <div>
                <div class="text-xl font-bold text-yellow-700">3.0 mo</div>
                <div class="text-sm text-yellow-600">Inventory</div>
                <div class="text-xs text-yellow-500">Balanced</div>
              </div>
            </div>
          </div>

          <div class="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-400">
            <h3 class="text-lg font-semibold text-purple-800 mb-3">Vancouver East</h3>
            <div class="grid md:grid-cols-4 gap-4">
              <div>
                <div class="text-xl font-bold text-purple-700">$1.77M</div>
                <div class="text-sm text-purple-600">Avg. Detached Price</div>
                <div class="text-xs text-purple-500">↓ 7.5% vs peak</div>
              </div>
              <div>
                <div class="text-xl font-bold text-purple-700">$690K</div>
                <div class="text-sm text-purple-600">Avg. Condo Price</div>
                <div class="text-xs text-purple-500">↓ 4.5% vs peak</div>
              </div>
              <div>
                <div class="text-xl font-bold text-green-600">+30%</div>
                <div class="text-sm text-purple-600">Sales Change</div>
                <div class="text-xs text-purple-500">vs last year</div>
              </div>
              <div>
                <div class="text-xl font-bold text-purple-700">2.4 mo</div>
                <div class="text-sm text-purple-600">Inventory</div>
                <div class="text-xs text-purple-500">Seller's market</div>
              </div>
            </div>
          </div>

          <div class="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-400">
            <h3 class="text-lg font-semibold text-indigo-800 mb-3">Richmond & Burnaby</h3>
            <div class="grid md:grid-cols-4 gap-4">
              <div>
                <div class="text-xl font-bold text-indigo-700">$1.60M</div>
                <div class="text-sm text-indigo-600">Avg. Detached Price</div>
                <div class="text-xs text-indigo-500">↓ 6.5% vs peak</div>
              </div>
              <div>
                <div class="text-xl font-bold text-indigo-700">$650K</div>
                <div class="text-sm text-indigo-600">Avg. Condo Price</div>
                <div class="text-xs text-indigo-500">↓ 5.0% vs peak</div>
              </div>
              <div>
                <div class="text-xl font-bold text-green-600">+27%</div>
                <div class="text-sm text-indigo-600">Sales Change</div>
                <div class="text-xs text-indigo-500">vs last year</div>
              </div>
              <div>
                <div class="text-xl font-bold text-indigo-700">2.7 mo</div>
                <div class="text-sm text-indigo-600">Inventory</div>
                <div class="text-xs text-indigo-500">Balanced</div>
              </div>
            </div>
          </div>
        </div>

        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 border-gray-200 pb-2">Market Outlook</h2>

        <div class="space-y-6 mb-8">
          <div class="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
            <h3 class="text-xl font-semibold text-green-800 mb-3">Positive Indicators</h3>
            <ul class="space-y-2 text-green-700">
              <li>• <strong>Rate Environment:</strong> Further cuts expected in 2025</li>
              <li>• <strong>Buyer Confidence:</strong> Pre-approval applications up 40%</li>
              <li>• <strong>New Supply:</strong> Construction starts increasing</li>
              <li>• <strong>Economic Growth:</strong> BC economy outperforming Canada</li>
              <li>• <strong>Employment:</strong> Job market remains strong</li>
              </ul>
          </div>

          <div class="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
            <h3 class="text-xl font-semibold text-yellow-800 mb-3">Challenges to Watch</h3>
            <ul class="space-y-2 text-yellow-700">
              <li>• <strong>Affordability:</strong> Still challenging for many buyers</li>
              <li>• <strong>Supply Constraints:</strong> Limited inventory in some segments</li>
              <li>• <strong>Policy Changes:</strong> Potential new government measures</li>
              <li>• <strong>Global Factors:</strong> Economic uncertainty abroad</li>
            </ul>
          </div>
        </div>

        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 border-gray-200 pb-2">What This Means for You</h2>

        <div class="space-y-6 mb-8">
          <div class="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
            <h3 class="text-xl font-semibold text-blue-800 mb-3 flex items-center">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 10H4L5 9z"></path>
              </svg>
              For Buyers
            </h3>
            <ul class="space-y-2 text-blue-700">
              <li>• <strong>Improved Affordability:</strong> Lower rates mean higher buying power</li>
              <li>• <strong>More Options:</strong> Inventory levels are healthy</li>
              <li>• <strong>Less Competition:</strong> Multiple offers less common</li>
              <li>• <strong>Better Financing:</strong> Enhanced government programs available</li>
              <li>• <strong>Timing Opportunity:</strong> Prices still below peak levels</li>
            </ul>
          </div>

          <div class="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
            <h3 class="text-xl font-semibold text-orange-800 mb-3 flex items-center">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
              </svg>
              For Sellers
            </h3>
            <ul class="space-y-2 text-orange-700">
              <li>• <strong>Renewed Demand:</strong> More qualified buyers in the market</li>
              <li>• <strong>Faster Sales:</strong> Days on market decreasing</li>
              <li>• <strong>Price Stability:</strong> Values stabilizing after correction</li>
              <li>• <strong>Strategic Timing:</strong> Spring market showing strength</li>
              <li>• <strong>Professional Marketing:</strong> Showcase your property effectively</li>
            </ul>
          </div>
        </div>

        <div class="bg-gradient-to-r from-green-600 to-blue-600 text-white p-8 rounded-lg mb-8">
          <div class="text-center">
            <h3 class="text-2xl font-bold mb-4">Ready to Make Your Move in Vancouver?</h3>
            <p class="mb-6 text-green-100">Whether you're buying or selling, now is the time to take advantage of the recovering Vancouver housing market. With rates falling and demand increasing, let's discuss your options and create a winning strategy.</p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/#contact" class="bg-white text-green-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors">
                Free Market Analysis
              </a>
              <a href="https://r.mtg-app.com/robbhullar" target="_blank" rel="noopener noreferrer" class="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-600 px-6 py-3 rounded-lg font-semibold transition-colors">
                View Current Listings
              </a>
            </div>
          </div>
        </div>

        <div class="border-t border-gray-200 pt-6 mt-8">
          <p class="text-sm text-gray-600 italic">
            <strong>Disclaimer:</strong> Market conditions are subject to change. This analysis is based on data available as of June 2025 and is for informational purposes only. Consult with a qualified real estate professional for personalized advice.
          </p>
        </div>
      `,
      date: "June 10, 2025",
      author: "Rob Bhullar",
      category: "Market Updates",
      image: "vancouver-skyline-housing.png",
    },

    "vancouver-housing-skyline-housing": {
      title: "Vancouver Housing Market Update: Recovery Underway as Rates Fall",
      excerpt:
        "Vancouver's housing market is showing strong signs of recovery as interest rate cuts boost buyer confidence. Sales are up 25% year-over-year while inventory remains balanced, creating favorable conditions for both buyers and sellers.",
      content: `
    <div class="bg-green-50 border-l-4 border-green-500 p-6 mb-8 rounded-r-lg">
      <div class="flex items-center mb-3">
        <svg class="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
        </svg>
        <h3 class="text-lg font-semibold text-green-800">Market Recovery in Progress</h3>
      </div>
      <p class="text-green-700">Vancouver's housing market is experiencing a strong recovery driven by falling interest rates, improved affordability, and renewed buyer confidence. Sales activity is up significantly while maintaining balanced inventory levels.</p>
    </div>

    <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 border-gray-200 pb-2">Key Market Statistics (June 2025)</h2>
    
    <div class="grid md:grid-cols-3 gap-6 mb-8">
      <div class="bg-green-50 p-6 rounded-lg text-center">
        <div class="text-3xl font-bold text-green-600 mb-2">$1.38M</div>
        <div class="text-sm text-green-800 font-medium">Average Home Price</div>
        <div class="text-xs text-green-600 mt-1">↓ 2.8% vs peak (2024)</div>
      </div>
      <div class="bg-blue-50 p-6 rounded-lg text-center">
        <div class="text-3xl font-bold text-blue-600 mb-2">3,547</div>
        <div class="text-sm text-blue-800 font-medium">Sales This Month</div>
        <div class="text-xs text-blue-600 mt-1">↑ 25.3% vs last year</div>
      </div>
      <div class="bg-purple-50 p-6 rounded-lg text-center">
        <div class="text-3xl font-bold text-purple-600 mb-2">4,892</div>
        <div class="text-sm text-purple-800 font-medium">Active Listings</div>
        <div class="text-xs text-purple-600 mt-1">↑ 3.2% vs last month</div>
      </div>
    </div>

    <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 border-gray-200 pb-2">Market Trends by Property Type</h2>

    <div class="space-y-6 mb-8">
      <div class="bg-slate-50 p-6 rounded-lg">
        <h3 class="text-xl font-semibold text-slate-800 mb-4">Detached Homes</h3>
        <div class="grid md:grid-cols-4 gap-4">
          <div class="text-center">
            <div class="text-2xl font-bold text-slate-700">$1.95M</div>
            <div class="text-sm text-slate-600">Average Price</div>
            <div class="text-xs text-slate-500">↓ 7.1% vs peak</div>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold text-green-600">+28%</div>
            <div class="text-sm text-slate-600">Sales Volume</div>
            <div class="text-xs text-slate-500">vs last year</div>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold text-blue-600">2.8 months</div>
            <div class="text-sm text-slate-600">Inventory Supply</div>
            <div class="text-xs text-slate-500">Balanced market</div>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold text-slate-700">21 days</div>
            <div class="text-sm text-slate-600">Avg. Days on Market</div>
            <div class="text-xs text-slate-500">↓ 7 days</div>
          </div>
        </div>
      </div>

      <div class="bg-blue-50 p-6 rounded-lg">
        <h3 class="text-xl font-semibold text-blue-800 mb-4">Condominiums</h3>
        <div class="grid md:grid-cols-4 gap-4">
          <div class="text-center">
            <div class="text-2xl font-bold text-blue-700">$742K</div>
            <div class="text-sm text-blue-600">Average Price</div>
            <div class="text-xs text-blue-500">↓ 5.5% vs peak</div>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold text-green-600">+22%</div>
            <div class="text-sm text-blue-600">Sales Volume</div>
            <div class="text-xs text-blue-500">vs last year</div>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold text-blue-600">2.1 months</div>
            <div class="text-sm text-blue-600">Inventory Supply</div>
            <div class="text-xs text-blue-500">Seller's market</div>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold text-blue-700">18 days</div>
            <div class="text-sm text-blue-600">Avg. Days on Market</div>
            <div class="text-xs text-blue-500">↓ 4 days</div>
          </div>
        </div>
      </div>

      <div class="bg-green-50 p-6 rounded-lg">
        <h3 class="text-xl font-semibold text-green-800 mb-4">Townhomes</h3>
        <div class="grid md:grid-cols-4 gap-4">
          <div class="text-center">
            <div class="text-2xl font-bold text-green-700">$1.22M</div>
            <div class="text-sm text-green-600">Average Price</div>
            <div class="text-xs text-green-500">↓ 6.2% vs peak</div>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold text-green-600">+31%</div>
            <div class="text-sm text-green-600">Sales Volume</div>
            <div class="text-xs text-green-500">vs last year</div>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold text-green-600">2.5 months</div>
            <div class="text-sm text-green-600">Inventory Supply</div>
            <div class="text-xs text-green-500">Balanced market</div>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold text-green-700">19 days</div>
            <div class="text-sm text-green-600">Avg. Days on Market</div>
            <div class="text-xs text-green-500">↓ 6 days</div>
          </div>
        </div>
      </div>
    </div>

    <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 border-gray-200 pb-2">What's Driving the Recovery?</h2>

    <div class="grid md:grid-cols-2 gap-6 mb-8">
      <div class="bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
        <h3 class="font-semibold text-green-800 mb-3">Recovery Drivers</h3>
        <ul class="space-y-2 text-green-700">
          <li>• Interest rates down 1.75% from peak</li>
          <li>• Improved mortgage affordability</li>
          <li>• Pent-up buyer demand being released</li>
          <li>• Enhanced first-time buyer programs</li>
          <li>• Economic stability and job growth</li>
          <li>• Immigration targets supporting demand</li>
        </ul>
      </div>
      <div class="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
        <h3 class="font-semibold text-blue-800 mb-3">Market Fundamentals</h3>
        <ul class="space-y-2 text-blue-700">
          <li>• Population growth continues</li>
          <li>• Limited land supply constraints</li>
          <li>• Strong employment market</li>
          <li>• Infrastructure investments</li>
          <li>• Tech sector expansion</li>
          <li>• International investment returning</li>
        </ul>
      </div>
    </div>

    <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 border-gray-200 pb-2">Regional Performance</h2>

    <div class="space-y-4 mb-8">
      <div class="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
        <h3 class="text-lg font-semibold text-yellow-800 mb-3">Vancouver West</h3>
        <div class="grid md:grid-cols-4 gap-4">
          <div>
            <div class="text-xl font-bold text-yellow-700">$2.65M</div>
            <div class="text-sm text-yellow-600">Avg. Detached Price</div>
            <div class="text-xs text-yellow-500">↓ 5.4% vs peak</div>
          </div>
          <div>
            <div class="text-xl font-bold text-yellow-700">$895K</div>
            <div class="text-sm text-yellow-600">Avg. Condo Price</div>
            <div class="text-xs text-yellow-500">↓ 5.8% vs peak</div>
          </div>
          <div>
            <div class="text-xl font-bold text-green-600">+24%</div>
            <div class="text-sm text-yellow-600">Sales Change</div>
            <div class="text-xs text-yellow-500">vs last year</div>
          </div>
          <div>
            <div class="text-xl font-bold text-yellow-700">2.9 mo</div>
            <div class="text-sm text-yellow-600">Inventory</div>
            <div class="text-xs text-yellow-500">Balanced</div>
          </div>
        </div>
      </div>

      <div class="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-400">
        <h3 class="text-lg font-semibold text-purple-800 mb-3">Vancouver East</h3>
        <div class="grid md:grid-cols-4 gap-4">
          <div>
            <div class="text-xl font-bold text-purple-700">$1.75M</div>
            <div class="text-sm text-purple-600">Avg. Detached Price</div>
            <div class="text-xs text-purple-500">↓ 7.9% vs peak</div>
          </div>
          <div>
            <div class="text-xl font-bold text-purple-700">$685K</div>
            <div class="text-sm text-purple-600">Avg. Condo Price</div>
            <div class="text-xs text-purple-500">↓ 4.9% vs peak</div>
          </div>
          <div>
            <div class="text-xl font-bold text-green-600">+29%</div>
            <div class="text-sm text-purple-600">Sales Change</div>
            <div class="text-xs text-purple-500">vs last year</div>
          </div>
          <div>
            <div class="text-xl font-bold text-purple-700">2.3 mo</div>
            <div class="text-sm text-purple-600">Inventory</div>
            <div class="text-xs text-purple-500">Seller's market</div>
          </div>
        </div>
      </div>

      <div class="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-400">
        <h3 class="text-lg font-semibold text-indigo-800 mb-3">Richmond & Burnaby</h3>
        <div class="grid md:grid-cols-4 gap-4">
          <div>
            <div class="text-xl font-bold text-indigo-700">$1.58M</div>
            <div class="text-sm text-indigo-600">Avg. Detached Price</div>
            <div class="text-xs text-indigo-500">↓ 6.8% vs peak</div>
          </div>
          <div>
            <div class="text-xl font-bold text-indigo-700">$645K</div>
            <div class="text-sm text-indigo-600">Avg. Condo Price</div>
            <div class="text-xs text-indigo-500">↓ 5.2% vs peak</div>
          </div>
          <div>
            <div class="text-xl font-bold text-green-600">+26%</div>
            <div class="text-sm text-indigo-600">Sales Change</div>
            <div class="text-xs text-indigo-500">vs last year</div>
          </div>
          <div>
            <div class="text-xl font-bold text-indigo-700">2.6 mo</div>
            <div class="text-sm text-indigo-600">Inventory</div>
            <div class="text-xs text-indigo-500">Balanced</div>
          </div>
        </div>
      </div>
    </div>

    <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 border-gray-200 pb-2">Market Outlook</h2>

    <div class="space-y-6 mb-8">
      <div class="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h3 class="text-xl font-semibold text-green-800 mb-3">Positive Indicators</h3>
        <ul class="space-y-2 text-green-700">
          <li>• <strong>Rate Environment:</strong> Further cuts expected in 2025</li>
          <li>• <strong>Buyer Confidence:</strong> Pre-approval applications up 40%</li>
          <li>• <strong>New Supply:</strong> Construction starts increasing</li>
          <li>• <strong>Economic Growth:</strong> BC economy outperforming Canada</li>
          <li>• <strong>Employment:</strong> Job market remains strong</li>
          </ul>
      </div>

      <div class="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
        <h3 class="text-xl font-semibold text-yellow-800 mb-3">Challenges to Watch</h3>
        <ul class="space-y-2 text-yellow-700">
          <li>• <strong>Affordability:</strong> Still challenging for many buyers</li>
          <li>• <strong>Supply Constraints:</strong> Limited inventory in some segments</li>
          <li>• <strong>Policy Changes:</strong> Potential new government measures</li>
          <li>• <strong>Global Factors:</strong> Economic uncertainty abroad</li>
        </ul>
      </div>
    </div>

    <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 border-gray-200 pb-2">What This Means for You</h2>

    <div class="space-y-6 mb-8">
      <div class="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
        <h3 class="text-xl font-semibold text-blue-800 mb-3 flex items-center">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 10H4L5 9z"></path>
          </svg>
          For Buyers
        </h3>
        <ul class="space-y-2 text-blue-700">
          <li>• <strong>Improved Affordability:</strong> Lower rates mean higher buying power</li>
          <li>• <strong>More Options:</strong> Inventory levels are healthy</li>
          <li>• <strong>Less Competition:</strong> Multiple offers less common</li>
          <li>• <strong>Better Financing:</strong> Enhanced government programs available</li>
          <li>• <strong>Timing Opportunity:</strong> Prices still below peak levels</li>
        </ul>
      </div>

      <div class="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
        <h3 class="text-xl font-semibold text-orange-800 mb-3 flex items-center">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
          </svg>
          For Sellers
        </h3>
        <ul class="space-y-2 text-orange-700">
          <li>• <strong>Renewed Demand:</strong> More qualified buyers in the market</li>
          <li>• <strong>Faster Sales:</strong> Days on market decreasing</li>
          <li>• <strong>Price Stability:</strong> Values stabilizing after correction</li>
          <li>• <strong>Strategic Timing:</strong> Spring market showing strength</li>
          <li>• <strong>Professional Marketing:</strong> Showcase your property effectively</li>
        </ul>
      </div>
    </div>

    <div class="bg-gradient-to-r from-green-600 to-blue-600 text-white p-8 rounded-lg mb-8">
      <div class="text-center">
        <h3 class="text-2xl font-bold mb-4">Ready to Make Your Move in Vancouver?</h3>
        <p class="mb-6 text-green-100">Whether you're buying or selling, now is the time to take advantage of the recovering Vancouver housing market. With rates falling and demand increasing, let's discuss your options and create a winning strategy.</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/#contact" class="bg-white text-green-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors">
            Free Market Analysis
          </a>
          <a href="https://r.mtg-app.com/robbhullar" target="_blank" rel="noopener noreferrer" class="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-600 px-6 py-3 rounded-lg font-semibold transition-colors">
            View Current Listings
          </a>
        </div>
      </div>
    </div>

    <div class="border-t border-gray-200 pt-6 mt-8">
      <p class="text-sm text-gray-600 italic">
        <strong>Disclaimer:</strong> Market conditions are subject to change. This analysis is based on data available as of June 2025 and is for informational purposes only. Consult with a qualified real estate professional for personalized advice.
      </p>
    </div>
  `,
      date: "June 10, 2025",
      author: "Rob Bhullar",
      category: "Market Updates",
      image: "vancouver-skyline-housing.png",
    },
    "improve-credit-score-for-better-mortgage-rates": {
      title: "How to Improve Your Credit Score for Better Mortgage Rates in 2025",
      excerpt:
        "Your credit score directly impacts your mortgage rate and can save you thousands over the life of your loan. Learn proven strategies to boost your score and qualify for the best rates available.",
      content: `
    <div class="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
      <div class="flex items-center mb-3">
        <svg class="w-6 h-6 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <h3 class="text-lg font-semibold text-blue-800">Credit Score Impact</h3>
      </div>
      <p class="text-blue-700">A higher credit score can save you tens of thousands of dollars over the life of your mortgage. Even a 50-point improvement can reduce your rate by 0.25% or more, translating to significant monthly and lifetime savings.</p>
    </div>

    <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 border-gray-200 pb-2">Credit Score Ranges and Mortgage Rates</h2>
    
    <div class="bg-gray-50 p-6 rounded-lg mb-8">
      <h3 class="text-xl font-semibold mb-4 text-gray-800">Current Rate Tiers (June 2025)</h3>
      <div class="space-y-4">
        <div class="flex justify-between items-center p-4 bg-green-100 rounded-lg">
          <div>
            <div class="font-semibold text-green-800">Excellent (760+)</div>
            <div class="text-sm text-green-600">Best rates available</div>
          </div>
          <div class="text-2xl font-bold text-green-700">4.39%</div>
        </div>
        <div class="flex justify-between items-center p-4 bg-blue-100 rounded-lg">
          <div>
            <div class="font-semibold text-blue-800">Very Good (700-759)</div>
            <div class="text-sm text-blue-600">Competitive rates</div>
          </div>
          <div class="text-2xl font-bold text-blue-700">4.64%</div>
        </div>
        <div class="flex justify-between items-center p-4 bg-yellow-100 rounded-lg">
          <div>
            <div class="font-semibold text-yellow-800">Good (650-699)</div>
            <div class="text-sm text-yellow-600">Standard rates</div>
          </div>
          <div class="text-2xl font-bold text-yellow-700">4.89%</div>
        </div>
        <div class="flex justify-between items-center p-4 bg-orange-100 rounded-lg">
          <div>
            <div class="font-semibold text-orange-800">Fair (600-649)</div>
            <div class="text-sm text-orange-600">Higher rates, limited options</div>
          </div>
          <div class="text-2xl font-bold text-orange-700">5.39%</div>
        </div>
        <div class="flex justify-between items-center p-4 bg-red-100 rounded-lg">
          <div>
            <div class="font-semibold text-red-800">Poor (Below 600)</div>
            <div class="text-sm text-red-600">Alternative lenders required</div>
          </div>
          <div class="text-2xl font-bold text-red-700">6.89%+</div>
        </div>
      </div>
    </div>

    <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 border-gray-200 pb-2">Quick Credit Score Improvement Strategies</h2>

    <div class="grid md:grid-cols-2 gap-6 mb-8">
      <div class="bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
        <h3 class="font-semibold text-green-800 mb-3">Immediate Actions (30-60 days)</h3>
        <ul class="space-y-2 text-green-700">
          <li>• Pay down credit card balances below 30% utilization</li>
          <li>• Pay off any collections or past-due accounts</li>
          <li>• Request credit limit increases (don't use them)</li>
          <li>• Become an authorized user on family member's account</li>
          <li>• Dispute any errors on your credit report</li>
        </ul>
      </div>
      <div class="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
        <h3 class="font-semibold text-blue-800 mb-3">Long-term Strategies (3-12 months)</h3>
        <ul class="space-y-2 text-blue-700">
          <li>• Keep old accounts open to maintain credit history</li>
          <li>• Diversify your credit mix (cards, loans, etc.)</li>
          <li>• Set up automatic payments to avoid late payments</li>
          <li>• Monitor your credit report monthly</li>
          <li>• Avoid opening new credit accounts unnecessarily</li>
        </ul>
      </div>
    </div>

    <div class="bg-gradient-to-r from-blue-600 to-green-600 text-white p-8 rounded-lg mb-8">
      <div class="text-center">
        <h3 class="text-2xl font-bold mb-4">Ready to Improve Your Credit Score?</h3>
        <p class="mb-6 text-blue-100">Let's review your credit report together and create a personalized plan to boost your score and qualify for the best mortgage rates available.</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/#contact" class="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors">
            Free Credit Review
          </a>
          <a href="https://r.mtg-app.com/robbhullar" target="_blank" rel="noopener noreferrer" class="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-lg font-semibold transition-colors">
            Get Pre-Approved
          </a>
        </div>
      </div>
    </div>
  `,
      date: "June 5, 2025",
      author: "Rob Bhullar",
      category: "Credit & Qualification",
      image: "credit-score-improvement.png",
    },

    "fixed-vs-variable-mortgage-rates-2025": {
      title: "Fixed vs Variable Mortgage Rates: Which is Right for You in 2025?",
      excerpt:
        "With interest rates falling, the choice between fixed and variable rates is more important than ever. Understand the pros and cons of each option to make the best decision for your financial situation.",
      content: `
    <div class="bg-purple-50 border-l-4 border-purple-500 p-6 mb-8 rounded-r-lg">
      <div class="flex items-center mb-3">
        <svg class="w-6 h-6 text-purple-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
        </svg>
        <h3 class="text-lg font-semibold text-purple-800">Rate Decision Guide</h3>
      </div>
      <p class="text-purple-700">With the Bank of Canada cutting rates and more cuts expected, the fixed vs variable decision has become more complex. Understanding your options can save you thousands over your mortgage term.</p>
    </div>

    <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 border-gray-200 pb-2">Current Rate Environment (June 2025)</h2>
    
    <div class="grid md:grid-cols-2 gap-6 mb-8">
      <div class="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
        <h3 class="font-semibold text-blue-800 mb-3">Fixed Rates</h3>
        <div class="space-y-3">
          <div class="flex justify-between">
            <span class="text-blue-700">1-Year Fixed</span>
            <span class="font-bold text-blue-800">3.75%</span>
          </div>
          <div class="flex justify-between">
            <span class="text-blue-700">3-Year Fixed</span>
            <span class="font-bold text-blue-800">4.15%</span>
          </div>
          <div class="flex justify-between">
            <span class="text-blue-700">5-Year Fixed</span>
            <span class="font-bold text-blue-800">4.39%</span>
          </div>
        </div>
      </div>
      <div class="bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
        <h3 class="font-semibold text-green-800 mb-3">Variable Rates</h3>
        <div class="space-y-3">
          <div class="flex justify-between">
            <span class="text-green-700">Prime - 0.5%</span>
            <span class="font-bold text-green-800">3.95%</span>
          </div>
           <div class="flex justify-between">
            <span class="text-green-700">Prime - 0.25%</span>
            <span class="font-bold text-green-800">4.20%</span>
          </div>
          <div class="flex justify-between">
            <span class="text-green-700">Prime Rate</span>
            <span class="font-bold text-green-800">4.45%</span>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8 rounded-lg mb-8">
      <div class="text-center">
        <h3 class="text-2xl font-bold mb-4">Need Help Choosing Between Fixed and Variable?</h3>
        <p class="mb-6 text-purple-100">Every situation is unique. Let's analyze your financial goals, risk tolerance, and market outlook to determine the best rate type for your mortgage.</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/#contact" class="bg-white text-purple-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors">
            Free Rate Consultation
          </a>
          <a href="https://r.mtg-app.com/robbhullar" target="_blank" rel="noopener noreferrer" class="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-600 px-6 py-3 rounded-lg font-semibold transition-colors">
            Compare Rates
          </a>
        </div>
      </div>
    </div>
  `,
      date: "June 8, 2025",
      author: "Rob Bhullar",
      category: "Mortgage Education",
      image: "fixed-vs-variable-rates.png",
    },

    "mortgage-stress-test-explained-2025": {
      title: "Mortgage Stress Test Explained: How to Qualify in 2025",
      excerpt:
        "Understanding Canada's mortgage stress test is crucial for homebuyers. Learn how the qualifying rate works, strategies to pass the test, and what changes to expect in 2025.",
      content: `
    <div class="bg-orange-50 border-l-4 border-orange-500 p-6 mb-8 rounded-r-lg">
      <div class="flex items-center mb-3">
        <svg class="w-6 h-6 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <h3 class="text-lg font-semibold text-orange-800">Stress Test Update</h3>
      </div>
      <p class="text-orange-700">The mortgage stress test qualifying rate is currently 6.39% (as of June 2025). This means you must qualify at a rate 2% higher than your actual mortgage rate, ensuring you can handle potential rate increases.</p>
    </div>

    <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 border-gray-200 pb-2">How the Stress Test Works</h2>
    
    <div class="bg-gray-50 p-6 rounded-lg mb-8">
      <h3 class="text-xl font-semibold mb-4 text-gray-800">Qualifying Rate Calculation</h3>
      <div class="grid md:grid-cols-2 gap-6">
        <div class="bg-white p-4 rounded-lg shadow-sm">
          <h4 class="font-semibold text-gray-800 mb-2">Your Actual Rate</h4>
          <div class="text-3xl font-bold text-blue-600 mb-2">4.39%</div>
          <div class="text-sm text-gray-600">5-year fixed rate example</div>
        </div>
        <div class="bg-white p-4 rounded-lg shadow-sm">
          <h4 class="font-semibold text-gray-800 mb-2">Stress Test Rate</h4>
          <div class="text-3xl font-bold text-orange-600 mb-2">6.39%</div>
          <div class="text-sm text-gray-600">Rate you must qualify at</div>
        </div>
      </div>
    </div>

    <div class="bg-gradient-to-r from-orange-600 to-red-600 text-white p-8 rounded-lg mb-8">
      <div class="text-center">
        <h3 class="text-2xl font-bold mb-4">Worried About Passing the Stress Test?</h3>
        <p class="mb-6 text-orange-100">Don't let the stress test stress you out! We'll help you understand exactly how much you can borrow and explore strategies to maximize your qualifying amount.</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/#contact" class="bg-white text-orange-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors">
            Free Stress Test Calculation
          </a>
          <a href="https://r.mtg-app.com/robbhullar" target="_blank" rel="noopener noreferrer" class="bg-transparent border-2 border-white text-white hover:bg-white hover:text-orange-600 px-6 py-3 rounded-lg font-semibold transition-colors">
            Get Pre-Qualified
          </a>
        </div>
      </div>
    </div>
  `,
      date: "June 12, 2025",
      author: "Rob Bhullar",
      category: "Mortgage Qualification",
      image: "stress-test-calculator.png",
    },
    "understanding-mortgage-stress-tests-2024": {
      title: "Mortgage Stress Test Explained: How to Qualify in 2025",
      excerpt:
        "Understanding Canada's mortgage stress test is crucial for homebuyers. Learn how the qualifying rate works, strategies to pass the test, and what changes to expect in 2025.",
      content: `
<div class="bg-orange-50 border-l-4 border-orange-500 p-6 mb-8 rounded-r-lg">
  <div class="flex items-center mb-3">
    <svg class="w-6 h-6 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>
    <h3 class="text-lg font-semibold text-orange-800">Stress Test Update</h3>
  </div>
  <p class="text-orange-700">The mortgage stress test qualifying rate is currently 6.39% (as of June 2025). This means you must qualify at a rate 2% higher than your actual mortgage rate, ensuring you can handle potential rate increases.</p>
</div>

<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 border-gray-200 pb-2">How the Stress Test Works</h2>

<div class="bg-gray-50 p-6 rounded-lg mb-8">
  <h3 class="text-xl font-semibold mb-4 text-gray-800">Qualifying Rate Calculation</h3>
  <div class="grid md:grid-cols-2 gap-6">
    <div class="bg-white p-4 rounded-lg shadow-sm">
      <h4 class="font-semibold text-gray-800 mb-2">Your Actual Rate</h4>
      <div class="text-3xl font-bold text-blue-600 mb-2">4.39%</div>
      <div class="text-sm text-gray-600">5-year fixed rate example</div>
    </div>
    <div class="bg-white p-4 rounded-lg shadow-sm">
      <h4 class="font-semibold text-gray-800 mb-2">Stress Test Rate</h4>
      <div class="text-3xl font-bold text-orange-600 mb-2">6.39%</div>
      <div class="text-sm text-gray-600">Rate you must qualify at</div>
    </div>
  </div>
</div>

<div class="bg-gradient-to-r from-orange-600 to-red-600 text-white p-8 rounded-lg mb-8">
  <div class="text-center">
    <h3 class="text-2xl font-bold mb-4">Worried About Passing the Stress Test?</h3>
    <p class="mb-6 text-orange-100">Don't let the stress test stress you out! We'll help you understand exactly how much you can borrow and explore strategies to maximize your qualifying amount.</p>
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <a href="/#contact" class="bg-white text-orange-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors">
        Free Stress Test Calculation
      </a>
      <a href="https://r.mtg-app.com/robbhullar" target="_blank" rel="noopener noreferrer" class="bg-transparent border-2 border-white text-white hover:bg-white hover:text-orange-600 px-6 py-3 rounded-lg font-semibold transition-colors">
        Get Pre-Qualified
      </a>
    </div>
  </div>
</div>
`,
      date: "June 12, 2025",
      author: "Rob Bhullar",
      category: "Mortgage Qualification",
      image: "stress-test-calculator.png",
    },
    "fixed-vs-variable-which-is-right-for-you": {
      title: "Fixed vs Variable Mortgage Rates: Which is Right for You in 2025?",
      excerpt:
        "With interest rates falling, the choice between fixed and variable rates is more important than ever. Understand the pros and cons of each option to make the best decision for your financial situation.",
      content: `
    <div class="bg-purple-50 border-l-4 border-purple-500 p-6 mb-8 rounded-r-lg">
      <div class="flex items-center mb-3">
        <svg class="w-6 h-6 text-purple-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
        </svg>
        <h3 class="text-lg font-semibold text-purple-800">Rate Decision Guide</h3>
      </div>
      <p class="text-purple-700">With the Bank of Canada cutting rates and more cuts expected, the fixed vs variable decision has become more complex. Understanding your options can save you thousands over your mortgage term.</p>
    </div>

    <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 border-gray-200 pb-2">Current Rate Environment (June 2025)</h2>
    
    <div class="grid md:grid-cols-2 gap-6 mb-8">
      <div class="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
        <h3 class="font-semibold text-blue-800 mb-3">Fixed Rates</h3>
        <div class="space-y-3">
          <div class="flex justify-between">
            <span class="text-blue-700">1-Year Fixed</span>
            <span class="font-bold text-blue-800">3.75%</span>
          </div>
          <div class="flex justify-between">
            <span class="text-blue-700">3-Year Fixed</span>
            <span class="font-bold text-blue-800">4.15%</span>
          </div>
          <div class="flex justify-between">
            <span class="text-blue-700">5-Year Fixed</span>
            <span class="font-bold text-blue-800">4.39%</span>
          </div>
        </div>
      </div>
      <div class="bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
        <h3 class="font-semibold text-green-800 mb-3">Variable Rates</h3>
        <div class="space-y-3">
          <div class="flex justify-between">
            <span class="text-green-700">Prime - 0.5%</span>
            <span class="font-bold text-green-800">3.95%</span>
          </div>
           <div class="flex justify-between">
            <span class="text-green-700">Prime - 0.25%</span>
            <span class="font-bold text-green-800">4.20%</span>
          </div>
          <div class="flex justify-between">
            <span class="text-green-700">Prime Rate</span>
            <span class="font-bold text-green-800">4.45%</span>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8 rounded-lg mb-8">
      <div class="text-center">
        <h3 class="text-2xl font-bold mb-4">Need Help Choosing Between Fixed and Variable?</h3>
        <p class="mb-6 text-purple-100">Every situation is unique. Let's analyze your financial goals, risk tolerance, and market outlook to determine the best rate type for your mortgage.</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/#contact" class="bg-white text-purple-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors">
            Free Rate Consultation
          </a>
          <a href="https://r.mtg-app.com/robbhullar" target="_blank" rel="noopener noreferrer" class="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-600 px-6 py-3 rounded-lg font-semibold transition-colors">
            Compare Rates
          </a>
        </div>
      </div>
    </div>
  `,
      date: "June 8, 2025",
      author: "Rob Bhullar",
      category: "Mortgage Education",
      image: "fixed-vs-variable-rates.png",
    },

    "bank-of-canada-holds-key-interest-rate": {
      title: "Bank of Canada Cuts Key Interest Rate to 2.75%: Historic Relief for Mortgage Holders",
      excerpt:
        "The Bank of Canada cut its overnight rate by 0.25% to 2.75%, marking the fifth consecutive rate cut since June 2024. This brings significant relief to variable-rate mortgage holders and new opportunities for homebuyers.",
      content: `
        <div class="bg-green-50 border-l-4 border-green-500 p-6 mb-8 rounded-r-lg">
          <div class="flex items-center mb-3">
            <svg class="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <h3 class="text-lg font-semibold text-green-800">Great News for Borrowers</h3>
          </div>
          <p class="text-green-700">The Bank of Canada cut its overnight rate to 2.75%, down from the 5% peak in 2023-2024. This represents a total reduction of 2.25% since rate cuts began, providing substantial savings for mortgage holders and improved affordability for homebuyers.</p>
        </div>

        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 border-gray-200 pb-2">The Bank of Canada's Decision</h2>
        
        <p class="mb-6 text-lg leading-relaxed">The Bank of Canada, in its announcement on June 13, 2025, lowered its target for the overnight rate by 25 basis points to <strong>2.75%</strong>, with the Bank Rate now at <strong>3.00%</strong> and the deposit rate at <strong>2.75%</strong>. This marks the fifth consecutive rate cut since the easing cycle began in June 2024, as inflation has returned closer to the 2% target and economic growth has moderated.</p>

        <div class="bg-gray-50 p-6 rounded-lg mb-8">
          <h3 class="text-xl font-semibold mb-4 text-gray-800">Rate History at a Glance</h3>
          <div class="grid md:grid-cols-3 gap-4">
            <div class="text-center p-4 bg-white rounded-lg shadow-sm">
              <div class="text-2xl font-bold text-green-600">2.75%</div>
              <div class="text-sm text-gray-600">Current Overnight Rate</div>
            </div>
            <div class="text-center p-4 bg-white rounded-lg shadow-sm">
              <div class="text-2xl font-bold text-blue-600">3.00%</div>
              <div class="text-sm text-gray-600">Bank Rate</div>
            </div>
            <div class="text-center p-4 bg-white rounded-lg shadow-sm">
              <div class="text-2xl font-bold text-purple-600">2.25%</div>
              <div class="text-sm text-gray-600">Total Rate Cuts Since Peak</div>
            </div>
          </div>
        </div>

        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 border-gray-200 pb-2">Why Rates Were Cut</h2>
        
        <p class="mb-4 leading-relaxed">The Bank's decision reflects several key economic developments:</p>
        
        <div class="grid md:grid-cols-2 gap-6 mb-8">
          <div class="bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
            <h3 class="font-semibold text-green-800 mb-3">Positive Economic Indicators</h3>
            <ul class="space-y-2 text-green-700">
              <li>• Inflation has fallen to 2.8%, near the 2% target</li>
              <li>• Core inflation measures showing sustained decline</li>
              <li>• Economic growth moderating as intended</li>
              <li>• Labor market rebalancing without major disruption</li>
            </ul>
          </div>
          <div class="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
            <h3 class="font-semibold text-blue-800 mb-3">Supporting Factors</h3>
            <ul class="space-y-2 text-blue-700">
              <li>• Housing market showing signs of stabilization</li>
              <li>• Consumer spending adjusting to higher rates</li>
              <li>• Business investment remaining resilient</li>
              <li>• Global economic conditions improving</li>
            </ul>
          </div>
        </div>

        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 border-gray-200 pb-2">Impact on Different Mortgage Types</h2>

        <div class="space-y-6 mb-8">
          <div class="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
            <h3 class="text-xl font-semibold text-green-800 mb-3 flex items-center">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
              </svg>
              Variable-Rate Mortgage Holders
            </h3>
            <p class="text-green-700 mb-3">Variable-rate mortgage holders are the biggest winners from this rate cut:</p>
            <ul class="space-y-1 text-green-700">
              <li>• <strong>Immediate Savings:</strong> Monthly payments decrease automatically</li>
              <li>• <strong>Cumulative Relief:</strong> Total savings of ~$750/month on a $500K mortgage since peak rates</li>
              <li>• <strong>Principal Paydown:</strong> More of your payment goes toward principal</li>
            </ul>
            <div class="mt-4 p-3 bg-green-100 rounded-lg">
              <div class="text-sm text-green-800">
                <strong>Example:</strong> On a $500,000 variable mortgage, you're now saving approximately $750/month compared to the 5% peak rate.
              </div>
            </div>
          </div>

          <div class="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
            <h3 class="text-xl font-semibold text-blue-800 mb-3 flex items-center">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
              </svg>
              Fixed-Rate Mortgage Renewals
            </h3>
            <p class="text-blue-700 mb-3">Those renewing fixed-rate mortgages are seeing much better options:</p>
            <ul class="space-y-1 text-blue-700">
              <li>• <strong>Lower Renewal Rates:</strong> 5-year fixed rates now around 4.5-5.0%</li>
              <li>• <strong>Better Terms:</strong> Lenders competing more aggressively</li>
              <li>• <strong>Refinancing Opportunities:</strong> Consider breaking existing high-rate mortgages</li>
            </ul>
          </div>

          <div class="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
            <h3 class="text-xl font-semibold text-purple-800 mb-3 flex items-center">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
              </svg>
              Prospective Homebuyers
            </h3>
            <p class="text-purple-700 mb-3">New homebuyers are benefiting from improved affordability:</p>
            <ul class="space-y-1 text-purple-700">
              <li>• <strong>Lower Mortgage Rates:</strong> Variable rates now starting around 4.5%</li>
              <li>• <strong>Increased Buying Power:</strong> Qualify for larger mortgages</li>
              <li>• <strong>Market Opportunities:</strong> More balanced market conditions</li>
            </ul>
          </div>
        </div>

        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 border-gray-200 pb-2">Current Mortgage Rate Environment</h2>

        <div class="bg-gray-50 p-6 rounded-lg mb-8">
          <h3 class="text-xl font-semibold mb-4 text-gray-800">Typical Rates as of June 2025</h3>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-semibold text-gray-800 mb-2">Variable Rates</h4>
              <div class="space-y-2">
                <div class="flex justify-between">
                  <span class="text-gray-600">Prime - 0.5%</span>
                  <span class="font-bold text-green-600">3.95%</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Prime - 0.25%</span>
                  <span class="font-bold text-green-600">4.20%</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Prime</span>
                  <span class="font-bold text-green-600">4.45%</span>
                </div>
              </div>
            </div>
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-semibold text-gray-800 mb-2">Fixed Rates</h4>
              <div class="space-y-2">
                <div class="flex justify-between">
                  <span class="text-gray-600">1-Year Fixed</span>
                  <span class="font-bold text-blue-600">3.75%</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">3-Year Fixed</span>
                  <span class="font-bold text-blue-600">4.15%</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">5-Year Fixed</span>
                  <span class="font-bold text-blue-600">4.39%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 border-gray-200 pb-2">What's Next for Interest Rates?</h2>

        <div class="space-y-4 mb-8">
          <div class="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
            <h3 class="text-lg font-semibold text-yellow-800 mb-3">Bank of Canada's Forward Guidance</h3>
            <p class="text-yellow-700 mb-3">The Bank has indicated that further rate cuts are possible if:</p>
            <ul class="space-y-2 text-yellow-700">
              <li>• Inflation continues to move toward the 2% target</li>
              <li>• Economic growth remains below potential</li>
              <li>• Labor market conditions continue to normalize</li>
              <li>• Global economic conditions remain supportive</li>
            </ul>
          </div>

          <div class="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
            <h3 class="text-lg font-semibold text-blue-800 mb-3">Market Expectations</h3>
            <p class="text-blue-700 mb-3">Financial markets are pricing in:</p>
            <ul class="space-y-2 text-blue-700">
              <li>• Potential for 1-2 more rate cuts in 2025</li>
              <li>• Overnight rate potentially reaching 2.75-3.00%</li>
              <li>• Gradual approach to further easing</li>
              <li>• Data-dependent decision making</li>
            </ul>
          </div>
        </div>

        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 border-gray-200 pb-2">Strategic Considerations</h2>

        <div class="space-y-4 mb-8">
          <div class="bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
            <h3 class="text-lg font-semibold text-green-800 mb-3">If You Have a Variable Rate</h3>
            <ul class="space-y-2 text-green-700">
              <li>• <strong>Enjoy the Savings:</strong> Your payments are automatically lower</li>
              <li>• <strong>Consider Prepayments:</strong> Use savings to pay down principal</li>
              <li>• <strong>Stay Flexible:</strong> Variable rates may continue to benefit from cuts</li>
              <li>• <strong>Monitor Trends:</strong> Watch for signs of rate stabilization</li>
            </ul>
          </div>

          <div class="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-400">
            <h3 class="text-lg font-semibold text-orange-800 mb-3">If You Have a High Fixed Rate</h3>
            <ul class="space-y-2 text-orange-700">
              <li>• <strong>Consider Breaking:</strong> Calculate penalty vs. savings</li>
              <li>• <strong>Blend and Extend:</strong> Some lenders offer this option</li>
              <li>• <strong>Wait for Renewal:</strong> If penalty is too high</li>
              <li>• <strong>Get Professional Advice:</strong> Complex calculations required</li>
            </ul>
          </div>

          <div class="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-400">
            <h3 class="text-lg font-semibold text-purple-800 mb-3">If You're Buying a Home</h3>
            <ul class="space-y-2 text-purple-700">
              <li>• <strong>Get Pre-Approved:</strong> Lock in current improved rates</li>
              <li>• <strong>Consider Variable:</strong> May benefit from further cuts</li>
              <li>• <strong>Shop Around:</strong> Lenders are competing aggressively</li>
              <li>• <strong>Act Strategically:</strong> Market conditions are improving</li>
            </ul>
          </div>
        </div>

        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 border-gray-200 pb-2">Looking Ahead: Key Dates</h2>

        <div class="bg-slate-50 p-6 rounded-lg mb-8">
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <h3 class="text-lg font-semibold text-slate-800 mb-3">Upcoming Announcements</h3>
              <div class="space-y-3">
                <div class="flex items-center">
                  <div class="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                  <div>
                    <div class="font-medium">September 4, 2025</div>
                    <div class="text-sm text-gray-600">Next BoC Rate Decision</div>
                  </div>
                </div>
                <div class="flex items-center">
                  <div class="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <div>
                    <div class="font-medium">October 29, 2025</div>
                    <div class="text-sm text-gray-600">Rate Decision + MPR</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-slate-800 mb-3">What to Watch</h3>
              <ul class="space-y-2 text-slate-700">
                <li>• Monthly inflation data</li>
                <li>• Employment statistics</li>
                <li>• Housing market activity</li>
                <li>• Consumer spending patterns</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-r from-green-600 to-blue-600 text-white p-8 rounded-lg mb-8">
          <div class="text-center">
            <h3 class="text-2xl font-bold mb-4">Ready to Take Advantage of Lower Rates?</h3>
            <p class="mb-6 text-green-100">With rates at their lowest levels since early 2023, now is an excellent time to review your mortgage strategy. Whether you're looking to refinance, renew, or purchase, let's discuss how these rate cuts can benefit you.</p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/#contact" class="bg-white text-green-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors">
                Free Rate Review
              </a>
              <a href="https://r.mtg-app.com/robbhullar" target="_blank" rel="noopener noreferrer" class="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-600 px-6 py-3 rounded-lg font-semibold transition-colors">
                Get Current Rates
              </a>
            </div>
          </div>
        </div>

        <div class="border-t border-gray-200 pt-6 mt-8">
          <p class="text-sm text-gray-600 italic">
            <strong>Disclaimer:</strong> This analysis is for informational purposes only and should not be considered financial advice. Mortgage rates and terms are subject to change and individual circumstances may vary. Always consult with a qualified mortgage professional for personalized advice.
          </p>
        </div>
      `,
      date: "February 18, 2025",
      author: "Rob Bhullar",
      category: "Mortgage Qualification",
      image: "stress-test-calculator.png",
    },
  }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const posts = getPostData()
  const post = posts[params.slug]

  // If no post found, show a 404 or redirect to blog index
  if (!post) {
    return (
      <div className="container mx-auto py-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Post Not Found</h1>
        <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
        <a href="/blog" className="text-blue-600 hover:text-blue-800 underline">
          Return to Blog
        </a>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">{post.title}</h1>
      <div className="text-gray-600 mb-4">
        Published on {post.date} by {post.author} in {post.category}
      </div>
      <img src={`/${post.image}`} alt={post.title} className="rounded-lg shadow-md mb-8" />
      <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  )
}
