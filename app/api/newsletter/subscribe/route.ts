import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 })
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

    // Email to admin (notification)
    const adminMailOptions = {
      from: `"BC Mortgage Team" <${process.env.SMTP_USER}>`,
      to: process.env.EMAIL_TO || "contact@bcmortgageteam.com",
      subject: "New Newsletter Subscription",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>New Newsletter Subscription</h2>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
          
          <p>A new user has subscribed to your newsletter.</p>
        </div>
      `,
    }

    // Welcome email to subscriber
    const welcomeMailOptions = {
      from: `"BC Mortgage Team" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Welcome to BC Mortgage Team Newsletter!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #032133; color: white; padding: 20px; text-align: center;">
            <h1>BC Mortgage Team</h1>
            <p>Your Trusted Mortgage Professionals</p>
          </div>
          
          <div style="padding: 30px; background-color: #f9f9f9;">
            <h2 style="color: #032133;">Welcome to our newsletter!</h2>
            
            <p>Thank you for subscribing to the BC Mortgage Team newsletter. You'll now receive:</p>
            
            <div style="background-color: white; padding: 20px; border-left: 4px solid #D4AF37; margin: 20px 0;">
              <ul>
                <li>Latest mortgage rates and market updates</li>
                <li>Expert tips for homebuyers and homeowners</li>
                <li>Exclusive mortgage tools and calculators</li>
                <li>Industry insights and regulatory changes</li>
                <li>Special offers and promotions</li>
              </ul>
            </div>
            
            <div style="background-color: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #032133; margin-top: 0;">Contact Information</h3>
              <p><strong>Email:</strong> contact@bcmortgageteam.com</p>
              <p><strong>Website:</strong> <a href="https://bcmortgageteam.com" style="color: #D4AF37; text-decoration: none;">bcmortgageteam.com</a></p>
              <p><strong>Service Area:</strong> Greater Vancouver Area</p>
              <p>Surrey, Vancouver, Burnaby, Richmond & more</p>
            </div>
            
            <div style="background-color: #032133; color: white; padding: 20px; border-radius: 8px; margin: 20px 0; text-align: center;">
              <h3 style="margin-top: 0; color: white;">Ready to Get Started?</h3>
              <p style="margin-bottom: 15px;">Visit our website to explore mortgage calculators and get expert advice.</p>
              <a href="https://bcmortgageteam.com" style="display: inline-block; background-color: #D4AF37; color: #032133; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-weight: bold;">Visit Our Website</a>
            </div>
            
            <p>Best regards,<br>
            <strong>BC Mortgage Team</strong><br>
            Your Trusted Mortgage Professionals</p>
          </div>
          
          <div style="background-color: #032133; color: white; padding: 15px; text-align: center; font-size: 12px;">
            <p>You're receiving this because you subscribed to BC Mortgage Team newsletter.</p>
            <p><a href="https://bcmortgageteam.com" style="color: #D4AF37; text-decoration: none;">Visit bcmortgageteam.com</a> for more mortgage solutions.</p>
          </div>
        </div>
      `,
    }

    // Send both emails
    await Promise.all([transporter.sendMail(adminMailOptions), transporter.sendMail(welcomeMailOptions)])

    return NextResponse.json({ success: true, message: "Successfully subscribed to newsletter" })
  } catch (error) {
    console.error("Error subscribing to newsletter:", error)
    return NextResponse.json({ error: "Failed to subscribe to newsletter" }, { status: 500 })
  }
}
