import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    const { email, resourceName, resourceFile } = await request.json()

    if (!email || !resourceName || !resourceFile) {
      return NextResponse.json({ success: false, error: "Missing required fields" }, { status: 400 })
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

    // Email to user with the resource
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
            
            <p>Thank you for your interest in our ${resourceName}. This tool will help you make informed decisions about your mortgage.</p>
            
            <div style="background-color: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #032133; margin-top: 0;">How to use this tool:</h3>
              <ul>
                <li>Open the Excel file</li>
                <li>Enter your mortgage details in the highlighted cells</li>
                <li>The calculations will update automatically</li>
                <li>Use different scenarios to compare options</li>
              </ul>
            </div>
            
            <p>If you have any questions about using this tool or need help with your mortgage needs, don't hesitate to reach out!</p>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="https://r.mtg-app.com/robbhullar" 
                 style="background-color: #032133; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; display: inline-block;">
                Start Your Application
              </a>
            </div>
            
            <p>Best regards,<br>
            <strong>BC Mortgage Team</strong><br>
            Smart Mortgage Solutions</p>
            
            <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">
            
            <div style="text-align: center;">
              <p><strong>Contact Information:</strong></p>
              <p>Email: contact@bcmortgageteam.com<br>
              Service Area: Greater Vancouver Area</p>
            </div>
          </div>
          
          <div style="background-color: #032133; color: white; padding: 15px; text-align: center; font-size: 12px;">
            <p>© 2024 BC Mortgage Team. All rights reserved.</p>
          </div>
        </div>
      `,
    }

    // Email notification to admin
    const adminMailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.EMAIL_TO || "contact@bcmortgageteam.com",
      subject: `Resource Download: ${resourceName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #032133;">New Resource Download</h2>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px;">
            <p><strong>Resource:</strong> ${resourceName}</p>
            <p><strong>File:</strong> ${resourceFile}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
          </div>
          
          <p>This email has been added to your resource download list for follow-up.</p>
        </div>
      `,
    }

    // Send emails
    await Promise.all([transporter.sendMail(userMailOptions), transporter.sendMail(adminMailOptions)])

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Resource download error:", error)
    return NextResponse.json({ success: false, error: "Failed to process request" }, { status: 500 })
  }
}
