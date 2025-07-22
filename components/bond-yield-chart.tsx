"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, BarChart3 } from "lucide-react"
import { Line, LineChart, XAxis, YAxis, CartesianGrid } from "recharts"

const bondYieldData = [
  { month: "Jan", date: "2025-01", yield: 3.15 },
  { month: "Feb", date: "2025-02", yield: 3.22 },
  { month: "Mar", date: "2025-03", yield: 3.08 },
  { month: "Apr", date: "2025-04", yield: 3.18 },
  { month: "May", date: "2025-05", yield: 3.28 },
  { month: "Jun", date: "2025-06", yield: 3.52 },
  { month: "Jul", date: "2025-07", yield: 3.48 },
]

const chartConfig = {
  yield: {
    label: "Bond Yield",
    color: "#D4AF37",
  },
}

export function BondYieldChart() {
  const startYield = bondYieldData[0].yield
  const endYield = bondYieldData[bondYieldData.length - 1].yield
  const basisPointChange = Math.round((endYield - startYield) * 100)
  const peakYield = Math.max(...bondYieldData.map((d) => d.yield))
  const lowYield = Math.min(...bondYieldData.map((d) => d.yield))

  return (
    <Card className="w-full">
      <CardHeader className="text-center pb-4">
        <div className="flex items-center justify-center mb-4">
          <div className="w-16 h-16 bg-[#F4F6F8] rounded-lg flex items-center justify-center">
            <BarChart3 className="w-8 h-8 text-[#D4AF37]" />
          </div>
        </div>
        <CardTitle className="text-2xl lg:text-3xl font-bold text-[#1D2D44]">
          5-Year Government of Canada Bond Yield - YTD 2025
        </CardTitle>
        <CardDescription className="text-lg text-gray-600 mt-2">
          Track how bond yields impact fixed mortgage rates
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="mb-6">
          <ChartContainer config={chartConfig} className="h-[400px] w-full">
            <LineChart data={bondYieldData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: "#64748b", fontSize: 12 }} />
              <YAxis
                domain={["dataMin - 0.1", "dataMax + 0.1"]}
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#64748b", fontSize: 12 }}
                tickFormatter={(value) => `${value.toFixed(2)}%`}
              />
              <ChartTooltip
                content={
                  <ChartTooltipContent
                    formatter={(value, name) => [`${Number(value).toFixed(2)}%`, "Bond Yield"]}
                    labelFormatter={(label) => `${label} 2025`}
                  />
                }
              />
              <Line
                type="monotone"
                dataKey="yield"
                stroke="#D4AF37"
                strokeWidth={3}
                dot={{ fill: "#D4AF37", strokeWidth: 2, r: 5 }}
                activeDot={{ r: 7, stroke: "#D4AF37", strokeWidth: 2, fill: "#fff" }}
              />
            </LineChart>
          </ChartContainer>
        </div>

        {/* Key Statistics */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="text-center p-4 bg-[#F4F6F8] rounded-lg">
            <div className="text-2xl font-bold text-[#1D2D44] mb-2">
              Jan 2025: {startYield}% → Jul 2025: {endYield}%
            </div>
            <div className="flex items-center justify-center space-x-2">
              <TrendingUp className="w-5 h-5 text-[#D4AF37]" />
              <span className="text-lg font-semibold text-[#032133]">+{basisPointChange} basis points YTD</span>
            </div>
          </div>

          <div className="text-center p-4 bg-[#F4F6F8] rounded-lg">
            <div className="text-sm text-gray-600 mb-2">Peak & Low</div>
            <div className="text-lg font-semibold text-[#1D2D44]">
              Peak in June: {peakYield}% | Low in March: {lowYield}%
            </div>
          </div>
        </div>

        {/* Key Insight */}
        <div className="bg-gradient-to-r from-[#F4F6F8] to-white border-l-4 border-[#D4AF37] p-6 rounded-lg">
          <div className="flex items-start space-x-3">
            <Badge className="bg-[#032133] text-white mt-1">Key Insight</Badge>
            <div>
              <p className="text-gray-700 leading-relaxed">
                The 5-year GoC bond yield has risen {basisPointChange} basis points year-to-date, with most of the
                increase occurring since May 2025. This upward pressure directly translates to higher fixed mortgage
                rates, even as the Bank of Canada holds its policy rate steady.
              </p>
            </div>
          </div>
        </div>

        {/* Impact on Mortgages */}
        <div className="mt-6 p-4 bg-white border border-[#D4AF37] rounded-lg">
          <h4 className="font-semibold text-[#1D2D44] mb-2">Impact on Your Mortgage</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Fixed mortgage rates typically move with 5-year bond yields</li>
            <li>• A {basisPointChange} basis point increase could mean 0.25-0.35% higher fixed rates</li>
            <li>• Consider locking in rates if you're planning to purchase or renew soon</li>
            <li>• Variable rates remain tied to Bank of Canada policy rate</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
