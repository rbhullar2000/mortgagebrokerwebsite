import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"
import path from "path"
import fs from "fs"

export async function POST(request: NextRequest) {
  try {
    const { email, resourceName, fileName } = await request.json()

    console.log("Resource download request:", { email, resourceName, fileName })

    if (!email || !resourceName || !fileName) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 })
    }

    // Check if file exists
    const filePath = path.join(process.cwd(), "public/resources", fileName)
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

    // Create transporter (fixed typo)
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

    // Email to user with attachment
    const userMailOptions = {
      from: process.env.SMTP_USER,
      to: email,
      subject: `Your ${resourceName} from BC Mortgage Team`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #032133; color: white; padding: 20px; text-align: center;">
            <h1>BC Mortgage Team</h1>
            <p>Your Trusted Mortgage Professionals</p>
          </div>
          
          <div style="padding: 30px; background-color: #f9f9f9;">
            <h2 style="color: #032133;">Thank you for downloading our ${resourceName}!</h2>
            
            <p>Hi there,</p>
            
            <p>Thank you for your interest in our mortgage tools. We've attached the <strong>${resourceName}</strong> to this email for your convenience.</p>
            
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
              <p><strong>Service Area:</strong> Greater Vancouver Area</p>
              <p>Surrey, Vancouver, Burnaby, Richmond & more</p>
            </div>
            
            <p>Best regards,<br>
            <strong>BC Mortgage Team</strong><br>
            Your Trusted Mortgage Professionals</p>
          </div>
          
          <div style="background-color: #032133; color: white; padding: 15px; text-align: center; font-size: 12px;">
            <p>This email was sent because you requested a mortgage resource from BC Mortgage Team.</p>
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
      subject: `New Resource Download: ${resourceName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>New Resource Download</h2>
          <p><strong>Resource:</strong> ${resourceName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>File:</strong> ${fileName}</p>
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
