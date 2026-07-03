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
<section className="relative overflow-hidden bg-white">
  <div
    className="absolute inset-0 bg-cover bg-[73%_center] md:bg-[75%_center]"
    style={{ backgroundImage: "url('/city.png')" }}
  />

  <div className="absolute inset-0 bg-white/10 md:bg-white/5" />
  <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/30 to-transparent md:from-white/60 md:via-white/20" />
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/35" />

  <div className="relative container mx-auto px-4 py-14 sm:py-20 lg:py-32">
    <div className="max-w-xl lg:max-w-3xl text-left">
      <Badge className="mb-5 bg-white/75 text-[#032133] hover:bg-white/80 inline-block backdrop-blur-sm">
        Strategy-First Mortgage Advice for BC Borrowers
      </Badge>

      <h1 className="text-[3rem] sm:text-5xl lg:text-7xl font-bold text-[#1D2D44] mb-5 leading-[1.05]">
        Your Bank Has a{" "}
        <span className="text-[#C79A2B]">Mortgage Advisor.</span>
        <br />
        You Should Have
        <br />
        One Too.
      </h1>

      <div className="inline-block rounded-xl bg-white/45 md:bg-transparent backdrop-blur-sm md:backdrop-blur-0 px-3 py-2 md:px-0 md:py-0 mb-4">
        <p className="text-base font-bold text-[#1D2D44] tracking-wide">
          Serving BC — Vancouver, Fraser Valley & the Okanagan
        </p>
      </div>

      <div className="mb-8 h-1.5 w-24 rounded-full bg-[#C79A2B]" />

      <div className="inline-block rounded-xl bg-white/45 md:bg-transparent backdrop-blur-sm md:backdrop-blur-0 px-3 py-2 md:px-0 md:py-0 mb-10">
        <p className="text-lg text-[#1D2D44] font-bold md:font-semibold leading-relaxed max-w-2xl">
          Independent advice. Competitive rates. Better mortgage decisions.
        </p>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mb-7 sm:w-[696px]">
        <div className="w-full sm:flex-1">
          <Button
            size="lg"
            className="w-full h-14 bg-[#C79A2B] hover:bg-[#D4AF37] text-white font-semibold shadow-xl"
            asChild
          >
            <Link href="/mortgage-checker">
              Check My Mortgage →
            </Link>
          </Button>
        </div>

        <div className="w-full sm:flex-1">
          <Button
            size="lg"
            className="w-full h-14 bg-[#1D2D44] hover:bg-[#243854] text-white font-semibold shadow-xl"
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
      </div>

      {/* Feature Bar */}
      <div className="w-full sm:w-[696px] rounded-2xl border border-white/50 bg-white/70 backdrop-blur-xl shadow-2xl p-4 sm:p-5">
        <div className="grid grid-cols-3 gap-2 sm:gap-6 text-xs sm:text-sm font-semibold text-[#1D2D44]">
          <div className="flex flex-col items-center text-center">
            <Shield className="w-5 h-5 sm:w-6 sm:h-6 mb-2 text-[#C79A2B]" />
            <span>50+ Lenders</span>
          </div>

          <div className="flex flex-col items-center text-center">
            <Clock className="w-5 h-5 sm:w-6 sm:h-6 mb-2 text-[#C79A2B]" />
            <span>Competitive Rates</span>
          </div>

          <div className="flex flex-col items-center text-center">
            <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 mb-2 text-[#C79A2B]" />
            <span>Independent Advice</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Feature Bar */}
      <div className="w-full sm:w-[696px] rounded-2xl border border-white/50 bg-white/70 backdrop-blur-xl shadow-2xl p-4 sm:p-5">
        <div className="grid grid-cols-3 gap-2 sm:gap-6 text-xs sm:text-sm font-semibold text-[#1D2D44]">
          <div className="flex flex-col items-center text-center">
            <Shield className="w-5 h-5 sm:w-6 sm:h-6 mb-2 text-[#C79A2B]" />
            <span>50+ Lenders</span>
          </div>

          <div className="flex flex-col items-center text-center">
            <Clock className="w-5 h-5 sm:w-6 sm:h-6 mb-2 text-[#C79A2B]" />
            <span>Competitive Rates</span>
          </div>

          <div className="flex flex-col items-center text-center">
            <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 mb-2 text-[#C79A2B]" />
            <span>Independent Advice</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      
   {/* ── Lenders ── */}
<section id="lenders" className="py-12 lg:py-16 bg-[#F4F6F8]">
  <div className="container mx-auto px-4">

    <div className="text-center mb-10">
      <h2 className="text-2xl lg:text-3xl font-bold text-[#1D2D44] mb-4">
        Trusted Lending Partners
      </h2>

      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        We work with 50+ lenders including major banks, credit unions, and
        alternative lenders to find you the best rates and terms.
      </p>
    </div>

    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 items-center justify-items-center">
      <img
        src="/scotiabank.png"
        alt="Scotiabank"
        className="h-16 sm:h-20 object-contain transition-transform duration-300 hover:scale-105"
      />

      <img
        src="/td.png"
        alt="TD Bank"
        className="h-16 sm:h-20 object-contain transition-transform duration-300 hover:scale-105"
      />

      <img
        src="/firstnational.png"
        alt="First National"
        className="h-16 sm:h-20 object-contain transition-transform duration-300 hover:scale-105"
      />

      <img
        src="/hometrust.png"
        alt="Home Trust"
        className="h-16 sm:h-20 object-contain transition-transform duration-300 hover:scale-105"
      />

      <img
        src="/rmg.png"
        alt="RMG Mortgages"
        className="h-16 sm:h-20 object-contain transition-transform duration-300 hover:scale-105"
      />
    </div>

  </div>
</section>

  {/* ── Testimonials ── */}
<section className="py-10 bg-white">
  <div className="container mx-auto px-4">
    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">

      {/* Testimonial 1 */}
      <Card className="border border-gray-200 bg-white shadow-sm h-full">
        <CardContent className="pt-5 pb-5 flex flex-col h-full">
          <div className="flex gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-[#D4AF37] text-base">
                ★
              </span>
            ))}
          </div>

          <p className="text-sm sm:text-[15px] text-gray-700 leading-7 mb-6 flex-grow">
            BC Mortgage Team didn&apos;t just help me secure a mortgage — they
            took the time to explain the strategy behind it and why the
            structure mattered long-term. I felt informed, confident, and
            supported throughout the process instead of simply choosing the
            lowest rate and hoping for the best.
          </p>

          <div className="flex items-center gap-3 mt-auto">
            <div className="w-11 h-11 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-sm">SK</span>
            </div>

            <div>
              <p className="font-semibold text-[#1D2D44] text-sm">
                Sarah K.
              </p>
              <p className="text-xs text-gray-500">
                First-time buyer · Vancouver
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Testimonial 2 */}
      <Card className="border border-gray-200 bg-white shadow-sm h-full">
        <CardContent className="pt-5 pb-5 flex flex-col h-full">
          <div className="flex gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-[#D4AF37] text-base">
                ★
              </span>
            ))}
          </div>

          <p className="text-sm sm:text-[15px] text-gray-700 leading-7 mb-6 flex-grow">
            I was ready to renew directly with my bank, but Rob took the time to
            review my options and structure everything properly. The result was
            over $4,000 in savings in the first year alone — and a mortgage that
            fit my long-term goals much better.
          </p>

          <div className="flex items-center gap-3 mt-auto">
            <div className="w-11 h-11 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-sm">DM</span>
            </div>

            <div>
              <p className="font-semibold text-[#1D2D44] text-sm">
                David M.
              </p>
              <p className="text-xs text-gray-500">
                Renewal · Surrey
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

    </div>
  </div>
</section>

    {/* ── Services ── */}
<section id="services" className="py-10 lg:py-14 bg-[#F4F6F8]">
  <div className="container mx-auto px-4">
    <div className="text-center mb-8">
      <h2 className="text-2xl font-bold text-[#1D2D44] mb-3">
        Mortgage Services
      </h2>
      <p className="text-base lg:text-xl text-[#2C2C2C] max-w-3xl mx-auto">
        Practical mortgage solutions for purchases, renewals, refinances, and more.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
      {[
        {
          icon: <Users className="w-6 h-6 text-[#1D2D44]" />,
          title: "Purchase",
          description: "First-time buyers, next homes, and investment properties.",
          link: "/purchase",
        },
        {
          icon: <TrendingUp className="w-6 h-6 text-[#1D2D44]" />,
          title: "Renewal",
          description: "Don’t auto-renew. Compare your options before signing.",
          link: "/renewal",
        },
        {
          icon: <FileText className="w-6 h-6 text-[#1D2D44]" />,
          title: "Refinance",
          description: "Use equity strategically or consolidate debt.",
          link: "/refinance",
        },
        {
          icon: <Shield className="w-6 h-6 text-[#1D2D44]" />,
          title: "Self-Employed",
          description: "Flexible solutions for business owners and non-traditional income.",
          link: "/self-employed",
        },
        {
          icon: <Calculator className="w-6 h-6 text-[#1D2D44]" />,
          title: "Investment Properties",
          description: "Financing strategies for rental and portfolio growth.",
          link: "/investment",
        },
        {
          icon: <Clock className="w-6 h-6 text-[#1D2D44]" />,
          title: "Quick Closings",
          description: "Fast approvals for time-sensitive deals.",
          link: "/quick-closings",
        },
      ].map((service, index) => (
        <Card
          key={index}
          className="bg-white shadow-sm hover:shadow-md transition-shadow"
        >
          <CardContent className="p-5">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 bg-[#F4F6F8] rounded-lg flex items-center justify-center flex-shrink-0">
                {service.icon}
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#1D2D44] mb-1">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  {service.description}
                </p>

                <Button
                  variant="link"
                  className="p-0 text-[#1D2D44] font-medium h-auto"
                  asChild
                >
                  <Link href={service.link}>
                    Learn more <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
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
      
      {/* Write-up first on mobile, right side on desktop */}
      <div className="order-1 lg:order-2">
        <Badge className="mb-4 bg-[#F4F6F8] text-[#032133] hover:bg-[#032133]/10">
          About Rob S. Bhullar, BSc
        </Badge>

        <h2 className="text-2xl font-bold text-[#1D2D44] mb-6">
          Lead Mortgage Specialist
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
            "Bachelor of Science in Mathematics, Minor in Business Administration & Computing Studies — Simon Fraser University",
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
{/*
        <div className="flex flex-col items-center gap-3">
          <Button
            size="lg"
            className="bg-[#032133] hover:bg-[#032133]/90 text-white font-semibold w-full sm:w-auto"
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

          <p className="text-sm text-gray-600 text-center">
            Trusted strategy-focused mortgage guidance for BC borrowers
          </p>
        </div>   */}
      </div>

      {/* Photo second on mobile, left side on desktop */}
      <div className="order-2 lg:order-1">
        <img
          src="/headshot.png"
          alt="Rob Bhullar - Mortgage Broker"
          className="rounded-2xl shadow-2xl w-72 sm:w-80 lg:w-96 mx-auto"
        />
      </div>

    </div>
  </div>
</section>

      {/* ── Market Insights ── 
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
      */}

      {/* ── Contact ── */}
    <section className="py-12 lg:py-14 bg-[#F4F6F8]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-[#1D2D44] mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Contact today for a free consultation, or start your secure online application right away.
            </p>
          </div>

          {/* Calendly embed — div, not a nested section */}
          <div className="max-w-6xl mx-auto mb-12">
            <h2 className="text-2xl font-bold text-[#1D2D44] mb-2">Book A Strategy Call</h2>
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

          <div id="contact" className="grid lg:grid-cols-2 gap-10 scroll-mt-32">
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

             

              <div>
                <NewsletterSubscription />
              </div>
           {/* 
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
            
            */}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
