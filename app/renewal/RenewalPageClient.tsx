"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calculator, TrendingUp, Shield, AlertTriangle, CheckCircle } from "lucide-react"
import Link from "next/link"
import { ContactForm } from "@/components/contact-form"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MortgageCalculator } from "@/components/mortgage-calculator"

export default function RenewalPageClient() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-gray-100 text-[#1D2D44] hover:bg-gray-100">
                <AlertTriangle className="w-4 h-4 mr-2 text-[#D4AF37]" />
                Don't Auto-Renew!
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-[#1D2D44] mb-6">
                Save Thousands on Your <span className="text-[#032133]">Mortgage Renewal</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Your bank is counting on you to auto-renew. Don't let them! I'll shop 50+ lenders to find you better
                rates and save you money.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  size="lg"
                  className="bg-[#032133] hover:bg-[#032133]/90"
                  asChild
                  onClick={() => window.trackApplicationClick?.("renewal_hero")}
                >
                  <Link href="https://r.mtg-app.com/robbhullar" target="_blank" rel="noopener noreferrer">
                    Get Better Rate Now
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-[#D4AF37] text-[#1D2D44] hover:bg-[#D4AF37] hover:text-white"
                >
                  <Link href="#calculator">
                    <Calculator className="w-5 h-5 mr-2" />
                    Calculate Savings
                  </Link>
                </Button>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="font-bold text-[#1D2D44] mb-2">Average Client Savings:</h3>
                <div className="text-3xl font-bold text-[#032133]">$3,200/year</div>
                <p className="text-sm text-gray-600">Based on $500K mortgage, 0.5% rate improvement</p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <h3 className="text-2xl font-bold text-[#1D2D44] mb-6">Check Your Renewal Options</h3>
                <ContactForm variant="hero" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Warning Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#F4F6F8] border border-[#D4AF37] rounded-lg p-8 mb-12">
              <div className="flex items-start space-x-4">
                <AlertTriangle className="w-8 h-8 text-[#D4AF37] mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-[#1D2D44] mb-4">Don't Make This Costly Mistake!</h3>
                  <p className="text-black mb-4">
                    Most homeowners simply sign their bank's renewal offer without shopping around. This costs the
                    average Canadian homeowner <strong>$3,200 per year</strong> in unnecessary interest payments.
                  </p>
                  <ul className="space-y-2 text-black">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3 text-[#D4AF37]" />
                      Banks offer their existing customers higher rates than new customers
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3 text-[#D4AF37]" />
                      You have 120 days before renewal to shop around
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3 text-[#D4AF37]" />
                      My service is completely FREE for renewals
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-[#F4F6F8]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1D2D44] mb-4">Why Use a Broker for Renewal?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I work for YOU, not the bank. My job is to get you the best possible rate and terms.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Better Rates",
                description: "Access to wholesale rates not available to the public",
                stat: "0.25-0.75%",
                statLabel: "Average Savings",
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "No Cost to You",
                description: "My renewal service is completely free",
                stat: "$0",
                statLabel: "Cost to You",
              },
              {
                icon: <Calculator className="w-8 h-8" />,
                title: "Easy Process",
                description: "I handle all the paperwork and negotiations",
                stat: "2-3 days",
                statLabel: "Process Time",
              },
            ].map((benefit, index) => (
              <Card key={index} className="border-0 shadow-lg text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-[#F4F6F8] rounded-lg flex items-center justify-center text-[#1D2D44] mb-4 mx-auto">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  <CardDescription className="text-gray-600">{benefit.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-[#1D2D44] mb-1">{benefit.stat}</div>
                  <div className="text-sm text-gray-600">{benefit.statLabel}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1D2D44] mb-4">Calculate Your Potential Savings</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how much you could save by getting a better rate on your mortgage renewal.
            </p>
          </div>
          <MortgageCalculator />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#1D2D44] to-[#D4AF37] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Your Renewal is Coming Up?</h2>
          <p className="text-xl mb-8 opacity-90">
            Don't wait until the last minute. Start shopping for better rates today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Button size="lg" variant="secondary" asChild onClick={() => window.trackApplicationClick?.("renewal_cta")}>
              <Link href="https://r.mtg-app.com/robbhullar" target="_blank" rel="noopener noreferrer">
                Check My Options
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-[#D4AF37] text-[#1D2D44] hover:bg-[#D4AF37] hover:text-white"
              onClick={() => window.trackPhoneClick?.()}
            >
              {/*   <Link href="tel:+16041234567">
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
