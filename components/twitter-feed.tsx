'use client'

import { useEffect, useRef } from 'react'

declare global {
  interface Window {
    twttr?: {
      widgets: {
        load: (element?: HTMLElement | null) => void
      }
    }
  }
}

export function TwitterFeed() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const loadTwitterEmbed = () => {
      if (window.twttr?.widgets) {
        window.twttr.widgets.load(containerRef.current)
      }
    }

    const existingScript = document.querySelector(
      'script[src="https://platform.twitter.com/widgets.js"]'
    ) as HTMLScriptElement | null

    if (existingScript) {
      if (window.twttr?.widgets) {
        loadTwitterEmbed()
      } else {
        existingScript.addEventListener('load', loadTwitterEmbed)
        return () => {
          existingScript.removeEventListener('load', loadTwitterEmbed)
        }
      }
      return
    }

    const script = document.createElement('script')
    script.src = 'https://platform.twitter.com/widgets.js'
    script.async = true
    script.charset = 'utf-8'
    script.onload = loadTwitterEmbed
    document.body.appendChild(script)

    return () => {
      script.onload = null
    }
  }, [])

  return (
    <div ref={containerRef} className="w-full min-h-[600px]">
      <a
        className="twitter-timeline"
        data-height="600"
        data-theme="light"
        data-chrome="noheader nofooter transparent"
        href="https://x.com/robbhullar"
      >
        Posts by @robbhullar
      </a>
    </div>
  )
}
