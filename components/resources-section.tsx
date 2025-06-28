"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileSpreadsheet, Calculator, TrendingUp } from "lucide-react"
import { ResourceDownloadModal } from "./resource-download-modal"

export function ResourcesSection() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedResource, setSelectedResource] = useState<{
    name: string
    description: string
    fileName: string
  } | null>(null)

  const resources = [
    {
      name: "Amortization Tool",
      description: "Calculate your mortgage payments and see how much interest you'll pay over the life of your loan.",
      fileName: "BC_Mortgage_Team_Amortization_Tool.xlsx",
      icon: FileSpreadsheet,
      color: "text-green-600",
    },
    {
      name: "Affordability Calculator",
      description: "Determine how much home you can afford based on your income and expenses.",
      fileName: "BC_Mortgage_Team_Affordability_Calculator.xlsx",
      icon: Calculator,
      color: "text-blue-600",
    },
    {
      name: "Rate Comparison Tool",
      description: "Compare different mortgage rates and terms to find the best option for you.",
      fileName: "BC_Mortgage_Team_Rate_Comparison_Tool.xlsx",
      icon: TrendingUp,
      color: "text-purple-600",
    },
  ]

  const handleResourceClick = (resource: (typeof resources)[0]) => {
    setSelectedResource({
      name: resource.name,
      description: resource.description,
      fileName: resource.fileName,
    })
    setModalOpen(true)
  }

  return (
    <>
      <section className="py-16 bg-[#F4F6F8]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1D2D44] mb-4">Free Mortgage Tools & Resources</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Download our professional Excel tools to help you make informed mortgage decisions. All resources are free
              and require only your email address.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {resources.map((resource, index) => {
              const IconComponent = resource.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow bg-white">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 p-3 bg-gray-50 rounded-full w-fit">
                      <IconComponent className={`h-8 w-8 ${resource.color}`} />
                    </div>
                    <CardTitle className="text-xl text-[#1D2D44]">{resource.name}</CardTitle>
                    <CardDescription className="text-gray-600">{resource.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <Button
                      onClick={() => handleResourceClick(resource)}
                      className="w-full bg-[#032133] hover:bg-[#032133]/90"
                    >
                      <FileSpreadsheet className="mr-2 h-4 w-4" />
                      Download Excel Tool
                    </Button>
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

      {selectedResource && (
        <ResourceDownloadModal
          isOpen={modalOpen}
          onClose={() => {
            setModalOpen(false)
            setSelectedResource(null)
          }}
          resourceName={selectedResource.name}
          resourceDescription={selectedResource.description}
          fileName={selectedResource.fileName}
        />
      )}
    </>
  )
}
