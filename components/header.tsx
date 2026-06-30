"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { usePathname } from "next/navigation"

declare global {
  interface Window {
    trackApplicationClick?: (location: string) => void
    twq?: (event: string, id: string, data?: Record<string, string>) => void
  }
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    const path = href.split("#")[0]
    return path !== "/" && pathname === path
  }

  const navigationItems = [
    { href: "/", label: "Start Here" },
    { href: "/strategy", label: "Mortgage Strategy" },
    { href: "/break-even-calculator", label: "Refinance Calculator" },
    { href: "/learn", label: "Learn" },
    { href: "/blog", label: "Resources" },
    { href: "/#contact", label: "Contact" },
  ]

  return (
    <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center space-x-3 md:space-x-10">
            <Link href="/" className="flex items-center space-x-3 md:space-x-10">
              <div className="w-16 h-12 md:w-24 md:h-18 flex items-center justify-center flex-shrink-0">
                <Image
                  src="/BCmortgageteamlogo.jpeg"
                  alt="BC Mortgage Team"
                  width={96}
                  height={72}
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="w-16 h-12 md:w-24 md:h-18 flex items-center justify-center flex-shrink-0">
                <Image
                  src="/BRX_brand_black.png"
                  alt="BRX Mortgage"
                  width={96}
                  height={72}
                  className="object-contain w-full h-full"
                />
              </div>
            </Link>
          </div>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors font-medium pb-0.5 border-b-2 ${
                  isActive(item.href)
                    ? "text-[#032133] border-[#D4AF37]"
                    : "text-gray-700 hover:text-[#032133] border-transparent"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              asChild
              size="sm"
              className="bg-[#C79A2B] hover:bg-[#D4AF37]/90 text-white h-10 font-semibold"
            >
              <Link href="/mortgage-checker">
                Am I Overpaying? (2 min) →
              </Link>
            </Button>
            <Button
              asChild
              size="sm"
              className="bg-[#1D2D44] hover:bg-[#243854]/90 h-10"
            >
              <Link href="https://r.mtg-app.com/robbhullar" target="_blank" rel="noopener noreferrer">
                Apply Now →
              </Link>
            </Button>
          </div>

          {/* Tablet: show Apply Now button + hamburger, hide checker (too cramped) */}
          <div className="hidden md:flex lg:hidden items-center gap-2">
            <Button
              asChild
              size="sm"
              className="bg-[#1D2D44] hover:bg-[#243854]/90 h-10"
            >
              <Link href="https://r.mtg-app.com/robbhullar" target="_blank" rel="noopener noreferrer">
                Apply Now
              </Link>
            </Button>
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
                        className={`text-lg font-medium transition-colors py-2 px-3 rounded-md ${
                          isActive(item.href)
                            ? "text-[#032133] border-b-2 border-[#D4AF37]"
                            : "text-gray-700 hover:text-[#032133] hover:bg-gray-50"
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </nav>
                  <div className="pt-4 border-t space-y-3">
                    <Button
                      asChild
                      className="w-full bg-[#C79A2B] hover:bg-[#D4AF37]/90 text-white h-12 text-base font-semibold"
                      onClick={() => setIsOpen(false)}
                    >
                      <Link href="/mortgage-checker">
                        Am I Overpaying? (2 min) →
                      </Link>
                    </Button>
                    <Button
                      asChild
                      className="w-full bg-[#032133] hover:bg-[#032133]/90 h-12 text-base"
                      onClick={() => setIsOpen(false)}
                    >
                      <Link href="https://r.mtg-app.com/robbhullar" target="_blank" rel="noopener noreferrer">
                        Apply Now →
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Mobile: Apply + hamburger */}
          <div className="flex items-center space-x-2 md:hidden">
            <Button
              asChild
              size="sm"
              className="bg-[#1D2D44] hover:bg-[#243854]/90 h-9 px-3 text-sm"
            >
              <Link href="https://r.mtg-app.com/robbhullar" target="_blank" rel="noopener noreferrer">
                Apply Now →
              </Link>
            </Button>
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
                        className={`text-lg font-medium transition-colors py-2 px-3 rounded-md ${
                          isActive(item.href)
                            ? "text-[#032133] border-b-2 border-[#D4AF37]"
                            : "text-gray-700 hover:text-[#032133] hover:bg-gray-50"
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </nav>
                  <div className="pt-4 border-t space-y-3">
                    {/* Gold checker button — most valuable lead action */}
                    <Button
                      asChild
                      className="w-full bg-[#C79A2B] hover:bg-[#D4AF37]/90 text-white h-12 text-base font-semibold"
                      onClick={() => setIsOpen(false)}
                    >
                      <Link href="/mortgage-checker">
                        Am I Overpaying? (2 min) →
                      </Link>
                    </Button>
                    <Button
                      asChild
                      className="w-full bg-[#032133] hover:bg-[#032133]/90 h-12 text-base"
                      onClick={() => setIsOpen(false)}
                    >
                      <Link href="https://r.mtg-app.com/robbhullar" target="_blank" rel="noopener noreferrer">
                        Apply Now →
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
