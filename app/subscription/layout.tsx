import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Magazin Előfizetés',
  description: 'Iratkozz fel az MIT Sloan Management Review magazinra. Negyedévente megjelenő vezetői szaklap elemzésekkel, esettanulmányokkal és szakértői insightokkal. Éves előfizetés: 18 800 HUF.',
  keywords: ['MIT Sloan Management Review', 'magazin előfizetés', 'vezetői magazin', 'menedzsment folyóirat', 'üzleti szaklap', 'innováció', 'stratégia', 'digitális átalakulás'],
  openGraph: {
    title: 'Magazin Előfizetés - iLead Institute',
    description: 'Iratkozz fel az MIT Sloan Management Review magazinra. Negyedévente megjelenő vezetői szaklap.',
    url: 'https://ilead.hu/subscription',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Magazin Előfizetés - iLead Institute',
    description: 'Iratkozz fel az MIT Sloan Management Review magazinra.',
  },
  alternates: {
    canonical: 'https://ilead.hu/subscription',
  },
};

export default function SubscriptionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
