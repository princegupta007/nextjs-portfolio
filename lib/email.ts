import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS, // Fixed typo: Changed process.env.SMTP_PASS
  },
});

export interface EmailData {
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
}

export const sendEmail = async (emailData: EmailData) => {
  try {
    const info = await transporter.sendMail({
      from: `"Prince Gupta" <${process.env.SMTP_USER}>`,
      ...emailData,
    });

    console.log('Email sent: %s', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      success: false,
      error:
        error instanceof Error ? error.message : 'An unknown error occurred',
    };
  }
};

export const generateContactEmailTemplate = (data: {
  name: string;
  email: string;
  subject: string;
  message: string;
  budget?: string;
  timeline?: string;
}) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>New Contact Form Submission</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #7c3aed, #a855f7); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
        .content { background: #f9fafb; padding: 20px; border-radius: 0 0 8px 8px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #374151; }
        .value { margin-top: 5px; padding: 10px; background: white; border-radius: 4px; border-left: 4px solid #7c3aed; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>New Contact Form Submission</h2>
          <p>You have received a new message from your portfolio website.</p>
        </div>
        <div class="content">
          <div class="field">
            <div class="label">Name:</div>
            <div class="value">${data.name}</div>
          </div>
          <div class="field">
            <div class="label">Email:</div>
            <div class="value">${data.email}</div>
          </div>
          <div class="field">
            <div class="label">Subject:</div>
            <div class="value">${data.subject}</div>
          </div>
          ${
            data.budget
              ? `
          <div class="field">
            <div class="label">Budget:</div>
            <div class="value">${data.budget}</div>
          </div>
          `
              : ''
          }
          ${
            data.timeline
              ? `
          <div class="field">
            <div class="label">Timeline:</div>
            <div class="value">${data.timeline}</div>
          </div>
          `
              : ''
          }
          <div class="field">
            <div class="label">Message:</div>
            <div class="value">${data.message.replace(/\n/g, '<br>')}</div>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
};

export const generateCallScheduleTemplate = (data: {
  name: string;
  email: string;
  date: string;
  time: string;
  timezone: string;
  topic: string;
  message?: string;
}) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Call Scheduled</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #059669, #10b981); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
        .content { background: #f0fdf4; padding: 20px; border-radius: 0 0 8px 8px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #374151; }
        .value { margin-top: 5px; padding: 10px; background: white; border-radius: 4px; border-left: 4px solid #059669; }
        .calendar-link { background: #059669; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block; margin-top: 15px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>Call Scheduled Successfully!</h2>
          <p>Your call has been scheduled with Prince Gupta.</p>
        </div>
        <div class="content">
          <div class="field">
            <div class="label">Name:</div>
            <div class="value">${data.name}</div>
          </div>
          <div class="field">
            <div class="label">Date & Time:</div>
            <div class="value">${data.date} at ${data.time} (${data.timezone})</div>
          </div>
          <div class="field">
            <div class="label">Topic:</div>
            <div class="value">${data.topic}</div>
          </div>
          ${
            data.message
              ? `
          <div class="field">
            <div class="label">Additional Notes:</div>
            <div class="value">${data.message}</div>
          </div>
          `
              : ''
          }
          <p><strong>What's Next?</strong></p>
          <p>You'll receive a calendar invitation shortly with the meeting details. Please check your email and add this to your calendar.</p>
        </div>
      </div>
    </body>
    </html>
  `;
};
