'use client'

import { useEffect } from 'react'

export function TwitterFeed() {
  useEffect(() => {
    // Ensure script is only added once
    if (document.querySelector('script[src="https://platform.twitter.com/widgets.js"]')) {
      if (window.twttr?.widgets) {
        window.twttr.widgets.load()
      }
      return
    }

    // Create and inject Twitter script
    const script = document.createElement('script')
    script.src = 'https://platform.twitter.com/widgets.js'
    script.async = true
    script.charset = 'utf-8'
    document.body.appendChild(script)
  }, [])

  return (
    <div className="w-full">
      <a
        className="twitter-timeline"
        href="https://twitter.com/robbhullar?ref_src=twsrc%5Etfw"
        data-height="600"
        data-theme="light"
        data-width="100%"
      >
        Loading tweets from @robbhullar...
      </a>
    </div>
  )
}
