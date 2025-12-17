

// import emailjs from "@emailjs/nodejs";
// import { NextResponse } from "next/server";

// export async function POST(req) {
//   try {
//     const { name, email, message } = await req.json();

//     console.log("Incoming form data:", { name, email, message });
//     console.log("Using ENV:", {
//       service: process.env.EMAILJS_SERVICE_ID,
//       template: process.env.EMAILJS_TEMPLATE_ID,
//       public: process.env.EMAILJS_PUBLIC_KEY ? "LOADED" : "MISSING",
//       private: process.env.EMAILJS_PRIVATE_KEY ? "LOADED" : "MISSING",
//     });
//     console.log("Template ID:", process.env.EMAILJS_TEMPLATE_ID);

//     const response = await emailjs.send(
//       process.env.EMAILJS_SERVICE_ID,      
//       process.env.EMAILJS_TEMPLATE_ID,
//       {
//         from_name: name,
//         reply_to: email,
//         message,
//       },
//       {
//         publicKey: process.env.EMAILJS_PUBLIC_KEY,
//         privateKey: process.env.EMAILJS_PRIVATE_KEY,
//       }
//     );

//     return NextResponse.json({
//       success: true,
//       message: "Message sent successfully!",
//       response,
//     });
//   } catch (error) {
//     console.error("EmailJS Error:", error);
//     return NextResponse.json(
//       {
//         success: false,
//         message: "Failed to send message",
//         error: error.message,
//       },
//       { status: 500 }
//     );
//   }
// }


import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();
    console.log("Auto-reply email address:", email);
    const firstName = name.split(" ")[0];

    // 1️⃣ Email TO YOU
    await resend.emails.send({
      from: "Treasure Global Decor <onboarding@resend.dev>",
      to: process.env.CONTACT_RECEIVER_EMAIL,
      subject: `New Contact Request from ${name}`,
      reply_to: email,
      html: `
        <h3>New Contact Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    // 2️⃣ Auto-reply TO USER
    await resend.emails.send({
      from: "Treasure Global Decor <onboarding@resend.dev>",
      to: email,
      subject: "We’ve received your message",
      html: `
        <p>Hi ${firstName},</p>
        <p>Thank you for reaching out to Treasure Global Decor.</p>
        <p>We’ve received your message and will get back to you shortly.</p>
        <br/>
        <p>Warm regards,<br/>Treasure Global Decor</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      { success: false, error: "Email failed" },
      { status: 500 }
    );
  }
}
