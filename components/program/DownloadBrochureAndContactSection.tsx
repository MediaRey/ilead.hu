'use client';

import { useState } from 'react';
import Image from 'next/image';
import Button from '../Button';
import BrochureModal from './BrochureModal';

export default function DownloadBrochureAndContactSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    position: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);

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
          position: formData.position,
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
          position: '',
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
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact-form" className="w-full bg-white py-16 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 text-black">
          Tudjon meg többet a Be Future Ready Executive Programról!
        </h2>

        {/* Main content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left - Brochure Download */}
          <div className="text-black text-lg leading-relaxed space-y-6">
            <h3 className="text-3xl lg:text-4xl font-bold text-orange">
              Ez még nem minden!
            </h3>
            <p className="leading-relaxed">
              Töltse le a program prospektusát, és ismerje meg a Be Future Ready Executive Program szemléletét, fókuszterületeit és vezetői megközelítését.
            </p>
            <Button
              onClick={() => setIsBrochureModalOpen(true)}
              className="font-semibold px-8 py-3 rounded-md transition-colors inline-block"
            >
              Töltse le a programleírást
            </Button>

            {/* Brochure Images */}
            <div className="relative w-full h-64 mt-8">
              <Image
                src="/brochure-preview.png"
                alt="Be Future Ready Executive Program brožury"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Right - Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="Keresztnév *"
                required
                className="w-full px-4 py-3 border-2 border-black rounded-xl focus:outline-none focus:border-orange"
                value={formData.firstName}
                onChange={handleChange}
              />

              <input
                type="text"
                name="lastName"
                placeholder="Vezetéknév *"
                required
                className="w-full px-4 py-3 border-2 border-black rounded-xl focus:outline-none focus:border-orange"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="E-mail cím *"
              required
              className="w-full px-4 py-3 border-2 border-black rounded-xl focus:outline-none focus:border-orange"
              value={formData.email}
              onChange={handleChange}
            />

            <div className="grid grid-cols-2 gap-4">
              <input
                type="tel"
                name="phone"
                placeholder="Telefon"
                className="w-full px-4 py-3 border-2 border-black rounded-xl focus:outline-none focus:border-orange"
                value={formData.phone}
                onChange={handleChange}
              />

              <input
                type="text"
                name="company"
                placeholder="Cég neve *"
                required
                className="w-full px-4 py-3 border-2 border-black rounded-xl focus:outline-none focus:border-orange"
                value={formData.company}
                onChange={handleChange}
              />
            </div>

            <input
              type="text"
              name="position"
              placeholder="Pozíció *"
              required
              className="w-full px-4 py-3 border-2 border-black rounded-xl focus:outline-none focus:border-orange"
              value={formData.position}
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
      </div>

      {/* Brochure Download Modal */}
      <BrochureModal
        isOpen={isBrochureModalOpen}
        onClose={() => setIsBrochureModalOpen(false)}
      />
    </section>
  );
}
