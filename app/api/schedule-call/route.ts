import { NextRequest, NextResponse } from 'next/server';
import { scheduleCall } from '@/lib/firestore';
import { sendEmail, generateCallScheduleTemplate } from '@/lib/email';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, date, time, timezone, topic, message } = body;

    // Validation
    if (!name || !email || !date || !time || !timezone || !topic) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 },
      );
    }

    // Save to Firestore
    const saveResult = await scheduleCall({
      name,
      email,
      date,
      time,
      timezone,
      topic,
      message,
    });

    if (!saveResult.success) {
      throw new Error(saveResult.error);
    }

    // Send confirmation email to user
    const userEmailTemplate = generateCallScheduleTemplate({
      name,
      email,
      date,
      time,
      timezone,
      topic,
      message,
    });

    await sendEmail({
      to: email,
      subject: 'Call Scheduled - Prince Gupta',
      html: userEmailTemplate,
    });

    // Send notification to admin
    const adminEmailTemplate = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>New Call Scheduled</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #059669, #10b981); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
          .content { background: #f0fdf4; padding: 20px; border-radius: 0 0 8px 8px; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #374151; }
          .value { margin-top: 5px; padding: 10px; background: white; border-radius: 4px; border-left: 4px solid #059669; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>New Call Scheduled</h2>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Name:</div>
              <div class="value">${name}</div>
            </div>
            <div class="field">
              <div class="label">Email:</div>
              <div class="value">${email}</div>
            </div>
            <div class="field">
              <div class="label">Date & Time:</div>
              <div class="value">${date} at ${time} (${timezone})</div>
            </div>
            <div class="field">
              <div class="label">Topic:</div>
              <div class="value">${topic}</div>
            </div>
            ${
              message
                ? `
            <div class="field">
              <div class="label">Additional Notes:</div>
              <div class="value">${message}</div>
            </div>
            `
                : ''
            }
          </div>
        </div>
      </body>
      </html>
    `;

    await sendEmail({
      to: process.env.ADMIN_EMAIL!,
      subject: `New Call Scheduled: ${topic}`,
      html: adminEmailTemplate,
      replyTo: email,
    });

    return NextResponse.json({
      success: true,
      message: 'Call scheduled successfully',
      id: saveResult.id,
    });
  } catch (error) {
    console.error('Call scheduling error:', error);
    return NextResponse.json(
      { error: 'Failed to schedule call' },
      { status: 500 },
    );
  }
}
