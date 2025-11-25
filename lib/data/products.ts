export interface Product {
  id: string;
  name: string;
  slug: string;
  brand: string;
  category: string;
  subcategory?: string;
  price: number;
  salePrice?: number;
  description: string;
  shortDescription: string;
  features: string[];
  specifications: Record<string, string>;
  fitment: {
    make: string;
    model: string;
    years: string;
    variants?: string[];
  }[];
  images: string[];
  inStock: boolean;
  sku: string;
  badge?: string;
  relatedProducts?: string[];
}

export const products: Product[] = [
  // EFS Suspension Products
  {
    id: 'efs-001',
    name: 'EFS Elite Foam Cell Shocks - Land Cruiser 200',
    slug: 'efs-elite-foam-cell-lc200',
    brand: 'EFS Suspension',
    category: 'Suspension',
    subcategory: 'Foam Cell Shocks',
    price: 11895,
    description:
      'Touring-tuned EFS Elite foam cell shocks engineered for the Land Cruiser 200 Series. Dynamic Motion Control valving keeps the 2.7-ton platform stable on tar while the 35mm piston and 51mm body soak up endless corrugations without overheating. KDSS-friendly open and closed lengths maintain articulation without triggering lean faults.',
    shortDescription:
      'Foam cell Elite shocks for LC200. DMC valving, 35mm pistons and KDSS-friendly lengths tame long-distance corrugations.',
    features: [
      'Dynamic Motion Control (DMC) velocity-sensitive valving',
      '35mm piston / 51mm outer body for extra oil volume',
      'Foam cell construction resists cavitation on corrugations',
      'KDSS and trim spacer compatible lengths',
      'Shot-peened, scragged springs for sag resistance when paired with EFS coils',
      '3-year / 100,000 km warranty for touring use'
    ],
    specifications: {
      'Piston Diameter': '35mm',
      'Body Diameter': '51mm',
      'Architecture': 'Foam cell twin-tube',
      'Compatibility': 'KDSS-safe open/closed lengths',
      'Warranty': '3 years / 100,000 km'
    },
    fitment: [
      { make: 'Toyota', model: 'Land Cruiser 200', years: '2008-2022', variants: ['GX', 'VX', 'VX-R', 'Sahara'] }
    ],
    images: ['/products/efs-elite-strut-1.jpg'],
    inStock: true,
    sku: 'EFS-ELITE-LC200',
    badge: 'Touring Choice'
  },
  {
    id: 'efs-002',
    name: 'EFS X-Treme 500kg Constant Leaf Pack - Land Cruiser 79',
    slug: 'efs-x-treme-500kg-leaf-lc79',
    brand: 'EFS Suspension',
    category: 'Suspension',
    subcategory: 'Leaf Springs',
    price: 13797,
    description:
      'Heavy-duty 500kg constant-load leaf spring pack built for permanently loaded Land Cruiser 79 dual cabs. Shot-peened SUP9 steel with military wrap eyes, graphite-coated liners and greasable shackles keep mining and agricultural rigs level even with dual tanks, canopies and drawer systems.',
    shortDescription:
      '500kg constant-load EFS leaf pack for LC79. Military wrap safety, graphite liners and greasable shackles tame permanent payloads.',
    features: [
      '500kg constant load rating tuned for canopy/drawer builds',
      'Shot-peened and scragged SUP9 steel to prevent sag',
      'Military wrap secondary leaf retains axle if main leaf fails',
      'Graphite-coated interleaf liners for quiet articulation',
      'Includes greasable shackles and pins with zerk fittings',
      'Pairs with EFS X-Treme 45mm shocks for corrugation control'
    ],
    specifications: {
      'Load Rating': '500kg constant',
      'Lift Height': '40-50mm',
      'Material': 'SUP9 high-tensile steel',
      'Wrap': 'Military wrap safety eye',
      'Warranty': '3 years / 100,000 km (1 year commercial)'
    },
    fitment: [
      { make: 'Toyota', model: 'Land Cruiser 79', years: '2007-2024', variants: ['Single Cab', 'Double Cab', 'V8'] }
    ],
    images: ['/images/efs/EFS X-Treme 500kg Constant Leaf Pack - Land Cruiser 79.jpg'],
    inStock: true,
    sku: 'EFS-LC79-500KG',
    badge: 'Workhorse'
  },
  {
    id: 'efs-003',
    name: 'EFS MRP 2.5 Remote Reservoir System - Land Cruiser 79',
    slug: 'efs-mrp-25-lc79',
    brand: 'EFS Suspension',
    category: 'Suspension',
    subcategory: 'Complete Kits',
    price: 67995,
    description:
      'Full EFS MRP 2.5 remote reservoir suspension system tailored to Land Cruiser 79 overland and competition builds. 2.5-inch monotube dampers with remote cans deliver 24-stage compression and 36-stage rebound adjustment, while the kit bundles front coils, rear leaf packs, greasable hardware, caster correction and brake proportioning spacers for a zero-compromise setup.',
    shortDescription:
      'Adjustable MRP 2.5 remote reservoir kit for LC79. Dual-adjustable dampers plus matched coils, leafs, hardware and brake bias spacer.',
    features: [
      '2.5-inch monotube shocks with remote reservoirs',
      '24-stage compression & 36-stage rebound adjustment',
      'Includes front bullbar-rated coils and rear constant-load leafs',
      'Comes with greasable shackles, HD U-bolts and poly bush kit',
      'Brake proportioning valve spacer restores LSPV geometry after lift',
      'Caster correction bushes keep steering true on 50mm lifts'
    ],
    specifications: {
      'Shock Body': '6061-T6 billet aluminium, 2.5-inch bore',
      'Adjustment': '24 comp / 36 rebound stages',
      'Reservoir': 'Remote canister via Teflon hose',
      'Lift Height': 'Approx. 50mm',
      'Warranty': '1 year / 100,000 km (performance range)'
    },
    fitment: [
      { make: 'Toyota', model: 'Land Cruiser 79', years: '2007-2024', variants: ['V8', '4.5 Diesel', '4.2 Diesel'] }
    ],
    images: ['/images/efs/EFS MRP 2.5 Remote Reservoir System - Land Cruiser 79.jpg'],
    inStock: true,
    sku: 'EFS-MRP25-LC79',
    badge: 'Adjustable'
  },
  
  // MCC 4x4 Products
  {
    id: 'mcc-001',
    name: 'MCC Post Type Bullbar - Land Cruiser 79',
    slug: 'mcc-post-type-bullbar-land-cruiser-79',
    brand: 'MCC 4x4',
    category: 'Armour',
    subcategory: 'Front Protection',
    price: 26995,
    description: 'Heavy-duty 5-post bullbar designed for Land Cruiser 79 Series. Features split-pan design for improved airflow, integrated winch cradle (12,000lb), and ADR compliant construction. The definitive choice for agricultural and mining applications.',
    shortDescription: '5-post heavy-duty bullbar for Land Cruiser 79. Winch-ready, ADR compliant, built for serious work.',
    features: [
      '5-post heavy-duty design',
      '12,000lb winch compatible',
      'Split-pan airflow design',
      'ADR 69/72 compliant',
      'Integrated recovery points',
      'Dual aerial mounts'
    ],
    specifications: {
      'Construction': 'Heavy-duty steel',
      'Winch Capacity': '12,000lb',
      'Compliance': 'ADR 69/72',
      'Fitment': 'Land Cruiser 79 (2007-2024)'
    },
    fitment: [
      { make: 'Toyota', model: 'Land Cruiser 79', years: '2007-2024', variants: ['Single Cab', 'Double Cab'] }
    ],
    images: ['/products/mcc-post-type-1.jpg'],
    inStock: true,
    sku: 'MCC-POST-LC79',
    badge: 'Toyota Flagship'
  },
  {
    id: 'mcc-002',
    name: 'MCC Pegasus Alloy Bullbar - Land Cruiser 300',
    slug: 'mcc-pegasus-alloy-bullbar-lc300',
    brand: 'MCC 4x4',
    category: 'Armour',
    subcategory: 'Front Protection',
    price: 34995,
    description: 'Lightweight alloy bullbar for Land Cruiser 300 Series. Designed for radar and camera compatibility, reduces front axle weight by 50% compared to steel. No-cut installation preserves resale value.',
    shortDescription: 'Radar-safe alloy bullbar for LC300. Lightweight, sensor-compatible, no-cut installation.',
    features: [
      'Alloy construction (50% weight reduction)',
      'Radar and camera compatible',
      'Parking sensor integration',
      'No-cut installation',
      'ADR compliant',
      'Winch compatible'
    ],
    specifications: {
      'Material': 'Aluminium Alloy',
      'Weight': '~40kg (vs 80kg steel)',
      'Compliance': 'ADR 69/72',
      'Fitment': 'Land Cruiser 300 (2021+)'
    },
    fitment: [
      { make: 'Toyota', model: 'Land Cruiser 300', years: '2021-2024', variants: ['ZX', 'GR-S', 'VX'] }
    ],
    images: ['/products/mcc-pegasus-1.jpg'],
    inStock: true,
    sku: 'MCC-PEG-LC300',
    badge: 'Luxury Overland'
  },
  {
    id: 'mcc-003',
    name: 'MCC Rocker Triple-Loop Bullbar - Hilux GD6',
    slug: 'mcc-rocker-triple-loop-hilux-gd6',
    brand: 'MCC 4x4',
    category: 'Armour',
    subcategory: 'Front Protection',
    price: 23995,
    description: 'Modern faceted bullbar with improved approach angle. Features integrated LED fog lights, rated recovery points, and sleek design. Popular choice for Hilux and Ranger lifestyle builds.',
    shortDescription: 'Modern bullbar with improved approach angle. LED integration, recovery points, sleek design.',
    features: [
      'Triple-loop design',
      'Improved approach angle',
      'Integrated LED fog lights',
      'Rated recovery points',
      'Faceted wing design',
      'ADR compliant'
    ],
    specifications: {
      'Design': 'Triple-Loop',
      'Approach Angle': 'Improved',
      'LED Integration': 'Yes',
      'Fitment': 'Hilux GD6 (2016+)'
    },
    fitment: [
      { make: 'Toyota', model: 'Hilux GD6', years: '2016-2024', variants: ['Revo', 'Legend', 'Rocco'] }
    ],
    images: ['/products/mcc-rocker-1.jpg'],
    inStock: true,
    sku: 'MCC-ROCK-HILUX'
  },
  {
    id: 'mcc-004',
    name: 'MCC Dual Wheel Carrier - Land Cruiser 300',
    slug: 'mcc-dual-wheel-carrier-lc300',
    brand: 'MCC 4x4',
    category: 'Armour',
    subcategory: 'Rear Protection',
    price: 18995,
    description: 'Swing-away dual wheel carrier for Land Cruiser 300. Moves spare wheels and jerry cans off roof rack, improving center of gravity. Features integrated LED reverse lighting.',
    shortDescription: 'Dual wheel carrier for LC300. Swing-away design for spares and jerry cans.',
    features: [
      'Dual wheel capacity',
      'Jerry can mounts',
      'Swing-away design',
      'Integrated LED lighting',
      'Heavy-duty construction',
      'Lockable mechanism'
    ],
    specifications: {
      'Capacity': '2x spare wheels + jerry cans',
      'Material': 'Steel',
      'Fitment': 'Land Cruiser 300 (2021+)'
    },
    fitment: [
      { make: 'Toyota', model: 'Land Cruiser 300', years: '2021-2024' }
    ],
    images: ['/products/mcc-dual-carrier-1.jpg'],
    inStock: true,
    sku: 'MCC-DWC-LC300'
  },

  // Tough Dog Suspension Products
  {
    id: 'td-001',
    name: 'Tough Dog Foam Cell 41mm Shocks - Land Cruiser 300',
    slug: 'tough-dog-foam-cell-lc300',
    brand: 'Tough Dog Suspension',
    category: 'Suspension',
    subcategory: 'Shock Absorbers',
    price: 10995,
    description:
      'Tough Dog 41mm Foam Cell struts and rear shocks tuned specifically for the TNGA-F Land Cruiser 300 platform. The foam insert separates gas from oil, maximising thermal capacity so LC300 rigs loaded with Pegasus bars, dual spares and long-range tanks stay composed on 120 km/h corrugations.',
    shortDescription:
      'LC300-specific 41mm Foam Cell shocks that resist fade on Karoo corrugations even with full touring payloads.',
    features: [
      'Foam Cell architecture keeps oil and gas separated to prevent cavitation',
      '41mm piston with oversized oil volume for heat control',
      'Valved for LC300 accessory weight (bullbar, winch, dual spares)',
      'Direct bolt-in lengths compatible with E-KDSS trims',
      '3-year / unlimited km recreational warranty via Opposite Lock',
      'Powder-coated housings for coastal corrosion resistance'
    ],
    specifications: {
      'Technology': 'Foam Cell twin-tube',
      'Bore Size': '41mm',
      'Warranty': '3 year / unlimited km (recreational)',
      'Lift Range': '40-50mm LC300 touring lift',
      'Compatibility': 'LC300 GX-R, ZX, GR-S, E-KDSS safe'
    },
    fitment: [
      { make: 'Toyota', model: 'Land Cruiser 300', years: '2021-2024', variants: ['GX-R', 'ZX', 'GR-S'] }
    ],
    images: ['/images/tough_dog/Tough Dog Foam Cell 41mm Shocks - Land Cruiser 300.jpg'],
    inStock: true,
    sku: 'TD-FC-LC300',
    badge: 'Corrugation Proof'
  },
  {
    id: 'td-002',
    name: 'Tough Dog Ralph 53mm Big Bore Shocks - Land Cruiser 70',
    slug: 'tough-dog-ralph-53mm-lc70',
    brand: 'Tough Dog Suspension',
    category: 'Suspension',
    subcategory: 'Shock Absorbers',
    price: 17995,
    description:
      'The legendary Tough Dog Ralph is a 53mm big-bore damper with a 22mm chrome shaft and 70mm outer body, purpose-built for Land Cruiser 70 / 79 mining fleets and expedition trucks that push GVM every day. Massive oil volume keeps temperatures stable during 10-hour gravel shifts.',
    shortDescription:
      '53mm Ralph shocks for LC70/79. Extreme oil volume and 22mm rods tame permanent 500kg+ payloads.',
    features: [
      '53mm bore with 70mm outer casing for unmatched oil capacity',
      '22mm chrome-plated piston rod resists buckling under GVM upgrades',
      'Hydraulic rebound stop prevents topping-out with long-travel leaf packs',
      '3-year / unlimited km warranty for recreational or commercial duty',
      'Powder-coated body with stone-guard for Karoo shale protection',
      'Bolt-in fitment for LC70 single, double cab and wagon platforms'
    ],
    specifications: {
      'Bore Size': '53mm',
      'Rod Diameter': '22mm',
      'Body Diameter': '70mm',
      'Warranty': '3 year / unlimited km',
      'Recommended Load': 'Constant 300-500kg payloads'
    },
    fitment: [
      { make: 'Toyota', model: 'Land Cruiser 70', years: '2007-2024', variants: ['79 Single Cab', '79 Double Cab', '76 Wagon', '78 Troopy'] }
    ],
    images: ['/images/tough_dog/Tough Dog Ralph 53mm Big Bore Shocks - Land Cruiser 70.jpg'],
    inStock: true,
    sku: 'TD-RALPH-LC70',
    badge: 'Heavy Duty'
  },
  {
    id: 'td-003',
    name: 'Tough Dog 9-Stage Adjustable Shocks - Land Cruiser 200',
    slug: 'tough-dog-9-stage-lc200',
    brand: 'Tough Dog Suspension',
    category: 'Suspension',
    subcategory: 'Shock Absorbers',
    price: 13495,
    description:
      'Externally adjustable Tough Dog shocks for Land Cruiser 200 owners who daily drive empty but tow boats or caravans on weekends. A base-mounted dial offers nine damping settings, letting you stiffen the rear for towing stability or soften it for school-run comfort without tools.',
    shortDescription:
      '9-stage adjustable shocks for LC200. Dial between comfort and tow-ready firmness in seconds.',
    features: [
      'Nine-position external dial (1-3 comfort, 4-5 touring, 6-9 heavy tow)',
      'Foam Cell construction resists fade under long-distance towing',
      'IFS-friendly front strut lengths and rear shock tuning for KDSS models',
      'Perfect for dual-use LC200s that alternate between city duty and 3.5T caravans',
      '3-year / unlimited km recreational warranty',
      'Includes dust boots and stone guards for gravel protection'
    ],
    specifications: {
      'Adjustment': '9-stage external dial',
      'Technology': 'Foam Cell adjustable',
      'Lift Range': '40-50mm',
      'Warranty': '3 year / unlimited km (recreational)',
      'Compatibility': 'LC200 GX, VX, VX-R with or without KDSS'
    },
    fitment: [
      { make: 'Toyota', model: 'Land Cruiser 200', years: '2008-2021', variants: ['GX', 'VX', 'VX-R'] }
    ],
    images: ['/images/tough_dog/Tough Dog 9-Stage Adjustable Shocks - Land Cruiser 200.jpg'],
    inStock: true,
    sku: 'TD-9STG-LC200',
    badge: 'Adjustable'
  },

  // Takla Products
  {
    id: 'takla-001',
    name: 'Takla Signature Seat Covers - Land Cruiser 79',
    slug: 'takla-signature-seat-covers-lc79',
    brand: 'Takla 4x4',
    category: 'Interior',
    subcategory: 'Seat Protection',
    price: 8495,
    description: 'Premium seat covers with 8mm foam backing and Cantech fabric. Feels like reupholstered seats, not just covers. Lifetime warranty. Airbag compatible with burst-thread seams.',
    shortDescription: 'Premium seat covers with foam backing. Feels like factory upholstery, protects like armor.',
    features: [
      '8mm foam backing',
      'Cantech fabric',
      'Lifetime warranty',
      'Airbag compatible',
      'Burst-thread seams',
      'Factory-level fit'
    ],
    specifications: {
      'Material': 'Cantech + 8mm foam',
      'Warranty': 'Lifetime',
      'Airbag Safe': 'Yes',
      'Fitment': 'Land Cruiser 79 (2007+)'
    },
    fitment: [
      { make: 'Toyota', model: 'Land Cruiser 79', years: '2007-2024' }
    ],
    images: ['/products/takla-signature-1.jpg'],
    inStock: true,
    sku: 'TAK-SIG-LC79'
  },
  {
    id: 'takla-002',
    name: 'Takla Platinum Perforated Seat Covers - Land Cruiser 300',
    slug: 'takla-platinum-perforated-lc300',
    brand: 'Takla 4x4',
    category: 'Interior',
    subcategory: 'Seat Protection',
    price: 12495,
    description: 'Alcantara perforated inserts maintain LC300 seat ventilation and heating functionality. Premium protection without compromising luxury features. Perfect for VX and ZX models.',
    shortDescription: 'Perforated Alcantara covers for LC300. Maintains ventilation and heating, premium protection.',
    features: [
      'Perforated Alcantara inserts',
      'Maintains ventilation',
      'Maintains heating',
      'Premium finish',
      'Factory-level fit',
      'Lifetime warranty'
    ],
    specifications: {
      'Material': 'Alcantara perforated',
      'Ventilation': 'Fully functional',
      'Heating': 'Fully functional',
      'Fitment': 'Land Cruiser 300 (2021+)'
    },
    fitment: [
      { make: 'Toyota', model: 'Land Cruiser 300', years: '2021-2024', variants: ['VX', 'ZX', 'GR-S'] }
    ],
    images: ['/products/takla-platinum-1.jpg'],
    inStock: true,
    sku: 'TAK-PLT-LC300',
    badge: 'Luxury'
  },
  {
    id: 'takla-003',
    name: 'Takla Takmat Floor System - Land Cruiser 79',
    slug: 'takla-takmat-floor-system-lc79',
    brand: 'Takla 4x4',
    category: 'Interior',
    subcategory: 'Floor Protection',
    price: 3495,
    description: 'Velcro-in floor mats that dampen noise, block heat, and stop red dust before it stains carpet. Full-depth coverage for Land Cruiser 79 cabin.',
    shortDescription: 'Full-depth floor mats for LC79. Dampens noise, blocks heat, stops red dust.',
    features: [
      'Velcro-in installation',
      'Noise dampening',
      'Heat blocking',
      'Red dust protection',
      'Full-depth coverage',
      'Easy to clean'
    ],
    specifications: {
      'Coverage': 'Full-depth',
      'Installation': 'Velcro-in',
      'Fitment': 'Land Cruiser 79 (2007+)'
    },
    fitment: [
      { make: 'Toyota', model: 'Land Cruiser 79', years: '2007-2024' }
    ],
    images: ['/products/takla-takmat-1.jpg'],
    inStock: true,
    sku: 'TAK-MAT-LC79'
  },

  // Onca 4x4 Products
  {
    id: 'onca-001',
    name: 'Onca Rock Sliders - Land Cruiser 79',
    slug: 'onca-rock-sliders-lc79',
    brand: 'Onca 4x4',
    category: 'Armour',
    subcategory: 'Side Protection',
    price: 12995,
    description: 'Heavy-duty rock sliders with integrated side steps. Hi-Lift jack points and ADR compliant construction. Protects sills and provides step access.',
    shortDescription: 'Heavy-duty rock sliders for LC79. Hi-Lift jack points, ADR compliant, integrated steps.',
    features: [
      'Heavy-duty construction',
      'Hi-Lift jack points',
      'Integrated side steps',
      'ADR compliant',
      'Sill protection',
      'Powder coated finish'
    ],
    specifications: {
      'Construction': 'Heavy-duty steel',
      'Jack Points': 'Hi-Lift compatible',
      'Compliance': 'ADR',
      'Fitment': 'Land Cruiser 79 (2007+)'
    },
    fitment: [
      { make: 'Toyota', model: 'Land Cruiser 79', years: '2007-2024' }
    ],
    images: ['/products/onca-sliders-1.jpg'],
    inStock: true,
    sku: 'ONCA-SLD-LC79'
  },
  {
    id: 'onca-002',
    name: 'Onca Extreme LDX-GEN2 Bull Bar - LC79',
    slug: 'onca-extreme-ldx-gen2-lc79',
    brand: 'Onca 4x4',
    category: 'Armour',
    subcategory: 'Front Protection',
    price: 32995,
    description:
      'Top-tier Extreme LDX-GEN2 replacement bar engineered for the Toyota Land Cruiser 79. Integrates a 12,000 lb winch cradle, patented airbag crumple-zone mounts, high-lift jack slots and recessed LED pods while maintaining airflow and ADR compliance.',
    shortDescription:
      'Flagship Onca Extreme bar for LC79 with winch cradle, ADR airbags and high-lift slots.',
    features: [
      'Patented airbag crumple-zone mounting system',
      'Integrated 12,000 lb winch cradle tied into chassis',
      'High-lift jack slots and rated recovery eyes',
      'Recessed LED driving light pods',
      'High-approach tapered wings for clearance',
      'Textured three-stage powder coat'
    ],
    specifications: {
      'Construction': 'Laser-cut 4/5 mm steel, fully welded',
      'Winch Rating': '12,000 lb low-mount compatible',
      'Compliance': 'ADR & SABS tested',
      'Finish': '3-stage textured black powder coat'
    },
    fitment: [{ make: 'Toyota', model: 'Land Cruiser 79', years: '2007-2024' }],
    images: ['/images/onca/Onca Extreme LDX-GEN2 Bull Bar - LC79.jpg'],
    inStock: true,
    sku: 'ONCA-LDX-LC79',
    badge: 'Flagship'
  },
  {
    id: 'onca-003',
    name: 'Onca RFX-LD Bull Bar - LC79',
    slug: 'onca-rfx-ld-lc79',
    brand: 'Onca 4x4',
    category: 'Armour',
    subcategory: 'Front Protection',
    price: 28337,
    description:
      'RFX-LD bull bar for Land Cruiser 79 provides a modern faceted shell with the option of tubular brush rails. Retains winch compatibility, ADR compliance and integrated bash plates while saving weight versus the Extreme series.',
    shortDescription:
      'Mid-tier RFX-LD bar for LC79 with optional pipework and full winch integration.',
    features: [
      'Modular pipework (with or without hoops)',
      'Split pan for radiator airflow',
      'Integrated winch cradle and recovery points',
      'Optional headlight and radiator protection hoops',
      'ADR compliant crush-can mounts',
      'Powder-coated steel construction'
    ],
    specifications: {
      'Weight': '63-90 kg depending on pipework',
      'Compliance': 'ADR airbag approved',
      'Winch Ready': 'Yes, low-mount compatible',
      'Finish': 'Textured powder coat'
    },
    fitment: [{ make: 'Toyota', model: 'Land Cruiser 79', years: '2007-2024' }],
    images: ['/products/onca-rfx-ld.jpg'],
    inStock: true,
    sku: 'ONCA-RFX-LC79'
  },
  {
    id: 'onca-004',
    name: 'Onca Dual Wheel Carrier Rear Bumper - LC79',
    slug: 'onca-dual-wheel-carrier-lc79',
    brand: 'Onca 4x4',
    category: 'Armour',
    subcategory: 'Rear Protection',
    price: 44922,
    description:
      'Heavy-duty rear replacement bar for Land Cruiser 79 integrating a 3.5T tow rating, dual swing-away carriers for spares or jerry cans, LED reverse lights and greaseable pivots. Moves spares off the underbody to accommodate long-range tanks.',
    shortDescription:
      'Rear bar with dual swing-away carriers, 3.5T tow rating and LED lighting for LC79.',
    features: [
      'Rated 3.5T tow hitch with EN19 bushings',
      'Dual swing-away carriers for wheels or fuel',
      'LED reverse and work lighting',
      'Greaseable stainless pivots & spring-loaded latches',
      'Integrated recovery points',
      'Powder-coated heavy gauge steel'
    ],
    specifications: {
      'Tow Rating': '3.5 Ton',
      'Swing Arms': 'Dual, stainless hardware',
      'Lighting': 'LED reverse lamps included',
      'Finish': 'Three-stage powder coat'
    },
    fitment: [{ make: 'Toyota', model: 'Land Cruiser 79', years: '2007-2024' }],
    images: ['/products/onca-dual-carrier.jpg'],
    inStock: true,
    sku: 'ONCA-DRB-LC79',
    badge: 'Expedition Spec'
  },
  {
    id: 'onca-005',
    name: 'Onca Expedition Roof Rack - LC76 Wagon',
    slug: 'onca-expedition-roof-rack-lc76',
    brand: 'Onca 4x4',
    category: 'Armour',
    subcategory: 'Roof Systems',
    price: 30529,
    description:
      'Full-length steel/aluminium hybrid roof rack engineered for the Land Cruiser 76 Station Wagon. Laser-cut feet hug the gutters while modular accessory slots accept awnings, jerry holders and rooftop tents without drilling.',
    shortDescription:
      'Full-length expedition rack for LC76 with modular accessory channels and gutter mounts.',
    features: [
      'Full-length coverage for LC76 roof',
      'Steel perimeter with aluminium slats',
      'Accessory slots for awnings, jerries and tents',
      'No-drill gutter mount feet',
      'Durable textured powder coat',
      'Integrated tie-down points'
    ],
    specifications: {
      'Material': 'Steel perimeter, aluminium slats',
      'Mounting': 'Gutter clamp, no drilling',
      'Finish': 'Textured powder coat',
      'Dynamic Load': 'Aligned with Toyota roof rating'
    },
    fitment: [{ make: 'Toyota', model: 'Land Cruiser 76', years: '2007-2024' }],
    images: ['/products/onca-lc76-rack.jpg'],
    inStock: true,
    sku: 'ONCA-RACK-LC76'
  },
  {
    id: 'onca-006',
    name: 'Onca RXT Bull Bar - Land Cruiser 300',
    slug: 'onca-rxt-bull-bar-lc300',
    brand: 'Onca 4x4',
    category: 'Armour',
    subcategory: 'Front Protection',
    price: 38995,
    description:
      'Premium RXT bull bar designed for the Toyota Land Cruiser 300 with radar and camera safe geometry, airflow channels for twin-turbo cooling, and integrated parking sensor relocation. Keeps Toyota Safety Sense active while adding winch capability.',
    shortDescription:
      'LC300-specific RXT bar with radar-safe design, airflow vents and winch integration.',
    features: [
      'Radar, camera and parking sensor compatibility',
      'High-volume airflow vents for intercoolers',
      'Integrated winch cradle and recovery points',
      'Low-profile styling aligned with LC300 bodywork',
      'Patented airbag crumple-zone mounts',
      'Textured powder coat finish'
    ],
    specifications: {
      'Compliance': 'Maintains Toyota Safety Sense',
      'Cooling': 'High-volume airflow venting',
      'Winch Ready': 'Low-mount compatible',
      'Finish': 'Three-stage powder coat'
    },
    fitment: [{ make: 'Toyota', model: 'Land Cruiser 300', years: '2021-2024' }],
    images: ['/products/onca-rxt-lc300.jpg'],
    inStock: true,
    sku: 'ONCA-RXT-LC300',
    badge: 'Radar Safe'
  },

  // Wild Dog Suspension / Armour Partner Products
  {
    id: 'wd-td-001',
    name: 'Wild Dog Spec Tough Dog Complete Kit - Land Cruiser 79',
    slug: 'wild-dog-tough-dog-kit-lc79',
    brand: 'Wild Dog 4x4',
    category: 'Suspension',
    subcategory: 'Complete Kits',
    price: 43570,
    description:
      'Wild Dog’s flagship suspension package for Land Cruiser 79 builds pairs heavy-duty Wild Dog Hunter armour with a Tough Dog 50mm lift kit. Includes Foam Cell or 9-stage adjustable shocks, bullbar-rated front coils, constant 500kg rear leaf packs, greasable shackles, extended U-bolts and caster correction to keep armored fleet trucks planted on corrugated veld roads.',
    shortDescription:
      'Complete Wild Dog + Tough Dog LC79 kit: 50mm lift, bar-and-winch coils, 500kg rear leafs, Foam Cell/adjustable shocks and greasable hardware.',
    features: [
      'Choice of Foam Cell or 9-stage adjustable shocks for dual-use rigs',
      'Bullbar/winch front coils restore ride height under Hunter bumpers',
      'Constant 500kg rear leaf packs handle canopies, dual spares and long-range tanks',
      'Includes greasable shackles, HD U-bolts and poly bush kits',
      'Caster correction bushes re-align steering post lift',
      'Wild Dog fitment-ready: tuned to the weight of Hunter/K9 armour stacks'
    ],
    specifications: {
      'Lift Height': 'Approx. 50mm',
      'Shock Options': 'Foam Cell 41mm or 9-stage adjustable',
      'Rear Load Rating': 'Constant 500kg',
      'Warranty': '3-4 year / unlimited km (recreational), 3 year commercial',
      'Kit Contents': '4 shocks, coils, leaf packs, shackles, U-bolts, bushes, caster correction'
    },
    fitment: [
      { make: 'Toyota', model: 'Land Cruiser 79', years: '2007-2024', variants: ['Single Cab', 'Double Cab'] }
    ],
    images: ['/images/wild_dog/Wild Dog Tough Dog Kit - Land Cruiser 79.jpg'],
    inStock: true,
    sku: 'WD-TD-FULL-LC79',
    badge: 'Hunter Ready'
  },
  {
    id: 'wd-td-002',
    name: 'Wild Dog Spec Tough Dog Foam Cell Kit - Land Cruiser 200',
    slug: 'wild-dog-tough-dog-kit-lc200',
    brand: 'Wild Dog 4x4',
    category: 'Suspension',
    subcategory: 'Complete Kits',
    price: 31280,
    description:
      'Complete 45mm lift suspension kit tuned for Land Cruiser 200s running Wild Dog K9 armour, dual battery systems and off-road trailers. Pre-assembled Tough Dog Foam Cell front struts, rear Foam Cell shocks, matched coils and in-coil airbag helpers keep luxury rigs level whether commuting or towing 3.5T caravans.',
    shortDescription:
      'Wild Dog / Tough Dog LC200 package with Foam Cell struts, rear shocks, coils and in-coil airbags to manage K9 bumper + towing loads.',
    features: [
      'Pre-assembled Foam Cell front struts for easy install',
      'Rear Foam Cell shocks resist corrugation fade',
      'Comfort/medium/heavy coil options for accessory weights',
      'In-coil airbag helpers level the vehicle while towing',
      'Optional 9-stage adjustable upgrade for on-road/off-road tuning',
      'Upper control arm compatibility for 50mm lifts'
    ],
    specifications: {
      'Lift Height': '40-50mm',
      'Shock Type': 'Foam Cell twin-tube',
      'Towing Support': 'In-coil airbags (5-60 psi)',
      'Warranty': '3 year / unlimited km',
      'Fitment Notes': 'KDSS compatible setup via Wild Dog fitment partners'
    },
    fitment: [
      { make: 'Toyota', model: 'Land Cruiser 200', years: '2008-2021', variants: ['GX', 'VX', 'VX-R'] }
    ],
    images: ['/images/wild_dog/Wild Dog Tough Dog Kit - Land Cruiser 200.jpg'],
    inStock: true,
    sku: 'WD-TD-LC200',
    badge: 'Tow Ready'
  },
  {
    id: 'wd-td-003',
    name: 'Wild Dog Spec Tough Dog Foam Cell Kit - Land Cruiser 300',
    slug: 'wild-dog-tough-dog-kit-lc300',
    brand: 'Wild Dog 4x4',
    category: 'Suspension',
    subcategory: 'Complete Kits',
    price: 34275,
    description:
      'Next-gen 40mm lift solution for Land Cruiser 300 builds pairing Wild Dog Pegasus/K9 armour with Tough Dog Foam Cell struts and coils. Tuned specifically for TNGA-F chassis with E-KDSS friendly sway bar brackets, this kit keeps radar-laden LC300s level and composed on Botswana-bound corrugations.',
    shortDescription:
      'LC300 Foam Cell lift kit co-developed with Wild Dog: E-KDSS friendly struts, coils and sway bar brackets to handle Pegasus armour and dual spares.',
    features: [
      'Foam Cell struts/shocks prevent fade under lighter V6 chassis',
      'Comfort, medium and heavy-rate coils for different accessory loads',
      'Rear sway bar bracket included to maintain E-KDSS geometry',
      'Calibration aligned to Wild Dog Pegasus/K9 armour weight',
      '3 year / unlimited km warranty',
      'Option to upgrade to 9-stage adjustable shocks for dual-use rigs'
    ],
    specifications: {
      'Lift Height': '40mm baseline',
      'Technology': 'Foam Cell 41mm bore',
      'Compatibility': 'ZX, GR-S, GX-R including E-KDSS trims',
      'Warranty': '3 year / unlimited km',
      'Includes': 'Front struts, rear shocks, coils, sway bar bracket'
    },
    fitment: [
      { make: 'Toyota', model: 'Land Cruiser 300', years: '2021-2024', variants: ['GX-R', 'ZX', 'GR-S'] }
    ],
    images: ['/images/wild_dog/Wild Dog Tough Dog Kit - Land Cruiser 300.jpg'],
    inStock: true,
    sku: 'WD-TD-LC300',
    badge: 'Next-Gen'
  },
  {
    id: 'wd-xgg-001',
    name: 'Wild Dog Xtreme Gravel Gear Mountain Shocks - Land Cruiser 70',
    slug: 'wild-dog-xgg-mountain-lc70',
    brand: 'Wild Dog 4x4',
    category: 'Suspension',
    subcategory: 'Shock Absorbers',
    price: 12550,
    description:
      'Cost-effective Xtreme Gravel Gear Mountain Series shock upgrade for Land Cruiser 70 platforms that need refined damping without the price tag of Foam Cell. Twin-tube nitrogen shocks with 35mm bores, NOK Japanese seals, and Fuchs racing oil provide controlled articulation for LC70s running lighter Wild Dog K9 armour setups.',
    shortDescription:
      'XGG Mountain Series shocks (front + rear) for LC70. Twin-tube nitrogen design with NOK seals and Fuchs oil tuned via Wild Dog.',
    features: [
      '2.25-inch (57mm) outer body for durability',
      '35mm piston with vehicle-specific valving',
      '20mm chrome shaft resists side load bending',
      'NOK Japanese seals + Fuchs Germany racing oil for longevity',
      'Nitrogen charged to prevent cavitation on corrugations',
      'Affordable alternative to Foam Cell for lighter builds'
    ],
    specifications: {
      'Architecture': 'Twin-tube nitrogen gas',
      'Bore': '35mm',
      'Rod Diameter': '20mm',
      'Warranty': '3 year limited',
      'Includes': 'Front pair + rear pair'
    },
    fitment: [
      { make: 'Toyota', model: 'Land Cruiser 70', years: '2007-2024', variants: ['76', '78', '79'] }
    ],
    images: ['/images/wild_dog/Wild Dog XGG Mountain Shocks - Land Cruiser 70.jpg'],
    inStock: true,
    sku: 'WD-XGG-LC70',
    badge: 'Value Performance'
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}

export function getProductsByBrand(brand: string): Product[] {
  return products.filter(p => p.brand.toLowerCase().includes(brand.toLowerCase()));
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(p => p.category === category);
}

export function getProductsByVehicle(make: string, model: string): Product[] {
  return products.filter(p => 
    p.fitment.some(f => 
      f.make.toLowerCase() === make.toLowerCase() && 
      f.model.toLowerCase().includes(model.toLowerCase())
    )
  );
}

export function getAllProducts(): Product[] {
  return products;
}

