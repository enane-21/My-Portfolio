import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { Message } from "@/lib/models/Message";

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    // Basic server-side validation
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    await connectDB();

    await Message.create({ name: name.trim(), email: email.trim(), message: message.trim() });

    return NextResponse.json({ ok: true, message: "Message saved successfully." });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Server error. Please try again." }, { status: 500 });
  }
}
