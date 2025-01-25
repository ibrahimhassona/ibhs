"use server";
import nodemailer from "nodemailer";

interface EmailPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface GmailTransportConfig {
  service: "gmail";
  auth: {
    user: string;
    pass: string;
  };
}

export const sendEmail = async ({ name, email, subject, message }: EmailPayload): Promise<void> => {
  try {
    // Ensure this code runs only on the server side
    if (typeof window !== "undefined") {
      throw new Error("This function must be called on the server side.");
    }

    const { SMTP_EMAIL, SMTP_PASSWORD, NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY } = process.env;

    // Ensure all required environment variables are set
    if (!SMTP_EMAIL || !SMTP_PASSWORD) {
      throw new Error("SMTP_EMAIL and SMTP_PASSWORD must be defined in your environment variables.");
    }

    const transport: GmailTransportConfig = {
      service: "gmail",
      auth: {
        user: SMTP_EMAIL,
        pass: SMTP_PASSWORD,
      },
    };

    const transporter = nodemailer.createTransport(transport);

    // Validate inputs
    if (!name || !email || !subject || !message) {
      throw new Error("All fields (name, email, subject, message) are required.");
    }

    // Sending email to the admin
    await transporter.sendMail({
      from: SMTP_EMAIL,
      to: SMTP_EMAIL, // Admin email is the same as SMTP email in this case
      subject: `New message from ${name} - ${subject}`,
      html: `
        <h2>New message from ${name}</h2>
        <p>${message}</p>
        <p><strong>Sender email:</strong> ${email}</p>
      `,
    });

    // Sending confirmation email to the sender
    await transporter.sendMail({
      from: SMTP_EMAIL,
      to: email,
      subject: `Your message has been sent - ${subject}`,
      html: `
        <h2>Your message has been sent</h2>
        <p>Thank you for contacting us, ${name}. We will get back to you as soon as possible.</p>
      `,
    });

    console.log(`Email successfully sent to ${email} and admin.`);
  } catch (error) {
    // Log the error for debugging purposes
    console.error("Error sending email:", error);

    // Rethrow the error to allow external handling
    throw new Error("Failed to send the email. Please try again later.");
  }
};
