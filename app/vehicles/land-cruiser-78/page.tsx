import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import TrustSignalBar from '@/components/Trust/TrustSignalBar';
import { getAllProducts } from '@/lib/data/products';

import { formatPrice } from '@/lib/utils/formatPrice';

// Filter products for Land Cruiser 78 (Troopy)
function getLC78Products() {
  const allProducts = getAllProducts();
  return allProducts.filter((product) =>
    product.fitment.some(
      (fit) =>
        (fit.make === 'Toyota' && fit.model === 'Land Cruiser 70') ||
        (fit.make === 'Toyota' && fit.model === 'Land Cruiser 78') ||
        (fit.variants && fit.variants.includes('78 Troopy'))
    )
  );
}

// Get products by category for LC78
function getLC78ProductsByCategory(category: string) {
  return getLC78Products().filter((p) => p.category === category);
}

export default function LandCruiser78Page() {
  const suspensionProducts = getLC78ProductsByCategory('Suspension').slice(0, 4);
  const interiorProducts = getLC78ProductsByCategory('Interior').slice(0, 4);
  const armourProducts = getLC78ProductsByCategory('Armour').slice(0, 4);
  const recoveryProducts = getLC78ProductsByCategory('Recovery').slice(0, 4);

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section: "Go Further. Stay Longer." */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1920&q=80"
            alt="Land Cruiser 78 Troopy in vast landscape"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-black/85 via-brand-black/75 to-brand-black/90" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-accent-400 mb-4">
              The Ultimate Expedition Vessel
            </p>
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight" style={{ fontFamily: 'Bebas Neue, Impact, sans-serif' }}>
              The Land Cruiser 78:<br />
              Built for the Horizon
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              The iconic Troop Carrier. A fortress of solitude for the serious overlander. We build them to take you there and bring you back.
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
                The Tin Tent
              </h2>
            </div>

            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-xl text-white/90 leading-relaxed mb-6">
                The Troopy is a distinct breed. It is the direct descendant of the bush taxis and ambulances that opened up Africa. While the 79 carries cargo, the 78 carries <strong className="text-accent-400">life</strong>.
              </p>

              <p className="text-lg text-white/80 leading-relaxed mb-6">
                The unique 3-door configuration and cavernous internal volume make it the only vehicle in the lineup where you sleep <em className="text-accent-400">inside</em> the machine, not just on top of it. This isn't a vehicle you drive to a campsite—it <strong className="text-white">is</strong> the campsite.
              </p>

              <p className="text-lg text-white/80 leading-relaxed mb-8">
                Owning a 78 is a lifestyle choice. It sacrifices rear doors for storage capacity and structural rigidity, making it the ultimate long-distance tourer. When you're planning to cross continents, you don't need convenience—you need <strong className="text-accent-400">capability</strong>.
              </p>

              <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-black text-accent-400 mb-4">The Exclusivity</h3>
                <p className="text-white/80 leading-relaxed">
                  The 78 Series isn't for everyone. It's for those who measure trips in weeks, not days. Who value space over speed, durability over comfort, and self-sufficiency over convenience. This is the vehicle that turns "I wish I could" into "I'm going to."
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
                We address the specific physics problems of the 78 Series.
              </p>
            </div>

            {/* The Problem: Troopy Sway */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 mb-8 shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">⚠️</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-black text-gray-900 mb-2">The Problem: Troopy Sway</h3>
                  <p className="text-lg text-gray-700 font-semibold mb-3">
                    "With a high roofline and heavy expedition gear, the stock 78 can feel unstable and 'boaty' in corners."
                  </p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                The 78's tall profile and heavy internal loads create a high center of gravity. Add a roof rack, water tanks, and a fully fitted interior, and you've got a vehicle that sways like a ship in a storm. You need a suspension setup designed for Constant Load to stabilize the body roll and keep you planted when the going gets rough.
              </p>
              <div className="bg-primary-50 rounded-xl p-6 border border-primary-200">
                <p className="text-gray-900 font-bold mb-3">The Solution:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link href="/efs-suspension" className="bg-white rounded-xl p-4 border border-gray-200 hover:border-primary-400 transition-colors">
                    <p className="font-black text-gray-900 mb-1">EFS Suspension</p>
                    <p className="text-sm text-gray-600">GVM upgrade capabilities for fully rigged campers</p>
                  </Link>
                  <Link href="/tough-dog-suspension" className="bg-white rounded-xl p-4 border border-gray-200 hover:border-primary-400 transition-colors">
                    <p className="font-black text-gray-900 mb-1">Tough Dog Suspension</p>
                    <p className="text-sm text-gray-600">Heavy-duty constant load suspension systems</p>
                  </Link>
                </div>
              </div>
            </div>

            {/* The Problem: Organization */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 mb-8 shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">⚠️</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-black text-gray-900 mb-2">The Problem: Organization</h3>
                  <p className="text-lg text-gray-700 font-semibold mb-3">
                    "The 78 offers massive space, but zero organization. Without a system, it's just a metal cave."
                  </p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                That cavernous interior is both a blessing and a curse. Without proper organization, you're digging through gear to find your stove, your tools, your spare parts. Turn the chaos into a kitchen, bedroom, and workshop with systems designed for the Troopy's unique long cargo bay.
              </p>
              <div className="bg-primary-50 rounded-xl p-6 border border-primary-200">
                <p className="text-gray-900 font-bold mb-3">The Solution:</p>
                <Link href="/opposite-lock" className="bg-white rounded-xl p-4 border border-gray-200 hover:border-primary-400 transition-colors block">
                  <p className="font-black text-gray-900 mb-1">Opposite Lock</p>
                  <p className="text-sm text-gray-600">Drawer systems and fridge slides that maximize the unique long cargo bay</p>
                </Link>
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
                    "You are traveling to places where help is days away. A radiator puncture from a branch ends the trip."
                  </p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                When you're 500 kilometers from the nearest town, a damaged radiator isn't an inconvenience—it's a trip-ender. Frontal protection is non-negotiable for remote travel. You need armor that can take a hit and keep going.
              </p>
              <div className="bg-primary-50 rounded-xl p-6 border border-primary-200">
                <p className="text-gray-900 font-bold mb-3">The Solution:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link href="/mcc-4x4" className="bg-white rounded-xl p-4 border border-gray-200 hover:border-primary-400 transition-colors">
                    <p className="font-black text-gray-900 mb-1">MCC 4x4</p>
                    <p className="text-sm text-gray-600">Heavy-duty bullbars for maximum protection</p>
                  </Link>
                  <Link href="/onca-4x4" className="bg-white rounded-xl p-4 border border-gray-200 hover:border-primary-400 transition-colors">
                    <p className="font-black text-gray-900 mb-1">Onca 4x4</p>
                    <p className="text-sm text-gray-600">ADR-compliant protection systems</p>
                  </Link>
                </div>
              </div>
            </div>

            {/* The Problem: Interior Comfort */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">⚠️</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-black text-gray-900 mb-2">The Problem: Interior Comfort</h3>
                  <p className="text-lg text-gray-700 font-semibold mb-3">
                    "The 70 series is notoriously loud and hot inside the cabin."
                  </p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                The 78's metal interior amplifies road noise and heat. After hours on corrugated roads, the constant drone becomes exhausting. You need insulation and protection that makes the cabin livable for long-distance travel.
              </p>
              <div className="bg-primary-50 rounded-xl p-6 border border-primary-200">
                <p className="text-gray-900 font-bold mb-3">The Solution:</p>
                <Link href="/takla" className="bg-white rounded-xl p-4 border border-gray-200 hover:border-primary-400 transition-colors block">
                  <p className="font-black text-gray-900 mb-1">Takla 4x4</p>
                  <p className="text-sm text-gray-600">Load liners and floor mats to insulate against heat and noise, and protect the floor from mud</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Transformation: Before/After */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-accent-400 mb-4">
                The Transformation
              </p>
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                The Cargo Bay Transformation
              </h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                From empty shell to expedition home. We define the space.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-black text-white mb-4">Before: The Cave</h3>
                <div className="aspect-video bg-gray-800 rounded-xl mb-4 flex items-center justify-center">
                  <p className="text-white/50 text-sm">Empty, painted metal floor of a stock Troopy</p>
                </div>
                <ul className="space-y-3 text-white/70">
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>Empty metal floor with no organization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>Gear scattered and hard to access</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>No defined spaces for cooking, sleeping, storage</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>Heat and noise from bare metal</span>
                  </li>
                </ul>
              </div>

              <div className="bg-primary-500/10 rounded-2xl p-8 border border-primary-400/30">
                <h3 className="text-2xl font-black text-primary-400 mb-4">After: The Home</h3>
                <div className="aspect-video bg-gray-800 rounded-xl mb-4 flex items-center justify-center">
                  <p className="text-white/50 text-sm">Fully fitted interior with drawers, fridge, and sound deadening</p>
                </div>
                <ul className="space-y-3 text-white/90">
                  <li className="flex items-start gap-3">
                    <span className="text-primary-400 mt-1">✓</span>
                    <span>Organized drawer systems for tools and gear</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary-400 mt-1">✓</span>
                    <span>Integrated fridge slide and kitchen setup</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary-400 mt-1">✓</span>
                    <span>Defined spaces for every function</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary-400 mt-1">✓</span>
                    <span>Insulated and sound-deadened for comfort</span>
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
              Curated for LC78
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              The Complete Expedition Build
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Pre-filtered product blocks specifically for the Land Cruiser 78 Troopy. Built for the horizon.
            </p>
          </div>

          {/* Load & Lift */}
          {suspensionProducts.length > 0 && (
            <div className="mb-16">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-3xl font-black text-gray-900 mb-2">Load & Lift</h3>
                  <p className="text-gray-600">Suspension focused on GVM upgrades for fully rigged campers</p>
                </div>
                <Link
                  href="/products?category=Suspension"
                  className="text-sm font-bold text-primary-600 hover:text-primary-700 transition-colors"
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
                      <h4 className="text-base font-black text-gray-900 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
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

          {/* Interior Systems */}
          {interiorProducts.length > 0 && (
            <div className="mb-16">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-3xl font-black text-gray-900 mb-2">Interior Systems</h3>
                  <p className="text-gray-600">Drawers, consoles, and sound proofing for expedition comfort</p>
                </div>
                <Link
                  href="/products?category=Interior"
                  className="text-sm font-bold text-primary-600 hover:text-primary-700 transition-colors"
                >
                  View All Interior →
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {interiorProducts.map((product) => (
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
                      <h4 className="text-base font-black text-gray-900 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
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

          {/* Armour & Recovery */}
          {armourProducts.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-3xl font-black text-gray-900 mb-2">Armour & Recovery</h3>
                  <p className="text-gray-600">Bullbars, winches, and recovery gear for remote travel</p>
                </div>
                <Link
                  href="/products?category=Armour"
                  className="text-sm font-bold text-primary-600 hover:text-primary-700 transition-colors"
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
                      <h4 className="text-base font-black text-gray-900 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
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
      <section className="py-20 bg-primary-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Ready to Build Your Expedition Home?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Camper conversions are complex installs. Let our specialists help you plan the perfect 78 Series build for your expedition needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-white text-primary-600 rounded-xl font-black text-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Book a Consultation
              </Link>
              <Link
                href="/vehicles"
                className="px-8 py-4 bg-primary-700 text-white rounded-xl font-black text-lg hover:bg-primary-800 transition-all border-2 border-white/30"
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

