'use client';

import React from 'react';
import Link from 'next/link';

interface ContentCard {
  title: string;
  description: string;
  href: string;
  category: string;
}

const contentCards: ContentCard[] = [
  {
    title: 'OME vs. Ironman vs. Raw 4x4',
    description: 'An objective guide to the core suspension debate. Compare features, performance, and value to make the right choice for your vehicle.',
    href: '/guides/ome-vs-ironman-vs-raw4x4',
    category: 'Versus Content',
  },
  {
    title: 'Why a Tow Ball is Not a Recovery Point',
    description: 'Learn about safety-critical recovery points and why proper rated recovery equipment is essential for off-road safety.',
    href: '/guides/tow-ball-vs-recovery-point',
    category: 'Safety/Problem-Solve',
  },
  {
    title: 'Takla Seat Covers: Lifetime Warranty Fabric Guide',
    description: 'Discover the premium interior protection solution with lifetime warranty. Complete guide to Takla seat covers and fabric technology.',
    href: '/guides/takla-seat-covers-guide',
    category: 'Niche/Upsell',
  },
];

export default function ContentFunnel() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
          The Expert's Guide: Read Before You Buy
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Expert consultations and guides to help you make informed decisions about your 4x4 build.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {contentCards.map((card, index) => (
            <Link
              key={index}
              href={card.href}
              className="group block bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              <div className="mb-3">
                <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full">
                  {card.category}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {card.description}
              </p>
              <div className="text-primary-600 font-semibold text-sm group-hover:text-primary-700">
                Read Guide →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

