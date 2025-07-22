import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ContactForm } from "@/components/contact-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft, TrendingUp, Calculator, DollarSign, AlertTriangle, Info, BookOpen } from "lucide-react"

export default function BondYieldsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-4">
            <Link href="/" className="flex items-center text-[#032133] hover:text-[#D4AF37]">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#1D2D44] mb-4">Understanding Bond Yields and Mortgage Rates</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn how Government of Canada bond yields influence mortgage rates and what this means for your home
            financing decisions.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Main Article */}
          <div className="lg:col-span-2 space-y-8">
            {/* What Are Bond Yields */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-[#1D2D44]">
                  <BookOpen className="w-5 h-5 mr-2 text-[#D4AF37]" />
                  What Are Government of Canada Bond Yields?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>
                  Government of Canada bonds are debt securities issued by the federal government to finance its
                  operations. When you buy a government bond, you're essentially lending money to the government in
                  exchange for regular interest payments and the return of your principal when the bond matures.
                </p>
                <p>
                  The <strong>yield</strong> is the annual return you receive on your investment, expressed as a
                  percentage. Bond yields move inversely to bond prices - when bond prices go up, yields go down, and
                  vice versa.
                </p>
                <div className="bg-[#F4F6F8] p-4 rounded-lg">
                  <h4 className="font-semibold text-[#1D2D44] mb-2">Key Bond Terms:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>
                      <strong>2-Year Bond:</strong> Short-term government debt, influences variable mortgage rates
                    </li>
                    <li>
                      <strong>5-Year Bond:</strong> Medium-term debt, closely tied to 5-year fixed mortgage rates
                    </li>
                    <li>
                      <strong>10-Year Bond:</strong> Long-term debt, affects longer mortgage terms
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* The Connection */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-[#1D2D44]">
                  <TrendingUp className="w-5 h-5 mr-2 text-[#D4AF37]" />
                  How Bond Yields Affect Mortgage Rates
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>
                  Mortgage lenders use Government of Canada bond yields as a benchmark when setting their rates. Here's
                  why this relationship exists:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-2">When Bond Yields Fall:</h4>
                    <ul className="space-y-1 text-sm text-green-700">
                      <li>• Fixed mortgage rates typically decrease</li>
                      <li>• Borrowing becomes more affordable</li>
                      <li>• Housing market activity often increases</li>
                      <li>• Refinancing becomes more attractive</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                    <h4 className="font-semibold text-red-800 mb-2">When Bond Yields Rise:</h4>
                    <ul className="space-y-1 text-sm text-red-700">
                      <li>• Fixed mortgage rates typically increase</li>
                      <li>• Borrowing becomes more expensive</li>
                      <li>• Housing market may cool down</li>
                      <li>• Rate holds become more valuable</li>
                    </ul>
                  </div>
                </div>
                <p>
                  The 5-year Government of Canada bond yield is particularly important because it's the primary
                  benchmark for 5-year fixed mortgage rates - the most popular mortgage term in Canada.
                </p>
              </CardContent>
            </Card>

            {/* Factors That Influence Bond Yields */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-[#1D2D44]">
                  <Info className="w-5 h-5 mr-2 text-[#D4AF37]" />
                  What Influences Bond Yields?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>Several economic factors can cause bond yields to fluctuate:</p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-[#1D2D44] mb-3">Economic Factors:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-[#D4AF37] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        <span>
                          <strong>Inflation:</strong> Higher inflation expectations push yields up
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-[#D4AF37] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        <span>
                          <strong>Economic Growth:</strong> Strong growth can increase yields
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-[#D4AF37] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        <span>
                          <strong>Employment:</strong> Low unemployment can drive yields higher
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1D2D44] mb-3">Policy & Market Factors:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-[#D4AF37] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        <span>
                          <strong>Bank of Canada Policy:</strong> Rate decisions influence yields
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-[#D4AF37] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        <span>
                          <strong>Global Events:</strong> International crises affect demand
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-[#D4AF37] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        <span>
                          <strong>Supply & Demand:</strong> Bond auction results impact yields
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Practical Implications */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-[#1D2D44]">
                  <Calculator className="w-5 h-5 mr-2 text-[#D4AF37]" />
                  What This Means for Your Mortgage
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>
                  Understanding the bond yield-mortgage rate relationship can help you make better timing decisions:
                </p>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-blue-800 mb-2">For Home Buyers:</h4>
                    <p className="text-sm text-blue-700">
                      Monitor bond yield trends when shopping for a mortgage. Rising yields may signal higher rates
                      ahead, making rate holds more valuable. Falling yields might indicate better rates are coming.
                    </p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                    <h4 className="font-semibold text-purple-800 mb-2">For Renewal Clients:</h4>
                    <p className="text-sm text-purple-700">
                      If your renewal is approaching and bond yields are rising, consider locking in your rate early. If
                      yields are falling, you might benefit from waiting closer to your renewal date.
                    </p>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                    <h4 className="font-semibold text-orange-800 mb-2">For Refinancing:</h4>
                    <p className="text-sm text-orange-700">
                      Falling bond yields create refinancing opportunities. Rising yields might make you want to
                      accelerate your refinancing timeline if you're considering it.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Facts */}
            <Card>
              <CardHeader>
                <CardTitle className="text-[#1D2D44]">Quick Facts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center text-sm">
                  <DollarSign className="w-4 h-4 mr-2 text-[#D4AF37]" />
                  <span>5-year bonds closely track 5-year mortgage rates</span>
                </div>
                <div className="flex items-center text-sm">
                  <TrendingUp className="w-4 h-4 mr-2 text-[#D4AF37]" />
                  <span>Yields and mortgage rates move in the same direction</span>
                </div>
                <div className="flex items-center text-sm">
                  <AlertTriangle className="w-4 h-4 mr-2 text-[#D4AF37]" />
                  <span>Economic uncertainty can cause yield volatility</span>
                </div>
                <div className="flex items-center text-sm">
                  <Calculator className="w-4 h-4 mr-2 text-[#D4AF37]" />
                  <span>A 1% yield change ≈ 1% mortgage rate change</span>
                </div>
              </CardContent>
            </Card>

            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-[#1D2D44]">Get Rate Protection</CardTitle>
                <CardDescription>Secure your mortgage rate and protect against future increases</CardDescription>
              </CardHeader>
              <CardContent>
                <ContactForm variant="compact" />
              </CardContent>
            </Card>

            {/* Additional Resources */}
            <Card>
              <CardHeader>
                <CardTitle className="text-[#1D2D44]">Related Resources</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" size="sm" className="w-full justify-start bg-transparent" asChild>
                  <Link href="/blog">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Mortgage Market Updates
                  </Link>
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start bg-transparent" asChild>
                  <Link href="/">
                    <Calculator className="w-4 h-4 mr-2" />
                    Mortgage Calculator
                  </Link>
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start bg-transparent" asChild>
                  <Link href="/renewal">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    Renewal Options
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-[#032133] to-[#1D2D44] text-white p-8 rounded-2xl">
          <h2 className="text-2xl font-bold mb-4">Stay Informed About Rate Changes</h2>
          <p className="text-lg mb-6 opacity-90">
            Get personalized rate alerts and expert guidance on timing your mortgage decisions based on market
            conditions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-[#032133]" asChild>
              <Link href="https://r.mtg-app.com/robbhullar" target="_blank" rel="noopener noreferrer">
                Start Your Application
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#032133] bg-transparent"
              asChild
            >
              <Link href="#contact">Schedule Consultation</Link>
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
