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
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ContactForm } from "@/components/contact-form"
import { Calculator, TrendingUp, DollarSign, Clock, AlertCircle, CheckCircle, Info, AlertTriangle } from "lucide-react"
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
  currentTotalInterest: number
  newTotalInterest: number
  totalInterestSavings: number
  netWorthBreakEvenMonths?: number
  termExtensionWarning: boolean
  cashOutNetSavings?: number
  debtConsolidationSavings?: number
  totalCostsUsed: number
  prepaidInterestUsed: number
}

export default function BreakEvenCalculatorPageClient() {
  // Basic inputs
  const [currentBalance, setCurrentBalance] = useState<string>("")
  const [currentRate, setCurrentRate] = useState<string>("")
  const [currentAmortization, setCurrentAmortization] = useState<string>("25")
  const [newRate, setNewRate] = useState<string>("")
  const [newAmortization, setNewAmortization] = useState<string>("25")
  const [closingCosts, setClosingCosts] = useState<string>("")

  // Advanced options
  const [excludePrepaidInterest, setExcludePrepaidInterest] = useState<boolean>(true)
  const [prepaidInterest, setPrepaidInterest] = useState<string>("")
  const [useNetWorthMethod, setUseNetWorthMethod] = useState<boolean>(false)
  const [calculatorMode, setCalculatorMode] = useState<"refinance" | "cashout">("refinance")

  // Cash-out specific inputs
  const [cashOutAmount, setCashOutAmount] = useState<string>("")
  const [debtToConsolidate, setDebtToConsolidate] = useState<string>("")
  const [averageDebtRate, setAverageDebtRate] = useState<string>("15")

  const [results, setResults] = useState<CalculationResults | null>(null)

  const calculateMonthlyPayment = (principal: number, annualRate: number, amortizationYears: number): number => {
    if (principal <= 0 || annualRate < 0 || amortizationYears <= 0) return 0

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

  const calculateTotalInterest = (principal: number, monthlyPayment: number, amortizationYears: number): number => {
    if (principal <= 0 || monthlyPayment <= 0 || amortizationYears <= 0) return 0
    return Math.max(0, monthlyPayment * amortizationYears * 12 - principal)
  }

  const calculateNetWorthBreakEven = (
    currentBalance: number,
    currentRate: number,
    currentAmort: number,
    newRate: number,
    newAmort: number,
    costs: number,
  ): number => {
    if (currentBalance <= 0 || costs <= 0) return 0

    const currentPayment = calculateMonthlyPayment(currentBalance, currentRate, currentAmort)
    const newPayment = calculateMonthlyPayment(currentBalance, newRate, newAmort)

    if (currentPayment <= 0 || newPayment <= 0) return 0

    let cumulativeNetWorthGain = 0
    let currentBalanceRemaining = currentBalance
    let newBalanceRemaining = currentBalance

    const currentMonthlyRate = currentRate / 100 / 12
    const newMonthlyRate = newRate / 100 / 12

    for (let month = 1; month <= 360; month++) {
      if (currentBalanceRemaining <= 0 && newBalanceRemaining <= 0) break

      // Calculate interest and principal for current mortgage
      const currentInterestPayment = currentBalanceRemaining * currentMonthlyRate
      const currentPrincipalPayment = Math.min(
        Math.max(0, currentPayment - currentInterestPayment),
        currentBalanceRemaining,
      )
      currentBalanceRemaining = Math.max(0, currentBalanceRemaining - currentPrincipalPayment)

      // Calculate interest and principal for new mortgage
      const newInterestPayment = newBalanceRemaining * newMonthlyRate
      const newPrincipalPayment = Math.min(Math.max(0, newPayment - newInterestPayment), newBalanceRemaining)
      newBalanceRemaining = Math.max(0, newBalanceRemaining - newPrincipalPayment)

      // Net worth change = payment savings + difference in principal paydown
      const paymentSavings = currentPayment - newPayment
      const principalDifference = currentPrincipalPayment - newPrincipalPayment
      const monthlyNetWorthChange = paymentSavings + principalDifference

      cumulativeNetWorthGain += monthlyNetWorthChange

      // Check if we've recovered the refinancing costs
      if (cumulativeNetWorthGain >= costs) {
        return month
      }
    }

    return 0 // Never breaks even within 30 years
  }

  const calculateBreakEven = () => {
    const balance = Number.parseFloat(currentBalance) || 0
    const currentRateNum = Number.parseFloat(currentRate) || 0
    const newRateNum = Number.parseFloat(newRate) || 0
    const currentAmortNum = Number.parseFloat(currentAmortization) || 25
    const newAmortNum = Number.parseFloat(newAmortization) || 25
    const baseCosts = Number.parseFloat(closingCosts) || 0

    // Validate required inputs
    if (balance <= 0 || currentRateNum <= 0 || newRateNum <= 0 || baseCosts <= 0) {
      setResults(null)
      return
    }

    // Handle prepaid interest - add to costs if NOT excluding it
    const prepaidAmount = Number.parseFloat(prepaidInterest) || 0
    let totalCosts = baseCosts
    let prepaidUsed = 0

    if (!excludePrepaidInterest && prepaidAmount > 0) {
      totalCosts += prepaidAmount
      prepaidUsed = prepaidAmount
    }

    const currentPayment = calculateMonthlyPayment(balance, currentRateNum, currentAmortNum)
    let newBalance = balance

    // Handle cash-out refinancing
    let cashOutUsed = 0
    if (calculatorMode === "cashout") {
      const cashOut = Number.parseFloat(cashOutAmount) || 0
      newBalance = balance + cashOut
      cashOutUsed = cashOut
    }

    const newPayment = calculateMonthlyPayment(newBalance, newRateNum, newAmortNum)
    let savings = currentPayment - newPayment

    // Add debt consolidation savings for cash-out
    let debtSavings = 0
    if (calculatorMode === "cashout" && debtToConsolidate) {
      const debtAmount = Number.parseFloat(debtToConsolidate) || 0
      const debtRate = Number.parseFloat(averageDebtRate) || 0
      if (debtAmount > 0 && debtRate > 0) {
        // Calculate current debt payment (assume 2% minimum payment for credit cards)
        const currentDebtPayment = debtAmount * 0.02
        debtSavings = currentDebtPayment
        savings += debtSavings
      }
    }

    // Calculate total interest over full amortization
    const currentTotalInterest = calculateTotalInterest(balance, currentPayment, currentAmortNum)
    const newTotalInterest = calculateTotalInterest(newBalance, newPayment, newAmortNum)
    const totalInterestSavings = currentTotalInterest - newTotalInterest

    // Check for term extension warning
    const termExtensionWarning = newAmortNum > currentAmortNum

    // Calculate net worth break-even if enabled
    let netWorthBreakEvenMonths: number | undefined
    if (useNetWorthMethod && calculatorMode === "refinance") {
      netWorthBreakEvenMonths = calculateNetWorthBreakEven(
        balance,
        currentRateNum,
        currentAmortNum,
        newRateNum,
        newAmortNum,
        totalCosts,
      )
      if (netWorthBreakEvenMonths <= 0) {
        netWorthBreakEvenMonths = undefined
      }
    }

    // Calculate break-even
    const breakEvenMonths = savings > 0 ? totalCosts / savings : 0
    const breakEvenYears = breakEvenMonths / 12

    // Determine if refinancing is worthwhile
    const isWorthwhile = breakEvenMonths > 0 && breakEvenMonths <= 36

    console.log("Calculation Debug:", {
      balance,
      currentRateNum,
      newRateNum,
      baseCosts,
      prepaidAmount,
      excludePrepaidInterest,
      totalCosts,
      prepaidUsed,
      currentPayment,
      newPayment,
      savings,
      breakEvenMonths,
      calculatorMode,
      cashOutUsed,
      debtSavings,
      isWorthwhile,
    })

    setResults({
      currentMonthlyPayment: currentPayment,
      newMonthlyPayment: newPayment,
      monthlySavings: savings,
      breakEvenMonths,
      breakEvenYears,
      fiveYearSavings: savings * 60 - totalCosts,
      tenYearSavings: savings * 120 - totalCosts,
      isWorthwhile,
      currentTotalInterest,
      newTotalInterest,
      totalInterestSavings,
      netWorthBreakEvenMonths,
      termExtensionWarning,
      cashOutNetSavings: calculatorMode === "cashout" ? cashOutUsed : undefined,
      debtConsolidationSavings: debtSavings,
      totalCostsUsed: totalCosts,
      prepaidInterestUsed: prepaidUsed,
    })
  }

  useEffect(() => {
    calculateBreakEven()
  }, [
    currentBalance,
    currentRate,
    newRate,
    currentAmortization,
    newAmortization,
    closingCosts,
    excludePrepaidInterest,
    prepaidInterest,
    useNetWorthMethod,
    calculatorMode,
    cashOutAmount,
    debtToConsolidate,
    averageDebtRate,
  ])

  const formatCurrency = (amount: number): string => {
    if (isNaN(amount) || !isFinite(amount)) return "$0"
    return new Intl.NumberFormat("en-CA", {
      style: "currency",
      currency: "CAD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const formatDecimal = (amount: number): string => {
    if (isNaN(amount) || !isFinite(amount)) return "$0.00"
    return new Intl.NumberFormat("en-CA", {
      style: "currency",
      currency: "CAD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount)
  }

  const getBreakEvenBadge = (months: number) => {
    if (months <= 0) {
      return <Badge className="bg-red-500 hover:bg-red-600">No Break-Even</Badge>
    } else if (months <= 24) {
      return <Badge className="bg-green-500 hover:bg-green-600">Excellent (&lt;=24 months)</Badge>
    } else if (months <= 36) {
      return <Badge className="bg-blue-500 hover:bg-blue-600">Good (&lt;=36 months)</Badge>
    } else {
      return <Badge className="bg-yellow-500 hover:bg-yellow-600">Long (&gt;36 months)</Badge>
    }
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Advanced Mortgage Refinance Calculator</h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Professional-grade break-even analysis with advanced features including net worth calculations, cash-out
              refinancing, and debt consolidation scenarios.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Clock className="h-4 w-4 mr-2" />
                Break-Even Analysis
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <TrendingUp className="h-4 w-4 mr-2" />
                Net Worth Method
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <DollarSign className="h-4 w-4 mr-2" />
                Cash-Out Support
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
                  {/* Calculator Mode Tabs */}
                  <Tabs
                    value={calculatorMode}
                    onValueChange={(value) => setCalculatorMode(value as "refinance" | "cashout")}
                  >
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="refinance">Rate & Term Refinance</TabsTrigger>
                      <TabsTrigger value="cashout">Cash-Out Refinance</TabsTrigger>
                    </TabsList>

                    <TabsContent value="refinance" className="space-y-6">
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
                    </TabsContent>

                    <TabsContent value="cashout" className="space-y-6">
                      {/* Current Mortgage for Cash-Out */}
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
                          <div>
                            <Label htmlFor="cashOutAmount">Cash-Out Amount</Label>
                            <Input
                              id="cashOutAmount"
                              type="number"
                              placeholder="50000"
                              value={cashOutAmount}
                              onChange={(e) => setCashOutAmount(e.target.value)}
                            />
                            <p className="text-sm text-gray-600 mt-1">Additional funds you want to borrow</p>
                          </div>
                        </div>
                      </div>

                      {/* Debt Consolidation */}
                      <div>
                        <h3 className="font-semibold text-lg mb-4 text-[#032133]">Debt Consolidation (Optional)</h3>
                        <div className="grid gap-4">
                          <div>
                            <Label htmlFor="debtToConsolidate">High-Interest Debt to Pay Off</Label>
                            <Input
                              id="debtToConsolidate"
                              type="number"
                              placeholder="25000"
                              value={debtToConsolidate}
                              onChange={(e) => setDebtToConsolidate(e.target.value)}
                            />
                          </div>
                          <div>
                            <Label htmlFor="averageDebtRate">Average Interest Rate on Debt (%)</Label>
                            <Input
                              id="averageDebtRate"
                              type="number"
                              step="0.01"
                              placeholder="15"
                              value={averageDebtRate}
                              onChange={(e) => setAverageDebtRate(e.target.value)}
                            />
                            <p className="text-sm text-gray-600 mt-1">
                              Credit cards typically 15-25%, personal loans 8-15%
                            </p>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>

                  <Separator />

                  {/* New Mortgage Terms */}
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
                    </div>
                  </div>

                  <Separator />

                  {/* Refinancing Costs */}
                  <div>
                    <h3 className="font-semibold text-lg mb-4 text-[#032133]">Refinancing Costs</h3>
                    <div className="grid gap-4">
                      <div>
                        <Label htmlFor="closingCosts">Total Refinancing Costs</Label>
                        <Input
                          id="closingCosts"
                          type="number"
                          placeholder="5000"
                          value={closingCosts}
                          onChange={(e) => setClosingCosts(e.target.value)}
                        />
                        <p className="text-sm text-gray-600 mt-1">Legal fees, appraisal, discharge fees, etc.</p>
                      </div>

                      {/* Prepaid Interest Control */}
                      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <Info className="h-4 w-4 text-blue-600" />
                            <Label htmlFor="excludePrepaidInterest" className="font-medium text-blue-800">
                              Exclude Prepaid Interest from Break-Even
                            </Label>
                          </div>
                          <Switch
                            id="excludePrepaidInterest"
                            checked={excludePrepaidInterest}
                            onCheckedChange={setExcludePrepaidInterest}
                          />
                        </div>
                        <p className="text-sm text-blue-700 mb-3">
                          {excludePrepaidInterest ? (
                            <span className="flex items-center gap-1">
                              <CheckCircle className="h-4 w-4" />
                              Recommended: Prepaid interest is part of regular payments, not a true closing cost
                            </span>
                          ) : (
                            <span className="flex items-center gap-1">
                              <AlertTriangle className="h-4 w-4" />
                              Warning: Including prepaid interest may overstate your break-even time
                            </span>
                          )}
                        </p>
                        {!excludePrepaidInterest && (
                          <div>
                            <Label htmlFor="prepaidInterest">Prepaid Interest Amount</Label>
                            <Input
                              id="prepaidInterest"
                              type="number"
                              placeholder="1500"
                              value={prepaidInterest}
                              onChange={(e) => setPrepaidInterest(e.target.value)}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Advanced Options */}
                  <div>
                    <h3 className="font-semibold text-lg mb-4 text-[#032133]">Advanced Analysis</h3>
                    <div className="space-y-4">
                      {calculatorMode === "refinance" ? (
                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="useNetWorthMethod" className="font-medium">
                              Use Net Worth Method
                            </Label>
                            <p className="text-sm text-gray-600">
                              Factors in principal paydown differences for more accurate analysis
                            </p>
                          </div>
                          <Switch
                            id="useNetWorthMethod"
                            checked={useNetWorthMethod}
                            onCheckedChange={setUseNetWorthMethod}
                          />
                        </div>
                      ) : (
                        <div className="text-center py-4 text-gray-500">
                          <p className="text-sm">Advanced analysis options are available for Rate & Term refinancing</p>
                        </div>
                      )}
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
                  <CardDescription>
                    {calculatorMode === "refinance"
                      ? "Your refinancing break-even calculation"
                      : "Your cash-out refinancing analysis"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {results ? (
                    <div className="space-y-6">
                      {/* Debug Information */}
                      {results.prepaidInterestUsed > 0 && (
                        <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                          <p className="text-sm text-yellow-800">
                            <strong>Note:</strong> Including {formatCurrency(results.prepaidInterestUsed)} in prepaid
                            interest. Total costs used: {formatCurrency(results.totalCostsUsed)}
                          </p>
                        </div>
                      )}

                      {/* Term Extension Warning */}
                      {results.termExtensionWarning && (
                        <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                          <div className="flex items-start gap-3">
                            <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-semibold text-yellow-800">Term Extension Notice</p>
                              <p className="text-sm text-yellow-700 mt-1">
                                Your new mortgage term is longer than your remaining term. While this reduces monthly
                                payments, you'll pay {formatCurrency(Math.abs(results.totalInterestSavings))} more in
                                total interest over the life of the loan.
                              </p>
                            </div>
                          </div>
                        </div>
                      )}

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

                      {/* Monthly Savings - COMPLETELY FIXED */}
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <div className="text-sm text-gray-600 mb-1">Monthly Savings</div>
                        {results.debtConsolidationSavings && results.debtConsolidationSavings > 0 && (
                          <div className="text-xs text-blue-600 mb-1">
                            (Includes {formatDecimal(results.debtConsolidationSavings)} debt savings)
                          </div>
                        )}
                        <p className="text-3xl font-bold text-blue-600">
                          {results.monthlySavings > 0
                            ? formatDecimal(results.monthlySavings)
                            : formatDecimal(Math.abs(results.monthlySavings))}
                        </p>
                        {results.monthlySavings <= 0 && calculatorMode === "refinance" && (
                          <p className="text-sm text-red-600 mt-1">Higher monthly payment</p>
                        )}
                      </div>

                      {/* Cash-Out Information */}
                      {calculatorMode === "cashout" && results.cashOutNetSavings && results.cashOutNetSavings > 0 && (
                        <div className="text-center p-4 bg-purple-50 rounded-lg">
                          <p className="text-sm text-gray-600 mb-1">Cash Received</p>
                          <p className="text-2xl font-bold text-purple-600">
                            {formatCurrency(results.cashOutNetSavings)}
                          </p>
                        </div>
                      )}

                      {results.monthlySavings > 0 || calculatorMode === "cashout" ? (
                        <>
                          {/* Break-Even Point */}
                          <div className="text-center p-6 bg-gradient-to-r from-[#032133] to-[#064a5c] text-white rounded-lg">
                            <div className="flex items-center justify-center mb-2">
                              {results.isWorthwhile ? (
                                <CheckCircle className="h-6 w-6 text-green-400 mr-2" />
                              ) : (
                                <AlertCircle className="h-6 w-6 text-yellow-400 mr-2" />
                              )}
                              <p className="text-lg font-semibold">
                                {excludePrepaidInterest
                                  ? "Break-Even Point (Excluding Prepaid Interest)"
                                  : "Break-Even Point (Including Prepaid Interest)"}
                              </p>
                            </div>
                            <p className="text-3xl font-bold mb-2">
                              {results.breakEvenMonths > 0 ? Math.round(results.breakEvenMonths) : "N/A"}
                              {results.breakEvenMonths > 0 ? " months" : ""}
                            </p>
                            <p className="text-lg opacity-90">
                              {results.breakEvenMonths > 0
                                ? `(${results.breakEvenYears.toFixed(1)} years)`
                                : "No break-even point"}
                            </p>
                            <div className="mt-4">{getBreakEvenBadge(results.breakEvenMonths)}</div>
                          </div>

                          {/* Net Worth Break-Even */}
                          {useNetWorthMethod &&
                            results.netWorthBreakEvenMonths &&
                            results.netWorthBreakEvenMonths > 0 && (
                              <div className="text-center p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                                <p className="text-sm text-gray-600 mb-1">Net Worth Break-Even</p>
                                <p className="text-2xl font-bold text-indigo-600">
                                  {Math.round(results.netWorthBreakEvenMonths)} months
                                </p>
                                <p className="text-sm text-indigo-700 mt-1">
                                  Accounts for principal paydown differences
                                </p>
                              </div>
                            )}

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

                          {/* Total Interest Comparison */}
                          <div className="grid grid-cols-2 gap-4">
                            <div className="text-center p-4 bg-red-50 rounded-lg">
                              <p className="text-sm text-gray-600 mb-1">Current Total Interest</p>
                              <p className="text-lg font-bold text-red-600">
                                {formatCurrency(results.currentTotalInterest)}
                              </p>
                            </div>
                            <div className="text-center p-4 bg-green-50 rounded-lg">
                              <p className="text-sm text-gray-600 mb-1">New Total Interest</p>
                              <p className="text-lg font-bold text-green-600">
                                {formatCurrency(results.newTotalInterest)}
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
                                  {results.breakEvenMonths > 0
                                    ? results.isWorthwhile
                                      ? `You'll break even in ${Math.round(results.breakEvenMonths)} months, which is generally considered favorable for refinancing.`
                                      : `Your break-even period is ${Math.round(results.breakEvenMonths)} months. Consider if you'll stay in the home long enough to benefit.`
                                    : "No break-even point with current parameters. Consider other options or wait for better rates."}
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
                      <p className="text-sm mt-2">All fields marked with * are required</p>
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
              <h2 className="text-3xl font-bold text-[#032133] mb-4">Advanced Refinancing Analysis</h2>
              <p className="text-lg text-gray-600">Professional-grade tools for informed refinancing decisions</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Info className="h-5 w-5 text-[#032133]" />
                    Prepaid Interest
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Prepaid interest is the interest you pay from your closing date to the end of that month. It's not a
                    true closing cost since you'd pay this interest anyway.
                  </p>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-sm font-semibold text-blue-800">Best Practice:</p>
                    <p className="text-sm text-blue-700">Exclude from break-even calculations for accuracy</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-[#032133]" />
                    Net Worth Method
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Advanced analysis that considers how different amortization periods affect your principal paydown
                    and overall net worth over time.
                  </p>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-sm font-semibold text-green-800">When to Use:</p>
                    <p className="text-sm text-green-700">Extending your mortgage term or investment properties</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-[#032133]" />
                    Cash-Out Benefits
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Cash-out refinancing can provide funds for home improvements, debt consolidation, or investments
                    while potentially lowering your overall borrowing costs.
                  </p>
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <p className="text-sm font-semibold text-purple-800">Key Advantage:</p>
                    <p className="text-sm text-purple-700">Replace high-interest debt with low-rate mortgage debt</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="mb-12">
              <CardHeader>
                <CardTitle>Break-Even Timeline Guidelines</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="bg-green-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="font-semibold text-[#032133] mb-2">Excellent (&lt;=24 months)</h3>
                    <p className="text-sm text-gray-600">Strong refinancing opportunity with quick payback period</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Clock className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-[#032133] mb-2">Good (&lt;=36 months)</h3>
                    <p className="text-sm text-gray-600">Generally favorable if you plan to stay in your home</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-yellow-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <AlertCircle className="h-8 w-8 text-yellow-600" />
                    </div>
                    <h3 className="font-semibold text-[#032133] mb-2">Long (&gt;36 months)</h3>
                    <p className="text-sm text-gray-600">Consider carefully based on your long-term plans</p>
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
              your situation with professional-grade analysis.
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
