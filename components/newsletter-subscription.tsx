"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Loader2, Mail, CheckCircle } from "lucide-react"

export function NewsletterSubscription() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<{
    type?: "success" | "error"
    message?: string
  }>({})

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) {
      setStatus({
        type: "error",
        message: "Please enter your email address",
      })
      return
    }

    setIsSubmitting(true)
    setStatus({})

    try {
      const response = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      const result = await response.json()

      if (result.success) {
        setStatus({
          type: "success",
          message: "Thanks for subscribing! You'll receive our latest mortgage insights and market updates.",
        })
        setEmail("")
      } else {
        setStatus({
          type: "error",
          message: result.error || "Something went wrong. Please try again.",
        })
      }
    } catch (error) {
      console.error("Newsletter subscription error:", error)
      setStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (status.type === "success") {
    return (
      <div className="bg-green-50 p-6 rounded-lg border border-green-200">
        <div className="flex items-center mb-2">
          <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
          <h3 className="font-semibold text-green-800">Successfully Subscribed!</h3>
        </div>
        <p className="text-green-700 text-sm">{status.message}</p>
      </div>
    )
  }

  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <div className="flex items-center mb-4">
        <Mail className="w-5 h-5 text-[#032133] mr-2" />
        <h3 className="text-xl font-bold text-gray-900">Subscribe to Our Newsletter</h3>
      </div>
      <p className="text-gray-600 mb-4">
        Get the latest mortgage news, rate updates, and expert tips delivered to your inbox weekly.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div>
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isSubmitting}
              className="w-full"
            />
          </div>

          {status.message && status.type === "error" && (
            <div className="text-red-600 text-sm bg-red-50 p-3 rounded border border-red-200">{status.message}</div>
          )}

          <Button type="submit" className="w-full bg-[#032133] hover:bg-[#032133]/90" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Subscribing...
              </>
            ) : (
              <>
                <Mail className="w-4 h-4 mr-2" />
                Subscribe Now
              </>
            )}
          </Button>

          <p className="text-xs text-gray-500 text-center">We respect your privacy. Unsubscribe at any time.</p>
        </div>
      </form>
    </div>
  )
}
