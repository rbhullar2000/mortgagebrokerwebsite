import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"
import path from "path"
import fs from "fs"

export async function POST(request: NextRequest) {
  try {
    const { email, resourceName, fileName } = await request.json()

    if (!email || !resourceName || !fileName) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 })
    }

    // Create transporter
    const transporter = nodemailer.createTransporter({
      host: process.env.SMTP_HOST,
      port: Number.parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_PORT === "465",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // File path
    const filePath = path.join(process.cwd(), "public", "resources", fileName)

    // Check if file exists
    if (!fs.existsSync(filePath)) {
      console.error("File not found:", filePath)
      return NextResponse.json({ error: "Resource file not found" }, { status: 404 })
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
            
            <p>Thank you for your interest in our mortgage tools. Please find your <strong>${resourceName}</strong> attached to this email.</p>
            
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
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="mailto:contact@bcmortgageteam.com" style="background-color: #032133; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; display: inline-block;">Contact Us</a>
            </div>
            
            <p>Best regards,<br>
            <strong>BC Mortgage Team</strong><br>
            Your Trusted Mortgage Professionals</p>
            
            <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">
            
            <p style="font-size: 12px; color: #666;">
              This email was sent because you requested a mortgage resource from our website. 
              We respect your privacy and will only send you relevant mortgage information.
            </p>
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

    // Admin notification email
    const adminMailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.EMAIL_TO || "contact@bcmortgageteam.com",
      subject: `New Resource Download: ${resourceName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #032133;">New Resource Download</h2>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px;">
            <p><strong>Resource:</strong> ${resourceName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>File:</strong> ${fileName}</p>
            <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
          </div>
          
          <p>A new lead has downloaded a resource from your website. Consider following up with personalized mortgage advice.</p>
        </div>
      `,
    }

    // Send both emails
    await Promise.all([transporter.sendMail(userMailOptions), transporter.sendMail(adminMailOptions)])

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error sending resource:", error)
    return NextResponse.json({ error: "Failed to send resource" }, { status: 500 })
  }
}
