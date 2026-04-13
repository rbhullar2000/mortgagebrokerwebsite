'use client'

import { useEffect, useRef } from 'react'

declare global {
  interface Window {
    twttr?: {
      widgets?: {
        load: (element?: HTMLElement | null) => void
      }
    }
  }
}

export function TwitterFeed() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const renderWidget = () => {
      if (window.twttr?.widgets && containerRef.current) {
        window.twttr.widgets.load(containerRef.current)
      }
    }

    const existingScript = document.querySelector(
      'script[src="https://platform.twitter.com/widgets.js"]'
    ) as HTMLScriptElement | null

    if (existingScript) {
      if (window.twttr?.widgets) {
        renderWidget()
      } else {
        existingScript.addEventListener('load', renderWidget)
        return () => {
          existingScript.removeEventListener('load', renderWidget)
        }
      }
      return
    }

    const script = document.createElement('script')
    script.src = 'https://platform.twitter.com/widgets.js'
    script.async = true
    script.charset = 'utf-8'
    script.onload = renderWidget
    document.body.appendChild(script)

    return () => {
      script.onload = null
    }
  }, [])

  return (
    <div ref={containerRef} className="w-full min-h-[600px]">
      <a
        className="twitter-timeline"
        href="https://twitter.com/robbhullar"
        data-height="600"
        data-theme="light"
        data-chrome="noheader nofooter transparent"
      >
        Tweets by robbhullar
      </a>
    </div>
  )
}
