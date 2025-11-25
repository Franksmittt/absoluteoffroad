'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { SettingsIcon } from '@/components/Icons';

const utilities = [
  { label: 'Need Fitment?', href: '/fitment-partners', highlight: true },
  { label: 'Contact: +27 10 123 4567', href: 'tel:+27101234567' },
  { label: 'Workshop Network', href: '/fitment-partners' },
  { label: 'Track Order', href: '/track-order' },
  { label: 'My Account', href: '/account' },
  { label: 'Cart', href: '/cart' },
];

export default function TopUtilityBar() {
  return (
    <div className="hidden lg:block bg-brand-black text-white">
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-3 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide">
        <motion.div
          className="flex items-center gap-2 text-accent-400"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <SettingsIcon className="w-4 h-4" />
          <span>4x4 Build Specialists</span>
        </motion.div>
        <div className="flex flex-wrap items-center gap-4 text-white/70">
          {utilities.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`transition-colors hover:text-white ${
                item.highlight ? 'text-accent-400' : ''
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

