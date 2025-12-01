import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { getProductsByBrand } from '@/lib/data/products';

import { formatPrice } from '@/lib/utils/formatPrice';

const heroStats = [
  { label: 'Land Cruiser Focus', body: 'Complete interior protection for Land Cruiser 300, 76, 78, and 79 with patterns that drop the day Toyota launches.' },
  { label: 'Lifetime Coverage', body: 'Signature & Cantech seat covers carry lifetime warranties under real-world abuse.' },
  { label: 'Full Cabin Systems', body: 'Seat covers, Takmats, load liners, dash + tunnel shields and storage solutions.' },
  { label: 'African Proof', body: 'Cantech & Durotech fabrics repel red dust, UV and farm chemicals without shrinking.' },
];

const sellingPoints = [
  {
    title: 'Comfort Without Compromise',
    bullets: [
      'Signature laminates Cantech to 8 mm foam so LC70 seats feel reupholstered, not just covered.',
      'Platinum perforated Alcantara keeps LC300 ventilation, heating and airbags 100% functional.',
    ],
  },
  {
    title: 'African-Proof Materials',
    bullets: [
      'Cantech + Durotech reject UV fade, stains and shrinkage in 45 °C cabins or muddy farm clothes.',
      'Takmats and load liners create waterproof tubs so red dust, oil and pets never reach OEM trim.',
    ],
  },
  {
    title: 'Land Cruiser-Aligned Fitments',
    bullets: [
      'Templates mirror Toyota releases, from LC79 GD-6 conversions to LC300 luxury models.',
      'Burst-thread seams and airbag certification eliminate insurer pushback on modified interiors.',
    ],
  },
];

const vehicleSegments = [
  {
    title: 'Land Cruiser 300',
    subtitle: 'Luxury Overland',
    copy: 'Signature Executive seat covers with 8mm foam backing feel like factory leather. Airbag safe, breathable Cantech fabric keeps luxury interiors pristine.',
    highlights: ['Signature Executive', '8mm foam backing', 'Airbag safe'],
  },
  {
    title: 'Land Cruiser 76 (Station Wagon)',
    subtitle: 'Family Protection',
    copy: 'Heavy-duty loadliner transforms the cargo area into a waterproof bakkie bed. Protects floor, sides, and rear door from scratches, dog hair, and spills.',
    highlights: ['Heavy-duty loadliner', 'Full cargo coverage', 'Dog proof'],
  },
  {
    title: 'Land Cruiser 78 (Troop Carrier)',
    subtitle: 'Expedition Ready',
    copy: 'Cantech Endurance seat covers built for the long haul. Machine washable, sweat-resistant, and designed for 8+ hour driving days in the bush.',
    highlights: ['Cantech Endurance', 'Machine washable', 'Sweat resistant'],
  },
  {
    title: 'Land Cruiser 79 (Pickup / Bakkie)',
    subtitle: 'Workhorse Protection',
    copy: 'Takmat sound & heat deadening floor mats quieten the cabin and block gearbox heat. 92% floor coverage with velcro lock for safety.',
    highlights: ['Sound deadening', 'Heat shielding', '92% coverage'],
  },
];

const skuHighlights = [
  { sku: 'Signature Seat Covers', insight: 'Cantech outer skin + 8 mm foam shell transforms flat Toyota seats into snug, sag-free upholstery.' },
  { sku: 'Takmat Floor Systems', insight: 'Velcro-in carpet + rubber hybrids kill heat and noise while locking out red dust.' },
  { sku: 'Load Liners', insight: '3D tub liners shield the floor, arches and seat backs so fridges, oil drums and dogs can ride inside.' },
  { sku: 'Platinum Alcantara', insight: 'Perforated, suede-like covers keep LC300 ZX/GR-S ventilation and heating fully functional.' },
  { sku: 'Dash & Tunnel Covers', insight: 'Protect 70 Series dashes and gearbox humps from the African sun and gearbox heat.' },
  { sku: 'Durotech Workhorse', insight: 'Wipe-clean, neoprene-style covers for farms, fleets and mining crews that climb in filthy.' },
];

const curatedCollections = [
  {
    title: 'LC79 Sound Deadening Takmats',
    summary: 'Signature seat covers, Takmats, dash shades and tunnel wraps keep 70 Series cabins cool and dust-free under 500 km of corrugations.',
    highlights: ['Signature foam-backed fit', 'Takmat thermal barrier', 'Dash + tunnel insulation'],
    cta: { label: 'Build LC79 interior package', href: '/contact' },
  },
  {
    title: 'LC300 Signature Executive',
    summary: 'Platinum perforated Alcantara, Takmats and load liners safeguard ZX/GR-S interiors while respecting sensors and ventilation.',
    highlights: ['Ventilation friendly', '8 mm structural foam', 'Full cargo tub coverage'],
    cta: { label: 'Secure LC300 kit', href: '/contact' },
  },
  {
    title: 'LC76 Heavy Duty Loadliner',
    summary: 'Transform the cargo area into a waterproof bakkie bed. Full coverage protects floor, sides, wheel arches, and rear door from scratches and spills.',
    highlights: ['Full cargo coverage', 'Dog proof', 'Bumper flap included'],
    cta: { label: 'View LC76 Kit', href: '/vehicles/land-cruiser-76' },
  },
  {
    title: 'LC78 Cantech Endurance',
    summary: 'Built for the long haul. Machine washable seat covers that keep your Troopy interior fresh even after weeks in the bush. Sweat-resistant and tough.',
    highlights: ['Machine washable', 'Sweat resistant', 'Long distance comfort'],
    cta: { label: 'View LC78 Kit', href: '/vehicles/land-cruiser-78' },
  },
];

const bundleIdeas = [
  {
    title: 'LC79 Workhorse Essentials',
    copy: 'Cantech seat covers + Takmat sound deadening + dash shield = cool, quiet, clean cabin.',
  },
  {
    title: 'LC300 Premium Preservation Kit',
    copy: 'Signature Executive covers + Takmats + load liner keep every touchpoint immaculate.',
  },
  {
    title: 'LC76 Family Protection Pack',
    copy: 'Signature seat covers + Heavy-duty loadliner = complete cargo and interior protection.',
  },
  {
    title: 'LC78 Expedition Interior',
    copy: 'Cantech Endurance seat covers + Takmats = fresh interior even after weeks in the bush.',
  },
];

const logisticsNotes = [
  { title: 'Airbag & Sensor Safe', detail: 'Burst-thread seams and ISO hooks keep airbags, seat sensors and ventilation happy—no insurer pushback.' },
  { title: 'Nationwide Shipping', detail: 'Seat cover sets and Takmats ship anywhere in South Africa; heavy load liners available for shipping.' },
  { title: 'Swatch & Fitment Support', detail: 'Request fabric swatches, see Signature vs Cantech vs Durotech and get install guides or workshop referrals.' },
  { title: 'Bundle Planning', detail: 'Match Takla interiors with MCC/Tough Dog armour + suspension so ride height, loads and cab preservation stay balanced.' },
];

export default function TaklaPage() {
  const taklaProducts = getProductsByBrand('Takla');

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      <section className="relative overflow-hidden pt-32 pb-24 bg-gradient-to-br from-gray-900 via-brand-black to-gray-900 text-white">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.4em] text-accent-400 mb-5">Protect the Cruiser Interior</p>
            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">Takla 4x4 Interior Protection</h1>
            <p className="text-lg md:text-2xl text-white/80 leading-relaxed">
              Premium seat covers, Takmats and load liners engineered in South Africa to keep Land Cruisers, Prados, Hiluxes and Fortuners looking factory-fresh—even after thousands of dusty kilometres.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {heroStats.map((item) => (
              <div key={item.label} className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur">
                <p className="text-2xl font-black text-accent-400">{item.label}</p>
                <p className="mt-3 text-sm text-white/80">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent)]" />
      </section>

      {taklaProducts.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-gray-500 mb-2">Live Products</p>
                <h3 className="text-3xl font-black text-gray-900">Takla 4x4 Products</h3>
              </div>
              <Link
                href="/products?category=Interior"
                className="px-5 py-3 rounded-full border border-gray-900 text-gray-900 font-bold hover:bg-gray-900 hover:text-white transition-colors"
              >
                View All Interior →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {taklaProducts.map((product) => (
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
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-gray-500 mb-4">Why Takla?</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Seat Protection for Toyota Loyalists</h2>
            <p className="text-lg text-gray-600">
              Signature, Cantech, Durotech and Platinum ranges give every Toyota owner—from LC79 farmers to LC300 executives—a way to preserve cabins without sacrificing comfort.
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
              <h2 className="text-4xl font-black text-gray-900 mb-4">Toyota Platforms We Outfit Daily</h2>
              <p className="text-lg text-gray-600">
                Land Cruiser 300 luxury overlanders, 76 family wagons, 78 expedition Troopies, and 79 workhorse pickups each have unique pain points—heat, dust, kids, pets, premium electronics. Takla's catalogue solves every one.
              </p>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-4">
              {['Signature vs Cantech', 'Takmats & Load Liners', 'Airbag + Vent Safe', 'Toyota-first templates'].map((tag) => (
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
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-gray-500">{segment.subtitle}</p>
                  <span className="px-3 py-1 rounded-full bg-gray-900 text-white text-xs font-semibold">Top Fitment</span>
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
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-gray-500 mb-4">Hero Products</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Takla Signatures Worth Knowing</h2>
            <p className="text-lg text-gray-600">
              These SKUs anchor Toyota interior builds—from LC79 heat mitigation to LC300 luxury preservation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {skuHighlights.map((item) => (
              <div key={item.sku} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-gray-500 mb-2">Feature Highlight</p>
                <h3 className="text-2xl font-black text-gray-900 mb-3">{item.sku}</h3>
                <p className="text-gray-600">{item.insight}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {curatedCollections.map((collection) => (
              <div key={collection.title} className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 flex flex-col hover:shadow-lg transition-shadow">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-gray-500 mb-2">Toyota Interior Stack</p>
                <h3 className="text-xl font-black text-gray-900 mb-2">{collection.title}</h3>
                <p className="text-sm text-gray-600 flex-1">{collection.summary}</p>
                <ul className="space-y-2 text-sm text-gray-700 my-4">
                  {collection.highlights.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-gray-900" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href={collection.cta.href}
                  className="inline-flex items-center justify-between px-4 py-3 rounded-xl bg-gray-900 text-white font-bold hover:bg-gray-700 transition-colors"
                >
                  {collection.cta.label}
                  <span>→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-3xl border border-gray-200 p-8 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-gray-500 mb-3">Bundle Ideas</p>
              <h2 className="text-3xl font-black text-gray-900 mb-4">Complete Protection Recipes</h2>
              <p className="text-gray-600 mb-6">
                Use these curated kits to tick off every high-impact interior upgrade the day the vehicle arrives.
              </p>
              <div className="space-y-4">
                {bundleIdeas.map((bundle) => (
                  <div key={bundle.title} className="p-4 rounded-2xl bg-white">
                    <h3 className="text-lg font-black text-gray-900">{bundle.title}</h3>
                    <p className="text-gray-600 mt-1">{bundle.copy}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 rounded-3xl border border-gray-200 p-8 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-gray-500 mb-3">Ops Insights</p>
              <h2 className="text-3xl font-black text-gray-900 mb-4">Interior + Armour = Plan Weight</h2>
              <p className="text-gray-600 mb-6">
                Interior protection often lands alongside bumpers, carriers and rooftop gear. Keep ride height and comfort dialed in with these reminders.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li>• Pair Signature covers with Takmats, dash shields and tunnel wraps for holistic cabin protection.</li>
                <li>• Adjust suspension specs when interior packs coincide with MCC/Onca barwork and dual spares.</li>
                <li>• Add wipe-clean storage like gun pouches and passport sleeves for cross-border travel admin.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
              <h2 className="text-4xl font-black mb-4">Talk to the Takla Fitment Desk</h2>
              <p className="text-white/80 leading-relaxed mb-6">
                Share your vehicle, fabric preference and lifestyle. We’ll spec the correct range, colourway and install plan so your cabin stays showroom fresh for years.
              </p>
              <ul className="space-y-3 text-white/80">
                <li>• Verify airbag compatibility, ventilation requirements and heated seat support.</li>
                <li>• Request fabric swatches and side-by-side comparisons before you commit.</li>
                <li>• Coordinate professional installation or DIY shipping anywhere in South Africa.</li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-accent-400 mb-3">Ready to Protect?</p>
              <h3 className="text-3xl font-black mb-4">Book a Takla Consult</h3>
              <p className="text-white/80 mb-6">
                Get a personalized fitment report, bundle recommendations and a build schedule aligned with your vehicle delivery.
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
