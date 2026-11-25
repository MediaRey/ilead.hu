import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

type OfferingKey = 'program' | 'masterclass' | 'magazine';

type OfferingVisual =
  /** Full-bleed picture (the magazine cover carries its own title) */
  | { type: 'photo'; src: string }
  /** Navy panel in the style of the program cover: title with the red dot, picture, tags.
   *  `portrait`: the picture is a cut-out portrait, shown larger and cropped by the bottom edge */
  | { type: 'tiger'; src: string; titleLines: string[]; titleSize: string; tags: string[]; portrait?: boolean };

interface Offering {
  key: OfferingKey;
  href: string;
  /** Read by screen readers; the visible name sits on the picture */
  title: string;
  description: string;
  cta: string;
  visual: OfferingVisual;
}

const offerings: Offering[] = [
  {
    key: 'program',
    href: '/be-future-ready-executive-program',
    title: 'Be Future Ready Executive Program',
    description: 'Vezetők és döntéshozók fejlesztése a gyakorlatban',
    cta: 'Tovább a programra',
    visual: {
      type: 'tiger',
      src: '/program/hero.png',
      titleLines: ['Be Future', 'Ready'],
      titleSize: 'text-[length:12cqw]',
      tags: ['Stratégia', 'Vezetés'],
    },
  },
  {
    key: 'masterclass',
    href: '/ai-masterclass',
    title: 'My Winning Strategy with AI',
    description: 'Kétnapos AI masterclass felsővezetőknek',
    cta: 'Tovább a masterclassra',
    visual: {
      type: 'tiger',
      src: '/masterclass/lencses.webp',
      titleLines: ['My Winning', 'Strategy', 'with AI'],
      titleSize: 'text-[length:9.5cqw]',
      tags: ['AI-stratégia', 'Döntés'],
      portrait: true,
    },
  },
  {
    key: 'magazine',
    href: '/subscription',
    title: 'MIT Sloan Management Review',
    description: 'Világszínvonalú menedzsment know-how – éves előfizetés',
    cta: 'Tovább a magazinra',
    visual: { type: 'photo', src: '/magazine/pages/page1.png' },
  },
];

const imageSizes = '(min-width: 1024px) 352px, (min-width: 768px) 50vw, 100vw';

// Soft teal glow behind the tiger, a warm glow at its feet, navy base
const tigerBackground = [
  'radial-gradient(60% 50% at 78% 72%, rgba(233,137,45,0.20) 0%, rgba(233,137,45,0) 70%)',
  'radial-gradient(110% 90% at 85% 45%, rgba(24,100,128,0.55) 0%, rgba(24,100,128,0) 60%)',
  'linear-gradient(160deg, #0E2738 0%, #0A1B28 100%)',
].join(', ');

// Faint polygon facets that echo the low-poly tiger
const facets = [
  { points: '0,0 150,0 0,115', opacity: 0.045 },
  { points: '150,0 400,0 400,120', opacity: 0.03 },
  { points: '0,115 0,300 130,300', opacity: 0.05 },
  { points: '400,120 400,300 250,300', opacity: 0.035 },
  { points: '130,300 250,300 190,205', opacity: 0.025 },
];

function CardVisual({ visual }: { visual: OfferingVisual }) {
  if (visual.type === 'photo') {
    return (
      <div className="relative w-full aspect-[4/3] bg-navy-blue overflow-hidden">
        <Image
          src={visual.src}
          alt=""
          fill
          sizes={imageSizes}
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    );
  }

  return (
    // Container units (cqw) keep the title, tags and spacing proportional to the card width
    <div
      className="relative w-full aspect-[4/3] overflow-hidden [container-type:inline-size]"
      style={{ background: tigerBackground }}
    >
      {/* Polygon facets */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 400 300"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        {facets.map((facet) => (
          <polygon key={facet.points} points={facet.points} fill="white" fillOpacity={facet.opacity} />
        ))}
      </svg>

      {/* Tiger or portrait, standing on the bottom edge, close to the right side of the frame */}
      <div
        className={
          visual.portrait
            ? 'absolute bottom-0 right-0 w-[54%] h-[88%]'
            : 'absolute bottom-0 right-[3%] w-[70%] h-[66%]'
        }
      >
        <Image
          src={visual.src}
          alt=""
          fill
          sizes={imageSizes}
          className={`object-contain object-right-bottom origin-bottom-right transition-transform duration-500 group-hover:scale-105 ${
            visual.portrait ? '' : 'drop-shadow-2xl'
          }`}
        />
      </div>

      {/* Title with the red dot */}
      <p
        className={`absolute left-[7cqw] top-[7cqw] z-10 font-bold text-white leading-[1.02] tracking-tight ${visual.titleSize}`}
      >
        {visual.titleLines.map((line, index) => (
          <span key={line} className="block">
            {line}
            {index === visual.titleLines.length - 1 && <span className="text-brand-red">.</span>}
          </span>
        ))}
      </p>

      {/* Tags */}
      <ul className="absolute left-[7cqw] bottom-[7cqw] z-10 flex flex-col items-start gap-[1.6cqw]">
        {visual.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-[0.8cqw] border border-orange/70 px-[2.4cqw] py-[1cqw] text-[length:3cqw] font-medium uppercase leading-none tracking-[0.18em] text-orange"
          >
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
}

interface OfferingsSectionProps {
  /** The page being viewed: its own card is left out. Use 'home' to show every card. */
  current: OfferingKey | 'home';
}

export default function OfferingsSection({ current }: OfferingsSectionProps) {
  const cards = offerings.filter((offering) => offering.key !== current);
  const isTriple = cards.length === 3;

  return (
    <section className="py-20 px-6 lg:px-16 bg-gray-50">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-black">
          Ismerje meg <span className="text-orange">további kínálatunkat</span>
        </h2>

        {/* On large screens two cards are centred at exactly the width they have in the three-card row */}
        <div
          className={`grid grid-cols-1 gap-8 md:grid-cols-2 ${
            isTriple ? 'lg:grid-cols-3' : 'lg:w-[calc((200%_-_2rem)/3)] lg:mx-auto'
          }`}
        >
          {cards.map((card, index) => {
            // With three cards the last one is centred on the two-column layout
            const centreLast = isTriple && index === 2;

            return (
              <Link
                key={card.key}
                href={card.href}
                className={`group flex flex-col bg-white rounded-xl border border-gray-100 shadow-lg hover:shadow-xl overflow-hidden transition-shadow duration-300 ${
                  centreLast ? 'md:col-span-2 md:max-w-md md:w-full md:mx-auto lg:col-span-1 lg:max-w-none' : ''
                }`}
              >
                <CardVisual visual={card.visual} />

                {/* Description and call to action */}
                <div className="flex flex-col flex-1 p-6">
                  <h3 className="sr-only">{card.title}</h3>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">{card.description}</p>

                  <span className="mt-auto inline-flex items-center justify-center gap-2 self-start bg-orange text-white font-semibold px-6 py-3 rounded-md transition-colors group-hover:bg-orange/90">
                    {card.cta}
                    <ArrowRight
                      className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
