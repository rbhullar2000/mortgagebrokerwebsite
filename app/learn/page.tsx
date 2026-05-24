import Link from "next/link"
import { learnPosts } from "@/lib/learnPosts"
import { BookOpen, ChevronRight } from "lucide-react"
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

export default function LearnPage() {
  const categories = Array.from(new Set(learnPosts.map((p) => p.category)))

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#032133] text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#D4AF37]/20 rounded-full mb-6">
              <BookOpen className="w-8 h-8 text-[#D4AF37]" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
              Mortgage FAQs for BC Buyers
            </h1>
            <p className="text-lg md:text-xl text-gray-300 text-pretty">
              Clear answers to the questions that matter most when you&apos;re buying, renewing, or refinancing in British Columbia.
            </p>
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          {categories.map((category) => (
            <div key={category} className="mb-12 last:mb-0">
              <h2 className="text-xl font-semibold text-[#032133] mb-6 pb-2 border-b border-gray-200">
                {category}
              </h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {learnPosts
                  .filter((p) => p.category === category)
                  .map((post) => (
                    <Link
                      key={post.slug}
                      href={`/learn/${post.slug}`}
                      className="group bg-white rounded-lg border border-gray-200 p-5 hover:border-[#D4AF37] hover:shadow-md transition-all"
                    >
                      <h3 className="font-semibold text-[#032133] group-hover:text-[#D4AF37] transition-colors mb-2 text-balance">
                        {post.question}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <span className="inline-flex items-center text-sm font-medium text-[#D4AF37]">
                        Read more
                        <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Link>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-[#032133] mb-3">
            Have a question not listed here?
          </h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Get personalized advice from a licensed mortgage broker who knows the BC market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://calendly.com/robsbhullar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#D4AF37] text-[#032133] font-semibold rounded-lg hover:bg-[#D4AF37]/90 transition-colors"
            >
              Book a Free Strategy Call
            </a>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#032133] text-white font-medium rounded-lg hover:bg-[#032133]/90 transition-colors"
            >
              Send a Message
            </Link>
          </div>
        </div>
      </section>
    </main>
    <Footer />
    </>
  )
}
