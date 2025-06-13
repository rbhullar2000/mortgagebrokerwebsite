import type { Metadata } from "next"
import QuickClosingsPageClient from "./QuickClosingsPageClient"

export const metadata: Metadata = {
  title: "Fast Mortgage Approvals | Quick Closings | Rob Bhullar BC",
  description:
    "Need fast mortgage approval? Same-day pre-approvals and quick closings for competitive markets. Emergency mortgage hotline available 7 days a week.",
  keywords:
    "fast mortgage approval, quick closing, same day pre-approval, emergency mortgage, competitive market financing",
}

export default function QuickClosingsPage() {
  return <QuickClosingsPageClient />
}
