'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

interface HeroSlide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  badge?: string;
}

const heroSlides: HeroSlide[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=1920&q=80',
    title: 'Land Cruiser 70 Armour Programs',
    subtitle: 'Post Type + Takla + Tough Dog',
    description:
      'We blueprint MCC Post bars, Onca sliders, Tough Dog Foam Cell Pros and Takla interiors so LC79 fleets survive kudu strikes, load shifts and 600 km of corrugations.',
    ctaText: 'See LC70 Strategy',
    ctaLink: '/mcc-4x4',
    badge: 'Toyota First',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1486663845017-3eedaa78617f?w=1920&q=80',
    title: 'LC300 Pegasus + Platinum Build',
    subtitle: 'Radar-Safe Alloy Armour',
    description:
      'Pegasus alloy bumpers, dual wheel carriers, Tough Dog Ralph big-bores and Takla Platinum interiors keep your R1.5m rig protected without upsetting ADAS packs.',
    ctaText: 'Plan LC300 Build',
    ctaLink: '/tough-dog-suspension',
    badge: 'Luxury Overland',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1920&q=80',
    title: 'Hilux Legend Dual-Life Setup',
    subtitle: 'Rocker Armour + EFS Touring',
    description:
      'Hiluxes that commute daily and head north on weekends get Rocker bumpers, EFS XTR coil/leaf combos, Wild Dog recovery kits and Opposite Lock storage in one consult.',
    ctaText: 'Build Hilux Concept',
    ctaLink: '/efs-suspension',
    badge: 'Weekday to Weekend',
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  const goToNext = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const goToPrev = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const slideVariants = {
    enter: {
      opacity: 0,
    },
    center: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  };

  return (
    <section className="relative min-h-[320px] md:min-h-[360px] overflow-hidden pt-16 md:pt-20">
      {/* Full Width Background Image */}
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={currentSlide}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            opacity: { duration: 0.6, ease: 'easeInOut' },
          }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${heroSlides[currentSlide].image})`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/85 to-gray-900/75" />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Content Overlay */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8 py-6 md:py-8">
          {/* Sidebar Navigation - Floating over image */}
          <div className="lg:col-span-1">
            <div className="bg-gray-900 rounded-lg border border-white/10 p-4 shadow-xl">
              <h3 className="text-sm font-semibold text-white mb-4">Shop by Category</h3>
              <nav className="space-y-2">
                <Link
                  href="/products?category=Suspension"
                  className="block px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 rounded-md transition-colors"
                >
                  Suspension
                </Link>
                <Link
                  href="/products?category=Armour"
                  className="block px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 rounded-md transition-colors"
                >
                  Armour
                </Link>
                <Link
                  href="/products?category=Interior"
                  className="block px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 rounded-md transition-colors"
                >
                  Interior
                </Link>
                <Link
                  href="/products?category=Recovery"
                  className="block px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 rounded-md transition-colors"
                >
                  Recovery
                </Link>
                <div className="pt-4 mt-4 border-t border-white/10">
                  <Link
                    href="/products"
                    className="block px-3 py-2 text-sm font-semibold text-accent-400 hover:text-accent-300 rounded-md transition-colors"
                  >
                    View All Products →
                  </Link>
                </div>
              </nav>
            </div>
          </div>

          {/* Hero Content */}
          <div className="lg:col-span-3">
            <div className="relative min-h-[280px] flex items-center">
              <div className="max-w-2xl">
                {/* Badge */}
                {heroSlides[currentSlide].badge && (
                  <div className="inline-block mb-4">
                    <span className="px-3 py-1 bg-accent-400 text-gray-900 text-xs font-semibold rounded-md uppercase tracking-wide">
                      {heroSlides[currentSlide].badge}
                    </span>
                  </div>
                )}

                {/* Title */}
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 leading-tight">
                  {heroSlides[currentSlide].title}
                </h1>

                {/* Subtitle */}
                <p className="text-lg md:text-xl font-semibold text-accent-400 mb-4">
                  {heroSlides[currentSlide].subtitle}
                </p>

                {/* Description */}
                <p className="text-sm md:text-base text-white/80 mb-6 leading-relaxed">
                  {heroSlides[currentSlide].description}
                </p>

                {/* CTA Button */}
                <div>
                  <Link
                    href={heroSlides[currentSlide].ctaLink}
                    className="inline-flex items-center justify-center px-6 py-3 bg-accent-400 text-gray-900 font-semibold text-sm rounded-md hover:bg-accent-300 transition-colors"
                  >
                    {heroSlides[currentSlide].ctaText}
                    <span className="ml-2">→</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between mt-4">
              {/* Slide Indicators */}
              <div className="flex gap-2">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`h-1.5 rounded-full transition-all ${
                      index === currentSlide
                        ? 'w-6 bg-accent-400'
                        : 'w-1.5 bg-white/30 hover:bg-white/50'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Navigation Arrows */}
              <div className="flex gap-2">
                <button
                  onClick={goToPrev}
                  className="p-2 rounded-md bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors"
                  aria-label="Previous slide"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={goToNext}
                  className="p-2 rounded-md bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors"
                  aria-label="Next slide"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
