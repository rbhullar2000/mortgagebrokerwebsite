"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Instagram, Menu } from "lucide-react"
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

const instagramUrl = "https://www.instagram.com/thebcmortgageteam"

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
    // { href: "/break-even-calculator", label: "Refinance Calculator" },
    {
      href: "/#mortgage-analysis-centre",
      label: "Analysis Centre",
    },
    { href: "/learn", label: "Learn" },
    // { href: "/blog", label: "Resources" },
    { href: "/#contact", label: "Contact" },
  ]

  return (
    <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logos */}
          <div className="flex items-center space-x-3 md:space-x-10">
            <Link
              href="/"
              className="flex items-center space-x-3 md:space-x-10"
              aria-label="BC Mortgage Team home"
            >
              <div className="flex h-12 w-16 flex-shrink-0 items-center justify-center md:h-18 md:w-24">
                <Image
                  src="/BCmortgageteamlogo.jpeg"
                  alt="BC Mortgage Team"
                  width={96}
                  height={72}
                  className="h-full w-full object-contain"
                  priority
                />
              </div>

              <div className="flex h-12 w-16 flex-shrink-0 items-center justify-center md:h-18 md:w-24">
                <Image
                  src="/BRX_brand_black.png"
                  alt="BRX Mortgage"
                  width={96}
                  height={72}
                  className="h-full w-full object-contain"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav
            className="hidden items-center space-x-6 lg:flex"
            aria-label="Main navigation"
          >
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`border-b-2 pb-0.5 font-medium transition-colors ${
                  isActive(item.href)
                    ? "border-[#D4AF37] text-[#032133]"
                    : "border-transparent text-gray-700 hover:text-[#032133]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop social link and CTAs */}
          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow BC Mortgage Team on Instagram"
              title="@thebcmortgageteam"
              className="flex h-10 items-center gap-2 rounded-full border border-gray-200 px-3 text-sm font-medium text-[#1D2D44] transition-colors hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-white"
            >
              <Instagram className="h-5 w-5" />
              <span>Instagram</span>
            </Link>

            <Button
              asChild
              size="sm"
              className="h-10 bg-[#C79A2B] font-semibold text-white hover:bg-[#D4AF37]/90"
            >
              <Link href="/mortgage-checker">
                Am I Overpaying? 2 min checker →
              </Link>
            </Button>

            <Button
              asChild
              size="sm"
              className="h-10 bg-[#1D2D44] hover:bg-[#243854]/90"
            >
              <Link
                href="https://r.mtg-app.com/robbhullar"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apply Now →
              </Link>
            </Button>
          </div>

          {/* Tablet: Apply Now button and hamburger */}
          <div className="hidden items-center gap-2 md:flex lg:hidden">
            <Link
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow BC Mortgage Team on Instagram"
              className="flex h-9 items-center gap-2 rounded-full px-3 text-sm font-medium text-[#1D2D44] transition-colors hover:bg-[#F4F6F8] hover:text-[#C79A2B]"
            >
              <Instagram className="h-5 w-5" />
              <span>Instagram</span>
            </Link>

            <Button
              asChild
              size="sm"
              className="h-10 bg-[#1D2D44] hover:bg-[#243854]/90"
            >
              <Link
                href="https://r.mtg-app.com/robbhullar"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apply Now
              </Link>
            </Button>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-9 w-9 p-0"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="w-[300px] sm:w-[400px]"
              >
                <div className="mt-8 flex flex-col space-y-4">
                  <div className="flex items-center space-x-3 border-b pb-4">
                    <div className="flex h-9 w-12 items-center justify-center">
                      <Image
                        src="/BCmortgageteamlogo.jpeg"
                        alt="BC Mortgage Team"
                        width={48}
                        height={36}
                        className="object-contain"
                      />
                    </div>

                    <div>
                      <h2 className="font-bold text-gray-900">
                        BC Mortgage Team
                      </h2>

                      <p className="text-sm text-gray-600">
                        Right Mortgage Strategy
                      </p>
                    </div>
                  </div>

                  <nav
                    className="flex flex-col space-y-3"
                    aria-label="Tablet navigation"
                  >
                    {navigationItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`rounded-md px-3 py-2 text-lg font-medium transition-colors ${
                          isActive(item.href)
                            ? "border-b-2 border-[#D4AF37] text-[#032133]"
                            : "text-gray-700 hover:bg-gray-50 hover:text-[#032133]"
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </nav>

                  {/* Instagram */}
                  <div className="border-t pt-4">
                    <Link
                      href={instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 rounded-md px-3 py-2 text-gray-700 transition-colors hover:bg-gray-50 hover:text-[#032133]"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F4F6F8] text-[#1D2D44]">
                        <Instagram className="h-5 w-5" />
                      </span>

                      <span>
                        <span className="block font-semibold">
                          Follow on Instagram
                        </span>

                        <span className="block text-sm text-gray-500">
                          @thebcmortgageteam
                        </span>
                      </span>
                    </Link>
                  </div>

                  <div className="space-y-3 border-t pt-4">
                    <Button
                      asChild
                      className="h-12 w-full bg-[#C79A2B] text-base font-semibold text-white hover:bg-[#D4AF37]/90"
                    >
                      <Link
                        href="/mortgage-checker"
                        onClick={() => setIsOpen(false)}
                      >
                        Am I Overpaying? 2 min checker →
                      </Link>
                    </Button>

                    <Button
                      asChild
                      className="h-12 w-full bg-[#032133] text-base hover:bg-[#032133]/90"
                    >
                      <Link
                        href="https://r.mtg-app.com/robbhullar"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsOpen(false)}
                      >
                        Apply Now →
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Mobile: checker and hamburger */}
          <div className="flex items-center space-x-2 md:hidden">
            <Button
              asChild
              size="sm"
              className="h-9 bg-[#C79A2B] px-3 text-sm font-semibold text-white hover:bg-[#D4AF37]/90"
            >
              <Link href="/mortgage-checker">
                Am I Overpaying? →
              </Link>
            </Button>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-9 w-9 p-0"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="w-[300px] sm:w-[400px]"
              >
                <div className="mt-8 flex flex-col space-y-4">
                  <div className="flex items-center space-x-3 border-b pb-4">
                    <div className="flex h-9 w-12 items-center justify-center">
                      <Image
                        src="/BCmortgageteamlogo.jpeg"
                        alt="BC Mortgage Team"
                        width={48}
                        height={36}
                        className="object-contain"
                      />
                    </div>

                    <div>
                      <h2 className="font-bold text-gray-900">
                        BC Mortgage Team
                      </h2>

                      <p className="text-sm text-gray-600">
                        Right Mortgage Strategy
                      </p>
                    </div>
                  </div>

                  <nav
                    className="flex flex-col space-y-3"
                    aria-label="Mobile navigation"
                  >
                    {navigationItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`rounded-md px-3 py-2 text-lg font-medium transition-colors ${
                          isActive(item.href)
                            ? "border-b-2 border-[#D4AF37] text-[#032133]"
                            : "text-gray-700 hover:bg-gray-50 hover:text-[#032133]"
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </nav>

                  {/* Instagram */}
                  <div className="border-t pt-4">
                    <Link
                      href={instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 rounded-md px-3 py-2 text-gray-700 transition-colors hover:bg-gray-50 hover:text-[#032133]"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F4F6F8] text-[#1D2D44]">
                        <Instagram className="h-5 w-5" />
                      </span>

                      <span>
                        <span className="block font-semibold">
                          Follow on Instagram
                        </span>

                        <span className="block text-sm text-gray-500">
                          @thebcmortgageteam
                        </span>
                      </span>
                    </Link>
                  </div>

                  <div className="space-y-3 border-t pt-4">
                    <Button
                      asChild
                      className="h-12 w-full bg-[#C79A2B] text-base font-semibold text-white hover:bg-[#D4AF37]/90"
                    >
                      <Link
                        href="/mortgage-checker"
                        onClick={() => setIsOpen(false)}
                      >
                        Am I Overpaying? 2 min →
                      </Link>
                    </Button>

                    <Button
                      asChild
                      className="h-12 w-full bg-[#032133] text-base hover:bg-[#032133]/90"
                    >
                      <Link
                        href="https://r.mtg-app.com/robbhullar"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsOpen(false)}
                      >
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
