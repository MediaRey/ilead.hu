import { Lightbulb, Network, Star } from 'lucide-react';

export default function BenefitsSection() {

  // Data for the cards
  const benefits = [
    {
      icon: Lightbulb,
      title: "Tudás, ami működik a gyakorlatban",
      details: [
        "A program a <strong>MIT gondolkodásából inspirálódva</strong> és a legfrissebb nemzetközi menedzsmenttrendek mentén épül fel.",
        "A megszerzett tudás nem elméleti: <strong>azonnal alkalmazható</strong> a mindennapi vezetői döntésekben.",
      ],
    },
    {
      icon: Network,
      title: "Valódi kapcsolatok, valódi értékkel",
      details: [
        "Csatlakozzon felsővezetők és döntéshozók <strong>gondosan válogatott közösségéhez</strong>.",
        "Strukturált onboarding és networking már a program elejétől.",
        "Alumni találkozók, stratégiai beszélgetések és inspiráló szakmai események.",
      ],
    },
    {
      icon: Star,
      title: "Tanulás a legjobbaktól",
      details: [
        "A programot <strong>tapasztalt üzleti vezetők és elismert szakértők</strong> vezetik.",
        "Nem elméleti modellek, hanem <strong>valós vezetői döntések és kipróbált stratégiák</strong> állnak a fókuszban.",
      ],
    },
  ];

  return (
      <section className="py-20 bg-white px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">

          {/* Title and subtitle */}
          <h2 className="text-4xl font-bold text-center mb-4 text-black">
            Többet szeretne, mint egy képzést?
          </h2>
          <p className="text-center text-lg mb-12 text-gray-700">
            Csatlakozzon a <strong>Be Future Ready Executive Programhoz</strong>, és legyen része egy <br />
            gondolkodó, előretekintő vezetői közösségnek.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
                <div
                    key={index}
                    className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center"
                >
                  {/* Icon Container */}
                  <div
                      className={`bg-orange text-white w-14 h-14 rounded-lg flex items-center justify-center mb-6 text-2xl mx-auto`}
                  >
                    <benefit.icon className="w-7 h-7" />
                  </div>

                  {/* Card Title */}
                  <h3 className="text-xl font-bold mb-4 text-black leading-snug">
                    {benefit.title}
                  </h3>

                  {/* List of Details  */}
                  <ul className="space-y-2 text-gray-700 text-left inline-block">
                    {benefit.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start">
                          {/* Orange arrow for list marker */}
                          <span className="text-orange mr-2 flex-shrink-0 mt-1">→</span>
                          <span dangerouslySetInnerHTML={{ __html: detail }} />
                        </li>
                    ))}
                  </ul>
                </div>
            ))}
          </div>
        </div>
      </section>
  );
}
