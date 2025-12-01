import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import TrustSignalBar from '@/components/Trust/TrustSignalBar';
import { getAllProducts } from '@/lib/data/products';

import { formatPrice } from '@/lib/utils/formatPrice';

// Filter products for Land Cruiser 79
function getLC79Products() {
  const allProducts = getAllProducts();
  return allProducts.filter((product) =>
    product.fitment.some(
      (fit) => fit.make === 'Toyota' && fit.model === 'Land Cruiser 79'
    )
  );
}

// Get products by category for LC79
function getLC79ProductsByCategory(category: string) {
  return getLC79Products().filter((p) => p.category === category);
}

export default function LandCruiser79Page() {
  const suspensionProducts = getLC79ProductsByCategory('Suspension').slice(0, 4);
  const armourProducts = getLC79ProductsByCategory('Armour').slice(0, 4);
  const recoveryProducts = getLC79ProductsByCategory('Recovery').slice(0, 4);

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section: "The Unbreakable Icon" */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=1920&q=80"
            alt="Land Cruiser 79 in African landscape"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-black/80 via-brand-black/70 to-brand-black/90" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-accent-400 mb-4">
              The Canvas of Africa
            </p>
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight" style={{ fontFamily: 'Bebas Neue, Impact, sans-serif' }}>
              The Land Cruiser 79:<br />
              Master of the African Continent
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              More than a bakkie. It is a legacy. But even legends need upgrading to survive the modern world.
            </p>
          </div>
        </div>
      </section>

      {/* Heritage & Cult Status Section */}
      <section className="py-20 bg-brand-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-accent-400 mb-4">
                The Heritage
              </p>
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                The Unbreakable Icon
              </h2>
            </div>

            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-xl text-white/90 leading-relaxed mb-6">
                The Land Cruiser 79 Series is the direct descendant of the 40 and 75 Series—vehicles that defined reliability in the harshest conditions on Earth. It is not designed for comfort; it is designed for <strong className="text-accent-400">survival</strong>.
              </p>

              <p className="text-lg text-white/80 leading-relaxed mb-6">
                The body-on-frame design hasn't changed fundamentally since 1984, making it easy to fix in the bush with a hammer and wire. This is not a bug—it's a feature. When you're 600 kilometers from the nearest town, simplicity is the ultimate sophistication.
              </p>

              <p className="text-lg text-white/80 leading-relaxed mb-8">
                The Single Cab and Double Cab 79s are status symbols in South Africa—the choice of farming, mining, and overlanding royalty. They're not just vehicles; they're statements of intent. You don't buy a 79 because you want to look tough. You buy it because you <em className="text-accent-400">are</em> tough.
              </p>

              <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-black text-accent-400 mb-4">The Time Capsule Appeal</h3>
                <p className="text-white/80 leading-relaxed">
                  While the rest of the automotive world chases technology, the 79 Series remains a time capsule of proven engineering. Every component is overbuilt. Every system is redundant. Every design decision prioritizes durability over convenience. This is why a 15-year-old 79 can still command R400,000—because it will still be running when today's high-tech alternatives are scrap metal.
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
                We acknowledge the vehicle's stock flaws to sell you the solutions.
              </p>
            </div>

            {/* The Engine */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 mb-8 shadow-lg">
              <h3 className="text-2xl font-black text-gray-900 mb-4">The Engine</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                The V8 Diesel (or the new 2.8L Auto) has torque. It's powerful. But it's also <strong className="text-gray-900">heavy</strong>. That weight, combined with the 79's workhorse suspension, creates a unique set of challenges that stock components simply cannot handle.
              </p>
            </div>

            {/* The Problem: Suspension */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 mb-8 shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">⚠️</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-black text-gray-900 mb-2">The Problem: Suspension</h3>
                  <p className="text-lg text-gray-700 font-semibold mb-3">
                    "The stock suspension is built for carrying 1 ton of bricks, not for ride comfort."
                  </p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Toyota designed the 79's suspension to handle maximum payloads. The result? A bone-jarring ride when empty, nose-dive under braking, and harsh rear leaf springs that make every corrugation feel like a jackhammer. To make the 79 livable—whether you're commuting or crossing the Kalahari—you need to upgrade.
              </p>
              <div className="bg-accent-50 rounded-xl p-6 border border-accent-200">
                <p className="text-gray-900 font-bold mb-3">The Solution:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link href="/efs-suspension" className="bg-white rounded-xl p-4 border border-gray-200 hover:border-accent-400 transition-colors">
                    <p className="font-black text-gray-900 mb-1">EFS Suspension</p>
                    <p className="text-sm text-gray-600">X-Treme leaf packs and heavy-duty shocks for constant-load builds</p>
                  </Link>
                  <Link href="/tough-dog-suspension" className="bg-white rounded-xl p-4 border border-gray-200 hover:border-accent-400 transition-colors">
                    <p className="font-black text-gray-900 mb-1">Tough Dog Suspension</p>
                    <p className="text-sm text-gray-600">Foam Cell Pro shocks and upgraded coils for corrugation control</p>
                  </Link>
                </div>
              </div>
            </div>

            {/* The Problem: Protection */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 mb-8 shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">⚠️</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-black text-gray-900 mb-2">The Problem: Protection</h3>
                  <p className="text-lg text-gray-700 font-semibold mb-3">
                    "The 79 has a massive approach angle, but the stock plastic/thin metal bumper offers zero animal strike protection."
                  </p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                A kudu strike at 100 km/h will total a stock 79. The factory bumper is designed for pedestrian safety, not African wildlife. You need ADR-compliant heavy-duty steel that can take a hit and keep going.
              </p>
              <div className="bg-accent-50 rounded-xl p-6 border border-accent-200">
                <p className="text-gray-900 font-bold mb-3">The Solution:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link href="/onca-4x4" className="bg-white rounded-xl p-4 border border-gray-200 hover:border-accent-400 transition-colors">
                    <p className="font-black text-gray-900 mb-1">Onca 4x4</p>
                    <p className="text-sm text-gray-600">Heavy-duty bullbars and rock sliders for maximum protection</p>
                  </Link>
                  <Link href="/mcc-4x4" className="bg-white rounded-xl p-4 border border-gray-200 hover:border-accent-400 transition-colors">
                    <p className="font-black text-gray-900 mb-1">MCC 4x4</p>
                    <p className="text-sm text-gray-600">Post Type bullbars and complete protection packages</p>
                  </Link>
                </div>
              </div>
            </div>

            {/* The Problem: Utility */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">⚠️</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-black text-gray-900 mb-2">The Problem: Utility</h3>
                  <p className="text-lg text-gray-700 font-semibold mb-3">
                    "It's built to tow, but needs the right rating."
                  </p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                The 79 is rated to tow 3.5 tons, but the factory recovery points and towbar aren't rated for serious recovery work. When you're stuck in mud up to the axles, you need equipment that won't fail.
              </p>
              <div className="bg-accent-50 rounded-xl p-6 border border-accent-200">
                <p className="text-gray-900 font-bold mb-3">The Solution:</p>
                <Link href="/wild-dog" className="bg-white rounded-xl p-4 border border-gray-200 hover:border-accent-400 transition-colors block">
                  <p className="font-black text-gray-900 mb-1">Wild Dog Recovery</p>
                  <p className="text-sm text-gray-600">Rated recovery points and heavy-duty towbars for serious work</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Build: Stock vs Built */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-accent-400 mb-4">
                The Transformation
              </p>
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                Stock vs. Absolute Offroad Standard
              </h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                We take the factory standard and turn it into the Absolute Offroad standard.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-black text-white mb-4">Factory Standard</h3>
                <ul className="space-y-3 text-white/70">
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>Stock suspension built for payload, not comfort</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>Plastic bumper with zero animal strike protection</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>Basic recovery points not rated for serious work</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>Harsh ride on corrugations</span>
                  </li>
                </ul>
              </div>

              <div className="bg-accent-400/10 rounded-2xl p-8 border border-accent-400/30">
                <h3 className="text-2xl font-black text-accent-400 mb-4">Absolute Offroad Standard</h3>
                <ul className="space-y-3 text-white/90">
                  <li className="flex items-start gap-3">
                    <span className="text-accent-400 mt-1">✓</span>
                    <span>EFS or Tough Dog suspension tuned for your load profile</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-400 mt-1">✓</span>
                    <span>ADR-compliant steel bullbar and rock sliders</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-400 mt-1">✓</span>
                    <span>Rated recovery points and heavy-duty towbars</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-400 mt-1">✓</span>
                    <span>Comfortable ride that handles corrugations like a champion</span>
                  </li>
                </ul>
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
              Curated for LC79
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              The Complete Build
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Pre-filtered product blocks specifically for the Land Cruiser 79. No searching. Just building.
            </p>
          </div>

          {/* Stance & Stability */}
          {suspensionProducts.length > 0 && (
            <div className="mb-16">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-3xl font-black text-gray-900 mb-2">Stance & Stability</h3>
                  <p className="text-gray-600">Suspension systems engineered for the LC79</p>
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

          {/* Frontal Protection */}
          {armourProducts.length > 0 && (
            <div className="mb-16">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-3xl font-black text-gray-900 mb-2">Frontal Protection</h3>
                  <p className="text-gray-600">Bullbars and armour for maximum protection</p>
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

          {/* Rear Protection & Towing */}
          {recoveryProducts.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-3xl font-black text-gray-900 mb-2">Rear Protection & Towing</h3>
                  <p className="text-gray-600">Recovery gear and towing solutions</p>
                </div>
                <Link
                  href="/products?category=Recovery"
                  className="text-sm font-bold text-gray-900 hover:text-accent-400 transition-colors"
                >
                  View All Recovery →
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

      <Footer />
    </main>
  );
}

