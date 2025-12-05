'use client';

import { useState } from 'react';
import Button from '../Button';

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    note: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
      <section className="w-full">
        {/* Top burgundy bar with title */}
        <div className="bg-[#A00230] text-white py-10 text-center">
          <h2 className="text-4xl font-bold">
            Zjistěte více o Future Ready Executive Programu!
          </h2>
        </div>

        {/* Main content */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 px-6 lg:px-0 gap-16 py-16">

          {/* Left text column */}
          <div className="text-black text-lg leading-relaxed">
            <h3 className="font-bold mb-2">Máte dotazy ohledně programu?</h3>
            <p className="mb-6">
              <span className="text-blue-600 mr-2">→</span>
              Kontaktujte nás a rádi vám poskytneme podrobnější informace.
            </p>

            <h3 className="font-bold mb-2">Rezervujte si své místo</h3>
            <p className="mb-6">
              <span className="text-blue-600 mr-2">→</span>
              Na nejbližší edici programu – kapacita je omezená.
            </p>

            <h3 className="font-bold mb-2">Buďte v obraze!</h3>
            <p className="mb-6">
              <span className="text-blue-600 mr-2">→</span>
              Nechte nám své kontaktní údaje a získejte exkluzivní aktualizace o
              nových termínech, speciálních akcích a trendech ve vzdělávání lídrů.
            </p>

            <p className="italic">Vyplňte formulář a my se vám brzy ozveme!</p>
          </div>

          {/* Form – no background, soft borders like on screenshot */}
          <form onSubmit={handleSubmit} className="space-y-4">

            <div className="grid grid-cols-2 gap-4">
              <input
                  type="text"
                  name="firstName"
                  placeholder="Jméno *"
                  required
                  className="w-full px-4 py-3 border border-black/40 rounded-xl focus:outline-none"
                  value={formData.firstName}
                  onChange={handleChange}
              />

              <input
                  type="text"
                  name="lastName"
                  placeholder="Příjmení *"
                  required
                  className="w-full px-4 py-3 border border-black/40 rounded-xl focus:outline-none"
                  value={formData.lastName}
                  onChange={handleChange}
              />
            </div>

            <input
                type="email"
                name="email"
                placeholder="E-mailová adresa *"
                required
                className="w-full px-4 py-3 border border-black/40 rounded-xl focus:outline-none"
                value={formData.email}
                onChange={handleChange}
            />

            <div className="grid grid-cols-2 gap-4">
              <input
                  type="tel"
                  name="phone"
                  placeholder="Telefon"
                  className="w-full px-4 py-3 border border-black/40 rounded-xl focus:outline-none"
                  value={formData.phone}
                  onChange={handleChange}
              />

              <input
                  type="text"
                  name="company"
                  placeholder="Název firmy *"
                  required
                  className="w-full px-4 py-3 border border-black/40 rounded-xl focus:outline-none"
                  value={formData.company}
                  onChange={handleChange}
              />
            </div>

            <input
                name="note"
                placeholder="Pozice *"
                required
                className="w-full px-4 py-3 border border-black/40 rounded-xl focus:outline-none"
                value={formData.note}
                onChange={handleChange}
            />

            <Button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl text-lg"
            >
              Odeslat
            </Button>
          </form>
        </div>
      </section>
  );
}
