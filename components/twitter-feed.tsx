'use client'

export function TwitterFeed() {
  return (
    <div className="w-full">
      <iframe
        src="https://platform.twitter.com/widgets/timeline/profile?screen_name=robbhullar"
        width="100%"
        height="600"
        style={{ border: 'none' }}
      />
    </div>
  )
}
