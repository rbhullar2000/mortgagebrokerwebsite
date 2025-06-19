import { type NextRequest, NextResponse } from "next/server"
import { google } from "googleapis"

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json({ success: false, error: "Email is required" }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ success: false, error: "Please enter a valid email address" }, { status: 400 })
    }

    // Set up Google Sheets API
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    })

    const sheets = google.sheets({ version: "v4", auth })
    const spreadsheetId = process.env.GOOGLE_SHEET_ID

    if (!spreadsheetId) {
      console.error("Google Sheet ID not configured")
      return NextResponse.json({ success: false, error: "Newsletter service not configured" }, { status: 500 })
    }

    // Check if email already exists
    const existingData = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: "Newsletter!A:A",
    })

    const existingEmails = existingData.data.values?.flat() || []
    if (existingEmails.includes(email)) {
      return NextResponse.json(
        { success: false, error: "This email is already subscribed to our newsletter" },
        { status: 400 },
      )
    }

    // Add new subscription
    const timestamp = new Date().toISOString()
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Newsletter!A:C",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[email, timestamp, "Active"]],
      },
    })

    return NextResponse.json({
      success: true,
      message: "Successfully subscribed to newsletter",
    })
  } catch (error) {
    console.error("Newsletter subscription error:", error)
    return NextResponse.json({ success: false, error: "Failed to subscribe. Please try again later." }, { status: 500 })
  }
}
