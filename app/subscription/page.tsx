'use client';

import { useState } from 'react';
import Button from '@/components/Button';

export default function SubscriptionPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    subscriptionType: 'digital'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscription form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main>
      <section className="bg-navy-blue text-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl font-bold mb-8">Předplatné MIT Sloan Management Review</h1>
          <p className="text-2xl leading-relaxed">
            Získejte přístup k exkluzivnímu obsahu o managementu, inovacích a leadershipu
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            <div className="bg-gradient-to-br from-yellow-500 to-orange-600 rounded-lg p-8 h-[500px] flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-9xl opacity-20">🐅</div>
              </div>
              <div className="relative z-10 bg-white p-8 rounded-lg shadow-2xl max-w-md">
                <div className="mb-6">
                  <h3 className="text-3xl font-bold text-black mb-2">
                    MIT Sloan
                  </h3>
                  <p className="text-lg text-black font-semibold">Management Review</p>
                </div>
                <h4 className="text-2xl font-bold text-black mb-4">
                  Jak zkrotit AI
                </h4>
                <p className="text-sm text-gray-700 mb-6">
                  UMĚLÁ INTELIGENCE A BUDOUCNOST PRÁCE
                </p>
                <div className="space-y-3">
                  <h5 className="text-sm font-bold text-black">Manažerské shrnutí</h5>
                  <div className="space-y-2">
                    <div className="h-16 bg-gray-100 rounded p-2 text-xs text-gray-600">
                      Nové otázky<br/>
                      manažerů o umělé<br/>
                      inteligenci...
                    </div>
                    <div className="h-16 bg-gray-100 rounded p-2 text-xs text-gray-600">
                      Strategické nástroje<br/>
                      pro efektivní využití<br/>
                      AI...
                    </div>
                    <div className="h-16 bg-gray-100 rounded p-2 text-xs text-gray-600">
                      Umělá inteligence<br/>
                      versus člověk v nové<br/>
                      práci...
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Proč MIT Sloan Management Review?</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-orange text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-xl">
                    📚
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Exkluzivní obsah</h3>
                    <p className="text-gray-700">
                      Přístup k nejnovějším článkům a výzkumům z prestižního MIT Sloan,
                      které nejsou k dispozici jinde.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-orange text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-xl">
                    🌍
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Globální perspektiva</h3>
                    <p className="text-gray-700">
                      Poznatky od předních světových expertů a case studies z největších
                      světových korporací.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-orange text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-xl">
                    💼
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Praktická aplikace</h3>
                    <p className="text-gray-700">
                      Všechny články jsou zaměřeny na praktické využití v reálném
                      business prostředí.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-orange text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-xl">
                    🎯
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Aktuální trendy</h3>
                    <p className="text-gray-700">
                      Témata zahrnují AI, digitální transformaci, leadership, inovace
                      a strategické řízení.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-12 rounded-lg mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Typy předplatného</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <h3 className="text-2xl font-bold mb-4">Digitální</h3>
                <div className="text-4xl font-bold text-orange mb-4">
                  <div className="text-sm text-gray-600 mb-2">od</div>
                  2 990 Kč
                </div>
                <p className="text-gray-600 mb-6">ročně</p>
                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="text-orange mr-2">✓</span>
                    <span>Online přístup ke všem článkům</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange mr-2">✓</span>
                    <span>Měsíční newsletter</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange mr-2">✓</span>
                    <span>Archiv všech vydání</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md text-center border-4 border-orange relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange text-white px-4 py-1 rounded-full text-sm font-bold">
                  Nejoblíbenější
                </div>
                <h3 className="text-2xl font-bold mb-4">Premium</h3>
                <div className="text-4xl font-bold text-orange mb-4">
                  <div className="text-sm text-gray-600 mb-2">od</div>
                  4 990 Kč
                </div>
                <p className="text-gray-600 mb-6">ročně</p>
                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="text-orange mr-2">✓</span>
                    <span>Vše z Digitálního balíčku</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange mr-2">✓</span>
                    <span>Tištěný magazín</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange mr-2">✓</span>
                    <span>Exkluzivní webináře</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange mr-2">✓</span>
                    <span>Prioritní podpora</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <h3 className="text-2xl font-bold mb-4">Firemní</h3>
                <div className="text-4xl font-bold text-orange mb-4">
                  <div className="text-sm text-gray-600 mb-2">od</div>
                  Na míru
                </div>
                <p className="text-gray-600 mb-6">pro týmy</p>
                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="text-orange mr-2">✓</span>
                    <span>Vše z Premium balíčku</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange mr-2">✓</span>
                    <span>Neomezený počet uživatelů</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange mr-2">✓</span>
                    <span>Firemní školení</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange mr-2">✓</span>
                    <span>Konzultace s experty</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white p-12 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center">Zaregistrujte se nyní</h2>
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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

              <div className="mb-6">
                <input
                  type="email"
                  name="email"
                  placeholder="E-mailová adresa *"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-orange"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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
                  placeholder="Název firmy"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-orange"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-6">
                <select
                  name="subscriptionType"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-orange"
                  value={formData.subscriptionType}
                  onChange={handleChange}
                >
                  <option value="digital">Digitální předplatné</option>
                  <option value="premium">Premium předplatné</option>
                  <option value="corporate">Firemní předplatné</option>
                </select>
              </div>

              <Button type="submit" className="w-full text-lg">
                Zaregistrovat se
              </Button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
