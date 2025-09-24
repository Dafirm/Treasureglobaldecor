


import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(req) {
  try {
    const { cartItems, totalAmount } = await req.json();

    const itemList = cartItems
      .map(
        (item) =>
          `${item.name} - Quantity: ${item.quantity} - Price: €${item.price}`
      )
      .join("\n");

    const msg = {
      to: process.env.ADMIN_EMAIL,
      from: process.env.ADMIN_EMAIL, // can also be your SendGrid verified sender
      subject: "New Rental Request",
      text: `You have a new rental request:\n\n${itemList}\n\nTotal: €${totalAmount}`,
    };

    await sgMail.send(msg);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
