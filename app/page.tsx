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
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BC Mortgage Team — Independent Mortgage Broker serving BC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BC Mortgage Team | Mortgage Broker — Serving BC — Vancouver, Fraser Valley & the Okanagan",
    description:
      "Strategy-first mortgage advice for BC borrowers. Access 50+ lenders for home purchase, renewal, and refinance.",
    images: ["/og-image.jpg"],
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
    className="absolute inset-0 bg-cover bg-[92%_22%] md:bg-[75%_center]"
    style={{ backgroundImage: "url('/city.png')" }}
  />
{/*
 {/* Mobile overlay — strong at top where the headline sits, clears downward */}
{/*
  <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/25 to-transparent md:hidden" />

{/* Desktop overlay — strong on the left where text sits, house stays clear */}
{/*
  <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-white/75 via-white/25 to-transparent" />
*/}
  
 {/* Mobile Hero */}
<div className="relative md:hidden flex flex-col px-4 pt-20 pb-12 min-h-[92svh]">
  <div className="max-w-md text-left">
    <Badge className="mb-5 bg-white/80 text-[#032133] hover:bg-white/85 inline-block backdrop-blur-sm text-[11px]">
      Strategy-First Mortgage Advice for BC Borrowers
    </Badge>
    <h1
      className="text-[2.25rem] font-bold text-[#1D2D44] leading-[1.08]"
      style={{ textShadow: "0 1px 12px rgba(255,255,255,0.45)" }}
    >
      Your Bank Has a{" "}
      <span className="text-[#C79A2B]">Mortgage Advisor.</span>
      <br />
      You Should Have
      <br />
      One Too.
    </h1>
  </div>

  {/* mt-auto pushes the action group to the bottom of the hero,
      leaving the middle of the frame open for the house */}
  <div className="mt-auto">
    <div className="flex justify-center mb-4">
      <Button
        size="lg"
        className="w-[330px] max-w-[90%] h-12 bg-[#C79A2B] hover:bg-[#D4AF37] text-white font-semibold shadow-xl text-[16px] rounded-xl ring-1 ring-white/40"
        asChild
      >
        <Link href="/mortgage-checker">Am I Overpaying? 2 min →</Link>
      </Button>
    </div>

    <div className="flex flex-col items-center gap-3">
      <p className="inline-block rounded-full border border-white/40 bg-white/70 backdrop-blur-md px-4 py-1.5 text-[11px] font-semibold text-[#1D2D44] text-center">
        Serving BC • Vancouver • Fraser Valley • Okanagan
      </p>
      <p className="inline-block rounded-xl border border-white/50 bg-white/65 backdrop-blur-md px-3 py-1.5 text-[12px] font-bold text-[#1D2D44] leading-snug text-center">
        Access to 50+ lenders — not just one bank.
      </p>
    </div>
  </div>
</div>

  {/* Desktop Hero */}
  <div className="relative hidden md:block container mx-auto px-4 py-20 lg:py-32">
    <div className="max-w-xl lg:max-w-3xl text-left">
      <Badge className="mb-5 bg-white/75 text-[#032133] hover:bg-white/80 inline-block backdrop-blur-sm">
        Strategy-First Mortgage Advice for BC Borrowers
      </Badge>

  <h1
  className="text-5xl lg:text-7xl font-bold text-[#1D2D44] mb-6 leading-tight"
  style={{ textShadow: "0 1px 12px rgba(255,255,255,0.45)" }}
>
  Your Bank Has a <span className="text-[#D4AF37]">Mortgage Advisor.</span>
  <br />
  You Should Have One Too.
</h1>

     <div className="mb-8">
  <p className="inline-block bg-white/80 backdrop-blur-sm rounded-full px-4 py-1.5 text-sm font-semibold text-[#1D2D44]">
    Serving BC — Vancouver, Fraser Valley &amp; the Okanagan
  </p>
</div>

{/* 
     <p className="inline-block bg-white/80 backdrop-blur-sm rounded-full px-4 py-1.5 text-base font-semibold text-[#1D2D44] mb-6">
  Independent advice. Competitive rates. Better mortgage decisions.
</p>
    */}  
     <div className="flex flex-col sm:flex-row gap-4 mb-7 w-full max-w-2xl">
  <Button
    size="lg"
    className="flex-[1.3] h-14 bg-[#C79A2B] hover:bg-[#D4AF37] text-white text-base font-bold shadow-xl"
    asChild
  >
    <Link href="/mortgage-checker">Am I Overpaying? 2 min checker →</Link>
  </Button>
  <Button
    size="lg"
    className="flex-1 h-14 border-2 border-white/80 bg-white/10 backdrop-blur-sm text-white font-semibold shadow-xl hover:bg-white hover:text-[#1D2D44]"
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
      
     <div className="w-full max-w-2xl rounded-2xl border border-white/60 bg-white/90 backdrop-blur-xl shadow-xl px-7 py-4">
  <div className="grid grid-cols-3 gap-4 text-sm font-semibold text-[#1D2D44]">
    <div className="flex flex-col items-center text-center">
      <Shield className="w-5 h-5 mb-1 text-[#C79A2B]" />
      <span>50+ Lenders</span>
    </div>
    <div className="flex flex-col items-center text-center">
      <Clock className="w-5 h-5 mb-1 text-[#C79A2B]" />
      <span>Competitive Rates</span>
    </div>
    <div className="flex flex-col items-center text-center">
      <TrendingUp className="w-5 h-5 mb-1 text-[#C79A2B]" />
      <span>Independent Advice</span>
    </div>
  </div>
</div>
    </div>
  </div>
</section>
      
{/* ── Lenders ── */}
<section id="lenders" className="py-9 sm:py-12 lg:py-16 bg-[#F4F6F8]">
  <div className="container mx-auto px-4">
    <div className="text-center mb-8 lg:mb-10">
      <h2 className="text-2xl lg:text-3xl font-bold text-[#1D2D44] mb-3">
        Access to Canada&apos;s Leading Mortgage Lenders
      </h2>

      <p className="text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Compare rates and mortgage options from Canada&apos;s leading banks,
        credit unions and private lenders.
      </p>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-7 lg:gap-x-8 lg:gap-y-8 items-center justify-items-center">
      {[
        { src: "/td.png", alt: "TD Bank", className: "w-[118px] h-[48px] scale-[1.45] lg:w-[170px] lg:h-[70px] lg:scale-[1.75]" },
        { src: "/scotiabank.png", alt: "Scotiabank", className: "w-[118px] h-[48px] scale-[1.38] lg:w-[170px] lg:h-[70px] lg:scale-[1.65]" },
        { src: "/Coast_Capital_Savings.png", alt: "Coast Capital Savings", className: "w-[145px] h-[48px] scale-[0.95] lg:w-[190px] lg:h-[70px] lg:scale-[0.95]" },
        { src: "/National_Bank.png", alt: "National Bank", className: "w-[145px] h-[48px] scale-[0.95] lg:w-[190px] lg:h-[70px] lg:scale-[0.95]" },

        { src: "/firstnational.png", alt: "First National", className: "w-[118px] h-[48px] scale-[1.45] lg:w-[170px] lg:h-[70px] lg:scale-[1.8]" },
        { src: "/MCAP.png", alt: "MCAP", className: "w-[145px] h-[48px] scale-[0.88] lg:w-[190px] lg:h-[70px] lg:scale-[0.9]" },
        { src: "/rmg.png", alt: "RMG Mortgages", className: "w-[118px] h-[48px] scale-[1.5] lg:w-[170px] lg:h-[70px] lg:scale-[1.9]" },
        { src: "/hometrust.png", alt: "Home Trust", className: "w-[118px] h-[48px] scale-[1.5] lg:w-[170px] lg:h-[70px] lg:scale-[1.9]" },

        { src: "/equitable-bank.png", alt: "Equitable Bank", className: "w-[145px] h-[48px] scale-[0.9] lg:w-[190px] lg:h-[70px] lg:scale-[0.9]" },
        { src: "/Manulife_Canada.png?v=2", alt: "Manulife Canada", className: "w-[118px] h-[48px] scale-[1.4] lg:w-[170px] lg:h-[70px] lg:scale-[1.7]" },
        { src: "/meridian-credit-union.png", alt: "Meridian Credit Union", className: "w-[145px] h-[48px] scale-[0.9] lg:w-[190px] lg:h-[70px] lg:scale-[0.9]" },
        { src: "/Logo_Prospera_Credit_Union.svg", alt: "Prospera Credit Union", className: "w-[118px] h-[48px] scale-[1.05] lg:w-[170px] lg:h-[70px] lg:scale-[1.2]" },
      ].map((lender) => (
        <div
          key={lender.alt}
          className="flex h-14 w-full max-w-[155px] lg:h-20 lg:w-56 lg:max-w-none items-center justify-center overflow-visible"
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
<section id="services" className="py-8 lg:py-14 bg-[#F4F6F8]">
  <div className="container mx-auto px-4">
    <div className="text-center mb-6 lg:mb-8">
      <h2 className="text-2xl lg:text-3xl font-bold text-[#1D2D44] mb-3">
        Mortgage Services
      </h2>

      <p className="text-sm sm:text-base lg:text-xl text-[#2C2C2C] max-w-3xl mx-auto leading-relaxed">
        Practical mortgage solutions for purchases, renewals, refinances, and more.
      </p>
    </div>

    <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-6">
      {[
        {
          icon: <Users className="w-6 h-6 text-[#1D2D44]" />,
          title: "Purchase",
          description: "Buying a home or investment property.",
          link: "/purchase",
        },
        {
          icon: <TrendingUp className="w-6 h-6 text-[#1D2D44]" />,
          title: "Renewal",
          description: "Compare before you auto-renew.",
          link: "/renewal",
        },
        {
          icon: <FileText className="w-6 h-6 text-[#1D2D44]" />,
          title: "Refinance",
          description: "Use equity or consolidate debt.",
          link: "/refinance",
        },
        {
          icon: <Shield className="w-6 h-6 text-[#1D2D44]" />,
          title: "Self-Employed",
          description: "Flexible income solutions.",
          link: "/self-employed",
        },
        {
          icon: <Calculator className="w-6 h-6 text-[#1D2D44]" />,
          title: "Investment",
          description: "Rental and portfolio financing.",
          link: "/investment",
        },
        {
          icon: <Clock className="w-6 h-6 text-[#1D2D44]" />,
          title: "Quick Closings",
          description: "Fast approvals when timing matters.",
          link: "/quick-closings",
        },
      ].map((service, index) => (
        <Card
          key={index}
          className="bg-white shadow-sm hover:shadow-md transition-shadow rounded-xl"
        >
          <CardContent className="p-4 lg:p-5">
            <div className="flex flex-col lg:flex-row lg:items-start gap-2 lg:gap-4">
              <div className="hidden lg:flex w-11 h-11 bg-[#F4F6F8] rounded-lg items-center justify-center flex-shrink-0">
                {service.icon}
              </div>

              <div>
                <h3 className="text-base lg:text-lg font-bold text-[#1D2D44] mb-1">
                  {service.title}
                </h3>

                <p className="text-xs lg:text-sm text-gray-600 leading-snug mb-2 lg:mb-3">
                  {service.description}
                </p>

                <Button
                  variant="link"
                  className="p-0 h-auto text-[#C79A2B] hover:text-[#D4AF37] font-semibold text-xs lg:text-sm"
                  asChild
                >
                  <Link href={service.link}>
                    Learn more
                    <ArrowRight className="ml-1.5 lg:ml-2 w-3.5 h-3.5 lg:w-4 lg:h-4" />
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
<section id="about" className="py-10 lg:py-16 bg-white">
  <div className="container mx-auto px-4">
    <div className="grid lg:grid-cols-2 gap-8 items-center">

      {/* Write-up first on mobile, right side on desktop */}
      <div className="order-1 lg:order-2">
        <Badge className="mb-3 lg:mb-4 bg-[#F4F6F8] text-[#032133] hover:bg-[#032133]/10 text-xs lg:text-xs">
          About Rob S. Bhullar, BSc
        </Badge>

        <h2 className="text-xl lg:text-xl font-bold text-[#1D2D44] mb-4 lg:mb-5">
          Lead Mortgage Specialist
        </h2>

        <p className="text-sm lg:text-sm text-gray-600 mb-5 lg:mb-5 leading-relaxed">
          BC Mortgage Team brings over 25 years of finance experience together with real-world mortgage
          expertise to help homeowners, investors, and first-time buyers make smarter mortgage decisions.
          Our approach blends analytical thinking with practical lending expertise, focusing on how a
          mortgage is structured — not just the rate — to support long-term financial goals.
        </p>

        <div className="space-y-3 lg:space-y-3 mb-6 lg:mb-6">
          {[
            "Licensed Mortgage Professional with BRX Mortgage",
            "Former Equity Analyst with a focus on risk, valuation, and long-term outcomes",
            "Focused on aligning mortgage decisions with long-term financial strategy",
            "Bachelor of Science in Mathematics, Minor in Business Administration & Computing Studies — Simon Fraser University",
          ].map((item, index) => (
            <div key={index} className="flex items-start">
              <div className="w-1.5 h-1.5 bg-[#032133] rounded-full mr-3 mt-[8px] flex-shrink-0"></div>

              <span className="text-sm lg:text-sm text-gray-700 leading-relaxed">
                {item}
              </span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-4 lg:gap-5 mb-8 items-center text-center">
          <div className="flex flex-col items-center justify-center">
            <div className="text-2xl lg:text-2xl font-bold text-[#D4AF37]">
              25+ years
            </div>

            <div className="text-xs lg:text-xs text-gray-600">
              in Financial Industry
            </div>
          </div>

          <div className="flex items-center justify-center">
            <Image
              src="/BCmortgageteamlogo.jpeg"
              alt="BC Mortgage Team"
              width={96}
              height={72}
              className="object-contain w-20 lg:w-20 h-auto"
            />
          </div>

          <div className="flex items-center justify-center">
            <Image
              src="/BRX_brand_black.png"
              alt="BRX Mortgage"
              width={96}
              height={72}
              className="object-contain w-20 lg:w-20 h-auto"
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
        </div>
        */}
      </div>

      {/* Photo second on mobile, left side on desktop */}
      <div className="order-2 lg:order-1">
        <img
          src="/headshot.png"
          alt="Rob Bhullar - Mortgage Broker"
          className="rounded-2xl shadow-2xl w-64 sm:w-80 lg:w-96 mx-auto"
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
   <section className="py-10 lg:py-14 bg-[#F4F6F8]">
  <div className="container mx-auto px-4">
    <div className="text-center mb-6 lg:mb-8">
      <h2 className="text-2xl lg:text-3xl font-bold text-[#1D2D44] mb-2 lg:mb-4">
        Ready to Get Started?
      </h2>

      <p className="text-sm lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Contact today for a free consultation, or start your secure online application right away.
      </p>
    </div>

          {/* Calendly embed — div, not a nested section */}
          <div className="max-w-6xl mx-auto mb-12">
        {/*    <h2 className="text-2xl font-bold text-[#1D2D44] mb-2">Book A Strategy Call</h2>n*/}
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
