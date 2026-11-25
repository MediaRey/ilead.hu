import { programs, type ProgramKey } from '@/data/programs';

interface BrochureAdminEmailProps {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  program?: ProgramKey;
}

export const BrochureAdminEmail = ({
  firstName,
  lastName,
  email,
  company,
  program = 'bfr',
}: BrochureAdminEmailProps): string => {
  const { name: programName, docLabel, docLabelAccusative } = programs[program];
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #A00230; font-size: 24px; margin-bottom: 20px;">
          Új ${docLabel} letöltés
        </h1>

        <p style="font-size: 16px; margin-bottom: 20px;">
          Valaki letöltötte a ${programName} ${docLabelAccusative}.
        </p>

        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h2 style="font-size: 18px; margin-bottom: 15px; color: #333;">Érdeklődő adatai:</h2>

          <p style="margin: 10px 0; font-size: 14px;">
            <strong>Név:</strong> ${firstName} ${lastName}
          </p>

          <p style="margin: 10px 0; font-size: 14px;">
            <strong>E-mail cím:</strong> <a href="mailto:${email}" style="color: #0066cc;">${email}</a>
          </p>

          <p style="margin: 10px 0; font-size: 14px;">
            <strong>Cég neve:</strong> ${company}
          </p>
        </div>

        <p style="font-size: 14px; color: #666;">
          Ez az érdeklődő letöltötte a program ${docLabelAccusative}. Érdemes lehet felvenni vele a kapcsolatot.
        </p>
      </body>
    </html>
  `;
};

export default BrochureAdminEmail;
