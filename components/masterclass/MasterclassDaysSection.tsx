const days = [
  {
    label: '1. nap',
    title: 'Hol írja át az AI a játékszabályokat?',
    items: [
      'A fő probléma és a központi akadály megfogalmazása: egymondatos diagnózis',
      'A vállalat működésének felbontása kulcstevékenységekre: mit tesz olcsóbbá, vált ki vagy tesz értékesebbé az AI?',
      'Versenyszimuláció AI-jal: hogyan támadhatna egy meglévő versenytárs vagy egy új piaci szereplő?',
    ],
  },
  {
    label: '2. nap',
    title: 'A döntéstől az első lépésig',
    items: [
      'Vezérelv: mit választunk, és mit zárunk ki',
      'AI-ötletek értékelése: melyik érinti a központi akadályt, és mekkora szervezeti ellenállásba ütközik',
      'A legolcsóbb bukás: a legkisebb próba, a tét, a siker jele és az elvetés dátuma',
      'Mit hagyunk abba: mit állítunk le, hogy legyen kapacitás az új kezdeményezésekre',
    ],
  },
];

// "Heading: rest of the sentence" -> bold heading + rest, text stays exactly as written
function splitItem(item: string) {
  const index = item.indexOf(': ');
  return index === -1
    ? { lead: '', rest: item }
    : { lead: item.slice(0, index + 1), rest: item.slice(index + 2) };
}

export default function MasterclassDaysSection() {
  return (
    <section className="py-20 bg-gray-50 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-4xl font-bold text-center mb-4 text-black">
          A masterclass <span className="text-orange">programja</span>
        </h2>
        <p className="text-center text-lg mb-12 text-gray-700 max-w-4xl mx-auto">
          A résztvevők végig a saját vállalatukon dolgoznak, AI-eszközökkel, rövid szakértői felvezetésekkel és valós vállalati esetekkel.
        </p>

        {/* Two day cards: navy header with the day's theme, agenda rows below */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {days.map((day) => (
            <article
              key={day.label}
              className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden"
            >
              <header className="bg-navy-blue px-8 py-7">
                <h3 className="text-2xl font-bold text-white leading-snug">
                  <span className="text-orange">{day.label}</span>
                  <br />
                  {day.title}
                </h3>
              </header>

              <ul className="divide-y divide-gray-200 px-8">
                {day.items.map((item) => {
                  const { lead, rest } = splitItem(item);
                  return (
                    <li key={item} className="py-5 text-base lg:text-lg leading-relaxed text-gray-700">
                      {lead && <strong className="text-black">{lead} </strong>}
                      {rest}
                    </li>
                  );
                })}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
