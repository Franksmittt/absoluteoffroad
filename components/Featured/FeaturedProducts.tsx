'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { getAllProducts } from '@/lib/data/products';
import { formatPrice } from '@/lib/utils/formatPrice';
import { getShortProductTitle } from '@/lib/utils/formatProductTitle';

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
    <section className="relative py-16 md:py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Featured Products
          </h2>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto">
            Hand-picked favorites from our premium range
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              <Link href={`/products/${product.slug}`}>
                <div className="group bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all h-full flex flex-col">
                  <div className="relative aspect-square overflow-hidden bg-gray-50">
                    <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
                      <span className="text-gray-400 text-xs font-medium">{product.brand}</span>
                    </div>
                    {product.badge && (
                      <div className="absolute top-3 left-3 z-10">
                        <span className="px-2 py-0.5 bg-gray-900 text-white text-xs font-semibold rounded uppercase tracking-wide">
                          {product.badge}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-4 flex-1 flex flex-col">
                    <p className="text-xs font-medium text-gray-500 mb-1.5">
                      {product.brand}
                    </p>
                    <h3 className="text-base font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors line-clamp-2 leading-snug">
                      {getShortProductTitle(product.name, product.brand)}
                    </h3>
                    <div className="mt-auto pt-3 border-t border-gray-100">
                      <div className="flex items-center justify-between">
                        {product.salePrice ? (
                          <>
                            <span className="text-lg font-bold text-gray-900">{formatPrice(product.salePrice)}</span>
                            <span className="text-xs text-gray-400 line-through">{formatPrice(product.price)}</span>
                          </>
                        ) : (
                          <span className="text-lg font-bold text-gray-900">{formatPrice(product.price)}</span>
                        )}
                      </div>
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
            className="inline-flex items-center justify-center px-6 py-2.5 bg-gray-900 text-white font-semibold text-sm rounded-md hover:bg-gray-800 transition-colors"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
