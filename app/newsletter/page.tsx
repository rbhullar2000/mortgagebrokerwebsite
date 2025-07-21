import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { NewsletterSubscription } from "@/components/newsletter-subscription"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  TrendingUp,
  Mail,
  Clock,
  Shield,
  Users,
  CheckCircle,
  Star,
  ArrowRight,
  Calculator,
  FileText,
  Bell,
} from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Subscribe to BC Mortgage Team Newsletter | Latest Rates & Market Updates",
  description:
    "Get exclusive mortgage insights, rate updates, and expert tips delivered to your inbox. Join 1000+ BC homeowners staying informed about the mortgage market.",
  keywords: "mortgage newsletter, BC mortgage rates, housing market updates, mortgage tips, Vancouver mortgage news",
  openGraph: {
    title: "Subscribe to BC Mortgage Team Newsletter",
    description: "Get exclusive mortgage insights, rate updates, and expert tips delivered to your inbox.",
    url: "https://bcmortgageteam.com/newsletter",
    siteName: "BC Mortgage Team",
    locale: "en_CA",
    type: "website",
  },
}

export default function NewsletterPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#032133] to-[#1D2D44]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-[#D4AF37] text-[#032133] hover:bg-[#D4AF37]/90 text-lg px-4 py-2">
              <Mail className="w-5 h-5 mr-2" />
              Free Newsletter
            </Badge>

            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Stay Ahead of the
              <span className="text-[#D4AF37]"> Mortgage Market</span>
            </h1>

            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Get exclusive mortgage insights, rate forecasts, and expert tips delivered directly to your inbox. Join
              1000+ BC homeowners making smarter mortgage decisions.
            </p>

            <div className="flex items-center justify-center space-x-8 text-gray-300 mb-12">
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2 text-[#D4AF37]" />
                <span>1000+ Subscribers</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2 text-[#D4AF37]" />
                <span>Weekly Updates</span>
              </div>
              <div className="flex items-center">
                <Shield className="w-5 h-5 mr-2 text-[#D4AF37]" />
                <span>No Spam Ever</span>
              </div>
            </div>

            {/* Newsletter Signup Form */}
            <div className="max-w-2xl mx-auto">
              <NewsletterSubscription />
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Get Section */}
      <section className="py-20 bg-[#F4F6F8]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1D2D44] mb-4">What You'll Get Every Week</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our newsletter delivers actionable mortgage insights that help you save money and make informed decisions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <TrendingUp className="w-8 h-8 text-[#032133]" />,
                title: "Rate Forecasts & Analysis",
                description:
                  "Expert predictions on where mortgage rates are heading and what it means for your mortgage strategy.",
                features: ["Bank of Canada insights", "Market trend analysis", "Timing recommendations"],
              },
              {
                icon: <Calculator className="w-8 h-8 text-[#032133]" />,
                title: "Exclusive Tools & Calculators",
                description: "Access to premium mortgage calculators and tools not available to the general public.",
                features: ["Advanced payment calculators", "Refinancing analyzers", "Investment property tools"],
              },
              {
                icon: <FileText className="w-8 h-8 text-[#032133]" />,
                title: "Market Updates & News",
                description:
                  "Breaking news about policy changes, new programs, and market developments affecting BC homeowners.",
                features: ["Policy change alerts", "New program announcements", "Local market insights"],
              },
              {
                icon: <Bell className="w-8 h-8 text-[#032133]" />,
                title: "Rate Drop Alerts",
                description:
                  "Be the first to know when rates drop significantly or when special promotions become available.",
                features: ["Instant rate alerts", "Limited-time offers", "Renewal reminders"],
              },
              {
                icon: <Users className="w-8 h-8 text-[#032133]" />,
                title: "Success Stories & Tips",
                description:
                  "Real client stories and practical tips from successful mortgage transactions and refinances.",
                features: ["Client case studies", "Money-saving strategies", "Common mistake prevention"],
              },
              {
                icon: <Shield className="w-8 h-8 text-[#032133]" />,
                title: "Expert Q&A Sessions",
                description: "Answers to subscriber questions and deep dives into complex mortgage topics.",
                features: ["Subscriber Q&A", "Expert explanations", "Strategy discussions"],
              },
            ].map((benefit, index) => (
              <Card
                key={index}
                className="bg-white shadow-lg hover:shadow-xl transition-shadow border-l-4 border-[#D4AF37]"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-[#F4F6F8] rounded-lg flex items-center justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-xl text-[#1D2D44]">{benefit.title}</CardTitle>
                  <CardDescription className="text-gray-600">{benefit.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {benefit.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-[#D4AF37] mr-3 flex-shrink-0" />
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

      {/* Social Proof Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1D2D44] mb-4">What Subscribers Are Saying</h2>
            <p className="text-xl text-gray-600">Join hundreds of BC homeowners who rely on our insights</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Sarah M.",
                location: "Vancouver, BC",
                quote:
                  "Rob's newsletter helped me save $18,000 by timing my renewal perfectly. The rate forecasts are incredibly accurate!",
                rating: 5,
              },
              {
                name: "David L.",
                location: "Surrey, BC",
                quote:
                  "I never miss an issue. The market insights have helped me make better decisions for my investment properties.",
                rating: 5,
              },
              {
                name: "Jennifer K.",
                location: "Burnaby, BC",
                quote:
                  "The exclusive tools and calculators alone are worth subscribing. Plus, Rob's explanations make complex topics easy to understand.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-[#F4F6F8] border-none">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-[#D4AF37] fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold text-[#1D2D44]">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Newsletter Preview */}
      <section className="py-20 bg-[#F4F6F8]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1D2D44] mb-4">Recent Newsletter Highlights</h2>
            <p className="text-xl text-gray-600">See what you've been missing</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-white shadow-xl">
              <CardHeader className="bg-[#032133] text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl">BC Mortgage Weekly - January 2025</CardTitle>
                    <CardDescription className="text-gray-300">Rate Forecast Special Edition</CardDescription>
                  </div>
                  <Badge className="bg-[#D4AF37] text-[#032133]">Latest Issue</Badge>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-[#1D2D44] mb-2">📈 This Week's Highlights:</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-[#D4AF37] mr-3 mt-0.5 flex-shrink-0" />
                        <span>
                          <strong>Rate Alert:</strong> Variable rates expected to drop 0.25% by March 2025
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-[#D4AF37] mr-3 mt-0.5 flex-shrink-0" />
                        <span>
                          <strong>New Program:</strong> First-time buyer incentive expanded in BC
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-[#D4AF37] mr-3 mt-0.5 flex-shrink-0" />
                        <span>
                          <strong>Market Update:</strong> Vancouver housing inventory up 15% month-over-month
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-[#D4AF37] mr-3 mt-0.5 flex-shrink-0" />
                        <span>
                          <strong>Success Story:</strong> How Sarah saved $24,000 with a strategic refinance
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-[#F4F6F8] p-4 rounded-lg">
                    <p className="text-sm text-gray-600 italic">
                      "This week's analysis of the Bank of Canada's latest announcement and what it means for your
                      mortgage strategy..."
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#032133] to-[#1D2D44]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Don't Miss Out on Market-Moving News</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join BC's most trusted mortgage newsletter. It's free, informative, and could save you thousands.
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-[#D4AF37] mb-2">$18,000</div>
                  <div className="text-white text-sm">Average subscriber savings</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#D4AF37] mb-2">1000+</div>
                  <div className="text-white text-sm">Active subscribers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#D4AF37] mb-2">5★</div>
                  <div className="text-white text-sm">Average rating</div>
                </div>
              </div>
            </div>

            <div className="max-w-2xl mx-auto mb-8">
              <NewsletterSubscription />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-[#032133]"
                asChild
              >
                <Link href="/blog">
                  <FileText className="w-5 h-5 mr-2" />
                  Read Recent Articles
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-[#032133]"
                asChild
              >
                <Link href="/#contact">
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Contact Rob Directly
                </Link>
              </Button>
            </div>

            <p className="text-sm text-gray-400 mt-6">
              No spam, ever. Unsubscribe with one click. Your email is safe with us.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
