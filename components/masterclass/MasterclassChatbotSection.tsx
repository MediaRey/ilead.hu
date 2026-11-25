import ChatSection from '../ChatSection';

export default function MasterclassChatbotSection() {
  return (
    <ChatSection
      page="masterclass"
      sectionId="masterclass-faq"
      title={
        <>
          Kérdezzen a <span className="text-burgundy">My Winning Strategy with AI</span> masterclassról
        </>
      }
      subtitle="Használja AI asszisztensünket, ha kérdése van a masterclassról"
      welcomeHint="Kérdezzen bármit a My Winning Strategy with AI masterclassról"
      suggestions={[
        'Kinek szól a masterclass?',
        'Mennyibe kerül a részvétel?',
        'Mit visz haza a résztvevő?',
        'Mit jelent az 50%-os jóváírás?',
      ]}
    />
  );
}
