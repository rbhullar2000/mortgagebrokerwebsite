"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileSpreadsheet, Calculator, TrendingUp } from "lucide-react"
import { ResourceDownloadModal } from "./resource-download-modal"

export function ResourcesSection() {
  const [modalState, setModalState] = useState<{
    isOpen: boolean
    resourceName: string
    resourceDescription: string
    fileName: string
  }>({
    isOpen: false,
    resourceName: "",
    resourceDescription: "",
    fileName: "",
  })

  const openModal = (resourceName: string, resourceDescription: string, fileName: string) => {
    setModalState({
      isOpen: true,
      resourceName,
      resourceDescription,
      fileName,
    })
  }

  const closeModal = () => {
    setModalState({
      isOpen: false,
      resourceName: "",
      resourceDescription: "",
      fileName: "",
    })
  }

  const resources = [
    {
      title: "Amortization Tool",
      description: "Calculate your mortgage payments and see how much interest you'll pay over the life of your loan.",
      icon: FileSpreadsheet,
      fileName: "BC_Mortgage_Team_Amortization_Tool.xlsx",
      color: "text-green-600",
    },
    {
      title: "Affordability Calculator",
      description: "Determine how much house you can afford based on your income and expenses.",
      icon: Calculator,
      fileName: "BC_Mortgage_Team_Affordability_Calculator.xlsx",
      color: "text-blue-600",
    },
    {
      title: "Rate Comparison Tool",
      description: "Compare different mortgage rates and terms to find the best option for you.",
      icon: TrendingUp,
      fileName: "BC_Mortgage_Team_Rate_Comparison_Tool.xlsx",
      color: "text-purple-600",
    },
  ]

  return (
    <>
      <section className="py-16 bg-[#F4F6F8]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1D2D44] mb-4">Free Mortgage Tools & Resources</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Download our professional Excel tools to help you make informed mortgage decisions. All resources are free
              and require only your email address.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {resources.map((resource, index) => {
              const IconComponent = resource.icon
              return (
                <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto mb-4 w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center">
                      <IconComponent className={`h-8 w-8 ${resource.color}`} />
                    </div>
                    <CardTitle className="text-xl font-bold text-[#1D2D44]">{resource.title}</CardTitle>
                    <CardDescription className="text-gray-600">{resource.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Button
                      onClick={() => openModal(resource.title, resource.description, resource.fileName)}
                      className="w-full bg-[#032133] hover:bg-[#032133]/90 text-white"
                    >
                      <FileSpreadsheet className="mr-2 h-4 w-4" />
                      Download Excel Tool
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="text-center mt-12">
            <p className="text-sm text-gray-500 max-w-2xl mx-auto">
              All resources are free and require only your email address. We respect your privacy and won't spam you.
            </p>
          </div>
        </div>
      </section>

      <ResourceDownloadModal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        resourceName={modalState.resourceName}
        resourceDescription={modalState.resourceDescription}
        fileName={modalState.fileName}
      />
    </>
  )
}
