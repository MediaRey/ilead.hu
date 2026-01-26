import Image from 'next/image';
import { Linkedin } from 'lucide-react';

export default function AboutTeamSection() {
  const team = [
    {
      name: "Tomasz Wiatrak",
      title: "Co-founder iLead Institute, Executive Advisor and Investor",
      image: "/team/iatrak.jpg",
      linkedin: "https://www.linkedin.com/in/tomaszwiatrak/",
    },
    {
      name: "Erik Conrad",
      title: "Co-owner at Forbes Slovakia, Forbes Hungary, Forbes Czech Republic, Co-founder MIT SMR Czech Republic, Slovakia, Hungary",
      image: "/team/conrad.jpg",
      linkedin: "https://www.linkedin.com/in/erikconrad/",
    },
    {
      name: "Peter Barecz",
      title: "Co-owner at Forbes Slovakia, Forbes Hungary, Forbes Czech Republic, Co-founder MIT SMR Czech Republic, Slovakia, Hungary",
      image: "/team/barecz.jpg",
      linkedin: "https://www.linkedin.com/in/peterbarecz/",
    },
    {
      name: "Lencsés Gergő",
      title: "iLead Institute - Head of Faculty, a GE gázturbina operációjának korábbi globális vezetője",
      image: "/team/lencses.jpg",
      linkedin: "https://www.linkedin.com/in/lencses",
    },
    {
      name: "Gauder Milán",
      title: "MIT Sloan Management Review - Editor-in-Chief, a Mastercard korábbi globális executive alelnöke",
      image: "/team/gauder.jpg",
      linkedin: "https://www.linkedin.com/in/milangauder",
    },
    {
      name: "Galambos Márton",
      title: "MIT Sloan Management Review - Media Advisor, a Forbes ügyvezető igazgatója",
      image: "/team/galambos.jpg",
      linkedin: "https://www.linkedin.com/in/martongalambos",
    },
    {
      name: "Kurbucz Márk",
      title: "Project and Sales Manager for iLead Institute and MIT Sloan Management Review",
      image: "/team/kurbucz.jpg",
      linkedin: "https://www.linkedin.com/in/m%C3%A1rk-kurbucz",
    },
  ];

  return (
    <section className="py-20 px-4 lg:px-16 bg-navy-blue">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 text-white">
          Ismerje meg azokat, akik az <span className="text-orange">iLead Institute</span> mögött állnak
        </h2>

        {/* Team Grid - Two Rows */}
        <div className="space-y-12">
          {/* First Row - 4 people */}
          <div className="flex flex-wrap justify-center gap-20">
            {team.slice(0, 4).map((member, index) => (
              <div key={index} className="flex flex-col items-center text-center w-full md:w-auto md:max-w-[200px]">
                {/* Circular Photo */}
                <div className="relative w-56 h-56 rounded-full overflow-hidden mb-6 bg-gray-200 border-4 border-orange shadow-2xl">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Name */}
                <h3 className="text-xl font-bold text-white mb-2">
                  {member.name}
                </h3>

                {/* Title */}
                <p className="text-sm text-gray-300 mb-3 leading-relaxed">
                  {member.title}
                </p>

                {/* LinkedIn Link */}
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="text-sm font-medium">LinkedIn</span>
                </a>
              </div>
            ))}
          </div>

          {/* Second Row - 3 people */}
          <div className="flex flex-wrap justify-center gap-20">
            {team.slice(4, 7).map((member, index) => (
              <div key={index + 4} className="flex flex-col items-center text-center w-full md:w-auto md:max-w-[200px]">
                {/* Circular Photo */}
                <div className="relative w-56 h-56 rounded-full overflow-hidden mb-6 bg-gray-200 border-4 border-orange shadow-2xl">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Name */}
                <h3 className="text-xl font-bold text-white mb-2">
                  {member.name}
                </h3>

                {/* Title */}
                <p className="text-sm text-gray-300 mb-3 leading-relaxed">
                  {member.title}
                </p>

                {/* LinkedIn Link */}
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="text-sm font-medium">LinkedIn</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
