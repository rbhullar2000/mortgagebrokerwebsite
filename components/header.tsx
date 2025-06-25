"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navigationItems = [
    { href: "/#services", label: "Services" },
    { href: "/purchase", label: "Purchase" },
    { href: "/renewal", label: "Renewal" },
    { href: "/blog", label: "Blog" },
    { href: "/#contact", label: "Contact" },
  ]

  return (
    <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center space-x-3 md:space-x-10">
            <Link href="/" className="flex items-center space-x-3 md:space-x-10">
              {/*  <div className="min-w-0">
                <h1 className="text-lg md:text-xl font-bold text-gray-900 truncate">BC Mortgage Team</h1>
                <p className="text-xs md:text-sm text-gray-600 truncate">Smart Mortgage Solutions</p>
              </div> */}
              <div className="w-16 h-12 md:w-24 md:h-18 flex items-center justify-center flex-shrink-0">
                <Image
                  src="/BCmortgageteamlogo.jpeg"
                  alt="BC Mortgage Team"
                  width={96}
                  height={72}
                  className="object-contain w-full h-full"
                />
              </div>
    {/*            <div className="w-16 h-12 md:w-24 md:h-18 flex items-center justify-center flex-shrink-0">
                <Image
                  src="/BRX_brand_black.png"
                  alt="BRX Mortgage"
                  width={96}
                  height={72}
                  className="object-contain w-full h-full"
                />
              </div> */}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navigationItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-gray-700 hover:text-[#032133] transition-colors">
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Apply Button */}
          <div className="hidden md:flex items-center">
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

          {/* Mobile Menu */}
          <div className="flex items-center space-x-2 lg:hidden">
            {/* Mobile Apply Button */}
            <Button
              asChild
              size="sm"
              className="bg-[#032133] hover:bg-[#032133]/90 h-9 px-3 text-sm md:hidden"
              onClick={() => window.trackApplicationClick?.("header-mobile")}
            >
              <Link href="https://r.mtg-app.com/robbhullar" target="_blank" rel="noopener noreferrer">
                Apply
              </Link>
            </Button>

            {/* Hamburger Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="h-9 w-9 p-0">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  <div className="flex items-center space-x-3 pb-4 border-b">
                    <div className="w-12 h-9 flex items-center justify-center">
                      <Image
                        src="/BRX_brand_black.png"
                        alt="BRX Mortgage"
                        width={48}
                        height={36}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h2 className="font-bold text-gray-900">BC Mortgage Team</h2>
                      <p className="text-sm text-gray-600">Smart Mortgage Solutions</p>
                    </div>
                  </div>

                  <nav className="flex flex-col space-y-3">
                    {navigationItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="text-lg font-medium text-gray-700 hover:text-[#032133] transition-colors py-2 px-3 rounded-md hover:bg-gray-50"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </nav>

                       <div className="pt-4 border-t">
                    <Button
                      asChild
                      className="w-full bg-[#032133] hover:bg-[#032133]/90 h-12 text-base"
                      onClick={() => {
                        window.trackApplicationClick?.("header-mobile-menu")
                        setIsOpen(false)
                      }}
                    >
                      <Link href="https://r.mtg-app.com/robbhullar" target="_blank" rel="noopener noreferrer">
                        Apply Now
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
