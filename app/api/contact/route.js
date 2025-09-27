// import sgMail from "@sendgrid/mail";

// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// export async function POST(req) {
//   try {
//     const { name, email, message } = await req.json();

//     const msg = {
//       to: "treasureglobaldeco@gmail.com", // 👈 Your email
//       from: "no-reply@treasureglobaldecor.com", // 👈 Use a verified sender in SendGrid
//       subject: `New Contact Form Submission from ${name}`,
//       text: `
//         You got a new message from your website contact form.
        
//         Name: ${name}
//         Email: ${email}
        
//         Message:
//         ${message}
//       `,
//     };

//     await sgMail.send(msg);

//     return new Response(
//       JSON.stringify({ success: true, message: "Email sent successfully!" }),
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error(error);
//     return new Response(
//       JSON.stringify({ success: false, message: "Failed to send email." }),
//       { status: 500 }
//     );
//   }
// }





// import emailjs from "@emailjs/nodejs";
// import { NextResponse } from "next/server";

// export async function POST(req) {
//   try {
//     const { name, email, message } = await req.json();

//     const response = await emailjs.send(
//       process.env.EMAILJS_SERVICE_ID,
//       process.env.EMAILJS_TEMPLATE_ID,
//       { from_name: name, reply_to: email, message },
//       {
//         publicKey: process.env.EMAILJS_PUBLIC_KEY,
//         privateKey: process.env.EMAILJS_PRIVATE_KEY,
//       }
//     );

//     return NextResponse.json({ success: true, message: "Message sent!" });
//   } catch (error) {
//     console.error("EmailJS Error:", error);
//     return NextResponse.json(
//       { success: false, message: "Failed to send" },
//       { status: 500 }
//     );
//   }
// }



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
