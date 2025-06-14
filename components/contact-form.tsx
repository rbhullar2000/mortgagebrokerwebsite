"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Send, Loader2 } from "lucide-react"
import Link from "next/link"

interface ContactFormProps {
  variant?: "default" | "hero"
}

export function ContactForm({ variant = "default" }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    mortgageType: "",
    propertyValue: "",
    downPayment: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean
    message?: string
  }>({})

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({})

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus({
          success: true,
          message: result.message || "Thanks for reaching out — I’ll be in touch shortly.",
        })
        setFormData({
          name: "",
          email: "",
          phone: "",
          mortgageType: "",
          propertyValue: "",
          downPayment: "",
          message: "",
        })
      } else {
        setSubmitStatus({
          success: false,
          message: result.error || "There was an error sending your message. Please try again or call me directly.",
        })
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus({
        success: false,
        message: "There was an error sending your message. Please try again or call me directly at (778) 889-7964.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear any previous error messages when user starts typing
    if (submitStatus.message && !submitStatus.success) {
      setSubmitStatus({})
    }
  }

  if (variant === "hero") {
    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              required
              disabled={isSubmitting}
            />
          </div>
          <div>
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              required
              disabled={isSubmitting}
            />
          </div>
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            required
            disabled={isSubmitting}
          />
        </div>
        <div>
          <Label htmlFor="mortgageType">I'm interested in</Label>
          <Select
            onValueChange={(value) => handleChange("mortgageType", value)}
            value={formData.mortgageType}
            disabled={isSubmitting}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="purchase">Home Purchase</SelectItem>
              <SelectItem value="renewal">Mortgage Renewal</SelectItem>
              <SelectItem value="refinance">Refinancing</SelectItem>
              <SelectItem value="investment">Investment Property</SelectItem>
              <SelectItem value="preapproval">Pre-Approval</SelectItem>
            </SelectContent>
          </Select>
        </div>
        {submitStatus.message && (
          <div
            className={`p-3 rounded-md ${submitStatus.success ? "bg-green-50 text-green-800 border border-green-200" : "bg-red-50 text-red-800 border border-red-200"}`}
          >
            {submitStatus.message}
          </div>
        )}
        <div className="space-y-3">
          <Button type="submit" className="w-full bg-[#032133] hover:bg-[#032133]/90" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Sending...
              </>
            ) : (
              "Get My Free Quote"
            )}
          </Button>
          <Button asChild className="w-full bg-[#032133] hover:bg-[#032133]/90">
            <Link href="https://r.mtg-app.com/robbhullar" target="_blank" rel="noopener noreferrer">
              Start Full Application
            </Link>
          </Button>
          <p className="text-xs text-gray-500 text-center">Secure application system</p>
        </div>
      </form>
    )
  }

  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Send className="w-5 h-5 mr-2 text-[#032133]" />
          Send Me a Message
        </CardTitle>
        <CardDescription>Fill out the form below and I’ll be in touch shortly.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="fullName">Full Name *</Label>
              <Input
                id="fullName"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                required
                disabled={isSubmitting}
              />
            </div>
            <div>
              <Label htmlFor="phoneNumber">Phone Number *</Label>
              <Input
                id="phoneNumber"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                required
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div>
            <Label htmlFor="emailAddress">Email Address *</Label>
            <Input
              id="emailAddress"
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              required
              disabled={isSubmitting}
            />
          </div>

          <div>
            <Label htmlFor="serviceType">What can I help you with? *</Label>
            <Select
              onValueChange={(value) => handleChange("mortgageType", value)}
              value={formData.mortgageType}
              disabled={isSubmitting}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="purchase">Home Purchase</SelectItem>
                <SelectItem value="renewal">Mortgage Renewal</SelectItem>
                <SelectItem value="refinance">Refinancing</SelectItem>
                <SelectItem value="investment">Investment Property</SelectItem>
                <SelectItem value="preapproval">Pre-Approval</SelectItem>
                <SelectItem value="consultation">General Consultation</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="propertyValue">Property Value (if known)</Label>
              <Input
                id="propertyValue"
                placeholder="e.g., $750,000"
                value={formData.propertyValue}
                onChange={(e) => handleChange("propertyValue", e.target.value)}
                disabled={isSubmitting}
              />
            </div>
            <div>
              <Label htmlFor="downPayment">Down Payment (if known)</Label>
              <Input
                id="downPayment"
                placeholder="e.g., $150,000 or 20%"
                value={formData.downPayment}
                onChange={(e) => handleChange("downPayment", e.target.value)}
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div>
            <Label htmlFor="additionalMessage">Additional Details</Label>
            <Textarea
              id="additionalMessage"
              placeholder="Tell me more about your situation, timeline, or any specific questions you have..."
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              rows={4}
              disabled={isSubmitting}
            />
          </div>

          {submitStatus.message && (
            <div
              className={`p-4 rounded-md ${submitStatus.success ? "bg-green-50 text-green-800 border border-green-200" : "bg-red-50 text-red-800 border border-red-200"}`}
            >
              {submitStatus.message}
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4">
            <Button type="submit" className="flex-1 bg-[#032133] hover:bg-[#032133]/90" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </>
              )}
            </Button>
            <Button type="button" variant="outline" className="flex-1" asChild>
              <a href="tel:+16041234567">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </a>
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
