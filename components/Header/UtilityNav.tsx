'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { UserIcon, HeartIcon, ShoppingCartIcon } from '@/components/Icons';

interface UtilityItem {
  href: string;
  label: string;
  Icon: React.ComponentType<{ className?: string }>;
}

const utilityItems: UtilityItem[] = [
  {
    href: '/account',
    label: 'Account',
    Icon: UserIcon,
  },
  {
    href: '/wishlist',
    label: 'Wishlist',
    Icon: HeartIcon,
  },
  {
    href: '/cart',
    label: 'Cart',
    Icon: ShoppingCartIcon,
  },
];

export default function UtilityNav() {
  return (
    <nav className="flex items-center space-x-2">
      {utilityItems.map((item, index) => (
        <motion.div
          key={item.href}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.05, duration: 0.3 }}
        >
          <Link
            href={item.href}
            className="group relative flex items-center gap-2 px-4 py-2 rounded-lg text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300"
          >
            <item.Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium hidden sm:inline-block">
              {item.label}
            </span>
          </Link>
        </motion.div>
      ))}
    </nav>
  );
}
