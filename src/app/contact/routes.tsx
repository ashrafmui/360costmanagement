import { NextResponse } from 'next/server'
import nodemailer from "nodemailer"

export async function POST(request: Request) {
  const { name, email, phone, subject, message } = await request.json()

  // If you haven't set SMTP_HOST, skip actual sending
  if (!process.env.SMTP_HOST) {
    console.log("SMTP not configured; skipping sendMail")
    return NextResponse.json({ success: true })
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  try {
    await transporter.sendMail({
      from: `"Website Contact Form" <${process.env.SMTP_USER}>`,
      to: 'info@360costmanagement.com',
      subject: `New contact: ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Message:
        ${message}
      `,
    })
  } catch (err) {
    console.error("sendMail failed:", err)
    return NextResponse.json({ error: "Unable to send email" }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
