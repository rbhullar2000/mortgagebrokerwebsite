'use client'

import Script from 'next/script'

export function TwitterFeed() {
  return (
    <div className="w-full min-h-[600px]">
      <a
        className="twitter-timeline"
        data-height="600"
        href="https://twitter.com/robbhullar"
      >
        Tweets by robbhullar
      </a>

      <Script
        src="https://platform.twitter.com/widgets.js"
        strategy="lazyOnload"
      />
    </div>
  )
}
