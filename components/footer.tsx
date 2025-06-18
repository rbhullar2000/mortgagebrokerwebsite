import Link from "next/link"
import { Twitter, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              {/* <div className="w-10 h-10 bg-[#032133] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">RB</span>
              </div> */}
              <div>
                <h3 className="text-lg font-bold">BC Mortgage Team</h3>
                <p className="text-sm text-gray-400">Mortgage Brokers</p>
              </div>
              {/*     </div>
              <p className="text-gray-400 text-sm">
              Licensed submortgage professional with BRX Mortgages, serving the Greater Vancouver Area with personalized service and
              competitive rates.
            </p> 
          </div> */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/purchase" className="hover:text-white transition-colors">
                  Home Purchase
                </Link>
              </li>
              <li>
                <Link href="/renewal" className="hover:text-white transition-colors">
                  Mortgage Renewal
                </Link>
              </li>
              <li>
                <Link href="/refinance" className="hover:text-white transition-colors">
                  Refinancing
                </Link>
              </li>
              <li>
                <Link href="/investment" className="hover:text-white transition-colors">
                  Investment Properties
                </Link>
              </li>
              <li>
                <Link href="/self-employed" className="hover:text-white transition-colors">
                  Self-Employed
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Areas Served</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Vancouver</li>
              <li>Surrey</li>
              <li>Burnaby</li>
              <li>Richmond</li>
              <li>Plus other BC regions</li>
            </ul>
          </div>
          
            <div className="mt-6">
              <h5 className="font-semibold mb-3">Follow Me</h5>
              <div className="flex space-x-3">
                <Link
                  href="https://x.com/robbhullar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-gray-700 hover:bg-[#032133] rounded-full flex items-center justify-center transition-colors"
                >
                  <Twitter className="w-4 h-4" />
                  <span className="sr-only">Follow on X (Twitter)</span>
                </Link>
                {/*  <Link
                  href="https://linkedin.com/in/robbhullar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-gray-700 hover:bg-[#032133] rounded-full flex items-center justify-center transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  <span className="sr-only">Connect on LinkedIn</span>
                </Link> */}
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 BC Mortgage Team. All rights reserved. </p> 
        </div>
      </div>
    </footer>
  )
}
