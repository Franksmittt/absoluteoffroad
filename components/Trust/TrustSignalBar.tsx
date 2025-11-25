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
    description: 'Trusted by enthusiasts nationwide',
    color: 'from-gray-800 to-gray-900',
    link: '/builds',
  },
  {
    Icon: WrenchIcon,
    value: '200+',
    label: 'Fitment Partners',
    description: 'Nationwide installation network',
    color: 'from-gray-700 to-gray-800',
    link: '/fitment-partners',
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
    <section className="relative bg-gradient-to-b from-gray-50 to-white py-16 md:py-20">

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Built for the{' '}
            <span className="text-gray-700">Adventure</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trusted by thousands of 4x4 enthusiasts. Every build tells a story.
          </p>
        </motion.div>

        {/* Trust Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustMetrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              {metric.link ? (
                <Link href={metric.link} className="group relative h-full block">
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    className={`relative h-full bg-gradient-to-br ${metric.color} rounded-2xl p-6 md:p-8 text-white overflow-hidden shadow-xl hover:shadow-2xl transition-all`}
                  >
                    {/* Content */}
                    <div className="relative z-10">
                      <motion.div
                        className="mb-4 text-white"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.15, ease: 'easeOut' }}
                      >
                        <metric.Icon className="w-12 h-12" />
                      </motion.div>
                      <motion.div
                        className="text-4xl md:text-5xl font-black mb-2"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.2, type: 'spring' }}
                      >
                        {metric.value}
                      </motion.div>
                      <h3 className="text-lg md:text-xl font-bold mb-2">
                        {metric.label}
                      </h3>
                      <p className="text-sm md:text-base text-white/80">
                        {metric.description}
                      </p>

                      {metric.link && (
                        <motion.div
                          className="mt-4 flex items-center gap-2 text-sm font-semibold"
                          initial={{ opacity: 0.7 }}
                          whileHover={{ opacity: 1, x: 3 }}
                          transition={{ duration: 0.15, ease: 'easeOut' }}
                        >
                          View Details
                          <span>→</span>
                        </motion.div>
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
                    whileHover={{ scale: 1.05, y: -5 }}
                    className={`relative h-full bg-gradient-to-br ${metric.color} rounded-2xl p-6 md:p-8 text-white overflow-hidden shadow-xl hover:shadow-2xl transition-all`}
                  >
                    {/* Content */}
                    <div className="relative z-10">
                      <motion.div
                        className="mb-4 text-white"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.15, ease: 'easeOut' }}
                      >
                        <metric.Icon className="w-12 h-12" />
                      </motion.div>
                      <motion.div
                        className="text-4xl md:text-5xl font-black mb-2"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.2, type: 'spring' }}
                      >
                        {metric.value}
                      </motion.div>
                      <h3 className="text-lg md:text-xl font-bold mb-2">
                        {metric.label}
                      </h3>
                      <p className="text-sm md:text-base text-white/80">
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
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-12 bg-gradient-to-r from-gray-900 to-brand-black rounded-2xl p-6 md:p-8 text-white shadow-2xl border border-gray-800"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl md:text-3xl font-black mb-2">
                Join the Community
              </h3>
              <p className="text-white/80">
                Share your build. Get inspired. Connect with fellow enthusiasts.
              </p>
            </div>
            <div className="flex gap-4">
              <Link
                href="/builds"
                className="px-6 py-3 bg-accent-400 text-brand-black font-bold rounded-xl hover:bg-accent-300 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                View Builds
              </Link>
              <Link
                href="/community"
                className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border-2 border-white/30 hover:bg-white/20 transition-all"
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
