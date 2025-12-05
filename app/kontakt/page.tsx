'use client';

import { useState } from 'react';
import Button from '@/components/Button';

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    position: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main>
      <section className="bg-navy-blue text-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl font-bold mb-8">Kontakt</h1>
          <p className="text-2xl leading-relaxed">
            Máte dotazy nebo se chcete zapojit do našich programů?<br />
            Jsme tu pro vás!
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-8">Kontaktní informace</h2>

              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="bg-orange text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    📍
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Adresa</h3>
                    <p className="text-gray-700">
                      iLead Institute<br />
                      Praha, Česká republika
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-orange text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    📧
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">E-mail</h3>
                    <a href="mailto:info@ilead.cz" className="text-orange hover:underline">
                      info@ilead.cz
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-orange text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    📞
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Telefon</h3>
                    <a href="tel:+420123456789" className="text-orange hover:underline">
                      +420 123 456 789
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6">Důvody, proč nás kontaktovat:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-orange mr-2">→</span>
                    <span><strong>Máte dotazy ohledně programu?</strong><br />
                    Kontaktujte nás a rádi vám poskytneme podrobnější informace.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange mr-2">→</span>
                    <span><strong>Rezervujte si své místo</strong><br />
                    Na nejbližší edici programu – kapacita je omezená.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange mr-2">→</span>
                    <span><strong>Buďte v obraze!</strong><br />
                    Nechte nám své kontaktní údaje a získejte exkluzivní aktualizace o nových termínech, speciálních akcích a trendech ve vzdělávání lídrů.</span>
                  </li>
                </ul>
                <p className="mt-6 italic text-gray-700">
                  Vyplňte formulář a my se vám brzy ozveme!
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold mb-8">Napište nám</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Jméno *"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-orange"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Příjmení *"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-orange"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>

                <input
                  type="email"
                  name="email"
                  placeholder="E-mailová adresa *"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-orange"
                  value={formData.email}
                  onChange={handleChange}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Telefon"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-orange"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="company"
                    placeholder="Název firmy *"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-orange"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>

                <input
                  type="text"
                  name="position"
                  placeholder="Pozice *"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-orange"
                  value={formData.position}
                  onChange={handleChange}
                />

                <textarea
                  name="message"
                  placeholder="Vaše zpráva"
                  rows={6}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-orange resize-none"
                  value={formData.message}
                  onChange={handleChange}
                />

                <Button type="submit" className="w-full text-lg">
                  Odeslat
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Připojte se k naší komunitě</h2>
          <p className="text-xl text-gray-700 mb-8">
            Sledujte nás na sociálních sítích a zůstaňte v kontaktu s nejnovějšími trendy<br />
            v oblasti leadershipu a managementu.
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="#"
              className="bg-burgundy text-white rounded-full w-16 h-16 flex items-center justify-center hover:bg-orange transition-colors text-2xl"
              aria-label="Email"
            >
              📧
            </a>
            <a
              href="#"
              className="bg-burgundy text-white rounded-full w-16 h-16 flex items-center justify-center hover:bg-orange transition-colors text-2xl"
              aria-label="LinkedIn"
            >
              💼
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
