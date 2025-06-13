import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AlertTriangle, Shield, FileText, Clock } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Terms & Conditions | Mortgage Rates | Rob Bhullar BC",
  description:
    "Terms and conditions for mortgage rates and services. Important information about rate quotes, conditions, and mortgage broker services in BC.",
  keywords: "mortgage terms, rate conditions, OAC, mortgage broker terms, BC mortgage conditions",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Terms & Conditions</h1>
            <p className="text-xl text-gray-600">
              Important information about mortgage rates, conditions, and our services.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Important Notice */}
            <Card className="border-l-4 border-orange-500 mb-8">
              <CardHeader>
                <CardTitle className="flex items-center text-orange-800">
                  <AlertTriangle className="w-6 h-6 mr-2" />
                  Important Notice
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  All mortgage rates and information provided are subject to change without notice and are provided for
                  informational purposes only. Final rates and terms are subject to credit approval and may vary based
                  on individual circumstances.
                </p>
              </CardContent>
            </Card>

            {/* Rate Terms */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="w-6 h-6 mr-2 text-[#032133]" />
                  Mortgage Rate Terms & Conditions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Rate Quotes</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>
                      • <strong>Subject to Change:</strong> All rates are subject to change without notice and may vary
                      throughout the day based on market conditions.
                    </li>
                    <li>
                      • <strong>Rate Holds:</strong> Rate holds are available for qualified applicants for up to 120
                      days, subject to lender approval.
                    </li>
                    <li>
                      • <strong>Market Fluctuations:</strong> Rates may increase or decrease based on Bank of Canada
                      announcements, bond market movements, and lender policy changes.
                    </li>
                    <li>
                      • <strong>Individual Rates:</strong> Actual rates offered may differ based on credit score, down
                      payment, property type, and other qualifying factors.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">OAC (On Approved Credit)</h3>
                  <p className="text-gray-700 mb-3">
                    All rates and mortgage products are offered "On Approved Credit" which means:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Credit score requirements vary by lender (typically 600+ minimum)</li>
                    <li>• Income verification and employment confirmation required</li>
                    <li>• Debt-to-income ratios must meet lender guidelines</li>
                    <li>• Property appraisal must meet lender requirements</li>
                    <li>• All information provided must be accurate and verifiable</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Qualifying Conditions</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>
                      • <strong>Stress Test:</strong> All mortgages are subject to federal stress test requirements
                    </li>
                    <li>
                      • <strong>Down Payment:</strong> Minimum down payment requirements apply (5% for purchases under
                      $500K)
                    </li>
                    <li>
                      • <strong>Property Type:</strong> Rates may vary based on property type (condo, detached, etc.)
                    </li>
                    <li>
                      • <strong>Occupancy:</strong> Owner-occupied vs. rental property rates differ
                    </li>
                    <li>
                      • <strong>Amortization:</strong> Maximum amortization periods apply based on down payment
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Service Terms */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="w-6 h-6 mr-2 text-[#032133]" />
                  Mortgage Broker Services
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Our Services</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Mortgage brokerage services are provided at no cost to qualified borrowers</li>
                    <li>• We are compensated by lenders upon successful mortgage funding</li>
                    <li>• We represent multiple lenders and will present suitable options</li>
                    <li>• All advice is provided in good faith based on information provided</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Client Responsibilities</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Provide accurate and complete financial information</li>
                    <li>• Respond promptly to requests for documentation</li>
                    <li>• Notify us immediately of any changes to your financial situation</li>
                    <li>• Review all mortgage documents carefully before signing</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Limitations</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• We cannot guarantee mortgage approval</li>
                    <li>• Final approval is at the sole discretion of the lender</li>
                    <li>• We are not responsible for lender policy changes</li>
                    <li>• Legal and tax advice should be obtained from qualified professionals</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Additional Information */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="w-6 h-6 mr-2 text-[#032133]" />
                  Additional Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Privacy & Confidentiality</h3>
                  <p className="text-gray-700">
                    All personal and financial information is kept strictly confidential and is only shared with lenders
                    for the purpose of obtaining mortgage approval. We comply with all applicable privacy legislation.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Licensing & Regulation</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Licensed under the Mortgage Brokers Act of British Columbia</li>
                    <li>• Member of Mortgage Professionals Canada</li>
                    <li>• Subject to regulatory oversight and compliance requirements</li>
                    <li>• Errors & Omissions insurance coverage maintained</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Dispute Resolution</h3>
                  <p className="text-gray-700">
                    Any disputes regarding our services should first be directed to us for resolution. If unresolved,
                    complaints may be filed with the appropriate regulatory body in British Columbia.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Updates to Terms</h3>
                  <p className="text-gray-700">
                    These terms and conditions may be updated from time to time. The most current version will always be
                    available on our website. Continued use of our services constitutes acceptance of any updates.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Contact Section */}
            <Card className="bg-slate-50">
              <CardContent className="pt-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Questions About These Terms?</h3>
                  <p className="text-gray-600 mb-6">
                    If you have any questions about these terms and conditions or need clarification on any mortgage
                    product, please don't hesitate to contact me.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button className="bg-[#032133] hover:bg-[#032133]/90" asChild>
                      <Link href="/#contact">Contact Rob</Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="tel:+16041234567">Call (604) 123-4567</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Last Updated */}
            <div className="mt-8 text-center text-sm text-gray-500">
              <p>Last updated: June 11, 2024</p>
              <p>
                <Link href="/" className="text-[#032133] hover:underline">
                  Return to Home Page
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
