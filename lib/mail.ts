"use server"
import nodemailer from 'nodemailer';

interface GmailTransportConfig {
  service: 'gmail';
  auth: {
    user: string;
    pass: string;
  };
}

export const sendEmail = async ({
  name,
  email,
  subject,
  message,
}: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  try {
    // Ensure this code runs only on the server side
    if (typeof window === 'undefined') {
      const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;

      // Ensure SMTP_EMAIL and SMTP_PASSWORD are defined
      if (!SMTP_EMAIL || !SMTP_PASSWORD) {
        throw new Error('SMTP_EMAIL and SMTP_PASSWORD must be defined in your environment variables.');
      }

      const transport: GmailTransportConfig = {
        service: 'gmail',
        auth: {
          user: SMTP_EMAIL,
          pass: SMTP_PASSWORD,
        },
      };

      const transporter = nodemailer.createTransport(transport);

      // sending
      const sendResult = await transporter.sendMail({
        from: email , // Set the sender's email address
        to: SMTP_EMAIL, // Set the recipient's email address
        subject: subject,
        html: `<h2>Comming from IBHS ${name}</h2><p>${message}</p><p>Sender mail: ${email}</p>`,
      });
    }
  } catch (error) {
    throw error; // Rethrow the error to handle it further if needed
  }
};
