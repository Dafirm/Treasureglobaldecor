

import emailjs from "@emailjs/nodejs";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    console.log("Incoming form data:", { name, email, message });
    console.log("Using ENV:", {
      service: process.env.EMAILJS_SERVICE_ID,
      template: process.env.EMAILJS_TEMPLATE_ID,
      public: process.env.EMAILJS_PUBLIC_KEY ? "LOADED" : "MISSING",
      private: process.env.EMAILJS_PRIVATE_KEY ? "LOADED" : "MISSING",
    });
    console.log("Template ID:", process.env.EMAILJS_TEMPLATE_ID);

    const response = await emailjs.send(
      process.env.EMAILJS_SERVICE_ID,      
      process.env.EMAILJS_TEMPLATE_ID,
      {
        from_name: name,
        reply_to: email,
        message,
      },
      {
        publicKey: process.env.EMAILJS_PUBLIC_KEY,
        privateKey: process.env.EMAILJS_PRIVATE_KEY,
      }
    );

    return NextResponse.json({
      success: true,
      message: "Message sent successfully!",
      response,
    });
  } catch (error) {
    console.error("EmailJS Error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to send message",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
