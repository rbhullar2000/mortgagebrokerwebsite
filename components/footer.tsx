'use client';

import Link from "next/link";
import Image from "next/image";
import { Twitter, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div className="flex flex-col items-center text-center space-y-3">
            <div className="w-24 h-18">
              <Image
                src="/BCmortgageteamlogo_white.jpeg"
                alt="BC Mortgage Team Logo"
                width={96}
                height={72}
                className="object-contain"
              />
            </div>

            <div className="w-24 h-18">
              <Image
                src="/BRX_brand_white.png"
                alt="BRX Mortgage"
                width={96}
                height={72}
                className="object-contain"
              />
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link
                  href="/purchase"
                  className="hover:text-white transition-colors"
                >
                  Home Purchase
                </Link>
              </li>

              <li>
                <Link
                  href="/renewal"
                  className="hover:text-white transition-colors"
                >
                  Mortgage Renewal
                </Link>
              </li>

              <li>
                <Link
                  href="/refinance"
                  className="hover:text-white transition-colors"
                >
                  Refinancing
                </Link>
              </li>

              <li>
                <Link
                  href="/investment"
                  className="hover:text-white transition-colors"
                >
                  Investment Properties
                </Link>
              </li>

              <li>
                <Link
                  href="/self-employed"
                  className="hover:text-white transition-colors"
                >
                  Self-Employed
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="font-semibold mb-4">Areas Served</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>British Columbia</li>
              <li>Greater Vancouver</li>
              <li>Fraser Valley</li>
              <li>Okanagan</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h5 className="font-semibold mb-3 mt-6 md:mt-0">Follow Us</h5>

            <div className="flex items-center space-x-3">
              {/* X */}
              <Link
                href="https://x.com/robbhullar"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-700 hover:bg-[#032133] rounded-full flex items-center justify-center transition-all duration-200"
              >
                <Twitter className="w-4 h-4" />
                <span className="sr-only">Follow on X</span>
              </Link>

              {/* Instagram */}
              <Link
                href="https://www.instagram.com/thebcmortgageteam"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-700 hover:bg-[#D4AF37] rounded-full flex items-center justify-center transition-all duration-200"
              >
                <Instagram className="w-4 h-4" />
                <span className="sr-only">
                  Follow BC Mortgage Team on Instagram
                </span>
              </Link>
            </div>

            <p className="mt-4 text-sm">
              <Link
                href="https://www.instagram.com/thebcmortgageteam"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                @thebcmortgageteam
              </Link>
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400 space-y-2">
          <p>
            Licensed Mortgage Broker &nbsp;|&nbsp;
            BRX Mortgage Inc.
            &nbsp;|&nbsp;
            BCFSA: X301291
          </p>

          <p>&copy; 2026 BC Mortgage Team. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
