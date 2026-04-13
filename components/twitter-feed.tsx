'use client'

import { useEffect, useState } from 'react'

export function TwitterFeed() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://platform.twitter.com/widgets.js'
    script.async = true

    script.onload = () => {
      setLoaded(true)
    }

    document.body.appendChild(script)
  }, [])

  useEffect(() => {
    if (loaded && window.twttr?.widgets) {
      window.twttr.widgets.load()
    }
  }, [loaded])

  return (
    <div className="w-full min-h-[600px]">
      <a
        key={loaded ? 'loaded' : 'loading'} // 🔥 forces re-render
        className="twitter-timeline"
        href="https://twitter.com/robbhullar"
        data-height="600"
      >
        Tweets by robbhullar
      </a>
    </div>
  )
}
