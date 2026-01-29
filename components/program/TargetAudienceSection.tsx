import { TrendingUp, BarChart3, Users, Briefcase } from 'lucide-react';

export default function TargetAudienceSection() {
  // Data for the cards
  const audiences = [
    {
      icon: TrendingUp,
      title: "Felsővezetők és vállalati döntéshozók",
      description: "Olyan vezetőknek, akik stratégiai szinten gondolkodnak, és <strong>előrelátóan szeretnék irányítani</strong> szervezetük jövőjét.",
    },
    {
      icon: BarChart3,
      title: "Ambiciózus vezetők szintlépés előtt",
      description: "Azoknak, akik <strong>felsővezetői szerepre készülnek</strong>, és felgyorsítanák szakmai fejlődésüket valós üzleti helyzeteken keresztül.",
    },
    {
      icon: Users,
      title: "Tulajdonosok és vállalkozók",
      description: "Vállalkozások alapítónak és vezetőinek, akik <strong>skálázni, erősíteni és hosszú távon versenyképessé</strong> szeretnék tenni cégüket.",
    },
    {
      icon: Briefcase,
      title: "Kulcspozícióban dolgozó vezetők",
      description: "Olyan menedzsereknek, akik <strong>gyakorlatközpontú, rugalmas fejlődési formát</strong> keresnek a dinamikusan változó üzleti környezetben.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-4xl font-bold text-center mb-12 text-black">
          <span className="text-burgundy">Kinek szól</span> a program?
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center"
            >
              {/* Icon Container */}
              <div className="bg-orange text-white w-14 h-14 rounded-lg flex items-center justify-center mb-6 text-2xl mx-auto">
                <audience.icon className="w-7 h-7" />
              </div>

              {/* Card Title */}
              <h3 className="text-xl font-bold mb-4 text-black leading-snug">
                {audience.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: audience.description }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
