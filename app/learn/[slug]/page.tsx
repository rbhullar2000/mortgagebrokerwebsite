import { notFound } from "next/navigation"
import Link from "next/link"
import { learnPosts, type ContentBlock } from "@/lib/learnPosts"
import { ArrowLeft, ChevronRight } from "lucide-react"
import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

type Params = Promise<{ slug: string }>

export async function generateStaticParams() {
  return learnPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params
  const post = learnPosts.find((p) => p.slug === slug)
  if (!post) return { title: "Not Found" }
  return {
    title: `${post.title} | BC Mortgage Team`,
    description: post.excerpt,
  }
}

function renderBlock(block: ContentBlock, idx: number) {
  switch (block.type) {
    case "h2":
      return (
        <h2 key={idx} className="text-2xl font-bold text-[#032133] mt-10 mb-4">
          {block.text}
        </h2>
      )
    case "h3":
      return (
        <h3 key={idx} className="text-lg font-semibold text-[#032133] mt-6 mb-2">
          {block.text}
        </h3>
      )
    case "p":
      return (
        <p key={idx} className="text-gray-700 leading-relaxed mb-4">
          {block.text}
        </p>
      )
    case "ul":
      return (
        <ul key={idx} className="space-y-2 mb-4 pl-1">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3 text-gray-700 leading-relaxed">
              <span className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )
    case "ol":
      return (
        <ol key={idx} className="space-y-2 mb-4 pl-1">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3 text-gray-700 leading-relaxed">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#032133] text-white text-xs font-bold flex items-center justify-center mt-0.5">
                {i + 1}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ol>
      )
    case "divider":
      return <hr key={idx} className="my-8 border-gray-200" />
    case "table":
      return (
        <div key={idx} className="overflow-x-auto my-6 rounded-lg border border-gray-200">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#032133] text-white">
                {block.headers.map((h, i) => (
                  <th key={i} className="px-4 py-3 text-left font-semibold">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  {row.map((cell, j) => (
                    <td key={j} className="px-4 py-3 text-gray-700 border-t border-gray-100">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    case "example":
      return (
        <div
          key={idx}
          className="flex gap-3 items-start bg-blue-50 border border-blue-100 rounded-lg px-4 py-3 my-4"
        >
          <span className="flex-shrink-0 text-xs font-bold uppercase tracking-wide text-blue-500 bg-blue-100 rounded px-2 py-0.5 mt-0.5">
            Example
          </span>
          <p className="text-blue-900 text-sm leading-relaxed">{block.text}</p>
        </div>
      )
    case "callout":
      return (
        <div
          key={idx}
          className="border-l-4 border-[#D4AF37] bg-amber-50 rounded-r-lg px-5 py-4 my-6"
        >
          <p className="text-gray-800 leading-relaxed">{block.text}</p>
        </div>
      )
    default:
      return null
  }
}

export default async function LearnPostPage({ params }: { params: Params }) {
  const { slug } = await params
  const post = learnPosts.find((p) => p.slug === slug)

  if (!post) notFound()

  const relatedPosts = learnPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3)

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-[#032133] text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/learn"
              className="inline-flex items-center text-gray-300 hover:text-white mb-6 transition-colors text-sm"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Learn
            </Link>
            <span className="inline-block px-3 py-1 bg-[#D4AF37]/20 text-[#D4AF37] text-sm font-medium rounded-full mb-4">
              {post.category}
            </span>
            <h1 className="text-2xl md:text-4xl font-bold text-balance leading-snug">
              {post.question}
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="py-10 md:py-14">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">

            {/* Quick Answer Box */}
            <div className="bg-gray-50 border-l-4 border-[#D4AF37] p-5 rounded-r-lg mb-8">
              <p className="text-xs font-bold uppercase tracking-wide text-[#D4AF37] mb-1">Quick Answer</p>
              <p className="text-gray-700 leading-relaxed">{post.excerpt}</p>
            </div>

            {/* Main Content Blocks */}
            <div>
              {post.blocks.map((block, idx) => renderBlock(block, idx))}
            </div>

            {/* FAQ Accordion */}
            {post.faqs.length > 0 && (
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h2 className="text-2xl font-bold text-[#032133] mb-6">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-3">
                  {post.faqs.map((faq, idx) => (
                    <details
                      key={idx}
                      className="group bg-gray-50 rounded-lg border border-gray-200 overflow-hidden"
                    >
                      <summary className="flex items-center justify-between p-4 cursor-pointer font-medium text-[#032133] hover:bg-gray-100 transition-colors list-none gap-3">
                        <span>{faq.q}</span>
                        <ChevronRight className="w-5 h-5 text-gray-400 group-open:rotate-90 transition-transform flex-shrink-0" />
                      </summary>
                      <div className="px-4 pb-4 text-gray-700 leading-relaxed border-t border-gray-200 pt-3">
                        {faq.a}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            )}

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h2 className="text-xl font-bold text-[#032133] mb-4">Related Questions</h2>
                <div className="grid gap-3">
                  {relatedPosts.map((related) => (
                    <Link
                      key={related.slug}
                      href={`/learn/${related.slug}`}
                      className="group flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-[#D4AF37] transition-colors"
                    >
                      <span className="font-medium text-[#032133] group-hover:text-[#D4AF37] transition-colors">
                        {related.question}
                      </span>
                      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#D4AF37] group-hover:translate-x-1 transition-all flex-shrink-0" />
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="mt-12 p-6 bg-[#032133] rounded-xl text-center">
              <h3 className="text-xl font-bold text-white mb-2">Need personalized advice?</h3>
              <p className="text-gray-300 mb-4">
                Get a free consultation with a licensed BC mortgage broker.
              </p>
              <a
                href="https://calendly.com/bcmortgageteam/15min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#D4AF37] text-[#032133] font-semibold rounded-lg hover:bg-[#D4AF37]/90 transition-colors"
              >
                Book a Free Strategy Call
              </a>
            </div>
          </div>
        </div>
      </article>
    </main>
    <Footer />
    </>
  )
}
