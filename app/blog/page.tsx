import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { NewsCard } from "@/components/news-card"
import { NewsletterSubscription } from "@/components/newsletter-subscription"
import { ResourcesSection } from "@/components/resources-section"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import type { Metadata } from "next"
import { blogPosts } from "@/lib/blogPosts"

export const metadata: Metadata = {
  title: "Blog & Resources | BC Mortgage Team",
  description:
    "Expert mortgage advice, market updates, financial tips, and free mortgage tools from licensed mortgage professionals in BC.",
  keywords:
    "mortgage blog, mortgage tips, BC housing market, mortgage rates, first-time homebuyer tips, mortgage calculators, free tools",
}

export default function BlogPage() {
  // Get featured article
  const featuredPost = blogPosts.find((post) => post.featured)

  // Get all non-featured posts sorted by date
  const otherPosts = blogPosts
    .filter((post) => !post.featured)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  const categories = [
    "Interest Rates",
    "Market Updates",
    "Mortgage Tips",
    "Government Programs",
    "Credit Tips",
    "Regulations",
    "First-Time Buyers",
    "Retirement Planning",
    "Rate Analysis",
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#F4F6F8] to-[#F4F6F8]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-[#1D2D44] mb-6">Blog & Resources</h1>
            <p className="text-xl text-gray-600 mb-8">
              Expert mortgage advice, market updates, financial tips, and free tools to help you make informed
              decisions.
            </p>
          </div>
        </div>
      </section>
     
      {/* Resources Section */}
       <ResourcesSection /> 

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-[#1D2D44]">Featured Article</h2>
            </div>

            <div className="bg-[#F4F6F8] rounded-2xl p-8 border-2 border-[#D4AF37]">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <Badge className="mb-4 bg-[#1D2D44] text-white">{featuredPost.category}</Badge>
                  <h3 className="text-3xl font-bold text-[#1D2D44] mb-4">
                    <Link href={featuredPost.slug} className="hover:underline">
                      {featuredPost.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{featuredPost.date}</span>
                    <Button asChild className="bg-[#1D2D44] hover:bg-[#1D2D44]/90">
                      <Link href={featuredPost.slug}>Read Full Article</Link>
                    </Button>
                  </div>
                </div>
                <div>
                  <img
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    className="rounded-lg shadow-lg w-full"
                  />
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
                <h2 className="text-2xl font-bold text-[#1D2D44]">Latest Articles</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {otherPosts.map((post, index) => (
                  <NewsCard
                    key={index}
                    title={post.title}
                    excerpt={post.excerpt}
                    date={post.date}
                    category={post.category}
                    slug={post.slug}
                    image={post.image}
                  />
                ))}
              </div>

              <div className="mt-12 flex justify-center">
                <Button
                  variant="outline"
                  className="bg-white text-[#1D2D44] border-[#D4AF37] hover:bg-[#D4AF37] hover:text-white"
                  size="lg"
                >
                  Load More Articles
                </Button>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="mb-8">
                  <NewsletterSubscription />
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
