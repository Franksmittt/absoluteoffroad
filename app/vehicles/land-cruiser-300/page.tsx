import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import TrustSignalBar from '@/components/Trust/TrustSignalBar';
import { getAllProducts } from '@/lib/data/products';

import { formatPrice } from '@/lib/utils/formatPrice';

// Filter products for Land Cruiser 300
function getLC300Products() {
  const allProducts = getAllProducts();
  return allProducts.filter((product) =>
    product.fitment.some(
      (fit) =>
        (fit.make === 'Toyota' && fit.model === 'Land Cruiser 300') ||
        (fit.make === 'Toyota' && fit.model === 'Land Cruiser 300 Series')
    )
  );
}

// Get products by category for LC300
function getLC300ProductsByCategory(category: string) {
  return getLC300Products().filter((p) => p.category === category);
}

export default function LandCruiser300Page() {
  const suspensionProducts = getLC300ProductsByCategory('Suspension').slice(0, 4);
  const armourProducts = getLC300ProductsByCategory('Armour').slice(0, 4);
  const recoveryProducts = getLC300ProductsByCategory('Recovery').slice(0, 4);

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section: "The King, Reimagined." */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=1920&q=80"
            alt="Land Cruiser 300 on gravel road"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-black/90 via-brand-black/85 to-brand-black/95" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-accent-400 mb-4">
              First Class. Anywhere.
            </p>
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight" style={{ fontFamily: 'Bebas Neue, Impact, sans-serif' }}>
              The Land Cruiser 300:<br />
              The New Standard of Dominance
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Technological superiority meets legendary capability. Protect your investment and unlock its true potential.
            </p>
          </div>
        </div>
      </section>

      {/* Evolution Section */}
      <section className="py-20 bg-brand-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-accent-400 mb-4">
                The Evolution
              </p>
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                The King is Dead. Long Live the King.
              </h2>
            </div>

            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-xl text-white/90 leading-relaxed mb-6">
                The move to the TNGA-F platform and V6 Twin-Turbo power has created the most capable stock Land Cruiser in history. The King is dead. Long live the King.
              </p>

              <p className="text-lg text-white/80 leading-relaxed mb-6">
                This is no longer just mechanical; it's <strong className="text-accent-400">digital</strong>. The LC300 requires upgrades that respect the radar cruise control, parking sensors, and advanced safety systems. We don't ruin your luxury SUV; we protect and enhance it.
              </p>

              <p className="text-lg text-white/80 leading-relaxed mb-8">
                This vehicle dominates the highway and the dunes equally. It is the ultimate Grand Tourer for the African continent—first class, anywhere.
              </p>

              <div className="bg-accent-400/10 rounded-2xl p-8 border border-accent-400/30">
                <h3 className="text-2xl font-black text-accent-400 mb-4">The Sophistication</h3>
                <p className="text-white/80 leading-relaxed">
                  Absolute Offroad understands the complex electronics and sophisticated engineering of the LC300. Every modification is designed to integrate seamlessly with Toyota's advanced systems, preserving the vehicle's intelligence while adding capability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Reality: Why You Need Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-gray-500 mb-4">
                The Technical Reality
              </p>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                Why You Need Us
              </h2>
              <p className="text-lg text-gray-600">
                The LC300 is tuned for comfort, which becomes a disadvantage when fully loaded.
              </p>
            </div>

            {/* The Problem: Towing Sag */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 mb-8 shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">⚠️</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-black text-gray-900 mb-2">The Problem: The "Towing Sag"</h3>
                  <p className="text-lg text-gray-700 font-semibold mb-3">
                    "The stock suspension is engineered for plush city driving. But hitch a heavy off-road caravan or load the roof, and the rear end sags, compromising safety and steering."
                  </p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                The LC300's comfort-tuned suspension is perfect for daily driving, but add a heavy caravan, rooftop tent, or full load, and the rear end sags dramatically. This compromises handling, safety, and the vehicle's sophisticated stability systems. You need a GVM upgrade or suspension correction that supports the load without destroying the ride quality.
              </p>
              <div className="bg-accent-50 rounded-xl p-6 border border-accent-200">
                <p className="text-gray-900 font-bold mb-3">The Solution:</p>
                <Link href="/tough-dog-suspension" className="bg-white rounded-xl p-4 border border-gray-200 hover:border-accent-400 transition-colors block">
                  <p className="font-black text-gray-900 mb-1">Tough Dog Suspension</p>
                  <p className="text-sm text-gray-600">Premium suspension solutions with foam cell technology for LC300. Adjustable shocks that maintain ride quality while supporting heavy loads.</p>
                </Link>
              </div>
            </div>

            {/* The Problem: Low Nose */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 mb-8 shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">⚠️</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-black text-gray-900 mb-2">The Problem: The Low Nose</h3>
                  <p className="text-lg text-gray-700 font-semibold mb-3">
                    "To improve aerodynamics, the LC300 sits low at the front. This limits approach angles and risks expensive bumper damage on trails."
                  </p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Toyota designed the LC300's low front end for aerodynamics and fuel efficiency. But on trails, that low nose becomes a liability. Regain your clearance and level the stance with carefully engineered lift kits that maintain the vehicle's sophisticated systems.
              </p>
              <div className="bg-accent-50 rounded-xl p-6 border border-accent-200">
                <p className="text-gray-900 font-bold mb-3">The Solution:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link href="/efs-suspension" className="bg-white rounded-xl p-4 border border-gray-200 hover:border-accent-400 transition-colors">
                    <p className="font-black text-gray-900 mb-1">EFS Suspension</p>
                    <p className="text-sm text-gray-600">Lift kits engineered for LC300</p>
                  </Link>
                  <Link href="/tough-dog-suspension" className="bg-white rounded-xl p-4 border border-gray-200 hover:border-accent-400 transition-colors">
                    <p className="font-black text-gray-900 mb-1">Tough Dog Suspension</p>
                    <p className="text-sm text-gray-600">Premium lift solutions for LC300</p>
                  </Link>
                </div>
              </div>
            </div>

            {/* The Problem: Fragile Aesthetics */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">⚠️</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-black text-gray-900 mb-2">The Problem: Fragile Aesthetics</h3>
                  <p className="text-lg text-gray-700 font-semibold mb-3">
                    "The front end is a masterpiece of design, but plastic grilles don't stop kudu. You need protection that integrates with the vehicle's lines."
                  </p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                The LC300's front end is a work of art, but that beauty is fragile. A kudu strike or trail damage can cost tens of thousands in repairs. You need ADR-compliant armour that looks factory-fitted, not agricultural. Protection that preserves the vehicle's sophisticated aesthetic.
              </p>
              <div className="bg-accent-50 rounded-xl p-6 border border-accent-200">
                <p className="text-gray-900 font-bold mb-3">The Solution:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link href="/mcc-4x4" className="bg-white rounded-xl p-4 border border-gray-200 hover:border-accent-400 transition-colors">
                    <p className="font-black text-gray-900 mb-1">MCC 4x4</p>
                    <p className="text-sm text-gray-600">Pegasus alloy bars with radar-safe integration</p>
                  </Link>
                  <Link href="/onca-4x4" className="bg-white rounded-xl p-4 border border-gray-200 hover:border-accent-400 transition-colors">
                    <p className="font-black text-gray-900 mb-1">Onca 4x4</p>
                    <p className="text-sm text-gray-600">Post and Loop bars that suit modern SUVs</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Enhancement: The Mall vs. The Mountain */}
      <section className="py-20 bg-brand-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-accent-400 mb-4">
                The Enhancement
              </p>
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                The Mall vs. The Mountain
              </h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                Preserve the comfort. Add the capability.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-black text-white mb-4">Base Layer: The Mall</h3>
                <div className="aspect-video bg-gray-800 rounded-xl mb-4 flex items-center justify-center">
                  <p className="text-white/50 text-sm">Stock LC300 with low profile tires and low front bumper</p>
                </div>
                <ul className="space-y-3 text-white/70">
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 mt-1">•</span>
                    <span>Stock suspension tuned for comfort</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 mt-1">•</span>
                    <span>Low front end for aerodynamics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 mt-1">•</span>
                    <span>Fragile plastic front end</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 mt-1">•</span>
                    <span>Perfect for city and highway</span>
                  </li>
                </ul>
              </div>

              <div className="bg-accent-400/10 rounded-2xl p-8 border border-accent-400/30">
                <h3 className="text-2xl font-black text-accent-400 mb-4">Hover/Active Layer: The Mountain</h3>
                <div className="aspect-video bg-gray-800 rounded-xl mb-4 flex items-center justify-center">
                  <p className="text-white/50 text-sm">LC300 with A/T tires, sleek colour-coded bullbar, and 2-inch lift</p>
                </div>
                <ul className="space-y-3 text-white/90">
                  <li className="flex items-start gap-3">
                    <span className="text-accent-400 mt-1">✓</span>
                    <span>Premium suspension with load support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-400 mt-1">✓</span>
                    <span>2-inch lift for improved clearance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-400 mt-1">✓</span>
                    <span>ADR-compliant protection that looks factory</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-400 mt-1">✓</span>
                    <span>Ready for the toughest trails</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Installation Trust Signal */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-brand-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Professional Installation Guaranteed
            </h2>
            <p className="text-lg text-white/80 mb-6 leading-relaxed">
              LC300 owners trust us because we understand the sophisticated electronics and advanced systems. Every modification is performed by certified technicians who preserve your vehicle's intelligence while adding capability.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="bg-white/5 rounded-lg px-6 py-3 border border-white/10">
                <span className="font-bold text-accent-400">Certified Technicians</span>
              </div>
              <div className="bg-white/5 rounded-lg px-6 py-3 border border-white/10">
                <span className="font-bold text-accent-400">System Integration</span>
              </div>
              <div className="bg-white/5 rounded-lg px-6 py-3 border border-white/10">
                <span className="font-bold text-accent-400">Warranty Protected</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signal Bar */}
      <TrustSignalBar />

      {/* Curated Catalog */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-gray-500 mb-4">
              Curated for LC300
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Premium Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Premium products for premium vehicles. No compromises. No parts bin searching.
            </p>
          </div>

          {/* Premium Suspension */}
          {suspensionProducts.length > 0 && (
            <div className="mb-16">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-3xl font-black text-gray-900 mb-2">Premium Suspension</h3>
                  <p className="text-gray-600">Tough Dog adjustable shocks with foam cell technology</p>
                </div>
                <Link
                  href="/products?category=Suspension"
                  className="text-sm font-bold text-gray-900 hover:text-accent-400 transition-colors"
                >
                  View All Suspension →
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {suspensionProducts.map((product) => (
                  <Link
                    key={product.id}
                    href={`/products/${product.slug}`}
                    className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all overflow-hidden flex flex-col group"
                  >
                    <div className="relative aspect-square overflow-hidden bg-gray-100">
                      <Image
                        src={product.images && product.images.length > 0 ? product.images[0] : '/placeholder-product.jpg'}
                        alt={product.name}
                        fill
                        className="object-contain p-4 transition-transform duration-500 group-hover:scale-[1.02]"
                        sizes="(max-width: 1024px) 100vw, 25vw"
                      />
                    </div>
                    <div className="p-5 flex-1 flex flex-col">
                      <p className="text-xs font-bold uppercase tracking-wide text-gray-500 mb-2">
                        {product.brand}
                      </p>
                      <h4 className="text-base font-black text-gray-900 mb-2 line-clamp-2 group-hover:text-accent-400 transition-colors">
                        {product.name}
                      </h4>
                      <div className="mt-auto">
                        <span className="text-xl font-black text-gray-900">
                          {formatPrice(product.salePrice || product.price)}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Integrated Protection */}
          {armourProducts.length > 0 && (
            <div className="mb-16">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-3xl font-black text-gray-900 mb-2">Integrated Protection</h3>
                  <p className="text-gray-600">Colour-coded bullbars that look factory-fitted</p>
                </div>
                <Link
                  href="/products?category=Armour"
                  className="text-sm font-bold text-gray-900 hover:text-accent-400 transition-colors"
                >
                  View All Armour →
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {armourProducts.map((product) => (
                  <Link
                    key={product.id}
                    href={`/products/${product.slug}`}
                    className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all overflow-hidden flex flex-col group"
                  >
                    <div className="relative aspect-square overflow-hidden bg-gray-100">
                      <Image
                        src={product.images && product.images.length > 0 ? product.images[0] : '/placeholder-product.jpg'}
                        alt={product.name}
                        fill
                        className="object-contain p-4 transition-transform duration-500 group-hover:scale-[1.02]"
                        sizes="(max-width: 1024px) 100vw, 25vw"
                      />
                    </div>
                    <div className="p-5 flex-1 flex flex-col">
                      <p className="text-xs font-bold uppercase tracking-wide text-gray-500 mb-2">
                        {product.brand}
                      </p>
                      <h4 className="text-base font-black text-gray-900 mb-2 line-clamp-2 group-hover:text-accent-400 transition-colors">
                        {product.name}
                      </h4>
                      <div className="mt-auto">
                        <span className="text-xl font-black text-gray-900">
                          {formatPrice(product.salePrice || product.price)}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Towing Solutions */}
          {recoveryProducts.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-3xl font-black text-gray-900 mb-2">Towing Solutions</h3>
                  <p className="text-gray-600">Towbars and airbags for heavy loads</p>
                </div>
                <Link
                  href="/products?category=Recovery"
                  className="text-sm font-bold text-gray-900 hover:text-accent-400 transition-colors"
                >
                  View All Towing →
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {recoveryProducts.map((product) => (
                  <Link
                    key={product.id}
                    href={`/products/${product.slug}`}
                    className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all overflow-hidden flex flex-col group"
                  >
                    <div className="relative aspect-square overflow-hidden bg-gray-100">
                      <Image
                        src={product.images && product.images.length > 0 ? product.images[0] : '/placeholder-product.jpg'}
                        alt={product.name}
                        fill
                        className="object-contain p-4 transition-transform duration-500 group-hover:scale-[1.02]"
                        sizes="(max-width: 1024px) 100vw, 25vw"
                      />
                    </div>
                    <div className="p-5 flex-1 flex flex-col">
                      <p className="text-xs font-bold uppercase tracking-wide text-gray-500 mb-2">
                        {product.brand}
                      </p>
                      <h4 className="text-base font-black text-gray-900 mb-2 line-clamp-2 group-hover:text-accent-400 transition-colors">
                        {product.name}
                      </h4>
                      <div className="mt-auto">
                        <span className="text-xl font-black text-gray-900">
                          {formatPrice(product.salePrice || product.price)}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="py-20 bg-gradient-to-br from-brand-black via-gray-900 to-brand-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Protect Your Investment
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              The LC300 is a sophisticated vehicle that requires expert attention. Let our specialists help you enhance its capability while preserving its luxury and advanced systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-accent-400 text-brand-black rounded-xl font-black text-lg hover:bg-accent-300 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Book a Premium Consultation
              </Link>
              <Link
                href="/vehicles"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl font-black text-lg hover:bg-white/20 transition-all border-2 border-accent-400/30"
              >
                View Other Vehicles
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

