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
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <section className="relative h-screen overflow-hidden pt-20 md:pt-24">
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="absolute inset-0"
        >
          {/* Background Image with Overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${heroSlides[currentSlide].image})`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-brand-black/90 via-brand-black/70 to-brand-black/60" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent" />
          </div>

          {/* Content */}
          <div className="relative z-10 h-full flex items-center">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-3xl">
                {/* Badge */}
                {heroSlides[currentSlide].badge && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="inline-block mb-6"
                  >
                    <span className="px-4 py-2 bg-accent-400 text-brand-black text-sm font-bold rounded-full uppercase tracking-wide">
                      {heroSlides[currentSlide].badge}
                    </span>
                  </motion.div>
                )}

                {/* Title */}
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-3 leading-tight drop-shadow-2xl"
                  style={{
                    textShadow: '0 0 40px rgba(0, 0, 0, 0.8), 0 0 80px rgba(0, 0, 0, 0.5)',
                  }}
                >
                  {heroSlides[currentSlide].title}
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-xl md:text-2xl lg:text-3xl font-bold text-accent-400 mb-4 drop-shadow-lg"
                  style={{
                    textShadow: '0 0 20px rgba(255, 215, 0, 0.5)',
                  }}
                >
                  {heroSlides[currentSlide].subtitle}
                </motion.p>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-base md:text-lg text-white/90 mb-6 max-w-2xl leading-relaxed"
                >
                  {heroSlides[currentSlide].description}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Link
                    href={heroSlides[currentSlide].ctaLink}
                    className="group inline-flex items-center justify-center px-8 py-4 bg-accent-400 text-brand-black font-black text-base md:text-lg rounded-xl hover:bg-accent-300 transition-all shadow-2xl hover:shadow-accent-400/70 transform hover:-translate-y-1 hover:scale-105"
                    style={{
                      boxShadow: '0 10px 40px rgba(255, 215, 0, 0.4), 0 0 20px rgba(255, 215, 0, 0.2)',
                    }}
                  >
                    {heroSlides[currentSlide].ctaText}
                    <motion.span
                      className="ml-2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      →
                    </motion.span>
                  </Link>
                  <Link
                    href="/vehicles"
                    className="inline-flex items-center justify-center px-6 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold text-base rounded-xl border-2 border-white/30 hover:bg-white/20 transition-all"
                  >
                    Browse Platforms
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-accent-400 hover:text-brand-black transition-all border border-white/20 hover:border-accent-400 shadow-lg"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-accent-400 hover:text-brand-black transition-all border border-white/20 hover:border-accent-400 shadow-lg"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide
                ? 'w-8 bg-accent-400'
                : 'w-2 bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 z-20">
        <motion.div
          key={currentSlide}
          className="h-full bg-accent-400"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 6, ease: 'linear' }}
        />
      </div>
    </section>
  );
}
