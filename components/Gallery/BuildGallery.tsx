'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

interface Build {
  id: number;
  title: string;
  vehicle: string;
  owner: string;
  image: string;
  category: string;
  tags: string[];
  href: string;
}

const builds: Build[] = [
  {
    id: 1,
    title: 'Ultimate Overland Hilux',
    vehicle: 'Toyota Hilux Revo',
    owner: 'Mike R.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    category: 'Overland',
    tags: ['Wildog', 'OME BP-51', 'Front Runner'],
    href: '/builds/ultimate-overland-hilux',
  },
  {
    id: 2,
    title: 'Racing LC79',
    vehicle: 'Toyota Land Cruiser 79',
    owner: 'Sarah K.',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80',
    category: 'Racing',
    tags: ['Fox', 'Onca', 'Gobi-X'],
    href: '/builds/racing-lc79',
  },
  {
    id: 3,
    title: 'Weekend Warrior Ranger',
    vehicle: 'Ford Ranger Next-Gen',
    owner: 'David T.',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&q=80',
    category: 'Adventure',
    tags: ['Tough Dog', 'Hamer', 'Takla'],
    href: '/builds/weekend-warrior-ranger',
  },
  {
    id: 4,
    title: 'Desert Runner Patrol',
    vehicle: 'Nissan Patrol',
    owner: 'James L.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    category: 'Desert',
    tags: ['EFS', 'Wildog', 'MCC'],
    href: '/builds/desert-runner-patrol',
  },
  {
    id: 5,
    title: 'Family Tourer Prado',
    vehicle: 'Toyota Prado',
    owner: 'Emma W.',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80',
    category: 'Touring',
    tags: ['Formula 4x4', 'Rhino 4x4', 'Takla'],
    href: '/builds/family-tourer-prado',
  },
  {
    id: 6,
    title: 'Extreme Jimny Build',
    vehicle: 'Suzuki Jimny',
    owner: 'Alex M.',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&q=80',
    category: 'Extreme',
    tags: ['KONI', 'Onca', 'Wildog'],
    href: '/builds/extreme-jimny',
  },
];

export default function BuildGallery() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(builds.map(b => b.category)))];
  const filteredBuilds = selectedCategory === 'All' 
    ? builds 
    : builds.filter(b => b.category === selectedCategory);

  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">
            Build <span className="text-gray-700">Gallery</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Real builds from real enthusiasts. Get inspired by the community.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-bold text-sm transition-all ${
                  selectedCategory === category
                    ? 'bg-gray-900 text-white shadow-lg'
                    : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
          >
            {filteredBuilds.map((build, index) => (
              <motion.div
                key={build.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                onMouseEnter={() => setHoveredId(build.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group"
              >
                <Link href={build.href}>
                  <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all">
                    {/* Image */}
                    <div
                      className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                      style={{ backgroundImage: `url(${build.image})` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                    </div>

                    {/* Content Overlay */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                      {/* Category Badge */}
                      <div className="mb-3">
                        <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-xs font-bold rounded-full uppercase tracking-wide border border-white/30">
                          {build.category}
                        </span>
                      </div>

                      {/* Title & Vehicle */}
                      <h3 className="text-2xl font-black mb-1">{build.title}</h3>
                      <p className="text-gray-300 text-sm mb-4">{build.vehicle}</p>

                      {/* Tags */}
                      <AnimatePresence>
                        {hoveredId === build.id && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="flex flex-wrap gap-2 mb-4"
                          >
                            {build.tags.map((tag, idx) => (
                              <span
                                key={idx}
                                className="px-2 py-1 bg-white/10 backdrop-blur-sm text-xs rounded border border-white/20"
                              >
                                {tag}
                              </span>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Owner & CTA */}
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-300">by {build.owner}</span>
                        <motion.span
                          className="text-lg font-bold"
                          animate={{ x: hoveredId === build.id ? [0, 5, 0] : 0 }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          →
                        </motion.span>
                      </div>
                    </div>

                    {/* Hover Shine */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
                      initial={{ x: '-100%' }}
                      animate={{ x: hoveredId === build.id ? '200%' : '-100%' }}
                      transition={{ duration: 0.8 }}
                    />
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <Link
            href="/builds"
            className="inline-block px-8 py-4 bg-gray-900 text-white font-black text-lg rounded-xl hover:bg-gray-800 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
          >
            Explore All Builds →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

