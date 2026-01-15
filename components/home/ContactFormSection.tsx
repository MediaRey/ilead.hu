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

  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/send-contact-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          position: formData.note,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          company: '',
          note: '',
        });
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsLoading(false);
    }
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
      <section id="kontakt" className="w-full">
        {/* Top burgundy bar with title */}
        <div className="bg-[#A00230] text-white py-10 text-center">
          <h2 className="text-4xl font-bold">
            Tudjon meg többet a Be Future Ready Executive Programról!
          </h2>
        </div>

        {/* Main content */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 px-6 lg:px-16 gap-16 py-16">

          {/* Left text column */}
          <div className="text-black text-lg leading-relaxed">
            <h3 className="font-bold mb-2">Kérdései vannak a programmal kapcsolatban?</h3>
            <p className="mb-6">
              <span className="text-blue-600 mr-2">→</span>
              Lépjen kapcsolatba velünk, és szívesen nyújtunk részletesebb információkat.
            </p>

            <h3 className="font-bold mb-2">Foglalja le helyét</h3>
            <p className="mb-6">
              <span className="text-blue-600 mr-2">→</span>
              A program legközelebbi kiadására – a kapacitás korlátozott.
            </p>

            <h3 className="font-bold mb-2">Legyen naprakész!</h3>
            <p className="mb-6">
              <span className="text-blue-600 mr-2">→</span>
              Hagyja nálunk elérhetőségeit, és kapjon exkluzív frissítéseket az
              új időpontokról, különleges akciókról és a vezetők képzésének trendjeiről.
            </p>

            <p className="italic">Töltse ki az űrlapot, és hamarosan jelentkezünk!</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">

            <div className="grid grid-cols-2 gap-4">
              <input
                  type="text"
                  name="firstName"
                  placeholder="Keresztnév *"
                  required
                  className="w-full px-4 py-3 border border-black/40 rounded-xl focus:outline-none"
                  value={formData.firstName}
                  onChange={handleChange}
              />

              <input
                  type="text"
                  name="lastName"
                  placeholder="Vezetéknév *"
                  required
                  className="w-full px-4 py-3 border border-black/40 rounded-xl focus:outline-none"
                  value={formData.lastName}
                  onChange={handleChange}
              />
            </div>

            <input
                type="email"
                name="email"
                placeholder="E-mail cím *"
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
                  placeholder="Cég neve *"
                  required
                  className="w-full px-4 py-3 border border-black/40 rounded-xl focus:outline-none"
                  value={formData.company}
                  onChange={handleChange}
              />
            </div>

            <input
                name="note"
                placeholder="Pozíció *"
                required
                className="w-full px-4 py-3 border border-black/40 rounded-xl focus:outline-none"
                value={formData.note}
                onChange={handleChange}
            />

            {/* Success Message */}
            {submitStatus === 'success' && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-xl">
                <p className="font-semibold">Sikeres küldés!</p>
                <p className="text-sm">Köszönjük érdeklődését. Hamarosan felvesszük Önnel a kapcsolatot.</p>
              </div>
            )}

            {/* Error Message */}
            {submitStatus === 'error' && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-xl">
                <p className="font-semibold">Hiba történt!</p>
                <p className="text-sm">Kérjük, próbálja újra később, vagy vegye fel velünk a kapcsolatot közvetlenül.</p>
              </div>
            )}

            <Button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isLoading}
            >
              {isLoading ? 'Küldés...' : 'Küldés'}
            </Button>
          </form>
        </div>
      </section>
  );
}
