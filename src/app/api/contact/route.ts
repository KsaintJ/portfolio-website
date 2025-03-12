/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Debug environment variables
console.log('Environment variables check:', {
  EMAIL_USER: process.env.EMAIL_USER ? 'Set (first few chars: ' + process.env.EMAIL_USER.substring(0, 3) + '...)' : 'Not set',
  EMAIL_PASS: process.env.EMAIL_PASS ? 'Set (length: ' + process.env.EMAIL_PASS.length + ')' : 'Not set',
  NODE_ENV: process.env.NODE_ENV
});

export async function POST(req: Request) {
  try {
    // Parse the request body
    const body = await req.json();
    const { name, email, subject, message } = body;
    
    console.log('Received form submission:', { name, email, subject });

    // Validate inputs
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // use SSL
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      },
      tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false
      }
    });

    // Log transporter configuration
    console.log('Transporter configured with:', {
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER ? 'Set' : 'Not Set',
        pass: process.env.EMAIL_PASS ? 'Set' : 'Not Set'
      }
    });

    // Email content
    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `Portfolio Contact: ${subject}`,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
      html: `
<div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">
  <h2 style="color: #3b82f6;">New Contact Form Submission</h2>
  <p><strong>Name:</strong> ${name}</p>
  <p><strong>Email:</strong> ${email}</p>
  <div style="margin-top: 20px;">
    <p><strong>Message:</strong></p>
    <p style="background-color: #f9fafb; padding: 15px; border-radius: 5px;">${message.replace(/\n/g, '<br>')}</p>
  </div>
</div>
      `
    };

    // Log before sending
    console.log('Attempting to send email...');

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);

    return NextResponse.json(
      { success: true, message: 'Email sent successfully!' },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error in contact API route:', error);
    return NextResponse.json(
      { error: 'Failed to send email', details: error.message },
      { status: 500 }
    );
  }
}