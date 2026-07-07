import { type NextRequest, NextResponse } from "next/server"
import { google } from "googleapis"

// Linear-time email check with a length cap — no catastrophic backtracking (fixes ReDoS finding)
function isValidEmail(email: unknown): email is string {
  if (typeof email !== "string" || email.length === 0 || email.length > 254) {
    return false
  }
  const atIndex = email.indexOf("@")
  // exactly one "@", not first or last char
  if (atIndex <= 0 || atIndex !== email.lastIndexOf("@") || atIndex === email.length - 1) {
    return false
  }
  const local = email.slice(0, atIndex)
  const domain = email.slice(atIndex + 1)
  if (/\s/.test(local) || /\s/.test(domain)) {
    return false
  }
  const dotIndex = domain.indexOf(".")
  // domain must contain a dot that isn't the first or last char
  return dotIndex > 0 && dotIndex < domain.length - 1
}

export async function POST(request: NextRequest) {
  try {
    console.log("Newsletter API called")
    const { email } = await request.json()
    if (!email) {
      return NextResponse.json({ success: false, error: "Email is required" }, { status: 400 })
    }
    // Validate email format
    if (!isValidEmail(email)) {
      return NextResponse.json({ success: false, error: "Please enter a valid email address" }, { status: 400 })
    }
    // More robust private key processing
    let privateKey = process.env.GOOGLE_PRIVATE_KEY
    if (!privateKey) {
      console.error("Private key not found")
      return NextResponse.json({ success: false, error: "Configuration error" }, { status: 500 })
    }
    // Handle different private key formats
    if (privateKey.includes("\\n")) {
      // Replace literal \n with actual newlines
      privateKey = privateKey.replace(/\\n/g, "\n")
    }
    // Remove any extra quotes that might be wrapping the key
    privateKey = privateKey.replace(/^["']|["']$/g, "")
    // Ensure proper formatting
    if (!privateKey.includes("\n")) {
      // If still no newlines, try to reconstruct the key
      const keyContent = privateKey.replace("-----BEGIN PRIVATE KEY-----", "").replace("-----END PRIVATE KEY-----", "")
      privateKey = `-----BEGIN PRIVATE KEY-----\n${keyContent}\n-----END PRIVATE KEY-----\n`
    }
    console.log("Private key starts with:", privateKey.substring(0, 50))
    console.log("Private key ends with:", privateKey.substring(privateKey.length - 50))
    // Set up Google Sheets API
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: privateKey,
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
    console.log("Subscription successful!")
    return NextResponse.json({
      success: true,
      message: "Successfully subscribed to newsletter",
    })
  } catch (error) {
    console.error("Newsletter subscription error:", error)
    return NextResponse.json(
      {
        success: false,
        error: "Failed to subscribe. Please try again later.",
      },
      { status: 500 },
    )
  }
}
