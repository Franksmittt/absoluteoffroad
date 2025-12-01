import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import TrustSignalBar from '@/components/Trust/TrustSignalBar';
import { getAllProducts } from '@/lib/data/products';

import { formatPrice } from '@/lib/utils/formatPrice';

// Filter products for Land Cruiser 76 (Wagon)
function getLC76Products() {
  const allProducts = getAllProducts();
  return allProducts.filter((product) =>
    product.fitment.some(
      (fit) =>
        (fit.make === 'Toyota' && fit.model === 'Land Cruiser 70') ||
        (fit.make === 'Toyota' && fit.model === 'Land Cruiser 76') ||
        (fit.variants && fit.variants.includes('76 Wagon'))
    )
  );
}

// Get products by category for LC76
function getLC76ProductsByCategory(category: string) {
  return getLC76Products().filter((p) => p.category === category);
}

export default function LandCruiser76Page() {
  const suspensionProducts = getLC76ProductsByCategory('Suspension').slice(0, 4);
  const armourProducts = getLC76ProductsByCategory('Armour').slice(0, 4);
  const interiorProducts = getLC76ProductsByCategory('Interior').slice(0, 4);

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section: "Compact. Capable. Classic." */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1486663845017-3eedaa78617f?w=1920&q=80"
            alt="Land Cruiser 76 climbing rocky terrain"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/85 via-gray-900/75 to-gray-900/90" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-accent-400 mb-4">
              The Purebred Station Wagon
            </p>
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight" style={{ fontFamily: 'Bebas Neue, Impact, sans-serif' }}>
              The Land Cruiser 76:<br />
              The Last Real Station Wagon
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Five seats. Solid axles. Zero compromise. The heavy-duty legend built for the family that takes the road less traveled.
            </p>
          </div>
        </div>
      </section>

      {/* Heritage & Cult Status Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-accent-400 mb-4">
                The Heritage
              </p>
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                Mechanical Certainty
              </h2>
            </div>

            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-xl text-white/90 leading-relaxed mb-6">
                In a world of independent suspension and computerized terrain response, the 76 Series stands alone. It is <strong className="text-accent-400">mechanical certainty</strong> in a digital world.
              </p>

              <p className="text-lg text-white/80 leading-relaxed mb-6">
                The 76 combines the heavy-duty chassis of the 79 with a shorter wheelbase, making it the most agile and capable 70 Series on technical, rocky 4x4 trails. While the Prado and LC300 offer comfort, the 76 offers <em className="text-accent-400">capability</em>.
              </p>

              <p className="text-lg text-white/80 leading-relaxed mb-8">
                76 owners hold onto these vehicles for decades. It's not just a car—it's an <strong className="text-white">heirloom</strong>. When you buy a 76, you're buying the last real station wagon. The one that doesn't apologize for being tough.
              </p>

              <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-black text-accent-400 mb-4">The "Shorty" Advantage</h3>
                <p className="text-white/80 leading-relaxed">
                  That shorter wheelbase isn't a compromise—it's the feature. It's what lets you navigate tight switchbacks, squeeze through narrow tracks, and tackle obstacles that would stop longer vehicles. The 76 is compact enough for technical trails, tough enough for forever.
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
                The 76 is infamous for having the harshest ride of the lot. This is your biggest selling point.
              </p>
            </div>

            {/* The Problem: Crashy Ride */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 mb-8 shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">⚠️</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-black text-gray-900 mb-2">The Problem: The "Crashy" Ride</h3>
                  <p className="text-lg text-gray-700 font-semibold mb-3">
                    "Because it uses a shorter leaf spring pack than the pickup, the stock 76 can be punishing on corrugated dirt roads. The rear end tends to 'skip' rather than absorb."
                  </p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                The passenger cabin sits directly over the rear axle, and those shorter leaf springs don't have the travel to soak up corrugations. The result? A ride that's harsh enough to make passengers question your life choices. We don't just lift it; we refine it. You need a suspension tune that balances load-carrying with passenger comfort.
              </p>
              <div className="bg-accent-50 rounded-xl p-6 border border-accent-200">
                <p className="text-gray-900 font-bold mb-3">The Solution:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link href="/efs-suspension" className="bg-white rounded-xl p-4 border border-gray-200 hover:border-accent-400 transition-colors">
                    <p className="font-black text-gray-900 mb-1">EFS Suspension</p>
                    <p className="text-sm text-gray-600">Comfort-valved shocks specifically tuned for ride quality</p>
                  </Link>
                  <Link href="/tough-dog-suspension" className="bg-white rounded-xl p-4 border border-gray-200 hover:border-accent-400 transition-colors">
                    <p className="font-black text-gray-900 mb-1">Tough Dog Suspension</p>
                    <p className="text-sm text-gray-600">Adjustable shocks to dial in the perfect ride quality</p>
                  </Link>
                </div>
              </div>
            </div>

            {/* The Problem: Rear Protection & Spare Wheel */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 mb-8 shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">⚠️</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-black text-gray-900 mb-2">The Problem: Rear Protection & Spare Wheel</h3>
                  <p className="text-lg text-gray-700 font-semibold mb-3">
                    "The heavy spare wheel on the rear door eventually cracks the hinges, and the stock rear bumper is just plastic."
                  </p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                That 35-inch spare tire hanging on the rear door is a recipe for disaster. Over time, the weight cracks the door hinges, and the plastic rear bumper offers zero protection. Take the weight off the door and protect the rear quarters with proper steel.
              </p>
              <div className="bg-accent-50 rounded-xl p-6 border border-accent-200">
                <p className="text-gray-900 font-bold mb-3">The Solution:</p>
                <Link href="/onca-4x4" className="bg-white rounded-xl p-4 border border-gray-200 hover:border-accent-400 transition-colors block">
                  <p className="font-black text-gray-900 mb-1">Onca 4x4</p>
                  <p className="text-sm text-gray-600">Rear replacement bumpers with swing-away spare wheel carriers</p>
                </Link>
              </div>
            </div>

            {/* The Problem: Interior Echo Chamber */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 mb-8 shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">⚠️</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-black text-gray-900 mb-2">The Problem: The Interior "Echo Chamber"</h3>
                  <p className="text-lg text-gray-700 font-semibold mb-3">
                    "It's a big, boxy acoustic chamber. Road noise and heat soak are standard features."
                  </p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                The 76's boxy shape creates an acoustic echo chamber that amplifies every road noise. Add heat soak from the metal floor, and long trips become exhausting. Protect the interior and dampen the sound to make it livable for family adventures.
              </p>
              <div className="bg-accent-50 rounded-xl p-6 border border-accent-200">
                <p className="text-gray-900 font-bold mb-3">The Solution:</p>
                <Link href="/takla" className="bg-white rounded-xl p-4 border border-gray-200 hover:border-accent-400 transition-colors block">
                  <p className="font-black text-gray-900 mb-1">Takla 4x4</p>
                  <p className="text-sm text-gray-600">Signature floor liners and seat covers to add insulation and premium feel</p>
                </Link>
              </div>
            </div>

            {/* The Problem: Range Anxiety */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">⚠️</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-black text-gray-900 mb-2">The Problem: Range Anxiety</h3>
                  <p className="text-lg text-gray-700 font-semibold mb-3">
                    "Unlike the 79 and 78, the 76 often comes with a smaller fuel tank capacity relative to its touring ambitions."
                  </p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                When you're planning to explore remote areas, fuel capacity matters. The 76's standard tank can limit your range. Extend your range for the long haul with additional fuel capacity.
              </p>
              <div className="bg-accent-50 rounded-xl p-6 border border-accent-200">
                <p className="text-gray-900 font-bold mb-3">The Solution:</p>
                <p className="text-sm text-gray-600 mb-4">
                  Long-range fuel tanks and Jerry Can holders on rear bumpers extend your range for serious touring.
                </p>
                <Link href="/products?category=Recovery" className="inline-block px-4 py-2 bg-white rounded-lg border border-gray-200 hover:border-accent-400 transition-colors text-sm font-bold text-gray-900">
                  View Fuel Solutions →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Build: Family Hauler to Trail Warrior */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-accent-400 mb-4">
                The Build
              </p>
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                Family Hauler to Trail Warrior
              </h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                Monday to Friday, it's a wagon. Friday to Sunday, it's a tank. We build it for both.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-black text-white mb-4">State A: The School Run</h3>
                <div className="aspect-video bg-gray-800 rounded-xl mb-4 flex items-center justify-center">
                  <p className="text-white/50 text-sm">Clean 76 with stock alloy wheels and side steps</p>
                </div>
                <ul className="space-y-3 text-white/70">
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 mt-1">•</span>
                    <span>Stock suspension and wheels</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 mt-1">•</span>
                    <span>Standard rear door spare carrier</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 mt-1">•</span>
                    <span>Basic interior protection</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 mt-1">•</span>
                    <span>Comfortable for daily driving</span>
                  </li>
                </ul>
              </div>

              <div className="bg-accent-400/10 rounded-2xl p-8 border border-accent-400/30">
                <h3 className="text-2xl font-black text-accent-400 mb-4">State B: The Richtersveld</h3>
                <div className="aspect-video bg-gray-800 rounded-xl mb-4 flex items-center justify-center">
                  <p className="text-white/50 text-sm">Lifted, roof rack loaded, dual rear wheel carriers, mud terrains</p>
                </div>
                <ul className="space-y-3 text-white/90">
                  <li className="flex items-start gap-3">
                    <span className="text-accent-400 mt-1">✓</span>
                    <span>Refined suspension for comfort and capability</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-400 mt-1">✓</span>
                    <span>Swing-away dual wheel carriers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-400 mt-1">✓</span>
                    <span>Full interior protection and organization</span>
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

      {/* Trust Signal Bar */}
      <TrustSignalBar />

      {/* Curated Catalog */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-gray-500 mb-4">
              Curated for LC76
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              The Complete Build
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Pre-filtered product blocks specifically for the Land Cruiser 76 Wagon. Built for both worlds.
            </p>
          </div>

          {/* Ride Comfort & Lift */}
          {suspensionProducts.length > 0 && (
            <div className="mb-16">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-3xl font-black text-gray-900 mb-2">Ride Comfort & Lift</h3>
                  <p className="text-gray-600">Suspension focused on ride quality, not just heavy load</p>
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

          {/* Complete Protection */}
          {armourProducts.length > 0 && (
            <div className="mb-16">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-3xl font-black text-gray-900 mb-2">Complete Protection</h3>
                  <p className="text-gray-600">Front bullbars AND rear bumpers/wheel carriers</p>
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

          {/* Interior & Storage */}
          {interiorProducts.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-3xl font-black text-gray-900 mb-2">Interior & Storage</h3>
                  <p className="text-gray-600">Consoles, seat covers, cargo barriers</p>
                </div>
                <Link
                  href="/products?category=Interior"
                  className="text-sm font-bold text-gray-900 hover:text-accent-400 transition-colors"
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
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Ready to Refine Your 76?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              The 76 is a special vehicle that deserves special attention. Let our specialists help you balance comfort and capability for the perfect family adventure rig.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-accent-400 text-gray-900 rounded-xl font-black text-lg hover:bg-accent-300 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Book a Consultation
              </Link>
              <Link
                href="/vehicles"
                className="px-8 py-4 bg-gray-800 text-white rounded-xl font-black text-lg hover:bg-gray-700 transition-all border-2 border-white/30"
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

