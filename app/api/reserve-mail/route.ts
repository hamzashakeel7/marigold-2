import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { userEmail, selectedDates } = await req.json();

    // Format the dates to a more readable format
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

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: [userEmail, process.env.RECEIVE_EMAIL as string],
      subject: "Reservation Confirmation",
      text: `Your reservation is confirmed for the following dates: ${formattedDates.join(
        ", "
      )}. Thank you for choosing our service.`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
