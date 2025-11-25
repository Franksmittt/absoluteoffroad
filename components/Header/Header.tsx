'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import AbsoluteOffroadLogo from './AbsoluteOffroadLogo';
import SearchIcon from './SearchIcon';
import PrimaryNavigation from './PrimaryNavigation';
import MobileNavigation from './MobileNavigation';
import TopUtilityBar from './TopUtilityBar';
import { useVehicleSelection } from '@/hooks/useVehicleSelection';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const { vehicle } = useVehicleSelection();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <TopUtilityBar />
      <motion.div
        className={`border-b border-white/5 bg-gradient-to-b from-brand-black/95 to-brand-black/85 backdrop-blur-xl transition-all duration-300 ${
          isScrolled ? 'shadow-2xl' : ''
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          {/* Compact Inline Header */}
          <div className="flex items-center justify-between py-3">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" aria-label="Go to homepage" className="inline-flex items-center">
                <AbsoluteOffroadLogo vehicle={vehicle} />
              </Link>
            </div>

            {/* Desktop Navigation + Search */}
            <div className="hidden lg:flex items-center gap-6">
              <PrimaryNavigation />
              <SearchIcon />
            </div>

            {/* Mobile Menu */}
            <div className="lg:hidden">
              <MobileNavigation />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.header>
  );
}
