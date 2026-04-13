'use client'

import { useEffect, useRef, useState } from 'react'

declare global {
  interface Window {
    twttr?: {
      widgets: {
        load: (element?: HTMLElement) => void
        createTimeline: (
          widgetDataUnion: { sourceType: string; screenName: string },
          targetEl: HTMLElement,
          options?: object
        ) => Promise<HTMLElement>
      }
    }
  }
}

export function TwitterFeed() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const loadTwitterTimeline = () => {
      if (window.twttr?.widgets && containerRef.current) {
        // Clear container first
        containerRef.current.innerHTML = ''
        
        window.twttr.widgets
          .createTimeline(
            { sourceType: 'profile', screenName: 'robbhullar' },
            containerRef.current,
            { height: 600, theme: 'light', chrome: 'noheader' }
          )
          .then(() => {
            setIsLoading(false)
          })
          .catch(() => {
            setError(true)
            setIsLoading(false)
          })
      }
    }

    // Check if script already exists
    const existingScript = document.querySelector(
      'script[src="https://platform.twitter.com/widgets.js"]'
    )

    if (existingScript && window.twttr) {
      loadTwitterTimeline()
    } else {
      const script = document.createElement('script')
      script.src = 'https://platform.twitter.com/widgets.js'
      script.async = true
      script.charset = 'utf-8'
      script.onload = () => {
        // Wait for twttr to be ready
        const checkReady = setInterval(() => {
          if (window.twttr?.widgets) {
            clearInterval(checkReady)
            loadTwitterTimeline()
          }
        }, 100)
        
        // Timeout after 5 seconds
        setTimeout(() => {
          clearInterval(checkReady)
          if (isLoading) {
            setError(true)
            setIsLoading(false)
          }
        }, 5000)
      }
      script.onerror = () => {
        setError(true)
        setIsLoading(false)
      }
      document.body.appendChild(script)
    }
  }, [])

  if (error) {
    return (
      <div className="w-full p-6 bg-gray-50 rounded-lg border border-gray-200 text-center">
        <p className="text-gray-600 mb-4">Unable to load Twitter feed</p>
        <a
          href="https://twitter.com/robbhullar"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#032133] font-semibold hover:underline"
        >
          View @robbhullar on X
        </a>
      </div>
    )
  }

  return (
    <div className="w-full">
      {isLoading && (
        <div className="flex items-center justify-center p-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#032133]"></div>
        </div>
      )}
      <div ref={containerRef} className="w-full" />
    </div>
  )
}
