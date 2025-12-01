import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { getProductsByBrand } from '@/lib/data/products';

import { formatPrice } from '@/lib/utils/formatPrice';

const heroStats = [
  { label: 'Hunter & K9 Series', body: 'Locally-fabricated bullbars, bumpers and cages for hunting, safari and agricultural fleets.' },
  { label: 'Kinetic Recovery', body: 'Rated ropes, soft shackles and snatch blocks designed for heavy Toyota extractions.' },
  { label: 'Made in SA', body: 'Short lead times, spares availability and powder-coat support from Gauteng workshops.' },
  { label: 'Toyota & Safari Focus', body: 'LC70, LC79, Hilux, Fortuner and converted game-viewer platforms in constant production.' },
];

const armourStacks = [
  {
    title: 'Land Cruiser 79 Hunter Series',
    summary: 'Five-post bumpers with wrap-around brush rails, high-lift jacking points and integrated winch cradles for herd protection and borehole duty.',
    highlights: ['Winch ready', 'Rated recovery', 'Brush rail integration'],
  },
  {
    title: 'Safari Game Viewer Conversions',
    summary: 'Full roll-cage systems, door deletes, hunting racks and seating layouts built on Hilux and Land Cruiser platforms.',
    highlights: ['Roll cage certified', 'Custom seating', 'K9/weapon storage'],
  },
  {
    title: 'Hilux / Fortuner Lifestyle Armour',
    summary: 'Slimline bumpers, sliders and skid plates that keep modern Toyotas protected without losing daily drivability.',
    highlights: ['ADR friendly', 'LED + accessory mounts', 'Rock slider steps'],
  },
  {
    title: 'Recovery & Safety Kits',
    summary: 'Kinetic ropes, soft shackles, bridles and anchor plates rated for heavy Cruiser extractions—and packaged for lodge guides.',
    highlights: ['11T & 14T ratings', 'Soft shackles', 'Vehicle-specific anchor points'],
  },
];

const curatedBuilds = [
  {
    title: 'LC79 Herd Protection Stack',
    summary: 'Hunter bullbar, brush rails, rock sliders, Takla Signature interiors and kinetic recovery bundle for livestock farmers.',
    highlights: ['Animal strike ready', 'Winch + recovery integrated', 'Interior preservation'],
    cta: { label: 'Plan LC79 Hunter build', href: '/contact' },
  },
  {
    title: 'Safari Game Viewer',
    summary: 'Full cage conversion, raised seating, K9 boxes, Wild Dog recovery kit and Takla seat protection for lodge fleets.',
    highlights: ['Custom seating layout', 'Safety harness ready', 'Recovery gear packaged'],
    cta: { label: 'Book safari spec consult', href: '/contact' },
  },
  {
    title: 'Hilux Lifestyle Armour',
    summary: 'Slimline bumper, sliders, skid plate, Lightforce lighting and Opposite Lock recovery bag for dual-purpose double cabs.',
    highlights: ['Lightweight protection', 'Lighting integration', 'Weekend-ready recovery'],
    cta: { label: 'Configure Hilux armour', href: '/contact' },
  },
];

export default function WildDogPage() {
  const wildDogProducts = getProductsByBrand('Wild Dog');

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      <section className="relative overflow-hidden pt-32 pb-24 bg-gradient-to-br from-gray-900 via-brand-black to-gray-900 text-white">
        <div className="container mx-auto px-4 relative z-10">
          <p className="text-sm font-bold uppercase tracking-[0.4em] text-accent-400 mb-4">Built for Safari & Farm Duty</p>
          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-5">Wild Dog 4x4 South Africa</h1>
          <p className="text-xl text-white/80 max-w-3xl">
            Locally manufactured armour and kinetic recovery gear trusted by conservation crews, safari lodges and Toyota-loving farmers.
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

      {wildDogProducts.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-gray-500 mb-2">Live Products</p>
                <h3 className="text-3xl font-black text-gray-900">Wild Dog 4x4 Products</h3>
              </div>
              <Link
                href="/products?category=Recovery"
                className="px-5 py-3 rounded-full border border-gray-900 text-gray-900 font-bold hover:bg-gray-900 hover:text-white transition-colors"
              >
                View All Recovery →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {wildDogProducts.map((product) => (
                <Link
                  key={product.id}
                  href={`/products/${product.slug}`}
                  className="bg-gray-50 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-shadow flex flex-col overflow-hidden"
                >
                  <div className="relative h-56 overflow-hidden bg-gray-100">
                    <Image
                      src={product.images && product.images.length > 0 ? product.images[0] : '/placeholder-product.jpg'}
                      alt={product.name}
                      fill
                      className="object-cover"
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
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-gray-500 mb-4">Toyota Armour Families</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Hunter, K9 and Recovery Ecosystems</h2>
            <p className="text-lg text-gray-600">
              Whether you’re protecting livestock, running guests through Kruger or building a rugged Hilux, Wild Dog has a locally built solution.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {armourStacks.map((stack) => (
              <div key={stack.title} className="rounded-3xl border border-gray-200 p-8 shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-gray-500">Program</p>
                  <span className="px-3 py-1 rounded-full bg-gray-900 text-white text-xs font-semibold">Made in SA</span>
                </div>
                <h3 className="text-3xl font-black text-gray-900 mb-4">{stack.title}</h3>
                <p className="text-gray-600 mb-6">{stack.summary}</p>
                <ul className="space-y-2 text-sm text-gray-700 font-semibold">
                  {stack.highlights.map((highlight) => (
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {curatedBuilds.map((build) => (
              <div key={build.title} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow flex flex-col">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-gray-500 mb-2">Toyota Stack</p>
                <h3 className="text-xl font-black text-gray-900 mb-2">{build.title}</h3>
                <p className="text-sm text-gray-600 flex-1">{build.summary}</p>
                <ul className="space-y-2 text-sm text-gray-700 my-4">
                  {build.highlights.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-gray-900" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href={build.cta.href}
                  className="inline-flex items-center justify-between px-4 py-3 rounded-xl bg-gray-900 text-white font-bold hover:bg-gray-700 transition-colors"
                >
                  {build.cta.label}
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
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-accent-400 mb-4">Need Custom Work?</p>
              <h2 className="text-4xl font-black mb-4">Talk to the Wild Dog Fabrication Desk</h2>
              <p className="text-white/80 leading-relaxed mb-6">
                Provide vehicle lists, weapon storage needs or guest seating layouts—we’ll craft CAD drawings, lead times and freight plans from our South African factory.
              </p>
              <ul className="space-y-3 text-white/80">
                <li>• Confirm safari safety regulations, roll cage specs and seat belt integration.</li>
                <li>• Bundle armour with Tough Dog suspension and Takla interiors for complete builds.</li>
                <li>• Coordinate mobile fitment teams or ship direct to your workshop.</li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-accent-400 mb-3">Ready to Outfit?</p>
              <h3 className="text-3xl font-black mb-4">Book a Wild Dog Consultation</h3>
              <p className="text-white/80 mb-6">
                Receive a complete armour + recovery plan tailored to your Land Cruiser, Hilux or safari fleet.
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
