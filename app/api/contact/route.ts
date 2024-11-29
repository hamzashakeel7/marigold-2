import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, email, phone, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json(
      { message: "Missing required fields" },
      { status: 400 }
    );
  }

  try {
    // Configure transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email to admin
    await transporter.sendMail({
      from: process.env.RECEIVE_EMAIL,
      to: process.env.RECEIVE_EMAIL,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    // Verification email to client
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank you for contacting us!",
      html: `
        <h3>Hi ${name},</h3>
        <p>Thank you for reaching out. We have received your message and will get back to you shortly.</p>
        <p>Best regards,<br/>WebWiz Durrani Team</p>
      `,
    });

    return NextResponse.json({ message: "Emails sent successfully" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 }
    );
  }
}
