import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import { Suspense } from "react"
import ChatWidget from "@/components/ChatWidget"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "BC Mortgage Team | Smart Financial Solutions",
  description:
    "BC Mortgage Team is located in British Columbia. Get the best mortgage rates for home purchase, renewal, and refinance. Access 50+ lenders and fast approvals.",
  keywords: [
    "mortgage broker",
    "BC mortgage",
    "Vancouver mortgage",
    "Surrey mortgage",
    "home loans",
    "mortgage rates",
  ],
  authors: [{ name: "Rob Bhullar" }],
  openGraph: {
    title: "BC Mortgage Team | Smart Financial Solutions",
    description:
      "BC Mortgage Team is located in British Columbia. Get the best mortgage rates for home purchase, renewal, and refinance. Access 50+ lenders and fast approvals.",
    url: "https://bcmortgageteam.com",
    siteName: "BC Mortgage Team",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "https://bcmortgageteam.com/BCmortgageteamlogo_white.jpeg",
        width: 1200,
        height: 630,
        alt: "BC Mortgage Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rob Bhullar - Licensed Mortgage Professional",
    description: "Licensed Mortgage Professional in British Columbia",
    images: ["https://bcmortgageteam.com/BCmortgageteamlogo_white.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FinancialService",
              name: "BC Mortgage Team - Mortgage Services",
              description: "BC Mortgage Team serving British Columbia",
              url: "https://bcmortgageteam.com",
              telephone: "+1-778-889-7964",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Delta",
                addressRegion: "BC",
                addressCountry: "CA",
              },
              areaServed: [
                "Vancouver",
                "Surrey",
                "Burnaby",
                "Richmond",
                "Coquitlam",
                "British Columbia",
              ],
              serviceType: [
                "Mortgage Broker",
                "Home Purchase Loans",
                "Mortgage Renewal",
                "Refinancing",
                "Investment Property Loans",
              ],
              priceRange: "$$",
              openingHours: "Mo-Su 08:00-20:00",
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <ChatWidget />
      </body>
    </html>
  )
}
