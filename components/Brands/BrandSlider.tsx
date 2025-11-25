'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { brandShowcase } from '@/lib/data/brands';

export default function BrandSlider() {
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  const displayBrands = brandShowcase;

  useEffect(() => {
    const container = containerRef.current;
    if (!container || displayBrands.length === 0) return;

    const scrollWidth = container.scrollWidth / 3; // Divide by 3 because we have 3 sets

    controls.start({
      x: -scrollWidth,
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 30,
          ease: 'linear',
        },
      },
    });
  }, [controls, displayBrands.length]);

  // Create multiple sets for seamless loop
  const brandSets = [...displayBrands, ...displayBrands, ...displayBrands];

  return (
    <section className="bg-brand-black py-8 md:py-12 overflow-hidden border-y border-white/5">
      <div className="relative">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-brand-black via-brand-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-brand-black via-brand-black to-transparent z-10 pointer-events-none" />

        {/* Infinite scroll container */}
        <div className="overflow-hidden">
          <motion.div
            ref={containerRef}
            className="flex gap-6 md:gap-10"
            animate={controls}
          >
            {brandSets.map((brand, index) => (
              <div
                key={`${brand.name}-${index}`}
                className="flex-shrink-0 flex items-center justify-center"
              >
                <div className="px-8 md:px-12 py-4 md:py-5 bg-white/5 rounded-xl border border-white/10 hover:border-accent-400/50 hover:bg-white/10 transition-all backdrop-blur-sm group">
                  <span className="text-white text-lg md:text-2xl font-bold whitespace-nowrap group-hover:text-accent-400 transition-colors">
                    {brand.name}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

