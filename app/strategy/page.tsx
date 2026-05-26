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
      <section className="py-20 bg-[#2A2A2A]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-6 bg-blue-600/30 text-blue-300 hover:bg-blue-600/40 border border-blue-500/50">
              Strategy-first mortgage advice · Surrey, BC
            </Badge>

            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight text-balance">
              Most people focus on rate.{" "}
              <span className="block">
                The real advantage is structure.
              </span>
            </h1>

            <p className="text-lg lg:text-xl text-gray-300 mb-10 leading-relaxed">
              A mortgage isn&apos;t just about today&apos;s rate — it&apos;s about flexibility, cost
              over time, and what happens when your situation changes.
            </p>

            <Button
              size="lg"
              className="bg-white hover:bg-gray-100 text-[#2A2A2A] font-bold h-14 px-10 text-base"
              asChild
            >
              <Link
                href="https://calendly.com/robsbhullar"
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

      {/* Reframe Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1D2D44] mb-8 text-balance">
              The way most mortgages are chosen is backwards.
            </h2>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Most borrowers are shown a rate and asked to choose. But the
              biggest mortgage decisions aren&apos;t about rate — they&apos;re
              about how the mortgage is structured:
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Term length",
                "Flexibility",
                "Prepayment options",
                "Exit strategy",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 bg-[#F4F6F8] rounded-lg px-5 py-4 border border-gray-200"
                >
                  <div className="w-2 h-2 bg-[#D4AF37] rounded-full flex-shrink-0" />
                  <span className="text-[#1D2D44] font-medium">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-lg text-gray-600 mt-8 leading-relaxed">
              These factors determine what your mortgage actually costs — and
              how it performs over time.
            </p>
          </div>
        </div>
      </section>

      {/* Risk Section */}
      <section className="py-20 bg-[#F4F6F8]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 bg-[#032133] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <Shield className="w-5 h-5 text-[#D4AF37]" />
              </div>

              <h2 className="text-3xl lg:text-4xl font-bold text-[#1D2D44] text-balance">
                A lower rate doesn&apos;t always mean a better mortgage.
              </h2>
            </div>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              A mortgage with a lower rate but poor structure can cost more over
              time. Especially if:
            </p>

            <div className="space-y-4">
              {[
                "You need to break the mortgage early",
                "Interest rates change",
                "Your financial situation evolves",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 bg-white rounded-lg px-6 py-4 border border-gray-200 shadow-sm"
                >
                  <div className="w-8 h-8 bg-[#032133]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <ArrowRight className="w-4 h-4 text-[#032133]" />
                  </div>

                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-lg text-gray-600 mt-8 font-medium">
              These scenarios are more common than most people expect.
            </p>
          </div>
        </div>
      </section>

      {/* Strategy Positioning Section */}
      <section className="py-20 bg-[#032133]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 text-balance">
              This is where strategy matters.
            </h2>

            <p className="text-xl text-gray-300 mb-4 leading-relaxed">
              Every mortgage should be structured based on your timeline, risk
              tolerance, and future plans — not just the lowest available rate.
            </p>

            <p className="text-xl text-[#D4AF37] font-semibold leading-relaxed">
              The goal isn&apos;t just to secure a mortgage. It&apos;s to
              structure it properly from the beginning.
            </p>
          </div>
        </div>
      </section>

      {/* What They Get Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1D2D44] mb-4 text-balance">
              What your mortgage strategy session includes
            </h2>

            <p className="text-gray-600 mb-10 text-lg">
              A focused, no-obligation conversation built around your specific
              situation.
            </p>

            <div className="grid sm:grid-cols-2 gap-5">
              {[
                {
                  icon: <FileText className="w-5 h-5" />,
                  text: "Review of your current or planned mortgage",
                },
                {
                  icon: <TrendingUp className="w-5 h-5" />,
                  text: "Structure options tailored to your situation",
                },
                {
                  icon: <Calculator className="w-5 h-5" />,
                  text: "Trade-offs between rate and flexibility",
                },
                {
                  icon: <CheckCircle className="w-5 h-5" />,
                  text: "Clear next steps before you commit",
                },
              ].map((item) => (
                <Card
                  key={item.text}
                  className="border border-gray-200 shadow-sm"
                >
                  <CardContent className="flex items-start gap-4 pt-6">
                    <div className="w-10 h-10 bg-[#F4F6F8] rounded-lg flex items-center justify-center flex-shrink-0 text-[#032133]">
                      {item.icon}
                    </div>

                    <span className="text-gray-700 leading-relaxed">
                      {item.text}
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For Section */}
      <section className="py-20 bg-[#F4F6F8]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1D2D44] mb-4 text-balance">
              Who this is for
            </h2>

            <p className="text-lg text-gray-600 mb-8">
              This is for you if:
            </p>

            <div className="space-y-4">
              {[
                "You're buying in the next 3–6 months",
                "You're renewing in the next 12–24 months",
                "You're considering refinancing",
                "You want to understand your options before committing",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 bg-white rounded-lg px-6 py-5 border border-gray-200 shadow-sm"
                >
                  <div className="w-6 h-6 bg-[#D4AF37] rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-white fill-white" />
                  </div>

                  <span className="text-gray-800 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#1D2D44] to-[#032133]">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 text-balance">
              Understand your options before you commit.
            </h2>

            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              A well-structured mortgage can save money, reduce risk, and give
              you flexibility when you need it most.
            </p>

            <Button
              size="lg"
              className="bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-[#032133] font-bold h-14 px-10 text-base"
              asChild
            >
              <Link
                href="https://calendly.com/robsbhullar"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Your Mortgage Strategy Call{" "}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>

            <p className="text-sm text-[#1D2D44] mt-4 font-medium">
              15-minute call • No obligation • Strategy-focused
            </p>

            <p className="text-gray-500 text-sm mt-4">
              No cost. No obligation. Just clarity on your best path forward.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
