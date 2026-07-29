import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { NewsletterSubscription } from "@/components/newsletter-subscription"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Calculator,
  FileText,
  Users,
  TrendingUp,
  Shield,
  Clock,
  ArrowRight,
  SearchCheck,
  Building2,
  RefreshCw,
} from "lucide-react"
import Link from "next/link"
import { ContactForm } from "@/components/contact-form"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"

export const metadata: Metadata = {
  title:
    "BC Mortgage Team | Strategy-First Mortgage Advice for British Columbia Borrowers",
  description:
    "Strategy-first mortgage advice for BC borrowers. Access 50+ lenders for home purchase, renewal, and refinance. Licensed mortgage advisor serving British Columbia, Canada.",
  openGraph: {
    title:
      "BC Mortgage Team | Strategy-First Mortgage Advice for British Columbia Borrowers",
    description:
      "Strategy-first mortgage advice for BC borrowers. Access 50+ lenders for home purchase, renewal, and refinance.",
    url: "https://bcmortgageteam.com",
    siteName: "BC Mortgage Team",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BC Mortgage Team — Independent Mortgage Advisor serving British Columbia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "BC Mortgage Team | Strategy-First Mortgage Advice for British Columbia Borrowers",
    description:
      "Strategy-first mortgage advice for BC borrowers. Access 50+ lenders for home purchase, renewal, and refinance.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://bcmortgageteam.com",
  },
}

export default function HomePage() {
  const lenders = [
    {
      src: "/td.png",
      alt: "TD Bank",
      className:
        "w-[118px] h-[48px] scale-[1.45] lg:w-[170px] lg:h-[70px] lg:scale-[1.75]",
    },
    {
      src: "/scotiabank.png",
      alt: "Scotiabank",
      className:
        "w-[118px] h-[48px] scale-[1.38] lg:w-[170px] lg:h-[70px] lg:scale-[1.65]",
    },
    {
      src: "/Coast_Capital_Savings.png",
      alt: "Coast Capital Savings",
      className:
        "w-[145px] h-[48px] scale-[0.95] lg:w-[190px] lg:h-[70px] lg:scale-[0.95]",
    },
    {
      src: "/National_Bank.png",
      alt: "National Bank",
      className:
        "w-[145px] h-[48px] scale-[0.95] lg:w-[190px] lg:h-[70px] lg:scale-[0.95]",
    },
    {
      src: "/firstnational.png",
      alt: "First National",
      className:
        "w-[118px] h-[48px] scale-[1.45] lg:w-[170px] lg:h-[70px] lg:scale-[1.8]",
    },
    {
      src: "/MCAP.png",
      alt: "MCAP",
      className:
        "w-[145px] h-[48px] scale-[0.88] lg:w-[190px] lg:h-[70px] lg:scale-[0.9]",
    },
    {
      src: "/rmg.png",
      alt: "RMG Mortgages",
      className:
        "w-[118px] h-[48px] scale-[1.5] lg:w-[170px] lg:h-[70px] lg:scale-[1.9]",
    },
    {
      src: "/hometrust.png",
      alt: "Home Trust",
      className:
        "w-[118px] h-[48px] scale-[1.5] lg:w-[170px] lg:h-[70px] lg:scale-[1.9]",
    },
    {
      src: "/equitable-bank.png",
      alt: "Equitable Bank",
      className:
        "w-[145px] h-[48px] scale-[0.9] lg:w-[190px] lg:h-[70px] lg:scale-[0.9]",
    },
    {
      src: "/Manulife_Canada.png?v=2",
      alt: "Manulife Canada",
      className:
        "w-[118px] h-[48px] scale-[1.4] lg:w-[170px] lg:h-[70px] lg:scale-[1.7]",
    },
    {
      src: "/meridian-credit-union.png",
      alt: "Meridian Credit Union",
      className:
        "w-[145px] h-[48px] scale-[0.9] lg:w-[190px] lg:h-[70px] lg:scale-[0.9]",
    },
    {
      src: "/Logo_Prospera_Credit_Union.svg",
      alt: "Prospera Credit Union",
      className:
        "w-[118px] h-[48px] scale-[1.05] lg:w-[170px] lg:h-[70px] lg:scale-[1.2]",
    },
  ]

  const analysisTools = [
    {
      icon: SearchCheck,
      label: "Mortgage Review",
      title: "Mortgage Checker",
      description:
        "See whether your current mortgage rate or renewal offer may be costing you more than necessary.",
      features: [
        "Potential savings",
        "Mortgage score",
        "Personalized results",
      ],
      link: "/mortgage-checker",
      buttonText: "Check My Mortgage",
      featured: true,
    },
    {
      icon: Building2,
      label: "Investor Analysis",
      title: "Investment Property Analyzer",
      description:
        "Evaluate rental income, monthly cash flow, cap rate, debt-service coverage, and projected returns.",
      features: [
        "Monthly cash flow",
        "Cap rate and DSCR",
        "Projected 5-year return",
      ],
      link: "/investment",
      buttonText: "Analyze a Property",
      featured: false,
    },
    {
      icon: RefreshCw,
      label: "Refinance Analysis",
      title: "Refinance Break-Even Calculator",
      description:
        "Compare your current mortgage with a proposed refinance and estimate how long it may take to recover the costs.",
      features: [
        "Break-even period",
        "Payment comparison",
        "Net-worth analysis",
      ],
      link: "/break-even-calculator",
      buttonText: "Analyze a Refinance",
      featured: false,
    },
    {
      icon: Calculator,
      label: "Purchase Planning",
      title: "Mortgage Payment Calculator",
      description:
        "Estimate your mortgage payment and see how your down payment, rate, and amortization affect the result.",
      features: [
        "Monthly payment",
        "Interest cost",
        "Payment breakdown",
      ],
      link: "/purchase",
      buttonText: "Calculate My Payment",
      featured: false,
    },
  ]

  const services = [
    {
      icon: <Users className="h-6 w-6 text-[#1D2D44]" />,
      title: "Purchase",
      description: "Buying a home or investment property.",
      link: "/purchase",
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-[#1D2D44]" />,
      title: "Renewal",
      description: "Compare before you auto-renew.",
      link: "/renewal",
    },
    {
      icon: <FileText className="h-6 w-6 text-[#1D2D44]" />,
      title: "Refinance",
      description: "Use equity or consolidate debt.",
      link: "/refinance",
    },
    {
      icon: <Shield className="h-6 w-6 text-[#1D2D44]" />,
      title: "Self-Employed",
      description: "Flexible income solutions.",
      link: "/self-employed",
    },
    {
      icon: <Calculator className="h-6 w-6 text-[#1D2D44]" />,
      title: "Investment",
      description: "Rental and portfolio financing.",
      link: "/investment",
    },
  ]

  const credentials = [
    "Licensed Mortgage Advisor with BRX Mortgage Inc.",
    "Former Equity Analyst with a focus on risk, valuation, and long-term outcomes",
    "Focused on aligning mortgage decisions with long-term financial strategy",
    "Bachelor of Science in Pure Mathematics, Minor in Business Administration — Simon Fraser University",
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-white">
        <div
          className="absolute inset-0 bg-cover bg-[92%_22%] md:bg-[75%_center]"
          style={{ backgroundImage: "url('/city.png')" }}
        />

        {/* Mobile Hero */}
        <div className="relative flex min-h-[92svh] flex-col px-4 pb-8 pt-20 md:hidden">
          <div className="max-w-md text-left">
            <Badge className="mb-5 inline-block bg-white/80 text-[11px] text-[#032133] backdrop-blur-sm hover:bg-white/85">
              Strategy-First Mortgage Advice for BC Borrowers
            </Badge>

            <h1
              className="text-[2.25rem] font-bold leading-[1.08] text-[#1D2D44]"
              style={{
                textShadow:
                  "0 1px 10px rgba(255,255,255,0.65), 0 0 30px rgba(255,255,255,0.4)",
              }}
            >
              Your Bank Has a{" "}
              <span className="text-[#C79A2B]">Mortgage Advisor.</span>
              <br />
              You Should Have
              <br />
              One Too.
            </h1>
          </div>

          <div className="mt-auto">
            <div className="mb-4 flex justify-center">
              <Button
                size="lg"
                className="h-12 w-[330px] max-w-[90%] rounded-xl bg-[#C79A2B] text-[16px] font-semibold text-white shadow-xl ring-1 ring-white/40 hover:bg-[#D4AF37]"
                asChild
              >
                <Link href="/mortgage-checker">
                  Am I Overpaying? 2 min checker →
                </Link>
              </Button>
            </div>

            <div className="flex flex-col items-center gap-3">
              <p className="inline-block rounded-full border border-white/40 bg-white/70 px-4 py-1.5 text-center text-[11px] font-semibold text-[#1D2D44] backdrop-blur-md">
                Serving BC • Greater Vancouver • Fraser Valley • Okanagan
              </p>

              <p className="inline-block rounded-xl border border-white/50 bg-white/65 px-3 py-1.5 text-center text-[12px] font-bold leading-snug text-[#1D2D44] backdrop-blur-md">
                Access to 50+ lenders — not just one bank.
              </p>
            </div>
          </div>
        </div>

        {/* Desktop Hero */}
        <div className="container relative mx-auto hidden px-4 py-20 md:block lg:py-32">
          <div className="max-w-xl text-left lg:max-w-3xl">
            <Badge className="mb-5 inline-block bg-white/75 text-[#032133] backdrop-blur-sm hover:bg-white/80">
              Strategy-First Mortgage Advice for BC Borrowers
            </Badge>

            <h1
              className="mb-6 text-5xl font-bold leading-tight text-[#1D2D44] lg:text-7xl"
              style={{
                textShadow: "0 1px 12px rgba(255,255,255,0.45)",
              }}
            >
              Your Bank Has a{" "}
              <span className="text-[#D4AF37]">Mortgage Advisor.</span>
              <br />
              You Should Have One Too.
            </h1>

            <div className="mb-8">
              <p className="inline-block rounded-full bg-white/80 px-4 py-1.5 text-sm font-semibold text-[#1D2D44] backdrop-blur-sm">
                Serving BC — Greater Vancouver, Fraser Valley &amp; the Okanagan
              </p>
            </div>

            <div className="mb-7 flex w-full max-w-2xl flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                className="h-14 flex-[1.3] bg-[#C79A2B] text-base font-bold text-white shadow-xl hover:bg-[#D4AF37]"
                asChild
              >
                <Link href="/mortgage-checker">
                  Am I Overpaying? 2 min checker →
                </Link>
              </Button>

              <Button
                size="lg"
                className="h-14 flex-1 border-2 border-white/80 bg-white/10 font-semibold text-white shadow-xl backdrop-blur-sm hover:bg-white hover:text-[#1D2D44]"
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

            <div className="w-full max-w-2xl rounded-2xl border border-white/60 bg-white/90 px-7 py-4 shadow-xl backdrop-blur-xl">
              <div className="grid grid-cols-3 gap-4 text-sm font-semibold text-[#1D2D44]">
                <div className="flex flex-col items-center text-center">
                  <Shield className="mb-1 h-5 w-5 text-[#C79A2B]" />
                  <span>50+ Lenders</span>
                </div>

                <div className="flex flex-col items-center text-center">
                  <Clock className="mb-1 h-5 w-5 text-[#C79A2B]" />
                  <span>Competitive Rates</span>
                </div>

                <div className="flex flex-col items-center text-center">
                  <TrendingUp className="mb-1 h-5 w-5 text-[#C79A2B]" />
                  <span>Independent Advice</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Lenders ── */}
      <section
        id="lenders"
        className="bg-[#F4F6F8] py-9 sm:py-12 lg:py-16"
      >
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center lg:mb-10">
            <h2 className="mb-3 text-2xl font-bold text-[#1D2D44] lg:text-3xl">
              One application. 50+ lenders. The right mortgage strategy.
            </h2>

            <p className="mx-auto max-w-3xl text-base leading-relaxed text-gray-600 lg:text-lg">
              Compare rates and mortgage options from Canada&apos;s leading
              banks, credit unions, and private lenders.
            </p>
          </div>

          <div className="grid grid-cols-2 items-center justify-items-center gap-x-6 gap-y-7 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-8">
            {lenders.map((lender) => (
              <div
                key={lender.alt}
                className="flex h-14 w-full max-w-[155px] items-center justify-center overflow-visible lg:h-20 lg:w-56 lg:max-w-none"
              >
                <img
                  src={lender.src}
                  alt={lender.alt}
                  className={`${lender.className} object-contain`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mortgage Analysis Centre ── */}
      <section
        id="mortgage-analysis-centre"
        className="bg-white py-10 sm:py-12 lg:py-16"
      >
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center lg:mb-10">
            <Badge className="mb-3 bg-[#F4F6F8] text-[11px] uppercase tracking-[0.16em] text-[#1D2D44] hover:bg-[#F4F6F8] sm:text-xs">
              Analyze Before You Borrow
            </Badge>

            <h2 className="mb-3 text-2xl font-bold text-[#1D2D44] lg:text-3xl">
              Mortgage Analysis Centre
            </h2>

            <p className="mx-auto max-w-3xl text-sm leading-relaxed text-gray-600 sm:text-base lg:text-lg">
              Use these interactive tools to understand the numbers, compare
              your options, and make a more informed mortgage decision.
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
            {analysisTools.map((tool) => {
              const Icon = tool.icon

              return (
                <Card
                  key={tool.title}
                  className={`group relative overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                    tool.featured
                      ? "border-[#C79A2B] bg-[#1D2D44] shadow-lg"
                      : "border-gray-200 bg-white shadow-sm"
                  }`}
                >
                  {tool.featured && (
                    <div className="absolute right-0 top-0 h-36 w-36 -translate-y-14 translate-x-14 rounded-full bg-[#D4AF37]/10" />
                  )}

                  <CardContent className="relative flex min-h-[330px] h-full flex-col p-6 lg:p-7">
                    <div className="mb-6 flex items-start justify-between gap-4">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                          tool.featured
                            ? "bg-[#C79A2B] text-white"
                            : "bg-[#F4F6F8] text-[#1D2D44]"
                        }`}
                      >
                        <Icon className="h-6 w-6" />
                      </div>

                      <span
                        className={`rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] sm:text-xs ${
                          tool.featured
                            ? "bg-white/10 text-[#E6C86A]"
                            : "bg-[#F4F6F8] text-gray-600"
                        }`}
                      >
                        {tool.label}
                      </span>
                    </div>

                    <h3
                      className={`mb-3 text-xl font-bold lg:text-2xl ${
                        tool.featured ? "text-white" : "text-[#1D2D44]"
                      }`}
                    >
                      {tool.title}
                    </h3>

                    <p
                      className={`mb-5 text-sm leading-6 ${
                        tool.featured ? "text-gray-200" : "text-gray-600"
                      }`}
                    >
                      {tool.description}
                    </p>

                    <div className="mb-7 space-y-2">
                      {tool.features.map((feature) => (
                        <div
                          key={feature}
                          className={`flex items-center gap-2 text-sm ${
                            tool.featured ? "text-gray-200" : "text-gray-700"
                          }`}
                        >
                          <div
                            className={`h-1.5 w-1.5 flex-shrink-0 rounded-full ${
                              tool.featured
                                ? "bg-[#D4AF37]"
                                : "bg-[#C79A2B]"
                            }`}
                          />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-auto">
                      <Button
                        className={`h-11 w-full font-semibold ${
                          tool.featured
                            ? "bg-[#C79A2B] text-white hover:bg-[#D4AF37]"
                            : "bg-[#1D2D44] text-white hover:bg-[#263C59]"
                        }`}
                        asChild
                      >
                        <Link href={tool.link}>
                          {tool.buttonText}
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <p className="mx-auto mt-7 max-w-3xl text-center text-xs leading-relaxed text-gray-500 sm:text-sm">
            Calculations are estimates for educational purposes and do not
            constitute mortgage approval, a lending commitment, investment
            advice, or financial advice.
          </p>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="bg-[#F4F6F8] py-10">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-2">
            <Card className="h-full border border-gray-200 bg-white shadow-sm">
              <CardContent className="flex h-full flex-col pb-5 pt-5">
                <div className="mb-3 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-base text-[#D4AF37]">
                      ★
                    </span>
                  ))}
                </div>

                <p className="mb-6 flex-grow text-sm leading-7 text-gray-700 sm:text-[15px]">
                  BC Mortgage Team didn&apos;t just help me secure a mortgage,
                  they took the time to explain the strategy behind it and why
                  the structure mattered long-term. I felt informed, confident,
                  and supported throughout the process instead of simply
                  choosing the lowest rate and hoping for the best.
                </p>

                <div className="mt-auto flex items-center gap-3">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-blue-500">
                    <span className="text-sm font-bold text-white">SK</span>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-[#1D2D44]">
                      Sarah K.
                    </p>

                    <p className="text-xs text-gray-500">
                      First-time buyer · Vancouver
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="h-full border border-gray-200 bg-white shadow-sm">
              <CardContent className="flex h-full flex-col pb-5 pt-5">
                <div className="mb-3 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-base text-[#D4AF37]">
                      ★
                    </span>
                  ))}
                </div>

                <p className="mb-6 flex-grow text-sm leading-7 text-gray-700 sm:text-[15px]">
                  I was ready to renew directly with my bank, but BC Mortgage
                  Team took the time to review my options and structure
                  everything properly. The result was over $4,000 in savings in
                  the first year alone and a mortgage that fit my long-term
                  goals much better.
                </p>

                <div className="mt-auto flex items-center gap-3">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-green-600">
                    <span className="text-sm font-bold text-white">DM</span>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-[#1D2D44]">
                      David M.
                    </p>

                    <p className="text-xs text-gray-500">Renewal · Surrey</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

     {/* ── Services ── */}
<section id="services" className="bg-white py-8 lg:py-10">
  <div className="container mx-auto px-4">
    <div className="mb-6 text-center">
      <h2 className="mb-2 text-2xl font-bold text-[#1D2D44] lg:text-3xl">
        Mortgage Services
      </h2>

      <p className="mx-auto max-w-3xl text-sm text-gray-600 sm:text-base">
        Support for purchases, renewals, refinances, investments, and
        self-employed borrowers.
      </p>
    </div>

    <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 lg:grid-cols-5">
      {services.map((service) => (
        <Link
          key={service.title}
          href={service.link}
          className="group rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#C79A2B] hover:shadow-md"
        >
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#F4F6F8]">
            {service.icon}
          </div>

          <h3 className="text-base font-bold text-[#1D2D44]">
            {service.title}
          </h3>

          <div className="mt-3 flex items-center text-xs font-semibold text-[#C79A2B]">
            Learn more
            <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </div>
        </Link>
      ))}
    </div>
  </div>
</section>

      {/* ── About ── */}
      <section id="about" className="bg-[#F4F6F8] py-10 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div className="order-1 lg:order-2">
              <Badge className="mb-3 bg-white text-xs text-[#032133] hover:bg-white lg:mb-4">
                BC Mortgage Team
              </Badge>

              <h2 className="mb-4 text-xl font-bold text-[#1D2D44] lg:mb-5">
                Rob Bhullar - Licensed Mortgage Advisor
              </h2>

              <p className="mb-5 text-sm leading-relaxed text-gray-600">
                Bringing over 20 years of financial experience and real-world
                mortgage expertise to helping homeowners, investors, and
                first-time buyers make smarter mortgage decisions. Blending
                analytical thinking with practical lending expertise, focusing
                on how a mortgage is structured — not just the rate — to support
                long-term financial goals.
              </p>

              <div className="mb-6 space-y-3">
                {credentials.map((item) => (
                  <div key={item} className="flex items-start">
                    <div className="mr-3 mt-[8px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#032133]" />

                    <span className="text-sm leading-relaxed text-gray-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mb-8 grid grid-cols-3 items-center gap-4 text-center lg:gap-5">
                <div className="flex flex-col items-center justify-center">
                  <div className="text-2xl font-bold text-[#D4AF37]">
                    20+ years
                  </div>

                  <div className="text-xs text-gray-600">
                    in Financial Industry
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <Image
                    src="/BCmortgageteamlogo.jpeg"
                    alt="BC Mortgage Team"
                    width={96}
                    height={72}
                    className="h-auto w-20 object-contain"
                  />
                </div>

                <div className="flex items-center justify-center">
                  <Image
                    src="/BRX_brand_black.png"
                    alt="BRX Mortgage"
                    width={96}
                    height={72}
                    className="h-auto w-20 object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="order-2 lg:order-1">
              <Image
                src="/headshot.png"
                alt="Rob Bhullar - Licensed Mortgage Advisor"
                width={384}
                height={500}
                className="mx-auto h-auto w-64 rounded-2xl shadow-2xl sm:w-80 lg:w-96"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section className="bg-white py-10 lg:py-14">
        <div className="container mx-auto px-4">
          <div className="mb-6 text-center lg:mb-8">
            <h2 className="mb-2 text-2xl font-bold text-[#1D2D44] lg:mb-4 lg:text-3xl">
              Ready to Get Started?
            </h2>

            <p className="mx-auto max-w-3xl text-sm leading-relaxed text-gray-600 lg:text-lg">
              Contact today for a free consultation, or start your secure
              online application right away.
            </p>
          </div>

          <div className="mx-auto mb-12 max-w-6xl">
            <div className="w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
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

          <div
            id="contact"
            className="grid scroll-mt-32 gap-10 lg:grid-cols-2"
          >
            <div>
              <ContactForm />
            </div>

            <div className="space-y-6">
              <NewsletterSubscription />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
