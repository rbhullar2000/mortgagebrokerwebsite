"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Calculator, DollarSign, Home, CreditCard, TrendingUp } from "lucide-react"
import Link from "next/link"
import { ContactForm } from "@/components/contact-form"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MortgageCalculator } from "@/components/mortgage-calculator"

export default function RefinancePageClient() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-slate-100 text-[#032133] hover:bg-[#032133]/10">Refinancing Specialist</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Unlock Your Home's <span className="text-[#032133]">Hidden Value</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Access your home's equity for debt consolidation, home improvements, investments, or major purchases.
                Get competitive refinancing rates and expert guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  size="lg"
                  className="bg-[#032133] hover:bg-[#032133]/90"
                  asChild
                  onClick={() => window.trackApplicationClick?.("refinance_hero")}
                >
                  <Link href="https://r.mtg-app.com/robbhullar" target="_blank" rel="noopener noreferrer">
                    Check My Equity
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#calculator">
                    <Calculator className="w-5 h-5 mr-2" />
                    Calculate Savings
                  </Link>
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-[#032133]">80%</div>
                  <div className="text-sm text-gray-600">Max LTV</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#032133]">48hrs</div>
                  <div className="text-sm text-gray-600">Approval</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#032133]">No Fee</div>
                  <div className="text-sm text-gray-600">Consultation</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Free Refinancing Assessment</h3>
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Refinance Your Home?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your home is likely your largest asset. Refinancing can help you leverage that equity for your financial
              goals.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <CreditCard className="w-8 h-8" />,
                title: "Debt Consolidation",
                description: "Combine high-interest debts into one low-rate mortgage payment",
                benefit: "Save $500+/month",
              },
              {
                icon: <Home className="w-8 h-8" />,
                title: "Home Improvements",
                description: "Fund renovations that increase your home's value",
                benefit: "Add 10-20% value",
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Investment Opportunities",
                description: "Access capital for real estate or business investments",
                benefit: "Build wealth",
              },
              {
                icon: <DollarSign className="w-8 h-8" />,
                title: "Lower Payments",
                description: "Secure better rates or extend amortization",
                benefit: "Reduce monthly costs",
              },
            ].map((benefit, index) => (
              <Card key={index} className="border-0 shadow-lg text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-slate-100 rounded-lg flex items-center justify-center text-[#032133] mb-4 mx-auto">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  <CardDescription className="text-gray-600">{benefit.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-lg font-bold text-[#032133]">{benefit.benefit}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Scenarios Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Common Refinancing Scenarios</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how refinancing could work for your specific situation.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Debt Consolidation Example</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-bold text-red-900 mb-2">Before Refinancing:</h4>
                    <ul className="space-y-1 text-red-800">
                      <li>• Credit cards: $50,000 @ 19.99% = $833/month</li>
                      <li>• Car loan: $25,000 @ 7.99% = $456/month</li>
                      <li>• Mortgage: $400,000 @ 5.5% = $2,271/month</li>
                      <li className="font-bold">Total: $3,560/month</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-bold text-green-900 mb-2">After Refinancing:</h4>
                    <ul className="space-y-1 text-green-800">
                      <li>• New mortgage: $475,000 @ 5.8% = $2,780/month</li>
                      <li className="font-bold">Monthly savings: $780</li>
                      <li className="font-bold">Annual savings: $9,360</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Home Improvement Example</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-bold text-blue-900 mb-2">Kitchen Renovation:</h4>
                    <ul className="space-y-1 text-blue-800">
                      <li>• Project cost: $75,000</li>
                      <li>• Home value increase: $90,000</li>
                      <li>• Net equity gain: $15,000</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-bold text-green-900 mb-2">Financing Options:</h4>
                    <ul className="space-y-1 text-green-800">
                      <li>• Refinance @ 5.8% = $438/month</li>
                      <li>• vs. Personal loan @ 12% = $1,668/month</li>
                      <li className="font-bold">Save: $1,230/month</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Simple Refinancing Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I handle all the paperwork and negotiations to make refinancing stress-free.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              { step: "1", title: "Free Assessment", description: "Evaluate your current situation and goals" },
              { step: "2", title: "Shop Lenders", description: "Compare rates from 50+ lenders" },
              { step: "3", title: "Get Approved", description: "Secure your new mortgage terms" },
              { step: "4", title: "Legal Review", description: "Complete documentation with your lawyer" },
              { step: "5", title: "Fund & Close", description: "Access your equity and close the deal" },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#032133] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{process.title}</h3>
                <p className="text-gray-600 text-sm">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Calculate Your Refinancing Benefits</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Use our calculator to see how much you could save or access through refinancing.
            </p>
          </div>
          <MortgageCalculator />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#032133] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Access Your Home's Equity?</h2>
          <p className="text-xl mb-8 opacity-90">Get a free assessment and see how much you could save or access.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Button
              size="lg"
              variant="secondary"
              asChild
              onClick={() => window.trackApplicationClick?.("refinance_cta")}
            >
              <Link href="https://r.mtg-app.com/robbhullar" target="_blank" rel="noopener noreferrer">
                Start Assessment
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild onClick={() => window.trackPhoneClick?.()}>
              {/*  <Link href="tel:+16041234567">
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
