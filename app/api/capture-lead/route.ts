import { NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { google } from "googleapis"

export const runtime = "nodejs"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, interest, conversation } = body

    if (!name || !email || !phone) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const timestamp = new Date().toLocaleString("en-CA", { timeZone: "America/Vancouver" })

    // ─── 1. Send email via nodemailer (reuses your existing setup) ───
    const htmlContent = `
      <h2>🏡 New Chatbot Lead from <strong>bcmortgageteam.com</strong></h2>

      <h3>Contact Information:</h3>
      <ul>
        <li><strong>Name:</strong> ${name}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Phone:</strong> ${phone}</li>
        <li><strong>Interested in:</strong> ${interest || "Not specified"}</li>
      </ul>

      ${conversation ? `
      <h3>Chat Conversation:</h3>
      <div style="background:#f5f5f5;padding:12px;border-radius:8px;font-size:13px;white-space:pre-wrap;">${conversation}</div>
      ` : ""}

      <p style="color:#888;font-size:12px;margin-top:16px;">
        Submitted via chatbot: ${timestamp} (Vancouver time)
      </p>
    `

    try {
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
        from: `"BC Mortgage Team Chatbot" <contact@bcmortgageteam.com>`,
        to: process.env.EMAIL_TO || "contact@bcmortgageteam.com",
        subject: `🏡 New Chatbot Lead: ${name} — ${interest || "General Inquiry"}`,
        html: htmlContent,
      })
    } catch (emailError) {
      console.error("Email failed:", emailError)
      // Continue anyway — still try to log to sheet
    }

    // ─── 2. Log to Google Sheet (reuses your existing Google auth) ───
    try {
      let privateKey = process.env.GOOGLE_PRIVATE_KEY
      if (!privateKey) throw new Error("No private key")

      if (privateKey.includes("\\n")) privateKey = privateKey.replace(/\\n/g, "\n")
      privateKey = privateKey.replace(/^["']|["']$/g, "")
      if (!privateKey.includes("\n")) {
        const keyContent = privateKey
          .replace("-----BEGIN PRIVATE KEY-----", "")
          .replace("-----END PRIVATE KEY-----", "")
        privateKey = `-----BEGIN PRIVATE KEY-----\n${keyContent}\n-----END PRIVATE KEY-----\n`
      }

      const auth = new google.auth.GoogleAuth({
        credentials: {
          client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
          private_key: privateKey,
        },
        scopes: ["https://www.googleapis.com/auth/spreadsheets"],
      })

      const sheets = google.sheets({ version: "v4", auth })
      const spreadsheetId = process.env.GOOGLE_SHEET_ID

      if (spreadsheetId) {
        // Append to "Leads" tab — create this tab manually in your sheet
        await sheets.spreadsheets.values.append({
          spreadsheetId,
          range: "Leads!A:F",
          valueInputOption: "USER_ENTERED",
          requestBody: {
            values: [[
              new Date().toISOString(),   // A: Timestamp
              name,                        // B: Name
              email,                       // C: Email
              phone,                       // D: Phone
              interest || "Not specified", // E: Interest
              conversation                 // F: Conversation snippet
                ? conversation.substring(0, 500)
                : "",
            ]],
          },
        })
      }
    } catch (sheetError) {
      console.error("Google Sheet logging failed:", sheetError)
      // Non-fatal — email already sent
    }

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error("Lead capture error:", error)
    // Always return success to not disrupt chat UX
    return NextResponse.json({ success: true })
  }
}
