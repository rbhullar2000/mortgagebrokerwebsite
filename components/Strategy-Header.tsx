"use client"

import Link from "next/link"
import Image from "next/image"

export function StrategyHeader() {
  return (
    <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo and Title Section */}
          <div className="flex items-center space-x-3 md:space-x-10">
            <Link href="/" className="flex items-center space-x-3 md:space-x-10">
              {/* BC Mortgage Team Logo */}
              <div className="w-16 h-12 md:w-24 md:h-18 flex items-center justify-center flex-shrink-0">
                <Image
                  src="/BCmortgageteamlogo.jpeg"
                  alt="BC Mortgage Team"
                  width={96}
                  height={72}
                  className="object-contain w-full h-full"
                />
              </div>

              {/* BRX Logo */}
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

            {/* Mortgage Strategy Text */}
            <span className="text-xl md:text-2xl font-semibold text-[#1D2D44]">
              Mortgage Strategy
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}
