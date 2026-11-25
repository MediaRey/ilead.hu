'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Linkedin } from 'lucide-react';
import { sortedInstructors } from '@/data/instructors';

export default function InstructorsSection() {
  const [expandedCards, setExpandedCards] = useState<string[]>([]);
  const [showAll, setShowAll] = useState(false);

  const toggleCard = (name: string) => {
    setExpandedCards(prev =>
      prev.includes(name)
        ? prev.filter(i => i !== name)
        : [...prev, name]
    );
  };

  const handleToggleShowAll = () => {
    setShowAll(!showAll);
  };


  return (
    <section className="py-20 bg-white px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-4xl font-bold text-center mb-4 text-black">
          A gyakorlat mesterei – a program előadói
        </h2>
        <p className="text-center text-lg mb-12 text-gray-700 max-w-4xl mx-auto">
          Olyan gyakorló vezetők és döntéshozók, akik nem csak elméleti modelleket, hanem saját tapasztalataikat is behozzák a közös gondolkodásba.
        </p>

        {/* Instructors Grid - Simple row-based grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedInstructors.slice(0, showAll ? sortedInstructors.length : 6).map((instructor, index) => (
            <div
              key={instructor.name}
              className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow"
            >
              {/* Header with circular photo, name and LinkedIn */}
              <div className="flex items-center gap-4 mb-4">
                {/* Circular Photo */}
                <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0 bg-gray-200">
                  <Image
                    src={instructor.image}
                    alt={instructor.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Name, Title and LinkedIn */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-black">
                    {instructor.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-1">
                    {instructor.title}
                  </p>
                  {instructor.linkedin && (
                    <a
                      href={instructor.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors text-sm"
                    >
                      <Linkedin className="w-4 h-4" />
                      <span>LinkedIn</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Bio */}
              <p className={`text-gray-700 text-sm leading-relaxed mb-4 transition-all ${
                expandedCards.includes(instructor.name) ? '' : 'line-clamp-3'
              }`}>
                {instructor.bio}
              </p>

              {/* Show More/Less Link */}
              <button
                onClick={() => toggleCard(instructor.name)}
                className="text-orange font-semibold text-sm hover:text-orange/80 transition-colors"
              >
                {expandedCards.includes(instructor.name) ? '- Kevesebbet mutat' : '+ Többet mutat'}
              </button>
            </div>
          ))}
        </div>

        {/* Show All / Show Less Button */}
        {sortedInstructors.length > 6 && (
          <div className="flex justify-center mt-12">
            <button
              onClick={handleToggleShowAll}
              className="bg-orange text-white font-semibold px-8 py-3 rounded-md transition-colors hover:bg-orange/90"
            >
              {showAll ? 'Kevesebb oktató megtekintése' : 'Összes oktató megtekintése'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
