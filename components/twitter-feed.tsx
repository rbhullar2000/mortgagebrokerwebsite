'use client'

import { useEffect } from 'react'

export function TwitterFeed() {
  useEffect(() => {
    // Check if Twitter script already loaded
    const existingScript = document.querySelector(
      'script[src="https://platform.twitter.com/widgets.js"]'
    )

    if (window.twttr) {
      // Script already loaded, process widgets
      window.twttr.widgets.load()
    } else if (!existingScript) {
      // Script not loaded, add it
      const script = document.createElement('script')
      script.src = 'https://platform.twitter.com/widgets.js'
      script.async = true
      script.charset = 'utf-8'
      document.body.appendChild(script)
    }
  }, [])

  return (
    <div className="w-full">
      <a
        className="twitter-timeline"
        href="https://twitter.com/robbhullar?ref_src=twsrc%5Etfw"
        data-height="600"
        data-theme="light"
      >
        Tweets by robbhullar
      </a>
    </div>
  )
}
