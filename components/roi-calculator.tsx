"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Calculator, TrendingUp, DollarSign, Percent } from "lucide-react"

export function ROICalculator() {
  const [purchasePrice, setPurchasePrice] = useState(500000)
  const [downPayment, setDownPayment] = useState(100000)
  const [monthlyRent, setMonthlyRent] = useState(2500)
  const [monthlyExpenses, setMonthlyExpenses] = useState(800)
  const [interestRate, setInterestRate] = useState(5.5)
  const [loanTerm, setLoanTerm] = useState(25)
  const [closingCosts, setClosingCosts] = useState(15000)
  const [renovationCosts, setRenovationCosts] = useState(10000)

  const [results, setResults] = useState({
    loanAmount: 0,
    monthlyPayment: 0,
    monthlyCashFlow: 0,
    annualCashFlow: 0,
    totalInvestment: 0,
    cashOnCashReturn: 0,
    capRate: 0,
    totalROI: 0,
    downPaymentPercent: 0,
  })

  useEffect(() => {
    calculateROI()
  }, [purchasePrice, downPayment, monthlyRent, monthlyExpenses, interestRate, loanTerm, closingCosts, renovationCosts])

  const calculateROI = () => {
    const loanAmount = purchasePrice - downPayment
    const monthlyRate = interestRate / 100 / 12
    const numPayments = loanTerm * 12

    // Calculate monthly mortgage payment
    const monthlyPayment =
      (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments))) /
      (Math.pow(1 + monthlyRate, numPayments) - 1)

    // Calculate cash flow
    const monthlyCashFlow = monthlyRent - monthlyPayment - monthlyExpenses
    const annualCashFlow = monthlyCashFlow * 12

    // Calculate total investment
    const totalInvestment = downPayment + closingCosts + renovationCosts

    // Calculate returns
    const cashOnCashReturn = (annualCashFlow / totalInvestment) * 100
    const annualRent = monthlyRent * 12
    const capRate = ((annualRent - monthlyExpenses * 12) / purchasePrice) * 100
    const downPaymentPercent = (downPayment / purchasePrice) * 100

    // Simple total ROI calculation (cash flow + appreciation estimate)
    const estimatedAppreciation = purchasePrice * 0.03 // 3% annual appreciation
    const totalROI = ((annualCashFlow + estimatedAppreciation) / totalInvestment) * 100

    setResults({
      loanAmount,
      monthlyPayment,
      monthlyCashFlow,
      annualCashFlow,
      totalInvestment,
      cashOnCashReturn,
      capRate,
      totalROI,
      downPaymentPercent,
    })
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-CA", {
      style: "currency",
      currency: "CAD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const formatPercent = (percent: number) => {
    return `${percent.toFixed(2)}%`
  }

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <Calculator className="w-8 h-8 text-[#032133] mr-3" />
          <h2 className="text-3xl font-bold text-gray-900">Investment Property ROI Calculator</h2>
        </div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Calculate your potential return on investment for rental properties. Analyze cash flow, cap rates, and total
          returns.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center">
              <DollarSign className="w-5 h-5 mr-2 text-[#032133]" />
              Property Details
            </CardTitle>
            <CardDescription>Enter your investment property information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="purchasePrice">Purchase Price</Label>
                <Input
                  id="purchasePrice"
                  type="number"
                  value={purchasePrice}
                  onChange={(e) => setPurchasePrice(Number(e.target.value))}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="downPayment">Down Payment</Label>
                <Input
                  id="downPayment"
                  type="number"
                  value={downPayment}
                  onChange={(e) => setDownPayment(Number(e.target.value))}
                  className="mt-1"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="monthlyRent">Monthly Rent</Label>
                <Input
                  id="monthlyRent"
                  type="number"
                  value={monthlyRent}
                  onChange={(e) => setMonthlyRent(Number(e.target.value))}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="monthlyExpenses">Monthly Expenses</Label>
                <Input
                  id="monthlyExpenses"
                  type="number"
                  value={monthlyExpenses}
                  onChange={(e) => setMonthlyExpenses(Number(e.target.value))}
                  className="mt-1"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="interestRate">Interest Rate (%)</Label>
                <Input
                  id="interestRate"
                  type="number"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="loanTerm">Loan Term (years)</Label>
                <Input
                  id="loanTerm"
                  type="number"
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(Number(e.target.value))}
                  className="mt-1"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="closingCosts">Closing Costs</Label>
                <Input
                  id="closingCosts"
                  type="number"
                  value={closingCosts}
                  onChange={(e) => setClosingCosts(Number(e.target.value))}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="renovationCosts">Renovation Costs</Label>
                <Input
                  id="renovationCosts"
                  type="number"
                  value={renovationCosts}
                  onChange={(e) => setRenovationCosts(Number(e.target.value))}
                  className="mt-1"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results Section */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingUp className="w-5 h-5 mr-2 text-[#032133]" />
              Investment Analysis
            </CardTitle>
            <CardDescription>Your potential returns and cash flow</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Key Metrics */}
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-slate-50 rounded-lg">
                <div className="text-2xl font-bold text-[#032133]">{formatPercent(results.cashOnCashReturn)}</div>
                <div className="text-sm text-gray-600">Cash-on-Cash Return</div>
              </div>
              <div className="text-center p-4 bg-slate-50 rounded-lg">
                <div className="text-2xl font-bold text-[#032133]">{formatPercent(results.capRate)}</div>
                <div className="text-sm text-gray-600">Cap Rate</div>
              </div>
            </div>

            <Separator />

            {/* Cash Flow */}
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-900">Monthly Cash Flow</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Monthly Rent:</span>
                  <span className="font-medium text-green-600">+{formatCurrency(monthlyRent)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Mortgage Payment:</span>
                  <span className="font-medium text-red-600">-{formatCurrency(results.monthlyPayment)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Operating Expenses:</span>
                  <span className="font-medium text-red-600">-{formatCurrency(monthlyExpenses)}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-bold">
                  <span>Net Cash Flow:</span>
                  <span className={results.monthlyCashFlow >= 0 ? "text-green-600" : "text-red-600"}>
                    {formatCurrency(results.monthlyCashFlow)}
                  </span>
                </div>
              </div>
            </div>

            <Separator />

            {/* Investment Summary */}
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-900">Investment Summary</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Total Investment:</span>
                  <span className="font-medium">{formatCurrency(results.totalInvestment)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Down Payment:</span>
                  <span className="font-medium">{formatPercent(results.downPaymentPercent)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Annual Cash Flow:</span>
                  <span className={`font-medium ${results.annualCashFlow >= 0 ? "text-green-600" : "text-red-600"}`}>
                    {formatCurrency(results.annualCashFlow)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated Total ROI:</span>
                  <span className="font-medium text-[#032133]">{formatPercent(results.totalROI)}</span>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <Button className="w-full bg-[#032133] hover:bg-[#032133]/90" size="lg">
              <Percent className="w-4 h-4 mr-2" />
              Get Investment Financing
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Disclaimer */}
      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <p className="text-sm text-gray-600 text-center">
          <strong>Disclaimer:</strong> This calculator provides estimates for educational purposes only. Actual returns
          may vary based on market conditions, property management, vacancy rates, and other factors. Consult with a
          qualified mortgage broker and financial advisor for personalized investment advice.
        </p>
      </div>
    </div>
  )
}
