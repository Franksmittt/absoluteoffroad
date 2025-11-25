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
  { label: 'ADR & SABS', body: 'Crash pulse engineered Post, Rocker and Pegasus bars keep airbags and insurers happy.' },
  { label: 'Toyota Focused', body: 'Land Cruiser 70/79, LC300, Hilux and Prado templates stocked in South Africa.' },
  { label: 'Pegasus Alloy', body: 'Radar-safe alloy bars halve front axle weight on LC300 and Ranger T9 builds.' },
  { label: 'Winch & Tow Ready', body: 'Integrated winch cradles, recovery points and heavy-duty tow systems shipped with every kit.' },
];

const sellingPoints = [
  {
    title: 'Value-Premium Armour',
    bullets: [
      'Post Type (Falcon) bumpers deliver Tier‑1 engineering at 15–20% lower price points—perfect for fleet roll-outs.',
      'Split pans, five uprights and winch cradles keep Hilux, D‑Max and LC70 fleets alive after kudu strikes.',
    ],
  },
  {
    title: 'Pegasus for Tech Platforms',
    bullets: [
      'Alloy Pegasus bars accommodate LC300/LX and Ranger T9 radar, cameras, parking sensors and aero shutters.',
      'No-cut installs preserve resale value on million-rand Cruisers while keeping ADR compliance intact.',
    ],
  },
  {
    title: 'Rear & Side Ecosystem',
    bullets: [
      'Rocker rear bars integrate heavy tow ratings, reverse LEDs and recovery points for Hilux/Ranger fleets.',
      'Jack/dual-wheel carriers and side rails create full wrap protection for overlanding Land Cruisers.',
    ],
  },
];

const vehicleFocus = [
  {
    name: 'Land Cruiser 70 / 79',
    summary: 'Post Type bullbars, side rails and Jack Bars that shrug off kudu strikes and mining duties.',
    highlights: ['12,000 lb winch-ready', 'Dual aerial mounts', 'Integrated bash plates'],
  },
  {
    name: 'Land Cruiser 300 / Prado 250',
    summary: 'Pegasus alloy bumpers, dual wheel carriers and sensor relocation hardware for ADAS-packed Cruisers.',
    highlights: ['Radar + ACC friendly', 'Minimal trimming', 'Dual spare + jerry arms'],
  },
  {
    name: 'Hilux GD6 / Fortuner',
    summary: 'Rocker triple-loop bumpers, Rocker rear bars and twisted steps built for lifestyle + commercial dual use.',
    highlights: ['Integrated DRLs', 'Tow-ready rear bars', 'Rock slider side steps'],
  },
  {
    name: 'Ranger T9 / Raptor',
    summary: 'Pegasus alloy for Next-Gen Ranger plus dedicated Raptor width kits with Tough Dog suspension pairings.',
    highlights: ['Lightweight alloy', 'Camera safe hoops', 'Raptor-specific width'],
  },
];

const skuHighlights = [
  { sku: 'Post Type (Falcon) Bar', detail: 'Five uprights, split pan airflow and winch cradle for LC70, Hilux and D‑Max fleets.' },
  { sku: 'Rocker Triple-Loop', detail: 'Faceted wings, approach-angle friendly, with LED fogs and rated recovery points.' },
  { sku: 'Pegasus Alloy Bumper', detail: 'Radar-safe alloy construction for LC300 and Ranger T9 that halves front axle load.' },
  { sku: 'Rocker Rear Bar', detail: 'Integrated tow hitch, recovery shackles and LED reverse lighting for Hilux/Ranger.' },
  { sku: 'Dual Wheel Carriers', detail: 'Swing-away arms for LC300/LC100 moving spares and jerry cans off roof racks.' },
  { sku: 'Side Rails & Twisted Steps', detail: 'Continuous flank protection plus Hi-Lift jack ready sliders for LC70 and Hilux.' },
];

const curatedBuilds = [
  {
    title: 'LC79 Overland Armour Stack',
    summary: 'Post Type front + brush rails, Jack Bar rear, dual battery cradle and Takla interior package keep farm rigs unbreakable.',
    highlights: ['ADR compliant', 'Winch + recovery ready', 'Takla integration'],
    cta: { label: 'Plan LC79 armour', href: '/contact' },
  },
  {
    title: 'LC300 Pegasus Touring',
    summary: 'Pegasus alloy bumper, dual carrier rear, Tough Dog Ralph shocks and Takla Platinum seats for luxury overlanders.',
    highlights: ['Radar safe', 'Dual spare ready', 'Foam Cell Pro pairing'],
    cta: { label: 'Build LC300 concept', href: '/contact' },
  },
  {
    title: 'Hilux Legend Dual-Life Kit',
    summary: 'Rocker front/rear bars, twisted steps, Wild Dog recovery and EFS suspension to balance city commutes with weekend mud.',
    highlights: ['Canopy-ready tow rating', 'Rated recovery', 'Side protection'],
    cta: { label: 'Configure Hilux armour', href: '/contact' },
  },
  {
    title: 'Ranger T9 Pegasus Alloy',
    summary: 'Alloy Pegasus bar, Tough Dog coils, Opposite Lock lighting and Takla interiors for radar-heavy Next-Gen Rangers.',
    highlights: ['33" tyre friendly', 'Sensor relocation kit', 'Lightweight front axle load'],
    cta: { label: 'Spec Ranger package', href: '/contact' },
  },
];

const logisticsNotes = [
  { title: 'ADR69 / ADR72 Tested', detail: 'Bars retain OEM crash pulse so insurers, fleets and safety officers approve installs instantly.' },
  { title: 'Sensor Integration', detail: 'Pegasus and Rocker Low Loop bars include radar, camera and parking sensor relocation hardware.' },
  { title: 'Ugly Freight Solved', detail: 'We ship 70 kg bumpers via provincial table rates or bulk to fitment partners with forklifts.' },
  { title: 'Fitment Partner Ready', detail: 'Book installs nationwide—bars arrive prepped, torqued and ready for same-day fitment.' },
];

export default function MCCPage() {
  const mccProducts = getProductsByBrand('MCC');

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      <section className="relative overflow-hidden pt-32 pb-24 bg-gradient-to-br from-gray-900 via-brand-black to-gray-900 text-white">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.4em] text-accent-400 mb-5">Value-Premium Armour</p>
            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">MCC 4x4 South Africa</h1>
            <p className="text-lg md:text-2xl text-white/80 leading-relaxed">
              Post, Rocker and Pegasus armour systems built for Toyota Land Cruisers, Hiluxes and Ranger fleets. ADR compliant, winch-ready and priced for large-scale roll-outs.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {mccProducts.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-gray-500 mb-2">Live Products</p>
                <h3 className="text-3xl font-black text-gray-900">MCC 4x4 Products</h3>
              </div>
              <Link
                href="/products?category=Armour"
                className="px-5 py-3 rounded-full border border-gray-900 text-gray-900 font-bold hover:bg-gray-900 hover:text-white transition-colors"
              >
                View All Armour →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {mccProducts.map((product) => (
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

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-gray-500 mb-4">Why MCC?</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Australian Engineering for Toyota Country</h2>
            <p className="text-lg text-gray-600">
              MCC occupies the Goldilocks zone—ADR engineering without Tier‑1 pricing—making it perfect for South African fleets, outfitters and serious enthusiasts.
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
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-gray-500 mb-3">Vehicle Ecosystems</p>
              <h2 className="text-4xl font-black text-gray-900 mb-4">Platforms We Armour Weekly</h2>
              <p className="text-lg text-gray-600">
                LC70s, LC300s, Hiluxes, Prados and Rangers each demand unique barwork—from five-post cages to radar-safe alloy. MCC covers all of them with one catalogue.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {vehicleFocus.map((vehicle) => (
              <div key={vehicle.name} className="rounded-3xl border border-gray-200 p-8 shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-gray-500">Toyota Strategy</p>
                  <span className="px-3 py-1 rounded-full bg-gray-900 text-white text-xs font-semibold">High Velocity</span>
                </div>
                <h3 className="text-3xl font-black text-gray-900 mb-4">{vehicle.name}</h3>
                <p className="text-gray-600 mb-6">{vehicle.summary}</p>
                <ul className="space-y-2 text-sm text-gray-700 font-semibold">
                  {vehicle.highlights.map((highlight) => (
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
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-gray-500 mb-4">Hero Products</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">MCC Signatures Worth Knowing</h2>
            <p className="text-lg text-gray-600">These SKUs anchor Cruiser, Hilux and Ranger protection programs.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skuHighlights.map((item) => (
              <div key={item.sku} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-gray-500 mb-2">SKU Highlight</p>
                <h3 className="text-2xl font-black text-gray-900 mb-3">{item.sku}</h3>
                <p className="text-gray-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {curatedBuilds.map((build) => (
              <div key={build.title} className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow flex flex-col">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-gray-500 mb-2">Toyota Armour Stack</p>
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

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {logisticsNotes.map((note) => (
              <div key={note.title} className="bg-white rounded-3xl border border-gray-200 p-6 shadow-sm">
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-gray-500 mb-2">{note.title}</p>
                <p className="text-gray-600">{note.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-accent-400 mb-4">Need Advice?</p>
              <h2 className="text-4xl font-black mb-4">Talk to the MCC Armour Desk</h2>
              <p className="text-white/80 leading-relaxed mb-6">
                Share your vehicle platforms, payload targets and compliance requirements. We’ll align Post, Rocker or Pegasus bars, rear carriers and suspension pairings.
              </p>
              <ul className="space-y-3 text-white/80">
                <li>• Verify radar, camera and parking sensor relocations.</li>
                <li>• Plan weight distribution when adding dual spares and rooftop loads.</li>
                <li>• Coordinate shipping direct to partner fitment centres nationwide.</li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-accent-400 mb-3">Ready to Armour Up?</p>
              <h3 className="text-3xl font-black mb-4">Book an MCC Consultation</h3>
              <p className="text-white/80 mb-6">
                Receive a curated product map, logistics plan and fitment partner recommendation tailored to your Land Cruiser or Hilux build schedule.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-4 rounded-full bg-white text-gray-900 font-bold hover:bg-accent-400 hover:text-gray-900 transition-colors"
              >
                Book the Session →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
