import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, User } from "lucide-react"
import Link from "next/link"

// This would normally be generated dynamically based on the slug
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const posts = getPostData()
  const post = posts[params.slug] || posts["bank-of-canada-holds-key-interest-rate"]

  return {
    title: `${post.title} | Rob Bhullar Mortgage Blog`,
    description: post.excerpt,
  }
}

function getPostData() {
  return {
    "bank-of-canada-holds-key-interest-rate": {
      title: "Bank of Canada Holds Key Interest Rate at 5%: What This Means for Your Mortgage",
      excerpt:
        "The Bank of Canada maintained its target for the overnight rate at 5%, with the Bank Rate at 5.25%. Here's a comprehensive analysis of what this decision means for mortgage holders and homebuyers.",
      content: `
        <div class="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
          <div class="flex items-center mb-3">
            <svg class="w-6 h-6 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <h3 class="text-lg font-semibold text-blue-800">Key Takeaway</h3>
          </div>
          <p class="text-blue-700">The Bank of Canada held its overnight rate at 5% for the sixth consecutive meeting, signaling potential stability in the interest rate environment. This decision provides clarity for both current mortgage holders and prospective homebuyers planning their next moves.</p>
        </div>

        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 border-gray-200 pb-2">The Bank of Canada's Decision</h2>
        
        <p class="mb-6 text-lg leading-relaxed">The Bank of Canada today maintained its target for the overnight rate at <strong>5%</strong>, with the Bank Rate at <strong>5.25%</strong> and the deposit rate at <strong>5%</strong>. This marks the sixth consecutive meeting where the central bank has held rates steady, continuing its policy of quantitative tightening while monitoring economic conditions.</p>

        <div class="bg-gray-50 p-6 rounded-lg mb-8">
          <h3 class="text-xl font-semibold mb-4 text-gray-800">Rate History at a Glance</h3>
          <div class="grid md:grid-cols-3 gap-4">
            <div class="text-center p-4 bg-white rounded-lg shadow-sm">
              <div class="text-2xl font-bold text-blue-600">5.00%</div>
              <div class="text-sm text-gray-600">Current Overnight Rate</div>
            </div>
            <div class="text-center p-4 bg-white rounded-lg shadow-sm">
              <div class="text-2xl font-bold text-green-600">5.25%</div>
              <div class="text-sm text-gray-600">Bank Rate</div>
            </div>
            <div class="text-center p-4 bg-white rounded-lg shadow-sm">
              <div class="text-2xl font-bold text-purple-600">6 Months</div>
              <div class="text-sm text-gray-600">Unchanged Period</div>
            </div>
          </div>
        </div>

        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 border-gray-200 pb-2">Global Economic Context</h2>
        
        <p class="mb-4 leading-relaxed">The Bank's decision comes amid a complex global economic landscape:</p>
        
        <div class="grid md:grid-cols-2 gap-6 mb-8">
          <div class="bg-red-50 p-6 rounded-lg border-l-4 border-red-400">
            <h3 class="font-semibold text-red-800 mb-3">Economic Challenges</h3>
            <ul class="space-y-2 text-red-700">
              <li>• Global economic growth is slowing</li>
              <li>• Euro area growth remains weak</li>
              <li>• China faces low consumer confidence</li>
              <li>• Policy uncertainty weighing on demand</li>
            </ul>
          </div>
          <div class="bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
            <h3 class="font-semibold text-green-800 mb-3">Positive Indicators</h3>
            <ul class="space-y-2 text-green-700">
              <li>• Inflation continues to ease globally</li>
              <li>• US growth stronger than expected</li>
              <li>• Oil prices $10/barrel lower than July MPR</li>
              <li>• Rate stability providing planning certainty</li>
            </ul>
          </div>
        </div>

        <p class="mb-6 leading-relaxed">While growth in the United States has been stronger than expected, it is anticipated to moderate in the coming quarters as past interest rate increases continue to work through the economy. Oil prices are about $10 per barrel lower than was assumed in the July Monetary Policy Report (MPR), providing some relief for consumers.</p>

        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 border-gray-200 pb-2">Impact on Different Mortgage Types</h2>

        <div class="space-y-6 mb-8">
          <div class="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
            <h3 class="text-xl font-semibold text-blue-800 mb-3 flex items-center">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
              </svg>
              Variable-Rate Mortgage Holders
            </h3>
            <p class="text-blue-700 mb-3">For existing variable-rate mortgage holders, this decision means your mortgage rate will remain unchanged for now. This provides:</p>
            <ul class="space-y-1 text-blue-700">
              <li>• <strong>Payment Stability:</strong> No immediate increase in monthly payments</li>
              <li>• <strong>Budget Certainty:</strong> Easier to plan household finances</li>
              <li>• <strong>Potential Savings:</strong> If rates begin to decline, you'll benefit immediately</li>
            </ul>
          </div>

          <div class="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
            <h3 class="text-xl font-semibold text-orange-800 mb-3 flex items-center">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
              </svg>
              Fixed-Rate Mortgage Renewals
            </h3>
            <p class="text-orange-700 mb-3">If you have a fixed-rate mortgage coming up for renewal, you may still face higher rates than your previous term, but the stabilization provides:</p>
            <ul class="space-y-1 text-orange-700">
              <li>• <strong>Rate Predictability:</strong> More certainty for renewal planning</li>
              <li>• <strong>Negotiation Power:</strong> Stable environment for rate shopping</li>
              <li>• <strong>Strategic Timing:</strong> Opportunity to lock in before potential increases</li>
            </ul>
          </div>

          <div class="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
            <h3 class="text-xl font-semibold text-green-800 mb-3 flex items-center">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
              </svg>
              Prospective Homebuyers
            </h3>
            <p class="text-green-700 mb-3">For those looking to buy, the Bank's decision suggests we may be at or near the peak of the current interest rate cycle:</p>
            <ul class="space-y-1 text-green-700">
              <li>• <strong>Market Stability:</strong> Rates unlikely to increase significantly</li>
              <li>• <strong>Planning Confidence:</strong> More predictable borrowing costs</li>
              <li>• <strong>Opportunity Window:</strong> Potential to secure rates before any future changes</li>
            </ul>
          </div>
        </div>

        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 border-gray-200 pb-2">Market Analysis & Expert Insights</h2>

        <div class="bg-gray-50 p-6 rounded-lg mb-8">
          <h3 class="text-xl font-semibold mb-4 text-gray-800">What the Experts Are Saying</h3>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-semibold text-gray-800 mb-2">Bank of Canada's Position</h4>
              <p class="text-gray-600 text-sm">"The Bank is prepared to raise rates further if needed to bring inflation back to the 2% target, but current data suggests we may be at the peak of this cycle."</p>
            </div>
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-semibold text-gray-800 mb-2">Market Expectations</h4>
              <p class="text-gray-600 text-sm">Financial markets are pricing in potential rate cuts in 2024, though the timing remains uncertain and dependent on inflation data.</p>
            </div>
          </div>
        </div>

        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 border-gray-200 pb-2">Strategic Considerations for Mortgage Holders</h2>

        <div class="space-y-4 mb-8">
          <div class="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
            <h3 class="text-lg font-semibold text-yellow-800 mb-3">If You're Renewing Soon</h3>
            <ul class="space-y-2 text-yellow-700">
              <li>• <strong>Start Early:</strong> Begin shopping for rates 120 days before renewal</li>
              <li>• <strong>Consider Terms:</strong> Shorter terms may offer flexibility if rates decline</li>
              <li>• <strong>Don't Auto-Renew:</strong> Your current lender's offer may not be the best available</li>
              <li>• <strong>Explore Options:</strong> Consider both fixed and variable rate products</li>
            </ul>
          </div>

          <div class="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-400">
            <h3 class="text-lg font-semibold text-purple-800 mb-3">If You're Buying a Home</h3>
            <ul class="space-y-2 text-purple-700">
              <li>• <strong>Get Pre-Approved:</strong> Lock in current rates for up to 120 days</li>
              <li>• <strong>Budget Conservatively:</strong> Plan for potential rate increases</li>
              <li>• <strong>Consider Timing:</strong> Current stability may not last indefinitely</li>
              <li>• <strong>Stress Test Preparation:</strong> Ensure you qualify at higher rates</li>
            </ul>
          </div>
        </div>

        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 border-gray-200 pb-2">Looking Ahead: Key Dates & Expectations</h2>

        <div class="bg-slate-50 p-6 rounded-lg mb-8">
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <h3 class="text-lg font-semibold text-slate-800 mb-3">Upcoming Announcements</h3>
              <div class="space-y-3">
                <div class="flex items-center">
                  <div class="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                  <div>
                    <div class="font-medium">October 25, 2024</div>
                    <div class="text-sm text-gray-600">Next BoC Rate Decision + MPR</div>
                  </div>
                </div>
                <div class="flex items-center">
                  <div class="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <div>
                    <div class="font-medium">December 11, 2024</div>
                    <div class="text-sm text-gray-600">Final 2024 Rate Decision</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-slate-800 mb-3">What to Watch</h3>
              <ul class="space-y-2 text-slate-700">
                <li>• Inflation data trends</li>
                <li>• Employment statistics</li>
                <li>• Housing market activity</li>
                <li>• Global economic developments</li>
              </ul>
            </div>
          </div>
        </div>

        <p class="mb-6 leading-relaxed">The Bank of Canada's next scheduled interest rate announcement is <strong>October 25, 2024</strong>, which will be accompanied by the full outlook for the economy and inflation in the Monetary Policy Report. This will provide crucial insights into the Bank's future direction and economic projections.</p>

        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 border-gray-200 pb-2">Your Next Steps</h2>

        <div class="bg-blue-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
          <h3 class="text-xl font-semibold text-blue-800 mb-4">Take Action Today</h3>
          <p class="text-blue-700 mb-4">If you're concerned about how interest rates might affect your mortgage or if you're considering buying a home, now is an excellent time to speak with a mortgage professional to understand your options and develop a strategy.</p>
          
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-white p-4 rounded-lg">
              <h4 class="font-semibold text-blue-800 mb-2">Current Mortgage Holders</h4>
              <ul class="text-sm text-blue-700 space-y-1">
                <li>• Review your renewal timeline</li>
                <li>• Explore refinancing opportunities</li>
                <li>• Consider payment optimization strategies</li>
              </ul>
            </div>
            <div class="bg-white p-4 rounded-lg">
              <h4 class="font-semibold text-blue-800 mb-2">Prospective Buyers</h4>
              <ul class="text-sm text-blue-700 space-y-1">
                <li>• Get pre-approved at current rates</li>
                <li>• Understand your borrowing capacity</li>
                <li>• Plan your home buying timeline</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-r from-slate-800 to-slate-900 text-white p-8 rounded-lg mb-8">
          <div class="text-center">
            <h3 class="text-2xl font-bold mb-4">Ready to Discuss Your Mortgage Strategy?</h3>
            <p class="mb-6 text-slate-200">The interest rate environment is complex, but you don't have to navigate it alone. Let's discuss how these changes affect your specific situation and explore your best options.</p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/#contact" class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Schedule Free Consultation
              </a>
              <a href="https://r.mtg-app.com/robbhullar" target="_blank" rel="noopener noreferrer" class="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 px-6 py-3 rounded-lg font-semibold transition-colors">
                Start Your Application
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
      date: "June 5, 2024",
      author: "Rob Bhullar",
      category: "Interest Rates",
      image: "bank-of-canada-building.png",
    },

    "first-time-home-buyer-incentive-changes": {
      title: "First-Time Home Buyer Incentive Program: Major Changes Coming to BC",
      excerpt:
        "The federal government announced significant changes to the First-Time Home Buyer Incentive program, increasing the eligible home price threshold in high-cost markets like Vancouver and Toronto.",
      content: `
        <div class="bg-green-50 border-l-4 border-green-500 p-6 mb-8 rounded-r-lg">
          <div class="flex items-center mb-3">
            <svg class="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
            </svg>
            <h3 class="text-lg font-semibold text-green-800">Great News for First-Time Buyers</h3>
          </div>
          <p class="text-green-700">The federal government has increased the home price threshold for the First-Time Home Buyer Incentive from $500,000 to $750,000 in high-cost markets, making homeownership more accessible in BC.</p>
        </div>

        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 border-gray-200 pb-2">What's Changed?</h2>
        
        <div class="grid md:grid-cols-2 gap-6 mb-8">
          <div class="bg-red-50 p-6 rounded-lg border-l-4 border-red-400">
            <h3 class="font-semibold text-red-800 mb-3">Previous Limits</h3>
            <ul class="space-y-2 text-red-700">
              <li>• Maximum home price: $500,000</li>
              <li>• Limited to lower-cost markets</li>
              <li>• Excluded most BC properties</li>
              <li>• 5% or 10% shared equity loan</li>
            </ul>
          </div>
          <div class="bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
            <h3 class="font-semibold text-green-800 mb-3">New Enhanced Limits</h3>
            <ul class="space-y-2 text-green-700">
              <li>• Maximum home price: $750,000 in BC</li>
              <li>• Covers Vancouver, Surrey, Burnaby</li>
              <li>• More properties now eligible</li>
              <li>• Same 5% or 10% shared equity</li>
            </ul>
          </div>
        </div>

        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 border-gray-200 pb-2">Eligibility Requirements</h2>

        <div class="space-y-4 mb-8">
          <div class="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
            <h3 class="text-lg font-semibold text-yellow-800 mb-3">Income Requirements</h3>
            <ul class="space-y-2 text-yellow-700">
              <li>• Maximum household income: $150,000 in BC (updated 2024)</li>
              <li>• Must qualify for mortgage on remaining amount</li>
              <li>• Income verification required</li>
              <li>• Must be first-time homebuyer</li>
            </ul>
          </div>

          <div class="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-400">
            <h3 class="text-lg font-semibold text-purple-800 mb-3">Property Requirements</h3>
            <ul class="space-y-2 text-purple-700">
              <li>• Must be primary residence</li>
              <li>• New or existing homes eligible</li>
              <li>• Condos, townhomes, detached homes</li>
              <li>• Located in eligible markets</li>
            </ul>
          </div>
        </div>

        <div class="bg-gradient-to-r from-green-600 to-blue-600 text-white p-8 rounded-lg mb-8">
          <div class="text-center">
            <h3 class="text-2xl font-bold mb-4">Ready to Take Advantage of These Programs?</h3>
            <p class="mb-6 text-green-100">These government incentives can significantly reduce your down payment requirements and monthly payments. Let's explore how they can work for your specific situation.</p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/#contact" class="bg-white text-green-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors">
                Get Pre-Approved Today
              </a>
              <a href="https://r.mtg-app.com/robbhullar" target="_blank" rel="noopener noreferrer" class="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-600 px-6 py-3 rounded-lg font-semibold transition-colors">
                Start Application
              </a>
            </div>
          </div>
        </div>
      `,
      date: "May 22, 2024",
      author: "Rob Bhullar",
      category: "Government Programs",
      image: "first-time-homebuyer-family.png",
    },

    "vancouver-housing-market-update": {
      title: "Vancouver Housing Market Update: Signs of Stabilization After Months of Growth",
      excerpt:
        "Vancouver's housing market shows signs of stabilizing after months of price increases. Sales volume has decreased while inventory has slightly increased, creating more balanced conditions for buyers and sellers.",
      content: `
        <div class="bg-orange-50 border-l-4 border-orange-500 p-6 mb-8 rounded-r-lg">
          <div class="flex items-center mb-3">
            <svg class="w-6 h-6 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
            </svg>
            <h3 class="text-lg font-semibold text-orange-800">Market Snapshot</h3>
          </div>
          <p class="text-orange-700">Vancouver's housing market is showing signs of cooling after a period of rapid growth, with increased inventory and longer selling times creating more opportunities for buyers.</p>
        </div>

        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 border-gray-200 pb-2">Key Market Statistics</h2>
        
        <div class="grid md:grid-cols-3 gap-6 mb-8">
          <div class="bg-blue-50 p-6 rounded-lg text-center">
            <div class="text-3xl font-bold text-blue-600 mb-2">$1.42M</div>
            <div class="text-sm text-blue-800 font-medium">Average Home Price</div>
            <div class="text-xs text-blue-600 mt-1">↑ 2.1% vs last month</div>
          </div>
          <div class="bg-red-50 p-6 rounded-lg text-center">
            <div class="text-3xl font-bold text-red-600 mb-2">2,847</div>
            <div class="text-sm text-red-800 font-medium">Sales This Month</div>
            <div class="text-xs text-red-600 mt-1">↓ 15.3% vs last month</div>
          </div>
          <div class="bg-green-50 p-6 rounded-lg text-center">
            <div class="text-3xl font-bold text-green-600 mb-2">4,521</div>
            <div class="text-sm text-green-800 font-medium">Active Listings</div>
            <div class="text-xs text-green-600 mt-1">↑ 8.7% vs last month</div>
          </div>
        </div>

        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 border-gray-200 pb-2">Market Trends by Property Type</h2>

        <div class="space-y-6 mb-8">
          <div class="bg-slate-50 p-6 rounded-lg">
            <h3 class="text-xl font-semibold text-slate-800 mb-4">Detached Homes</h3>
            <div class="grid md:grid-cols-4 gap-4">
              <div class="text-center">
                <div class="text-2xl font-bold text-slate-700">$2.1M</div>
                <div class="text-sm text-slate-600">Average Price</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-red-600">-12%</div>
                <div class="text-sm text-slate-600">Sales Volume</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-green-600">+15%</div>
                <div class="text-sm text-slate-600">Inventory</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-slate-700">28 days</div>
                <div class="text-sm text-slate-600">Avg. Days on Market</div>
              </div>
            </div>
          </div>

          <div class="bg-blue-50 p-6 rounded-lg">
            <h3 class="text-xl font-semibold text-blue-800 mb-4">Condominiums</h3>
            <div class="grid md:grid-cols-4 gap-4">
              <div class="text-center">
                <div class="text-2xl font-bold text-blue-700">$785K</div>
                <div class="text-sm text-blue-600">Average Price</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-red-600">-8%</div>
                <div class="text-sm text-blue-600">Sales Volume</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-green-600">+12%</div>
                <div class="text-sm text-blue-600">Inventory</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-blue-700">22 days</div>
                <div class="text-sm text-blue-600">Avg. Days on Market</div>
              </div>
            </div>
          </div>

          <div class="bg-green-50 p-6 rounded-lg">
            <h3 class="text-xl font-semibold text-green-800 mb-4">Townhomes</h3>
            <div class="grid md:grid-cols-4 gap-4">
              <div class="text-center">
                <div class="text-2xl font-bold text-green-700">$1.3M</div>
                <div class="text-sm text-green-600">Average Price</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-red-600">-10%</div>
                <div class="text-sm text-green-600">Sales Volume</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-green-600">+18%</div>
                <div class="text-sm text-green-600">Inventory</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-green-700">25 days</div>
                <div class="text-sm text-green-600">Avg. Days on Market</div>
              </div>
            </div>
          </div>
        </div>

        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 border-gray-200 pb-2">What's Driving These Changes?</h2>

        <div class="grid md:grid-cols-2 gap-6 mb-8">
          <div class="bg-red-50 p-6 rounded-lg border-l-4 border-red-400">
            <h3 class="font-semibold text-red-800 mb-3">Cooling Factors</h3>
            <ul class="space-y-2 text-red-700">
              <li>• Higher interest rates affecting affordability</li>
              <li>• Increased mortgage stress test requirements</li>
              <li>• Economic uncertainty reducing buyer confidence</li>
              <li>• Seasonal market slowdown</li>
              <li>• Government policy changes</li>
            </ul>
          </div>
          <div class="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
            <h3 class="font-semibold text-blue-800 mb-3">Supporting Factors</h3>
            <ul class="space-y-2 text-blue-700">
              <li>• Continued population growth</li>
              <li>• Limited land supply</li>
              <li>• Strong employment market</li>
              <li>• Immigration targets</li>
              <li>• Long-term demand fundamentals</li>
            </ul>
          </div>
        </div>

        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 border-gray-200 pb-2">Regional Breakdown</h2>

        <div class="space-y-4 mb-8">
          <div class="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
            <h3 class="text-lg font-semibold text-yellow-800 mb-3">Vancouver West</h3>
            <div class="grid md:grid-cols-3 gap-4">
              <div>
                <div class="text-xl font-bold text-yellow-700">$2.8M</div>
                <div class="text-sm text-yellow-600">Avg. Detached Price</div>
              </div>
              <div>
                <div class="text-xl font-bold text-yellow-700">$950K</div>
                <div class="text-sm text-yellow-600">Avg. Condo Price</div>
              </div>
              <div>
                <div class="text-xl font-bold text-yellow-700">-18%</div>
                <div class="text-sm text-yellow-600">Sales Change</div>
              </div>
            </div>
          </div>

          <div class="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-400">
            <h3 class="text-lg font-semibold text-purple-800 mb-3">Vancouver East</h3>
            <div class="grid md:grid-cols-3 gap-4">
              <div>
                <div class="text-xl font-bold text-purple-700">$1.9M</div>
                <div class="text-sm text-purple-600">Avg. Detached Price</div>
              </div>
              <div>
                <div class="text-xl font-bold text-purple-700">$720K</div>
                <div class="text-sm text-purple-600">Avg. Condo Price</div>
              </div>
              <div>
                <div class="text-xl font-bold text-purple-700">-14%</div>
                <div class="text-sm text-purple-600">Sales Change</div>
              </div>
            </div>
          </div>

          <div class="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-400">
            <h3 class="text-lg font-semibold text-indigo-800 mb-3">Richmond</h3>
            <div class="grid md:grid-cols-3 gap-4">
              <div>
                <div class="text-xl font-bold text-indigo-700">$1.7M</div>
                <div class="text-sm text-indigo-600">Avg. Detached Price</div>
              </div>
              <div>
                <div class="text-xl font-bold text-indigo-700">$680K</div>
                <div class="text-sm text-indigo-600">Avg. Condo Price</div>
              </div>
              <div>
                <div class="text-xl font-bold text-indigo-700">-11%</div>
                <div class="text-sm text-indigo-600">Sales Change</div>
              </div>
            </div>
          </div>
        </div>

        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 border-gray-200 pb-2">What This Means for You</h2>

        <div class="space-y-6 mb-8">
          <div class="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
            <h3 class="text-xl font-semibold text-green-800 mb-3 flex items-center">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 10H4L5 9z"></path>
              </svg>
              For Buyers
            </h3>
            <ul class="space-y-2 text-green-700">
              <li>• <strong>More Choice:</strong> Increased inventory means more options</li>
              <li>• <strong>Less Competition:</strong> Fewer bidding wars and multiple offers</li>
              <li>• <strong>Negotiation Power:</strong> More room to negotiate price and conditions</li>
              <li>• <strong>Time to Decide:</strong> Less pressure to make quick decisions</li>
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
              <li>• <strong>Realistic Pricing:</strong> Price competitively to attract buyers</li>
              <li>• <strong>Professional Marketing:</strong> High-quality presentation is crucial</li>
              <li>• <strong>Flexibility:</strong> Be prepared to negotiate on price and terms</li>
              <li>• <strong>Timing Matters:</strong> Consider market conditions for listing</li>
            </ul>
          </div>
        </div>

        <div class="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg mb-8">
          <div class="text-center">
            <h3 class="text-2xl font-bold mb-4">Navigate the Market with Expert Guidance</h3>
            <p class="mb-6 text-blue-100">Whether you're buying or selling in this changing market, having the right mortgage strategy is crucial. Let's discuss how current market conditions affect your financing options.</p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/#contact" class="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors">
                Market Consultation
              </a>
              <a href="https://r.mtg-app.com/robbhullar" target="_blank" rel="noopener noreferrer" class="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-lg font-semibold transition-colors">
                Get Pre-Approved
              </a>
            </div>
          </div>
        </div>

        <div class="border-t border-gray-200 pt-6 mt-8">
          <p class="text-sm text-gray-600 italic">
            <strong>Data Sources:</strong> Real Estate Board of Greater Vancouver, BC Assessment, Statistics Canada. Market data is updated monthly and reflects the most recent available information.
          </p>
        </div>
      `,
      date: "May 15, 2024",
      author: "Rob Bhullar",
      category: "Market Updates",
      image: "vancouver-skyline-housing.png",
    },

    "improve-credit-score-for-better-mortgage-rates": {
      title: "How to Improve Your Credit Score for Better Mortgage Rates",
      excerpt:
        "Your credit score has a significant impact on the mortgage rates you qualify for. Learn practical steps to improve your score before applying and save thousands on your mortgage.",
      content: `
        <div class="bg-green-50 border-l-4 border-green-500 p-6 mb-8 rounded-r-lg">
          <div class="flex items-center mb-3">
            <svg class="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
            </svg>
            <h3 class="text-lg font-semibold text-green-800">Credit Score Impact</h3>
          </div>
          <p class="text-green-700">A difference of just 100 points in your credit score can save you tens of thousands of dollars over the life of your mortgage. The good news? Most credit improvements can be made in 3-6 months with the right strategy.</p>
        </div>

        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 border-gray-200 pb-2">Credit Score Ranges & Mortgage Rates</h2>
        
        <div class="bg-gray-50 p-6 rounded-lg mb-8">
          <h3 class="text-xl font-semibold mb-4 text-gray-800">How Your Score Affects Your Rate</h3>
          <div class="space-y-4">
            <div class="flex justify-between items-center p-4 bg-red-50 rounded-lg border-l-4 border-red-400">
              <div>
                <div class="font-semibold text-red-800">Poor: 300-579</div>
                <div class="text-sm text-red-600">Subprime lenders only</div>
              </div>
              <div class="text-xl font-bold text-red-700">8.5%+</div>
            </div>
            <div class="flex justify-between items-center p-4 bg-orange-50 rounded-lg border-l-4 border-orange-400">
              <div>
                <div class="font-semibold text-orange-800">Fair: 580-669</div>
                <div class="text-sm text-orange-600">Limited options</div>
              </div>
              <div class="text-xl font-bold text-orange-700">6.5-7.5%</div>
            </div>
            <div class="flex justify-between items-center p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
              <div>
                <div class="font-semibold text-yellow-800">Good: 670-739</div>
                <div class="text-sm text-yellow-600">Most lenders available</div>
              </div>
              <div class="text-xl font-bold text-yellow-700">5.5-6.5%</div>
            </div>
            <div class="flex justify-between items-center p-4 bg-green-50 rounded-lg border-l-4 border-green-400">
              <div>
                <div class="font-semibold text-green-800">Excellent: 740+</div>
                <div class="text-sm text-green-600">Best rates available</div>
              </div>
              <div class="text-xl font-bold text-green-700">5.0-5.5%</div>
            </div>
          </div>
        </div>

        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 border-gray-200 pb-2">What Makes Up Your Credit Score</h2>

        <div class="grid md:grid-cols-2 gap-6 mb-8">
          <div class="bg-blue-50 p-6 rounded-lg">
            <h3 class="text-lg font-semibold text-blue-800 mb-4">Credit Score Factors</h3>
            <div class="space-y-3">
              <div class="flex justify-between items-center">
                <span class="text-blue-700">Payment History</span>
                <span class="font-bold text-blue-800">35%</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-blue-700">Credit Utilization</span>
                <span class="font-bold text-blue-800">30%</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-blue-700">Length of Credit History</span>
                <span class="font-bold text-blue-800">15%</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-blue-700">Credit Mix</span>
                <span class="font-bold text-blue-800">10%</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-blue-700">New Credit</span>
                <span class="font-bold text-blue-800">10%</span>
              </div>
            </div>
          </div>
          <div class="bg-purple-50 p-6 rounded-lg">
            <h3 class="text-lg font-semibold text-purple-800 mb-4">Quick Wins</h3>
            <ul class="space-y-2 text-purple-700">
              <li>• Pay down credit card balances</li>
              <li>• Set up automatic payments</li>
              <li>• Don't close old credit cards</li>
              <li>• Check for errors on credit report</li>
              <li>• Limit new credit applications</li>
            </ul>
          </div>
        </div>

        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 border-gray-200 pb-2">Step-by-Step Credit Improvement Plan</h2>

        <div class="space-y-6 mb-8">
          <div class="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
            <h3 class="text-xl font-semibold text-yellow-800 mb-3">Month 1: Foundation</h3>
            <ul class="space-y-2 text-yellow-700">
              <li>• <strong>Get your free credit reports</strong> from Equifax and TransUnion</li>
              <li>• <strong>Dispute any errors</strong> you find immediately</li>
              <li>• <strong>Set up automatic payments</strong> for all bills</li>
              <li>• <strong>Calculate your credit utilization</strong> on all cards</li>
              <li>• <strong>Create a debt paydown plan</strong> focusing on high-utilization cards</li>
            </ul>
          </div>

          <div class="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
            <h3 class="text-xl font-semibold text-blue-800 mb-3">Months 2-3: Optimization</h3>
            <ul class="space-y-2 text-blue-700">
              <li>• <strong>Pay down credit cards</strong> to below 30% utilization (ideally under 10%)</li>
              <li>• <strong>Make multiple payments</strong> per month to keep balances low</li>
              <li>• <strong>Request credit limit increases</strong> on existing cards</li>
              <li>• <strong>Pay off collections</strong> or negotiate payment plans</li>
              <li>• <strong>Avoid new credit applications</strong> unless absolutely necessary</li>
            </ul>
          </div>

          <div class="bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
            <h3 class="text-xl font-semibold text-green-800 mb-3">Months 4-6: Maintenance & Monitoring</h3>
            <ul class="space-y-2 text-green-700">
              <li>• <strong>Monitor your score monthly</strong> using free credit monitoring</li>
              <li>• <strong>Keep utilization below 10%</strong> on all cards</li>
              <li>• <strong>Continue making all payments on time</strong></li>
              <li>• <strong>Consider becoming an authorized user</strong> on a family member's account</li>
              <li>• <strong>Prepare for mortgage application</strong> by avoiding new credit</li>
            </ul>
          </div>
        </div>

        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 border-gray-200 pb-2">Advanced Strategies</h2>

        <div class="grid md:grid-cols-2 gap-6 mb-8">
          <div class="bg-slate-50 p-6 rounded-lg">
            <h3 class="text-lg font-semibold text-slate-800 mb-3">Credit Utilization Hacks</h3>
            <ul class="space-y-2 text-slate-700 text-sm">
              <li>• <strong>Pay before statement date:</strong> Keep reported balances low</li>
              <li>• <strong>Split large purchases:</strong> Across multiple cards</li>
              <li>• <strong>Request higher limits:</strong> Every 6 months</li>
              <li>• <strong>Use multiple cards:</strong> Keep each under 10% utilization</li>
            </ul>
          </div>
          <div class="bg-indigo-50 p-6 rounded-lg">
            <h3 class="text-lg font-semibold text-indigo-800 mb-3">Payment Timing</h3>
            <ul class="space-y-2 text-indigo-700 text-sm">
              <li>• <strong>Bi-weekly payments:</strong> Reduce average daily balance</li>
              <li>• <strong>Pay immediately:</strong> After large purchases</li>
              <li>• <strong>Set up alerts:</strong> For payment due dates</li>
              <li>• <strong>Pay early:</strong> 2-3 days before due date</li>
            </ul>
          </div>
        </div>

        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 border-gray-200 pb-2">Common Credit Mistakes to Avoid</h2>

        <div class="bg-red-50 p-6 rounded-lg mb-8 border-l-4 border-red-400">
          <h3 class="text-xl font-semibold text-red-800 mb-4">Don't Do These Before Applying for a Mortgage</h3>
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <h4 class="font-semibold text-red-700 mb-2">Credit Actions to Avoid</h4>
              <ul class="space-y-1 text-red-600 text-sm">
                <li>• Opening new credit cards</li>
                <li>• Closing old credit accounts</li>
                <li>• Making large purchases on credit</li>
                <li>• Co-signing for others</li>
                <li>• Missing any payments</li>
              </ul>
            </div>
            <div>
              <h4 class="font-semibold text-red-700 mb-2">Financial Actions to Avoid</h4>
              <ul class="space-y-1 text-red-600 text-sm">
                <li>• Changing jobs (if possible)</li>
                <li>• Making large cash deposits</li>
                <li>• Taking on new debt</li>
                <li>• Lending money to others</li>
                <li>• Moving money between accounts unnecessarily</li>
              </ul>
            </div>
          </div>
        </div>

        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 border-gray-200 pb-2">Real-World Example: Credit Score Improvement</h2>

        <div class="bg-slate-50 p-6 rounded-lg mb-8">
          <h3 class="text-xl font-semibold text-slate-800 mb-4">Sarah's 6-Month Credit Journey</h3>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-semibold text-slate-800 mb-3">Starting Point (January)</h4>
              <ul class="space-y-2 text-slate-700 text-sm">
                <li>• Credit Score: 640</li>
                <li>• Credit Card Debt: $15,000</li>
                <li>• Utilization: 85%</li>
                <li>• Available Rate: 6.8%</li>
                <li>• Monthly Payment: $3,420</li>
              </ul>
            </div>
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-semibold text-slate-800 mb-3">After Improvement (July)</h4>
              <ul class="space-y-2 text-slate-700 text-sm">
                <li>• Credit Score: 740</li>
                <li>• Credit Card Debt: $3,000</li>
                <li>• Utilization: 15%</li>
                <li>• Available Rate: 5.2%</li>
                <li>• Monthly Payment: $2,890</li>
              </ul>
            </div>
          </div>
          <div class="mt-4 p-4 bg-green-100 rounded-lg">
            <div class="text-center">
              <div class="text-2xl font-bold text-green-800">$530/month savings</div>
              <div class="text-sm text-green-600">$190,800 saved over 30 years</div>
            </div>
          </div>
        </div>

        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 border-gray-200 pb-2">Free Credit Monitoring Resources</h2>

        <div class="grid md:grid-cols-3 gap-6 mb-8">
          <div class="bg-blue-50 p-6 rounded-lg text-center">
            <h3 class="font-semibold text-blue-800 mb-2">Credit Karma</h3>
            <p class="text-sm text-blue-600 mb-3">Free TransUnion & Equifax scores</p>
            <div class="text-xs text-blue-500">Updates weekly</div>
          </div>
          <div class="bg-green-50 p-6 rounded-lg text-center">
            <h3 class="font-semibold text-green-800 mb-2">Borrowell</h3>
            <p class="text-sm text-green-600 mb-3">Free Equifax score & report</p>
            <div class="text-xs text-green-500">Canadian-focused</div>
          </div>
          <div class="bg-purple-50 p-6 rounded-lg text-center">
            <h3 class="font-semibold text-purple-800 mb-2">Mogo</h3>
            <p class="text-sm text-purple-600 mb-3">Free Equifax score</p>
            <div class="text-xs text-purple-500">Identity monitoring</div>
          </div>
        </div>

        <div class="bg-gradient-to-r from-green-600 to-blue-600 text-white p-8 rounded-lg mb-8">
          <div class="text-center">
            <h3 class="text-2xl font-bold mb-4">Ready to Improve Your Credit & Get Better Rates?</h3>
            <p class="mb-6 text-green-100">Don't wait to start improving your credit score. Every month of improvement can save you money on your mortgage. Let's create a personalized plan for your situation.</p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/#contact" class="bg-white text-green-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors">
                Free Credit Consultation
              </a>
              <a href="https://r.mtg-app.com/robbhullar" target="_blank" rel="noopener noreferrer" class="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-600 px-6 py-3 rounded-lg font-semibold transition-colors">
                Check Pre-Approval Rates
              </a>
            </div>
          </div>
        </div>

        <div class="border-t border-gray-200 pt-6 mt-8">
          <p class="text-sm text-gray-600 italic">
            <strong>Disclaimer:</strong> Credit score improvements take time and results may vary. This information is for educational purposes only and should not be considered financial advice. Always consult with a qualified mortgage professional for personalized guidance.
          </p>
        </div>
      `,
      date: "April 30, 2024",
      author: "Rob Bhullar",
      category: "Credit Tips",
      image: "credit-score-improvement.png",
    },

    "understanding-mortgage-stress-tests-2024": {
      title: "Understanding Mortgage Stress Tests in 2024: What You Need to Know",
      excerpt:
        "Mortgage stress tests continue to impact homebuyers across Canada. Learn how the current rules work, what rates you'll be tested at, and how to prepare for them in 2024.",
      content: `
        <div class="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
          <div class="flex items-center mb-3">
            <svg class="w-6 h-6 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <h3 class="text-lg font-semibold text-blue-800">2024 Stress Test Update</h3>
          </div>
          <p class="text-blue-700">The mortgage stress test remains a key qualification requirement for all Canadian homebuyers. In 2024, you'll need to qualify at the higher of your contract rate plus 2% or the Bank of Canada's 5-year benchmark rate.</p>
        </div>

        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 border-gray-200 pb-2">What is the Mortgage Stress Test?</h2>
        
        <p class="mb-6 text-lg leading-relaxed">The mortgage stress test is a federal regulation that requires all homebuyers to prove they can afford their mortgage payments at a higher interest rate than they're actually getting. This ensures borrowers can still make payments if rates rise or their financial situation changes.</p>

        <div class="bg-gray-50 p-6 rounded-lg mb-8">
          <h3 class="text-xl font-semibold mb-4 text-gray-800">Current Stress Test Rules (2024)</h3>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-semibold text-gray-800 mb-2">Insured Mortgages</h4>
              <p class="text-sm text-gray-600 mb-3">(Less than 20% down payment)</p>
              <div class="text-lg font-bold text-blue-600">Higher of:</div>
              <ul class="text-sm text-gray-700 mt-2">
                <li>• Contract rate + 2%</li>
                <li>• BoC 5-year benchmark (currently 5.25%)</li>
              </ul>
            </div>
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-semibold text-gray-800 mb-2">Uninsured Mortgages</h4>
              <p class="text-sm text-gray-600 mb-3">(20% or more down payment)</p>
              <div class="text-lg font-bold text-blue-600">Higher of:</div>
              <ul class="text-sm text-gray-700 mt-2">
                <li>• Contract rate + 2%</li>
                <li>• BoC 5-year benchmark (currently 5.25%)</li>
              </ul>
            </div>
          </div>
        </div>

        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 border-gray-200 pb-2">How the Stress Test Works</h2>

        <div class="space-y-6 mb-8">
          <div class="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
            <h3 class="text-xl font-semibold text-yellow-800 mb-3">Example Calculation</h3>
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <h4 class="font-semibold text-yellow-700 mb-2">Your Actual Mortgage</h4>
                <ul class="space-y-1 text-yellow-600 text-sm">
                  <li>• Home price: $750,000</li>
                  <li>• Down payment: $150,000 (20%)</li>
                  <li>• Mortgage amount: $600,000</li>
                  <li>• Contract rate: 5.2%</li>
                  <li>• Monthly payment: $3,510</li>
                </ul>
              </div>
              <div>
                <h4 class="font-semibold text-yellow-700 mb-2">Stress Test Qualification</h4>
                <ul class="space-y-1 text-yellow-600 text-sm">
                  <li>• Same mortgage: $600,000</li>
                  <li>• Stress test rate: 7.2% (5.2% + 2%)</li>
                  <li>• Stress test payment: $4,180</li>
                  <li>• <strong>You must qualify at $4,180/month</strong></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 border-gray-200 pb-2">Income Requirements Under Stress Test</h2>

        <div class="bg-slate-50 p-6 rounded-lg mb-8">
          <h3 class="text-xl font-semibold text-slate-800 mb-4">Debt Service Ratios</h3>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-semibold text-slate-800 mb-2">GDS (Gross Debt Service)</h4>
              <div class="text-2xl font-bold text-blue-600 mb-2">≤ 39%</div>
              <p class="text-sm text-slate-600">Housing costs (mortgage, taxes, heating, condo fees) cannot exceed 39% of gross income</p>
            </div>
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-semibold text-slate-800 mb-2">TDS (Total Debt Service)</h4>
              <div class="text-2xl font-bold text-blue-600 mb-2">≤ 44%</div>
              <p class="text-sm text-slate-600">All debt payments cannot exceed 44% of gross income</p>
            </div>
          </div>
        </div>

        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 border-gray-200 pb-2">Real-World Impact Examples</h2>

        <div class="space-y-6 mb-8">
          <div class="bg-red-50 p-6 rounded-lg border-l-4 border-red-400">
            <h3 class="text-lg font-semibold text-red-800 mb-3">Scenario 1: First-Time Buyer</h3>
            <div class="grid md:grid-cols-3 gap-4">
              <div>
                <div class="font-medium text-red-700">Household Income</div>
                <div class="text-xl font-bold text-red-800">$80,000</div>
              </div>
              <div>
                <div class="font-medium text-red-700">Max Purchase (No Stress Test)</div>
                <div class="text-xl font-bold text-red-800">$520,000</div>
              </div>
              <div>
                <div class="font-medium text-red-700">Max Purchase (With Stress Test)</div>
                <div class="text-xl font-bold text-red-800">$420,000</div>
              </div>
            </div>
            <div class="mt-3 text-sm text-red-600">
              <strong>Impact:</strong> Stress test reduces buying power by $100,000 (19%)
            </div>
          </div>

          <div class="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
            <h3 class="text-lg font-semibold text-blue-800 mb-3">Scenario 2: Move-Up Buyer</h3>
            <div class="grid md:grid-cols-3 gap-4">
              <div>
                <div class="font-medium text-blue-700">Household Income</div>
                <div class="text-xl font-bold text-blue-800">$150,000</div>
              </div>
              <div>
                <div class="font-medium text-blue-700">Max Purchase (No Stress Test)</div>
                <div class="text-xl font-bold text-blue-800">$975,000</div>
              </div>
              <div>
                <div class="font-medium text-blue-700">Max Purchase (With Stress Test)</div>
                <div class="text-xl font-bold text-blue-800">$785,000</div>
              </div>
            </div>
            <div class="mt-3 text-sm text-blue-600">
              <strong>Impact:</strong> Stress test reduces buying power by $190,000 (19%)
            </div>
          </div>
        </div>

        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 border-gray-200 pb-2">Strategies to Pass the Stress Test</h2>

        <div class="grid md:grid-cols-2 gap-6 mb-8">
          <div class="bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
            <h3 class="font-semibold text-green-800 mb-3">Increase Your Income</h3>
            <ul class="space-y-2 text-green-700 text-sm">
              <li>• Add a co-borrower or guarantor</li>
              <li>• Include bonus/commission income</li>
              <li>• Document rental income from basement suite</li>
              <li>• Consider part-time employment income</li>
              <li>• Include child tax benefits (if applicable)</li>
            </ul>
          </div>
          <div class="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-400">
            <h3 class="font-semibold text-purple-800 mb-3">Reduce Your Debts</h3>
            <ul class="space-y-2 text-purple-700 text-sm">
              <li>• Pay off credit cards completely</li>
              <li>• Consolidate high-interest debt</li>
              <li>• Pay down car loans</li>
              <li>• Avoid new credit applications</li>
              <li>• Consider debt consolidation loan</li>
            </ul>
          </div>
        </div>

        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 border-gray-200 pb-2">Alternative Solutions</h2>

        <div class="space-y-4 mb-8">
          <div class="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-400">
            <h3 class="text-lg font-semibold text-orange-800 mb-3">If You Don't Pass the Stress Test</h3>
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <h4 class="font-medium text-orange-700 mb-2">Traditional Options</h4>
                <ul class="space-y-1 text-orange-600 text-sm">
                  <li>• Increase down payment to 35%+</li>
                  <li>• Lower your purchase price</li>
                  <li>• Improve your credit score</li>
                  <li>• Wait and save more income</li>
                </ul>
              </div>
              <div>
                <h4 class="font-medium text-orange-700 mb-2">Alternative Lenders</h4>
                <ul class="space-y-1 text-orange-600 text-sm">
                  <li>• Credit unions (own stress test rules)</li>
                  <li>• Private lenders</li>
                  <li>• Alternative-A lenders</li>
                  <li>• Rent-to-own programs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 border-gray-200 pb-2">Stress Test Exemptions</h2>

        <div class="bg-blue-50 p-6 rounded-lg mb-8">
          <h3 class="text-xl font-semibold text-blue-800 mb-4">Who Doesn't Need to Pass the Stress Test</h3>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-semibold text-blue-700 mb-2">Mortgage Renewals</h4>
              <ul class="text-sm text-blue-600 space-y-1">
                <li>• Renewing with same lender</li>
                <li>• No increase in mortgage amount</li>
                <li>• No change in amortization</li>
              </ul>
            </div>
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-semibold text-blue-700 mb-2">Some Transfers</h4>
              <ul class="text-sm text-blue-600 space-y-1">
                <li>• Straight mortgage transfers</li>
                <li>• No additional borrowing</li>
                <li>• Same terms and conditions</li>
              </ul>
            </div>
          </div>
        </div>

        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 border-gray-200 pb-2">Preparing for Your Stress Test</h2>

        <div class="bg-slate-50 p-6 rounded-lg mb-8">
          <h3 class="text-xl font-semibold text-slate-800 mb-4">6-Month Preparation Timeline</h3>
          <div class="space-y-4">
            <div class="flex items-start">
              <div class="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">6</div>
              <div>
                <div class="font-medium text-slate-800">Months Before: Financial Assessment</div>
                <div class="text-sm text-slate-600">Calculate your maximum purchase price, review credit report, start debt reduction plan</div>
              </div>
            </div>
            <div class="flex items-start">
              <div class="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">4</div>
              <div>
                <div class="font-medium text-slate-800">Months Before: Debt Reduction</div>
                <div class="text-sm text-slate-600">Pay off credit cards, consolidate debts, avoid new credit applications</div>
              </div>
            </div>
            <div class="flex items-start">
              <div class="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">2</div>
              <div>
                <div class="font-medium text-slate-800">Months Before: Documentation</div>
                <div class="text-sm text-slate-600">Gather income documents, bank statements, prepare for pre-approval</div>
              </div>
            </div>
            <div class="flex items-start">
              <div class="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">0</div>
              <div>
                <div class="font-medium text-slate-800">Application Time: Final Review</div>
                <div class="text-sm text-slate-600">Confirm all debts are minimized, income is maximized, ready for stress test</div>
              </div>
            </div>
          </div>
        </div>

        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 border-gray-200 pb-2">Future of the Stress Test</h2>

        <div class="bg-yellow-50 p-6 rounded-lg mb-8 border-l-4 border-yellow-400">
          <h3 class="text-xl font-semibold text-yellow-800 mb-3">What to Expect in 2024</h3>
          <p class="text-yellow-700 mb-4">The federal government continues to review the stress test rules. While no major changes are expected in 2024, there's ongoing discussion about:</p>
          <ul class="space-y-2 text-yellow-700">
            <li>• Regional variations based on local market conditions</li>
            <li>• Adjustments to the qualifying rate calculation</li>
            <li>• Potential exemptions for certain buyer categories</li>
            <li>• Integration with other housing affordability measures</li>
          </ul>
        </div>

        <div class="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg mb-8">
          <div class="text-center">
            <h3 class="text-2xl font-bold mb-4">Need Help Passing the Stress Test?</h3>
            <p class="mb-6 text-blue-100">The stress test can be challenging, but with the right strategy and preparation, most buyers can qualify. Let's review your situation and create a plan to maximize your buying power.</p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/#contact" class="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors">
                Free Stress Test Analysis
              </a>
              <a href="https://r.mtg-app.com/robbhullar" target="_blank" rel="noopener noreferrer" class="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-lg font-semibold transition-colors">
                Get Pre-Approved
              </a>
            </div>
          </div>
        </div>

        <div class="border-t border-gray-200 pt-6 mt-8">
          <p class="text-sm text-gray-600 italic">
            <strong>Disclaimer:</strong> Stress test rules and rates are subject to change. This information is current as of 2024 and is for educational purposes only. Always consult with a qualified mortgage professional for the most current requirements and personalized advice.
          </p>
        </div>
      `,
      date: "April 22, 2024",
      author: "Rob Bhullar",
      category: "Regulations",
      image: "stress-test-calculator.png",
    },

    "fixed-vs-variable-which-is-right-for-you": {
      title: "Fixed vs. Variable: Which is Right for You?",
      excerpt:
        "With interest rates stabilizing, many homebuyers are wondering whether to choose a fixed or variable rate mortgage. Here's what you need to consider.",
      content: `
        <div class="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
          <div class="flex items-center mb-3">
            <svg class="w-6 h-6 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
            </svg>
            <h3 class="text-lg font-semibold text-blue-800">Rate Decision Guide</h3>
          </div>
          <p class="text-blue-700">The choice between fixed and variable rates depends on your risk tolerance, financial situation, and market outlook. Both options have advantages in different scenarios.</p>
        </div>

        <div class="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg mb-8">
          <div class="text-center">
            <h3 class="text-2xl font-bold mb-4">Ready to Choose the Right Rate?</h3>
            <p class="mb-6 text-blue-100">The fixed vs. variable decision is crucial for your financial future. Let's discuss your specific situation and help you choose the option that best fits your needs and goals.</p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/#contact" class="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors">
                Rate Strategy Consultation
              </a>
              <a href="https://r.mtg-app.com/robbhullar" target="_blank" rel="noopener noreferrer" class="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-lg font-semibold transition-colors">
                Compare Current Rates
              </a>
            </div>
          </div>
        </div>
      `,
      date: "May 8, 2024",
      author: "Rob Bhullar",
      category: "Mortgage Tips",
      image: "fixed-vs-variable-rates.png",
    },
  }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const posts = getPostData()
  const post = posts[params.slug] || posts["bank-of-canada-holds-key-interest-rate"]

  return (
    <div>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Link href="/blog" className="flex items-center text-blue-600 hover:text-blue-800 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>
        <article className="max-w-4xl mx-auto">
          {/* Featured Image */}
          <div className="mb-8">
            <img
              src={post.image || "/bank-of-canada-building.png"}
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center mb-6">
            <User className="w-5 h-5 text-gray-500 mr-2" />
            <span className="text-gray-600">{post.author}</span>
            <Calendar className="w-5 h-5 text-gray-500 mx-2" />
            <span className="text-gray-600">{post.date}</span>
            <Badge className="ml-2">{post.category}</Badge>
          </div>
          <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
      </main>
      <Footer />
    </div>
  )
}
