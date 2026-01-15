interface ContactFormAdminEmailProps {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  position: string;
}

export const ContactFormAdminEmail = ({
  firstName,
  lastName,
  email,
  phone,
  company,
  position,
}: ContactFormAdminEmailProps): string => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #A00230; font-size: 24px; margin-bottom: 20px;">
          Új kapcsolatfelvételi kérelem
        </h1>

        <p style="font-size: 16px; margin-bottom: 20px;">
          Új kapcsolatfelvételi kérelem érkezett a Be Future Ready Executive Program űrlapjáról.
        </p>

        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h2 style="font-size: 18px; margin-bottom: 15px; color: #333;">Kapcsolattartó adatai:</h2>

          <p style="margin: 10px 0; font-size: 14px;">
            <strong>Név:</strong> ${firstName} ${lastName}
          </p>

          <p style="margin: 10px 0; font-size: 14px;">
            <strong>E-mail cím:</strong> <a href="mailto:${email}" style="color: #0066cc;">${email}</a>
          </p>

          ${phone ? `<p style="margin: 10px 0; font-size: 14px;">
            <strong>Telefon:</strong> ${phone}
          </p>` : ''}

          <p style="margin: 10px 0; font-size: 14px;">
            <strong>Cég neve:</strong> ${company}
          </p>

          <p style="margin: 10px 0; font-size: 14px;">
            <strong>Pozíció:</strong> ${position}
          </p>
        </div>

        <p style="font-size: 14px; color: #666;">
          Kérjük, mielőbb vegye fel a kapcsolatot a jelentkezővel.
        </p>
      </body>
    </html>
  `;
};

export default ContactFormAdminEmail;
