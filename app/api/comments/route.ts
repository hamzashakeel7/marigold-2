import { NextResponse } from "next/server";
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2022-03-07",
  useCdn: true,
  token: process.env.SANITY_API_TOKEN, // Use a secured API token
});

export async function POST(request: Request) {
  try {
    const { name, email, comment, roomId } = await request.json();

    if (!name || !email || !comment || !roomId) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    const newComment = {
      _type: "comment",
      name,
      email,
      comment,
      room: { _type: "reference", _ref: roomId },
      approved: false,
      createdAt: new Date().toISOString(),
    };

    const createdComment = await client.create(newComment);

    return NextResponse.json(
      { message: "Comment submitted successfully!", comment: createdComment },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error submitting comment:", error);
    return NextResponse.json(
      { message: "Failed to submit comment" },
      { status: 500 }
    );
  }
}
