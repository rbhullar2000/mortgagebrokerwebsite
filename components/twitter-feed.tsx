'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    twttr?: any
  }
}

export function TwitterFeed() {
  useEffect(() => {
    const loadTwitter = () => {
      if (window.twttr && window.twttr.widgets) {
        window.twttr.widgets.load()
      }
    }

    const scriptId = 'twitter-wjs'

    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script')
      script.id = scriptId
      script.src = 'https://platform.twitter.com/widgets.js'
      script.async = true
      script.onload = loadTwitter
      document.body.appendChild(script)
    } else {
      loadTwitter()
    }
  }, [])

  return (
    <div className="w-full min-h-[600px]">
      <a
        className="twitter-timeline"
        href="https://twitter.com/robbhullar"
        data-height="600"
      >
        Tweets by @robbhullar
      </a>
    </div>
  )
}
