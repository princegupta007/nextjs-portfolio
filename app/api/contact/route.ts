import { NextRequest, NextResponse } from 'next/server';
import { saveContactMessage } from '@/lib/firestore';
import { sendEmail, generateContactEmailTemplate } from '@/lib/email';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message, budget, timeline } = body;

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 },
      );
    }

    // Save to Firestore
    const saveResult = await saveContactMessage({
      name,
      email,
      subject,
      message,
      budget,
      timeline,
    });

    if (!saveResult.success) {
      throw new Error(saveResult.error);
    }

    // Send email notification
    const emailTemplate = generateContactEmailTemplate({
      name,
      email,
      subject,
      message,
      budget,
      timeline,
    });

    const emailResult = await sendEmail({
      to: process.env.ADMIN_EMAIL!,
      subject: `New Contact Form Submission: ${subject}`,
      html: emailTemplate,
      replyTo: email,
    });

    if (!emailResult.success) {
      console.error('Failed to send email:', emailResult.error);
    }

    // Send confirmation email to user
    const confirmationTemplate = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Message Received</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #7c3aed, #a855f7); color: white; padding: 20px; border-radius: 8px; text-align: center; }
          .content { padding: 20px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>Thank you for reaching out!</h2>
          </div>
          <div class="content">
            <p>Hi ${name},</p>
            <p>Thank you for your message. I've received your inquiry about "${subject}" and will get back to you within 24 hours.</p>
            <p>In the meantime, feel free to explore my portfolio and resources.</p>
            <p>Best regards,<br>Prince Gupta</p>
          </div>
        </div>
      </body>
      </html>
    `;

    await sendEmail({
      to: email,
      subject: 'Thank you for your message - Prince Gupta',
      html: confirmationTemplate,
    });

    return NextResponse.json({
      success: true,
      message: 'Message sent successfully',
      id: saveResult.id,
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 },
    );
  }
}
