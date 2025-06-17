"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Briefcase, FileText, CheckCircle, Users, TrendingUp } from "lucide-react"
import Link from "next/link"
import { ContactForm } from "@/components/contact-form"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function SelfEmployedPageClient() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-slate-100 text-[#032133] hover:bg-[#032133]/10">Self-Employed Specialist</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Mortgages for <span className="text-[#032133]">Entrepreneurs</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Self-employed? Business owner? Contractor? I specialize in alternative documentation programs that work
                with your unique income situation. Get approved when banks say no.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  size="lg"
                  className="bg-[#032133] hover:bg-[#032133]/90"
                  asChild
                  onClick={() => window.trackApplicationClick?.("self_employed_hero")}
                >
                  <Link href="https://r.mtg-app.com/robbhullar" target="_blank" rel="noopener noreferrer">
                    Get Pre-Approved
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#programs">
                    <FileText className="w-5 h-5 mr-2" />
                    View Programs
                  </Link>
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-[#032133]">5%</div>
                  <div className="text-sm text-gray-600">Min Down</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#032133]">No T4</div>
                  <div className="text-sm text-gray-600">Required</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#032133]">24hrs</div>
                  <div className="text-sm text-gray-600">Approval</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Self-Employed Assessment</h3>
                <ContactForm variant="hero" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Alternative Documentation Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Traditional income verification doesn't work for everyone. These programs are designed for self-employed
              professionals.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FileText className="w-8 h-8" />,
                title: "Bank Statement Program",
                description: "Use 12-24 months of bank statements to verify income",
                features: ["No tax returns required", "Deposits analyzed", "Quick approval"],
                downPayment: "10%",
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Stated Income Program",
                description: "Declare your income with minimal documentation",
                features: ["Asset verification", "Credit score focus", "Flexible terms"],
                downPayment: "20%",
              },
              {
                icon: <Briefcase className="w-8 h-8" />,
                title: "Asset-Based Lending",
                description: "Qualify based on your assets rather than income",
                features: ["Investment portfolios", "Real estate equity", "Business assets"],
                downPayment: "25%",
              },
            ].map((program, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <div className="w-16 h-16 bg-slate-100 rounded-lg flex items-center justify-center text-[#032133] mb-4">
                    {program.icon}
                  </div>
                  <CardTitle className="text-xl">{program.title}</CardTitle>
                  <CardDescription className="text-gray-600">{program.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-[#032133] mb-1">{program.downPayment}</div>
                    <div className="text-sm text-gray-600">Minimum Down Payment</div>
                  </div>
                  <ul className="space-y-2">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-[#032133] mr-3" />
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

      {/* Who We Help Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Who We Help</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              If you're self-employed or have non-traditional income, we have solutions that work for your situation.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Business Owners",
                examples: ["Incorporated businesses", "Sole proprietors", "Partnerships", "Franchisees"],
              },
              {
                title: "Contractors",
                examples: ["Construction", "IT consultants", "Freelancers", "Tradespeople"],
              },
              {
                title: "Professionals",
                examples: ["Doctors", "Lawyers", "Accountants", "Real estate agents"],
              },
              {
                title: "Investors",
                examples: ["Day traders", "Real estate investors", "Portfolio managers", "Crypto traders"],
              },
            ].map((category, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <div className="w-16 h-16 bg-slate-100 rounded-lg flex items-center justify-center text-[#032133] mb-4 mx-auto">
                    <Users className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl text-center">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.examples.map((example, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-[#032133] mr-3" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">What You'll Need</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simplified documentation requirements designed for self-employed professionals.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-green-800">✓ What We Need</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <span>12-24 months bank statements</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <span>Credit report and score</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <span>Down payment verification</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <span>Business license (if applicable)</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <span>Asset statements</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-red-800">✗ What We Don't Need</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-red-600 text-xs">✗</span>
                    </div>
                    <span>T4 slips or employment letters</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-red-600 text-xs">✗</span>
                    </div>
                    <span>Two years of tax returns (some programs)</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-red-600 text-xs">✗</span>
                    </div>
                    <span>Detailed income verification</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-red-600 text-xs">✗</span>
                    </div>
                    <span>Employment history</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-red-600 text-xs">✗</span>
                    </div>
                    <span>Lengthy approval process</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#032133] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Get Approved?</h2>
          <p className="text-xl mb-8 opacity-90">Don't let traditional lending hold back your homeownership dreams.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Button
              size="lg"
              variant="secondary"
              asChild
              onClick={() => window.trackApplicationClick?.("self_employed_cta")}
            >
              <Link href="https://r.mtg-app.com/robbhullar" target="_blank" rel="noopener noreferrer">
                Apply Now
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild onClick={() => window.trackPhoneClick?.()}>
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
