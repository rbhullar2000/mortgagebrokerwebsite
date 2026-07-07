import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export const runtime = "nodejs"

// Escapes user-controlled values before embedding them in HTML email bodies (fixes XSS)
function escapeHtml(value: unknown): string {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

// Strips CR/LF so user input can't inject extra email headers via the subject line
function sanitizeHeader(value: unknown): string {
  return String(value).replace(/[\r\n]+/g, " ").trim()
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, mortgageType, propertyValue, downPayment, message } = body

    if (!name || !email || !phone) {
      return NextResponse.json({ error: "Please fill in all required fields" }, { status: 400 })
    }

    const mortgageTypeLabel = mortgageType
      ? {
          purchase: "Home Purchase",
          renewal: "Mortgage Renewal",
          refinance: "Refinancing",
          investment: "Investment Property",
          preapproval: "Pre-Approval",
          consultation: "General Consultation",
        }[mortgageType] || mortgageType
      : "Not specified"

    // Escaped copies of user input for safe use in the email body
    const safeName = escapeHtml(name)
    const safeEmail = escapeHtml(email)
    const safePhone = escapeHtml(phone)
    const safeMortgageTypeLabel = escapeHtml(mortgageTypeLabel)
    const safePropertyValue = escapeHtml(propertyValue)
    const safeDownPayment = escapeHtml(downPayment)
    // Escape first, THEN convert newlines to <br> so the tags survive escaping
    const safeMessage = message ? escapeHtml(message).replace(/\n/g, "<br>") : ""

    const htmlContent = `
      <h2>New Mortgage Inquiry from <strong>bcmortgageteam.com</strong></h2>
      <h3>Contact Information:</h3>
      <ul>
        <li><strong>Name:</strong> ${safeName}</li>
        <li><strong>Email:</strong> ${safeEmail}</li>
        <li><strong>Phone:</strong> ${safePhone}</li>
      </ul>
      <h3>Inquiry Details:</h3>
      <ul>
        <li><strong>Service:</strong> ${safeMortgageTypeLabel}</li>
        ${propertyValue ? `<li><strong>Property Value:</strong> ${safePropertyValue}</li>` : ""}
        ${downPayment ? `<li><strong>Down Payment:</strong> ${safeDownPayment}</li>` : ""}
      </ul>
      ${message ? `<h3>Additional Message:</h3><p>${safeMessage}</p>` : ""}
      <p style="color: #888; font-size: 12px;">Submitted: ${new Date().toLocaleString()}</p>
    `

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    await transporter.sendMail({
      from: `"BC Mortgage Team Website" <rob@bcmortgageteam.com>`,
      to: process.env.EMAIL_TO || "rob@bcmortgageteam.com",
      subject: `New Mortgage Inquiry from ${sanitizeHeader(name)}`,
      html: htmlContent,
    })

    return NextResponse.json({
      success: true,
      message: "Thank you for your inquiry! We'll get back to you soon.",
    })
  } catch (error) {
    console.error("Email sending failed:", error)
    return NextResponse.json({
      success: true,
      message: "Thank you for your inquiry! We'll get back to you soon.",
    })
  }
}
