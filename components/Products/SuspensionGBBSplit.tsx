'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

interface SuspensionTier {
  id: string;
  tier: 'BEST' | 'BETTER' | 'GOOD';
  title: string;
  subtitle: string;
  description: string;
  priceRange: string;
  brands: string[];
  useCase: string;
  gradient: string;
  badgeColor: string;
  icon: string;
  href: string;
}

const suspensionTiers: SuspensionTier[] = [
  {
    id: 'best',
    tier: 'BEST',
    title: 'LC300 / V8 Competition',
    subtitle: 'Elite Performance',
    description: 'Adjustable remote reservoir Tough Dog and Opposite Lock-spec shock packages with hydraulic bump stops for big-bodied Cruisers running 35s.',
    priceRange: 'R45,000 - R75,000',
    brands: ['Tough Dog Ralph', 'Opposite Lock', 'Fox Factory'],
    useCase: 'LC300 rally raid builds, performance Hilux and Ranger programs',
    gradient: 'from-gray-900 via-gray-800 to-gray-900',
    badgeColor: 'bg-accent-400 text-brand-black',
    icon: '',
    href: '/tough-dog-suspension',
  },
  {
    id: 'better',
    tier: 'BETTER',
    title: 'Land Cruiser 70 / Hilux Touring',
    subtitle: 'Proven Reliability',
    description: 'Foam Cell Pro, XTR and X-Treme monotubes with constant-load leaf packs and caster correction for 500kg canopy rigs.',
    priceRange: 'R25,000 - R45,000',
    brands: ['Tough Dog', 'EFS 4x4', 'Opposite Lock'],
    useCase: 'LC70 farmers, Hilux/Fortuner overlanders, Ranger Next-Gen payload builds',
    gradient: 'from-gray-800 via-gray-700 to-gray-800',
    badgeColor: 'bg-gray-600 text-white',
    icon: '',
    href: '/efs-suspension',
  },
  {
    id: 'good',
    tier: 'GOOD',
    title: 'Comfort Lift & Starter Kits',
    subtitle: 'Smart Investment',
    description: 'Pre-assembled Elite struts, comfort leafs and Jimny 40mm kits for daily-driven Toyotas needing stance without harshness.',
    priceRange: 'R12,000 - R28,000',
    brands: ['EFS Elite', 'Opposite Lock', 'Takla (interior support)'],
    useCase: 'Hilux Legend RS commuters, Prado family rigs, Suzuki Jimny JB74 explorers',
    gradient: 'from-gray-700 via-gray-600 to-gray-700',
    badgeColor: 'bg-gray-500 text-white',
    icon: '',
    href: '/opposite-lock',
  },
];

export default function SuspensionGBBSplit() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [selectedTier, setSelectedTier] = useState<string | null>(null);

  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-gray-900 via-brand-black to-gray-900">

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
            Toyota <span className="text-gray-300">Suspension Tiers</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From LC300 competition packages to LC70 constant-load kits and Hilux comfort lifts—we map Good / Better / Best pathways for every Toyota chassis.
          </p>
        </motion.div>

        {/* Tier Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {suspensionTiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              onMouseEnter={() => setHoveredId(tier.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => setSelectedTier(selectedTier === tier.id ? null : tier.id)}
              className="group cursor-pointer"
            >
              <Link href={tier.href}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`relative h-full rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br ${tier.gradient}`}
                >
                  {/* Badge */}
                  <div className="absolute top-4 right-4 z-20">
                    <motion.div
                      className={`px-4 py-2 ${tier.badgeColor} rounded-full text-xs font-black uppercase tracking-wide shadow-lg`}
                      whileHover={{ rotate: [0, -5, 5, -5, 0] }}
                    >
                      {tier.tier}
                    </motion.div>
                  </div>


                  {/* Content */}
                  <div className="relative z-10 p-8 text-white min-h-[450px] flex flex-col justify-between">
                    <div>
                      <h3 className="text-3xl md:text-4xl font-black mb-2">
                        {tier.title}
                      </h3>
                      <p className="text-xl text-white/90 font-bold mb-4">
                        {tier.subtitle}
                      </p>
                      <p className="text-base text-white/80 mb-6 leading-relaxed">
                        {tier.description}
                      </p>

                      {/* Price Range */}
                      <div className="mb-6 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                        <p className="text-sm text-white/60 mb-1">Price Range</p>
                        <p className="text-2xl font-black">{tier.priceRange}</p>
                      </div>

                      {/* Brands */}
                      <div className="mb-4">
                        <p className="text-sm font-bold uppercase tracking-wide text-white/60 mb-2">
                          Featured Brands
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {tier.brands.map((brand, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-lg text-sm font-semibold border border-white/30"
                            >
                              {brand}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Use Case */}
                    <AnimatePresence>
                      {(hoveredId === tier.id || selectedTier === tier.id) && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-4 p-4 bg-black/30 backdrop-blur-sm rounded-xl border border-white/20"
                        >
                          <p className="text-sm font-bold uppercase tracking-wide text-white/60 mb-1">
                            Perfect For
                          </p>
                          <p className="text-sm text-white/90">{tier.useCase}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* CTA */}
                    <motion.div
                      className="mt-6 flex items-center justify-between"
                      whileHover={{ x: 5 }}
                    >
                      <span className="text-lg font-bold">Explore Tier</span>
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="text-2xl"
                      >
                        →
                      </motion.span>
                    </motion.div>
                  </div>

                  {/* Hover Glow Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredId === tier.id ? 1 : 0 }}
                  />
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Comparison CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-accent-400 text-brand-black font-black text-lg rounded-xl hover:bg-accent-300 transition-all shadow-2xl hover:shadow-accent-400/50 transform hover:-translate-y-1"
          >
            Book a Suspension Consult →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
