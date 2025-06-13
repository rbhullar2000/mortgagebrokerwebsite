import type { Metadata } from "next"
import PurchasePageClient from "./PurchasePageClient"

export const metadata: Metadata = {
  title: "Home Purchase Mortgages | Rob Bhullar Mortgage Broker BC",
  description:
    "Get the best mortgage rates for your home purchase in BC. First-time buyer programs, fast pre-approvals, and expert guidance. Licensed mortgage broker.",
  keywords: "home purchase mortgage, first time buyer, BC home loans, mortgage pre-approval, Vancouver home purchase",
}

export default function PurchasePage() {
  return <PurchasePageClient />
}
