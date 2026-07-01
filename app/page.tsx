import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { NewsletterSubscription } from "@/components/newsletter-subscription"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, MapPin, Calculator, FileText, Users, TrendingUp, Shield, Clock, ArrowRight, Twitter } from "lucide-react"
import Link from "next/link"
import { ContactForm } from "@/components/contact-form"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { blogPosts } from "@/lib/blogPosts"

export const metadata: Metadata = {
  title: "BC Mortgage Team | Mortgage Broker — Vancouver, Fraser Valley & the Okanagan",
  description:
    "Strategy-first mortgage advice for BC borrowers. Access 50+ lenders for home purchase, renewal, and refinance. Licensed mortgage broker serving Vancouver, Surrey, Burnaby, Richmond, and the Fraser Valley.",
  openGraph: {
    title: "BC Mortgage Team | Mortgage Broker — Serving BC — Vancouver, Fraser Valley & the Okanagan",
    description:
      "Strategy-first mortgage advice for BC borrowers. Access 50+ lenders for home purchase, renewal, and refinance.",
    url: "https://bcmortgageteam.com",
    siteName: "BC Mortgage Team",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BC Mortgage Team | Mortgage Broker — Serving BC — Vancouver, Fraser Valley & the Okanagan",
    description:
      "Strategy-first mortgage advice for BC borrowers. Access 50+ lenders for home purchase, renewal, and refinance.",
  },
  alternates: {
    canonical: "https://bcmortgageteam.com",
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* ── Hero ── */}
      <section className="py-12 lg:py-16 bg-gradient-to-br from-[#F4F6F8] to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">

            <Badge className="mb-4 bg-[#F4F6F8] text-[#032133] hover:bg-[#032133]/10 inline-block">
              Strategy-First Mortgage Advice for BC Borrowers
            </Badge>

            <h1 className="text-4xl lg:text-6xl font-bold text-[#1D2D44] mb-6 leading-tight">
              Smarter Mortgage <span className="text-[#D4AF37]">Decisions</span>
              <br />
              Start Here
            </h1>

            <p className="text-sm font-medium text-gray-500 mb-6 tracking-wide">
               Serving BC — Vancouver, Fraser Valley & the Okanagan
            </p>
            

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Access 50+ lenders. Get a better rate, and a strategy built around your situation.
            </p>

            {/* Primary CTA — dominant, alone */}
            <div className="flex justify-center mb-8">
              <Button
                size="lg"
                className="bg-[#C79A2B] hover:bg-[#D4AF37]/90 text-white h-12 px-8 font-semibold"
                asChild
              >
                <Link href="/mortgage-checker">Am I Overpaying? 2 minute checker →</Link>
              </Button>
            </div>

            <div className="mb-8 max-w-lg mx-auto bg-[#F4F6F8] rounded-lg p-4 border border-gray-200">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#1D2D44] mb-2">
                Expert insight
              </p>
              <p className="text-[#1D2D44] font-semibold mb-1">
                Most mortgage decisions are based on rate.
              </p>
              <p className="text-gray-600">
                The best ones are based on rate, structure, timing, and long-term strategy.
              </p>
            </div>

            <p className="text-base text-gray-600 mb-8 leading-relaxed">
              Purchase • Refinance • Renewal • Debt Consolidation • Investment Properties
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center">
                <Shield className="w-5 h-5 mr-2 text-[#032133]" />
                Access to 50+ lenders
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2 text-[#032133]" />
                Strategy-driven approach
              </div>
              <div className="flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-[#032133]" />
                Unbiased guidance
              </div>
            </div>

            {/* Secondary CTA — separated with breathing room */}
            <div className="flex justify-center mt-6">
              <Button
                size="lg"
                variant="outline"
                className="border-[#1D2D44] text-[#1D2D44] hover:bg-[#1D2D44] hover:text-white h-12 font-semibold bg-transparent"
                asChild
              >
                <Link href="https://calendly.com/bcmortgageteam/15min" target="_blank" rel="noopener noreferrer">
                  Book Your Free Mortgage Strategy Consultation →
                </Link>
              </Button>
            </div>

          </div>
        </div>
      </section>

      {/* ── Lenders ── */}
      <section id="lenders" className="py-12 lg:py-16 bg-[#F4F6F8]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-[#1D2D44] mb-4">Trusted Lending Partners</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We work with 50+ lenders including major banks, credit unions, and alternative lenders to find you the
              best rates and terms.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 items-center justify-items-center mb-10">
            <img src="scotiabank.png" alt="Scotiabank" className="h-20" />
            <img src="td.png" alt="TD Bank" className="h-20" />
            <img src="firstnational.png" alt="First National" className="h-20" />
            <img src="hometrust.png" alt="Home Trust" className="h-20" />
            <img src="rmg.png" alt="RMG Mortgages" className="h-20" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {[
              {
                icon: <Users className="w-8 h-8" />,
                title: "Big Banks",
                body: "Competitive mortgage options backed by established financial institutions. Ideal for borrowers seeking stability, reliability, and flexible term choices.",
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Credit Unions",
                body: "Local credit unions offering competitive rates and personalized service for BC residents.",
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Alternative Lenders",
                body: "Specialized lenders for unique situations, self-employed, and non-traditional income sources.",
              },
              {
                icon: <FileText className="w-8 h-8" />,
                title: "Private Lenders",
                body: "Fast approvals and flexible terms for time-sensitive deals and complex scenarios.",
              },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center text-[#032133] mb-4 mx-auto shadow-sm">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1D2D44] mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-2xl font-bold text-[#1D2D44] mb-6 text-center">Why Work With Multiple Lenders?</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-[#032133] mb-1">50+</div>
                <div className="text-sm text-gray-600 mb-1">Lending Partners</div>
                <p className="text-xs text-gray-500">More options mean better rates and terms for you</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#032133] mb-1">0.25–0.75%</div>
                <div className="text-sm text-gray-600 mb-1">Average Savings</div>
                <p className="text-xs text-gray-500">Typical rate improvement vs. going direct to a bank</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#032133] mb-1">24 hrs</div>
                <div className="text-sm text-gray-600 mb-1">Pre-Approval Time</div>
                <p className="text-xs text-gray-500">Fast approvals when you need them most</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-4">

            <Card className="border border-gray-200 bg-white shadow-sm">
              <CardContent className="pt-5 pb-4">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#D4AF37] text-lg">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  BC Mortgage Team didn&apos;t just help me secure a mortgage — they took the time to explain the
                  strategy behind it and why the structure mattered long-term. I felt informed, confident, and
                  supported throughout the process instead of simply choosing the lowest rate and hoping for the best.
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

            <Card className="border border-gray-200 bg-white shadow-sm">
              <CardContent className="pt-5 pb-4">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#D4AF37] text-lg">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  I was ready to renew directly with my bank, but Rob took the time to review my options and
                  structure everything properly. The result was over $4,000 in savings in the first year alone —
                  and a mortgage that fit my long-term goals much better.
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
      </section>

      {/* ── Services ── */}
      <section id="services" className="py-12 lg:py-14 bg-[#F4F6F8]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-[#1D2D44] mb-4">Comprehensive Mortgage Services</h2>
            <p className="text-xl text-[#2C2C2C] max-w-3xl mx-auto">
              From first-time homebuyers to seasoned investors, we provide tailored mortgage solutions for every
              situation.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Users className="w-8 h-8 text-[#1D2D44]" />,
                title: "First-Time Homebuyers",
                description: "Navigate your first home purchase with confidence. Special programs and rates available.",
                features: ["Down payment assistance", "First-time buyer programs", "Step-by-step guidance"],
                link: "/purchase",
              },
              {
                icon: <TrendingUp className="w-8 h-8 text-[#1D2D44]" />,
                title: "Renew Your Mortgage (Without Overpaying)",
                description: "Don't auto-renew. We'll find you better rates and terms when your mortgage comes due.",
                features: ["Rate comparison", "Term optimization", "No-cost renewals"],
                link: "/renewal",
              },
              {
                icon: <FileText className="w-8 h-8 text-[#1D2D44]" />,
                title: "Refinance & Use Your Equity Strategically",
                description: "Access your home's equity or consolidate debt with competitive refinancing options.",
                features: ["Debt consolidation", "Home improvements", "Investment opportunities"],
                link: "/refinance",
              },
              {
                icon: <Calculator className="w-8 h-8 text-[#1D2D44]" />,
                title: "Investment Properties",
                description: "Specialized financing for real estate investors and rental property purchases.",
                features: ["Investment strategies", "Portfolio lending", "Commercial options"],
                link: "/investment",
              },
              {
                icon: <Shield className="w-8 h-8 text-[#1D2D44]" />,
                title: "Self-Employed Solutions",
                description: "Alternative documentation programs for entrepreneurs and self-employed professionals.",
                features: ["Bank statement programs", "Asset-based lending", "Flexible verification"],
                link: "/self-employed",
              },
              {
                icon: <Clock className="w-8 h-8 text-[#1D2D44]" />,
                title: "Quick Closings",
                description: "Fast-track approvals for time-sensitive purchases and competitive offers.",
                features: ["24–48 hour approvals", "Same-day pre-approvals", "Priority processing"],
                link: "/quick-closings",
              },
            ].map((service, index) => (
              <Card key={index} className="bg-white shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-[#F4F6F8] rounded-lg flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl text-[#1D2D44]">{service.title}</CardTitle>
                  <CardDescription className="text-gray-700">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-[#D4AF37] rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="link" className="p-0 text-[#1D2D44] font-medium" asChild>
                    <Link href={service.link}>
                      Learn more <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section id="about" className="py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <img
                src="/headshot.png"
                alt="Rob Bhullar - Mortgage Broker"
                className="rounded-2xl shadow-2xl w-96 mx-auto"
              />
            </div>
            <div>
              <Badge className="mb-4 bg-[#F4F6F8] text-[#032133] hover:bg-[#032133]/10">
                About Rob S. Bhullar, BSc
              </Badge>
              <h2 className="text-2xl font-bold text-[#1D2D44] mb-6">
                Strategy-First Mortgage Advice
              </h2>
              <p className="text-base text-gray-600 mb-6 leading-relaxed">
                BC Mortgage Team brings over 25 years of finance experience together with real-world mortgage
                expertise to help homeowners, investors, and first-time buyers make smarter mortgage decisions.
                Our approach blends analytical thinking with practical lending expertise, focusing on how a
                mortgage is structured — not just the rate — to support long-term financial goals.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Licensed Mortgage Professional with BRX Mortgage",
                  "Former Equity Analyst with a focus on risk, valuation, and long-term outcomes",
                  "Experience with complex approvals, debt consolidation, and investor financing",
                  "Focused on aligning mortgage decisions with long-term financial strategy",
                  "Bachelor of Science in Mathematics, Minor in Business Administration — Simon Fraser University",
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-[#032133] rounded-full mr-4 mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-6 mb-8 items-center text-center">
                <div className="flex flex-col items-center justify-center">
                  <div className="text-3xl font-bold text-[#D4AF37]">25+ years</div>
                  <div className="text-sm text-gray-600">in Financial Industry</div>
                </div>
                <div className="flex items-center justify-center">
                  <Image
                    src="/BCmortgageteamlogo.jpeg"
                    alt="BC Mortgage Team"
                    width={96}
                    height={72}
                    className="object-contain"
                  />
                </div>
                <div className="flex items-center justify-center">
                  <Image
                    src="/BRX_brand_black.png"
                    alt="BRX Mortgage"
                    width={96}
                    height={72}
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center gap-3">
                <Button
                  size="lg"
                  className="bg-[#032133] hover:bg-[#032133]/90 text-white font-semibold w-full sm:w-auto"
                  asChild
                >
                  <Link href="https://calendly.com/bcmortgageteam/15min" target="_blank" rel="noopener noreferrer">
                    Book Your Mortgage Strategy Consultation →
                  </Link>
                </Button>
                <p className="text-sm text-gray-600 text-center">
                  Trusted strategy-focused mortgage guidance for BC borrowers
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Market Insights ── */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-[#1D2D44] mb-2">Market Insights</h2>
            <p className="text-gray-600">
              Real-world mortgage insights to help you navigate today&apos;s market with confidence
            </p>
          </div>
          <Card className="p-8 bg-gradient-to-br from-[#F4F6F8] to-white border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#032133] rounded-full flex items-center justify-center">
                <Twitter className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-900">Follow for Updates</h3>
            </div>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Stay informed with regular market commentary, mortgage rate updates, and real estate insights.
              Analysis on industry trends, rate movements, and strategy tips to help you make informed decisions.
            </p>
            <div className="space-y-4 mb-8">
              {[
                "Real-time mortgage rate updates",
                "Market analysis and economic commentary",
                "Tips for homebuyers and investors",
                "Industry news and lending updates",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-[#D4AF37] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
            <Link
              href="https://x.com/robbhullar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#032133] text-white px-6 py-3 rounded-lg hover:bg-[#032133]/90 transition-colors font-semibold"
            >
              <Twitter className="w-5 h-5" />
              Follow @robbhullar
            </Link>
          </Card>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="py-12 lg:py-14 bg-[#F4F6F8]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-[#1D2D44] mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Contact today for a free consultation, or start your secure online application right away.
            </p>
          </div>

          {/* Calendly embed — div, not a nested section */}
          <div className="max-w-6xl mx-auto mb-12">
            <h2 className="text-2xl font-bold text-[#1D2D44] mb-2">Book your free strategy call</h2>
            <p className="text-gray-600 mb-6">Select a time below — no redirect, books instantly.</p>
            <div className="w-full rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-white">
              <iframe
                src="https://calendly.com/bcmortgageteam/15min"
                width="100%"
                height="950"
                frameBorder="0"
                title="Book Mortgage Strategy Call"
                className="w-full"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Left: Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Right: Contact Info */}
            <div className="space-y-6">
               {/*
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-[#032133] shadow-sm flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
              </div>
*/}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-[#032133] shadow-sm flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#1D2D44]">Service Area</h4>
                  <p className="text-gray-600">British Columbia</p>
                  <p className="text-sm text-gray-500">Serving BC — Vancouver, Fraser Valley & the Okanagan</p>
                </div>
              </div>

              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h4 className="font-semibold text-[#1D2D44] mb-3">
                  Why Choose An Independent Mortgage Professional?
                </h4>
                <ul className="space-y-2 text-sm text-gray-600 list-disc pl-5">
                  <li>No cost for our specialized services</li>
                  <li>Access to rates banks don&apos;t advertise</li>
                  <li>Pre-approvals in 24–48 hours</li>
                  <li>Support throughout the entire process</li>
                </ul>
              </div>

              <div>
                <NewsletterSubscription />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
