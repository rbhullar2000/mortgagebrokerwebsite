"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calculator, Building, TrendingUp, DollarSign, CheckCircle, Target } from "lucide-react"
import Link from "next/link"
import { ContactForm } from "@/components/contact-form"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ROICalculator } from "@/components/roi-calculator"

export default function InvestmentPageClient() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#F4F6F8] to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-[#F4F6F8] text-[#1D2D44] hover:bg-[#1D2D44]/10">
                Investment Property Specialist
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-[#1D2D44] mb-6">
                Build Wealth Through <span className="text-[#D4AF37]">Real Estate</span>
              </h1>
              <p className="text-xl text-black mb-8 leading-relaxed">
                Specialized financing for rental properties, multi-unit buildings, and real estate investments. Access
                competitive rates and flexible terms for your portfolio growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  size="lg"
                  className="bg-[#1D2D44] hover:bg-[#1D2D44]/90"
                  asChild
                  onClick={() => window.trackApplicationClick?.("investment_hero")}
                >
                  <Link href="https://r.mtg-app.com/robbhullar" target="_blank" rel="noopener noreferrer">
                    Get Investment Rates
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
                    ROI Calculator
                  </Link>
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-[#D4AF37]">20%</div>
                  <div className="text-sm text-black">Min Down</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#D4AF37]">10+</div>
                  <div className="text-sm text-black">Properties</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#D4AF37]">Commercial</div>
                  <div className="text-sm text-black">Available</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <h3 className="text-2xl font-bold text-[#1D2D44] mb-6">Investment Property Consultation</h3>
                <ContactForm variant="hero" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Types Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1D2D44] mb-4">Investment Property Types We Finance</h2>
            <p className="text-xl text-black max-w-3xl mx-auto">
              From single rental units to large commercial properties, we have financing solutions for every investment
              strategy.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Building className="w-8 h-8" />,
                title: "Single Family Rentals",
                description: "Houses, townhomes, and condos for rental income",
                features: ["20% down minimum", "Competitive rates", "Quick approvals"],
                downPayment: "20%",
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Multi-Unit Properties",
                description: "Duplexes, triplexes, and small apartment buildings",
                features: ["Portfolio lending", "Cash flow analysis", "Flexible terms"],
                downPayment: "25%",
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Commercial Properties",
                description: "Office buildings, retail spaces, and warehouses",
                features: ["Custom financing", "Long-term rates", "Professional service"],
                downPayment: "30%",
              },
            ].map((property, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <div className="w-16 h-16 bg-[#F4F6F8] rounded-lg flex items-center justify-center text-[#1D2D44] mb-4">
                    {property.icon}
                  </div>
                  <CardTitle className="text-xl text-[#1D2D44]">{property.title}</CardTitle>
                  <CardDescription className="text-black">{property.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-[#D4AF37] mb-1">{property.downPayment}</div>
                    <div className="text-sm text-black">Minimum Down Payment</div>
                  </div>
                  <ul className="space-y-2">
                    {property.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-black">
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

      {/* Investment Strategies Section */}
      <section className="py-20 bg-[#F4F6F8]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1D2D44] mb-4">Investment Strategies We Support</h2>
            <p className="text-xl text-black max-w-3xl mx-auto">
              Whether you're just starting or expanding your portfolio, we have financing solutions for your strategy.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg border-l-4 border-l-[#D4AF37]">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center text-[#1D2D44]">
                  <DollarSign className="w-8 h-8 text-[#1D2D44] mr-3" />
                  Buy & Hold Strategy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-black mb-4">
                  Purchase properties for long-term rental income and appreciation. Build wealth through cash flow and
                  equity growth.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-black">Typical Down Payment:</span>
                    <span className="font-bold text-[#D4AF37]">20-25%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-black">Amortization:</span>
                    <span className="font-bold text-[#D4AF37]">25-30 years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-black">Rate Type:</span>
                    <span className="font-bold text-[#D4AF37]">Fixed or Variable</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg border-l-4 border-l-[#D4AF37]">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center text-[#1D2D44]">
                  <TrendingUp className="w-8 h-8 text-[#1D2D44] mr-3" />
                  Fix & Flip Strategy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-black mb-4">
                  Short-term financing for property renovation and quick resale. Fast approvals and flexible terms.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-black">Typical Down Payment:</span>
                    <span className="font-bold text-[#D4AF37]">25-35%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-black">Term:</span>
                    <span className="font-bold text-[#D4AF37]">6-24 months</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-black">Rate Type:</span>
                    <span className="font-bold text-[#D4AF37]">Variable/Bridge</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section id="calculator" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <ROICalculator />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1D2D44] mb-4">
              Why Choose Me for Investment Financing?
            </h2>
            <p className="text-xl text-black max-w-3xl mx-auto">
              Specialized expertise in investment property financing with access to lenders who understand real estate
              investing.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Portfolio Lending",
                description: "Finance multiple properties with one lender",
                benefit: "Streamlined process",
              },
              {
                title: "Cash Flow Analysis",
                description: "Detailed rental income assessments",
                benefit: "Maximize borrowing",
              },
              {
                title: "Investor Networks",
                description: "Connect with other real estate professionals",
                benefit: "Grow your business",
              },
              {
                title: "Tax Strategies",
                description: "Optimize your financing for tax benefits",
                benefit: "Increase returns",
              },
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#F4F6F8] rounded-lg flex items-center justify-center text-[#1D2D44] mb-4 mx-auto">
                  <Building className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[#1D2D44] mb-2">{benefit.title}</h3>
                <p className="text-black mb-2">{benefit.description}</p>
                <div className="text-sm font-bold text-[#D4AF37]">{benefit.benefit}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#1D2D44] to-[#D4AF37] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Grow Your Investment Portfolio?</h2>
          <p className="text-xl mb-8 opacity-90">Get specialized financing for your next investment property.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-[#1D2D44] hover:bg-gray-100"
              asChild
              onClick={() => window.trackApplicationClick?.("investment_cta")}
            >
              <Link href="https://r.mtg-app.com/robbhullar" target="_blank" rel="noopener noreferrer">
                Get Investment Rates
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#1D2D44]"
              asChild
              onClick={() => window.trackPhoneClick?.()}
            >
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
