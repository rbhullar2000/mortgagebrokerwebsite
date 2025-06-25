'use client';

import Link from "next/link";
import Image from "next/image";
import { Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div>

            <div className="w-24 h-18 flex items-center justify-start mb-2">
              <Image
                src="/BCmortgageteamlogo_white.jpeg"
                alt="BC Mortgage Team Logo"
                width={96}
                height={72}
                className="object-contain"
              />
            </div>

            <div className="w-24 h-18 flex items-center justify-start">
              <Image
                src="/BRX_brand_white.png"
                alt="BRX Mortgage"
                width={96}
                height={72}
                className="object-contain"
              />
            </div>

            {/* Optional description */}
            {/* 
            <p className="text-gray-400 text-sm mt-4">
              Licensed submortgage professional with BRX Mortgages, serving the Greater Vancouver Area with personalized service and competitive rates.
            </p>
            */}
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/purchase" className="hover:text-white transition-colors">Home Purchase</Link></li>
              <li><Link href="/renewal" className="hover:text-white transition-colors">Mortgage Renewal</Link></li>
              <li><Link href="/refinance" className="hover:text-white transition-colors">Refinancing</Link></li>
              <li><Link href="/investment" className="hover:text-white transition-colors">Investment Properties</Link></li>
              <li><Link href="/self-employed" className="hover:text-white transition-colors">Self-Employed</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
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

          {/* Column 4 */}
          <div>
            <h5 className="font-semibold mb-3 mt-6 md:mt-0">Follow on X</h5>
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
              {/* Uncomment if needed later
              <Link
                href="https://linkedin.com/in/robbhullar"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gray-700 hover:bg-[#032133] rounded-full flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span className="sr-only">Connect on LinkedIn</span>
              </Link>
              */}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 BC Mortgage Team. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
