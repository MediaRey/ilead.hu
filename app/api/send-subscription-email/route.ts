import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { SubscriptionOrderAdminEmail } from '@/emails/SubscriptionOrderAdminEmail';
import { SubscriptionOrderUserEmail } from '@/emails/SubscriptionOrderUserEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      firstName,
      lastName,
      email,
      phone,
      position,
      additionalNote,
      companyName,
      companyAddress,
      cityPostal,
      ico,
      dic,
      icDph,
    } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !companyAddress || !cityPostal) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email to admin
    const adminEmail = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
      to: process.env.ADMIN_EMAIL || 'admin@ilead.hu',
      subject: 'Új előfizetési megrendelés - MIT Sloan Management Review',
      html: SubscriptionOrderAdminEmail({
        firstName,
        lastName,
        email,
        phone: phone || '',
        position: position || '',
        additionalNote: additionalNote || '',
        companyName: companyName || '',
        companyAddress,
        cityPostal,
        ico: ico || '',
        dic: dic || '',
        icDph: icDph || '',
      }),
    });

    // Email to user (confirmation)
    const userEmail = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
      to: email,
      subject: 'Köszönjük előfizetési megrendelését - iLead Institute',
      html: SubscriptionOrderUserEmail({
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
