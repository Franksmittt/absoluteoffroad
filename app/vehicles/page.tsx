import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { vehicleNavItems, partNavCategories } from '@/lib/data/navigation';
import { brandShowcase } from '@/lib/data/brands';

export default function VehiclesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <p className="text-sm font-bold text-gray-500 uppercase tracking-[0.3em] mb-4">
              Toyota-Led Fitment Strategy
            </p>
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
              Platforms We Build Every <span className="text-gray-700">Week</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              Start with the Land Cruiser family—then layer in Hilux, Prado and supporting fleets. Each card below links to the exact armour, suspension and protection stacks we’ve validated on those chassis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {vehicleNavItems.map((vehicle) => (
              <Link
                key={vehicle.name}
                href={vehicle.href}
                className="bg-white rounded-3xl border border-gray-200 p-8 shadow-lg hover:shadow-2xl transition-all"
              >
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent-400 mb-2">{vehicle.badge}</p>
                <h2 className="text-2xl font-black text-gray-900 mb-3">{vehicle.name}</h2>
                <p className="text-sm text-gray-600 mb-4">{vehicle.summary}</p>
                <span className="inline-flex items-center gap-2 text-sm font-bold text-gray-900">
                  {vehicle.cta} →
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-gray-500 mb-4">
              Part Families
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Curated Toyota Upgrade Paths</h2>
            <p className="text-lg text-gray-600">
              Armour, suspension, interior protection and rear systems organised the way our build team scopes projects—mix and match bundles to match payload, compliance and comfort targets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            {partNavCategories.map((category) => (
              <div key={category.name} className="bg-white rounded-3xl border border-gray-200 p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent-400">{category.name}</p>
                    <h3 className="text-2xl font-black text-gray-900 mt-2">{category.name} Stack</h3>
                  </div>
                  <Link href={category.href} className="text-sm font-bold text-gray-900">
                    View →
                  </Link>
                </div>
                <p className="text-sm text-gray-600 mb-4">{category.summary}</p>
                <ul className="space-y-2 text-sm text-gray-700">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-gray-900" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-gray-500 mb-4">
              Brand Ecosystem
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Strategy Partners We Trust</h2>
            <p className="text-lg text-gray-600">
              Each brand below anchors a portion of our Toyota-first roadmap—from suspension science to interior preservation and ADR armour.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {brandShowcase.map((brand) => (
              <Link
                key={brand.slug}
                href={brand.href}
                className="bg-white rounded-2xl border border-gray-200 p-5 shadow-lg hover:shadow-2xl transition-all"
              >
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent-400 mb-2">Brand Store</p>
                <h3 className="text-2xl font-black text-gray-900">{brand.name}</h3>
                <p className="text-sm text-gray-600 mt-2">{brand.tagline}</p>
                <p className="text-xs text-gray-500 mt-3">{brand.focus}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

