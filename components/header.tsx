"use client"

import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import Link from "next/link"

export function Header() {
  return (
    <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-[#032133] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">RB</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Rob Bhullar</h1>
                <p className="text-sm text-gray-600">Mortgage Broker</p>
              </div>
            </Link>
            <div className="h-8 border-l border-gray-300 mx-2 hidden md:block"></div>
            <div className="hidden md:block">
              {/* Replace with actual BRX logo when available */}
              <div className="text-sm text-gray-500">Powered by</div>
              <div className="text-[#032133] font-semibold">BRX Mortgage</div>
              {/* Uncomment when you have the logo
              <Image 
                src="/images/brx-logo.png" 
                alt="BRX Mortgage" 
                width={100} 
                height={30} 
              />
              */}
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/#services" className="text-gray-700 hover:text-[#032133] transition-colors">
              Services
            </Link>
            <Link href="/purchase" className="text-gray-700 hover:text-[#032133] transition-colors">
              Purchase
            </Link>
            <Link href="/renewal" className="text-gray-700 hover:text-[#032133] transition-colors">
              Renewal
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-[#032133] transition-colors">
              Blog
            </Link>
            <Link href="/#rates" className="text-gray-700 hover:text-[#032133] transition-colors">
              Rates
            </Link>
            <Link href="/#contact" className="text-gray-700 hover:text-[#032133] transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center space-x-3">
            {/*  <Button asChild variant="outline" size="sm" className="h-10">
              <Link href="tel:+1234567890" onClick={() => window.trackPhoneClick?.()}>
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Link>
            </Button> */}
            <Button
              asChild
              size="sm"
              className="bg-[#032133] hover:bg-[#032133]/90 h-10"
              onClick={() => window.trackApplicationClick?.("header")}
            >
              <Link href="https://r.mtg-app.com/robbhullar" target="_blank" rel="noopener noreferrer">
                Apply Now
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
