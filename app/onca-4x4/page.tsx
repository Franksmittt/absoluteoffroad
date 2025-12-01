import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { getProductsByBrand } from '@/lib/data/products';

import { formatPrice } from '@/lib/utils/formatPrice';

const heroStats = [
  {
    label: 'ADR & SABS',
    body: 'Airbag-safe bumpers certified in Australia and South Africa specifically for Land Cruiser crash pulses.',
  },
  {
    label: 'LC Program',
    body: 'LC70/76/78/79 and LC300 platforms receive bespoke armour, carriers, racks and recovery hardware.',
  },
  {
    label: '22-Year Heritage',
    body: 'Kempton Park factory builds every bar, rack and slider in-house for agricultural, mining and expedition fleets.',
  },
  {
    label: 'Complete Ecosystem',
    body: 'Front protection, dual carriers, rock sliders, roof racks and recovery accessories engineered as one stack.',
  },
];

const sellingPoints = [
  {
    title: 'Safety-First Armour',
    bullets: [
      'Patented airbag crumple-zone brackets mimic Toyota crash pulse on LC70/76/78/79 and LC300.',
      'Every bar keeps winch mounts, bash plates, high-lift slots and rated recovery eyes aligned to the chassis.',
    ],
  },
  {
    title: 'Local Manufacturing',
    bullets: [
      'Laser cut, CNC folded and robot welded in Johannesburg with QA tailored to mining and safari contracts.',
      'Spare parts, powder coat touch-ups and support available locally—no 12-week import waits.',
    ],
  },
  {
    title: 'Bundled Recovery',
    bullets: [
      'Onca sliders, K9/Kinetic recovery kits and dual swing-away carriers complete the protection envelope.',
      'Pair with Wild Dog kinetic ropes and Tough Dog suspension for balanced builds.',
    ],
  },
];

const armourFamilies = [
  {
    title: 'LC70 / 79 Hunter Series',
    summary:
      'Extreme LDX and RFX-LD bull bars, side rails and jack-ready sliders built for kudu strikes, farm duties and mining fleets.',
    highlights: ['12,000 lb winch cradle', 'High-lift jack slots', 'Side rail tie-ins'],
  },
  {
    title: 'LC76 / 78 Expedition',
    summary:
      'Roof racks, safari cages, rear carriers and interior consoles tailored to Troopy and Station Wagon overlanders.',
    highlights: ['Full-length racks', 'Dual carrier rear bars', 'Safari seating + storage'],
  },
  {
    title: 'LC300 RXT Program',
    summary:
      'Radar-safe RXT bumpers, dual swing-away carriers and rock sliders that protect modern electronics without trimming.',
    highlights: ['Sensor relocation', 'Airflow vents', 'Low-profile styling'],
  },
  {
    title: 'LC200 Legacy Support',
    summary:
      'Proven bars, sliders and drawer systems keep the 200 Series relevant for long-haul expeditions and cross-border tours.',
    highlights: ['Drawer ecosystems', 'Rock slider protection', 'Long-term spares'],
  },
];

const curatedCombos = [
  {
    title: 'LC79 Hunter Pack',
    summary: 'Onca Hunter bumper + side rails, dual battery cradle, jack-ready sliders and Wild Dog recovery kit for borehole runs.',
    highlights: ['Airbag safe', 'Winch ready', 'Recovery bundle'],
    cta: { label: 'Plan LC79 armour', href: '/contact' },
  },
  {
    title: 'LC300 RXT Dual Carrier Tourer',
    summary:
      'Radar-safe RXT bar, dual swing-away rear carrier, Takla Platinum interiors and Tough Dog suspension for luxury Land Cruisers.',
    highlights: ['Radar friendly', 'Dual spare + jerry', 'Suspension matched'],
    cta: { label: 'Design LC300 package', href: '/contact' },
  },
  {
    title: 'LC76 Expedition Wagon',
    summary:
      'Extreme front bar, dual carrier rear bar, full-length expedition rack and storage consoles for LC76 station wagons.',
    highlights: ['Full roof coverage', '3.5T tow integration', 'Interior storage'],
    cta: { label: 'Plan LC76 expedition', href: '/contact' },
  },
  {
    title: 'LC78 Safari Fleet Spec',
    summary:
      'Bull bars, safari roll cages, K9 storage and kinetic recovery stacks purpose-built for Troopy game viewers and conservation fleets.',
    highlights: ['Safari seating', 'Kinetic recovery kit', 'Fleet logistics'],
    cta: { label: 'Equip LC78 fleet', href: '/contact' },
  },
];

export default function OncaPage() {
  const oncaProducts = getProductsByBrand('Onca');

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      <section className="relative overflow-hidden pt-32 pb-24 bg-gradient-to-br from-gray-900 via-brand-black to-gray-900 text-white">
        <div className="container mx-auto px-4 relative z-10">
          <p className="text-sm font-bold uppercase tracking-[0.4em] text-accent-400 mb-4">Safety-Certified Armour</p>
          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-5">Onca 4x4 South Africa</h1>
          <p className="text-xl text-white/80 max-w-3xl">
            ADR and SABS-certified armour, carriers, racks and sliders engineered in Johannesburg exclusively for Toyota Land Cruiser platforms that live full-time in the African bush.
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

      {oncaProducts.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-gray-500 mb-2">Live Products</p>
                <h3 className="text-3xl font-black text-gray-900">Onca 4x4 Products</h3>
              </div>
              <Link
                href="/products?category=Armour"
                className="px-5 py-3 rounded-full border border-gray-900 text-gray-900 font-bold hover:bg-gray-900 hover:text-white transition-colors"
              >
                View All Armour →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {oncaProducts.map((product) => (
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
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-gray-500 mb-4">Why Onca?</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Local Steel, Global Compliance</h2>
            <p className="text-lg text-gray-600">
              When your Land Cruiser is the difference between getting home or not, you choose armour that keeps airbags working, spares locally available and recovery points genuinely rated.
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
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-gray-500 mb-3">Toyota Platforms</p>
              <h2 className="text-4xl font-black text-gray-900 mb-4">Armour Families</h2>
              <p className="text-lg text-gray-600">
                Hunter, Expedition and RXT series armour cover everything from LC79 farm trucks to LC300 executive tourers—every paragraph below speaks Land Cruiser only.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {armourFamilies.map((family) => (
              <div key={family.title} className="rounded-3xl border border-gray-200 p-8 shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-gray-500">Program</p>
                  <span className="px-3 py-1 rounded-full bg-gray-900 text-white text-xs font-semibold">Local Favourite</span>
                </div>
                <h3 className="text-3xl font-black text-gray-900 mb-4">{family.title}</h3>
                <p className="text-gray-600 mb-6">{family.summary}</p>
                <ul className="space-y-2 text-sm text-gray-700 font-semibold">
                  {family.highlights.map((highlight) => (
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {curatedCombos.map((combo) => (
              <div key={combo.title} className="bg-gray-50 rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-lg transition-shadow flex flex-col">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-gray-500 mb-2">Toyota Armour Stack</p>
                <h3 className="text-xl font-black text-gray-900 mb-2">{combo.title}</h3>
                <p className="text-sm text-gray-600 flex-1">{combo.summary}</p>
                <ul className="space-y-2 text-sm text-gray-700 my 4">
                  {combo.highlights.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-gray-900" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href={combo.cta.href}
                  className="inline-flex items-center justify-between px-4 py-3 rounded-xl bg-gray-900 text-white font-bold hover:bg-gray-700 transition-colors"
                >
                  {combo.cta.label}
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
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-accent-400 mb-4">Need Drawings?</p>
              <h2 className="text-4xl font-black mb-4">Talk to the Onca Armour Desk</h2>
              <p className="text-white/80 leading-relaxed mb-6">
                Provide vehicle lists, payloads and compliance requirements—we’ll send drawings, lead times and logistics plans for single rigs or entire fleets.
              </p>
              <ul className="space-y-3 text-white/80">
                <li>• Confirm airbag certification and insurance documents for each chassis.</li>
                <li>• Align recovery gear, sliders and suspension upgrades with bar installs.</li>
                <li>• Coordinate fitment dates and installation logistics.</li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-accent-400 mb-3">Ready to Armour Up?</p>
              <h3 className="text-3xl font-black mb-4">Book an Onca Consultation</h3>
              <p className="text-white/80 mb-6">
                Receive a curated armour map, recovery bundle and freight plan tailored to your Land Cruiser build schedule.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-4 rounded-full bg-white text-gray-900 font-bold hover:bg-accent-400 hover:text-gray-900 transition-colors"
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
