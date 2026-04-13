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
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const renderTimeline = () => {
      if (!window.twttr?.widgets || !ref.current) return

      ref.current.innerHTML = `
        <a
          class="twitter-timeline"
          href="https://twitter.com/robbhullar"
          data-height="600"
          data-theme="light"
        >
          Posts by @robbhullar
        </a>
      `

      window.twttr.widgets.load(ref.current)
    }

    const existingScript = document.querySelector(
      'script[src="https://platform.twitter.com/widgets.js"]'
    ) as HTMLScriptElement | null

    if (existingScript) {
      if (window.twttr?.widgets) {
        renderTimeline()
      } else {
        existingScript.addEventListener('load', renderTimeline)
        return () => {
          existingScript.removeEventListener('load', renderTimeline)
        }
      }
      return
    }

    const script = document.createElement('script')
    script.src = 'https://platform.twitter.com/widgets.js'
    script.async = true
    script.charset = 'utf-8'
    script.onload = renderTimeline
    document.body.appendChild(script)

    return () => {
      script.onload = null
    }
  }, [])

  return <div ref={ref} className="w-full min-h-[600px]" />
}
