"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Download, Check } from "lucide-react"

interface LeadMagnetCardProps {
  title: string
  description: string
  image: string
  formId: string
}

export function LeadMagnetCard({ title, description, image, formId }: LeadMagnetCardProps) {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate form submission
    setTimeout(() => {
      console.log(`Form ${formId} submitted with email: ${email}`)
      window.trackEvent?.("lead_magnet_download", {
        form_id: formId,
        resource: title,
      })
      setLoading(false)
      setSubmitted(true)
    }, 1000)
  }

  return (
    <Card className="border-0 shadow-lg overflow-hidden">
      <div className="h-48 overflow-hidden">
        <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4">{description}</p>
        {!submitted ? (
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <Label htmlFor={`email-${formId}`}>Email</Label>
                <Input
                  id={`email-${formId}`}
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-[#032133] hover:bg-[#032133]/90" disabled={loading}>
                {loading ? (
                  "Sending..."
                ) : (
                  <>
                    <Download className="w-4 h-4 mr-2" />
                    Download Free Guide
                  </>
                )}
              </Button>
            </div>
          </form>
        ) : (
          <div className="text-center py-4">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-6 h-6 text-green-600" />
            </div>
            <h4 className="font-semibold mb-2">Thank You!</h4>
            <p className="text-sm text-gray-600">Check your email for your download link.</p>
          </div>
        )}
      </CardContent>
      <CardFooter className="text-xs text-gray-500 border-t pt-4">
        We respect your privacy and will never share your information.
      </CardFooter>
    </Card>
  )
}
