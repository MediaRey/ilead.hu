import ChatSection from '../ChatSection';

export default function MagazineChatbotSection() {
  return (
    <ChatSection
      page="magazine"
      sectionId="magazine-faq"
      title={
        <>
          Kérdezzen az <span className="text-burgundy">MIT Sloan Management Review</span> magazinról
        </>
      }
      subtitle="Használja AI asszisztensünket a magazinnal kapcsolatos kérdéseire"
      welcomeHint="Kérdezzen bármit az MIT Sloan Management Review magazinról"
      suggestions={[
        'Milyen témákkal foglalkozik a magazin?',
        'Mennyibe kerül az előfizetés?',
        'Milyen gyakran jelenik meg?',
      ]}
    />
  );
}
