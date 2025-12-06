'use client';

import React, { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { vehicleNavItems, partNavCategories } from '@/lib/data/navigation';
import { brandShowcase } from '@/lib/data/brands';

type ActiveMenu = 'vehicle' | 'part' | 'brand' | null;

export default function PrimaryNavigation() {
  const [activeMenu, setActiveMenu] = useState<ActiveMenu>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (menu: ActiveMenu) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    closeTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
      closeTimeoutRef.current = null;
    }, 150);
  };

  return (
    <div className="relative hidden lg:block" onMouseLeave={handleMouseLeave}>
      <nav className="flex items-center justify-center gap-1 text-sm font-medium text-white">
        <button
          onMouseEnter={() => handleMouseEnter('vehicle')}
          className="px-4 py-2 rounded-md transition-colors hover:bg-white/10"
        >
          Vehicles
        </button>
        <button
          onMouseEnter={() => handleMouseEnter('part')}
          className="px-4 py-2 rounded-md transition-colors hover:bg-white/10"
        >
          Parts
        </button>
        <button
          onMouseEnter={() => handleMouseEnter('brand')}
          className="px-4 py-2 rounded-md transition-colors hover:bg-white/10"
        >
          Brands
        </button>
        <Link
          href="/products"
          className="px-4 py-2 rounded-md transition-colors hover:bg-white/10"
        >
          All Products
        </Link>
        <Link
          href="/guides"
          className="px-4 py-2 rounded-md transition-colors hover:bg-white/10"
        >
          Guides
        </Link>
      </nav>

      <AnimatePresence>
        {activeMenu === 'vehicle' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            onMouseEnter={() => handleMouseEnter('vehicle')}
            onMouseLeave={handleMouseLeave}
            className="absolute left-0 z-50 mt-2 rounded-md border border-white/10 bg-gray-900 p-3 text-white shadow-xl min-w-[200px]"
          >
            <nav className="space-y-1">
              {vehicleNavItems.map((vehicle) => (
                <Link
                  key={vehicle.name}
                  href={vehicle.href}
                  className="block px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 rounded-md transition-colors"
                >
                  {vehicle.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}

        {activeMenu === 'part' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            onMouseEnter={() => handleMouseEnter('part')}
            onMouseLeave={handleMouseLeave}
            className="absolute left-0 z-50 mt-2 rounded-md border border-white/10 bg-gray-900 p-3 text-white shadow-xl min-w-[200px]"
          >
            <nav className="space-y-1">
              {partNavCategories.map((category) => (
                <Link
                  key={category.name}
                  href={category.href}
                  className="block px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 rounded-md transition-colors"
                >
                  {category.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
        {activeMenu === 'brand' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            onMouseEnter={() => handleMouseEnter('brand')}
            onMouseLeave={handleMouseLeave}
            className="absolute left-0 z-50 mt-2 rounded-md border border-white/10 bg-gray-900 p-3 text-white shadow-xl min-w-[200px]"
          >
            <nav className="space-y-1">
              {brandShowcase.map((brand) => (
                <Link
                  key={brand.slug}
                  href={brand.href}
                  className="block px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 rounded-md transition-colors"
                >
                  {brand.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

