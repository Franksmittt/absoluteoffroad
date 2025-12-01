'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { PhoneIcon, MailIcon, FacebookIcon, InstagramIcon, YoutubeIcon, TwitterIcon } from '@/components/Icons';

const footerLinks = {
  featured: {
    title: 'Featured Vehicles',
    links: [
      { label: 'Land Cruiser 300', href: '/vehicles/land-cruiser-300' },
      { label: 'Land Cruiser 76 Wagon', href: '/vehicles/land-cruiser-76' },
      { label: 'Land Cruiser 78 Troopy', href: '/vehicles/land-cruiser-78' },
      { label: 'Land Cruiser 79', href: '/vehicles/land-cruiser-79' },
    ],
  },
  shop: {
    title: 'Shop',
    links: [
      { label: 'Shop by Vehicle', href: '/vehicles' },
      { label: 'Toyota Strategy Guide', href: '/vehicles' },
      { label: 'EFS Suspension', href: '/efs-suspension' },
      { label: 'Opposite Lock', href: '/opposite-lock' },
      { label: 'Tough Dog Suspension', href: '/tough-dog-suspension' },
      { label: 'Onca 4x4', href: '/onca-4x4' },
      { label: 'Takla 4x4', href: '/takla' },
      { label: 'MCC 4x4', href: '/mcc-4x4' },
      { label: 'Wild Dog 4x4', href: '/wild-dog' },
    ],
  },
  support: {
    title: 'Support',
    links: [
      { label: 'Track Order', href: '/track-order' },
      { label: 'Shipping Info', href: '/shipping' },
      { label: 'Returns', href: '/returns' },
      { label: 'Contact Us', href: '/contact' },
    ],
  },
  resources: {
    title: 'Resources',
    links: [
      { label: 'Build Guides', href: '/guides' },
      { label: 'Build Gallery', href: '/builds' },
      { label: 'Community', href: '/community' },
      { label: 'Warranty Info', href: '/warranty' },
    ],
  },
  company: {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Blog', href: '/blog' },
      { label: 'Press', href: '/press' },
    ],
  },
};

const socialLinks = [
  { name: 'Facebook', href: '#', Icon: FacebookIcon },
  { name: 'Instagram', href: '#', Icon: InstagramIcon },
  { name: 'YouTube', href: '#', Icon: YoutubeIcon },
  { name: 'Twitter', href: '#', Icon: TwitterIcon },
];

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-brand-black text-white">

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-black mb-4">
                <span className="text-white">Absolute</span>{' '}
                <span className="text-gray-400">Offroad</span>
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                South Africa's premier destination for premium 4x4 accessories. 
                Expert fitment. Trusted brands. Complete builds.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-gray-300">
                  <PhoneIcon className="w-5 h-5" />
                  <a href="tel:+27101234567" className="hover:text-white transition-colors">
                    +27 10 123 4567
                  </a>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <MailIcon className="w-5 h-5" />
                  <a href="mailto:info@absoluteoffroad.co.za" className="hover:text-white transition-colors">
                    info@absoluteoffroad.co.za
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-10 h-10 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-lg hover:bg-accent-400 hover:text-brand-black transition-all border border-white/20"
                    aria-label={social.name}
                  >
                    <social.Icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([key, section], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <h4 className="text-lg font-bold mb-4 text-white">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 Absolute Offroad. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

