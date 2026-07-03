import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Shield, Clock, TrendingUp } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Mortgage Strategy | BC Mortgage Team",
  description:
    "Strategy-first mortgage advice for BC borrowers. Compare your mortgage, review your structure, and book a free 15-minute mortgage strategy consultation.",
  alternates: {
    canonical: "https://www.bcmortgageteam.com/strategy",
  },
}

export default function StrategyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="py-14 lg:py-20 bg-gradient-to-br from-[#F4F6F8] to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-5 bg-white text-[#032133] hover:bg-white inline-block shadow-sm">
              Strategy-First Mortgage Advice for BC Borrowers
            </Badge>

            <h1 className="text-4xl lg:text-6xl font-bold text-[#1D2D44] mb-6 leading-tight">
              Most people focus on rate.{" "}
              <span className="text-[#C79A2B]">
                The real advantage is structure.
              </span>
            </h1>

            <p className="text-base lg:text-lg text-gray-700 mb-4 leading-relaxed max-w-3xl mx-auto">
              A mortgage isn&apos;t just about today&apos;s rate — it&apos;s about flexibility,
              cost over time, and what happens when your situation changes.
            </p>

            <p className="text-base lg:text-lg text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">
              Helping BC homeowners lower payments, improve flexibility, and make smarter long-term mortgage decisions.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <Button
                size="lg"
                className="w-full sm:w-[340px] h-14 bg-[#C79A2B] hover:bg-[#D4AF37] text-white font-semibold shadow-xl"
                asChild
              >
                <Link href="/mortgage-checker">
                  Am I Overpaying? 2 minute checker →
                </Link>
              </Button>

              <Button
                size="lg"
                className="w-full sm:w-[340px] h-14 bg-[#1D2D44] hover:bg-[#243854] text-white font-semibold shadow-xl"
                asChild
              >
                <Link
                  href="https://calendly.com/bcmortgageteam/15min"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book A Strategy Call →
                </Link>
              </Button>
            </div>

            <div className="mx-auto max-w-3xl rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-xl shadow-lg p-5">
              <div className="grid gap-5 sm:grid-cols-3 text-sm font-semibold text-[#1D2D44]">
                <div className="flex items-center justify-center">
                  <Shield className="w-5 h-5 mr-2 text-[#C79A2B]" />
                  Access to 50+ lenders
                </div>

                <div className="flex items-center justify-center">
                  <Clock className="w-5 h-5 mr-2 text-[#C79A2B]" />
                  25+ yrs finance experience
                </div>

                <div className="flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-[#C79A2B]" />
                  Strategy before rate
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Your Strategy Call Includes */}
      <section className="py-10 bg-[#F4F6F8]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-[#1D2D44] mb-3">
              What your strategy call includes
            </h2>

            <p className="text-gray-600 mb-6 text-base">
              A focused, no-obligation 15-minute conversation built around your specific situation.
            </p>

            <div className="grid gap-3">
              {[
                "Review of your current or planned mortgage",
                "Structure options tailored to your situation",
                "Trade-offs between rate and flexibility",
                "Clear next steps before you commit",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 bg-white rounded-lg px-5 py-3 border border-gray-200 shadow-sm"
                >
                  <div className="w-6 h-6 bg-[#C79A2B] rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-white fill-white" />
                  </div>
                  <span className="text-gray-800 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                quote:
                  "BC Mortgage Team didn’t just help me secure a mortgage — they took the time to explain the strategy behind it and why the structure mattered long-term. I felt informed, confident, and supported throughout the process.",
                initials: "SK",
                name: "Sarah K.",
                detail: "First-time buyer · Vancouver",
              },
              {
                quote:
                  "I was ready to renew directly with my bank, but Rob took the time to review my options and structure everything properly. The result was over $4,000 in savings in the first year alone.",
                initials: "DM",
                name: "David M.",
                detail: "Renewal · Surrey",
              },
            ].map((testimonial) => (
              <Card key={testimonial.name} className="border border-gray-200 bg-white shadow-sm">
                <CardContent className="pt-5 pb-4">
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-[#D4AF37] text-base">
                        ★
                      </span>
                    ))}
                  </div>

                  <p className="text-sm sm:text-[15px] text-gray-700 leading-7 mb-4">
                    {testimonial.quote}
                  </p>

                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 bg-[#1D2D44] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">{testimonial.initials}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-[#1D2D44] text-sm">{testimonial.name}</p>
                      <p className="text-xs text-gray-500">{testimonial.detail}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-10 bg-[#F4F6F8]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-[#1D2D44] mb-5">
              Who this is for
            </h2>

            <div className="grid gap-3">
              {[
                "You're buying in the next 3–6 months",
                "You're renewing in the next 12–24 months",
                "You're considering refinancing",
                "You want to understand your options before committing",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 bg-white rounded-lg px-5 py-3 border border-gray-200 shadow-sm"
                >
                  <div className="w-6 h-6 bg-[#C79A2B] rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-white fill-white" />
                  </div>
                  <span className="text-gray-800 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reframe */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-[#1D2D44] mb-5">
              The way most mortgages are chosen is backwards.
            </h2>

            <p className="text-base text-gray-600 mb-6 leading-relaxed">
              Most borrowers are shown a rate and asked to choose. But the biggest mortgage decisions aren&apos;t
              about rate — they&apos;re about how the mortgage is structured.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mb-6">
              {["Term length", "Flexibility", "Prepayment options", "Exit strategy"].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 bg-[#F4F6F8] rounded-lg px-4 py-3 border border-gray-200"
                >
                  <div className="w-2 h-2 bg-[#C79A2B] rounded-full flex-shrink-0" />
                  <span className="text-[#1D2D44] font-medium text-sm">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-base text-gray-600 leading-relaxed">
              These factors determine what your mortgage actually costs — and how it performs over time.
            </p>
          </div>
        </div>
      </section>

      {/* Risk */}
      <section className="py-10 bg-[#F4F6F8]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-[#1D2D44] mb-5">
              A lower rate doesn&apos;t always mean a better mortgage.
            </h2>

            <p className="text-base text-gray-600 mb-6 leading-relaxed">
              A mortgage with a lower rate but poor structure can cost more over time, especially if:
            </p>

            <div className="grid gap-3 mb-6">
              {[
                "You need to break the mortgage early",
                "Interest rates change",
                "Your financial situation evolves",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 bg-white rounded-lg px-5 py-3 border border-gray-200 shadow-sm"
                >
                  <div className="w-8 h-8 bg-[#032133]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <ArrowRight className="w-4 h-4 text-[#032133]" />
                  </div>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-base text-gray-600 font-medium">
              These scenarios are more common than most people expect.
            </p>
          </div>
        </div>
      </section>

      {/* Strategy Positioning */}
      <section className="py-10 bg-[#032133]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              This is where strategy matters.
            </h2>

            <p className="text-sm text-gray-300 mb-3 leading-relaxed">
              Every mortgage should be structured based on your timeline, risk tolerance, and future plans — not just
              the lowest available rate.
            </p>

            <p className="text-sm text-[#D4AF37] font-semibold leading-relaxed">
              The goal isn&apos;t just to secure a mortgage. It&apos;s to structure it properly from the beginning.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-10 bg-gradient-to-br from-[#1D2D44] to-[#032133]">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Understand your options before you commit.
            </h2>

            <p className="text-sm text-gray-300 mb-8 leading-relaxed">
              A well-structured mortgage can save money, reduce risk, and give you flexibility when you need it most.
            </p>

            <Button
              size="lg"
              className="w-full sm:w-[340px] h-14 bg-[#C79A2B] hover:bg-[#D4AF37] text-white font-semibold shadow-xl"
              asChild
            >
              <Link href="/mortgage-checker">
                Start the 2-minute mortgage check →
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
