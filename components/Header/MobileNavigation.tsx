'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import SearchIcon from './SearchIcon';
import { vehicleNavItems, partNavCategories } from '@/lib/data/navigation';
import { brandShowcase } from '@/lib/data/brands';

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<'vehicle' | 'part' | 'brand' | null>(null);

  const closeMenu = () => {
    setIsOpen(false);
    setActiveSubmenu(null);
  };

  const toggleMenu = () => {
    setIsOpen((prev) => {
      const next = !prev;
      if (!next) {
        setActiveSubmenu(null);
      }
      return next;
    });
  };

  const handleNavLink = () => {
    closeMenu();
  };

  return (
    <>
      {/* Search Icon + Hamburger Button */}
      <div className="flex items-center gap-2">
        <SearchIcon />
        <button
          onClick={toggleMenu}
          className="lg:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-white/10 transition-colors"
          aria-label="Toggle menu"
        >
        <motion.span
          animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
          className="w-6 h-0.5 bg-white"
        />
        <motion.span
          animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
          className="w-6 h-0.5 bg-white"
        />
        <motion.span
          animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
          className="w-6 h-0.5 bg-white"
        />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="fixed inset-0 bg-black/80 z-40 lg:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-72 max-w-[85vw] bg-gray-900 z-50 overflow-y-auto lg:hidden shadow-xl"
            >
              <div className="p-4">
                {/* Close Button */}
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-base font-semibold text-white">Menu</h2>
                  <button
                    onClick={closeMenu}
                    className="p-1.5 rounded-md hover:bg-white/10 text-white"
                  >
                    ✕
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex flex-col gap-1.5">
                  <button
                    onClick={() => setActiveSubmenu(activeSubmenu === 'vehicle' ? null : 'vehicle')}
                    className="text-left px-3 py-2 rounded-md bg-white/5 hover:bg-white/10 text-white text-sm font-medium flex items-center justify-between"
                  >
                    Vehicles
                    <span className={`text-xs transition-transform ${activeSubmenu === 'vehicle' ? 'rotate-180' : ''}`}>▼</span>
                  </button>

                  <AnimatePresence>
                    {activeSubmenu === 'vehicle' && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-3 space-y-1 mt-2">
                          {vehicleNavItems.map((vehicle) => (
                            <Link
                              key={vehicle.name}
                              href={vehicle.href}
                              onClick={handleNavLink}
                              className="block px-3 py-2 rounded-md text-white text-sm hover:bg-white/10 transition-colors"
                            >
                              {vehicle.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <button
                    onClick={() => setActiveSubmenu(activeSubmenu === 'part' ? null : 'part')}
                    className="text-left px-3 py-2 rounded-md bg-white/5 hover:bg-white/10 text-white text-sm font-medium flex items-center justify-between"
                  >
                    Parts
                    <span className={`text-xs transition-transform ${activeSubmenu === 'part' ? 'rotate-180' : ''}`}>▼</span>
                  </button>

                  <AnimatePresence>
                    {activeSubmenu === 'part' && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-3 space-y-1 mt-2">
                          {partNavCategories.map((category) => (
                            <Link
                              key={category.name}
                              href={category.href}
                              onClick={handleNavLink}
                              className="block px-3 py-2 rounded-md text-white text-sm hover:bg-white/10 transition-colors"
                            >
                              {category.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <button
                    onClick={() => setActiveSubmenu(activeSubmenu === 'brand' ? null : 'brand')}
                    className="text-left px-3 py-2 rounded-md bg-white/5 hover:bg-white/10 text-white text-sm font-medium flex items-center justify-between"
                  >
                    Brands
                    <span className={`text-xs transition-transform ${activeSubmenu === 'brand' ? 'rotate-180' : ''}`}>▼</span>
                  </button>

                  <AnimatePresence>
                    {activeSubmenu === 'brand' && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-3 space-y-2 mt-2">
                          {brandShowcase.map((brand) => (
                            <Link
                              key={brand.slug}
                              href={brand.href}
                              onClick={handleNavLink}
                              className="block px-3 py-2 rounded-md bg-white/5 hover:bg-white/10 text-white text-sm"
                            >
                              <span className="font-medium">{brand.name}</span>
                              <span className="block text-xs text-white/50 mt-0.5 line-clamp-1">{brand.tagline}</span>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <Link
                    href="/products"
                    onClick={handleNavLink}
                    className="px-3 py-2 rounded-md bg-white/5 hover:bg-white/10 text-white text-sm font-medium"
                  >
                    All Products
                  </Link>
                  <Link
                    href="/guides"
                    onClick={handleNavLink}
                    className="px-3 py-2 rounded-md bg-white/5 hover:bg-white/10 text-white text-sm font-medium"
                  >
                    Guides
                  </Link>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

