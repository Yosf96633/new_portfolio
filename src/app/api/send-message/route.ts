import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.ADMIN_EMAIL,
        pass: process.env.ADMIN_PASSWORD,
      },
    });

    // Email template
    const htmlTemplate = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Message</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #000000;">
        <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #000000; padding: 60px 20px;">
          <tr>
            <td align="center">
              <table width="600" cellpadding="0" cellspacing="0" style="background-color: #000000; border: 1px solid #ffffff; overflow: hidden;">
                
                <!-- Header -->
                <tr>
                  <td style="padding: 48px 48px 40px; border-bottom: 1px solid #ffffff;">
                    <h1 style="margin: 0 0 8px 0; color: #ffffff; font-size: 32px; font-weight: 700; letter-spacing: -1px; line-height: 1.2;">New Contact Message</h1>
                    <p style="margin: 0; color: #ffffff; font-size: 15px; opacity: 0.6; font-weight: 400;">Portfolio Inquiry</p>
                  </td>
                </tr>
                
                <!-- Content -->
                <tr>
                  <td style="padding: 48px;">
                    
                    <!-- Sender Name -->
                    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 32px;">
                      <tr>
                        <td style="padding-bottom: 8px;">
                          <span style="color: #ffffff; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 600; opacity: 0.5;">Sender</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span style="color: #ffffff; font-size: 20px; font-weight: 600; letter-spacing: -0.3px;">${name}</span>
                        </td>
                      </tr>
                    </table>
                    
                    <!-- Email -->
                    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 40px;">
                      <tr>
                        <td style="padding-bottom: 8px;">
                          <span style="color: #ffffff; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 600; opacity: 0.5;">Email</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="mailto:${email}" style="color: #ffffff; font-size: 16px; text-decoration: underline; text-underline-offset: 4px;">${email}</a>
                        </td>
                      </tr>
                    </table>
                    
                    <!-- Message -->
                    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 40px;">
                      <tr>
                        <td style="padding-bottom: 16px;">
                          <span style="color: #ffffff; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 600; opacity: 0.5;">Message</span>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 24px; background-color: #000000; border: 1px solid #ffffff;">
                          <p style="margin: 0; color: #ffffff; font-size: 16px; line-height: 1.7; white-space: pre-wrap; opacity: 0.9;">${message}</p>
                        </td>
                      </tr>
                    </table>
                    
                    <!-- Reply Button -->
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td>
                          <a href="mailto:${email}?subject=Re: Portfolio Contact" style="display: inline-block; padding: 16px 40px; background-color: #ffffff; color: #000000; text-decoration: none; font-weight: 600; font-size: 14px; letter-spacing: 0.5px; text-transform: uppercase; transition: all 0.2s ease;">Reply</a>
                        </td>
                      </tr>
                    </table>
                    
                  </td>
                </tr>
                
                <!-- Footer -->
                <tr>
                  <td style="padding: 32px 48px; border-top: 1px solid #ffffff;">
                    <p style="margin: 0; color: #ffffff; font-size: 13px; opacity: 0.4; line-height: 1.6;">
                      Received ${new Date().toLocaleString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </td>
                </tr>
                
              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `;

    // Send email
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.ADMIN_EMAIL}>`,
      to: process.env.MY_EMAIL,
      subject: `New Portfolio Message from ${name}`,
      html: htmlTemplate,
      replyTo: email,
    });

    return NextResponse.json(
      { success: true, message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
