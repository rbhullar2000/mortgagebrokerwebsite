"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Calculator,
  TrendingUp,
  Shield,
  CheckCircle,
  Percent,
  Clock,
  DollarSign,
  Building,
  Target,
} from "lucide-react"
import Link from "next/link"
import { ContactForm } from "@/components/contact-form"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MortgageCalculator } from "@/components/mortgage-calculator"

export default function PurchasePageClient() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#F4F6F8] to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-[#F4F6F8] text-[#1D2D44] hover:bg-[#1D2D44]/10">
                Home Purchase — First-Time &amp; Move-Up Buyers
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-[#1D2D44] mb-6">
                Buy Your Home with <span className="text-[#D4AF37]">Confidence</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                A pre-approval is table stakes. With 20+ years in equity and investment analysis, I
                structure the mortgage — not just the rate — and make sure every BC and federal
                buyer program you qualify for is working for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  size="lg"
                  className="bg-[#1D2D44] hover:bg-[#1D2D44]/90"
                  asChild
                  onClick={() => window.trackApplicationClick?.("purchase_hero")}
                >
                  <Link href="https://r.mtg-app.com/robbhullar" target="_blank" rel="noopener noreferrer">
                    Get Pre-Approved - Apply Now
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#D4AF37] text-[#1D2D44] hover:bg-[#D4AF37] hover:text-white"
                  asChild
                >
                  <Link href="#calculator">
                    <Calculator className="w-5 h-5 mr-2" />
                    Calculate Payments
                  </Link>
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-[#D4AF37]">24hrs</div>
                  <div className="text-sm text-gray-600">Pre-Approval</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#D4AF37]">50+</div>
                  <div className="text-sm text-gray-600">Lenders</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#D4AF37]">5%</div>
                  <div className="text-sm text-gray-600">Min Down</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border-l-4 border-[#D4AF37]">
                <h3 className="text-2xl font-bold text-[#1D2D44] mb-6">Get Your Purchase Pre-Approval</h3>
                <ContactForm variant="hero" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1D2D44] mb-4">
              BC &amp; Federal Programs You Can Stack
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Most first-time buyers qualify for several of these, and used together they can be
              worth tens of thousands at closing and in monthly payments. Knowing which combination
              fits your purchase — and which ones you have to choose between — is exactly the kind of
              analysis I bring to a file. Since the December 2024 reforms, insured mortgages go up to
              $1.5M (5% down on the first $500K, 10% to $1.5M), and first-time and new-build buyers
              can amortize over 30 years.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <DollarSign className="w-7 h-7" />,
                tag: "Federal",
                title: "FHSA",
                description:
                  "Save up to $40,000 toward your first home completely tax-free — $8,000 per year, deductible like an RRSP.",
              },
              {
                icon: <TrendingUp className="w-7 h-7" />,
                tag: "Federal",
                title: "Home Buyers' Plan",
                description:
                  "Withdraw up to $60,000 from your RRSP tax-free toward your down payment, repaid over time.",
              },
              {
                icon: <Percent className="w-7 h-7" />,
                tag: "Federal",
                title: "Home Buyers' Tax Credit",
                description: "A $1,500 non-refundable tax credit to help offset your closing costs.",
              },
              {
                icon: <Clock className="w-7 h-7" />,
                tag: "Federal",
                title: "30-Year Amortization",
                description:
                  "First-time buyers and new-build purchasers can stretch to a 30-year amortization for lower monthly payments.",
              },
              {
                icon: <Shield className="w-7 h-7" />,
                tag: "BC",
                title: "Property Transfer Tax Exemption",
                description:
                  "Full PTT exemption up to $835,000 (partial to $860,000) — worth up to about $8,000 saved at closing.",
              },
              {
                icon: <Building className="w-7 h-7" />,
                tag: "BC",
                title: "Newly Built Home Exemption",
                description:
                  "Full PTT exemption on an eligible newly built home up to $1,100,000 (partial to $1,150,000).",
              },
            ].map((program, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-14 h-14 bg-[#F4F6F8] rounded-lg flex items-center justify-center text-[#1D2D44]">
                      {program.icon}
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wide text-[#D4AF37]">
                      {program.tag}
                    </span>
                  </div>
                  <CardTitle className="text-lg text-[#1D2D44]">{program.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 leading-relaxed">{program.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="text-xs text-gray-500 text-center mt-8 max-w-3xl mx-auto">
            Buyers of eligible new homes may also qualify for the federal First-Time Home Buyers'
            GST rebate (up to $50,000 back). Program figures are current for 2026 and subject to
            change, and this isn't tax advice — let's confirm exactly what you qualify for.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-[#F4F6F8]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1D2D44] mb-4">
              Why Work With Me on Your Purchase
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Buying a home is one of the biggest financial decisions you'll make. It deserves more
              than a rate quote.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "An Analyst's Read",
                description:
                  "20+ years in equity and investment analysis. I look at how the mortgage is structured and what it costs you long-term — not just this week's rate.",
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Program Stacking",
                description:
                  "I map every BC and federal program you qualify for and how to combine them, so you don't leave money on the table at closing.",
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "50+ Lenders",
                description:
                  "Bank rates plus alternatives, rate holds up to 120 days, and no lender fees — matched to your situation, not a single lender's shelf.",
              },
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: "Pre-Approval Done Right",
                description:
                  "A real budget and a held rate, so you shop with confidence and put in offers that sellers take seriously.",
              },
            ].map((benefit, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <div className="w-16 h-16 bg-[#F4F6F8] rounded-lg flex items-center justify-center text-[#1D2D44] mb-4">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-xl text-[#1D2D44]">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1D2D44] mb-4">Simple 4-Step Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From application to keys in hand, I guide you through every step.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Get Pre-Approved",
                description: "Quick application, 24-hour approval, and a plan for the programs you qualify for",
              },
              { step: "2", title: "Shop with Confidence", description: "Know your real budget and make strong offers" },
              { step: "3", title: "Finalize Your Mortgage", description: "Lock in your rate and complete the paperwork" },
              { step: "4", title: "Get Your Keys", description: "Close on your new home and move in!" },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#1D2D44] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-[#1D2D44] mb-2">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-20 bg-[#F4F6F8]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1D2D44] mb-4">Calculate Your Monthly Payments</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Estimate your monthly payment and see how price, down payment, and amortization affect
              it. Want the full picture including closing costs? Book a strategy call.
            </p>
          </div>
          <MortgageCalculator />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#1D2D44] to-[#D4AF37] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Buy Your Home?</h2>
          <p className="text-xl mb-8 opacity-90">
            Get pre-approved today and start shopping with confidence — with every program working
            for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-[#1D2D44] hover:bg-gray-100"
              asChild
              onClick={() => window.trackApplicationClick?.("purchase_cta")}
            >
              <Link href="https://r.mtg-app.com/robbhullar" target="_blank" rel="noopener noreferrer">
                Start Application
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#1D2D44]"
              asChild
              onClick={() => window.trackApplicationClick?.("purchase_cta_call")}
            >
              <Link
                href="https://calendly.com/bcmortgageteam/15min"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a Strategy Call
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
