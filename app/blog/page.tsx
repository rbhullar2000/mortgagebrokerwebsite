import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { NewsCard } from "@/components/news-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mortgage Blog | BC Mortgage Team",
  description:
    "Expert mortgage advice, market updates, and financial tips from licensed mortgage professionals in BC.",
  keywords: "mortgage blog, mortgage tips, BC housing market, mortgage rates, first-time homebuyer tips",
}

export default function BlogPage() {
  // Sample blog posts - in a real implementation, these would come from a CMS or database
  const blogPosts = [
   {
      title: "Bank of Canada Holds Key Interest Rate at 2.75%: What It Means for Your Mortgage",
      excerpt:
        "At its June 4 meeting the Bank of Canada opted to keep the overnight rate steady at 2.75 percent. Learn why the Bank paused and what it means for homeowners and buyers.",
      date: "June 4, 2025",
      category: "Interest Rates",
      slug: "/blog/bank-of-canada-holds-key-interest-rate-June-2025",
      featured: true,
      image: "/placeholder.svg?height=300&width=600",
    },
    {
  title: "Bank of Canada Cuts Key Interest Rate to 2.75%",
  excerpt: "On March 12, 2025, the Bank of Canada reduced its overnight rate target to 2.75%, marking a significant shift in monetary policy and offering much-needed relief to mortgage holders across the country.",
  date: "March 12, 2025",
  category: "Interest Rates",
  slug: "/blog/bank-of-canada-cuts-key-interest-rate-2025",
  featured: false,
  image: "bank-of-canada-building.png",
},
    {
      title: "First-Time Home Buyer Incentive Changes",
      excerpt:
        "The federal government announced changes to the First-Time Home Buyer Incentive program, increasing the eligible home price threshold in high-cost markets.",
      date: "May 22, 2025",
      category: "Government Programs",
      slug: "/blog/first-time-home-buyer-incentive-changes",
      featured: false,
      image: "first-time-homebuyer-family.png",
    },
    {
      title: "Vancouver Housing Market Update",
      excerpt:
        "Vancouver's housing market shows signs of stabilizing after months of price increases. Sales volume has decreased while inventory has slightly increased.",
      date: "May 15, 2025",
      category: "Market Updates",
      slug: "/blog/vancouver-housing-skyline-housing",
      featured: false,
      image: "vancouver-skyline-housing.png",
    },
    {
      title: "Fixed vs. Variable: Which is Right for You?",
      excerpt:
        "With interest rates stabilizing, many homebuyers are wondering whether to choose a fixed or variable rate mortgage. Here's what you need to consider.",
      date: "May 8, 2025",
      category: "Mortgage Tips",
      slug: "/blog/fixed-vs-variable-which-is-right-for-you",
      featured: false,
      image: "fixed-vs-variable-rates.png",
    },
    {
      title: "How to Improve Your Credit Score for Better Mortgage Rates",
      excerpt:
        "Your credit score has a significant impact on the mortgage rates you qualify for. Learn practical steps to improve your score before applying.",
      date: "April 30, 2025",
      category: "Credit Tips",
      slug: "/blog/improve-credit-score-for-better-mortgage-rates",
      featured: false,
      image: "credit-score-improvement.png",
    },
    {
      title: "Understanding Mortgage Stress Tests in 2024",
      excerpt:
        "Mortgage stress tests continue to impact homebuyers across Canada. Learn how the current rules work and how to prepare for them.",
      date: "April 22, 2025",
      category: "Regulations",
      slug: "/blog/understanding-mortgage-stress-tests-2024",
      featured: false,
      image: "stress-test-calculator.png",
    },
  ]

  const categories = [
    "Interest Rates",
    "Market Updates",
    "Mortgage Tips",
    "Government Programs",
    "Credit Tips",
    "Regulations",
    "First-Time Buyers",
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Mortgage Blog & Resources</h1>
            <p className="text-xl text-gray-600 mb-8">
              Expert mortgage advice, market updates, and financial tips to help you make informed decisions.
            </p>
            <div className="relative max-w-xl mx-auto">
              <Input type="search" placeholder="Search articles..." className="pl-10 py-6 text-lg" />
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Featured Article</h2>
          </div>
          <div className="bg-slate-50 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <Badge className="mb-4">Interest Rates</Badge>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  <Link href="/blog/bank-of-canada-holds-key-interest-rate" className="hover:underline">
                    Bank of Canada Holds Key Interest Rate
                  </Link>
                </h3>
               <p className="text-gray-600 mb-6">
  At its June 4 meeting the Bank of Canada opted to keep the overnight rate steady at 2.75 percent. Learn why the Bank paused and what it means for homeowners and buyers.
</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">June 18, 2025</span>
                  <Button asChild className="bg-[#032133] hover:bg-[#032133]/90">
                    <Link href="/blog/bank-of-canada-holds-key-interest-rate-June-2025">Read Full Article</Link>
                  </Button>
                </div>
              </div>
              <div>
                <img src="bank-of-canada-building.png" alt="Bank of Canada" className="rounded-lg shadow-lg w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      )}

      {/* All Posts */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900">Latest Articles</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {blogPosts
                  .filter((post) => !post.featured)
                  .map((post, index) => (
                    <NewsCard
                      key={index}
                      title={post.title}
                      excerpt={post.excerpt}
                      date={post.date}
                      category={post.category}
                      slug={post.slug}
                    />
                  ))}
              </div>
              <div className="mt-12 flex justify-center">
                <Button variant="outline" size="lg">
                  Load More Articles
                </Button>
              </div>
            </div>
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category, index) => (
                      <Link key={index} href={`/blog/category/${category.toLowerCase().replace(/\s+/g, "-")}`}>
                        <Badge variant="outline" className="mr-2 mb-2">
                          {category}
                        </Badge>
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Subscribe</h3>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-gray-600 mb-4">Get the latest mortgage news and tips delivered to your inbox.</p>
                    <form>
                      <div className="space-y-4">
                        <Input type="email" placeholder="Your email address" required />
                        <Button type="submit" className="w-full bg-[#032133] hover:bg-[#032133]/90">
                          Subscribe
                        </Button>
                      </div>
                    </form>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Free Resources</h3>
                  <div className="bg-slate-50 p-6 rounded-lg">
                    <h4 className="font-bold mb-2">First-Time Homebuyer's Guide</h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Everything you need to know about buying your first home in BC.
                    </p>
                    <Button asChild size="sm" className="w-full bg-[#032133] hover:bg-[#032133]/90">
                      <Link href="/#resources">Download Now</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
