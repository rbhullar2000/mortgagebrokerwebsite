export async function GET() {
  const robotsTxt = `User-agent: *
Allow: /

# Sitemap
Sitemap: https://bcmortgageteam.com/sitemap.xml

# Disallow admin and API routes
Disallow: /api/
Disallow: /_next/
Disallow: /admin/

# Allow important pages
Allow: /
Allow: /blog
Allow: /purchase
Allow: /refinance
Allow: /renewal
Allow: /self-employed
Allow: /investment
Allow: /quick-closings
Allow: /break-even-calculator

# Crawl delay (optional - helps prevent server overload)
Crawl-delay: 1`

  return new Response(robotsTxt, {
    headers: {
      "Content-Type": "text/plain",
      "Cache-Control": "public, max-age=86400", // Cache for 24 hours
    },
  })
}
