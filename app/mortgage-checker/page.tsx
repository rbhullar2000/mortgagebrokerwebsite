import type { Metadata } from "next"
import MortgageCheckerClient from "./MortgageCheckerClient"

export const metadata: Metadata = {
  title: "Am I Overpaying on My Mortgage? | Free 2-Minute Checker — BC Mortgage Team",
  description:
    "Enter your current rate and balance to instantly see how you compare to today's BC market rates. Free, no obligation — find out in 2 minutes if you could be saving.",
  keywords: [
    "am I overpaying on my mortgage",
    "mortgage rate checker BC",
    "compare mortgage rates Vancouver",
    "mortgage renewal checker",
    "BC mortgage broker",
  ],
  openGraph: {
    title: "Am I Overpaying on My Mortgage? | Free 2-Minute Checker — BC Mortgage Team",
    description:
      "Enter your current rate and balance to instantly see how you compare to today's BC market rates. Free, no obligation — find out in 2 minutes if you could be saving.",
    url: "https://bcmortgageteam.com/mortgage-checker",
    siteName: "BC Mortgage Team",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Am I Overpaying on My Mortgage? | Free 2-Minute Checker — BC Mortgage Team",
    description:
      "Enter your current rate and balance to instantly see how you compare to today's BC market rates. Free, no obligation — find out in 2 minutes if you could be saving.",
  },
  alternates: {
    canonical: "https://bcmortgageteam.com/mortgage-checker",
  },
}

export default function MortgageCheckerPage() {
  return <MortgageCheckerClient />
}
