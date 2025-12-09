import { Lightbulb, Network, Star } from 'lucide-react';

export default function BenefitsSection() {

  // Data for the cards
  const benefits = [
    {
      icon: Lightbulb,
      title: "A tudomány és a gyakorlat összekapcsolása",
      details: [
        "Együttműködünk rangos intézményekkel, mint az MIT, és hozzuk a legújabb menedzsment trendeket és stratégiákat.",
        "Minden ismeret azonnal alkalmazható a gyakorlatban.",
      ],
    },
    {
      icon: Network,
      title: "Kivételes networking és üzleti kapcsolatok",
      details: [
        "Legyen része a vezetők és top menedzserek exkluzív közösségének.",
        "Onboarding ülés és networking már a program első napjától.",
        "Rendszeres alumni találkozók, stratégiai megbeszélések és inspiráló események.",
      ],
    },
    {
      icon: Star,
      title: "Tanuljon a legjobbaktól",
      details: [
        "A programot tapasztalt vezetők és szakértők vezetik, akik valós tapasztalattal rendelkeznek az elméletből, de bizonyított stratégiákkal.",
        "Konkrét eszközök és stratégiák, amelyek azonnal segítenek javítani a csapat és a vállalat irányítását.",
      ],
    },
  ];

  return (
      <section className="py-20 bg-white px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">

          {/* Заголовок и подзаголовок центрированы по умолчанию */}
          <h2 className="text-4xl font-bold text-center mb-4 text-black">
            Többet szeretne, mint csak képzést?
          </h2>
          <p className="text-center text-lg mb-12 text-gray-700">
            Csatlakozzon a Future Ready Executive Programhoz és legyen része<br />
            a vezetők exkluzív közösségének!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
                <div
                    key={index}
                    className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center" // Добавлен text-center для центрирования всего содержимого карточки
                >
                  {/* Icon Container с центрированием */}
                  <div
                      className={`bg-orange text-white w-14 h-14 rounded-lg flex items-center justify-center mb-6 text-2xl mx-auto`} // <<< Добавлен класс mx-auto
                  >
                    <benefit.icon className="w-7 h-7" />
                  </div>

                  {/* Card Title */}
                  <h3 className="text-xl font-bold mb-4 text-black leading-snug">
                    {benefit.title}
                  </h3>

                  {/* List of Details - Выравнивание текста по центру, но сохранение структуры списка */}
                  <ul className="space-y-2 text-gray-700 text-left inline-block">
                    {benefit.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start">
                          {/* Orange arrow for list marker */}
                          <span className="text-orange mr-2 flex-shrink-0 mt-1">→</span>
                          <span>{detail}</span>
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
