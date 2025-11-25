'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function NewsletterCTA() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      // Handle newsletter signup
      console.log('Newsletter signup:', email);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-br from-gray-900 via-brand-black to-gray-900">

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            Stay in the{' '}
            <span className="text-gray-300">Loop</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get exclusive build guides, product launches, and community stories delivered to your inbox.
          </p>

          {/* Newsletter Form */}
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-6 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-xl text-white placeholder:text-gray-400 focus:outline-none focus:border-accent-400 focus:bg-white/20 transition-all text-lg"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-accent-400 text-brand-black font-black text-lg rounded-xl hover:bg-accent-300 transition-all shadow-xl hover:shadow-2xl whitespace-nowrap"
              >
                {submitted ? 'Subscribed!' : 'Subscribe'}
              </motion.button>
            </div>
          </form>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-gray-400 text-sm">
            <div className="flex items-center gap-2">
              <span>✓</span>
              <span>No spam, ever</span>
            </div>
            <div className="flex items-center gap-2">
              <span>✓</span>
              <span>Unsubscribe anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <span>✓</span>
              <span>Exclusive content</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

