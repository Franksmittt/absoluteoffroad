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
      <nav className="flex items-center justify-center gap-4 text-sm font-semibold uppercase tracking-wide text-white">
        <button
          onMouseEnter={() => handleMouseEnter('vehicle')}
          className="rounded-full px-5 py-2 transition-colors hover:bg-white/10"
        >
          Shop by Vehicle
        </button>
        <button
          onMouseEnter={() => handleMouseEnter('part')}
          className="rounded-full px-5 py-2 transition-colors hover:bg-white/10"
        >
          Shop by Part
        </button>
        <button
          onMouseEnter={() => handleMouseEnter('brand')}
          className="rounded-full px-5 py-2 transition-colors hover:bg-white/10"
        >
          Shop by Brand
        </button>
        <Link
          href="/products"
          className="rounded-full px-5 py-2 transition-colors hover:bg-white/10"
        >
          All Products
        </Link>
        <Link
          href="/guides"
          className="rounded-full px-5 py-2 transition-colors hover:bg-white/10"
        >
          Guides & Builds
        </Link>
        <Link
          href="/fitment-partners"
          className="rounded-full px-5 py-2 transition-colors hover:bg-white/10"
        >
          Fitment Partners
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
            className="absolute left-0 right-0 z-50 mt-4 max-h-[80vh] overflow-y-auto rounded-3xl border border-white/10 bg-brand-black/95 p-6 text-white shadow-2xl backdrop-blur-2xl scrollbar-thin scrollbar-thumb-accent-400 scrollbar-track-transparent"
          >
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {vehicleNavItems.map((vehicle) => (
                <Link
                  key={vehicle.name}
                  href={vehicle.href}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 transition-all hover:border-accent-400 hover:bg-white/10"
                >
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent-400">{vehicle.badge}</p>
                  <h3 className="text-xl font-black text-white mt-2 mb-3">{vehicle.name}</h3>
                  <p className="text-sm text-white/70 leading-relaxed">{vehicle.summary}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-accent-400">
                    {vehicle.cta} →
                  </span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}

        {activeMenu === 'part' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            onMouseEnter={() => handleMouseEnter('part')}
            onMouseLeave={handleMouseLeave}
            className="absolute left-0 right-0 z-50 mt-4 max-h-[80vh] overflow-y-auto rounded-3xl border border-white/10 bg-brand-black/95 p-6 text-white shadow-2xl backdrop-blur-2xl scrollbar-thin scrollbar-thumb-accent-400 scrollbar-track-transparent"
          >
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {partNavCategories.map((category) => (
                <div
                  key={category.name}
                  className="rounded-2xl border border-white/5 bg-white/5 p-5"
                >
                  <Link href={category.href}>
                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent-400">
                      {category.name}
                    </p>
                    <p className="mt-2 text-sm text-white/70 line-clamp-3">{category.summary}</p>
                  </Link>
                  <div className="mt-4 flex flex-col gap-2">
                    {category.items.map((item) => (
                      <span key={item} className="text-sm text-white/80 border border-white/10 rounded-xl px-3 py-2 bg-brand-black/40">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
        {activeMenu === 'brand' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            onMouseEnter={() => handleMouseEnter('brand')}
            onMouseLeave={handleMouseLeave}
            className="absolute left-0 right-0 z-50 mt-4 max-h-[80vh] overflow-y-auto rounded-3xl border border-white/10 bg-brand-black/95 p-6 text-white shadow-2xl backdrop-blur-2xl scrollbar-thin scrollbar-thumb-accent-400 scrollbar-track-white/10"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {brandShowcase.map((brand) => (
                <Link
                  key={brand.slug}
                  href={brand.href}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 transition-all hover:border-accent-400 hover:bg-white/10"
                >
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent-400 mb-2">Brand Store</p>
                  <h3 className="text-2xl font-black text-white mb-2">{brand.name}</h3>
                  <p className="text-sm text-white/70">{brand.tagline}</p>
                  <p className="text-xs text-white/50 mt-2">{brand.focus}</p>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

