interface ContactFormUserEmailProps {
  firstName: string;
  lastName: string;
}

export const ContactFormUserEmail = ({
  firstName,
  lastName,
}: ContactFormUserEmailProps): string => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #A00230; font-size: 24px; margin-bottom: 20px;">
          Köszönjük érdeklődését!
        </h1>

        <p style="font-size: 16px; margin-bottom: 20px;">
          Kedves ${firstName} ${lastName},
        </p>

        <p style="font-size: 16px; margin-bottom: 20px; line-height: 1.6;">
          Köszönjük, hogy kapcsolatba lépett velünk a <strong>Be Future Ready Executive Program</strong> kapcsán.
        </p>

        <p style="font-size: 16px; margin-bottom: 20px; line-height: 1.6;">
          Megkaptuk az Ön által küldött információkat, és munkatársunk hamarosan felveszi Önnel a kapcsolatot
          a program részleteivel kapcsolatban.
        </p>

        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <p style="font-size: 14px; margin: 0; line-height: 1.6;">
            <strong>Mit várhat tőlünk?</strong><br />
            • Részletes információkat a programról<br />
            • Válaszokat az Ön kérdéseire<br />
            • Segítséget a jelentkezési folyamatban
          </p>
        </div>

        <p style="font-size: 16px; margin-bottom: 20px; line-height: 1.6;">
          Amennyiben azonnali segítségre van szüksége, kérjük, válaszoljon erre az e-mailre,
          vagy hívjon minket közvetlenül.
        </p>

        <p style="font-size: 16px; margin-bottom: 10px;">
          Üdvözlettel,<br />
          <strong>iLead Institute csapata</strong>
        </p>

        <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;" />

        <p style="font-size: 12px; color: #666; line-height: 1.6;">
          Ez egy automatikus üzenet. Kérjük, ne válaszoljon közvetlenül erre az e-mailre.
        </p>
      </body>
    </html>
  `;
};

export default ContactFormUserEmail;
