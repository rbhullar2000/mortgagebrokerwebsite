import type { Metadata } from "next"
import RenewalPageClient from "./RenewalPageClient"

export const metadata: Metadata = {
  title: "Mortgage Renewal | Don't Auto-Renew | Rob Bhullar BC",
  description:
    "Don't auto-renew your mortgage! Get better rates and terms with a mortgage broker. Free renewal service in BC. Compare 50+ lenders.",
  keywords: "mortgage renewal, BC mortgage renewal, better mortgage rates, don't auto renew, mortgage broker renewal",
}

export default function RenewalPage() {
  return <RenewalPageClient />
}
