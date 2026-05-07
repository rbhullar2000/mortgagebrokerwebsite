'use client'

import Script from 'next/script'

export default function CalendlySuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <Script
        id="google-conversion-event"
        strategy="afterInteractive"
      >
        {`
          gtag('event', 'conversion', {
            'send_to': 'AW-18083234440/WiYsCOan-agcEIiF4a5D'
          });
        `}
      </Script>

      <div className="max-w-xl text-center">
        <h1 className="text-4xl font-bold text-[#1D2D44] mb-4">
          Booking Confirmed
        </h1>

        <p className="text-lg text-gray-600">
          Your mortgage strategy call has been scheduled successfully.
        </p>
      </div>
    </div>
  )
}
