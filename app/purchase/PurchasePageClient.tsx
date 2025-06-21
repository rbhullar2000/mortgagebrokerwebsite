"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calculator, Users, Shield, TrendingUp, CheckCircle } from "lucide-react"
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
              <Badge className="mb-4 bg-[#F4F6F8] text-[#1D2D44] hover:bg-[#1D2D44]/10">Home Purchase Specialist</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-black mb-6">
                Buy Your Dream Home with <span className="text-[#1D2D44]">Confidence</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Whether you're a first-time buyer or moving up, I'll help you secure the best mortgage rates and terms
                for your home purchase in British Columbia.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  size="lg"
                  className="bg-[#1D2D44] hover:bg-[#1D2D44]/90"
                  asChild
                  onClick={() => window.trackApplicationClick?.("purchase_hero")}
                >
                  <Link href="https://r.mtg-app.com/robbhullar" target="_blank" rel="noopener noreferrer">
                    Get Pre-Approved Now
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
                  <div className="text-2xl font-bold text-[#1D2D44]">24hrs</div>
                  <div className="text-sm text-gray-600">Pre-Approval</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#1D2D44]">50+</div>
                  <div className="text-sm text-gray-600">Lenders</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#1D2D44]">5%</div>
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

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1D2D44] mb-4">
              Why Choose Me for Your Home Purchase?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Buying a home is one of life's biggest decisions. I make the mortgage process simple and stress-free.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-8 h-8" />,
                title: "First-Time Buyer Expert",
                description: "Special programs and guidance for first-time homebuyers",
                features: ["5% down payment options", "First-time buyer incentives", "Step-by-step guidance"],
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Pre-Approval Advantage",
                description: "Get pre-approved to shop with confidence",
                features: ["Know your budget", "Stronger offers", "Faster closings"],
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Best Rates Guaranteed",
                description: "Access to exclusive rates from 50+ lenders",
                features: ["Bank rates + alternatives", "Rate holds up to 120 days", "No lender fees"],
              },
            ].map((benefit, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <div className="w-16 h-16 bg-[#F4F6F8] rounded-lg flex items-center justify-center text-[#1D2D44] mb-4">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  <CardDescription className="text-gray-600">{benefit.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {benefit.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-[#D4AF37] mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-[#F4F6F8]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1D2D44] mb-4">Simple 4-Step Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From application to keys in hand, I guide you through every step.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Get Pre-Approved", description: "Quick application and 24-hour approval" },
              { step: "2", title: "Shop with Confidence", description: "Know your budget and make strong offers" },
              { step: "3", title: "Finalize Your Mortgage", description: "Lock in your rate and complete paperwork" },
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
      <section id="calculator" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1D2D44] mb-4">Calculate Your Monthly Payments</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Use our mortgage calculator to estimate your monthly payments and see how different factors affect your
              mortgage.
            </p>
          </div>
          <MortgageCalculator />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#1D2D44] to-[#D4AF37] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Buy Your Home?</h2>
          <p className="text-xl mb-8 opacity-90">Get pre-approved today and start shopping with confidence.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Button
              size="lg"
              variant="secondary"
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
              className="border-[#D4AF37] text-[#1D2D44] hover:bg-[#D4AF37] hover:text-white"
              asChild
              onClick={() => window.trackPhoneClick?.()}
            >
              {/* <Link href="tel:+16041234567">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Link> */}
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
