'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import Button from '../Button';

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BrochureModal({ isOpen, onClose }: BrochureModalProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/send-brochure-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');

        // Download brochure file
        const link = document.createElement('a');
        link.href = '/Brochure.pdf';
        link.download = 'Be-Future-Ready-Program-Brochure.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          company: '',
          email: '',
        });

        // Close modal after 2 seconds
        setTimeout(() => {
          onClose();
          setSubmitStatus('idle');
        }, 2000);
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-md lg:max-w-2xl w-full p-8 relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Title */}
        <h3 className="text-2xl font-bold text-navy-blue mb-4">
          Töltse le a programleírást
        </h3>
        <p className="text-gray-600 mb-6">
          Hagyja meg nekünk az e-mail címét, és megkapja a Future Ready programról szóló brosúrát
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* First row - Name fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="Keresztnév *"
              required
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-orange"
              value={formData.firstName}
              onChange={handleChange}
            />

            <input
              type="text"
              name="lastName"
              placeholder="Vezetéknév *"
              required
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-orange"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>

          {/* Second row - Company and Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="company"
              placeholder="Cég neve *"
              required
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-orange"
              value={formData.company}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="E-mail cím *"
              required
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-orange"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          {/* Success Message */}
          {submitStatus === 'success' && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-xl">
              <p className="font-semibold">Sikeres küldés!</p>
              <p className="text-sm">A brosúra letöltése folyamatban van...</p>
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
            className="w-full bg-orange hover:bg-orange/90 text-white py-3 rounded-xl text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isLoading}
          >
            {isLoading ? 'Küldés...' : 'Szeretném megkapni a brosúrát'}
          </Button>
        </form>
      </div>
    </div>
  );
}
