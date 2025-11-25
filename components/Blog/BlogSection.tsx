'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  href: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'OME vs. Ironman vs. Raw 4x4: The Ultimate Suspension Comparison',
    excerpt: 'An objective deep-dive into South Africa\'s most popular suspension brands. Performance, value, and real-world testing results.',
    category: 'Versus Guide',
    author: 'Absolute Offroad Team',
    date: '2025-01-15',
    readTime: '12 min read',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&q=80',
    href: '/guides/ome-vs-ironman-vs-raw4x4',
  },
  {
    id: 2,
    title: 'Why a Tow Ball is Not a Recovery Point: Safety Guide',
    excerpt: 'Critical safety information every 4x4 owner needs. Learn why rated recovery points are non-negotiable for serious off-road adventures.',
    category: 'Safety',
    author: 'Absolute Offroad Team',
    date: '2025-01-10',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    href: '/guides/tow-ball-vs-recovery-point',
  },
  {
    id: 3,
    title: 'Takla Seat Covers: Lifetime Warranty Fabric Technology Explained',
    excerpt: 'Discover the premium interior protection solution with lifetime warranty. Complete guide to Takla\'s advanced fabric technology.',
    category: 'Product Guide',
    author: 'Absolute Offroad Team',
    date: '2025-01-05',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80',
    href: '/guides/takla-seat-covers-guide',
  },
  {
    id: 4,
    title: 'Building Your First Overland Rig: Complete Starter Guide',
    excerpt: 'From suspension to storage, learn how to build a capable overland vehicle without breaking the bank. Real-world advice from experts.',
    category: 'Build Guide',
    author: 'Absolute Offroad Team',
    date: '2024-12-28',
    readTime: '15 min read',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&q=80',
    href: '/guides/overland-rig-starter',
  },
];

export default function BlogSection() {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-white to-gray-50">

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">
            Expert <span className="text-gray-700">Guides</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Read before you buy. Expert consultations and in-depth guides to help you make informed decisions.
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link href={post.href}>
                <article className="group h-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-200 hover:border-gray-300">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                      style={{ backgroundImage: `url(${post.image})` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-gray-800 text-white text-xs font-bold rounded-full uppercase tracking-wide">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-black text-gray-900 mb-3 group-hover:text-gray-700 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <span>{post.author}</span>
                      <span>{post.readTime}</span>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-sm font-bold text-gray-900 group-hover:text-gray-700">
                      Read Article
                      <motion.span
                        className="inline-block"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </div>
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <Link
            href="/guides"
            className="inline-block px-8 py-4 bg-gray-900 text-white font-black text-lg rounded-xl hover:bg-gray-800 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
          >
            View All Guides →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

