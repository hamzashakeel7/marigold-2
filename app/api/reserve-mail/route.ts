import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { email, selectedDates, name, phone } = await req.json(); // Corrected destructuring

    // Format the selected dates for readability
    const formattedDates = selectedDates.map((date: string) =>
      new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }).format(new Date(date))
    );

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email to the user
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email, // Use `email` from the request body
      subject: "Your Reservation Confirmation",
      text: `Hello ${name},\n\nYour reservation has been confirmed for the following dates: ${formattedDates.join(
        ", "
      )}.\n\nThank you for choosing our service!\n\nBest regards,\nThe Marigold Team`,
    };

    // Email to the Marigold owner
    const ownerMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECEIVE_EMAIL, // Owner's email
      subject: "New Reservation Alert",
      text: `You have a new reservation from ${name}.\n\nDetails:\n- Email: ${email}\n- Phone: ${phone}\n- Dates: ${formattedDates.join(
        ", "
      )}.\n\nPlease review the details.`,
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(userMailOptions),
      transporter.sendMail(ownerMailOptions),
    ]);

    return NextResponse.json({ message: "Emails sent successfully!" });
  } catch (error) {
    console.error("Error sending emails:", error);
    return NextResponse.json(
      { error: "Failed to send emails" },
      { status: 500 }
    );
  }
}
