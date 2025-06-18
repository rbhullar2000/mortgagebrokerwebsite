import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  Mail,
  MapPin,
  Calculator,
  FileText,
  Users,
  TrendingUp,
  Shield,
  Clock,
  ArrowRight,
  Twitter,
} from "lucide-react"
import Link from "next/link"
import { ContactForm } from "@/components/contact-form"
import { MortgageCalculator } from "@/components/mortgage-calculator"
import { RateComparisonTool } from "@/components/rate-comparison-tool"
import { NewsCard } from "@/components/news-card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-slate-100 text-[#032133] hover:bg-[#032133]/10">
                Licensed Mortgage Professionals
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Your Trusted Mortgage Team in <span className="text-[#032133]">British Columbia</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Get the best mortgage rates and personalized service. We work with 50+ lenders to find you the perfect
                mortgage solution for your home purchase, renewal, or refinance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-[#032133] hover:bg-[#032133]/90 h-12" asChild>
                  <Link href="https://r.mtg-app.com/robbhullar" target="_blank" rel="noopener noreferrer">
                    Start Your Application
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="h-12" asChild>
                  <Link href="#calculator">
                    <Calculator className="w-5 h-5 mr-2" />
                    Mortgage Calculator
                  </Link>
                </Button>
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-[#032133]" />
                  Licensed & Insured
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-[#032133]" />
                  24/7 Support
                </div>
                <div className="flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-[#032133]" />
                  Best Rates Guaranteed
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Rate Check</h3>
                <ContactForm variant="hero" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Comprehensive Mortgage Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From first-time homebuyers to seasoned investors, we provide tailored mortgage solutions for every
              situation.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-8 h-8" />,
                title: "First-Time Homebuyers",
                description: "Navigate your first home purchase with confidence. Special programs and rates available.",
                features: ["Down payment assistance", "First-time buyer programs", "Step-by-step guidance"],
                link: "/purchase",
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Mortgage Renewals",
                description: "Don't auto-renew! I'll find you better rates and terms when your mortgage comes due.",
                features: ["Rate comparison", "Term optimization", "No-cost renewals"],
                link: "/renewal",
              },
              {
                icon: <FileText className="w-8 h-8" />,
                title: "Refinancing",
                description: "Access your home's equity or consolidate debt with competitive refinancing options.",
                features: ["Debt consolidation", "Home improvements", "Investment opportunities"],
                link: "/refinance",
              },
              {
                icon: <Calculator className="w-8 h-8" />,
                title: "Investment Properties",
                description: "Specialized financing for real estate investors and rental property purchases.",
                features: ["Investment strategies", "Portfolio lending", "Commercial options"],
                link: "/investment",
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Self-Employed Solutions",
                description: "Alternative documentation programs for entrepreneurs and self-employed professionals.",
                features: ["Bank statement programs", "Asset-based lending", "Flexible verification"],
                link: "/self-employed",
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Quick Closings",
                description: "Fast-track approvals for time-sensitive purchases and competitive offers.",
                features: ["24-48 hour approvals", "Same-day pre-approvals", "Priority processing"],
                link: "/quick-closings",
              },
            ].map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-slate-100 rounded-lg flex items-center justify-center text-[#032133] mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-[#032133] rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="link" className="p-0 text-[#032133]" asChild>
                    <Link href={service.link}>
                      Learn more <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Rate Comparison Tool Section */}
      {/*  <section id="rates" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Today's Best Mortgage Rates</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Compare rates from 50+ lenders to find the best mortgage solution for your needs.
            </p>
          </div>
          <RateComparisonTool />
          <div className="text-center mt-8">
            <Button size="lg" className="bg-[#032133] hover:bg-[#032133]/90" asChild>
              <Link href="https://r.mtg-app.com/robbhullar" target="_blank" rel="noopener noreferrer">
                Apply for These Rates
              </Link>
            </Button>
          </div>
        </div>
      </section> */}

      {/* Mortgage Calculator Section */}
      <section id="calculator" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Mortgage Payment Calculator</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get an instant estimate of your monthly mortgage payments and see how different rates and terms affect
              your budget.
            </p>
          </div>
          <MortgageCalculator />
          <div className="text-center mt-8">
            <Button size="lg" className="bg-[#032133] hover:bg-[#032133]/90" asChild>
              <Link href="https://r.mtg-app.com/robbhullar" target="_blank" rel="noopener noreferrer">
                Start Your Application Now
              </Link>
            </Button>
            <p className="text-sm text-gray-500 mt-3">Complete your mortgage application online</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="/headshot.png?height=300&width=200"
                alt="Rob Bhullar - Mortgage Broker"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div>
              <Badge className="mb-4 bg-slate-100 text-[#032133] hover:bg-[#032133]/10">About Rob Bhullar</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Lead Mortgage Expert 
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                With over 20 years in the financial industry, I specialize in helping BC homeowners, first-time buyers, and real estate investors secure the right mortgage — with better rates, fewer roadblocks, and expert guidance at every step.
              </p>
              <div className="space-y-4 mb-8">
                {[
  "Licensed Mortgage Broker in British Columbia",
  "Access to 50+ lenders including major banks and credit unions",
  "Expert in complex deals and alternative solutions",
  // "Member of Mortgage Professionals Canada", // safe comment now
].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-[#032133] rounded-full mr-4"></div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#032133]">20+ years</div>
                  <div className="text-sm text-gray-600">Financial Industry</div>
                </div> {/*
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#032133]">$200M+</div>
                  <div className="text-sm text-gray-600">Mortgages Funded</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#032133]">4.9★</div>
                  <div className="text-sm text-gray-600">Client Rating</div>
                </div> */}
              </div> 
              <div className="flex items-center space-x-4 mb-8">
                <span className="text-gray-600">Follow me for market updates:</span>
                <Link
                  href="https://x.com/robbhullar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-[#032133] hover:underline"
                >
                  <Twitter className="w-5 h-5" />
                  <span>@robbhullar</span>
                </Link>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-[#032133] hover:bg-[#032133]/90" asChild>
                  <Link href="#contact">Contact Rob</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="https://r.mtg-app.com/robbhullar" target="_blank" rel="noopener noreferrer">
                    Apply Online
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lenders Section */}
      <section id="lenders" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Trusted Lending Partners</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work with 50+ lenders including major banks, credit unions, and alternative lenders to find you the best
              rates and terms.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 items-center justify-items-center mt-8">
  <img src="scotiabank.png" alt="Scotiabank" className="h-40" />
  <img src="td.png" alt="TD Bank" className="h-40" />
  <img src="firstnational.png" alt="First National" className="h-40" />
  <img src="hometrust.png" alt="Home Trust" className="h-40" />
  <img src="rmg.png" alt="RMG Mortgages" className="h-40" />
</div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-100 rounded-lg flex items-center justify-center text-[#032133] mb-4 mx-auto">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Big Banks</h3>
              <p className="text-gray-600">
                Competitive mortgage options backed by established financial institutions. Ideal for borrowers seeking stability, reliability, and flexible term choices from trusted nationwide lenders.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-slate-100 rounded-lg flex items-center justify-center text-[#032133] mb-4 mx-auto">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Credit Unions</h3>
              <p className="text-gray-600">
                Local credit unions offering competitive rates and personalized service for BC residents.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-slate-100 rounded-lg flex items-center justify-center text-[#032133] mb-4 mx-auto">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Alternative Lenders</h3>
              <p className="text-gray-600">
                Specialized lenders for unique situations, self-employed, and non-traditional income sources.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-slate-100 rounded-lg flex items-center justify-center text-[#032133] mb-4 mx-auto">
                <FileText className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Private Lenders</h3>
              <p className="text-gray-600">
                Fast approvals and flexible terms for time-sensitive deals and complex scenarios.
              </p>
            </div>
          </div>

          <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Work With Multiple Lenders?</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#032133] mb-2">50+</div>
                <div className="text-sm text-gray-600 mb-2">Lending Partners</div>
                <p className="text-xs text-gray-500">More options mean better rates and terms for you</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#032133] mb-2">0.25-0.50%</div>
                <div className="text-sm text-gray-600 mb-2">Average Savings</div>
                <p className="text-xs text-gray-500">Typical rate improvement vs. going direct to bank</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#032133] mb-2">24hrs</div>
                <div className="text-sm text-gray-600 mb-2">Pre-Approval Time</div>
                <p className="text-xs text-gray-500">Fast approvals when you need them most</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mortgage News Section */}
      <section id="news" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Mortgage News & Updates</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed about the latest mortgage trends, rate changes, and housing market news.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <NewsCard
              title="Bank of Canada Cuts Key Interest Rate to 2.75%"
              excerpt="The Bank of Canada reduced its target for the overnight rate to 2.75%, providing significant relief for mortgage holders and homebuyers."
              date="June 13, 2025"
              category="Interest Rates"
              slug="/blog/bank-of-canada-holds-key-interest-rate"
              image="bank-of-canada-building.png"
            />
            <NewsCard
              title="First-Time Home Buyer Programs Enhanced for 2025"
              excerpt="The federal and provincial governments have expanded first-time homebuyer programs with increased assistance and new opportunities."
              date="March 15, 2025"
              category="Government Programs"
              slug="/blog/first-time-home-buyer-incentive-changes"
              image="first-time-homebuyer-family.png"
            />
            <NewsCard
              title="Vancouver Housing Market Recovery Underway"
              excerpt="Vancouver's housing market shows strong signs of recovery as interest rate cuts boost buyer confidence and sales activity."
              date="June 10, 2025"
              category="Market Updates"
              slug="/blog/vancouver-housing-market-update"
              image="vancouver-skyline-housing.png"
            />
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link href="/blog">
                View All Articles <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Contact me today for a free consultation, or start your secure online application right away.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Button size="lg" className="bg-[#032133] hover:bg-[#032133]/90" asChild>
                <Link href="https://r.mtg-app.com/robbhullar" target="_blank" rel="noopener noreferrer">
                  Start Application
                </Link>
              </Button>
              {/* <Button size="lg" variant="outline" asChild>
                <Link href="#contact">Free Consultation</Link>
              </Button> */}
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Get Your Free Consultation</h3>
              <ContactForm />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-[#032133]">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <p className="text-gray-600">+1 (778) 889-7964</p>
                    <p className="text-sm text-gray-500">Available 7 days a week</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-[#032133]">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">mrtg@robbhullar.com</p>
                    <p className="text-sm text-gray-500">Thanks for reaching out — I’ll be in touch shortly.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-[#032133]">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Service Area</h4>
                    <p className="text-gray-600">Greater Vancouver Area</p>
                    <p className="text-sm text-gray-500">Surrey, Vancouver, Burnaby, Richmond & more</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 p-6 bg-[#032133]/5 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Why Choose Me?</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• No cost for my services - lenders pay me</li>
                  <li>• Access to rates banks don't advertise</li>
                  <li>• Pre-approvals in 24-48 hours</li>
                  <li>• Support throughout the entire process</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
