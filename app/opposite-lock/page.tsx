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

const heroStats = [
  { label: 'Multi-Brand Ecosystem', body: 'Tough Dog, Piak & Opposite Lock armour, Lightforce lighting, Front Runner storage—all curated under one strategy.' },
  { label: 'Toyota Priority', body: 'Hilux, LC70/79, LC300, Prado and Fortuner solutions specced daily with race-proven load data.' },
  { label: 'Consultative Builds', body: 'Suspension, armour, lighting and recovery kits bundled with fitment support and logistics.' },
  { label: 'Over 40 Years Heritage', body: 'Born in Australia, pressure-tested on corrugations identical to the Karoo and Kalahari.' },
];

const brandSpecialists = [
  {
    name: 'Tough Dog Suspension',
    positioning: 'Touring Comfort + Load Control',
    copy: 'Foam Cell Pro shocks, Ralph big-bores, adjustable dampers and UCA/caster kits that keep LC70s, LC300s and Hiluxes level with steel barwork.',
    highlights: ['Foam Cell', 'GVM upgrades', '9-way adjustables'],
  },
  {
    name: 'Piak & Opposite Lock Armour',
    positioning: 'Protection + Aesthetics',
    copy: 'Post-type strength or sleek low-loop styling with winch cradles, recovery points and ADAS-friendly hoops for Hilux, Ranger and Cruiser platforms.',
    highlights: ['ADR compliant', 'Tech-pack ready', 'Mining-spec options'],
  },
  {
    name: 'Lightforce Lighting',
    positioning: 'Optical Precision',
    copy: 'Viper light bars, Striker driving lights and smart harnesses focused on usable lux—not spec-sheet lumens—for dusty night convoys.',
    highlights: ['Long-range optics', 'Smart harness kits', 'Filter ecosystem'],
  },
  {
    name: 'Front Runner & Touring Gear',
    positioning: 'Modular Storage',
    copy: 'Slimline II racks, drawer systems, fridge slides, water/fuel management and camp storage—born in South Africa, supported nationwide.',
    highlights: ['Slimline II', 'Accessory ecosystem', 'Future-proof mounts'],
  },
];

const skuHighlights = [
  { sku: 'Tough Dog Foam Cell 41 mm', detail: 'Foam-insert monotubes that refuse to fade on 300 km corrugation stretches.' },
  { sku: 'Hilux/Ranger Complete Kits', detail: 'Pre-assembled struts + leaf packs with comfort/constant load options and alignment hardware bundled.' },
  { sku: 'Piak Elite Post Bar', detail: 'Multi-fold steel, ADAS compatible hoops and triple bash plates for Hilux, LC79 and Ranger.' },
  { sku: 'Lightforce Viper Dual Row', detail: '1 lux @ 734 m plus bundled smart harness—weatherproof and convoy friendly.' },
  { sku: 'Opposite Lock 11T Recovery', detail: 'Club-compliant recovery bag with snatch strap, tree protector, damper and soft shackles.' },
  { sku: 'Front Runner Slimline II', detail: 'Modular rack system with feet kits for Hilux, LC70 and LC300 plus dozens of accessories.' },
];

const curatedBundles = [
  {
    title: 'LC70 Heavy Touring',
    summary: 'Tough Dog Foam Cell Pros, Piak post bar, Lightforce Viper bar + Striker combo, Front Runner rack and Takla interiors.',
    highlights: ['500 kg payload ready', 'Full lighting suite', 'Interior preservation'],
    cta: { label: 'Plan LC70 bundle', href: '/contact' },
  },
  {
    title: 'LC300 Pegasus & Platinum',
    summary: 'Pegasus alloy bar via MCC + Opposite Lock carriers, Tough Dog Ralph shocks, Lightforce Genesis LEDs and Takla Platinum interiors.',
    highlights: ['Radar friendly', 'Dual spare capable', 'Luxury-safe interior kit'],
    cta: { label: 'Design LC300 build', href: '/contact' },
  },
  {
    title: 'Hilux Legend Dual-Life',
    summary: 'Tough Dog XTR suspension, Piak Elite No-Loop bumper, Lightforce Viper bar, Front Runner rack + drawer suite.',
    highlights: ['Weekday comfort', 'Weekend armour', 'Storage organised'],
    cta: { label: 'Start Hilux concept', href: '/contact' },
  },
  {
    title: 'Ranger T9 Lifestyle',
    summary: 'Raptor-width Pegasus bar, Tough Dog adjustable coils, Lightforce HTX2 combo and Opposite Lock recovery kit.',
    highlights: ['Raptor-specific width', '33" tyre friendly', 'Complete recovery bag'],
    cta: { label: 'Spec Ranger package', href: '/contact' },
  },
];

const serviceHighlights = [
  { title: 'Vehicle-Specific Advice', copy: 'Provide make, model, loads and accessories—Opposite Lock consultants select the exact suspension rate, bar variant or lighting beam pattern you need.' },
  { title: 'Bundles That Just Work', copy: 'Suspension + alignment packages, lighting + wiring kits, armour + recovery combos ensure no missing hardware on install day.' },
  { title: 'Fitment & Aftercare', copy: 'Book installations through trusted partners, arrange freight for heavy crates and keep warranties registered and tracked.' },
];

export default function OppositeLockPage() {
  const oppositeLockProducts = getProductsByBrand('Opposite Lock');

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      <section className="relative overflow-hidden pt-32 pb-24 bg-gradient-to-br from-gray-900 via-brand-black to-gray-900 text-white">
        <div className="container mx-auto px-4 relative z-10">
          <p className="text-sm font-bold uppercase tracking-[0.4em] text-accent-400 mb-4">Premium Australian Heritage</p>
          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-5">Opposite Lock South Africa</h1>
          <p className="text-xl text-white/80 max-w-3xl">
            The one-stop architecture for Tough Dog suspension, Piak + Opposite Lock armour, Lightforce lighting, Front Runner storage and recovery ecosystems—curated for Toyota-first builds.
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

      {oppositeLockProducts.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-gray-500 mb-2">Live Products</p>
                <h3 className="text-3xl font-black text-gray-900">Opposite Lock Products</h3>
              </div>
              <Link
                href="/products"
                className="px-5 py-3 rounded-full border border-gray-900 text-gray-900 font-bold hover:bg-gray-900 hover:text-white transition-colors"
              >
                View All Products →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {oppositeLockProducts.map((product) => (
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
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-gray-500 mb-4">Brand Specialists</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Four Pillars of the Opposite Lock Catalogue</h2>
            <p className="text-lg text-gray-600">
              Each partner brings a unique engineering persona—suspension science, armour strength, optical precision and modular touring gear—so every Toyota build is cohesive.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {brandSpecialists.map((brand) => (
              <div key={brand.name} className="p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-gray-500">{brand.positioning}</p>
                  <span className="text-sm font-semibold text-gray-500">{brand.highlights.join(' • ')}</span>
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-4">{brand.name}</h3>
                <p className="text-gray-600">{brand.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-gray-500 mb-4">High Velocity Products</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Top SKU Playbook</h2>
            <p className="text-lg text-gray-600">
              Suspension anchors, armour upgrades, lighting precision and recovery essentials that dominate Hilux, LC70 and Ranger builds.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skuHighlights.map((item) => (
              <div key={item.sku} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-gray-500 mb-2">SKU Highlight</p>
                <h3 className="text-2xl font-black text-gray-900">{item.sku}</h3>
                <p className="text-gray-600 mt-2">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {curatedBundles.map((bundle) => (
              <div key={bundle.title} className="bg-gray-50 rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-lg transition-shadow flex flex-col">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-gray-500 mb-2">Toyota Build Path</p>
                <h3 className="text-xl font-black text-gray-900 mb-2">{bundle.title}</h3>
                <p className="text-sm text-gray-600 flex-1">{bundle.summary}</p>
                <ul className="space-y-2 text-sm text-gray-700 my-4">
                  {bundle.highlights.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-gray-900" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href={bundle.cta.href}
                  className="inline-flex items-center justify-between px-4 py-3 rounded-xl bg-gray-900 text-white font-bold hover:bg-gray-700 transition-colors"
                >
                  {bundle.cta.label}
                  <span>→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-gray-500 mb-3">How We Help</p>
              <h2 className="text-3xl font-black text-gray-900 mb-4">Feels Like a Workshop, Not a Cart</h2>
              <div className="space-y-4">
                {serviceHighlights.map((item) => (
                  <div key={item.title}>
                    <h3 className="text-lg font-black text-gray-900">{item.title}</h3>
                    <p className="text-gray-600 mt-1">{item.copy}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-gray-500 mb-3">Need a Demo?</p>
              <h2 className="text-3xl font-black text-gray-900 mb-4">Book an Opposite Lock Build Consult</h2>
              <p className="text-gray-600 mb-6">
                Whether it’s a Hilux fleet, Ranger lifestyle build or LC300 luxury tourer, we architect the exact SKU list, load ratings and freight plan.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-4 rounded-full bg-gray-900 text-white font-bold hover:bg-gray-700 transition-colors"
              >
                Schedule a Session →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
