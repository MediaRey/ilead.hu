import { Lightbulb, Network, Star } from 'lucide-react';

export default function BenefitsSection() {

  // Data for the cards
  const benefits = [
    {
      icon: Lightbulb,
      title: "Spojení vědy a praxe",
      details: [
        "Spolupracujeme s prestižními institucemi, jako je MIT, a přinášíme nejnovější manažerské trendy a strategie.",
        "Všechny poznatky jsou okamžitě aplikovatelné v praxi.",
      ],
    },
    {
      icon: Network,
      title: "Výjimečný networking a byznysové vztahy",
      details: [
        "Staňte se součástí exkluzivní komunity lídrů a top manažerů.",
        "Onboarding session a networking už od prvního dne programu.",
        "Pravidelná setkání absolventů, strategické diskuse a inspirativní eventy.",
      ],
    },
    {
      icon: Star,
      title: "Učíte se od nejlepších",
      details: [
        "Program vedou zkušení lídři a odborníci s reálnou zkušeností z teorie, ale ověřené strategie.",
        "Konkrétní nástroje a strategie, které vám pomohou okamžitě zlepšit řízení týmu a firmy.",
      ],
    },
  ];

  return (
      <section className="py-20 bg-white px-4">
        <div className="max-w-7xl mx-auto">

          {/* Заголовок и подзаголовок центрированы по умолчанию */}
          <h2 className="text-4xl font-bold text-center mb-4 text-black">
            Chcete víc než jen školení?
          </h2>
          <p className="text-center text-lg mb-12 text-gray-700">
            Připojte se k Future Ready Executive Programu a staňte se součástí<br />
            exkluzivní komunity lídrů!
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
