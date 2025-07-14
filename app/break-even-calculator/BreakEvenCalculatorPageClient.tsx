"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { ContactForm } from "@/components/contact-form"
import { Calculator, TrendingUp, DollarSign, Clock, AlertCircle, CheckCircle } from "lucide-react"
import Link from "next/link"

interface CalculationResults {
  currentMonthlyPayment: number
  newMonthlyPayment: number
  monthlySavings: number
  breakEvenMonths: number
  breakEvenYears: number
  fiveYearSavings: number
  tenYearSavings: number
  isWorthwhile: boolean
}

export default function BreakEvenCalculatorPageClient() {
  const [currentBalance, setCurrentBalance] = useState<string>("")
  const [currentRate, setCurrentRate] = useState<string>("")
  const [currentAmortization, setCurrentAmortization] = useState<string>("25")
  const [newRate, setNewRate] = useState<string>("")
  const [newAmortization, setNewAmortization] = useState<string>("25")
  const [closingCosts, setClosingCosts] = useState<string>("")
  const [results, setResults] = useState<CalculationResults | null>(null)

  const calculateMonthlyPayment = (principal: number, annualRate: number, amortizationYears: number): number => {
    const monthlyRate = annualRate / 100 / 12
    const numberOfPayments = amortizationYears * 12

    if (monthlyRate === 0) {
      return principal / numberOfPayments
    }

    return (
      (principal * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1)
    )
  }

  const calculateBreakEven = () => {
    const balance = Number.parseFloat(currentBalance)
    const currentRateNum = Number.parseFloat(currentRate)
    const newRateNum = Number.parseFloat(newRate)
    const currentAmortNum = Number.parseFloat(currentAmortization)
    const newAmortNum = Number.parseFloat(newAmortization)
    const costs = Number.parseFloat(closingCosts)

    if (!balance || !currentRateNum || !newRateNum || !costs) return

    const currentPayment = calculateMonthlyPayment(balance, currentRateNum, currentAmortNum)
    const newPayment = calculateMonthlyPayment(balance, newRateNum, newAmortNum)
    const savings = currentPayment - newPayment

    if (savings <= 0) {
      setResults({
        currentMonthlyPayment: currentPayment,
        newMonthlyPayment: newPayment,
        monthlySavings: savings,
        breakEvenMonths: 0,
        breakEvenYears: 0,
        fiveYearSavings: savings * 60,
        tenYearSavings: savings * 120,
        isWorthwhile: false,
      })
      return
    }

    const breakEvenMonths = costs / savings
    const breakEvenYears = breakEvenMonths / 12

    setResults({
      currentMonthlyPayment: currentPayment,
      newMonthlyPayment: newPayment,
      monthlySavings: savings,
      breakEvenMonths,
      breakEvenYears,
      fiveYearSavings: savings * 60 - costs,
      tenYearSavings: savings * 120 - costs,
      isWorthwhile: breakEvenMonths <= 36, // Generally good if break-even is within 3 years
    })
  }

  useEffect(() => {
    if (currentBalance && currentRate && newRate && closingCosts) {
      calculateBreakEven()
    }
  }, [currentBalance, currentRate, newRate, currentAmortization, newAmortization, closingCosts])

  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat("en-CA", {
      style: "currency",
      currency: "CAD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const formatDecimal = (amount: number): string => {
    return new Intl.NumberFormat("en-CA", {
      style: "currency",
      currency: "CAD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#032133] to-[#064a5c] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 p-4 rounded-full">
                <Calculator className="h-12 w-12" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Mortgage Refinance Break-Even Calculator</h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Determine if refinancing your mortgage makes financial sense. Calculate how long it will take to recover
              your refinancing costs through monthly savings.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Clock className="h-4 w-4 mr-2" />
                Break-Even Analysis
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <TrendingUp className="h-4 w-4 mr-2" />
                Long-Term Savings
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <DollarSign className="h-4 w-4 mr-2" />
                Cost Comparison
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Input Form */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calculator className="h-5 w-5" />
                    Mortgage Details
                  </CardTitle>
                  <CardDescription>Enter your current and proposed mortgage information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Current Mortgage */}
                  <div>
                    <h3 className="font-semibold text-lg mb-4 text-[#032133]">Current Mortgage</h3>
                    <div className="grid gap-4">
                      <div>
                        <Label htmlFor="currentBalance">Outstanding Balance</Label>
                        <Input
                          id="currentBalance"
                          type="number"
                          placeholder="500000"
                          value={currentBalance}
                          onChange={(e) => setCurrentBalance(e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="currentRate">Current Interest Rate (%)</Label>
                        <Input
                          id="currentRate"
                          type="number"
                          step="0.01"
                          placeholder="5.25"
                          value={currentRate}
                          onChange={(e) => setCurrentRate(e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="currentAmortization">Remaining Amortization (years)</Label>
                        <Input
                          id="currentAmortization"
                          type="number"
                          placeholder="25"
                          value={currentAmortization}
                          onChange={(e) => setCurrentAmortization(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* New Mortgage */}
                  <div>
                    <h3 className="font-semibold text-lg mb-4 text-[#032133]">New Mortgage Terms</h3>
                    <div className="grid gap-4">
                      <div>
                        <Label htmlFor="newRate">New Interest Rate (%)</Label>
                        <Input
                          id="newRate"
                          type="number"
                          step="0.01"
                          placeholder="4.25"
                          value={newRate}
                          onChange={(e) => setNewRate(e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="newAmortization">New Amortization (years)</Label>
                        <Input
                          id="newAmortization"
                          type="number"
                          placeholder="25"
                          value={newAmortization}
                          onChange={(e) => setNewAmortization(e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="closingCosts">Total Refinancing Costs</Label>
                        <Input
                          id="closingCosts"
                          type="number"
                          placeholder="5000"
                          value={closingCosts}
                          onChange={(e) => setClosingCosts(e.target.value)}
                        />
                        <p className="text-sm text-gray-600 mt-1">
                          Include legal fees, appraisal, discharge fees, etc.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Results */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Break-Even Analysis
                  </CardTitle>
                  <CardDescription>Your refinancing break-even calculation</CardDescription>
                </CardHeader>
                <CardContent>
                  {results ? (
                    <div className="space-y-6">
                      {/* Payment Comparison */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-4 bg-red-50 rounded-lg">
                          <p className="text-sm text-gray-600 mb-1">Current Payment</p>
                          <p className="text-2xl font-bold text-red-600">
                            {formatDecimal(results.currentMonthlyPayment)}
                          </p>
                        </div>
                        <div className="text-center p-4 bg-green-50 rounded-lg">
                          <p className="text-sm text-gray-600 mb-1">New Payment</p>
                          <p className="text-2xl font-bold text-green-600">
                            {formatDecimal(results.newMonthlyPayment)}
                          </p>
                        </div>
                      </div>

                      {/* Monthly Savings */}
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <p className="text-sm text-gray-600 mb-1">Monthly Savings</p>
                        <p className="text-3xl font-bold text-blue-600">
                          {results.monthlySavings > 0
                            ? formatDecimal(results.monthlySavings)
                            : formatDecimal(Math.abs(results.monthlySavings))}
                        </p>
                        {results.monthlySavings <= 0 && (
                          <p className="text-sm text-red-600 mt-1">Higher monthly payment</p>
                        )}
                      </div>

                      {results.monthlySavings > 0 ? (
                        <>
                          {/* Break-Even Point */}
                          <div className="text-center p-6 bg-gradient-to-r from-[#032133] to-[#064a5c] text-white rounded-lg">
                            <div className="flex items-center justify-center mb-2">
                              {results.isWorthwhile ? (
                                <CheckCircle className="h-6 w-6 text-green-400 mr-2" />
                              ) : (
                                <AlertCircle className="h-6 w-6 text-yellow-400 mr-2" />
                              )}
                              <p className="text-lg font-semibold">Break-Even Point</p>
                            </div>
                            <p className="text-3xl font-bold mb-2">{Math.round(results.breakEvenMonths)} months</p>
                            <p className="text-lg opacity-90">({results.breakEvenYears.toFixed(1)} years)</p>
                            <div className="mt-4">
                              {results.isWorthwhile ? (
                                <Badge className="bg-green-500 hover:bg-green-600">Recommended</Badge>
                              ) : (
                                <Badge className="bg-yellow-500 hover:bg-yellow-600">Consider Carefully</Badge>
                              )}
                            </div>
                          </div>

                          {/* Long-term Savings */}
                          <div className="grid grid-cols-2 gap-4">
                            <div className="text-center p-4 bg-gray-50 rounded-lg">
                              <p className="text-sm text-gray-600 mb-1">5-Year Net Savings</p>
                              <p className="text-xl font-bold text-[#032133]">
                                {formatCurrency(results.fiveYearSavings)}
                              </p>
                            </div>
                            <div className="text-center p-4 bg-gray-50 rounded-lg">
                              <p className="text-sm text-gray-600 mb-1">10-Year Net Savings</p>
                              <p className="text-xl font-bold text-[#032133]">
                                {formatCurrency(results.tenYearSavings)}
                              </p>
                            </div>
                          </div>

                          {/* Recommendation */}
                          <div
                            className={`p-4 rounded-lg ${results.isWorthwhile ? "bg-green-50 border border-green-200" : "bg-yellow-50 border border-yellow-200"}`}
                          >
                            <div className="flex items-start gap-3">
                              {results.isWorthwhile ? (
                                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                              ) : (
                                <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                              )}
                              <div>
                                <p
                                  className={`font-semibold ${results.isWorthwhile ? "text-green-800" : "text-yellow-800"}`}
                                >
                                  {results.isWorthwhile ? "Refinancing Recommended" : "Consider Your Timeline"}
                                </p>
                                <p
                                  className={`text-sm mt-1 ${results.isWorthwhile ? "text-green-700" : "text-yellow-700"}`}
                                >
                                  {results.isWorthwhile
                                    ? `You'll break even in ${Math.round(results.breakEvenMonths)} months, which is generally considered favorable for refinancing.`
                                    : `Your break-even period is ${Math.round(results.breakEvenMonths)} months. Consider if you'll stay in the home long enough to benefit.`}
                                </p>
                              </div>
                            </div>
                          </div>
                        </>
                      ) : (
                        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                          <div className="flex items-start gap-3">
                            <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-semibold text-red-800">Refinancing Not Recommended</p>
                              <p className="text-sm text-red-700 mt-1">
                                Your new mortgage payment would be higher than your current payment. Consider other
                                options or wait for better rates.
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      <Calculator className="h-12 w-12 mx-auto mb-4 opacity-50" />
                      <p>Enter your mortgage details to see the break-even analysis</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#032133] mb-4">Understanding Mortgage Refinancing Break-Even</h2>
              <p className="text-lg text-gray-600">Make informed decisions about refinancing your mortgage</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-[#032133]" />
                    What is Break-Even?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    The break-even point is how long it takes for your monthly savings to equal the total cost of
                    refinancing.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="font-semibold text-[#032133] mb-2">Formula:</p>
                    <p className="text-sm text-gray-600">Break-Even = Total Refinancing Costs ÷ Monthly Savings</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-[#032133]" />
                    Typical Refinancing Costs
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex justify-between">
                      <span>Legal fees</span>
                      <span>$1,000 - $2,000</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Appraisal</span>
                      <span>$300 - $500</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Discharge fees</span>
                      <span>$300 - $400</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Title insurance</span>
                      <span>$200 - $400</span>
                    </li>
                    <li className="flex justify-between font-semibold text-[#032133] border-t pt-2">
                      <span>Total typical range</span>
                      <span>$2,000 - $4,000</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="mb-12">
              <CardHeader>
                <CardTitle>Rules of Thumb for Refinancing</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="bg-green-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="font-semibold text-[#032133] mb-2">Good to Refinance</h3>
                    <p className="text-sm text-gray-600">
                      Break-even within 2-3 years and you plan to stay in your home longer
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-yellow-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <AlertCircle className="h-8 w-8 text-yellow-600" />
                    </div>
                    <h3 className="font-semibold text-[#032133] mb-2">Consider Carefully</h3>
                    <p className="text-sm text-gray-600">Break-even 3-5 years - depends on your long-term plans</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-red-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <AlertCircle className="h-8 w-8 text-red-600" />
                    </div>
                    <h3 className="font-semibold text-[#032133] mb-2">Probably Not Worth It</h3>
                    <p className="text-sm text-gray-600">Break-even over 5 years or minimal monthly savings</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#032133] to-[#064a5c] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Explore Refinancing Options?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Get personalized advice from our mortgage experts. We'll help you find the best refinancing solution for
              your situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-[#032133] hover:bg-gray-100"
                onClick={() => window.trackApplicationClick?.("break-even-calculator-cta")}
              >
                <Link href="https://r.mtg-app.com/robbhullar" target="_blank" rel="noopener noreferrer">
                  Apply for Refinancing
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#032133] bg-transparent"
              >
                <Link href="/#contact">Get Expert Advice</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-[#032133] mb-4">Have Questions About Refinancing?</h2>
              <p className="text-lg text-gray-600">Our mortgage experts are here to help you make the right decision</p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
