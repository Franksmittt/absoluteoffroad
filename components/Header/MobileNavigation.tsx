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
              className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-brand-black z-50 overflow-y-auto lg:hidden shadow-2xl scrollbar-thin scrollbar-thumb-accent-400 scrollbar-track-transparent"
            >
              <div className="p-6">
                {/* Close Button */}
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-white">Menu</h2>
                  <button
                    onClick={closeMenu}
                    className="p-2 rounded-lg hover:bg-white/10 text-white"
                  >
                    ✕
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex flex-col gap-2">
                  <button
                    onClick={() => setActiveSubmenu(activeSubmenu === 'vehicle' ? null : 'vehicle')}
                    className="text-left px-4 py-3 rounded-lg bg-white/5 hover:bg-white/10 text-white font-semibold flex items-center justify-between"
                  >
                    Shop by Vehicle
                    <span className={activeSubmenu === 'vehicle' ? 'rotate-180' : ''}>▼</span>
                  </button>

                  <AnimatePresence>
                    {activeSubmenu === 'vehicle' && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 space-y-2 mt-2">
                          {vehicleNavItems.map((vehicle) => (
                            <Link
                              key={vehicle.name}
                              href={vehicle.href}
                              onClick={handleNavLink}
                              className="block px-4 py-2 rounded-lg bg-white/5 hover:bg-accent-400/20 text-white text-sm mb-1"
                            >
                              <p className="font-semibold">{vehicle.name}</p>
                              <p className="text-xs text-white/60">{vehicle.badge}</p>
                            </Link>
                          ))}
                          <Link
                            href="/vehicles"
                            onClick={handleNavLink}
                            className="block px-4 py-3 rounded-lg bg-accent-400 text-brand-black font-bold text-sm mt-4"
                          >
                            View All Vehicles →
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <button
                    onClick={() => setActiveSubmenu(activeSubmenu === 'part' ? null : 'part')}
                    className="text-left px-4 py-3 rounded-lg bg-white/5 hover:bg-white/10 text-white font-semibold flex items-center justify-between"
                  >
                    Shop by Part
                    <span className={activeSubmenu === 'part' ? 'rotate-180' : ''}>▼</span>
                  </button>

                  <AnimatePresence>
                    {activeSubmenu === 'part' && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 space-y-4 mt-2">
                          {partNavCategories.map((category) => (
                            <div key={category.name} className="mb-4">
                              <Link href={category.href} onClick={handleNavLink} className="block">
                                <p className="text-xs font-bold text-accent-400 mb-1">{category.name}</p>
                                <p className="text-xs text-white/60 mb-2 line-clamp-2">{category.summary}</p>
                              </Link>
                              <div className="space-y-2">
                                {category.items.map((item) => (
                                  <span
                                    key={item}
                                    className="block px-4 py-2 rounded-lg bg-white/5 text-white text-sm"
                                  >
                                    {item}
                                  </span>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <button
                    onClick={() => setActiveSubmenu(activeSubmenu === 'brand' ? null : 'brand')}
                    className="text-left px-4 py-3 rounded-lg bg-white/5 hover:bg-white/10 text-white font-semibold flex items-center justify-between"
                  >
                    Shop by Brand
                    <span className={activeSubmenu === 'brand' ? 'rotate-180' : ''}>▼</span>
                  </button>

                  <AnimatePresence>
                    {activeSubmenu === 'brand' && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 space-y-3 mt-2">
                          {brandShowcase.map((brand) => (
                            <Link
                              key={brand.slug}
                              href={brand.href}
                              onClick={handleNavLink}
                              className="block px-4 py-3 rounded-lg bg-white/5 hover:bg-accent-400/20 text-white text-sm"
                            >
                              <span className="font-semibold">{brand.name}</span>
                              <span className="block text-xs text-white/60 mt-1">{brand.tagline}</span>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <Link
                    href="/guides"
                    onClick={handleNavLink}
                    className="px-4 py-3 rounded-lg bg-white/5 hover:bg-white/10 text-white font-semibold"
                  >
                    Guides & Builds
                  </Link>
                </nav>

                {/* Utility Links */}
                <div className="mt-8 pt-8 border-t border-white/10">
                  <h3 className="text-sm font-bold text-white/60 mb-3 uppercase tracking-wide">
                    Account & Support
                  </h3>
                  <nav className="flex flex-col gap-2">
                    <Link
                      href="/account"
                      onClick={handleNavLink}
                      className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white text-sm"
                    >
                      My Account
                    </Link>
                    <Link
                      href="/cart"
                      onClick={handleNavLink}
                      className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white text-sm"
                    >
                      Cart
                    </Link>
                    <Link
                      href="/wishlist"
                      onClick={handleNavLink}
                      className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white text-sm"
                    >
                      Wishlist
                    </Link>
                    <Link
                      href="/track-order"
                      onClick={handleNavLink}
                      className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white text-sm"
                    >
                      Track Order
                    </Link>
                    <a
                      href="tel:+27101234567"
                      onClick={handleNavLink}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent-400/20 hover:bg-accent-400/30 text-accent-400 text-sm font-semibold"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      +27 10 123 4567
                    </a>
                  </nav>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

