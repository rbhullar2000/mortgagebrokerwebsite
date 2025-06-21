import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "BC Mortgage Team | Smart Financial Solutions",
  description:
    "BC Mortgage Team are located in British Columbia. Get the best mortgage rates for home purchase, renewal, refinance. 50+ lenders, fast approvals.",
  keywords: "mortgage broker, BC mortgage, Vancouver mortgage, Surrey mortgage, home loans, mortgage rates",
  authors: [{ name: "Rob Bhullar" }],
  openGraph: {
    title: "BC Mortgage Team | Smart Financial Solutions",
    description:
      "BC Mortgage Team are located in British Columbia. Get the best mortgage rates for home purchase, renewal, refinance. 50+ lenders, fast approvals.",
    url: "https://robbhullar.com",
    siteName: "BC Mortage Team",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rob Bhullar - Mortgage Broker | Best Rates in BC",
    description:
      "Licensed mortgage broker in British Columbia. Get the best mortgage rates for home purchase, renewal, refinance.",
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
    generator: 'v0.dev'
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
              url: "https://bcmortageteam.com",
              telephone: "+1-778-889-7964",
              email: "contactg@bcmortgageteam.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Delta",
                addressRegion: "BC",
                addressCountry: "CA",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "49.1913",
                longitude: "-122.8490",
              },
              areaServed: ["Vancouver", "Surrey", "Burnaby", "Richmond", "Coquitlam", "British Columbia"],
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
      </body>
    </html>
  )
}
