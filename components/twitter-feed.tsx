'use client'
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
    const run = () => {
      if (!window.twttr?.widgets || !ref.current) return

      // Clear any previous failed render attempt
      ref.current.innerHTML = `
        <a
          class="twitter-timeline"
          data-height="600"
          data-theme="light"
          href="https://twitter.com/robbhullar"
        >
          Posts by @robbhullar
        </a>
      `

      window.twttr.widgets.load(ref.current)
    }

    const id = window.setTimeout(run, 300)
    return () => window.clearTimeout(id)
  }, [])

  return <div ref={ref} className="w-full min-h-[600px]" />
}
