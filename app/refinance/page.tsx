import type { Metadata } from "next"
import RefinancePageClient from "./RefinancePageClient"

export const metadata: Metadata = {
  title: "Mortgage Refinancing | Access Your Home's Equity | Rob Bhullar BC",
  description:
    "Refinance your mortgage to access equity, consolidate debt, or fund home improvements. Expert refinancing services in BC with competitive rates.",
  keywords: "mortgage refinancing, home equity, debt consolidation, BC refinancing, mortgage broker refinance",
}

export default function RefinancePage() {
  return <RefinancePageClient />
}
