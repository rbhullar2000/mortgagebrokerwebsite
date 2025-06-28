"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ResourceDownloadModal } from "./resource-download-modal"
import { FileSpreadsheet, Calculator, TrendingUp, Home } from "lucide-react"

const resources = [
  {
    id: "amortization-tool",
    name: "Amortization Tool",
    description: "Calculate your mortgage payments and see how much interest you'll pay over the life of your loan.",
    file: "BC_Mortgage_Team_Amortization_Tool.xlsx",
    icon: Calculator,
    category: "Calculators",
  },
  {
    id: "affordability-calculator",
    name: "Home Affordability Calculator",
    description: "Determine how much house you can afford based on your income and expenses.",
    file: "BC_Mortgage_Team_Affordability_Calculator.xlsx",
    icon: Home,
    category: "Calculators",
  },
  {
    id: "rate-comparison",
    name: "Rate Comparison Tool",
    description: "Compare different mortgage rates and terms to find the best option for you.",
    file: "BC_Mortgage_Team_Rate_Comparison.xlsx",
    icon: TrendingUp,
    category: "Calculators",
  },
]

export function ResourcesSection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#032133] mb-4">Free Mortgage Resources</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Download our free tools and calculators to help you make informed mortgage decisions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource) => {
            const IconComponent = resource.icon
            return (
              <Card key={resource.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-[#032133]/10 rounded-lg">
                      <IconComponent className="h-6 w-6 text-[#032133]" />
                    </div>
                    <span className="text-sm font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {resource.category}
                    </span>
                  </div>
                  <CardTitle className="text-xl">{resource.name}</CardTitle>
                  <CardDescription className="text-gray-600">{resource.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResourceDownloadModal
                    resourceName={resource.name}
                    resourceFile={resource.file}
                    resourceDescription={resource.description}
                  >
                    <Button className="w-full bg-[#032133] hover:bg-[#032133]/90">
                      <FileSpreadsheet className="h-4 w-4 mr-2" />
                      Download Excel Tool
                    </Button>
                  </ResourceDownloadModal>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            All resources are free and require only your email address. We respect your privacy and won't spam you.
          </p>
        </div>
      </div>
    </section>
  )
}
