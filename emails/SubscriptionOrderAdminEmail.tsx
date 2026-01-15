interface SubscriptionOrderAdminEmailProps {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  position: string;
  additionalNote: string;
  companyName: string;
  companyAddress: string;
  cityPostal: string;
  ico: string;
  dic: string;
  icDph: string;
}

export const SubscriptionOrderAdminEmail = ({
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
}: SubscriptionOrderAdminEmailProps): string => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #A00230; font-size: 24px; margin-bottom: 20px;">
          Új előfizetési megrendelés
        </h1>

        <p style="font-size: 16px; margin-bottom: 20px;">
          Új előfizetési megrendelés érkezett az MIT Sloan Management Review magyar kiadásához.
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

          ${position ? `<p style="margin: 10px 0; font-size: 14px;">
            <strong>Pozíció:</strong> ${position}
          </p>` : ''}

          ${additionalNote ? `<p style="margin: 10px 0; font-size: 14px;">
            <strong>További megjegyzés:</strong><br/>
            ${additionalNote}
          </p>` : ''}
        </div>

        ${companyName || companyAddress || cityPostal || ico || dic || icDph ? `
        <div style="background-color: #fff5f0; padding: 20px; border-radius: 8px; margin-bottom: 20px; border: 1px solid #ffd6b3;">
          <h2 style="font-size: 18px; margin-bottom: 15px; color: #333;">Számlázási adatok:</h2>

          ${companyName ? `<p style="margin: 10px 0; font-size: 14px;">
            <strong>Cég neve:</strong> ${companyName}
          </p>` : ''}

          ${companyAddress ? `<p style="margin: 10px 0; font-size: 14px;">
            <strong>Cím:</strong> ${companyAddress}
          </p>` : ''}

          ${cityPostal ? `<p style="margin: 10px 0; font-size: 14px;">
            <strong>Város és irányítószám:</strong> ${cityPostal}
          </p>` : ''}

          ${ico ? `<p style="margin: 10px 0; font-size: 14px;">
            <strong>Adószám (IČO):</strong> ${ico}
          </p>` : ''}

          ${dic ? `<p style="margin: 10px 0; font-size: 14px;">
            <strong>DIČ:</strong> ${dic}
          </p>` : ''}

          ${icDph ? `<p style="margin: 10px 0; font-size: 14px;">
            <strong>IČ DPH:</strong> ${icDph}
          </p>` : ''}
        </div>
        ` : ''}

        <div style="background-color: #e8f4ff; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
          <p style="margin: 0; font-size: 14px; color: #0066cc;">
            <strong>Éves előfizetés:</strong> 1 990 CZK / 80 EUR<br/>
            <strong>Tartalmazza:</strong> 4 nyomtatott és digitális kiadás + exkluzív online tartalom
          </p>
        </div>

        <p style="font-size: 14px; color: #666;">
          Kérjük, mielőbb vegye fel a kapcsolatot az ügyféllel a megrendelés megerősítéséhez.
        </p>
      </body>
    </html>
  `;
};

export default SubscriptionOrderAdminEmail;
