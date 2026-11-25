import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { BrochureAdminEmail } from '@/emails/BrochureAdminEmail';
import { BrochureUserEmail } from '@/emails/BrochureUserEmail';
import { programs, resolveProgram } from '@/data/programs';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, company } = body;
    const program = resolveProgram(body.program);
    const { name: programName, subjectPrefix, docLabel } = programs[program];

    // Validate required fields
    if (!firstName || !lastName || !email || !company) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email to admin
    const adminEmail = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
      to: process.env.ADMIN_EMAIL || 'admin@ilead.hu',
      subject: `${subjectPrefix}Új ${docLabel} letöltés - ${programName}`,
      html: BrochureAdminEmail({
        firstName,
        lastName,
        email,
        company,
        program,
      }),
    });

    // Email to user (confirmation with thank you)
    const userEmail = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
      to: email,
      subject: `Köszönjük érdeklődését - ${programName}`,
      html: BrochureUserEmail({
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
