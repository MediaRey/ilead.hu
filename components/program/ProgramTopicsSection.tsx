'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import {
  Target,
  Settings,
  Bot,
  Rocket,
  UsersRound,
  Heart,
  TrendingUp,
  Award,
  Calculator,
  MessageSquare,
  type LucideIcon
} from 'lucide-react';

interface Topic {
  id: number;
  number: string;
  title: string;
  Icon: LucideIcon;
}

const topics: Topic[] = [
  {
    id: 1,
    number: '1',
    title: 'Győztes stratégiák: Új modell a gyors és turbulens világban, eszközök és kulcselemek',
    Icon: Target
  },
  {
    id: 2,
    number: '2',
    title: 'A stratégiai irányítás operacionalizálása és megvalósítása',
    Icon: Settings
  },
  {
    id: 3,
    number: '3',
    title: 'Mesterséges intelligencia a stratégiai vezetésben',
    Icon: Bot
  },
  {
    id: 4,
    number: '4',
    title: 'Jövőre felkészült vezetés: Szervezeti és egyéni dimenziók',
    Icon: Rocket
  },
  {
    id: 5,
    number: '5',
    title: 'A vezetők embereket építenek: Hogyan vezessünk, fejlesszünk és inspiráljunk tehetségeket',
    Icon: UsersRound
  },
  {
    id: 6,
    number: '6',
    title: 'Ügyfélközpontú szervezet építése: Hogyan irányítsuk a profitot az ügyfelek mély megértésén keresztül',
    Icon: Heart
  },
  {
    id: 7,
    number: '7',
    title: 'Gazdaságtan vezetőknek: Értékteremtés, eszközkezelés és befektetési döntéshozatal',
    Icon: TrendingUp
  },
  {
    id: 8,
    number: '8',
    title: 'A győztes szervezet: Kultúra, elkötelezettség és változáskezelés',
    Icon: Award
  },
  {
    id: 9,
    number: '9',
    title: 'Mesterfokú árképzés és költségmenedzsment: Hogyan növeljük a bevételeket és egyidejűleg csökkentsük a kiadásokat',
    Icon: Calculator
  },
  {
    id: 10,
    number: '10',
    title: 'A vezető mint kommunikátor és tárgyaló: A párbeszéd, befolyás és értékteremtés mesterfoka',
    Icon: MessageSquare
  }
];

export default function ProgramTopicsSection() {
  const [activeTopic, setActiveTopic] = useState<number | null>(null);

  const handleTopicInteraction = (topicId: number | null) => {
    setActiveTopic(topicId);
  };

  const activeTopicData = topics.find(t => t.id === activeTopic);

  // Calculate position on circle - simplified and corrected
  const getCirclePosition = (index: number, total: number) => {
    // Start from top (0 degrees = top of circle)
    const angle = (index / total) * 2 * Math.PI - Math.PI / 2;
    const x = Math.cos(angle);
    const y = Math.sin(angle);
    return { x, y };
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 md:mb-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-orange">Oktatási program:</span>{' '}
            <span className="text-gray-900">10 stratégiai terület</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Fedezze fel átfogó programunkat – vigye az egeret a számokra a részletekért
          </p>
        </div>

        {/* Desktop Circular Diagram */}
        <div className="hidden md:block">
          <div className="relative w-full max-w-4xl mx-auto">
            {/* Overlay content on center - positioned first (lower z-index) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
              <div className="relative" style={{ width: '700px', height: '700px', maxWidth: '100%' }}>
                <div
                  className="absolute rounded-full overflow-hidden shadow-2xl"
                  style={{
                    width: '500px',
                    height: '500px',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <Image
                      src="/tiger_bp.jpg"
                      alt="Program background"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>

                  {/* Blur overlay when active */}
                  <AnimatePresence>
                    {activeTopic && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 backdrop-blur-lg bg-navy-blue/85 z-10"
                      />
                    )}
                  </AnimatePresence>

                  {/* Text content */}
                  <AnimatePresence mode="wait">
                    {activeTopicData ? (
                      <motion.div
                        key={activeTopicData.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 z-20 flex flex-col items-center justify-center p-10 text-center"
                      >
                        <activeTopicData.Icon className="w-20 h-20 text-orange mb-6" strokeWidth={1.5} />
                        <h3 className="text-2xl font-bold text-white leading-tight max-w-lg">
                          {activeTopicData.title}
                        </h3>
                      </motion.div>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute inset-0 z-10 flex items-center justify-center"
                      >
                        <p className="text-white text-2xl font-semibold drop-shadow-lg">
                          Válasszon egy témát
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* SVG for proper circular layout - positioned second (higher z-index) */}
            <svg
              viewBox="0 0 600 600"
              className="w-full h-auto relative z-10"
              style={{ maxWidth: '700px', margin: '0 auto' }}
            >
              {/* Shadow filter */}
              <defs>
                <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                  <feDropShadow dx="0" dy="8" stdDeviation="20" floodOpacity="0.3"/>
                </filter>
              </defs>

              {/* Buttons around the circle */}
              {topics.map((topic, index) => {
                const pos = getCirclePosition(index, topics.length);
                const x = 300 + pos.x * 235;
                const y = 300 + pos.y * 235;
                const isActive = activeTopic === topic.id;

                return (
                  <g key={topic.id}>
                    {/* Pulse ring for active */}
                    {isActive && (
                      <circle
                        cx={x}
                        cy={y}
                        r="38"
                        fill="none"
                        stroke="#f97316"
                        strokeWidth="2"
                        opacity="0.3"
                      >
                        <animate
                          attributeName="r"
                          from="38"
                          to="50"
                          dur="1.5s"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="opacity"
                          from="0.5"
                          to="0"
                          dur="1.5s"
                          repeatCount="indefinite"
                        />
                      </circle>
                    )}

                    {/* Button circle */}
                    <circle
                      cx={x}
                      cy={y}
                      r={isActive ? 36 : 32}
                      fill={isActive ? '#f97316' : 'white'}
                      stroke={isActive ? '#f97316' : '#d1d5db'}
                      strokeWidth="3"
                      style={{
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.15))'
                      }}
                      onMouseEnter={() => handleTopicInteraction(topic.id)}
                      onMouseLeave={() => handleTopicInteraction(null)}
                      onClick={() => handleTopicInteraction(isActive ? null : topic.id)}
                      className="hover:brightness-105"
                    />

                    {/* Number text */}
                    <text
                      x={x}
                      y={y}
                      textAnchor="middle"
                      dominantBaseline="central"
                      fill={isActive ? 'white' : '#374151'}
                      fontSize={isActive ? '22' : '20'}
                      fontWeight="bold"
                      style={{
                        cursor: 'pointer',
                        userSelect: 'none',
                        pointerEvents: 'none',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      {topic.number}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
        </div>

        {/* Mobile List */}
        <div className="md:hidden space-y-3">
          {topics.map((topic) => {
            const Icon = topic.Icon;
            const isActive = activeTopic === topic.id;

            return (
              <motion.button
                key={topic.id}
                className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
                  isActive
                    ? 'border-orange bg-orange/5'
                    : 'border-gray-200 hover:border-orange/50'
                }`}
                onClick={() => handleTopicInteraction(isActive ? null : topic.id)}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                      isActive ? 'bg-orange text-white' : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    {topic.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900">{topic.title}</h3>
                  </div>
                  <Icon
                    className={`w-6 h-6 ${isActive ? 'text-orange' : 'text-gray-400'}`}
                    strokeWidth={1.5}
                  />
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
