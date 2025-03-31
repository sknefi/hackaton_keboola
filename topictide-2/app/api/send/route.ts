import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

// Create email transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number.parseInt(process.env.SMTP_PORT || "587"),
  secure: process.env.SMTP_PORT === "465", // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

export async function POST(request: Request) {
  try {
    const { newsletterId, newsletterContent, subject, recipients } = await request.json()

    // Validate input
    if (!newsletterContent || !recipients || recipients.length === 0) {
      return NextResponse.json({ error: "Newsletter content and recipients are required" }, { status: 400 })
    }

    // In a real app, you would:
    // 1. Retrieve the newsletter content from the database using newsletterId
    // 2. Get the user's friends list from the database

    // Create email options
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: recipients.join(","), // Or use BCC for privacy
      subject: subject || "Newsletter from TopicTide",
      html: newsletterContent,
      // Create a text version by stripping HTML
      text: newsletterContent.replace(/<[^>]*>/g, ""),
    }

    // Send email
    const info = await transporter.sendMail(mailOptions)

    return NextResponse.json({
      success: true,
      messageId: info.messageId,
      sentCount: recipients.length,
    })
  } catch (error) {
    console.error("Error sending newsletter:", error)
    return NextResponse.json({ error: "Failed to send newsletter" }, { status: 500 })
  }
}

