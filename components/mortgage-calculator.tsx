"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Calculator, PieChart, TrendingUp } from "lucide-react"
import Link from "next/link"

export function MortgageCalculator() {
  const [homePrice, setHomePrice] = useState(750000)
  const [downPayment, setDownPayment] = useState(150000)
  const [interestRate, setInterestRate] = useState(5.5)
  const [amortization, setAmortization] = useState(25)
  const [paymentFrequency, setPaymentFrequency] = useState("monthly")

  const [results, setResults] = useState({
    monthlyPayment: 0,
    totalInterest: 0,
    totalPayments: 0,
    downPaymentPercent: 0,
  })

  useEffect(() => {
    calculateMortgage()
  }, [homePrice, downPayment, interestRate, amortization, paymentFrequency])

  const calculateMortgage = () => {
    const principal = homePrice - downPayment
    const monthlyRate = interestRate / 100 / 12
    const numberOfPayments = amortization * 12

    let monthlyPayment = 0
    if (monthlyRate > 0) {
      monthlyPayment =
        (principal * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
        (Math.pow(1 + monthlyRate, numberOfPayments) - 1)
    } else {
      monthlyPayment = principal / numberOfPayments
    }

    const totalPayments = monthlyPayment * numberOfPayments
    const totalInterest = totalPayments - principal
    const downPaymentPercent = (downPayment / homePrice) * 100

    setResults({
      monthlyPayment,
      totalInterest,
      totalPayments,
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

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Calculator Inputs */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calculator className="w-5 h-5 mr-2 text-[#D4AF37]" />
              Mortgage Details
            </CardTitle>
            <CardDescription>Adjust the values below to see how they affect your monthly payment.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Label htmlFor="homePrice">Home Price</Label>
              <Input
                id="homePrice"
                type="number"
                value={homePrice}
                onChange={(e) => setHomePrice(Number(e.target.value))}
                className="text-lg"
              />
              <div className="mt-2">
                <Slider
                  value={[homePrice]}
                  onValueChange={(value) => setHomePrice(value[0])}
                  max={2000000}
                  min={200000}
                  step={25000}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>$200K</span>
                  <span>$2M</span>
                </div>
              </div>
            </div>

            <div>
              <Label htmlFor="downPayment">Down Payment</Label>
              <Input
                id="downPayment"
                type="number"
                value={downPayment}
                onChange={(e) => setDownPayment(Number(e.target.value))}
                className="text-lg"
              />
              <div className="mt-2">
                <Slider
                  value={[downPayment]}
                  onValueChange={(value) => setDownPayment(value[0])}
                  max={homePrice * 0.5}
                  min={homePrice * 0.05}
                  step={5000}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>5%</span>
                  <span>50%</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-1">{results.downPaymentPercent.toFixed(1)}% of home price</p>
            </div>

            <div>
              <Label htmlFor="interestRate">Interest Rate (%)</Label>
              <Input
                id="interestRate"
                type="number"
                step="0.1"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="text-lg"
              />
              <div className="mt-2">
                <Slider
                  value={[interestRate]}
                  onValueChange={(value) => setInterestRate(value[0])}
                  max={10}
                  min={2}
                  step={0.1}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>2%</span>
                  <span>10%</span>
                </div>
              </div>
            </div>

            <div>
              <Label htmlFor="amortization">Amortization Period (Years)</Label>
              <Select value={amortization.toString()} onValueChange={(value) => setAmortization(Number(value))}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="15">15 years</SelectItem>
                  <SelectItem value="20">20 years</SelectItem>
                  <SelectItem value="25">25 years</SelectItem>
                  <SelectItem value="30">30 years</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="frequency">Payment Frequency</Label>
              <Select value={paymentFrequency} onValueChange={setPaymentFrequency}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="monthly">Monthly</SelectItem>
                  <SelectItem value="biweekly">Bi-weekly</SelectItem>
                  <SelectItem value="weekly">Weekly</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <div className="space-y-6">
          <Card className="border-0 shadow-lg bg-[#D4AF37]/5">
            <CardHeader>
              <CardTitle className="flex items-center text-[#D4AF37]">
                <PieChart className="w-5 h-5 mr-2" />
                Your Monthly Payment
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-[#D4AF37] mb-2">{formatCurrency(results.monthlyPayment)}</div>
              <p className="text-[#D4AF37]">Principal & Interest</p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-2 gap-4">
            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="text-2xl font-bold text-gray-900">{formatCurrency(results.totalInterest)}</div>
                <p className="text-sm text-gray-600">Total Interest</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="text-2xl font-bold text-gray-900">{formatCurrency(results.totalPayments)}</div>
                <p className="text-sm text-gray-600">Total Payments</p>
              </CardContent>
            </Card>
          </div>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-[#D4AF37]" />
                Payment Breakdown
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Mortgage Amount:</span>
                  <span className="font-semibold">{formatCurrency(homePrice - downPayment)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Down Payment:</span>
                  <span className="font-semibold">{formatCurrency(downPayment)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Monthly Payment:</span>
                  <span className="font-semibold text-[#D4AF37]">{formatCurrency(results.monthlyPayment)}</span>
                </div>
                <div className="pt-3 border-t">
                  <p className="text-sm text-gray-600">
                    * This calculation is for principal and interest only. Additional costs like property taxes,
                    insurance, and CMHC premiums (if applicable) are not included.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

         <div className="text-center">
  <Button
    size="lg"
    className="bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-black font-semibold"
    asChild
  >
      <Link 
        href="/contact">
    >
      Get Pre-Approved with These Numbers
    </Link>
  </Button>
</div>
        </div>
      </div>
    </div>
  )
}
