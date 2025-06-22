"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, TrendingUp, CheckCircle, Users, Briefcase, Building } from "lucide-react"
import Link from "next/link"
import { ContactForm } from "@/components/contact-form"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function SelfEmployedPageClient() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#F4F6F8] to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-[#F4F6F8] text-[#1D2D44] hover:bg-[#1D2D44]/10">Self-Employed Specialist</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-[#1D2D44] mb-6">
                Mortgages for <span className="text-[#D4AF37]">Self-Employed</span> Borrowers
              </h1>
              <p className="text-xl text-black mb-8 leading-relaxed">
                Specialized mortgage solutions for entrepreneurs, contractors, and business owners. Alternative
                documentation programs and bank statement mortgages available.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  size="lg"
                  className="bg-[#1D2D44] hover:bg-[#1D2D44]/90"
                  asChild
                  onClick={() => window.trackApplicationClick?.("self_employed_hero")}
                >
                  <Link href="https://r.mtg-app.com/robbhullar" target="_blank" rel="noopener noreferrer">
                    Get Pre-Approved
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#D4AF37] text-[#1D2D44] hover:bg-[#D4AF37] hover:text-white"
                  asChild
                >
                  <Link href="#programs">
                    <FileText className="w-5 h-5 mr-2" />
                    View Programs
                  </Link>
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-[#D4AF37]">5%</div>
                  <div className="text-sm text-black">Min Down</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#D4AF37]">24hr</div>
                  <div className="text-sm text-black">Pre-Approval</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#D4AF37]">Alt Doc</div>
                  <div className="text-sm text-black">Programs</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border-l-4 border-[#D4AF37]">
                <h3 className="text-2xl font-bold text-[#1D2D44] mb-6">Self-Employed Consultation</h3>
                <ContactForm variant="hero" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Self-Employed Types Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1D2D44] mb-4">Who We Help</h2>
            <p className="text-xl text-black max-w-3xl mx-auto">
              We understand the unique challenges self-employed borrowers face and have specialized programs for various
              business types.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Briefcase className="w-8 h-8" />,
                title: "Business Owners",
                description: "Incorporated businesses, partnerships, and sole proprietors",
                features: ["Corporate tax returns", "Financial statements", "Business bank statements"],
                minDown: "5%",
              },
              {
                icon: <Building className="w-8 h-8" />,
                title: "Contractors & Trades",
                description: "Construction, trades, and contract workers",
                features: ["Contract income", "Seasonal work", "Multiple income sources"],
                minDown: "5%",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Professionals",
                description: "Doctors, lawyers, consultants, and freelancers",
                features: ["Professional income", "Variable earnings", "Commission-based"],
                minDown: "5%",
              },
            ].map((type, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <div className="w-16 h-16 bg-[#F4F6F8] rounded-lg flex items-center justify-center text-[#1D2D44] mb-4">
                    {type.icon}
                  </div>
                  <CardTitle className="text-xl text-[#1D2D44]">{type.title}</CardTitle>
                  <CardDescription className="text-black">{type.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-[#D4AF37] mb-1">{type.minDown}</div>
                    <div className="text-sm text-black">Minimum Down Payment</div>
                  </div>
                  <ul className="space-y-2">
                    {type.features.map((feature, idx) => (
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

      {/* Documentation Programs Section */}
      <section id="programs" className="py-20 bg-[#F4F6F8]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1D2D44] mb-4">Alternative Documentation Programs</h2>
            <p className="text-xl text-black max-w-3xl mx-auto">
              Multiple income verification options designed specifically for self-employed borrowers.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg border-l-4 border-l-[#D4AF37]">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center text-[#1D2D44]">
                  <FileText className="w-8 h-8 text-[#1D2D44] mr-3" />
                  Bank Statement Program
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-black mb-4">
                  Use 12-24 months of business or personal bank statements to qualify. Perfect for borrowers with
                  complex tax situations.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-black">Documentation:</span>
                    <span className="font-bold text-[#D4AF37]">Bank Statements</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-black">Income Calculation:</span>
                    <span className="font-bold text-[#D4AF37]">Deposits Analysis</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-black">Min Down Payment:</span>
                    <span className="font-bold text-[#D4AF37]">10%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg border-l-4 border-l-[#D4AF37]">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center text-[#1D2D44]">
                  <TrendingUp className="w-8 h-8 text-[#1D2D44] mr-3" />
                  Stated Income Program
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-black mb-4">
                  Declare your income with minimal documentation. Ideal for established businesses with strong credit
                  and assets.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-black">Documentation:</span>
                    <span className="font-bold text-[#D4AF37]">Minimal Required</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-black">Credit Score:</span>
                    <span className="font-bold text-[#D4AF37]">680+ Required</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-black">Min Down Payment:</span>
                    <span className="font-bold text-[#D4AF37]">20%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Challenges & Solutions Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1D2D44] mb-4">Common Self-Employed Challenges</h2>
            <p className="text-xl text-black max-w-3xl mx-auto">
              We understand the unique obstacles self-employed borrowers face and have solutions for each.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                challenge: "Tax Write-Offs",
                description: "Business deductions reduce taxable income",
                solution: "Use gross income or bank statement programs",
              },
              {
                challenge: "Variable Income",
                description: "Seasonal or fluctuating earnings",
                solution: "Average income over 2-3 years",
              },
              {
                challenge: "New Business",
                description: "Less than 2 years in business",
                solution: "Alternative lenders and programs",
              },
              {
                challenge: "Complex Finances",
                description: "Multiple income sources and entities",
                solution: "Specialized underwriting expertise",
              },
              {
                challenge: "Credit Challenges",
                description: "Business expenses affecting personal credit",
                solution: "Credit repair and alternative programs",
              },
              {
                challenge: "Documentation",
                description: "Difficulty providing traditional income proof",
                solution: "Bank statements and alternative docs",
              },
            ].map((item, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg text-[#1D2D44]">{item.challenge}</CardTitle>
                  <CardDescription className="text-black">{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-[#F4F6F8] p-4 rounded-lg">
                    <div className="text-sm font-bold text-[#D4AF37] mb-1">Our Solution:</div>
                    <div className="text-sm text-black">{item.solution}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents Section */}
      <section className="py-20 bg-[#F4F6F8]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1D2D44] mb-4">What You'll Need</h2>
            <p className="text-xl text-black max-w-3xl mx-auto">
              Document requirements vary by program. We'll help you choose the best option for your situation.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-[#1D2D44]">Traditional Program</CardTitle>
                <CardDescription className="text-black">Full documentation for best rates</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "2 years personal tax returns (T1 General)",
                    "2 years business tax returns (T2/T1)",
                    "Notice of Assessments",
                    "Financial statements (if incorporated)",
                    "Business license",
                    "Accountant letter (if required)",
                  ].map((doc, idx) => (
                    <li key={idx} className="flex items-center text-sm text-black">
                      <CheckCircle className="w-4 h-4 text-[#D4AF37] mr-3" />
                      {doc}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-[#1D2D44]">Alternative Programs</CardTitle>
                <CardDescription className="text-black">Reduced documentation options</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "12-24 months bank statements",
                    "Business registration/license",
                    "Credit report authorization",
                    "Down payment verification",
                    "Property appraisal",
                    "Income declaration (stated programs)",
                  ].map((doc, idx) => (
                    <li key={idx} className="flex items-center text-sm text-black">
                      <CheckCircle className="w-4 h-4 text-[#D4AF37] mr-3" />
                      {doc}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1D2D44] mb-4">
              Why Choose Us for Self-Employed Mortgages?
            </h2>
            <p className="text-xl text-black max-w-3xl mx-auto">
              Specialized expertise in self-employed lending with access to programs traditional banks don't offer.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Alternative Lenders",
                description: "Access to specialized self-employed programs",
                benefit: "More options",
              },
              {
                title: "Expert Guidance",
                description: "Navigate complex income documentation",
                benefit: "Simplified process",
              },
              {
                title: "Fast Approvals",
                description: "Streamlined underwriting for qualified borrowers",
                benefit: "Quick decisions",
              },
              {
                title: "Competitive Rates",
                description: "Best rates for your specific situation",
                benefit: "Save money",
              },
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#F4F6F8] rounded-lg flex items-center justify-center text-[#1D2D44] mb-4 mx-auto">
                  <Briefcase className="w-8 h-8" />
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
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Get Your Self-Employed Mortgage?</h2>
          <p className="text-xl mb-8 opacity-90">Let's discuss the best program for your unique situation.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-[#1D2D44] hover:bg-gray-100"
              asChild
              onClick={() => window.trackApplicationClick?.("self_employed_cta")}
            >
              <Link href="https://r.mtg-app.com/robbhullar" target="_blank" rel="noopener noreferrer">
                Get Pre-Approved
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#1D2D44]"
              asChild
              onClick={() => window.trackPhoneClick?.()}
            >
              <Link href="#contact">Schedule Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
