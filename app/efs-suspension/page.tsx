import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { getProductsByBrand } from '@/lib/data/products';

function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-ZA', {
    style: 'currency',
    currency: 'ZAR',
    minimumFractionDigits: 0,
  }).format(price);
}

const vehicleSegments = [
  {
    title: 'Toyota Hilux & Fortuner',
    subtitle: 'IMV Platform Dominance',
    copy: 'The largest addressable market in South Africa. Corrugations and permanent overland loads demand constant-load rear solutions and upgraded front struts.',
    highlights: ['40mm Lift Baseline', '0-500kg Load Profiles', 'Leaf + Coil Ecosystem'],
  },
  {
    title: 'Ford Ranger (T6/T7/Next-Gen)',
    subtitle: 'Lifestyle + Performance',
    copy: 'Ranger owners chase stance and stability. The EFS XTR range unlocks 50mm lift, stable towing manners and future-proof fitment for Next-Gen platforms.',
    highlights: ['XTR 50mm Struts', 'Medium & Heavy Leaf Packs', '33" Tyre Ready'],
  },
  {
    title: 'Land Cruiser 70 Series',
    subtitle: 'Workhorse Reliability',
    copy: 'Agriculture and mining fleets need fade-free damping. Remote reservoir X-Treme shocks and upgraded coils keep Cruisers planted with 500kg+ payloads.',
    highlights: ['X-Treme Shocks', 'Bullbar Coils', 'Caster Correction'],
  },
  {
    title: 'Suzuki Jimny JB74',
    subtitle: 'Lightweight Specialist',
    copy: 'Softly valved shocks and matched coils keep the featherweight Jimny compliant on corrugations without the teeth-rattling ride common with generic kits.',
    highlights: ['Complete 40mm Kit', 'Progressive Valving', 'Bundled Hardware'],
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
    sku: 'EFS Elite Front Struts',
    platform: 'Hilux / Fortuner',
    insight: 'Pre-assembled 40mm lift struts tame brake dive the moment a bullbar or winch goes on.',
  },
  {
    sku: 'Comfort & Constant Leaf Packs',
    platform: 'Hilux / Ranger',
    insight: 'Comfort restores ride quality for lightly loaded beds, while Constant Load keeps canopy rigs level.',
  },
  {
    sku: 'EFS XTR / X-Treme Shocks',
    platform: 'Ranger / Land Cruiser',
    insight: 'Large-bore and remote-reservoir options keep heavy vehicles in control on corrugations.',
  },
  {
    sku: 'Jimny JB74 40mm Kit',
    platform: 'Suzuki Jimny',
    insight: 'Balanced coils and soft-valved shocks built for the lightweight chassis, with all hardware included.',
  },
];

const curatedKits = [
  {
    title: 'LC79 Constant Load Touring Kit',
    summary: 'X-Treme remote reservoir shocks, 500kg constant leafs, 0-200kg front coils, greasable shackles and caster correction—keeps dual tanks, campers and barwork planted.',
    highlights: ['+500kg ready', 'Caster correction included', 'Recommended with MCC Post Type bar'],
    cta: { label: 'Schedule LC79 consult', href: '/contact' },
  },
  {
    title: 'Hilux / Fortuner Daily + Application Lift',
    summary: 'Elite pre-assembled 40mm struts, comfort or medium leaf options, bushes and hardware—balance weekday ride quality with weekend payloads.',
    highlights: ['Plug-and-play struts', 'Comfort & constant leafs', 'Perfect with Rocker bar + canopy'],
    cta: { label: 'Plan Hilux setup', href: '/contact' },
  },
  {
    title: 'Ranger XTR 50mm Lifestyle Pack',
    summary: 'XTR struts, medium leafs and heavy-duty shackles tame camper shells and recovery gear on T6/T7/T9 Rangers without sacrificing stance.',
    highlights: ['Next-Gen compatible', 'Up to 300kg payload', 'Pairs with Pegasus alloy bar'],
    cta: { label: 'Book Ranger fitment', href: '/contact' },
  },
  {
    title: 'Jimny JB74 Expedition Kit',
    summary: '40mm coils, soft-valved shocks, steering damper and all hardware to keep the featherweight chassis stable on corrugations.',
    highlights: ['All hardware packaged', 'Maintains factory comfort', 'Perfect for rooftop tent builds'],
    cta: { label: 'Secure Jimny kit', href: '/contact' },
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
              Discover the suspension catalogue that keeps Hilux, Ranger, Cruiser and Jimny builds comfortable, level and reliable.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: '40mm – 50mm', body: 'Standard lift baseline for Hilux, Ranger, Cruiser' },
              { label: '0-500kg', body: 'Constant load coverage for every overland profile' },
              { label: '3-Year / 100 000km', body: 'Warranty coverage direct from EFS' },
              { label: '20 Anchor SKUs', body: 'Curated to the highest velocity platforms' },
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
              <h2 className="text-4xl font-black text-gray-900 mb-4">Platforms That Drive Volume</h2>
              <p className="text-lg text-gray-600">
                The Toyota IMV platform, Ford’s T6 Ranger, Land Cruiser 70 Series and the emergent Jimny JB74 make up the high-velocity backbone. Each segment carries unique damping, spring-rate and hardware needs, captured below.
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
            <h2 className="text-4xl font-black text-gray-900 mb-4">Top EFS SKUs for SA Terrain</h2>
            <p className="text-lg text-gray-600">
              These anchor SKUs cover Hilux, Ranger, Cruiser and Jimny applications—with matched attach items like bush kits, greasable shackles and caster correction.
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
                <li>• Connect with certified fitment partners if you want professional installation.</li>
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

