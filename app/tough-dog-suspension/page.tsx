import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { getProductsByBrand } from '@/lib/data/products';

import { formatPrice } from '@/lib/utils/formatPrice';

const heroStats = [
  { label: 'Foam Cell Pro', body: '41 mm big-bore monotubes with foam inserts that stay cool on 300 km corrugations.' },
  { label: 'Ralph Big-Bores', body: '53 mm monsters for Land Cruiser 78 and 79 fleets carrying 500 kg constant loads.' },
  { label: '9-Stage Adjustables', body: 'Dial in Land Cruiser 300 and 79 damping for empty commutes or heavy towing with the turn of a knob.' },
  { label: 'Land Cruiser Focus', body: 'Complete kits for Land Cruiser 300, 76, 78, and 79 with bundled hardware + caster correction.' },
];

const sellingPoints = [
  {
    title: 'Load-Matched Engineering',
    bullets: [
      'Comfort, Medium and Constant load coils/leafs cover empty daily drivers through 500 kg canopy rigs.',
      'Caster correction bushes, UCAs and shackles arrive in the same crate so alignment is perfect after lift.',
    ],
  },
  {
    title: 'Extreme Heat Resistance',
    bullets: [
      'Foam Cell inserts displace heat faster than traditional monotubes—critical for Land Cruiser 70 Series towing in 45 °C Karoo summers.',
      'Ralph dampers run massive oil volumes and external reservoirs for mine-spec Cruisers and expedition LC300s.',
    ],
  },
  {
    title: '9-Stage Adjustables',
    bullets: [
      'Quickly soften for city driving or tighten damping for heavy towing on Land Cruiser 300 and 79 builds.',
      'Dial front and rear independently so bullbars, winches and campers don\'t dictate ride harshness.',
    ],
  },
];

const platformKits = [
  {
    platform: 'Land Cruiser 300',
    summary: '9-Stage Adjustable shocks with 40mm lift, allowing you to dial in perfect ride for city driving or heavy towing. GVM upgrade compatible.',
    highlights: ['9-Stage Adjustable', '40mm lift', 'GVM ready'],
  },
  {
    platform: 'Land Cruiser 76 (Station Wagon)',
    summary: 'Foam Cell "Comfort" kit with wagon-specific leaf springs to eliminate rear-end harshness. 50mm lift with comfort valving.',
    highlights: ['Comfort valving', 'Wagon-specific', '50mm lift'],
  },
  {
    platform: 'Land Cruiser 78 (Troop Carrier)',
    summary: 'Ralph 53mm big-bore shocks with constant load springs (500kg+) for fully-loaded expedition Troopies. The biggest shock on the market.',
    highlights: ['Ralph 53mm', '500kg+ constant load', 'Expedition proven'],
  },
  {
    platform: 'Land Cruiser 79 (Pickup / Bakkie)',
    summary: '9-Stage Adjustable workhorse kit with configurable load options. Perfect for vehicles that alternate between empty and loaded states.',
    highlights: ['9-Stage Adjustable', 'Configurable load', '50mm lift'],
  },
];

const skuHighlights = [
  { sku: '9-Stage Adjustable (BMX Series)', detail: 'External knob adjustment with 9 distinct settings. Perfect for Land Cruiser 300 and 79 that alternate between empty and loaded.' },
  { sku: 'Ralph 53mm Big Bore', detail: 'The largest 4WD shock absorber available. 53mm bore with 22mm chrome rod for Land Cruiser 78 expedition builds.' },
  { sku: 'Foam Cell 41mm', detail: 'Foam Cell technology eliminates shock fade on long corrugated roads. Perfect for Land Cruiser 76 comfort upgrades.' },
  { sku: 'Caster Correction Bushes', detail: 'Bundled with Land Cruiser 79 kits to keep steering tracking true after bullbar and winch installs.' },
  { sku: 'Comfort Leaf Springs', detail: 'Wagon-specific 0-300kg comfort springs for Land Cruiser 76 to eliminate harsh rear-end ride.' },
  { sku: 'Constant Load Springs', detail: '500kg+ constant load springs for Land Cruiser 78 and 79 carrying permanent payloads.' },
];

const curatedKits = [
  {
    title: 'LC300 9-Stage Adjustable Kit',
    summary: '9-Stage Adjustable shocks with 40mm lift. Dial in perfect ride for luxury city driving or heavy towing. GVM upgrade compatible.',
    highlights: ['9-Stage Adjustable', '40mm lift', 'GVM ready'],
    cta: { label: 'View LC300 Kit', href: '/vehicles/land-cruiser-300' },
  },
  {
    title: 'LC76 Foam Cell Comfort Kit',
    summary: 'Foam Cell "Comfort" suspension with wagon-specific leaf springs. Eliminates harsh rear-end ride while providing 50mm lift.',
    highlights: ['Comfort valving', 'Wagon-specific', '50mm lift'],
    cta: { label: 'View LC76 Kit', href: '/vehicles/land-cruiser-76' },
  },
  {
    title: 'LC78 Ralph Expedition Kit',
    summary: 'Ralph 53mm big-bore shocks with constant load springs (500kg+) for fully-loaded Troopy conversions. The ultimate expedition setup.',
    highlights: ['Ralph 53mm', '500kg+ constant load', 'Expedition proven'],
    cta: { label: 'View LC78 Kit', href: '/vehicles/land-cruiser-78' },
  },
  {
    title: 'LC79 9-Stage Adjustable Workhorse',
    summary: '9-Stage Adjustable kit with configurable load options (0-300kg or 300-500kg). Perfect for vehicles that alternate between empty and loaded.',
    highlights: ['9-Stage Adjustable', 'Configurable load', '50mm lift'],
    cta: { label: 'View LC79 Kit', href: '/vehicles/land-cruiser-79' },
  },
];

export default function ToughDogPage() {
  const toughDogProducts = getProductsByBrand('Tough Dog');

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      <section className="relative overflow-hidden pt-32 pb-24 bg-gradient-to-br from-gray-900 via-brand-black to-gray-900 text-white">
        <div className="container mx-auto px-4 relative z-10">
          <p className="text-sm font-bold uppercase tracking-[0.4em] text-accent-400 mb-4">Foam Cell Authority</p>
          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-5">Tough Dog Suspension South Africa</h1>
          <p className="text-xl text-white/80 max-w-3xl">
            Heavy payload, corrugation-proof suspension developed in Australia and tuned for Land Cruiser 300, 76, 78, and 79 platforms.
          </p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-6">
            {heroStats.map((stat) => (
              <div key={stat.label} className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur">
                <p className="text-2xl font-black text-accent-400">{stat.label}</p>
                <p className="mt-3 text-sm text-white/80">{stat.body}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent)]" />
      </section>

      {toughDogProducts.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-gray-500 mb-2">Live Products</p>
                <h3 className="text-3xl font-black text-gray-900">Tough Dog Suspension Products</h3>
              </div>
              <Link
                href="/products?category=Suspension"
                className="px-5 py-3 rounded-full border border-gray-900 text-gray-900 font-bold hover:bg-gray-900 hover:text-white transition-colors"
              >
                View All Suspension →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {toughDogProducts.map((product) => (
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

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-gray-500 mb-4">Why Tough Dog?</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Load Control Meets Comfort</h2>
            <p className="text-lg text-gray-600">
              Foam Cell Pros, Ralph big-bores, 9-stage adjustables and load-rated coils/leafs keep Land Cruisers level without beating up passengers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sellingPoints.map((point) => (
              <div key={point.title} className="p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
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

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row lg:items-center gap-12 mb-16">
            <div className="flex-1">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-gray-500 mb-3">Land Cruiser Platforms</p>
              <h2 className="text-4xl font-black text-gray-900 mb-4">Suspension Kits We Deliver Every Week</h2>
              <p className="text-lg text-gray-600">
                Land Cruiser 300 luxury tourers, 76 family wagons, 78 expedition Troopies, and 79 workhorse pickups each need tailored damping and spring rates—Tough Dog covers them all.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {platformKits.map((kit) => (
              <div key={kit.platform} className="rounded-3xl border border-gray-200 p-8 shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-gray-500">Use Case</p>
                  <span className="px-3 py-1 rounded-full bg-gray-900 text-white text-xs font-semibold">High Demand</span>
                </div>
                <h3 className="text-3xl font-black text-gray-900 mb-4">{kit.platform}</h3>
                <p className="text-gray-600 mb-6">{kit.summary}</p>
                <ul className="space-y-2 text-sm text-gray-700 font-semibold">
                  {kit.highlights.map((highlight) => (
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

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-gray-500 mb-4">Key Hardware</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Tough Dog Signatures Worth Knowing</h2>
            <p className="text-lg text-gray-600">Anchor components that allow us to tune Land Cruiser suspensions precisely.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skuHighlights.map((item) => (
              <div key={item.sku} className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-gray-500 mb-2">SKU Highlight</p>
                <h3 className="text-2xl font-black text-gray-900 mb-3">{item.sku}</h3>
                <p className="text-gray-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {curatedKits.map((kit) => (
              <div key={kit.title} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow flex flex-col">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-gray-500 mb-2">Land Cruiser Build</p>
                <h3 className="text-xl font-black text-gray-900 mb-2">{kit.title}</h3>
                <p className="text-sm text-gray-600 flex-1">{kit.summary}</p>
                <ul className="space-y-2 text-sm text-gray-700 my-4">
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
                  <span>→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-accent-400 mb-4">Need Specs?</p>
              <h2 className="text-4xl font-black mb-4">Book the Tough Dog Suspension Desk</h2>
              <p className="text-white/80 leading-relaxed mb-6">
                We translate bullbars, canopies, dual batteries and trailers into spring rates, shim stacks and damper settings so you don\'t guess.
              </p>
              <ul className="space-y-3 text-white/80">
                <li>• Provide load sheets and we\'ll recommend Comfort, Medium or Constant leaf/coil combos.</li>
                <li>• Receive bundled quotes with bushes, shackles, UCAs and brake line brackets included.</li>
                <li>• Get professional installation support and post-install guidance.</li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-accent-400 mb-3">Ready to Dial It In?</p>
              <h3 className="text-3xl font-black mb-4">Schedule a Tough Dog Consult</h3>
              <p className="text-white/80 mb-6">
                Share your Land Cruiser platform, accessory list and travel plans. We\'ll send a curated product list and fitment timeline.
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
