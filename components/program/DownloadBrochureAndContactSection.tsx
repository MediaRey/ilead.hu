'use client';

import { useState } from 'react';
import Image from 'next/image';
import Button from '../Button';

export default function DownloadBrochureAndContactSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    position: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
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
              Ez nem minden!
            </h3>
            <p className="leading-relaxed">
              Töltse le a prospektust, és tudjon meg többet a programról, annak fő elveiről és arról, hogy mit jelent felkészült vezetőnek lenni a jövőre.
            </p>
            <Button
              href="/something"
              className="font-semibold px-8 py-3 rounded-md transition-colors inline-block"
            >
              Töltse le a prospektust
            </Button>

            {/* Brochure Images */}
            <div className="relative w-full h-64 mt-8">
              <Image
                src="/Brochure.webp"
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

            <Button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl text-lg"
            >
              Küldés
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
