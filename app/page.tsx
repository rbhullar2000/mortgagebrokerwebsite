import { Button } from "@/components/ui/button"
import { NewsletterSubscription } from "@/components/newsletter-subscription"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, MapPin, Calculator, FileText, Users, TrendingUp, Shield, Clock, ArrowRight, Twitter } from "lucide-react"
import Link from "next/link"
import { ContactForm } from "@/components/contact-form"
import { MortgageCalculator } from "@/components/mortgage-calculator"
import { NewsCard } from "@/components/news-card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"

import { blogPosts } from "@/lib/blogPosts"

const featuredPost = blogPosts.find((post) => post.featured)

const otherArticles = blogPosts
  .filter((post) => !post.featured)
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .slice(0, 2)

export default function HomePage() {
  // Blog posts data - in a real implementation, this would come from a CMS or database

  // Get featured article
  const featuredArticle = blogPosts.find((post) => post.featured)

  // Get other recent articles (excluding featured, sorted by date, take 2 most recent)
  const otherArticles = blogPosts
    .filter((post) => !post.featured)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 2)

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#F4F6F8] to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-[#F4F6F8] text-[#032133] hover:bg-[#032133]/10">
                Licensed in British Columbia
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-[#1D2D44] mb-6">
                Your Trusted Mortgage Team in <span className="text-[#D4AF37]">British Columbia</span>
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
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 border-[#D4AF37] text-[#1D2D44] hover:bg-[#D4AF37] hover:text-white bg-transparent"
                  asChild
                >
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
                  Unbiased Rate Comparisons
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border-l-4 border-[#D4AF37]">
                <h3 className="text-2xl font-bold text-[#1D2D44] mb-6">Schedule a Consultation</h3>
                <ContactForm variant="hero" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-[#F4F6F8]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1D2D44] mb-4">Comprehensive Mortgage Services</h2>
            <p className="text-xl text-[#2C2C2C] max-w-3xl mx-auto">
              From first-time homebuyers to seasoned investors, we provide tailored mortgage solutions for every
              situation.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-8 h-8 text-[#1D2D44]" />,
                title: "First-Time Homebuyers",
                description: "Navigate your first home purchase with confidence. Special programs and rates available.",
                features: ["Down payment assistance", "First-time buyer programs", "Step-by-step guidance"],
                link: "/purchase",
              },
              {
                icon: <TrendingUp className="w-8 h-8 text-[#1D2D44]" />,
                title: "Mortgage Renewals",
                description: "Don't auto-renew! We'll find you better rates and terms when your mortgage comes due.",
                features: ["Rate comparison", "Term optimization", "No-cost renewals"],
                link: "/renewal",
              },
              {
                icon: <FileText className="w-8 h-8 text-[#1D2D44]" />,
                title: "Refinancing",
                description: "Access your home's equity or consolidate debt with competitive refinancing options.",
                features: ["Debt consolidation", "Home improvements", "Investment opportunities"],
                link: "/refinance",
              },
              {
                icon: <Calculator className="w-8 h-8 text-[#1D2D44]" />,
                title: "Investment Properties",
                description: "Specialized financing for real estate investors and rental property purchases.",
                features: ["Investment strategies", "Portfolio lending", "Commercial options"],
                link: "/investment",
              },
              {
                icon: <Shield className="w-8 h-8 text-[#1D2D44]" />,
                title: "Self-Employed Solutions",
                description: "Alternative documentation programs for entrepreneurs and self-employed professionals.",
                features: ["Bank statement programs", "Asset-based lending", "Flexible verification"],
                link: "/self-employed",
              },
              {
                icon: <Clock className="w-8 h-8 text-[#1D2D44]" />,
                title: "Quick Closings",
                description: "Fast-track approvals for time-sensitive purchases and competitive offers.",
                features: ["24-48 hour approvals", "Same-day pre-approvals", "Priority processing"],
                link: "/quick-closings",
              },
            ].map((service, index) => (
              <Card key={index} className="bg-white shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-[#F4F6F8] rounded-lg flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl text-[#1D2D44]">{service.title}</CardTitle>
                  <CardDescription className="text-gray-700">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-[#D4AF37] rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="link" className="p-0 text-[#1D2D44] font-medium" asChild>
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
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1D2D44] mb-4">Mortgage Payment Calculator</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get an instant estimate of your monthly mortgage payments and see how different rates and terms affect
              your budget.
            </p>
          </div>
          <MortgageCalculator />
          <div className="text-center mt-8">
            {/*    <Button size="lg" className="bg-[#032133] hover:bg-[#032133]/90" asChild>
              <Link href="https://r.mtg-app.com/robbhullar" target="_blank" rel="noopener noreferrer">
                Start Your Application Now
              </Link>
            </Button>
            <p className="text-sm text-gray-500 mt-3">Complete your mortgage application online</p> */}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="/headshot.png?height=600&width=500"
                alt="Rob Bhullar - Mortgage Broker"
                className="rounded-2xl shadow-2xl w-96 mx-auto"
              />
            </div>
            <div>
              <Badge className="mb-4 bg-[#F4F6F8] text-[#032133] hover:bg-[#032133]/10">
                About Rob S. Bhullar, BSc
              </Badge>

              <h2 className="text-3xl lg:text-4xl font-bold text-[#1D2D44] mb-6">Mortgage Professional</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                With 20+ years of experience in the financial industry, I help BC homeowners, investors, and first-time buyers navigate mortgage decisions with confidence and clarity. Blending deep analytics with lending expertise and a client-first approach, I focus on delivering fast, stress-free solutions tailored to your financial goals.
              </p>
                <div className="space-y-4 mb-8">
                {[
                  "Licensed Mortgage Professional with BRX Mortgage in British Columbia",
                  "Hands-on experience managing risk, optimizing client outcomes, and aligning mortgage structures with long-term goals",
                  "Expert in complex approvals, debt consolidation, and investor financing",
                  "Bachelor of Science in Mathematics with a Minor in Business Administration from Simon Fraser University",
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-[#032133] rounded-full mr-4"></div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-6 mb-8 items-center text-center">
                {/* Column 1: Text */}
                <div className="flex flex-col items-center justify-center w-24 h-18">
                  <div className="text-3xl font-bold text-[#D4AF37]">20+ years</div>
                  <div className="text-sm text-gray-600">in Financial Industry</div>
                </div>

                {/* Column 2: BC Mortgage Logo */}
                <div className="w-24 h-18 flex items-center justify-center">
                  <Image
                    src="/BCmortgageteamlogo.jpeg"
                    alt="BC Mortgage Team"
                    width={96}
                    height={72}
                    className="object-contain w-full h-full"
                  />
                </div> 

                {/* Column 3: BRX Logo */}
                <div className="w-24 h-18 flex items-center justify-center">
                  <Image
                    src="/BRX_brand_black.png"
                    alt="BRX Mortgage"
                    width={96}
                    height={72}
                    className="object-contain w-full h-full"
                  />
                </div>
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
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#D4AF37] text-[#1D2D44] hover:bg-[#D4AF37] hover:text-white bg-transparent"
                  asChild
                >
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
      <section id="lenders" className="py-20 bg-[#F4F6F8]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1D2D44] mb-4">Trusted Lending Partners</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work with 50+ lenders including major banks, credit unions, and alternative lenders to find you the
              best rates and terms.
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
              <div className="w-16 h-16 bg-[#F4F6F8] rounded-lg flex items-center justify-center text-[#032133] mb-4 mx-auto">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-[#1D2D44] mb-2">Big Banks</h3>
              <p className="text-gray-600">
                Competitive mortgage options backed by established financial institutions. Ideal for borrowers seeking
                stability, reliability, and flexible term choices from trusted nationwide lenders.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#F4F6F8] rounded-lg flex items-center justify-center text-[#032133] mb-4 mx-auto">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-[#1D2D44] mb-2">Credit Unions</h3>
              <p className="text-gray-600">
                Local credit unions offering competitive rates and personalized service for BC residents.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#F4F6F8] rounded-lg flex items-center justify-center text-[#032133] mb-4 mx-auto">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-[#1D2D44] mb-2">Alternative Lenders</h3>
              <p className="text-gray-600">
                Specialized lenders for unique situations, self-employed, and non-traditional income sources.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#F4F6F8] rounded-lg flex items-center justify-center text-[#032133] mb-4 mx-auto">
                <FileText className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-[#1D2D44] mb-2">Private Lenders</h3>
              <p className="text-gray-600">
                Fast approvals and flexible terms for time-sensitive deals and complex scenarios.
              </p>
            </div>
          </div>

          <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-[#1D2D44] mb-4">Why Work With Multiple Lenders?</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#032133] mb-2">50+</div>
                <div className="text-sm text-gray-600 mb-2">Lending Partners</div>
                <p className="text-xs text-gray-500">More options mean better rates and terms for you</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#032133] mb-2">0.25-0.75%</div>
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
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1D2D44] mb-4">Mortgage News & Updates</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed about the latest mortgage trends, rate changes, and housing market news.
            </p>
          </div>

          {/* Featured Post */}
          {featuredPost && (
            <section className="py-12 bg-white">
              <div className="container mx-auto px-4">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-[#1D2D44]">Featured Article</h2>
                </div>
                <div className="bg-[#F4F6F8] rounded-2xl p-8 border-2 border-[#D4AF37]">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <Badge className="mb-4 bg-[#1D2D44] text-white">{featuredPost.category}</Badge>
                      <h3 className="text-3xl font-bold text-[#1D2D44] mb-4">
                        <Link href={featuredPost.slug} className="hover:underline">
                          {featuredPost.title}
                        </Link>
                      </h3>
                      <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">{featuredPost.date}</span>
                        <Button asChild className="bg-[#1D2D44] hover:bg-[#1D2D44]/90">
                          <Link href={featuredPost.slug}>Read Full Article</Link>
                        </Button>
                      </div>
                    </div>
                    <div>
                      <img
                        src={featuredPost.image || "/placeholder.svg"}
                        alt={featuredPost.title}
                        className="rounded-lg shadow-lg w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Other Recent Articles */}
          <div className="grid md:grid-cols-2 gap-8">
            {otherArticles.map((article, index) => (
              <NewsCard
                key={index}
                title={article.title}
                excerpt={article.excerpt}
                date={article.date}
                category={article.category}
                slug={article.slug}
                image={article.image}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="bg-white border-2 border-[#D4AF37] text-[#1D2D44] hover:bg-[#D4AF37] hover:text-white"
              asChild
            >
              <Link href="/blog">
                View All Articles <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#F4F6F8]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1D2D44] mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Contact today for a free consultation, or start your secure online application right away.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Button size="lg" className="bg-[#032133] hover:bg-[#032133]/90" asChild>
                <Link href="https://r.mtg-app.com/robbhullar" target="_blank" rel="noopener noreferrer">
                  Start Application
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left: Contact Form */}
            <div>
              <h3 className="text-2xl font-bold text-[#1D2D44] mb-8">Get Your Free Consultation</h3>
              <ContactForm />
            </div>

            {/* Right: Contact Info + Highlights */}
            <div>
              <h3 className="text-2xl font-bold text-[#1D2D44] mb-8">Contact Information</h3>
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#F4F6F8] rounded-lg flex items-center justify-center text-[#032133]">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1D2D44]">Email</h4>
                    <p className="text-gray-600">contact@bcmortgageteam.com</p>
                    {/*   <p className="text-sm text-gray-500">Thanks for reaching out — we'll be in touch shortly.</p>*/}
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#F4F6F8] rounded-lg flex items-center justify-center text-[#032133]">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1D2D44]">Service Area</h4>
                    <p className="text-gray-600">Greater Vancouver Area</p>
                    <p className="text-sm text-gray-500">Surrey, Vancouver, Burnaby, Richmond & more</p>
                  </div>
                </div>

                {/* Highlights Box */}
                <div className="mt-8 p-6 bg-[#F4F6F8] rounded-lg">
                  <h4 className="font-semibold text-[#1D2D44] mb-2">
                    Why Choose An Independent Mortgage Professional?
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600 list-disc pl-5">
                    <li>No cost for our specialized services</li>
                    <li>Access to rates banks don't advertise</li>
                    <li>Pre-approvals in 24–48 hours</li>
                    <li>Support throughout the entire process</li>
                  </ul>
                </div>

                <div className="mb-8">
                  <NewsletterSubscription />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
