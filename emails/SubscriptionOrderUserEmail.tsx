interface SubscriptionOrderUserEmailProps {
  firstName: string;
  lastName: string;
}

export const SubscriptionOrderUserEmail = ({
  firstName,
  lastName,
}: SubscriptionOrderUserEmailProps): string => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #A00230; font-size: 24px; margin-bottom: 20px;">
          Köszönjük előfizetési megrendelését!
        </h1>

        <p style="font-size: 16px; margin-bottom: 20px;">
          Kedves ${firstName} ${lastName},
        </p>

        <p style="font-size: 16px; margin-bottom: 20px; line-height: 1.6;">
          Köszönjük, hogy érdeklődik az <strong>MIT Sloan Management Review</strong> magyar kiadásának előfizetése iránt!
        </p>

        <p style="font-size: 16px; margin-bottom: 20px; line-height: 1.6;">
          Megkaptuk az Ön által küldött információkat, és munkatársunk hamarosan felveszi Önnel a kapcsolatot
          a megrendelés véglegesítéséhez és a fizetési lehetőségek megbeszéléséhez.
        </p>

        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h3 style="font-size: 18px; margin-bottom: 15px; color: #333;">
            Az éves előfizetés tartalma:
          </h3>

          <ul style="font-size: 14px; line-height: 1.8; color: #555; margin: 0; padding-left: 20px;">
            <li>4 kiadás évente (nyomtatott és digitális formában)</li>
            <li>Hozzáférés exkluzív online tartalmakhoz</li>
            <li>Szakértői cikkek és esettanulmányok</li>
            <li>Világszínvonalú menedzsment know-how</li>
            <li>Inspiráció a stratégiai döntéshozatalhoz</li>
          </ul>
        </div>

        <div style="background-color: #e8f4ff; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
          <p style="margin: 0; font-size: 14px; color: #0066cc;">
            <strong>Ár:</strong> 1 990 CZK / 80 EUR évente
          </p>
        </div>

        <p style="font-size: 16px; margin-bottom: 20px; line-height: 1.6;">
          Amennyiben azonnali segítségre van szüksége, vagy kérdése merült fel,
          kérjük, válaszoljon erre az e-mailre, vagy hívjon minket közvetlenül.
        </p>

        <p style="font-size: 16px; margin-bottom: 10px;">
          Üdvözlettel,<br />
          <strong>iLead Institute csapata</strong>
        </p>

        <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;" />

        <p style="font-size: 12px; color: #666; line-height: 1.6;">
          Ez egy automatikus üzenet. Munkatársunk hamarosan felveszi Önnel a kapcsolatot.
        </p>
      </body>
    </html>
  `;
};

export default SubscriptionOrderUserEmail;
