'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { TrophyIcon, WrenchIcon, ShieldIcon, CheckIcon } from '@/components/Icons';

interface TrustMetric {
  Icon: React.ComponentType<{ className?: string }>;
  value: string;
  label: string;
  description: string;
  color: string;
  link?: string;
}

const trustMetrics: TrustMetric[] = [
  {
    Icon: TrophyIcon,
    value: '10,000+',
    label: 'Builds Completed',
    description: 'Trusted by enthusiasts across South Africa',
    color: 'from-gray-800 to-gray-900',
    link: '/builds',
  },
  {
    Icon: WrenchIcon,
    value: '10+',
    label: 'Premium Brands',
    description: 'Curated product selection',
    color: 'from-gray-700 to-gray-800',
  },
  {
    Icon: ShieldIcon,
    value: '5-Year',
    label: 'Warranty Coverage',
    description: 'Unlimited KM protection',
    color: 'from-gray-800 to-gray-900',
  },
  {
    Icon: CheckIcon,
    value: 'ADR & SABS',
    label: 'Certified',
    description: 'Safety approved armour',
    color: 'from-gray-700 to-gray-800',
  },
];

export default function TrustSignalBar() {
  return (
    <section className="relative bg-white py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Built for the Adventure
          </h2>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto">
            Trusted by thousands of 4x4 enthusiasts
          </p>
        </motion.div>

        {/* Trust Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {trustMetrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              {metric.link ? (
                <Link href={metric.link} className="group relative h-full block">
                  <motion.div
                    whileHover={{ y: -2 }}
                    className={`relative h-full bg-gradient-to-br ${metric.color} rounded-lg p-5 text-white overflow-hidden shadow-md hover:shadow-lg transition-all`}
                  >
                    {/* Content */}
                    <div className="relative z-10">
                      <div className="mb-3 text-white">
                        <metric.Icon className="w-8 h-8" />
                      </div>
                      <div className="text-2xl md:text-3xl font-bold mb-1.5">
                        {metric.value}
                      </div>
                      <h3 className="text-sm md:text-base font-semibold mb-1">
                        {metric.label}
                      </h3>
                      <p className="text-xs text-white/80">
                        {metric.description}
                      </p>

                      {metric.link && (
                        <div className="mt-3 flex items-center gap-1.5 text-xs font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                          View Details
                          <span>→</span>
                        </div>
                      )}
                    </div>

                    {/* Shine Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '200%' }}
                      transition={{ duration: 0.4, ease: 'easeInOut' }}
                    />
                  </motion.div>
                </Link>
              ) : (
                <div className="group relative h-full block">
                  <motion.div
                    whileHover={{ y: -2 }}
                    className={`relative h-full bg-gradient-to-br ${metric.color} rounded-lg p-5 text-white overflow-hidden shadow-md hover:shadow-lg transition-all`}
                  >
                    {/* Content */}
                    <div className="relative z-10">
                      <div className="mb-3 text-white">
                        <metric.Icon className="w-8 h-8" />
                      </div>
                      <div className="text-2xl md:text-3xl font-bold mb-1.5">
                        {metric.value}
                      </div>
                      <h3 className="text-sm md:text-base font-semibold mb-1">
                        {metric.label}
                      </h3>
                      <p className="text-xs text-white/80">
                        {metric.description}
                      </p>
                    </div>

                    {/* Shine Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '200%' }}
                      transition={{ duration: 0.4, ease: 'easeInOut' }}
                    />
                  </motion.div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Social Proof Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="mt-8 bg-gray-900 rounded-lg p-5 text-white border border-gray-800"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-1">
                Join the Community
              </h3>
              <p className="text-sm text-white/70">
                Share your build. Get inspired. Connect with fellow enthusiasts.
              </p>
            </div>
            <div className="flex gap-3">
              <Link
                href="/builds"
                className="px-4 py-2 bg-white text-gray-900 text-sm font-semibold rounded-md hover:bg-gray-100 transition-colors"
              >
                View Builds
              </Link>
              <Link
                href="/community"
                className="px-4 py-2 bg-gray-800 text-white text-sm font-medium rounded-md border border-gray-700 hover:bg-gray-700 transition-colors"
              >
                Join Community
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
