interface BrochureUserEmailProps {
  firstName: string;
  lastName: string;
}

export const BrochureUserEmail = ({
  firstName,
  lastName,
}: BrochureUserEmailProps): string => {
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
          Köszönjük, hogy letöltötte a <strong>Be Future Ready Executive Program</strong> brosúráját.
        </p>

        <p style="font-size: 16px; margin-bottom: 20px; line-height: 1.6;">
          Reméljük, hogy a brosúra hasznos információkat tartalmaz az Ön számára.
          Amennyiben bármilyen kérdése merül fel a programmal kapcsolatban,
          munkatársunk szívesen áll rendelkezésére.
        </p>

        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <p style="font-size: 14px; margin: 0; line-height: 1.6;">
            <strong>A Be Future Ready Executive Program</strong><br />
            • 10 hónapos gyakorlati vezetői képzés MIT alapokon<br />
            • Stratégiai menedzsment, AI, innováció<br />
            • People management és leadership<br />
            • Tapasztalt oktatók és valós esettanulmányok
          </p>
        </div>

        <p style="font-size: 16px; margin-bottom: 20px; line-height: 1.6;">
          Amennyiben további információra van szüksége vagy szeretne jelentkezni a programra,
          kérjük, válaszoljon erre az e-mailre vagy vegye fel velünk a kapcsolatot közvetlenül.
        </p>

        <p style="font-size: 16px; margin-bottom: 10px;">
          Üdvözlettel,<br />
          <strong>iLead Institute csapata</strong>
        </p>

        <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;" />

        <p style="font-size: 12px; color: #666; line-height: 1.6;">
          iLead Institute | A vezetésfejlesztés kiválósági központja<br />
          Budapest, Magyarország
        </p>
      </body>
    </html>
  `;
};

export default BrochureUserEmail;
