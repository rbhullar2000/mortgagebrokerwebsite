import { NextResponse } from "next/server"

export const runtime = "nodejs"

// Send an email via Resend's HTTP API (no SDK dependency needed).
async function sendEmail(
  apiKey: string,
  payload: { from: string; to: string; reply_to?: string; subject: string; html: string },
) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
  if (!res.ok) {
    const detail = await res.text()
    return { error: detail }
  }
  return { error: null }
}

const NOTIFY_TO = "rob@bcmortgageteam.com"
// Resend's shared sender works without domain verification. Swap to a verified
// address on your own domain (e.g. "Rob Bhullar <rob@bcmortgageteam.com>") once set up.
const FROM = "BC Mortgage Team <onboarding@resend.dev>"

const fmt = (n: number) =>
  new Intl.NumberFormat("en-CA", { style: "currency", currency: "CAD", maximumFractionDigits: 0 }).format(
    Number.isFinite(n) ? n : 0,
  )

type LeadPayload = {
  contact: { name: string; email: string; phone: string }
  mortgage: { balance: string; rate: string; type: string; lender: string; amort: string; frequency: string }
  property: { value: string; purchasePrice: string; purchaseYear: string }
  results: {
    monthlySavings: number
    annualSavings: number
    equity: number
    accessibleEquity: number
    ltv: number
    score: number
    marketRate: number
    rateDiff: number
    renewalWarning: boolean
  }
  review: string
}

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      return NextResponse.json({ error: "Email service not configured." }, { status: 500 })
    }

    const { contact, mortgage, property, results, review } = (await req.json()) as LeadPayload

    if (!contact?.name || !contact?.email || !contact?.phone) {
      return NextResponse.json({ error: "Missing contact information." }, { status: 400 })
    }

    const firstName = contact.name.split(" ")[0]

    // ── 1. Lead notification to Rob ──────────────────────────────────────────
    const leadHtml = `
      <div style="font-family: Arial, sans-serif; color: #1D2D44; max-width: 600px;">
        <h2 style="color: #1D2D44;">New Mortgage Checker Lead</h2>
        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
          <tr><td style="padding: 6px 0; font-weight: bold;">Name</td><td>${contact.name}</td></tr>
          <tr><td style="padding: 6px 0; font-weight: bold;">Email</td><td><a href="mailto:${contact.email}">${contact.email}</a></td></tr>
          <tr><td style="padding: 6px 0; font-weight: bold;">Phone</td><td><a href="tel:${contact.phone}">${contact.phone}</a></td></tr>
        </table>
        <h3 style="color: #C79A2B; margin-top: 24px;">Mortgage</h3>
        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
          <tr><td style="padding: 4px 0; font-weight: bold;">Balance</td><td>${fmt(parseFloat(mortgage.balance))}</td></tr>
          <tr><td style="padding: 4px 0; font-weight: bold;">Current rate</td><td>${mortgage.rate}%</td></tr>
          <tr><td style="padding: 4px 0; font-weight: bold;">Type</td><td>${mortgage.type}</td></tr>
          <tr><td style="padding: 4px 0; font-weight: bold;">Lender</td><td>${mortgage.lender}</td></tr>
          <tr><td style="padding: 4px 0; font-weight: bold;">Amortization</td><td>${mortgage.amort} years</td></tr>
          <tr><td style="padding: 4px 0; font-weight: bold;">Frequency</td><td>${mortgage.frequency}</td></tr>
        </table>
        <h3 style="color: #C79A2B; margin-top: 24px;">Property</h3>
        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
          <tr><td style="padding: 4px 0; font-weight: bold;">Value</td><td>${fmt(parseFloat(property.value))}</td></tr>
          <tr><td style="padding: 4px 0; font-weight: bold;">Purchase price</td><td>${fmt(parseFloat(property.purchasePrice))}</td></tr>
          <tr><td style="padding: 4px 0; font-weight: bold;">Year purchased</td><td>${property.purchaseYear}</td></tr>
        </table>
        <h3 style="color: #C79A2B; margin-top: 24px;">Analysis</h3>
        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
          <tr><td style="padding: 4px 0; font-weight: bold;">Strategy score</td><td>${results.score}/100</td></tr>
          <tr><td style="padding: 4px 0; font-weight: bold;">Market rate</td><td>${results.marketRate}% (${results.rateDiff > 0 ? "+" : ""}${results.rateDiff.toFixed(2)}% vs market)</td></tr>
          <tr><td style="padding: 4px 0; font-weight: bold;">Monthly savings potential</td><td>${fmt(results.monthlySavings)}</td></tr>
          <tr><td style="padding: 4px 0; font-weight: bold;">Annual savings potential</td><td>${fmt(results.annualSavings)}</td></tr>
          <tr><td style="padding: 4px 0; font-weight: bold;">Equity</td><td>${fmt(results.equity)} (LTV ${results.ltv.toFixed(1)}%)</td></tr>
          <tr><td style="padding: 4px 0; font-weight: bold;">Accessible equity</td><td>${fmt(results.accessibleEquity)}</td></tr>
          <tr><td style="padding: 4px 0; font-weight: bold;">Renewal warning</td><td>${results.renewalWarning ? "YES – rate well above market" : "No"}</td></tr>
        </table>
      </div>
    `

    const leadResult = await sendEmail(apiKey, {
      from: FROM,
      to: NOTIFY_TO,
      reply_to: contact.email,
      subject: `New lead: ${contact.name} — ${fmt(results.annualSavings)}/yr potential savings`,
      html: leadHtml,
    })

    // ── 2. Report copy to the client ─────────────────────────────────────────
    const reviewHtml = review
      .split("\n")
      .filter((p) => p.trim())
      .map((p) => `<p style="margin: 0 0 16px; line-height: 1.6;">${p.trim()}</p>`)
      .join("")

    const clientHtml = `
      <div style="font-family: Arial, sans-serif; color: #1D2D44; max-width: 600px;">
        <h2 style="color: #1D2D44;">Your Mortgage Snapshot, ${firstName}</h2>
        <div style="background: #F4F6F8; border-radius: 12px; padding: 20px; margin: 16px 0;">
          <p style="margin: 0 0 8px;"><strong>Strategy score:</strong> ${results.score}/100</p>
          <p style="margin: 0 0 8px;"><strong>Potential monthly savings:</strong> ${fmt(results.monthlySavings)}</p>
          <p style="margin: 0 0 8px;"><strong>Potential annual savings:</strong> ${fmt(results.annualSavings)}</p>
          <p style="margin: 0;"><strong>Accessible equity:</strong> ${fmt(results.accessibleEquity)}</p>
        </div>
        ${reviewHtml}
        <p style="margin-top: 24px;">
          <a href="https://calendly.com/bcmortgageteam/15min"
             style="display: inline-block; background: #C79A2B; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: bold;">
            Book your free 15-minute strategy call
          </a>
        </p>
        <p style="font-size: 12px; color: #888; margin-top: 24px;">
          This is an automated estimate based on the details you provided and is not a formal mortgage offer.
          Rob Bhullar, BC Mortgage Team.
        </p>
      </div>
    `

    await sendEmail(apiKey, {
      from: FROM,
      to: contact.email,
      reply_to: NOTIFY_TO,
      subject: `${firstName}, your mortgage snapshot from BC Mortgage Team`,
      html: clientHtml,
    })

    if (leadResult.error) {
      console.error("[v0] lead email error:", leadResult.error)
      return NextResponse.json({ error: "Failed to send notification." }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("[v0] lead API error:", error)
    return NextResponse.json({ error: "Unable to process lead." }, { status: 500 })
  }
}
