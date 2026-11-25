import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { ContactFormAdminEmail } from '@/emails/ContactFormAdminEmail';
import { ContactFormUserEmail } from '@/emails/ContactFormUserEmail';
import { programs, resolveProgram } from '@/data/programs';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, company, position } = body;
    const program = resolveProgram(body.program);
    const { name: programName, subjectPrefix } = programs[program];

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
      subject: `${subjectPrefix}Új kapcsolatfelvételi kérelem - ${programName}`,
      html: ContactFormAdminEmail({
        firstName,
        lastName,
        email,
        phone,
        company,
        position,
        program,
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
        program,
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
