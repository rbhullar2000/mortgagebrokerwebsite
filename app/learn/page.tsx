import Link from "next/link"
import { learnPosts } from "@/lib/learnPosts"
import { BookOpen, ChevronRight, Home, Calculator, TrendingUp, RefreshCw } from "lucide-react"
import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

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

const categoryIcons: Record<string, React.ReactNode> = {
  "First-Time Buyers": <Home className="w-5 h-5" />,
  "Qualifying": <Calculator className="w-5 h-5" />,
  "Rate Strategy": <TrendingUp className="w-5 h-5" />,
  "Renewals": <RefreshCw className="w-5 h-5" />,
}

const categories = Array.from(new Set(learnPosts.map((p) => p.category)))

export default function LearnPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-[#032133] to-[#1D2D44]">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Badge className="mb-6 bg-[#D4AF37]/20 text-[#D4AF37] hover:bg-[#D4AF37]/30 border border-[#D4AF37]/30">
                Mortgage Education
              </Badge>

              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight text-balance">
                Mortgage FAQs for{" "}
                <span className="text-[#D4AF37]">BC Buyers</span>
              </h1>

              <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                Clear answers to the questions that matter most when you&apos;re buying,
                renewing, or refinancing in British Columbia.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#D4AF37]" />
                  <span>{learnPosts.length} articles</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-[#D4AF37]" />
                  <span>{categories.length} topics covered</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Articles by Category */}
        {categories.map((category, index) => {
          const categoryPosts = learnPosts.filter((post) => post.category === category)
          const isEven = index % 2 === 0

          return (
            <section
              key={category}
              className={`py-20 ${isEven ? "bg-white" : "bg-[#F4F6F8]"}`}
            >
              <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto">
                  <div className="flex items-start gap-4 mb-8">
                    <div className="w-10 h-10 bg-[#032133] rounded-lg flex items-center justify-center flex-shrink-0 text-[#D4AF37]">
                      {categoryIcons[category] || <BookOpen className="w-5 h-5" />}
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-[#1D2D44]">
                      {category}
                    </h2>
                  </div>

                  <div className="space-y-4">
                    {categoryPosts.map((post) => (
                      <Link key={post.slug} href={`/learn/${post.slug}`} className="block">
                        <Card className="border border-gray-200 shadow-sm hover:shadow-md hover:border-[#D4AF37]/50 transition-all duration-200">
                          <CardContent className="flex items-center justify-between gap-4 py-5 px-6">
                            <div className="flex-1">
                              <h3 className="text-lg font-semibold text-[#1D2D44] mb-2 text-balance">
                                {post.question}
                              </h3>
                              <p className="text-gray-600 text-sm leading-relaxed">
                                {post.excerpt}
                              </p>
                            </div>
                            <div className="w-8 h-8 bg-[#F4F6F8] rounded-full flex items-center justify-center flex-shrink-0 text-[#032133]">
                              <ChevronRight className="w-4 h-4" />
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          )
        })}

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-[#1D2D44] to-[#032133]">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 text-balance">
                Have a question not listed here?
              </h2>

              <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                Get personalized advice from a licensed mortgage broker who knows the BC market.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-[#032133] font-bold h-14 px-8 text-base"
                  asChild
                >
                  <Link
                    href="https://calendly.com/robsbhullar"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book a Free Strategy Call
                    <ChevronRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-500 text-white hover:bg-white/10 h-14 px-8 text-base"
                  asChild
                >
                  <Link href="/#contact">
                    Send a Message
                  </Link>
                </Button>
              </div>

              <p className="text-gray-500 text-sm mt-6">
                No cost. No obligation. Just clarity on your mortgage questions.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
