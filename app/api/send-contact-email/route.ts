import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { ContactFormAdminEmail } from '@/emails/ContactFormAdminEmail';
import { ContactFormUserEmail } from '@/emails/ContactFormUserEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, company, position } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !company || !position) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email to admin
    const adminEmail = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
      to: process.env.ADMIN_EMAIL || 'admin@ilead.hu',
      subject: 'Új kapcsolatfelvételi kérelem - Be Future Ready Executive Program',
      html: ContactFormAdminEmail({
        firstName,
        lastName,
        email,
        phone,
        company,
        position,
      }),
    });

    // Email to user (confirmation)
    const userEmail = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
      to: email,
      subject: 'Köszönjük érdeklődését - iLead Institute',
      html: ContactFormUserEmail({
        firstName,
        lastName,
      }),
    });

    return NextResponse.json(
      {
        success: true,
        adminEmailId: adminEmail.data?.id,
        userEmailId: userEmail.data?.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
