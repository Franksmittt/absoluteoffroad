'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { getAllProducts } from '@/lib/data/products';

function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-ZA', {
    style: 'currency',
    currency: 'ZAR',
    minimumFractionDigits: 0,
  }).format(price);
}

const featuredKits = [
  {
    title: 'LC79 Overland Armour Stack',
    platform: 'Land Cruiser 79 Double Cab',
    badge: 'Toyota Flagship',
    summary: 'MCC Post Type bullbar + side rails, Tough Dog 500kg constant load kit, Takla Signature seat covers and dual battery-ready Rocker rear bar.',
    highlights: ['12,000lb winch-ready', 'Foam Cell Pro damping', 'Takla interior protection'],
    cta: { label: 'Plan LC79 build', href: '/mcc-4x4' },
  },
  {
    title: 'LC300 Pegasus Touring Package',
    platform: 'Land Cruiser 300 ZX / GR-S',
    badge: 'Luxury Overland',
    summary: 'Pegasus alloy radar-safe bumper, Opposite Lock dual wheel carrier, Tough Dog Foam Cell Pros and Takla Platinum perforated seat protection.',
    highlights: ['Radar + ACC friendly', 'No-cut install', 'Dual spare + jerry capability'],
    cta: { label: 'Explore LC300 strategy', href: '/tough-dog-suspension' },
  },
  {
    title: 'Hilux Legend Dual-Purpose Kit',
    platform: 'Hilux GD6 / Legend RS',
    badge: 'Weekday + Weekend',
    summary: 'Rocker triple-loop bumper, EFS XTR touring suspension, Wild Dog recovery kit and Opposite Lock drawer + rack combo for workday payloads.',
    highlights: ['ADR compliant', '300kg canopy-ready', 'Integrated storage'],
    cta: { label: 'Build Hilux concept', href: '/efs-suspension' },
  },
  {
    title: 'Prado 250 Family Expedition',
    platform: 'Prado 250 / Prado 150',
    badge: 'Family Expedition',
    summary: 'MCC Phoenix-style bumper, Takla River Rock interiors, Tough Dog adjustable shocks and Onca sliders for school-run-to-Botswana flexibility.',
    highlights: ['Airbag certified', 'Kid-proof interiors', 'Hi-Lift jack points'],
    cta: { label: 'See Prado upgrades', href: '/takla' },
  },
];

export default function FeaturedProducts() {
  const allProducts = getAllProducts();
  const featuredProducts = allProducts.filter(p => p.badge || p.id.includes('mcc-001') || p.id.includes('td-002') || p.id.includes('efs-001') || p.id.includes('takla-002')).slice(0, 4);

  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-gray-500 mb-4">
            Featured Products
          </p>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">
            Top Toyota <span className="text-gray-700">Products</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Hand-picked favorites from our premium range. Trusted by thousands of Land Cruiser and Hilux builds across South Africa.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <Link href={`/products/${product.slug}`}>
                <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-200 hover:border-gray-300 h-full flex flex-col">
                  <div className="relative h-64 overflow-hidden bg-gray-100">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                      <span className="text-gray-400 text-sm font-semibold">{product.brand}</span>
                    </div>
                    {product.badge && (
                      <div className="absolute top-4 left-4 z-10">
                        <span className="px-3 py-1 bg-accent-400 text-gray-900 text-xs font-black rounded-full uppercase tracking-wide">
                          {product.badge}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">
                      {product.brand}
                    </p>
                    <h3 className="text-lg font-black text-gray-900 mb-3 group-hover:text-gray-700 transition-colors line-clamp-2">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-3 flex-1 mb-4">
                      {product.shortDescription}
                    </p>
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex flex-col">
                        {product.salePrice ? (
                          <>
                            <span className="text-2xl font-black text-gray-900">{formatPrice(product.salePrice)}</span>
                            <span className="text-sm text-gray-500 line-through">{formatPrice(product.price)}</span>
                          </>
                        ) : (
                          <span className="text-2xl font-black text-gray-900">{formatPrice(product.price)}</span>
                        )}
                      </div>
                      <motion.span
                        className="text-lg font-bold text-gray-900"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/products"
            className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white font-black text-lg rounded-xl hover:bg-gray-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            View All Products
            <motion.span
              className="ml-2"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </Link>
        </div>
      </div>
    </section>
  );
}
