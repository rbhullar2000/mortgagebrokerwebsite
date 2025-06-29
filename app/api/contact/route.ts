import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, message, mortgageType } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
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

    // Email to admin
    const adminMailOptions = {
      from: `"BC Mortgage Team" <${process.env.SMTP_USER}>`,
      to: process.env.EMAIL_TO || "contact@bcmortgageteam.com",
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #032133; color: white; padding: 20px; text-align: center;">
            <h1>New Contact Form Submission</h1>
          </div>
          
          <div style="padding: 30px; background-color: #f9f9f9;">
            <h2 style="color: #032133;">Contact Details</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
            <p><strong>Mortgage Type:</strong> ${mortgageType || "Not specified"}</p>
            
            <h3 style="color: #032133;">Message</h3>
            <div style="background-color: white; padding: 20px; border-left: 4px solid #D4AF37;">
              <p>${message}</p>
            </div>
            
            <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
    }

    // Auto-reply to user
    const userMailOptions = {
      from: `"BC Mortgage Team" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Thank you for contacting BC Mortgage Team",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #032133; color: white; padding: 20px; text-align: center;">
            <h1>BC Mortgage Team</h1>
            <p>Your Trusted Mortgage Professionals</p>
          </div>
          
          <div style="padding: 30px; background-color: #f9f9f9;">
            <h2 style="color: #032133;">Thank you for reaching out, ${name}!</h2>
            
            <p>We've received your message and will get back to you within 24 hours.</p>
            
            <div style="background-color: white; padding: 20px; border-left: 4px solid #D4AF37; margin: 20px 0;">
              <h3 style="color: #032133; margin-top: 0;">What happens next?</h3>
              <ul>
                <li>We'll review your inquiry carefully</li>
                <li>One of our mortgage specialists will contact you</li>
                <li>We'll discuss your specific needs and options</li>
                <li>We'll provide you with personalized mortgage solutions</li>
              </ul>
            </div>
            
            <div style="background-color: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #032133; margin-top: 0;">Contact Information</h3>
              <p><strong>Email:</strong> contact@bcmortgageteam.com</p>
              <p><strong>Website:</strong> <a href="https://bcmortgageteam.com" style="color: #D4AF37; text-decoration: none;">bcmortgageteam.com</a></p>
              <p><strong>Service Area:</strong> Greater Vancouver Area</p>
              <p>Surrey, Vancouver, Burnaby, Richmond & more</p>
            </div>
            
            <p>Best regards,<br>
            <strong>BC Mortgage Team</strong><br>
            Your Trusted Mortgage Professionals</p>
          </div>
          
          <div style="background-color: #032133; color: white; padding: 15px; text-align: center; font-size: 12px;">
            <p>This is an automated response. We'll be in touch with you personally soon.</p>
            <p><a href="https://bcmortgageteam.com" style="color: #D4AF37; text-decoration: none;">Visit bcmortgageteam.com</a> for more mortgage solutions.</p>
          </div>
        </div>
      `,
    }

    // Send both emails
    await Promise.all([transporter.sendMail(adminMailOptions), transporter.sendMail(userMailOptions)])

    return NextResponse.json({ success: true, message: "Message sent successfully" })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
  }
}
