import type { Metadata } from "next"
import InvestmentPageClient from "./InvestmentPageClient"

export const metadata: Metadata = {
  title: "Investment Property Mortgages | Real Estate Financing | Rob Bhullar BC",
  description:
    "Specialized financing for investment properties, rental homes, and commercial real estate. Competitive rates and flexible terms for real estate investors in BC.",
  keywords:
    "investment property mortgage, rental property financing, commercial real estate loans, BC investment mortgage",
}

export default function InvestmentPage() {
  return <InvestmentPageClient />
}
