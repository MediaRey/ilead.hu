'use client';

import { useState } from 'react';
import Button from '../Button';

export default function SubscriptionOrderForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    position: '',
    additionalNote: '',
    companyName: '',
    companyAddress: '',
    cityPostal: '',
    ico: '',
    dic: '',
    icDph: '',
    gdprConsent: false,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.gdprConsent) {
      alert('Kérjük, fogadja el a személyes adatok kezelését!');
      return;
    }

    setIsLoading(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/send-subscription-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          position: '',
          additionalNote: '',
          companyName: '',
          companyAddress: '',
          cityPostal: '',
          ico: '',
          dic: '',
          icDph: '',
          gdprConsent: false,
        });
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
    const target = e.target as HTMLInputElement;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <section className="w-full bg-white py-16 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-4 text-black">
          Érdekli az előfizetés?
        </h2>
        <p className="text-center text-lg mb-16 text-gray-700">
          Adja meg itt az adatait, és munkatársunk hamarosan felveszi Önnel a kapcsolatot további információkkal vagy a megrendelés megerősítésével.
        </p>

        {/* Main content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left - Subscription Details */}
          <div className="text-black text-lg leading-relaxed">
            <h3 className="text-2xl font-bold mb-4">
              Éves előfizetés – támogatás a jobb vezetői döntésekhez
            </h3>

            <p className="text-3xl font-bold text-orange mb-6">
              Ár: 18.800 Ft / év
            </p>

            <h4 className="text-xl font-bold mb-4">Az előfizetés tartalma:</h4>

            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-orange mr-3 mt-1">→</span>
                <span><strong>Évi 4 lapszám</strong> nyomtatott formában</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange mr-3 mt-1">→</span>
                <span><strong>Hozzáférés exkluzív cikkekhez, elemzésekhez és esettanulmányokhoz</strong></span>
              </li>
              <li className="flex items-start">
                <span className="text-orange mr-3 mt-1">→</span>
                <span><strong>Szakértői nézőpontok</strong> az üzleti, technológiai és menedzsmenttrendekről</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange mr-3 mt-1">→</span>
                <span><strong>Gyakorlati vezetői know-how</strong> nemzetközi és hazai döntéshozóktól</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange mr-3 mt-1">→</span>
                <span><strong>Inspiráció és gondolkodási keret</strong> stratégiai döntésekhez és személyes fejlődéshez</span>
              </li>
            </ul>
          </div>

          {/* Right - Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="Keresztnév *"
                required
                className="w-full px-4 py-3 border border-black/40 rounded-xl focus:outline-none focus:border-orange"
                value={formData.firstName}
                onChange={handleChange}
              />

              <input
                type="text"
                name="lastName"
                placeholder="Vezetéknév *"
                required
                className="w-full px-4 py-3 border border-black/40 rounded-xl focus:outline-none focus:border-orange"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="E-mail cím *"
              required
              className="w-full px-4 py-3 border border-black/40 rounded-xl focus:outline-none focus:border-orange"
              value={formData.email}
              onChange={handleChange}
            />

            <div className="grid grid-cols-2 gap-4">
              <input
                type="tel"
                name="phone"
                placeholder="Telefon"
                className="w-full px-4 py-3 border border-black/40 rounded-xl focus:outline-none focus:border-orange"
                value={formData.phone}
                onChange={handleChange}
              />

              <input
                type="text"
                name="position"
                placeholder="Pozíció a cégnél"
                className="w-full px-4 py-3 border border-black/40 rounded-xl focus:outline-none focus:border-orange"
                value={formData.position}
                onChange={handleChange}
              />
            </div>

            <textarea
              name="additionalNote"
              placeholder="Van kiegészítő kérdése vagy megjegyzése?"
              rows={4}
              className="w-full px-4 py-3 border border-black/40 rounded-xl focus:outline-none focus:border-orange resize-none"
              value={formData.additionalNote}
              onChange={handleChange}
            />

            {/* Billing Information */}
            <h4 className="text-lg font-bold mt-6 mb-2">Számlázási adatok</h4>

            <input
              type="text"
              name="companyName"
              placeholder="Cég neve"
              className="w-full px-4 py-3 border border-black/40 rounded-xl focus:outline-none focus:border-orange"
              value={formData.companyName}
              onChange={handleChange}
            />

            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="companyAddress"
                placeholder="Utca és házszám *"
                required
                className="w-full px-4 py-3 border border-black/40 rounded-xl focus:outline-none focus:border-orange"
                value={formData.companyAddress}
                onChange={handleChange}
              />

              <input
                type="text"
                name="cityPostal"
                placeholder="Város és irányítószám *"
                required
                className="w-full px-4 py-3 border border-black/40 rounded-xl focus:outline-none focus:border-orange"
                value={formData.cityPostal}
                onChange={handleChange}
              />
            </div>

            <div className="grid grid-cols-3 gap-4">
              <input
                type="text"
                name="ico"
                placeholder="Adószám"
                className="w-full px-4 py-3 border border-black/40 rounded-xl focus:outline-none focus:border-orange"
                value={formData.ico}
                onChange={handleChange}
              />

              <input
                type="text"
                name="dic"
                placeholder="Adóazonosító jel"
                className="w-full px-4 py-3 border border-black/40 rounded-xl focus:outline-none focus:border-orange"
                value={formData.dic}
                onChange={handleChange}
              />

              <input
                type="text"
                name="icDph"
                placeholder="Közösségi adószám"
                className="w-full px-4 py-3 border border-black/40 rounded-xl focus:outline-none focus:border-orange"
                value={formData.icDph}
                onChange={handleChange}
              />
            </div>

            {/* GDPR Checkbox */}
            <div className="flex items-start gap-3 mt-4">
              <input
                type="checkbox"
                name="gdprConsent"
                id="gdprConsent"
                required
                className="mt-1 w-5 h-5 rounded border-black/40 text-orange focus:ring-orange"
                checked={formData.gdprConsent}
                onChange={handleChange}
              />
              <label htmlFor="gdprConsent" className="text-sm text-gray-700">
                Hozzájárulok személyes adataim kezeléséhez.
              </label>
            </div>

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
                <p className="text-sm">Kérjük, próbálja újra később.</p>
              </div>
            )}

            <Button
              type="submit"
              className="w-full bg-orange hover:bg-orange/90 text-white py-3 rounded-xl text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isLoading}
            >
              {isLoading ? 'Küldés...' : 'Küldés'}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
