import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { email, selectedDates, name, phone, roomName } = await req.json();

    // Format dates for readability
    const formattedDates = selectedDates.map((date: string) =>
      new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }).format(new Date(date))
    );

    // Email to the user (buyer)
    await resend.emails.send({
      from: "marigoldaccomodations@gmail.com", // Replace with your verified domain email
      to: email,
      subject: "Your Reservation Confirmation",
      text: `Hello ${name},\n\nYour reservation for "${roomName}" has been confirmed for the following dates: ${formattedDates.join(
        ", "
      )}.\n\nThank you for choosing Marigold!\n\nBest regards,\nThe Marigold Team`,
    });

    // Email to the owner
    await resend.emails.send({
      from: "marigoldaccomodations@gmail.com", // Use the same verified email
      to: process.env.RECEIVE_EMAIL || "default@yourdomain.com", // Owner's email from env
      subject: "New Reservation Alert",
      text: `You have a new reservation for "${roomName}".\n\nDetails:\n- Name: ${name}\n- Email: ${email}\n- Phone: ${phone}\n- Dates: ${formattedDates.join(
        ", "
      )}.\n\nPlease review the details.`,
    });

    return NextResponse.json({ message: "Emails sent successfully!" });
  } catch (error) {
    console.error("Error sending emails:", error);
    return NextResponse.json(
      { error: "Failed to send emails" },
      { status: 500 }
    );
  }
}
