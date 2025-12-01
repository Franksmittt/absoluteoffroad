import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { getProductsByBrand } from '@/lib/data/products';

import { formatPrice } from '@/lib/utils/formatPrice';

const vehicleSegments = [
  {
    title: 'Land Cruiser 300',
    subtitle: 'Luxury Overland',
    copy: 'The perfect balance of on-road handling and off-road capability. EFS XTR kits correct factory nose dive, improve approach angles, and increase load-carrying stability without sacrificing luxury ride quality.',
    highlights: ['XTR 50mm Lift', 'Dynamic Motion Control', 'Big Bore Design'],
  },
  {
    title: 'Land Cruiser 76 (Station Wagon)',
    subtitle: 'Purebred Station Wagon',
    copy: 'Solve the harsh ride of the 76 Station Wagon. Elite Comfort kits use specialized valving and rear leaf springs to smooth out bumps while providing 40-50mm lift for technical trails.',
    highlights: ['Comfort Valving', 'Wagon-Specific Springs', '40-50mm Lift'],
  },
  {
    title: 'Land Cruiser 78 (Troop Carrier)',
    subtitle: 'Expedition Vessel',
    copy: 'Built for fully-loaded Troopy conversions. X-Treme heavy-duty kits feature massive 45mm shocks and constant load springs (500kg+) to support rooftop tents, drawer systems, and water tanks.',
    highlights: ['X-Treme 45mm Shocks', 'Constant Load 500kg+', 'Expedition Ready'],
  },
  {
    title: 'Land Cruiser 79 (Pickup / Bakkie)',
    subtitle: 'The Workhorse',
    copy: 'The standard for South African farmers and miners. XTR kits offer 50mm lift with 300kg-500kg load capacity, designed to handle corrugated roads while carrying permanent payloads.',
    highlights: ['XTR 50mm Lift', 'Configurable Load', 'GVM Upgrade Potential'],
  },
];

const sellingPoints = [
  {
    title: 'Built for Corrugations',
    bullets: [
      'Large-bore shocks and Dynamic Motion Control valving keep damping consistent long after OE units fade.',
      'Foam inserts and oversized oil capacity dump heat quickly on endless gravel sections.',
    ],
  },
  {
    title: 'Loads Kept Level',
    bullets: [
      'Comfort, Medium and Constant-load springs match empty daily drivers or 500kg canopy rigs without compromise.',
      'Anti-friction pads, greasable shackles and polyurethane bushes keep the suspension quiet and serviceable.',
    ],
  },
  {
    title: 'Ready-to-Fit Kits',
    bullets: [
      'Vehicle-specific bundles include struts, coils, leaf packs, bush kits and U-bolts so you install once.',
      'Guided load selection prevents harsh rides or sagging builds—just tell us what you carry.',
    ],
  },
];

const skuHighlights = [
  {
    sku: 'EFS XTR 50mm Lift Kit',
    platform: 'Land Cruiser 300',
    insight: 'Perfect balance of on-road handling and off-road capability. 40mm piston / 64mm body for superior heat dissipation on long corrugated roads.',
  },
  {
    sku: 'EFS Elite Comfort Kit',
    platform: 'Land Cruiser 76',
    insight: 'Wagon-specific comfort valving and specialized rear leaf springs solve the harsh ride while providing 40-50mm lift.',
  },
  {
    sku: 'EFS X-Treme Heavy Duty Kit',
    platform: 'Land Cruiser 78',
    insight: 'Massive 45mm bore shocks and constant load springs (500kg+) built for fully-loaded expedition Troopy conversions.',
  },
  {
    sku: 'EFS XTR Workhorse Kit',
    platform: 'Land Cruiser 79',
    insight: 'Configurable load options (0-300kg or 300-500kg) with 50mm lift. GVM upgrade potential for farmers and miners.',
  },
];

const curatedKits = [
  {
    title: 'LC300 XTR 50mm Lift Kit',
    summary: 'XTR shocks with 40mm piston / 64mm body, Dynamic Motion Control valving, and 50mm lift. Corrects factory nose dive and improves approach angles without sacrificing luxury ride.',
    highlights: ['50mm lift', 'Big bore design', '3 Year / 100,000km warranty'],
    cta: { label: 'View LC300 Kit', href: '/vehicles/land-cruiser-300' },
  },
  {
    title: 'LC76 Elite Comfort Kit',
    summary: 'Comfort valved shocks and wagon-specific rear leaf springs solve the harsh ride. Includes U-bolts, polyurethane bushes, and greaseable shackles for complete overhaul.',
    highlights: ['Comfort valving', 'Wagon-specific', '40-50mm lift'],
    cta: { label: 'View LC76 Kit', href: '/vehicles/land-cruiser-76' },
  },
  {
    title: 'LC78 X-Treme Expedition Kit',
    summary: 'Heavy-duty 45mm bore shocks and constant load springs (500kg+) for fully-loaded Troopy conversions. Eliminates boat-like swaying and supports rooftop tents, drawers, and water tanks.',
    highlights: ['45mm piston', '500kg+ constant load', 'Expedition ready'],
    cta: { label: 'View LC78 Kit', href: '/vehicles/land-cruiser-78' },
  },
  {
    title: 'LC79 XTR Workhorse Kit',
    summary: 'Configurable load options (0-300kg or 300-500kg) with 50mm lift. Includes caster correction bushes, greasable shackles, and U-bolts. GVM upgrade potential for farmers and miners.',
    highlights: ['Configurable load', '50mm lift', 'GVM upgrade potential'],
    cta: { label: 'View LC79 Kit', href: '/vehicles/land-cruiser-79' },
  },
];

export default function EFSSuspensionPage() {
  const efsProducts = getProductsByBrand('EFS Suspension');

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      <section className="relative overflow-hidden pt-32 pb-24 bg-gradient-to-br from-gray-900 via-brand-black to-gray-900 text-white">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.4em] text-accent-400 mb-5">
              Premium Durability for Pragmatic Enthusiasts
            </p>
            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
              EFS Suspension for South Africa&apos;s Overlanding Reality
            </h1>
            <p className="text-lg md:text-2xl text-white/80 leading-relaxed">
              Engineered in Australia, validated on 600,000 km of corrugated gravel and heavy-load bakkies.
              Discover the suspension catalogue that keeps Land Cruiser 300, 76, 78, and 79 builds comfortable, level and reliable.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: '40mm – 50mm', body: 'Standard lift baseline for Land Cruiser models' },
              { label: '0-500kg', body: 'Constant load coverage for every overland profile' },
              { label: '3-Year / 100 000km', body: 'Warranty coverage direct from EFS' },
              { label: '4 Complete Kits', body: 'Curated for Land Cruiser 300, 76, 78, and 79' },
            ].map((item) => (
              <div key={item.label} className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur">
                <p className="text-3xl font-black text-accent-400">{item.label}</p>
                <p className="mt-3 text-sm text-white/80">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent)]" />
      </section>

      {efsProducts.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-gray-500 mb-2">Live Products</p>
                <h3 className="text-3xl font-black text-gray-900">EFS Suspension Products</h3>
              </div>
              <Link
                href="/products?category=Suspension"
                className="px-5 py-3 rounded-full border border-gray-900 text-gray-900 font-bold hover:bg-gray-900 hover:text-white transition-colors"
              >
                View All Suspension →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {efsProducts.map((product) => (
                <Link
                  key={product.id}
                  href={`/products/${product.slug}`}
                  className="bg-gray-50 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-shadow flex flex-col overflow-hidden"
                >
                  <div className="relative aspect-square overflow-hidden bg-gray-100">
                    <Image
                      src={product.images && product.images.length > 0 ? product.images[0] : '/placeholder-product.jpg'}
                      alt={product.name}
                      fill
                      className="object-contain p-4"
                      sizes="(max-width: 1024px) 100vw, 25vw"
                    />
                    {product.badge && (
                      <div className="absolute top-4 left-4 z-10">
                        <span className="px-3 py-1 bg-accent-400 text-gray-900 text-xs font-black rounded-full uppercase tracking-wide">
                          {product.badge}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <p className="text-xs font-bold uppercase tracking-wide text-gray-500 mb-2">
                      {product.brand}
                    </p>
                    <h4 className="text-lg font-black text-gray-900 mb-3 line-clamp-2">{product.name}</h4>
                    <p className="text-sm text-gray-600 line-clamp-3 flex-1 mb-4">
                      {product.shortDescription}
                    </p>
                    <div className="mt-auto">
                      <span className="text-2xl font-black text-gray-900">
                        {formatPrice(product.salePrice || product.price)}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-gray-500 mb-4">Why EFS?</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Australian Know-How, African Confidence</h2>
            <p className="text-lg text-gray-600">
              EFS exists for people who load up with bullbars, canopies, drawers and rooftop tents but still expect comfort and control. The technology is premium, yet the price point stays within reach of serious overlanders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sellingPoints.map((point) => (
              <div key={point.title} className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-gray-500 mb-3">What to Expect</p>
                <h3 className="text-2xl font-black text-gray-900 mb-4">{point.title}</h3>
                <ul className="space-y-3 text-gray-600">
                  {point.bullets.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-gray-900" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row lg:items-center gap-12 mb-16">
            <div className="flex-1">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-gray-500 mb-3">
                Vehicle Ecosystems
              </p>
              <h2 className="text-4xl font-black text-gray-900 mb-4">Land Cruiser Platform Focus</h2>
              <p className="text-lg text-gray-600">
                Land Cruiser 300, 76, 78, and 79 Series each have unique suspension needs. From luxury overlanding to heavy-duty workhorse applications, EFS provides tailored solutions for every Land Cruiser build.
              </p>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-4">
              {['Bakkie Culture', 'Corrugated Gravel', 'Permanent Payloads', 'Overland Lifestyle'].map((tag) => (
                <div key={tag} className="p-4 rounded-2xl bg-gray-100 text-center font-semibold text-gray-700">
                  {tag}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {vehicleSegments.map((segment) => (
              <div key={segment.title} className="rounded-3xl border border-gray-200 p-8 shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-gray-500">Segment</p>
                  <span className="px-3 py-1 rounded-full bg-gray-900 text-white text-xs font-bold">
                    {segment.subtitle}
                  </span>
                </div>
                <h3 className="text-3xl font-black text-gray-900 mb-4">{segment.title}</h3>
                <p className="text-gray-600 mb-6">{segment.copy}</p>
                <ul className="space-y-2 text-sm text-gray-700 font-semibold">
                  {segment.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-gray-900" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-gray-500 mb-4">Product Spotlight</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Top EFS Kits for Land Cruiser</h2>
            <p className="text-lg text-gray-600">
              These complete kits are tailored for Land Cruiser 300, 76, 78, and 79—with matched components like bush kits, greasable shackles and caster correction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {skuHighlights.map((sku) => (
              <div
                key={sku.sku}
                className="border border-gray-200 rounded-2xl bg-white p-6 flex flex-col gap-3 shadow-sm hover:shadow-lg transition-shadow"
              >
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-gray-500">SKU Highlight</p>
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-black text-gray-900">{sku.sku}</h3>
                  <span className="text-sm font-semibold text-gray-500">{sku.platform}</span>
                </div>
                <p className="text-gray-600">{sku.insight}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {curatedKits.map((kit) => (
              <div key={kit.title} className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-lg transition-shadow flex flex-col">
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-accent-400">Toyota Focus</span>
                <h3 className="text-2xl font-black text-gray-900 mt-2 mb-2">{kit.title}</h3>
                <p className="text-sm text-gray-600 mb-4 flex-1">{kit.summary}</p>
                <ul className="space-y-2 text-sm text-gray-700 mb-6">
                  {kit.highlights.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-gray-900" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href={kit.cta.href}
                  className="inline-flex items-center justify-between px-4 py-3 rounded-xl bg-gray-900 text-white font-bold hover:bg-gray-700 transition-colors"
                >
                  {kit.cta.label}
                  <span className="ml-2">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-accent-400 mb-4">
                Fitment Guidance
              </p>
              <h2 className="text-4xl font-black mb-4">Choose the Right Kit First Time</h2>
              <p className="text-white/80 leading-relaxed mb-6">
                We help you translate bullbars, winches, canopies, drawer systems and towing duties into the correct coils, leaf packs and shocks. No guessing, no harsh rides, no sagging setups.
              </p>
              <ul className="space-y-3 text-white/80">
                <li>• Tell us your load profile and we’ll recommend Comfort, Medium or Constant-load options.</li>
                <li>• Get bundled quotes with bushes, shackles, U-bolts and hardware included.</li>
                <li>• Get professional installation support and guidance.</li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-accent-400 mb-4">Need Help?</p>
              <h3 className="text-3xl font-black mb-4">Book an EFS Build Consult</h3>
              <p className="text-white/80 leading-relaxed mb-6">
                Share your vehicle, accessories and travel plans. We’ll send you a curated product list that’s ready for checkout or workshop booking.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-4 rounded-full bg-white text-gray-900 font-bold hover:bg-accent-400 hover:text-gray-900 transition-colors"
              >
                Schedule a Call →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

