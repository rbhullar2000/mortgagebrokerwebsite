import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"
import path from "path"
import fs from "fs"

// Escapes user-controlled values before embedding them in HTML email bodies (fixes XSS findings)
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

// Validates fileName as a simple filename and confirms the resolved path stays inside
// public/resources — returns the safe absolute path, or null if anything looks unsafe (fixes path injection)
function resolveResourcePath(fileName: unknown): string | null {
  if (
    typeof fileName !== "string" ||
    fileName.length === 0 ||
    fileName.includes("/") ||
    fileName.includes("\\") ||
    fileName.includes("\0") ||
    path.isAbsolute(fileName) ||
    fileName === "." ||
    fileName === ".."
  ) {
    return null
  }

  const resourcesRoot = path.resolve(process.cwd(), "public/resources")
  const filePath = path.resolve(resourcesRoot, fileName)

  // containment check: guard against tricks like a sibling "public/resources-evil" folder
  if (filePath !== resourcesRoot && !filePath.startsWith(resourcesRoot + path.sep)) {
    return null
  }

  return filePath
}

export async function POST(request: NextRequest) {
  try {
    const { email, resourceName, fileName } = await request.json()

    console.log("Resource download request:", { email, resourceName, fileName })

    if (!email || !resourceName || !fileName) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Email validation
    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 })
    }

    // Validate and resolve the resource path safely
    const filePath = resolveResourcePath(fileName)
    if (!filePath) {
      return NextResponse.json({ error: "Invalid file name" }, { status: 400 })
    }
    console.log("Looking for file at:", filePath)

    if (!fs.existsSync(filePath)) {
      console.error("File not found:", filePath)
      return NextResponse.json({ error: "Resource file not found" }, { status: 404 })
    }

    // Validate environment variables
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error("Missing SMTP configuration")
      return NextResponse.json({ error: "Email service not configured" }, { status: 500 })
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number.parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_PORT === "465",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Test the connection
    try {
      await transporter.verify()
      console.log("SMTP connection verified")
    } catch (error) {
      console.error("SMTP connection failed:", error)
      return NextResponse.json({ error: "Email service unavailable" }, { status: 500 })
    }

    // Escaped/sanitized copies of user input for safe use in emails
    const safeResourceName = escapeHtml(resourceName)
    const safeEmail = escapeHtml(email)
    const safeFileName = escapeHtml(fileName)
    const subjectResourceName = sanitizeHeader(resourceName)

    // Email to user with attachment
    const userMailOptions = {
      from: process.env.SMTP_USER,
      to: email,
      subject: `Your ${subjectResourceName} from BC Mortgage Team`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #032133; color: white; padding: 20px; text-align: center;">
            <h1>BC Mortgage Team</h1>
            <p>Your Trusted Mortgage Professionals</p>
          </div>
          
          <div style="padding: 30px; background-color: #f9f9f9;">
            <h2 style="color: #032133;">Thank you for downloading our ${safeResourceName}!</h2>
            
            <p>Hi there,</p>
            
            <p>Thank you for your interest in our mortgage tools. We've attached the <strong>${safeResourceName}</strong> to this email for your convenience.</p>
            
            <div style="background-color: white; padding: 20px; border-left: 4px solid #D4AF37; margin: 20px 0;">
              <h3 style="color: #032133; margin-top: 0;">How to use this tool:</h3>
              <ul>
                <li>Download and open the Excel file</li>
                <li>Enter your mortgage details in the highlighted cells</li>
                <li>The calculations will update automatically</li>
                <li>Use this information to make informed mortgage decisions</li>
              </ul>
            </div>
            
            <p>If you have any questions about using this tool or need personalized mortgage advice, don't hesitate to reach out to us.</p>
            
            <div style="background-color: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #032133; margin-top: 0;">Contact Information</h3>
              <p><strong>Email:</strong> contact@bcmortgageteam.com</p>
              <p><strong>Website:</strong> <a href="https://bcmortgageteam.com" style="color: #D4AF37; text-decoration: none;">bcmortgageteam.com</a></p>
              <p><strong>Service Area:</strong> Greater Vancouver Area</p>
              <p>Surrey, Vancouver, Burnaby, Richmond & more</p>
            </div>
            
            <div style="background-color: #032133; color: white; padding: 20px; border-radius: 8px; margin: 20px 0; text-align: center;">
              <h3 style="margin-top: 0; color: white;">Need More Help?</h3>
              <p style="margin-bottom: 15px;">Visit our website for more mortgage tools, calculators, and expert advice.</p>
              <a href="https://bcmortgageteam.com" style="display: inline-block; background-color: #D4AF37; color: #032133; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-weight: bold;">Visit Our Website</a>
            </div>
            
            <p>Best regards,<br>
            <strong>BC Mortgage Team</strong><br>
            Your Trusted Mortgage Professionals</p>
          </div>
          
          <div style="background-color: #032133; color: white; padding: 15px; text-align: center; font-size: 12px;">
            <p>This email was sent because you requested a mortgage resource from BC Mortgage Team.</p>
            <p><a href="https://bcmortgageteam.com" style="color: #D4AF37; text-decoration: none;">Visit bcmortgageteam.com</a> for more mortgage solutions.</p>
          </div>
        </div>
      `,
      attachments: [
        {
          filename: fileName,
          path: filePath,
        },
      ],
    }

    // Email to admin (notification)
    const adminMailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.EMAIL_TO || "contact@bcmortgageteam.com",
      subject: `New Resource Download: ${subjectResourceName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>New Resource Download</h2>
          <p><strong>Resource:</strong> ${safeResourceName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>File:</strong> ${safeFileName}</p>
          <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
          
          <p>A user has downloaded a resource from your website. Consider following up with them about their mortgage needs.</p>
        </div>
      `,
    }

    // Send both emails
    console.log("Sending emails...")
    await Promise.all([transporter.sendMail(userMailOptions), transporter.sendMail(adminMailOptions)])
    console.log("Emails sent successfully")

    return NextResponse.json({ success: true, message: "Resource sent successfully" })
  } catch (error) {
    console.error("Error sending resource:", error)
    return NextResponse.json(
      {
        error: `Failed to send resource: ${error instanceof Error ? error.message : "Unknown error"}`,
      },
      { status: 500 },
    )
  }
}
