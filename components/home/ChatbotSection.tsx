import ChatSection from '../ChatSection';

export default function ChatbotSection() {
  return (
    <ChatSection
      page="program"
      sectionId="faq"
      title={
        <>
          Kérdezzen a <span className="text-burgundy">Be Future Ready Executive</span> programról
        </>
      }
      subtitle="Használja AI asszisztensünket a programmal kapcsolatos kérdéseire"
      welcomeHint="Kérdezzen bármit a Be Future Ready Executive programról"
      suggestions={['Meddig tart a program?', 'Mennyibe kerül a részvétel?', 'Kinek szól a program?']}
    />
  );
}
