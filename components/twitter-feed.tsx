'use client'

import { useEffect } from 'react'

export function TwitterFeed() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://platform.twitter.com/widgets.js'
    script.async = true

    script.onload = () => {
      // Force render AFTER layout stabilizes
      setTimeout(() => {
        if (window.twttr?.widgets) {
          window.twttr.widgets.load()
        }
      }, 1000) // 🔥 key fix
    }

    document.body.appendChild(script)
  }, [])

  return (
    <div style={{ minHeight: '600px', width: '100%', maxWidth: '100%' }}>
      <div style={{ width: '100%', minWidth: '350px' }}>
        <a
          className="twitter-timeline"
          href="https://twitter.com/robbhullar"
          data-height="600"
        >
          Tweets by robbhullar
        </a>
      </div>
    </div>
  )
}
