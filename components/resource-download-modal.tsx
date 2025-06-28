"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Download, FileSpreadsheet } from "lucide-react"
import { toast } from "sonner"

interface ResourceDownloadModalProps {
  resourceName: string
  resourceFile: string
  resourceDescription: string
  children: React.ReactNode
}

export function ResourceDownloadModal({
  resourceName,
  resourceFile,
  resourceDescription,
  children,
}: ResourceDownloadModalProps) {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const handleDownload = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) {
      toast.error("Please enter your email address")
      return
    }

    setIsLoading(true)

    try {
      const response = await fetch("/api/resource-download", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          resourceName,
          resourceFile,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to process request")
      }

      const data = await response.json()

      if (data.success) {
        // Create download link
        const link = document.createElement("a")
        link.href = `/resources/${resourceFile}`
        link.download = resourceFile
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)

        toast.success("Resource sent to your email and download started!")
        setIsOpen(false)
        setEmail("")
      } else {
        throw new Error(data.error || "Failed to process request")
      }
    } catch (error) {
      console.error("Download error:", error)
      toast.error("Failed to process your request. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <FileSpreadsheet className="h-5 w-5 text-green-600" />
            Download {resourceName}
          </DialogTitle>
          <DialogDescription>{resourceDescription}</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleDownload} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <p className="text-sm text-gray-500">
              We'll email you the resource and keep you updated with mortgage tips.
            </p>
          </div>
          <div className="flex gap-2">
            <Button type="submit" disabled={isLoading} className="flex-1 bg-[#032133] hover:bg-[#032133]/90">
              {isLoading ? (
                "Processing..."
              ) : (
                <>
                  <Download className="h-4 w-4 mr-2" />
                  Download Resource
                </>
              )}
            </Button>
            <Button type="button" variant="outline" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
