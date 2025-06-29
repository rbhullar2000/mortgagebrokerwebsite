import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export const runtime = "nodejs"

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

    const htmlContent = `
      <h2>New Mortgage Inquiry from <strong>bcmortgageteam.com</strong></h2>
      <h3>Contact Information:</h3>
      <ul>
        <li><strong>Name:</strong> ${name}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Phone:</strong> ${phone}</li>
      </ul>

      <h3>Inquiry Details:</h3>
      <ul>
        <li><strong>Service:</strong> ${mortgageTypeLabel}</li>
        ${propertyValue ? `<li><strong>Property Value:</strong> ${propertyValue}</li>` : ""}
        ${downPayment ? `<li><strong>Down Payment:</strong> ${downPayment}</li>` : ""}
      </ul>

      ${message ? `<h3>Additional Message:</h3><p>${message.replace(/\n/g, "<br>")}</p>` : ""}

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
      from: `"BC Mortgage Team Website" <contact@bcmortgageteam.com>`,
      to: process.env.EMAIL_TO || "contact@bcmortgageteam.com",
      subject: `New Mortgage Inquiry from ${name}`,
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
