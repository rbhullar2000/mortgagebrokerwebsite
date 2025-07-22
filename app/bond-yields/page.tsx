import { BondYieldChart } from "@/components/bond-yield-chart"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ContactForm } from "@/components/contact-form"
import Link from "next/link"
import { ArrowLeft, TrendingUp, Calculator } from "lucide-react"

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

        {/* Main Chart */}
        <div className="mb-12">
          <BondYieldChart />
        </div>

        {/* Additional Information */}
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-2xl font-bold text-[#1D2D44] mb-6">Understanding Bond Yields & Mortgage Rates</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Government of Canada bond yields are a key benchmark for fixed mortgage rates in Canada. When bond
                yields rise, lenders typically increase their fixed mortgage rates to maintain their profit margins.
              </p>
              <p>
                The 5-year Government of Canada bond yield is particularly important because it closely correlates with
                5-year fixed mortgage rates, which are the most popular mortgage term in Canada.
              </p>
              <div className="bg-[#F4F6F8] p-4 rounded-lg">
                <h3 className="font-semibold text-[#1D2D44] mb-2">Why This Matters to You:</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <TrendingUp className="w-4 h-4 mr-2 text-[#D4AF37]" />
                    Rising yields = Higher fixed mortgage rates
                  </li>
                  <li className="flex items-center">
                    <TrendingUp className="w-4 h-4 mr-2 text-[#D4AF37]" />
                    Falling yields = Lower fixed mortgage rates
                  </li>
                  <li className="flex items-center">
                    <Calculator className="w-4 h-4 mr-2 text-[#D4AF37]" />
                    Rate changes can significantly impact your monthly payments
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#1D2D44] mb-6">Get Rate Protection Today</h3>
            <div className="bg-[#F4F6F8] p-6 rounded-lg">
              <p className="text-gray-700 mb-6">
                With bond yields trending upward, now might be the perfect time to secure your mortgage rate. Get a free
                rate hold and protect yourself from further increases.
              </p>
              <ContactForm variant="compact" />
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-[#032133] to-[#1D2D44] text-white p-8 rounded-2xl">
          <h2 className="text-2xl font-bold mb-4">Stay Ahead of Rate Changes</h2>
          <p className="text-lg mb-6 opacity-90">
            Get personalized rate alerts and expert guidance on timing your mortgage decisions.
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
