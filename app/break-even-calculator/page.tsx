import type { Metadata } from "next"
import BreakEvenCalculatorPageClient from "./BreakEvenCalculatorPageClient"

export const metadata: Metadata = {
  title: "Mortgage Refinance Break-Even Calculator | BC Mortgage Team",
  description:
    "Calculate how long it takes to break even on mortgage refinancing costs. Free break-even calculator to help you decide if refinancing makes financial sense.",
  keywords:
    "mortgage refinance calculator, break-even calculator, refinancing costs, mortgage savings, BC mortgage broker",
}

export default function BreakEvenCalculatorPage() {
  return <BreakEvenCalculatorPageClient />
}
