import type { Metadata } from "next"
import SelfEmployedPageClient from "./SelfEmployedPageClient"

export const metadata: Metadata = {
  title: "Self-Employed Mortgages | Alternative Documentation | Rob Bhullar BC",
  description:
    "Specialized mortgage solutions for self-employed, contractors, and business owners. Bank statement programs and alternative documentation in BC.",
  keywords:
    "self-employed mortgage, bank statement program, contractor mortgage, business owner mortgage, BC alternative lending",
}

export default function SelfEmployedPage() {
  return <SelfEmployedPageClient />
}
