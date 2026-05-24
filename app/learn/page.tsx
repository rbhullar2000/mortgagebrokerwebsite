import Link from "next/link"
import { learnPosts } from "@/lib/learnPosts"
import { BookOpen, ChevronRight, Home, Calculator, TrendingUp, RefreshCw, HelpCircle, ArrowRight } from "lucide-react"
import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Learn | BC Mortgage Team",
  description:
    "Answers to the most common mortgage questions in BC — down payments, stress tests, fixed vs variable rates, renewals, and more.",
  openGraph: {
    title: "Mortgage FAQs for BC Buyers | BC Mortgage Team",
    description:
      "Answers to the most common mortgage questions in BC — down payments, stress tests, fixed vs variable rates, renewals, and more.",
    type: "website",
    url: "https://www.bcmortgageteam.com/learn",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mortgage FAQs for BC Buyers | BC Mortgage Team",
    description:
      "Answers to the most common mortgage questions in BC — down payments, stress tests, fixed vs variable rates, renewals, and more.",
  },
}

const categoryConfig: Record<string, { icon: React.ElementType; color: string; bgColor: string }> = {
  "First-Time Buyers": { icon: Home, color: "text-emerald-600", bgColor: "bg-emerald-50" },
  "Qualifying": { icon: Calculator, color: "text-blue-600", bgColor: "bg-blue-50" },
  "Rate Strategy": { icon: TrendingUp, color: "text-amber-600", bgColor: "bg-amber-50" },
  "Renewals": { icon: RefreshCw, color: "text-purple-600", bgColor: "bg-purple-50" },
}

export default function LearnPage() {
  const categories = Array.from(new Set(learnPosts.map((p) => p.category)))

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#032133] via-[#043c5a] to-[#032133] text-white py-20 md:py-28 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-[#D4AF37] rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D4AF37] rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-[#D4AF37]/20 rounded-2xl mb-8 backdrop-blur-sm border border-[#D4AF37]/30">
                <BookOpen className="w-10 h-10 text-[#D4AF37]" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance leading-tight">
                Mortgage FAQs for <span className="text-[#D4AF37]">BC Buyers</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 text-pretty max-w-2xl mx-auto leading-relaxed">
                Clear answers to the questions that matter most when you&apos;re buying, renewing, or refinancing in British Columbia.
              </p>
              
              {/* Quick Stats */}
              <div className="flex flex-wrap justify-center gap-8 mt-10 pt-10 border-t border-white/10">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#D4AF37]">{learnPosts.length}</div>
                  <div className="text-sm text-gray-400 mt-1">Articles</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#D4AF37]">{categories.length}</div>
                  <div className="text-sm text-gray-400 mt-1">Topics</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#D4AF37]">2026</div>
                  <div className="text-sm text-gray-400 mt-1">Updated</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Category Navigation Pills */}
        <section className="sticky top-0 z-20 bg-white border-b border-gray-100 shadow-sm">
          <div className="container mx-auto px-4">
            <div className="flex gap-2 py-4 overflow-x-auto scrollbar-hide">
              {categories.map((category) => {
                const config = categoryConfig[category] || { icon: HelpCircle, color: "text-gray-600", bgColor: "bg-gray-50" }
                const IconComponent = config.icon
                return (
                  <a
                    key={category}
                    href={`#${category.toLowerCase().replace(/\s+/g, "-")}`}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all hover:shadow-md ${config.bgColor} ${config.color} hover:scale-105`}
                  >
                    <IconComponent className="w-4 h-4" />
                    {category}
                  </a>
                )
              })}
            </div>
          </div>
        </section>

        {/* Content Grid */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            {categories.map((category) => {
              const config = categoryConfig[category] || { icon: HelpCircle, color: "text-gray-600", bgColor: "bg-gray-50" }
              const IconComponent = config.icon
              const postsInCategory = learnPosts.filter((p) => p.category === category)
              
              return (
                <div 
                  key={category} 
                  id={category.toLowerCase().replace(/\s+/g, "-")}
                  className="mb-16 last:mb-0 scroll-mt-24"
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${config.bgColor}`}>
                      <IconComponent className={`w-6 h-6 ${config.color}`} />
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-[#032133]">
                        {category}
                      </h2>
                      <p className="text-gray-500 text-sm mt-1">
                        {postsInCategory.length} article{postsInCategory.length !== 1 ? "s" : ""}
                      </p>
                    </div>
                  </div>
                  
                  {/* Cards Grid */}
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {postsInCategory.map((post) => (
                      <Link
                        key={post.slug}
                        href={`/learn/${post.slug}`}
                        className="group relative bg-white rounded-2xl border border-gray-200 p-6 hover:border-[#D4AF37] hover:shadow-xl transition-all duration-300 flex flex-col"
                      >
                        {/* Card Top Accent */}
                        <div className={`absolute top-0 left-6 right-6 h-1 rounded-b-full ${config.bgColor} group-hover:bg-[#D4AF37] transition-colors`} />
                        
                        <div className="flex-1">
                          <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg ${config.bgColor} mb-4`}>
                            <IconComponent className={`w-5 h-5 ${config.color}`} />
                          </div>
                          
                          <h3 className="text-lg font-semibold text-[#032133] group-hover:text-[#D4AF37] transition-colors mb-3 text-balance leading-snug">
                            {post.question}
                          </h3>
                          
                          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                            {post.excerpt}
                          </p>
                        </div>
                        
                        <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
                          <span className="text-sm font-medium text-[#D4AF37] group-hover:text-[#032133] transition-colors">
                            Read article
                          </span>
                          <div className="w-8 h-8 rounded-full bg-gray-100 group-hover:bg-[#D4AF37] flex items-center justify-center transition-all">
                            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-[#032133] relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37] rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#D4AF37]/20 rounded-2xl mb-6">
                <HelpCircle className="w-8 h-8 text-[#D4AF37]" />
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Have a question not listed here?
              </h2>
              <p className="text-gray-300 mb-8 text-lg">
                Get personalized advice from a licensed mortgage broker who knows the BC market inside and out.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://calendly.com/robsbhullar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#D4AF37] text-[#032133] font-semibold rounded-xl hover:bg-[#D4AF37]/90 transition-all hover:scale-105 shadow-lg shadow-[#D4AF37]/20"
                >
                  Book a Free Strategy Call
                  <ArrowRight className="w-5 h-5" />
                </a>
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-medium rounded-xl hover:bg-white/20 transition-all border border-white/20"
                >
                  Send a Message
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
