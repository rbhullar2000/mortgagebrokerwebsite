import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, TrendingUp, CheckCircle, ArrowRight, Users, FileText, Calculator } from "lucide-react"
import Link from "next/link"
import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mortgage Strategy | BC Mortgage Team",
  description:
    "Most people focus on rate. The real advantage is structure. Book a mortgage strategy session with Rob Bhullar — licensed broker with access to 50+ lenders.",
}

export default function StrategyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <Script id="calendly-tracking" strategy="afterInteractive">
        {`
          window.addEventListener("message", function(e) {
            if (e.data && e.data.event === "calendly.event_scheduled") {
              window.dataLayer = window.dataLayer || [];
              window.dataLayer.push({
                event: "calendly_booking"
              });
              console.log("Calendly booking tracked");
            }
          });
        `}
      </Script>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#032133] to-[#1D2D44]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-6 bg-[#D4AF37]/20 text-[#D4AF37] hover:bg-[#D4AF37]/30 border border-[#D4AF37]/30">
              Strategy-first mortgage advice · Surrey, BC
            </Badge>

            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight text-balance">
              Most people focus on rate.{" "}
              <span className="text-[#D4AF37]">
                The real advantage is structure.
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              A mortgage isn&apos;t just about today&apos;s rate — it&apos;s
              about flexibility, cost over time, and what happens when your
              situation changes.
            </p>

            <Button
              size="lg"
              className="bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-[#032133] font-bold h-14 px-10 text-base"
              asChild
            >
              <Link
                href="https://calendly.com/bcmortgageteam/15min"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book my free 15-minute strategy call{" "}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>

            {/* Support Text */}
            <p className="mt-6 text-gray-400 text-sm">
              No cost · No obligation · Instant confirmation
            </p>

            {/* Stats Section */}
            <div className="mt-16 grid grid-cols-3 gap-6 lg:gap-8">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                  50+
                </div>
                <p className="text-gray-400 text-sm lg:text-base">Lending partners</p>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                  25 yrs
                </div>
                <p className="text-gray-400 text-sm lg:text-base">Finance experience</p>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                  24 hrs
                </div>
                <p className="text-gray-400 text-sm lg:text-base">Pre-approval time</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1D2D44] mb-8 text-balance">
              What clients say
            </h2>

            <div className="space-y-4">
              {/* Testimonial 1 */}
              <Card className="border border-gray-200 bg-white shadow-sm">
                <CardContent className="pt-5 pb-4">
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-[#D4AF37] text-lg">
                        ★
                      </span>
                    ))}
                  </div>

                  <p className="text-gray-700 mb-4 leading-relaxed text-base">
                    Rob didn&apos;t just find me a rate — he explained exactly how the mortgage was structured and why. I felt confident signing instead of just hoping for the best.
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">SK</span>
                    </div>
                    <div>
                      <p className="font-semibold text-[#1D2D44] text-sm">Sarah K.</p>
                      <p className="text-xs text-gray-600">First-time buyer · Vancouver</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Testimonial 2 */}
              <Card className="border border-gray-200 bg-white shadow-sm">
                <CardContent className="pt-5 pb-4">
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-[#D4AF37] text-lg">
                        ★
                      </span>
                    ))}
                  </div>

                  <p className="text-gray-700 mb-4 leading-relaxed text-base">
                    I was about to auto-renew with my bank. Rob saved me over $4,000 in the first year just by shopping around. Should have called sooner.
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">DM</span>
                    </div>
                    <div>
                      <p className="font-semibold text-[#1D2D44] text-sm">David M.</p>
                      <p className="text-xs text-gray-600">Renewal · Surrey</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What Your Strategy Call Includes Section */}
      <section className="py-12 bg-[#F4F6F8]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1D2D44] mb-3 text-balance">
              What your strategy call includes
            </h2>

            <p className="text-gray-600 mb-8 text-base">
              A focused, no-obligation 15-minute conversation built around your specific situation.
            </p>

            <div className="space-y-3">
              {[
                "Review of your current or planned mortgage",
                "Structure options tailored to your situation",
                "Trade-offs between rate and flexibility",
                "Clear next steps before you commit",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 text-gray-700"
                >
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-white fill-white" />
                  </div>
                  <span className="text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Calendly Booking Section */}
     <section className="py-12 bg-white" id="book">
  <div className="container mx-auto px-4">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl lg:text-4xl font-bold text-[#1D2D44] mb-2 text-balance">
        Book your free strategy call
      </h2>

      <p className="text-gray-600 mb-6 text-base">
        Select a time below — no redirect, books instantly.
      </p>

      <div className="w-full rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-white">
        <iframe
          src="https://calendly.com/bcmortgageteam/15min"
          width="100%"
          height="950"
          frameBorder="0"
          title="Book Mortgage Strategy Call"
          className="w-full"
        ></iframe>
      </div>
    </div>
  </div>
</section>

      {/* Reframe Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1D2D44] mb-6 text-balance">
              The way most mortgages are chosen is backwards.
            </h2>

            <p className="text-base text-gray-600 mb-6 leading-relaxed">
              Most borrowers are shown a rate and asked to choose. But the
              biggest mortgage decisions aren&apos;t about rate — they&apos;re
              about how the mortgage is structured:
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mb-6">
              {[
                "Term length",
                "Flexibility",
                "Prepayment options",
                "Exit strategy",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 bg-[#F4F6F8] rounded-lg px-4 py-3 border border-gray-200"
                >
                  <div className="w-2 h-2 bg-[#D4AF37] rounded-full flex-shrink-0" />
                  <span className="text-[#1D2D44] font-medium text-sm">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-base text-gray-600 leading-relaxed">
              These factors determine what your mortgage actually costs — and
              how it performs over time.
            </p>
          </div>
        </div>
      </section>

      {/* Risk Section */}
      <section className="py-12 bg-[#F4F6F8]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-start gap-4 mb-5">
              <div className="w-10 h-10 bg-[#032133] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <Shield className="w-5 h-5 text-[#D4AF37]" />
              </div>

              <h2 className="text-3xl lg:text-4xl font-bold text-[#1D2D44] text-balance">
                A lower rate doesn&apos;t always mean a better mortgage.
              </h2>
            </div>

            <p className="text-base text-gray-600 mb-6 leading-relaxed">
              A mortgage with a lower rate but poor structure can cost more over
              time. Especially if:
            </p>

            <div className="space-y-3 mb-6">
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

      {/* Strategy Positioning Section */}
      <section className="py-12 bg-[#032133]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 text-balance">
              This is where strategy matters.
            </h2>

            <p className="text-base text-gray-300 mb-3 leading-relaxed">
              Every mortgage should be structured based on your timeline, risk
              tolerance, and future plans — not just the lowest available rate.
            </p>

            <p className="text-base text-[#D4AF37] font-semibold leading-relaxed">
              The goal isn&apos;t just to secure a mortgage. It&apos;s to
              structure it properly from the beginning.
            </p>
          </div>
        </div>
      </section>

{/* Who This Is For Section */}
      <section className="py-12 bg-[#F4F6F8]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1D2D44] mb-3 text-balance">
              Who this is for
            </h2>

            <p className="text-base text-gray-600 mb-6">
              This is for you if:
            </p>

            <div className="space-y-3">
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
                  <div className="w-6 h-6 bg-[#D4AF37] rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-white fill-white" />
                  </div>

                  <span className="text-gray-800 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#1D2D44] to-[#032133]">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-5 text-balance">
              Understand your options before you commit.
            </h2>

            <p className="text-base text-gray-300 mb-8 leading-relaxed">
              A well-structured mortgage can save money, reduce risk, and give
              you flexibility when you need it most.
            </p>

            <Button
              size="lg"
              className="bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-[#032133] font-bold h-14 px-10 text-base"
              asChild
            >
              <Link
                href="https://calendly.com/bcmortgageteam"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Your Mortgage Strategy Call{" "}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>

            <p className="text-xs text-[#1D2D44] mt-3 font-medium">
              15-minute call • No obligation • Strategy-focused
            </p>

            <p className="text-gray-500 text-xs mt-2">
              No cost. No obligation. Just clarity on your best path forward.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
