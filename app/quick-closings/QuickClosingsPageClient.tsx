"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Zap, CheckCircle, AlertCircle, Target } from "lucide-react"
import Link from "next/link"
import { ContactForm } from "@/components/contact-form"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function QuickClosingsPageClient() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#F4F6F8] to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-[#F4F6F8] text-[#1D2D44] hover:bg-[#F4F6F8]">
                <Zap className="w-4 h-4 mr-2 text-[#D4AF37]" />
                Fast-Track Specialist
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-[#1D2D44] mb-6">
                <span className="text-[#032133]">Lightning Fast</span> Mortgage Approvals
              </h1>
              <p className="text-xl text-black mb-8 leading-relaxed">
                Need to close quickly? Competing in a hot market? We specialize in fast-track approvals and same-day
                pre-approvals to help you win in competitive situations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  size="lg"
                  className="bg-[#032133] hover:bg-[#032133]/90"
                  asChild
                  onClick={() => window.trackApplicationClick?.("quick_closing_hero")}
                >
                  <Link href="https://r.mtg-app.com/robbhullar" target="_blank" rel="noopener noreferrer">
                    Get Same-Day Approval
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  onClick={() => window.trackPhoneClick?.()}
                  className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white"
                >
                  {/*  <Link href="tel:+16041234567">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now
                  </Link> */}
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-[#D4AF37]">2hrs</div>
                  <div className="text-sm text-black">Pre-Approval</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#D4AF37]">24hrs</div>
                  <div className="text-sm text-black">Full Approval</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#D4AF37]">7 days</div>
                  <div className="text-sm text-black">To Close</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border-l-4 border-[#D4AF37]">
                <div className="flex items-center mb-4">
                  <AlertCircle className="w-6 h-6 text-[#D4AF37] mr-2" />
                  <h3 className="text-2xl font-bold text-[#1D2D44]">Urgent Approval Needed?</h3>
                </div>
                <ContactForm variant="hero" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When You Need Speed Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1D2D44] mb-4">When You Need Speed</h2>
            <p className="text-xl text-black max-w-3xl mx-auto">
              In today's competitive market, speed can make the difference between getting your dream home or losing it
              to another buyer.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Target className="w-8 h-8" />,
                title: "Competitive Markets",
                description: "Multiple offers on the same property",
                urgency: "Hours matter",
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Short Closing Dates",
                description: "Seller needs to close quickly",
                urgency: "Days to close",
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Subject Removal",
                description: "Financing condition expires soon",
                urgency: "Immediate action",
              },
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: "Pre-Approval Power",
                description: "Shop with confidence and speed",
                urgency: "Competitive edge",
              },
            ].map((scenario, index) => (
              <Card key={index} className="border-0 shadow-lg text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-[#F4F6F8] rounded-lg flex items-center justify-center text-[#D4AF37] mb-4 mx-auto">
                    {scenario.icon}
                  </div>
                  <CardTitle className="text-xl">{scenario.title}</CardTitle>
                  <CardDescription className="text-black">{scenario.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-lg font-bold text-[#D4AF37]">{scenario.urgency}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Fast-Track Process Section */}
      <section className="py-20 bg-[#F4F6F8]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1D2D44] mb-4">Fast-Track Process</h2>
            <p className="text-xl text-black max-w-3xl mx-auto">
              Streamlined approval process designed for speed without compromising on service quality.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Instant Application",
                description: "Submit your application online or by phone",
                time: "5 minutes",
              },
              {
                step: "2",
                title: "Priority Review",
                description: "Your file goes to the front of the queue",
                time: "30 minutes",
              },
              {
                step: "3",
                title: "Rapid Approval",
                description: "Get your approval letter same day",
                time: "2-24 hours",
              },
              {
                step: "4",
                title: "Quick Close",
                description: "Complete documentation and fund",
                time: "5-7 days",
              },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#1D2D44] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-[#1D2D44] mb-2">{process.title}</h3>
                <p className="text-black mb-2">{process.description}</p>
                <div className="text-sm font-bold text-[#D4AF37]">{process.time}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Fast Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1D2D44] mb-4">What Makes Us Fast</h2>
            <p className="text-xl text-black max-w-3xl mx-auto">
              Years of experience and strong lender relationships enable us to move quickly when you need it most.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Direct Lender Access",
                description: "Skip the middleman with direct underwriter relationships",
                features: ["Priority processing", "Dedicated contacts", "Streamlined communication"],
              },
              {
                title: "Pre-Underwriting",
                description: "Get your file reviewed before you even find a property",
                features: ["Conditional approval", "Known borrowing power", "Faster subject removal"],
              },
              {
                title: "Digital Documentation",
                description: "Electronic signatures and document submission",
                features: ["No paper delays", "Instant transmission", "Real-time updates"],
              },
            ].map((advantage, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <div className="w-16 h-16 bg-[#F4F6F8] rounded-lg flex items-center justify-center text-[#1D2D44] mb-4">
                    <Zap className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl">{advantage.title}</CardTitle>
                  <CardDescription className="text-black">{advantage.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {advantage.features.map((feature, idx) => (
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

      {/* Emergency Contact Section */}
      {/*     <section className="py-20 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center justify-center mb-6">
                <AlertCircle className="w-12 h-12 text-orange-500" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Emergency Mortgage Hotline</h2>
              <p className="text-xl text-gray-600 mb-8">
                Need approval today? Call my emergency line for same-day service. Available 7 days a week.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700" asChild>
                  <Link href="tel:+17788897964">
                    <Phone className="w-5 h-5 mr-2" />
                    Emergency Line: (778) 889-7964
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="https://r.mtg-app.com/robbhullar" target="_blank" rel="noopener noreferrer">
                    Rush Application
                  </Link>
                </Button>
              </div>
              <p className="text-sm text-gray-500 mt-4">Available evenings and weekends for urgent approvals</p>
            </div>
          </div>
        </div>
      </section>
*/}
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#1D2D44] to-[#D4AF37] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Don't Lose Your Dream Home to Slow Financing</h2>
          <p className="text-xl mb-8 opacity-90">Get the speed you need to compete and win in today's market.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Button
              size="lg"
              variant="secondary"
              asChild
              onClick={() => window.trackApplicationClick?.("quick_closing_cta")}
            >
              <Link href="https://r.mtg-app.com/robbhullar" target="_blank" rel="noopener noreferrer">
                Get Fast Approval
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              onClick={() => window.trackPhoneClick?.()}
              className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white"
            >
              {/* <Link href="tel:+17788897964">
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
