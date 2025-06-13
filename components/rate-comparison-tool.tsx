"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { InfoIcon } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import Link from "next/link"

// Sample rate data - in a real implementation, this would come from an API
const rateData = {
  fixed: [
    { term: "1-Year", bankRate: 6.49, myRate: 5.99, lender: "MCAP" },
    { term: "2-Year", bankRate: 6.29, myRate: 5.79, lender: "TD Bank" },
    { term: "3-Year", bankRate: 5.99, myRate: 5.49, lender: "Scotiabank" },
    { term: "4-Year", bankRate: 5.79, myRate: 5.29, lender: "First National" },
    { term: "5-Year", bankRate: 5.59, myRate: 5.09, lender: "RBC" },
  ],
  variable: [
    { term: "3-Year", bankRate: "Prime - 0.10%", myRate: "Prime - 0.60%", lender: "HSBC" },
    { term: "5-Year", bankRate: "Prime - 0.15%", myRate: "Prime - 0.70%", lender: "TD Bank" },
  ],
}

export function RateComparisonTool() {
  const [rateType, setRateType] = useState("fixed")
  const [showDetails, setShowDetails] = useState(false)

  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Compare Today's Best Rates</CardTitle>
          <Badge variant="outline" className="text-[#032133]">
            Updated: June 11, 2024
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="fixed" className="w-full" onValueChange={setRateType}>
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="fixed">Fixed Rates</TabsTrigger>
            <TabsTrigger value="variable">Variable Rates</TabsTrigger>
          </TabsList>
          <TabsContent value="fixed">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-4 px-2">Term</th>
                    <th className="text-left py-4 px-2">
                      <div className="flex items-center">
                        Bank Posted Rate
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <InfoIcon className="w-4 h-4 ml-1 text-gray-400" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="max-w-xs">
                                Posted rates are what banks advertise publicly. Most customers can negotiate better
                                rates.
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                    </th>
                    <th className="text-left py-4 px-2">
                      <div className="flex items-center">
                        My Best Rate
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <InfoIcon className="w-4 h-4 ml-1 text-gray-400" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="max-w-xs">
                                These are the best rates I can offer through my network of 50+ lenders. Rates may vary
                                based on your specific situation.
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                    </th>
                    {showDetails && <th className="text-left py-4 px-2">Lender</th>}
                    <th className="text-right py-4 px-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {rateData.fixed.map((rate, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="py-4 px-2 font-medium">{rate.term}</td>
                      <td className="py-4 px-2">{rate.bankRate}%</td>
                      <td className="py-4 px-2 text-[#032133] font-bold">{rate.myRate}%</td>
                      {showDetails && <td className="py-4 px-2">{rate.lender}</td>}
                      <td className="py-4 px-2 text-right">
                        <Button
                          size="sm"
                          className="bg-[#032133] hover:bg-[#032133]/90"
                          asChild
                          onClick={() =>
                            window.trackApplicationClick?.(`rate_table_${rate.term.toLowerCase().replace("-", "_")}`)
                          }
                        >
                          <Link href="https://r.mtg-app.com/robbhullar" target="_blank" rel="noopener noreferrer">
                            Apply
                          </Link>
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </TabsContent>
          <TabsContent value="variable">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-4 px-2">Term</th>
                    <th className="text-left py-4 px-2">
                      <div className="flex items-center">
                        Bank Posted Rate
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <InfoIcon className="w-4 h-4 ml-1 text-gray-400" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="max-w-xs">
                                Posted rates are what banks advertise publicly. Most customers can negotiate better
                                rates.
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                    </th>
                    <th className="text-left py-4 px-2">
                      <div className="flex items-center">
                        My Best Rate
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <InfoIcon className="w-4 h-4 ml-1 text-gray-400" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="max-w-xs">
                                These are the best rates I can offer through my network of 50+ lenders. Current prime
                                rate is 7.20%.
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                    </th>
                    {showDetails && <th className="text-left py-4 px-2">Lender</th>}
                    <th className="text-right py-4 px-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {rateData.variable.map((rate, index) => (
                    <tr key={index} className="border-b hover:bg-slate-50">
                      <td className="py-4 px-2 font-medium">{rate.term}</td>
                      <td className="py-4 px-2">{rate.bankRate}</td>
                      <td className="py-4 px-2 text-[#032133] font-bold">{rate.myRate}</td>
                      {showDetails && <td className="py-4 px-2">{rate.lender}</td>}
                      <td className="py-4 px-2 text-right">
                        <Button
                          size="sm"
                          className="bg-[#032133] hover:bg-[#032133]/90"
                          asChild
                          onClick={() =>
                            window.trackApplicationClick?.(
                              `rate_table_variable_${rate.term.toLowerCase().replace("-", "_")}`,
                            )
                          }
                        >
                          <Link href="https://r.mtg-app.com/robbhullar" target="_blank" rel="noopener noreferrer">
                            Apply
                          </Link>
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </TabsContent>
        </Tabs>
        <div className="mt-6 flex justify-between items-center">
          <Button variant="link" onClick={() => setShowDetails(!showDetails)} className="text-[#032133]">
            {showDetails ? "Hide lender details" : "Show lender details"}
          </Button>
          <div className="text-sm text-gray-500">
            <p>
              Rates subject to change without notice. OAC. Some conditions apply.{" "}
              <Button variant="link" className="p-0 h-auto text-[#032133]" asChild>
                <Link href="/terms">See terms</Link>
              </Button>
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
