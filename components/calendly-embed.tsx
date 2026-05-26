"use client"

import { InlineWidget } from "react-calendly"

interface CalendlyEmbedProps {
  url: string
}

export function CalendlyEmbed({ url }: CalendlyEmbedProps) {
  return (
    <InlineWidget
      url={url}
      styles={{ height: "700px", minWidth: "320px" }}
      pageSettings={{
        backgroundColor: "ffffff",
        hideEventTypeDetails: false,
        hideLandingPageDetails: false,
        primaryColor: "D4AF37",
        textColor: "032133",
      }}
    />
  )
}
