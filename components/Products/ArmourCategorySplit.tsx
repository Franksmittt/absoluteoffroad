'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

interface ArmourCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  brands: string[];
  features: string[];
  href: string;
  gradient: string;
  badge: string;
}

const armourCategories: ArmourCategory[] = [
  {
    id: 'lc70',
    title: 'Land Cruiser 70 / 79 Armour',
    subtitle: 'Farmer & Fleet Proven',
    description: 'MCC Post Type, Onca and Wild Dog bumpers with five-post cages, split pans for GD6 conversions, rated recovery points and jack-ready sliders.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    brands: ['MCC', 'Onca', 'Wild Dog'],
    features: ['Post Type + Rocker bars', 'Rated recovery', 'Side rails + sliders', 'Winch + dual aerial ready'],
    href: '/mcc-4x4',
    gradient: 'from-gray-900 via-gray-800 to-gray-900',
    badge: 'Toyota Workhorse',
  },
  {
    id: 'lc300',
    title: 'LC300 / Hilux Pegasus',
    subtitle: 'Radar-Safe Premium',
    description: 'Alloy Pegasus bars, Piak/Onca low-loop bumpers and Takla interior armour that respect ADAS packs on LC300, Prado 250 and Hilux Legend.',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80',
    brands: ['MCC Pegasus', 'Onca', 'Opposite Lock'],
    features: ['Radar & ACC friendly', 'Integrated DRLs', 'Dual wheel carriers', 'Takla interior integration'],
    href: '/mcc-4x4',
    gradient: 'from-gray-800 via-gray-700 to-gray-800',
    badge: 'Premium Toyota',
  },
];

export default function ArmourCategorySplit() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-white via-gray-50 to-white">

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">
            Toyota <span className="text-gray-700">Armour Programs</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            LC70s need five-post cages and jack bars. LC300s and Hilux Legends demand radar-safe Pegasus bumpers. Choose the stack that matches your Land Cruiser mission profile.
          </p>
        </motion.div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {armourCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              onMouseEnter={() => setHoveredId(category.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group"
            >
              <Link href={category.href}>
                <motion.div 
                  className="relative h-full rounded-3xl overflow-hidden shadow-2xl"
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                >
                  {/* Background Image */}
                  <motion.div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${category.image})` }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-95`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  </motion.div>

                  {/* Content */}
                  <div className="relative z-10 h-full min-h-[500px] flex flex-col justify-between p-8 md:p-10 text-white">
                    {/* Badge */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      className="inline-block mb-4"
                    >
                      <span className="px-4 py-2 bg-gray-800 text-white text-sm font-black rounded-full uppercase tracking-wide border border-gray-700">
                        {category.badge}
                      </span>
                    </motion.div>

                    {/* Title Section */}
                    <div>
                      <h3 className="text-4xl md:text-5xl font-black mb-2">
                        {category.title}
                      </h3>
                      <p className="text-xl md:text-2xl text-gray-300 font-bold mb-4">
                        {category.subtitle}
                      </p>
                      <p className="text-lg text-white/90 mb-6 leading-relaxed">
                        {category.description}
                      </p>
                    </div>

                    {/* Features & Brands */}
                    <AnimatePresence>
                      {hoveredId === category.id && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2, ease: 'easeOut' }}
                          className="space-y-4"
                        >
                          {/* Features */}
                          <div>
                            <h4 className="text-sm font-bold uppercase tracking-wide text-white/60 mb-2">
                              Key Features
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {category.features.map((feature, idx) => (
                                <span
                                  key={idx}
                                  className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-lg text-sm border border-white/20"
                                >
                                  {feature}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Brands */}
                          <div>
                            <h4 className="text-sm font-bold uppercase tracking-wide text-white/60 mb-2">
                              Featured Brands
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {category.brands.map((brand, idx) => (
                                <span
                                  key={idx}
                                  className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-lg text-sm font-semibold border border-white/20"
                                >
                                  {brand}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* CTA */}
                    <div className="mt-6 flex items-center gap-2 text-lg font-bold group-hover:gap-3 transition-all duration-200">
                      Explore Category
                      <span className="inline-block group-hover:translate-x-1 transition-transform duration-200">
                        →
                      </span>
                    </div>
                  </div>

                  {/* Hover Shine Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12"
                    initial={{ x: '-100%' }}
                    animate={hoveredId === category.id ? { x: '200%' } : { x: '-100%' }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                  />
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
