import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json(
        { message: "Email is required" },
        { status: 400 }
      );
    }

    // Configure the transporter
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // App password or email password
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.RECEIVE_EMAIL, // Sender address
      to: email, // Recipient address
      subject: "Thank You for Subscribing!",
      text: "Welcome! Thank you for subscribing to our newsletter. We’ll keep you updated.",
      html: `
        <h1>Welcome!</h1>
        <p>Thank you for subscribing to our newsletter. We’ll keep you updated.</p>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to send email." },
      { status: 500 }
    );
  }
}
