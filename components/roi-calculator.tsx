"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Calculator, TrendingUp, DollarSign } from "lucide-react"
import Link from "next/link"

// Solve IRR from a cash-flow vector (index 0 = initial outflow) via bisection.
function computeIRR(cashFlows: number[]): number | null {
  const npv = (rate: number) =>
    cashFlows.reduce((acc, cf, t) => acc + cf / Math.pow(1 + rate, t), 0)

  let low = -0.9999
  let high = 1.0
  let fLow = npv(low)
  let fHigh = npv(high)

  // Expand the upper bound until we bracket a root (or give up).
  let guard = 0
  while (fLow * fHigh > 0 && high < 1000 && guard < 100) {
    high *= 2
    fHigh = npv(high)
    guard++
  }
  if (fLow * fHigh > 0) return null

  for (let i = 0; i < 200; i++) {
    const mid = (low + high) / 2
    const fMid = npv(mid)
    if (Math.abs(fMid) < 1e-7) return mid
    if (fLow * fMid < 0) {
      high = mid
    } else {
      low = mid
      fLow = fMid
    }
  }
  return (low + high) / 2
}

export function ROICalculator() {
  const [purchasePrice, setPurchasePrice] = useState(500000)
  const [downPayment, setDownPayment] = useState(100000)
  const [monthlyRent, setMonthlyRent] = useState(2500)
  const [monthlyExpenses, setMonthlyExpenses] = useState(800)
  const [vacancyRate, setVacancyRate] = useState(4)
  const [interestRate, setInterestRate] = useState(5.5)
  const [amortization, setAmortization] = useState(25)
  const [closingCosts, setClosingCosts] = useState(15000)
  const [renovationCosts, setRenovationCosts] = useState(10000)
  const [appreciation, setAppreciation] = useState(3)
  const [holdPeriod, setHoldPeriod] = useState(5)

  const [results, setResults] = useState({
    loanAmount: 0,
    monthlyPayment: 0,
    vacancyLossMonthly: 0,
    noi: 0,
    monthlyCashFlow: 0,
    annualCashFlow: 0,
    totalInvestment: 0,
    cashOnCashReturn: 0,
    capRate: 0,
    dscr: 0,
    breakEvenOccupancy: 0,
    fiveYearIRR: 0,
    irrValid: true,
    downPaymentPercent: 0,
  })

  useEffect(() => {
    calculate()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    purchasePrice,
    downPayment,
    monthlyRent,
    monthlyExpenses,
    vacancyRate,
    interestRate,
    amortization,
    closingCosts,
    renovationCosts,
    appreciation,
    holdPeriod,
  ])

  const calculate = () => {
    const loanAmount = Math.max(purchasePrice - downPayment, 0)

    // Canadian mortgages compound semi-annually, not monthly.
    // Convert the semi-annual nominal rate to an equivalent monthly rate.
    const semiAnnualRate = interestRate / 100 / 2
    const monthlyRate = Math.pow(1 + semiAnnualRate, 1 / 6) - 1
    const totalMonths = amortization * 12

    const monthlyPayment =
      monthlyRate > 0
        ? (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, totalMonths))) /
          (Math.pow(1 + monthlyRate, totalMonths) - 1)
        : loanAmount / totalMonths

    // Income after vacancy → NOI (excludes mortgage, capex, income tax).
    const grossAnnualRent = monthlyRent * 12
    const vacancyLoss = grossAnnualRent * (vacancyRate / 100)
    const effectiveGrossIncome = grossAnnualRent - vacancyLoss
    const annualOpEx = monthlyExpenses * 12
    const noi = effectiveGrossIncome - annualOpEx

    const annualDebtService = monthlyPayment * 12
    const annualCashFlow = noi - annualDebtService
    const monthlyCashFlow = annualCashFlow / 12

    const totalInvestment = downPayment + closingCosts + renovationCosts

    const capRate = purchasePrice > 0 ? (noi / purchasePrice) * 100 : 0
    const cashOnCashReturn = totalInvestment > 0 ? (annualCashFlow / totalInvestment) * 100 : 0
    const dscr = annualDebtService > 0 ? noi / annualDebtService : 0
    const breakEvenOccupancy =
      grossAnnualRent > 0 ? ((annualOpEx + annualDebtService) / grossAnnualRent) * 100 : 0
    const downPaymentPercent = purchasePrice > 0 ? (downPayment / purchasePrice) * 100 : 0

    // 5-year (hold-period) IRR: annual cash flows + reversion on sale.
    // Rent/value grow at the appreciation rate; equity paydown captured via
    // the amortized remaining balance at sale.
    const monthsElapsed = holdPeriod * 12
    const remainingBalance =
      monthlyRate > 0
        ? (loanAmount *
            (Math.pow(1 + monthlyRate, totalMonths) - Math.pow(1 + monthlyRate, monthsElapsed))) /
          (Math.pow(1 + monthlyRate, totalMonths) - 1)
        : loanAmount * (1 - monthsElapsed / totalMonths)

    const cashFlows: number[] = [-totalInvestment]
    for (let year = 1; year <= holdPeriod; year++) {
      const grownNOI = noi * Math.pow(1 + appreciation / 100, year - 1)
      let yearCF = grownNOI - annualDebtService
      if (year === holdPeriod) {
        const salePrice = purchasePrice * Math.pow(1 + appreciation / 100, holdPeriod)
        const sellingCosts = salePrice * 0.05 // ~5% realtor + legal
        const netSaleProceeds = salePrice - sellingCosts - remainingBalance
        yearCF += netSaleProceeds
      }
      cashFlows.push(yearCF)
    }
    const irr = computeIRR(cashFlows)

    setResults({
      loanAmount,
      monthlyPayment,
      vacancyLossMonthly: vacancyLoss / 12,
      noi,
      monthlyCashFlow,
      annualCashFlow,
      totalInvestment,
      cashOnCashReturn,
      capRate,
      dscr,
      breakEvenOccupancy,
      fiveYearIRR: irr !== null ? irr * 100 : 0,
      irrValid: irr !== null,
      downPaymentPercent,
    })
  }

  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat("en-CA", {
      style: "currency",
      currency: "CAD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)

  const formatPercent = (percent: number) => `${percent.toFixed(2)}%`

  // Plain-English verdict.
  const getVerdict = () => {
    const { monthlyCashFlow, dscr } = results
    if (monthlyCashFlow >= 0 && dscr >= 1.2) {
      return {
        text: "Cash-flow positive and comfortably financeable. The rent covers costs and clears typical lender coverage requirements.",
        tone: "positive",
      }
    }
    if (monthlyCashFlow >= 0 && dscr < 1.2) {
      return {
        text: "Positive cash flow, but coverage is thin. DSCR below ~1.20 can complicate financing on the investment side — worth structuring carefully.",
        tone: "caution",
      }
    }
    if (monthlyCashFlow < 0) {
      return {
        text: "Negative carry — you'd fund the shortfall monthly. This is an appreciation bet, not an income property. Make sure the projected return justifies it.",
        tone: "negative",
      }
    }
    return { text: "", tone: "neutral" }
  }

  const verdict = getVerdict()
  const verdictStyles: Record<string, string> = {
    positive: "bg-green-50 border-green-200 text-green-800",
    caution: "bg-amber-50 border-amber-200 text-amber-800",
    negative: "bg-red-50 border-red-200 text-red-800",
    neutral: "bg-gray-50 border-gray-200 text-gray-700",
  }

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <Calculator className="w-8 h-8 text-[#1D2D44] mr-3" />
          <h2 className="text-3xl font-bold text-gray-900">Investment Property Analysis</h2>
        </div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          A full underwriting of a rental — cash flow, cap rate, debt coverage, and a five-year
          return with the eventual sale. Built the way an analyst looks at any asset, not just a
          payment quote.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center">
              <DollarSign className="w-5 h-5 mr-2 text-[#1D2D44]" />
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
                <Label htmlFor="monthlyExpenses">Monthly Operating Expenses</Label>
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
                <Label htmlFor="vacancyRate">Vacancy Rate (%)</Label>
                <Input
                  id="vacancyRate"
                  type="number"
                  step="0.5"
                  value={vacancyRate}
                  onChange={(e) => setVacancyRate(Number(e.target.value))}
                  className="mt-1"
                />
              </div>
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
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="amortization">Amortization (years)</Label>
                <Input
                  id="amortization"
                  type="number"
                  value={amortization}
                  onChange={(e) => setAmortization(Number(e.target.value))}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="holdPeriod">Hold Period (years)</Label>
                <Input
                  id="holdPeriod"
                  type="number"
                  value={holdPeriod}
                  onChange={(e) => setHoldPeriod(Number(e.target.value))}
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

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="appreciation">Annual Appreciation &amp; Rent Growth (%)</Label>
                <Input
                  id="appreciation"
                  type="number"
                  step="0.5"
                  value={appreciation}
                  onChange={(e) => setAppreciation(Number(e.target.value))}
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
              <TrendingUp className="w-5 h-5 mr-2 text-[#1D2D44]" />
              Investment Analysis
            </CardTitle>
            <CardDescription>Your projected returns, cash flow, and financeability</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Verdict */}
            {verdict.text && (
              <div className={`rounded-lg border p-4 text-sm ${verdictStyles[verdict.tone]}`}>
                {verdict.text}
              </div>
            )}

            {/* Key Metrics */}
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-slate-50 rounded-lg">
                <div className="text-2xl font-bold text-[#1D2D44]">
                  {formatPercent(results.cashOnCashReturn)}
                </div>
                <div className="text-sm text-gray-600">Cash-on-Cash Return</div>
              </div>
              <div className="text-center p-4 bg-slate-50 rounded-lg">
                <div className="text-2xl font-bold text-[#1D2D44]">{formatPercent(results.capRate)}</div>
                <div className="text-sm text-gray-600">Cap Rate</div>
              </div>
              <div className="text-center p-4 bg-slate-50 rounded-lg">
                <div className="text-2xl font-bold text-[#1D2D44]">{results.dscr.toFixed(2)}x</div>
                <div className="text-sm text-gray-600">Debt-Service Coverage</div>
              </div>
              <div className="text-center p-4 bg-slate-50 rounded-lg">
                <div className="text-2xl font-bold text-[#1D2D44]">
                  {results.irrValid ? formatPercent(results.fiveYearIRR) : "n/a"}
                </div>
                <div className="text-sm text-gray-600">{holdPeriod}-Year IRR</div>
              </div>
            </div>

            <Separator />

            {/* Cash Flow */}
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-900">Monthly Cash Flow</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Gross Rent:</span>
                  <span className="font-medium text-green-600">+{formatCurrency(monthlyRent)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Vacancy Loss ({vacancyRate}%):</span>
                  <span className="font-medium text-red-600">
                    -{formatCurrency(results.vacancyLossMonthly)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Operating Expenses:</span>
                  <span className="font-medium text-red-600">-{formatCurrency(monthlyExpenses)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Mortgage Payment:</span>
                  <span className="font-medium text-red-600">
                    -{formatCurrency(results.monthlyPayment)}
                  </span>
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
                  <span>Net Operating Income (annual):</span>
                  <span className="font-medium">{formatCurrency(results.noi)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Total Cash Invested:</span>
                  <span className="font-medium">{formatCurrency(results.totalInvestment)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Down Payment:</span>
                  <span className="font-medium">{formatPercent(results.downPaymentPercent)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Break-Even Occupancy:</span>
                  <span className="font-medium">{formatPercent(results.breakEvenOccupancy)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Annual Cash Flow:</span>
                  <span
                    className={`font-medium ${
                      results.annualCashFlow >= 0 ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {formatCurrency(results.annualCashFlow)}
                  </span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button
                size="lg"
                className="bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-black font-semibold"
                asChild
              >
                <Link href="/#contact">Get a Full Analysis + Financing</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Disclaimer */}
      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <p className="text-sm text-gray-600 text-center">
          <strong>Disclaimer:</strong> This calculator provides estimates for educational purposes
          only. Payments use Canadian semi-annual compounding; the {holdPeriod}-year IRR assumes rent
          and value grow at the appreciation rate you enter and a ~5% cost of sale. Actual returns
          vary with market conditions, financing, vacancy, and taxes (including CCA and recapture).
          Consult a qualified mortgage professional and tax advisor before investing.
        </p>
      </div>
    </div>
  )
}
