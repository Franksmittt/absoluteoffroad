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
    name: 'EFS XTR 50mm Lift Kit for Land Cruiser 300 (Exclude E-KDSS)',
    slug: 'efs-xtr-50mm-lift-kit-lc300',
    brand: 'EFS Suspension',
    category: 'Suspension',
    subcategory: 'Lift Kits',
    price: 32225,
    description:
      'The Land Cruiser 300 is a heavy vehicle with a soft factory suspension tune. This leads to excessive body roll in corners and rear-end sag when towing. The EFS XTR Suspension Kit is engineered to tighten up the chassis dynamics while providing a 50mm lift for larger tires. At the heart of this kit are the XTR Shock Absorbers. These feature a large 64mm external body with a 40mm piston, designed to hold more oil and dissipate heat faster than the stock twin-tube shocks. This means no shock fade on long, corrugated roads like the road to the Kgalagadi.',
    shortDescription:
      'The perfect balance of on-road handling and off-road capability. This 50mm lift kit corrects the factory "nose dive," improves approach angles, and increases load-carrying stability without sacrificing the LC300\'s luxury ride.',
    features: [
      'Dynamic Motion Control: EFS valving automatically adjusts to the speed of the piston, offering a plush ride on highways and firm control on rocks',
      'Big Bore Design: 40mm Piston / 64mm Body ensures the shock stays cool even under the heavy LC300 chassis',
      'Lift Height: Raises the vehicle approx. 50mm to clear 33-inch tires and improve approach angles',
      'Warranty: 3 Year / 100,000km Warranty for peace of mind',
      'Heat Management: Increased oil capacity prevents shock fade on long corrugated roads',
      'Load Stability: Reduces body roll and rear-end sag when towing'
    ],
    specifications: {
      'Shock Type': 'EFS XTR (Twin Tube Foam Cell)',
      'Piston Size': '40mm Sintered Iron',
      'Body Diameter': '64mm Heavy Duty Steel',
      'Spring Type': 'Coil Spring (Front & Rear)',
      'Lift Height': '+/- 50mm',
      'Warranty': '3 Year / 100,000km',
      'Note': 'Exclude E-KDSS models'
    },
    fitment: [
      { make: 'Toyota', model: 'Land Cruiser 300', years: '2021-2024', variants: ['GX-R', 'ZX', 'GR-S', 'VX'] }
    ],
    images: ['/products/efs-xtr-lc300.jpg'],
    inStock: true,
    sku: 'EFS-LC300-XTR-50',
    badge: 'Premium'
  },
  {
    id: 'efs-002',
    name: 'EFS Elite "Comfort" Suspension Kit for Land Cruiser 76 Wagon',
    slug: 'efs-elite-comfort-suspension-kit-lc76',
    brand: 'EFS Suspension',
    category: 'Suspension',
    subcategory: 'Lift Kits',
    price: 26250,
    description:
      'The Land Cruiser 76 is notorious for its harsh rear suspension. Because the rear passengers sit directly over the axle, every bump is felt in the spine. EFS Elite Comfort Series solves this by using a multi-leaf spring pack with friction pads that flexes more easily than the factory "heavy duty" springs. This kit is specifically designed for the Wagon chassis (which uses shorter springs than the Pickup) and focuses on ride quality for daily driving and light overlanding, rather than pure commercial load carrying.',
    shortDescription:
      'Solve the harsh ride of the 76 Station Wagon. This kit uses "Comfort" valved shocks and specialized rear leaf springs to smooth out the bumps while providing a 50mm lift.',
    features: [
      'Wagon Specific: Springs are engineered for the J76 chassis length to prevent the "pogo stick" bounce common in mismatched kits',
      'Ride Quality: "Elite" series shocks are valved softer for better compliance on tar and gravel',
      'Articulation: Longer travel shocks allow the solid axles to flex further in technical terrain',
      'Complete Overhaul: Includes new U-Bolts, Polyurethane Bushes, and Greaseable Shackles to replace worn factory rubber',
      'Comfort Valving: Specifically tuned for passenger comfort over harsh terrain',
      'Lift Height: 40mm - 50mm lift for improved ground clearance'
    ],
    specifications: {
      'Front': 'Comfort Coil Springs',
      'Rear': 'Comfort Leaf Springs (0-300kg Load)',
      'Shock Bore': '35mm Piston / 51mm Body',
      'Bushings': 'EFS High-Flex Polyurethane',
      'Lift': '40mm - 50mm',
      'Warranty': '3 Year / 100,000km'
    },
    fitment: [
      { make: 'Toyota', model: 'Land Cruiser 76', years: '2007-2024', variants: ['Station Wagon'] }
    ],
    images: ['/products/efs-elite-comfort-lc76.jpg'],
    inStock: true,
    sku: 'EFS-LC76-ELITE-C',
    badge: 'Comfort'
  },
  {
    id: 'efs-003',
    name: 'EFS X-Treme Heavy Duty Suspension Kit for Land Cruiser 78 (Constant Load)',
    slug: 'efs-x-treme-expedition-kit-lc78',
    brand: 'EFS Suspension',
    category: 'Suspension',
    subcategory: 'GVM Upgrades',
    price: 45000,
    description:
      'A Land Cruiser 78 "Troopy" is rarely driven empty. Once you add a camper conversion, roof rack, and water tank, you are likely sitting at maximum capacity. Standard suspension will sag and fail under this constant weight. The EFS X-Treme Kit is the heavy artillery. It features massive 45mm bore shocks and "Constant Load" leaf springs designed to hold weight up, not just carry it. This kit eliminates the "boat-like" swaying of a heavy Troopy in crosswinds, making your journey safer and less exhausting.',
    shortDescription:
      'Built for the fully-loaded Troop Carrier. Features the massive EFS X-Treme shocks and Constant Load springs (600kg+) to support rooftop tents, drawer systems, and water tanks.',
    features: [
      'Constant Load Springs: Rear leafs rated for 500kg+ constant weight (meaning the vehicle is never empty)',
      'X-Treme Shocks: Oversized 45mm piston and 20mm hardened chrome rod to withstand punishing corrugations without fading',
      'Stability: Drastically reduces body roll on high-roof vehicles',
      'Durability: 2mm outer wall thickness on shocks to resist stone damage on gravel highways',
      'Expedition Ready: Designed for fully-loaded camper conversions and long-range touring',
      'Heat Resistance: Large shock body prevents fade on extended corrugated road travel'
    ],
    specifications: {
      'Shock Type': 'EFS X-Treme (Heavy Duty)',
      'Piston Size': '45mm (Largest in Class)',
      'Rod Diameter': '20mm Hardened Chrome',
      'Rear Springs': 'Constant Load (500kg - 700kg options)',
      'Application': 'Expedition / Overland / Heavy Touring',
      'Warranty': '3 Year / 100,000km'
    },
    fitment: [
      { make: 'Toyota', model: 'Land Cruiser 78', years: '2007-2024', variants: ['Troopy', 'Troop Carrier'] }
    ],
    images: ['/products/efs-x-treme-lc78.jpg'],
    inStock: true,
    sku: 'EFS-LC78-XTREME-H',
    badge: 'Expedition'
  },
  {
    id: 'efs-004',
    name: 'EFS XTR Suspension Upgrade for Land Cruiser 79 Pickup (Single/Double Cab)',
    slug: 'efs-xtr-workhorse-kit-lc79',
    brand: 'EFS Suspension',
    category: 'Suspension',
    subcategory: 'Lift Kits',
    price: 36750,
    description:
      'The Land Cruiser 79 is the backbone of the workforce. Whether it\'s a farm bakkie or a mining support vehicle, it needs suspension that survives abuse. The EFS XTR Kit is the "Goldilocks" solution—stronger than stock, but more refined than the brutal industrial springs. This kit offers a GVM Upgrade potential (subject to engineering approval) and uses the XTR shock\'s increased oil capacity to keep the tires on the ground on washboard gravel roads. It is available in distinct spring rates for Single Cab (lighter cabin) and Double Cab (heavier cabin).',
    shortDescription:
      'The standard for South African farmers and miners. A robust 50mm lift kit with 300kg-500kg load capacity, designed to handle corrugated roads while carrying a load.',
    features: [
      'Configurable Load: Choose "Medium" (0-300kg) for empty driving or "Constant" (300kg-500kg) for cattle rails and tools',
      'Correction Components: Includes Castor Correction Bushes to fix steering geometry after the 50mm lift',
      'Heat Management: XTR shocks are designed specifically to run cooler on African dirt roads than European-spec shocks',
      'Chassis Support: Reduces bottoming out on the bump stops, protecting the chassis from stress fractures',
      'GVM Upgrade Potential: Subject to engineering approval, can increase Gross Vehicle Mass rating',
      'Complete Kit: Includes greasable shackles and U-bolts for long-term reliability'
    ],
    specifications: {
      'Front': 'Heavy Duty Coils (Winch Compatible)',
      'Rear': 'Heavy Duty Leaf Springs (Configurable)',
      'Shocks': 'EFS XTR (40mm Bore)',
      'Extras': 'Greaseable Shackles & U-Bolts Included',
      'Warranty': '3 Year / 100,000km',
      'Lift Height': '50mm'
    },
    fitment: [
      { make: 'Toyota', model: 'Land Cruiser 79', years: '2007-2024', variants: ['Single Cab', 'Double Cab', 'V8', '2.8 GD-6'] }
    ],
    images: ['/products/efs-xtr-workhorse-lc79.jpg'],
    inStock: true,
    sku: 'EFS-LC79-XTR-HD',
    badge: 'Workhorse'
  },
  
  // MCC 4x4 Products
  {
    id: 'mcc-001',
    name: 'MCC Phoenix 808-02 Premium Winch Bar for Land Cruiser 300 (A-Frame)',
    slug: 'mcc-phoenix-808-02-lc300',
    brand: 'MCC 4x4',
    category: 'Armour',
    subcategory: 'Front Protection',
    price: 33200,
    description:
      'The Land Cruiser 300 demands armour that looks as modern as its engine. The MCC Phoenix 808-02 discards the "farm truck" look for a sophisticated, faceted design. It features a triple-loop stainless steel upper protection system (A-Frame) that protects the radiator grille and headlights without blocking the 360-degree cameras. Uniquely, the Phoenix bar features integrated LED Daytime Running Lights (DRLs) set into the fog light housing, giving your 300 Series a distinctive "face" on the road. It uses a "Bumper Cut" installation to integrate seamlessly with the factory upper fascia, ensuring high-volume airflow to the twin intercoolers.',
    shortDescription:
      'The flagship bar for the 300 Series. Features an aggressive A-Frame stainless steel loop, integrated LED Daytime Running Lights (DRLs), and full radar cruise control compatibility.',
    features: [
      'Tech Ready: Fully compatible with Front Parking Sensors, Radar Cruise Control, and 360 Cameras',
      'Daytime Running Lights: Integrated LED DRLs and sequential indicators built into the bar',
      '60mm Tubing: Uses thicker 60mm tube work (vs standard 50mm) for superior impact strength',
      'Airflow: "Hexagon Grill" mesh design ensures maximum air intake for the hot V6 engines',
      'A-Frame Design: Triple-loop stainless steel upper protection system',
      'Bumper Cut Installation: Seamlessly integrates with factory upper fascia'
    ],
    specifications: {
      'Material': '3mm - 5mm High Grade Steel',
      'Loops': 'Stainless Steel / Black A-Frame',
      'Lights': 'LED Fog, Park, DRL, Indicator',
      'Winch': 'Yes (Internal Cradle)',
      'Airbag': 'ADR Compliant',
      'Tubing': '60mm (vs standard 50mm)'
    },
    fitment: [
      { make: 'Toyota', model: 'Land Cruiser 300', years: '2021-2024', variants: ['GX-R', 'ZX', 'GR-S', 'VX'] }
    ],
    images: ['/products/mcc-phoenix-lc300.jpg'],
    inStock: true,
    sku: 'MCC-BB-LC300-PHX',
    badge: 'Premium'
  },
  {
    id: 'mcc-002',
    name: 'MCC Rocker Bar (078 Series) for Land Cruiser 70 Series (2007 - Current)',
    slug: 'mcc-rocker-bar-lc70',
    brand: 'MCC 4x4',
    category: 'Armour',
    subcategory: 'Front Protection',
    price: 28495,
    description:
      'For the Land Cruiser 79, 76, or 78 owner who tackles extreme technical terrain, the MCC Rocker Bar is the industry standard. Unlike traditional "flat" bumpers, the Rocker Bar features tapered wings that sweep up at the sides. This exposes the front tires, allowing you to climb vertical rock steps without the bumper hitting the ground first. It is a frameless, "Low Loop" or "No Loop" design (depending on preference), making it ideal for LED Light Bar integration. The 3D-sculpted design adds a modern, aggressive edge to the classic square 70 Series face.',
    shortDescription:
      'The most aggressive bar on the market. The Rocker Bar features a unique "up-swept" wing design for maximum approach angles and built-in high-lift jack points.',
    features: [
      'High Clearance: Upswept wings increase the approach angle by up to 30% compared to stock',
      'Lighting: Comes standard with square LED Park/Indicator and Fog lights recessed into the steel',
      'Recovery: Dual High-Lift Jack points built directly into the heavy-duty pan',
      'Ventilation: Split Air Pan system forces air into the radiator while protecting the steering rods',
      'LED Light Bar Ready: Frameless design ideal for LED light bar integration',
      '3D Sculpted: Modern, aggressive edge to the classic square 70 Series face'
    ],
    specifications: {
      'Style': 'Rocker 078 (Upswept Wing)',
      'Construction': '3mm Pan / 5mm Winch Bed',
      'Lights': 'Full LED Integration',
      'Winch': 'Yes (Up to 12,000lb)',
      'Fitment': 'Fits LC76, LC78, LC79 (All variants)',
      'Approach Angle': 'Up to 30% improvement over stock'
    },
    fitment: [
      { make: 'Toyota', model: 'Land Cruiser 76', years: '2007-2024', variants: ['Station Wagon'] },
      { make: 'Toyota', model: 'Land Cruiser 78', years: '2007-2024', variants: ['Troopy', 'Troop Carrier'] },
      { make: 'Toyota', model: 'Land Cruiser 79', years: '2007-2024', variants: ['Single Cab', 'Double Cab'] }
    ],
    images: ['/products/mcc-rocker-lc70.jpg'],
    inStock: true,
    sku: 'MCC-BB-LC70-ROCK',
    badge: 'Aggressive'
  },
  {
    id: 'mcc-003',
    name: 'MCC 022-02 Rear Carrier Bar with Dual Swing Arms (LC76 / LC78)',
    slug: 'mcc-rear-carrier-bar-lc76-lc78',
    brand: 'MCC 4x4',
    category: 'Armour',
    subcategory: 'Rear Protection',
    price: 27247,
    description:
      'The rear doors of the Land Cruiser 76 Wagon and 78 Troopy are their weak points. The MCC 022-02 Rear Carrier Bar takes the weight off the hinges. It replaces the entire rear bumper with a heavy-duty steel channel that protects the quarter panels from rock damage. This unit comes standard with Dual Swing Arms. You can configure it to carry two spare wheels (for the 78 Troopy) or a spare wheel and a double jerry can holder (for the 76 Wagon). The arms feature a user-friendly "Self Locking" pin to hold them open on side slopes.',
    shortDescription:
      'A massive rear protection system that carries the load. Includes two heavy-duty swing arms (Spare Wheel + Jerry Can) and an integrated towbar.',
    features: [
      'Dual Arms: Includes Left and Right swing arms with heavy-duty stub axles and bearings',
      'Integrated Towing: Features a rated towbar receiver and plug-and-play wiring provision',
      'LED Lights: Replaces the fragile bumper lights with recessed LED Stop/Tail/Indicator units',
      'Safety Latch: Double-locking mechanism prevents the arms from rattling or opening on corrugated roads',
      'Self Locking Pin: User-friendly mechanism to hold arms open on side slopes',
      'Hinge Protection: Takes weight off rear door hinges, preventing fatigue'
    ],
    specifications: {
      'Configuration': 'Double Arm (Wheel/Wheel or Wheel/Jerry)',
      'Bearings': 'Tapered Roller Bearings (Serviceable)',
      'Towing': 'Rated Receiver Hitch included',
      'Step': 'Integrated Chequer Plate Step',
      'Lights': 'LED Round Lights',
      'Fitment': 'LC76 Wagon / LC78 Troopy'
    },
    fitment: [
      { make: 'Toyota', model: 'Land Cruiser 76', years: '2007-2024', variants: ['Station Wagon'] },
      { make: 'Toyota', model: 'Land Cruiser 78', years: '2007-2024', variants: ['Troopy', 'Troop Carrier'] }
    ],
    images: ['/products/mcc-rear-carrier-lc76-lc78.jpg'],
    inStock: true,
    sku: 'MCC-RB-LC76-022',
    badge: 'Heavy Duty'
  },
  {
    id: 'mcc-004',
    name: 'MCC Falcon 707-02 Classic Winch Bar for Land Cruiser 79',
    slug: 'mcc-falcon-classic-bar-lc79',
    brand: 'MCC 4x4',
    category: 'Armour',
    subcategory: 'Front Protection',
    price: 23747,
    description:
      'Sometimes you don\'t need fancy styling; you just need brute strength. The MCC Falcon 707-02 is the traditional "Post Type" bullbar designed for the Land Cruiser 79 workhorse. It features three heavy-duty 50mm loops that fully wrap around the headlights and side indicators, offering the best defense against animal strikes. It is known for its "Split Pan" air system, which directs airflow straight into the radiator—crucial for V8 Cruisers towing heavy loads. It is fully airbag compatible and winch ready, making it the practical choice for farms and fleets.',
    shortDescription:
      'The classic 3-hoop design for the working vehicle. Maximum headlight protection, large cooling vents, and unbeatable value for money.',
    features: [
      'Full Wrap: 50mm steel tubes cover the entire front end, including the fragile front fenders',
      'Split Pan: Three-piece lower design improves strength and airflow compared to single-piece folded bars',
      'Aerial Mounts: Dual aerial tabs welded to the top tube for UHF/VHF radios',
      'Spotlight Ready: Pre-drilled laser-cut mounts for large 9-inch spotlights',
      'Winch Ready: Open access design for easy winch installation',
      'Classic Design: Traditional 3-Hoop / 5-Post design for maximum protection'
    ],
    specifications: {
      'Material': '3mm Steel / 50mm Tube',
      'Finish': 'Black Powder Coat',
      'Fog Lights': 'Optional (Select at Checkout)',
      'Winch': 'Yes (Open Access Design)',
      'Design': 'Classic 3-Hoop / 5-Post',
      'Airbag': 'ADR Compliant'
    },
    fitment: [
      { make: 'Toyota', model: 'Land Cruiser 79', years: '2007-2024', variants: ['Single Cab', 'Double Cab', 'V8', '2.8 GD-6'] }
    ],
    images: ['/products/mcc-falcon-lc79.jpg'],
    inStock: true,
    sku: 'MCC-BB-LC79-FAL',
    badge: 'Classic'
  },

  // Tough Dog Suspension Products
  {
    id: 'td-001',
    name: 'Tough Dog 9-Stage Adjustable Suspension Kit for Land Cruiser 300 (40mm Lift)',
    slug: 'tough-dog-9-stage-adjustable-lc300',
    brand: 'Tough Dog Suspension',
    category: 'Suspension',
    subcategory: 'Lift Kits',
    price: 36225,
    description:
      'The Land Cruiser 300 is a dual-purpose vehicle: a luxury family SUV during the week and a heavy-duty tourer on weekends. A static suspension setup can\'t be perfect for both. The Tough Dog 9-Stage Adjustable Kit gives you control. Using an external knob at the base of the shock, you can select from 9 different valving settings. Set it to "1-3" for a plush highway cruise that absorbs bumps like a cloud. Crank it to "7-9" when towing a heavy caravan or tackling technical rock crawls to eliminate body roll and pitching. This kit provides a 40mm lift to clear larger tires and is GVM upgrade compatible.',
    shortDescription:
      'Dial in your perfect ride. This premium kit features 9-Stage Adjustable shocks, allowing you to soften the ride for city driving or stiffen it for heavy towing and off-roading with the turn of a knob.',
    features: [
      'On-the-Fly Adjustment: 9 distinct stiffness settings to suit your current load and terrain',
      'Foam Cell Technology: The shock body is filled with micro-cellular foam inserts to prevent oil aeration (fade) on corrugated roads, unlike standard gas shocks',
      'Large Bore: 40mm internal bore and 60mm external casing for massive oil capacity and cooling',
      'GVM Ready: Engineered to support GVM upgrades, making it legal to carry heavier loads',
      'External Knob: No tools required to adjust damping settings',
      'Premium Quality: 3 Year / Unlimited KM warranty'
    ],
    specifications: {
      'Shock Type': '9-Stage Adjustable (BMX Series)',
      'Piston': '40mm',
      'Rod': '18mm Chrome Plated',
      'Lift Height': '40mm',
      'Adjustment': 'External Knob (No Tools Required)',
      'Warranty': '3 Year / Unlimited KM'
    },
    fitment: [
      { make: 'Toyota', model: 'Land Cruiser 300', years: '2021-2024', variants: ['GX-R', 'ZX', 'GR-S', 'VX'] }
    ],
    images: ['/products/tough-dog-9-stage-lc300.jpg'],
    inStock: true,
    sku: 'TD-LC300-ADJ-40',
    badge: 'Adjustable'
  },
  {
    id: 'td-002',
    name: 'Tough Dog Foam Cell "Comfort" Suspension for Land Cruiser 76 Wagon',
    slug: 'tough-dog-foam-cell-comfort-lc76',
    brand: 'Tough Dog Suspension',
    category: 'Suspension',
    subcategory: 'Lift Kits',
    price: 26250,
    description:
      'The Land Cruiser 76 is notorious for its "kidney-belt" ride quality, especially when unladen. This is because the rear passengers sit directly on top of the rear axle. Tough Dog\'s Comfort Kit is the antidote. It features specially designed 0-300kg Comfort Leaf Springs that are softer and more flexible than the commercial springs found on the pickup models. Paired with 41mm Foam Cell Shocks, which use a foam insert instead of nitrogen gas to dampen bumps, this setup absorbs washboard gravel roads rather than transmitting the vibration into the cabin.',
    shortDescription:
      'Transform the ride of your 76 Station Wagon. This kit uses Tough Dog\'s award-winning Foam Cell shocks and wagon-specific "Comfort" leaf springs to eliminate rear-end harshness.',
    features: [
      'Wagon Specific Tuning: Rear springs are engineered specifically for the J76 body weight, preventing the "stiffness" of generic 70 series kits',
      'Foam Cell Tech: Eliminates "shock fade" on long trips by preventing the oil from boiling and mixing with air',
      'Durability: Twin-tube design means the shock can take a dent in the outer shell and still function perfectly—essential for rocky trails',
      'Full Overhaul: Includes greasable shackles and pins to ensure smooth suspension movement',
      'Comfort Valving: Specifically tuned for passenger comfort over harsh terrain',
      'Long Warranty: 4 Year / Unlimited KM warranty'
    ],
    specifications: {
      'Shock Type': '41mm Foam Cell',
      'Front Springs': 'Comfort Coils (Bar Only)',
      'Rear Springs': 'Comfort Leaf (0-300kg)',
      'Lift': 'Approx. 50mm',
      'Warranty': '4 Year / Unlimited KM'
    },
    fitment: [
      { make: 'Toyota', model: 'Land Cruiser 76', years: '2007-2024', variants: ['Station Wagon'] }
    ],
    images: ['/products/tough-dog-comfort-lc76.jpg'],
    inStock: true,
    sku: 'TD-LC76-FC-COMF',
    badge: 'Comfort'
  },
  {
    id: 'td-003',
    name: 'Tough Dog "Ralph" Heavy Duty Suspension Kit for Land Cruiser 78',
    slug: 'tough-dog-ralph-expedition-kit-lc78',
    brand: 'Tough Dog Suspension',
    category: 'Suspension',
    subcategory: 'Heavy Duty',
    price: 56565,
    description:
      'If your Land Cruiser 78 is built for the end of the world, you need shocks that can survive it. Meet The Ralph. Named after a massive dog, this is the largest 4WD shock absorber available for the 70 Series. With a 53mm bore and a 22mm chrome rod, the Ralph holds significantly more oil than any competitor, making it virtually impossible to overheat on corrugated roads. Combined with Tough Dog\'s Constant Load (500kg+) Leaf Springs, this kit stabilizes high-roof Troopies carrying rooftop tents, preventing dangerous body roll and sway.',
    shortDescription:
      'The biggest, toughest shock absorber on the market. The "Ralph" is designed for the fully loaded Troop Carrier, featuring a massive 53mm bore and Constant Load springs for remote expeditions.',
    features: [
      'Massive Scale: The 53mm bore is roughly double the oil capacity of a standard shock, offering unmatched cooling and fade resistance',
      'Hydraulic Rebound Stop: Prevents the shock from damaging itself on harsh "top-outs" when the suspension fully extends over jumps or ruts',
      'Constant Load Ready: Springs are pre-stressed to carry permanent weight (drawers, water, tents) without sagging',
      'Expedition Proven: The choice for overland builds where shock failure is not an option',
      '22mm Chrome Rod: Resists buckling under extreme loads',
      'Legendary Reputation: The largest 4WD shock absorber available for 70 Series'
    ],
    specifications: {
      'Shock Type': '"Ralph" Big Bore (Twin Tube)',
      'Piston Size': '53mm',
      'Rod Diameter': '22mm Double Chrome Plated',
      'Spring Rate': 'Constant Load (500kg+)',
      'Application': 'Heavy Overland / Expedition',
      'Warranty': '3 Year / Unlimited KM'
    },
    fitment: [
      { make: 'Toyota', model: 'Land Cruiser 78', years: '2007-2024', variants: ['Troopy', 'Troop Carrier'] }
    ],
    images: ['/products/tough-dog-ralph-lc78.jpg'],
    inStock: true,
    sku: 'TD-LC78-RALPH-HD',
    badge: 'Expedition'
  },
  {
    id: 'td-004',
    name: 'Tough Dog 9-Stage Adjustable Suspension for Land Cruiser 79 (Single/Double Cab)',
    slug: 'tough-dog-9-stage-adjustable-lc79',
    brand: 'Tough Dog Suspension',
    category: 'Suspension',
    subcategory: 'Lift Kits',
    price: 41270,
    description:
      'The Land Cruiser 79 Pickup has the hardest job: it runs empty on Monday and carries a ton of feed or tools on Tuesday. A fixed suspension is always a compromise—either too hard when empty or too soft when loaded. The Tough Dog Adjustable Kit solves this. Featuring 9-Stage Adjustable Shocks (BMX Series), you can hand-dial the rear stiffness to match your load. Run it on setting #1 for comfort when driving unladen. Load up the cattle rails or hook up a trailer, and dial it to #9 for maximum stability. This versatility makes it the ultimate workhorse upgrade.',
    shortDescription:
      'One vehicle, multiple roles. Adjust your suspension stiffness in seconds to match your load. Soft for the empty commute, firm for the heavy haul.',
    features: [
      'Versatility: The only shock that adapts to your changing payload without tools',
      'Foam Cell Insert: Keeps the oil consistent even after hours of driving on dirt roads',
      'Chassis Protection: Large bore design absorbs energy that would otherwise crack shock mounts on the chassis',
      'Load Options: Available with "Medium" (0-300kg) or "Constant" (500kg+) rear springs depending on your permanent setup',
      '9-Stage Adjustment: External knob allows on-the-fly adjustment from soft (#1) to firm (#9)',
      'Workhorse Ready: Perfect for vehicles that alternate between empty and loaded states'
    ],
    specifications: {
      'Shock Type': '9-Stage Adjustable (40mm Bore)',
      'Outer Casing': '60mm',
      'Adjustment': '9 Settings (Soft to Hard)',
      'Lift Height': '50mm',
      'Fitment': 'Single Cab & Double Cab (Specific Springs)',
      'Warranty': '3 Year / Unlimited KM'
    },
    fitment: [
      { make: 'Toyota', model: 'Land Cruiser 79', years: '2007-2024', variants: ['Single Cab', 'Double Cab', 'V8', '2.8 GD-6'] }
    ],
    images: ['/products/tough-dog-9-stage-lc79.jpg'],
    inStock: true,
    sku: 'TD-LC79-ADJ-WORK',
    badge: 'Workhorse'
  },

  // Takla Products
  {
    id: 'takla-001',
    name: 'Takla Signature Range Seat Covers for Land Cruiser 300 (Airbag Compatible)',
    slug: 'takla-signature-executive-lc300',
    brand: 'Takla 4x4',
    category: 'Interior',
    subcategory: 'Seat Protection',
    price: 13550,
    description:
      'You didn\'t buy a Land Cruiser 300 to sit on rough canvas. The Takla Signature Range is engineered specifically for the luxury SUV market. It features an exclusive 8mm Laminated Foam backing that molds the cover to the seat, giving it an upholstered "factory fit" look that is often mistaken for the original leather. Constructed from Takla\'s proprietary Cantech fabric, these covers are soft to the touch (like cotton) but are 100% synthetic and waterproof. This means they are completely resistant to sweat, mud, and stains, but remain breathable and comfortable on long drives.',
    shortDescription:
      'The only seat cover that feels as premium as the car itself. Takla\'s Signature range uses padded "Cantech" fabric to provide 100% waterproofing without the "sweaty plastic" feel of canvas or nylon.',
    features: [
      'Airbag Safe: Precision stitching ensures side airbags deploy instantly in an emergency',
      'Living Room Comfort: The 8mm foam padding adds a layer of plush comfort and prevents the "wrinkling" common in cheaper covers',
      'Lifetime Warranty: Takla stands by the Signature range for the life of the vehicle',
      'Breathable: Unlike neoprene or canvas, Cantech fabric breathes, preventing "sweat back" on hot African days',
      'Premium Feel: Soft to the touch like cotton but 100% synthetic and waterproof',
      'Factory Fit: Often mistaken for original leather upholstery'
    ],
    specifications: {
      'Material': 'Cantech (Micro-textured Synthetic)',
      'Padding': '8mm Fire-Retardant Foam',
      'Waterproofing': '100% Waterproof',
      'Maintenance': 'Hand Wash / Wipe Clean',
      'Fitment': 'Full Set (Front + Middle + Rear Rows)',
      'Warranty': 'Lifetime Warranty'
    },
    fitment: [
      { make: 'Toyota', model: 'Land Cruiser 300', years: '2021-2024', variants: ['GX-R', 'ZX', 'GR-S', 'VX'] }
    ],
    images: ['/products/takla-signature-lc300.jpg'],
    inStock: true,
    sku: 'TAK-SC-LC300-SIG',
    badge: 'Executive'
  },
  {
    id: 'takla-002',
    name: 'Takla "Cantech" Heavy Duty Loadliner for Land Cruiser 76 Wagon',
    slug: 'takla-loadliner-boot-protection-lc76',
    brand: 'Takla 4x4',
    category: 'Interior',
    subcategory: 'Cargo',
    price: 6150,
    description:
      'The Land Cruiser 76 is often used as a truck, but its carpeted boot isn\'t built for firewood, hunting gear, or wet dogs. The Takla Loadliner is the ultimate solution. It is not just a floor mat; it is a complete "bath" that lines the entire cargo area, including the wheel arches and the back of the rear seats. Made from an ultra-tough, padded version of the Cantech fabric, it is nearly impossible to tear and is fully waterproof. You can load abrasive cargo without worrying about scratching the plastic trim or ruining the carpets.',
    shortDescription:
      'Transform the back of your 76 Wagon into a waterproof bakkie bed. This fully padded liner protects the floor, sides, and rear door from scratches, dog hair, and chemical spills.',
    features: [
      'Full Coverage: Covers the floor, side panels, wheel arches, and rear seat backs',
      'Dog Proof: The synthetic weave does not trap hair, making it easy to vacuum or wipe clean',
      'Bumper Flap: Includes a fold-out flap to protect your rear bumper from scratches when loading heavy items or dogs jumping in',
      'Split Seat Compatible: Designed to work with the 76\'s folding rear seats, so you don\'t lose utility',
      'Ultra-Tough: Nearly impossible to tear, fully waterproof',
      'Easy Maintenance: Wipe clean or hose down'
    ],
    specifications: {
      'Material': 'Heavy Duty Cantech (Padded)',
      'Coverage': 'Floor to Window Line',
      'Waterproof': '100%',
      'Fastening': 'Velcro & Clip System (No Drilling)',
      'Warranty': 'Lifetime Warranty',
      'Fitment': 'Land Cruiser 76 Wagon Specific'
    },
    fitment: [
      { make: 'Toyota', model: 'Land Cruiser 76', years: '2007-2024', variants: ['Station Wagon'] }
    ],
    images: ['/products/takla-loadliner-lc76.jpg'],
    inStock: true,
    sku: 'TAK-LL-LC76-PRO',
    badge: 'Heavy Duty'
  },
  {
    id: 'takla-003',
    name: 'Takla "Takmat" Sound & Heat Deadening Floor Mats (LC79)',
    slug: 'takla-takmat-sound-deadening-lc79',
    brand: 'Takla 4x4',
    category: 'Interior',
    subcategory: 'Floor Protection',
    price: 5150,
    description:
      'The Land Cruiser 79 is a workhorse, which means the cabin can get hot and loud—especially around the transmission tunnel. Takla Takmats are unique in the market because they include a specialized Sound and Heat Deadening layer integrated into the mat. Covering 92% of the floor area (far more than standard rubber mats), they effectively "seal" the floor. The top surface is a waterproof synthetic that is easy to scrub clean of mud and manure, making them ideal for farming and mining applications.',
    shortDescription:
      'The only floor mat that quietens the cabin. These custom-molded mats feature a specialized insulating layer to reduce engine heat and road noise, essential for the 79 Series.',
    features: [
      'Acoustic Insulation: Drastically reduces the "drone" from mud-terrain tires and the V8/Diesel engine noise',
      'Heat Shielding: Blocks the heat transfer from the gearbox and exhaust that warms up the driver\'s leg',
      'Full Containment: The "tub" design holds liters of water or mud, preventing it from leaking onto the vehicle\'s carpets',
      'Velcro Lock: Secures firmly to the floor so it never slides under the pedals—a critical safety feature',
      '92% Coverage: Far more than standard rubber mats',
      'Easy Cleaning: Hose or scrub clean of mud and manure'
    ],
    specifications: {
      'Coverage': '92% of Floor Area',
      'Layers': 'Waterproof Top / Insulating Core / Grip Base',
      'Function': 'Sound & Heat Reduction',
      'Cleaning': 'Hose / Scrub Clean',
      'Fitment': 'Single Cab or Double Cab Specific',
      'Warranty': 'Lifetime Warranty'
    },
    fitment: [
      { make: 'Toyota', model: 'Land Cruiser 79', years: '2007-2024', variants: ['Single Cab', 'Double Cab'] }
    ],
    images: ['/products/takla-takmat-lc79.jpg'],
    inStock: true,
    sku: 'TAK-MAT-LC79-SD',
    badge: 'Sound Deadening'
  },
  {
    id: 'takla-004',
    name: 'Takla Cantech Endurance Seat Covers for Land Cruiser 78 Troopy',
    slug: 'takla-cantech-troopy-seat-covers-lc78',
    brand: 'Takla 4x4',
    category: 'Interior',
    subcategory: 'Seat Protection',
    price: 6745,
    description:
      'Overlanding in a Troop Carrier means living in your seats for 8 hours a day. Canvas covers are rough and abrasive; Neoprene gets hot and sweaty. Takla Cantech is the perfect middle ground. It offers the durability of a synthetic (lifetime warranty) but with a soft "natural fiber" feel that makes long-distance travel comfortable. This set is tailored for the 78 Series configuration, covering the two front bucket seats and the rear bench (if fitted). They are machine washable, meaning you can strip them off after a dusty Namibia trip and they come out looking new.',
    shortDescription:
      'Built for the long haul. These heavy-duty seat covers are 100% waterproof and sweat-resistant, designed to keep your Troopy\'s interior fresh even after weeks in the bush.',
    features: [
      'Sweat Resistant: The fabric wicks moisture rather than absorbing it, preventing "wet seat" smells',
      'Machine Washable: Can be washed at 40°C, making them easy to maintain after muddy trips',
      'Toughness: Chemical and stain resistant—oil, diesel, or coffee spills wipe right off',
      'Snug Fit: Tailored specifically for the 70 Series seats to prevent bunching or sliding',
      'Soft Feel: Natural fiber feel without the rough canvas texture',
      'Long Distance Comfort: Designed for 8+ hour driving days'
    ],
    specifications: {
      'Material': 'Cantech (Non-Padded for durability)',
      'Waterproof': '100%',
      'Warranty': 'Lifetime Warranty',
      'Set Includes': '2x Front Seats + Headrests (Rear Bench Optional)',
      'Colors': 'Beige / Grey / Black',
      'Care': 'Machine Washable (40°C)'
    },
    fitment: [
      { make: 'Toyota', model: 'Land Cruiser 78', years: '2007-2024', variants: ['Troopy', 'Troop Carrier'] }
    ],
    images: ['/products/takla-cantech-lc78.jpg'],
    inStock: true,
    sku: 'TAK-SC-LC78-CAN',
    badge: 'Endurance'
  },

  // Onca 4x4 Products
  {
    id: 'onca-001',
    name: 'Onca Extreme Rock Sliders for Land Cruiser 79 Double Cab',
    slug: 'onca-extreme-rock-sliders-lc79-double-cab',
    brand: 'Onca 4x4',
    category: 'Armour',
    subcategory: 'Side Protection',
    price: 16500,
    description:
      'The Land Cruiser 79 Double Cab has a massive wheelbase, making it prone to "bellying out" on break-over obstacles. The factory aluminum steps will fold under the vehicle\'s weight. Onca Extreme Rock Sliders are built from D50x2mm Structural Tubing to take the hit so your chassis doesn\'t have to. Using a "Clamp-On" chassis bracket system, these sliders distribute the load across the frame without requiring welding. The High-Mount design sits tighter to the body than stock steps, actually increasing your ground clearance for technical driving.',
    shortDescription:
      'Protect the long belly of your 79 Double Cab with D50 mandrel-bent steel sliders. High-mount design increases ground clearance while providing a solid jacking point.',
    features: [
      'Mandrel-Bent Strength: Constructed from continuous D50 tubing that maintains its wall thickness through the bends for superior impact resistance',
      'Chassis Mounted: 3-Point heavy-duty clamp system distributes impact load evenly along the chassis rail',
      'High Clearance: Tucks up high to improve break-over angles, crucial for the long-wheelbase 79',
      'Resale Friendly: Fully bolt-on installation means no welding or cutting of the chassis, preserving the vehicle\'s resale value',
      'Tread Plate: Laser cut steel with stainless backing plate for grip and durability',
      'Premium Finish: Texture black powder coat for scratch resistance'
    ],
    specifications: {
      'Material': 'D50x2mm Mandrel Bent Tubing',
      'Mounting': '3-Point Bolt-On Chassis Clamps',
      'Tread': 'Laser Cut Steel with Stainless Backing Plate',
      'Finish': 'Texture Black Powder Coat',
      'Fitment': 'Double Cab Specific (S/Cab also available)',
      'Weight': 'Approx. 35kg - 40kg'
    },
    fitment: [
      { make: 'Toyota', model: 'Land Cruiser 79', years: '2007-2024', variants: ['Double Cab', 'Single Cab'] }
    ],
    images: ['/products/onca-extreme-rock-sliders-lc79.jpg'],
    inStock: true,
    sku: 'ONCA-RS-LC79DC-EXT',
    badge: 'Extreme'
  },
  {
    id: 'onca-002',
    name: 'Onca Extreme LDX-GEN2 Bullbar for Land Cruiser 79 (Winch Compatible)',
    slug: 'onca-extreme-ldx-gen2-lc79',
    brand: 'Onca 4x4',
    category: 'Armour',
    subcategory: 'Front Protection',
    price: 33200,
    description:
      'The Land Cruiser 79 is the master of Africa, but the stock bumper is its weakest link. The Onca Extreme LDX-GEN2 is designed for the operator who pushes their equipment to the limit. Unlike the "sleek" urban bumpers, this unit features heavy-duty outer pipework that wraps around your headlights and fenders, offering maximum protection against animal strikes in the bush. Engineered specifically for the 70 Series chassis, it retains the vehicle\'s legendary approach angle while integrating a Front Tow Hitch Receiver—essential for maneuvering heavy trailers or boat launching from the nose.',
    shortDescription:
      'The ultimate frontline defense for the 79 Series. Features Onca\'s heavy-duty pipework for maximum headlight protection, integrated tow hitch receiver, and high-volume airflow vents for the V8/2.8GD-6 engines.',
    features: [
      'Full Wrap Protection: Heavy-duty outer pipework protects the fenders and headlights from brush and impact—a must for narrow bush tracks',
      'Patented Safety: Features the Onca Airbag Crumple Zone mounting system, ensuring full ADR compliance and safety on the road',
      'Integrated Receiver: Built-in 2-inch square hitch receiver for maneuverability and mounting removable winches',
      'Cooling Ready: Large, laser-cut airflow ports ensure the intercooler and radiator receive maximum cooling, critical for the V8 Diesel engine',
      'Winch Compatible: Internal cradle accommodates up to 12,000lb low-profile winches',
      'Recovery Points: 2x Integrated Hi-Lift Jack Points for safe recovery operations'
    ],
    specifications: {
      'Material': 'Mild Steel (Laser Cut & CNC Bent)',
      'Finish': 'Texture Black Powder Coat',
      'Winch Compatible': 'Yes (Internal Cradle up to 12,000lb)',
      'Recovery': '2x Integrated Hi-Lift Jack Points',
      'Lights': 'Recessed Fog Light Ports (LED Optional)',
      'Front Hitch': '2-inch Square Receiver'
    },
    fitment: [{ make: 'Toyota', model: 'Land Cruiser 79', years: '2007-2024', variants: ['Single Cab', 'Double Cab', 'V8', '2.8 GD-6'] }],
    images: ['/images/onca/Onca Extreme LDX-GEN2 Bull Bar - LC79.jpg'],
    inStock: true,
    sku: 'ONCA-BB-LC79-LDX',
    badge: 'Heavy Duty'
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
    id: 'onca-012',
    name: 'Onca Heavy Duty Rear Towbar (LC79) - 3.5 Ton Rated',
    slug: 'onca-heavy-duty-towbar-lc79',
    brand: 'Onca 4x4',
    category: 'Utility',
    subcategory: 'Rear Protection',
    price: 13250,
    description:
      'The stock towbar on the Land Cruiser 79 hangs low and acts as a "plough" off-road. The Onca Heavy Duty Towbar is a complete rear protection system. It profiles tightly to the rear chassis to improve your departure angle while maintaining a certified 3.5 Ton Towing Capacity. Crucially for the 79 Series, this towbar is modular. It serves as the base for adding Single or Double Spare Wheel Carriers, moving your spare tire out from under the chassis (where it drags in sand) to the back of the vehicle for easy access.',
    shortDescription:
      'A full replacement rear towbar designed for heavy hauling. Features a 3.5T rating, removable hitch, and modular mounting points for spare wheel carriers and jerry can holders.',
    features: [
      'Certified Towing: Fully SABS tested and rated for 3.5 Ton towing capacity',
      'Modular Design: Pre-drilled and engineered to accept Onca\'s Swing-Away Spare Wheel and Jerry Can carriers (Sold Separately)',
      'Departure Angle: High-clearance profile reduces rear drag in sand and mud',
      'Recovery Points: Integrated heavy-duty bow shackle points for safe rear recovery',
      'Removable Hitch: Square hitch receiver for easy removal when not towing',
      'Plug-and-Play Wiring: Trailer harness included for easy installation'
    ],
    specifications: {
      'Rating': '3,500kg (3.5 Ton)',
      'Hitch': 'Removable Square Hitch Receiver',
      'Wiring': 'Plug-and-Play Trailer Harness Included',
      'Mounting': 'Optimized Chassis Points',
      'Options': 'Compatible with Spare Wheel/Jerry Can Arms',
      'Finish': 'Heavy-duty powder coat'
    },
    fitment: [{ make: 'Toyota', model: 'Land Cruiser 79', years: '2007-2024', variants: ['Single Cab', 'Double Cab'] }],
    images: ['/products/onca-heavy-duty-towbar-lc79.jpg'],
    inStock: true,
    sku: 'ONCA-TB-LC79-HD',
    badge: '3.5 Ton Rated'
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
    name: 'Onca RXT Premium Bullbar for Land Cruiser 300 (Airbag Compatible)',
    slug: 'onca-rxt-bull-bar-lc300',
    brand: 'Onca 4x4',
    category: 'Armour',
    subcategory: 'Front Protection',
    price: 34250,
    description:
      'Your Land Cruiser 300 is a masterpiece of engineering, but its stock plastic bumper wasn\'t built for the African bush. The Onca RXT Bullbar is the only protection system that respects the LC300\'s sophisticated design while adding fortress-level strength. Unlike agricultural "pipe bumpers" that ruin the lines of the 300, the RXT features a laser-cut, CNC-bent faceted design that mirrors the vehicle\'s factory aesthetics. It provides critical protection against animal strikes without interfering with the complex safety systems of the TNGA-F platform.',
    shortDescription:
      'The ultimate fusion of luxury and protection. The Onca RXT is engineered specifically for the Land Cruiser 300, offering ADR-compliant airbag safety, full parking sensor integration, and high-volume airflow for twin-turbo cooling.',
    features: [
      'Intelligent Safety: Features Onca\'s patented Crumple Zone Mounting System, ensuring your airbags deploy exactly when they are supposed to—and never when they aren\'t',
      'Tech Integration: Precision-cut provisions for Front Parking Sensors and Radar Cruise Control modules, ensuring no dashboard error codes',
      'Twin-Turbo Cooling: Engineered with High-Volume Airflow Vents to feed the intercoolers of the 3.3L Diesel and 3.5L Petrol V6 engines',
      'Winch Ready: Hidden internal winch cradle accommodates up to 12,000lb low-profile winches',
      'Recovery Points: Integrated high-strength bow shackle recovery points for safe extraction',
      'Premium Finish: 3-Stage Power Coating (Military Spec Primer + Texture Black)'
    ],
    specifications: {
      'Material': 'High-Grade Steel (Laser Cut & CNC Bent)',
      'Finish': '3-Stage Power Coating (Military Spec Primer + Texture Black)',
      'Airbag Compatible': 'Yes (ADR Compliant)',
      'Sensor Compatible': 'Yes (Parking Sensors & Radar)',
      'Winch Compatible': 'Yes (Internal Cradle)',
      'Weight': 'Approx. 65kg - 75kg'
    },
    fitment: [{ make: 'Toyota', model: 'Land Cruiser 300', years: '2021-2024', variants: ['GX-R', 'ZX', 'GR-S', 'VX'] }],
    images: ['/products/onca-rxt-lc300.jpg'],
    inStock: true,
    sku: 'ONCA-BB-LC300-RXT',
    badge: 'Radar Safe'
  },
  {
    id: 'onca-007',
    name: 'Onca Heavy Duty Rock Sliders for Land Cruiser 300 (High-Mount Design)',
    slug: 'onca-rock-sliders-lc300',
    brand: 'Onca 4x4',
    category: 'Armour',
    subcategory: 'Side Protection',
    price: 24592,
    description:
      'The factory side steps on the Land Cruiser 300 are made of plastic and lightweight aluminum—great for the mall, but they will shatter on the first rock you slide over. Onca Heavy Duty Rock Sliders are built for the reality of the trail. Using D60 Mandrel-bent round tubing, these sliders offer a "High Mount" design that actually increases your ground clearance compared to stock steps. They are not just steps; they are armor. You can jack the vehicle up from them, slide over rocks, and protect your door sills from expensive damage.',
    shortDescription:
      'Replace your fragile factory side steps with true rocker protection. Manufactured from D60 Mandrel-bent tubing, these sliders bolt directly to the chassis to support the full weight of the vehicle during extreme off-roading.',
    features: [
      'Chassis Mounted: Uses a heavy-duty "Clamp and Bolt" system that grips the chassis frame for maximum structural rigidity—no welding required',
      'High-Clearance Design: Tucks tighter to the body than stock steps, improving your break-over angle for cresting dunes and rocks',
      'Extreme Durability: Constructed from D60 structural tubing with laser-cut top tread plates for grip',
      'Coating: Finished in Onca\'s signature heavy-duty texture black powder coat for scratch resistance'
    ],
    specifications: {
      'Material': 'D60 Mandrel Bent Round Tube',
      'Mounting': 'Bolt-On Chassis Clamps (No Drilling/Welding)',
      'Finish': 'Texture Black Powder Coat',
      'Design': 'High-Mount (Improved Ground Clearance)',
      'Tread': 'Laser Cut Grip Plate'
    },
    fitment: [{ make: 'Toyota', model: 'Land Cruiser 300', years: '2021-2024', variants: ['GX-R', 'ZX', 'GR-S', 'VX'] }],
    images: ['/products/onca-rock-sliders-lc300.jpg'],
    inStock: true,
    sku: 'ONCA-RS-LC300-HD',
    badge: 'Heavy Duty'
  },
  {
    id: 'onca-008',
    name: 'Onca RXT Overland Aluminum Roof Rack for Land Cruiser 300',
    slug: 'onca-rxt-roof-rack-lc300',
    brand: 'Onca 4x4',
    category: 'Cargo',
    subcategory: 'Touring',
    price: 20250,
    description:
      'The Land Cruiser 300 has a lower roof rating than the 70 Series, making weight savings critical. The Onca RXT Overland Rack is manufactured from high-grade aluminum to keep weight down, allowing you to use more of your payload for gear, water, and fuel. Its aerodynamic, low-profile design minimizes wind noise on the highway—a crucial factor for the quiet LC300 cabin. The modular slat system allows you to bolt on jerry can holders, shovel mounts, and rooftop tents easily without drilling new holes.',
    shortDescription:
      'A lightweight, low-profile expedition rack designed to carry rooftop tents and fuel without raising the LC300\'s center of gravity. Modular rail system for infinite accessory configurations.',
    features: [
      'Lightweight Alloy: Fully aluminum construction reduces top-heaviness, preserving the LC300\'s handling stability',
      'Wind Deflector: Integrated front wind fairing to reduce drag and wind howl at highway speeds',
      'Modular Rails: "T-Slot" style rails allow for easy mounting of Front Runner or Onca specific accessories',
      'Low Profile: Sits aggressively close to the roofline for a sleek, modern aesthetic that fits the 300\'s profile'
    ],
    specifications: {
      'Material': 'High-Grade Aluminum',
      'Weight': 'Approx. 25kg (Rack Only)',
      'Profile': 'Low-Profile Overland Design',
      'Mounting': 'Uses Factory Roof Mounting Points',
      'Accessory System': 'Modular T-Slot Rails'
    },
    fitment: [{ make: 'Toyota', model: 'Land Cruiser 300', years: '2021-2024', variants: ['GX-R', 'ZX', 'GR-S', 'VX'] }],
    images: ['/products/onca-rxt-roof-rack-lc300.jpg'],
    inStock: true,
    sku: 'ONCA-RR-LC300-RXT',
    badge: 'Lightweight'
  },
  {
    id: 'onca-009',
    name: 'Onca RFX-LD Premium Bullbar for Land Cruiser 76 (Airbag Compatible)',
    slug: 'onca-rfx-ld-bullbar-lc76',
    brand: 'Onca 4x4',
    category: 'Armour',
    subcategory: 'Front Protection',
    price: 29750,
    description:
      'The Land Cruiser 76 is built to go where others can\'t, but its factory bumper is a liability in the bush. The Onca RFX-LD (Light Duty design, Heavy Duty strength) is engineered to protect your radiator and steering components from animal strikes without adding unnecessary weight to the front axle. Designed specifically for the J76 platform, this bar features a laser-cut, CNC-bent construction that matches the squared-off aesthetic of the Cruiser. Unlike generic bars, it includes a built-in Front Tow Hitch Receiver, allowing you to maneuver trailers into tight campsites with ease—a game-changer for the 76 owner.',
    shortDescription:
      'The definitive heavy-duty frontal protection for the 76 Station Wagon. Features Onca\'s patented airbag crumple zones, integrated winch cradle, and flush-mount LED provisions.',
    features: [
      'Crumple Zone Tech: Patented mounting system ensures full ADR Airbag compliance, keeping you safe on the tar and protected in the bush',
      'Integrated Towing: Built-in front receiver hitch (2-inch square) for spotting trailers or mounting removable winch cradles',
      'Recovery Ready: Features reinforced High-Lift Jack points and heavy-duty bow shackle recovery points',
      'Cooling Airflow: Large ventilation ports designed to maintain airflow to the 4.5L V8 or 2.8L GD-6 radiators',
      'LED Provisions: Flush-mount provisions for integrated LED fog/driving lights',
      'Premium Finish: 3-Stage Power Coating (Texture Black)'
    ],
    specifications: {
      'Material': 'Mild Steel (Laser Cut & CNC Bent)',
      'Finish': '3-Stage Power Coating (Texture Black)',
      'Winch Compatible': 'Yes (Low Profile up to 12,000lb)',
      'Lights': 'Provisions for Integrated LED Fog/Driving Lights',
      'Recovery': '2x Shackle Points + 2x Hi-Lift Points',
      'Front Hitch': '2-inch Square Receiver'
    },
    fitment: [{ make: 'Toyota', model: 'Land Cruiser 76', years: '2007-2024', variants: ['V8', '2.8 GD-6', '2024+ Facelift'] }],
    images: ['/products/onca-rfx-ld-bullbar-lc76.jpg'],
    inStock: true,
    sku: 'ONCA-BB-LC76-RFX',
    badge: 'Airbag Safe'
  },
  {
    id: 'onca-010',
    name: 'Onca Rear Bumper Replacement with Swing-Away Wheel Carrier (LC76)',
    slug: 'onca-rear-bumper-wheel-carrier-lc76',
    brand: 'Onca 4x4',
    category: 'Armour',
    subcategory: 'Rear Protection',
    price: 36250,
    description:
      'The Achilles\' heel of the Land Cruiser 76 is its rear door. The heavy spare wheel eventually fatigues the hinges, causing rattling and dust ingress. The Onca Rear Bumper Replacement solves this permanently by moving the wheel onto a chassis-mounted swing arm. Beyond carrying the wheel, this unit massively improves your departure angle for technical off-roading. It integrates a heavy-duty towbar and features dual swing-arm capability (optional), allowing you to carry a second spare wheel or a jerry can holder for extended range touring.',
    shortDescription:
      'Solve the LC76\'s weak rear door problem. This full bumper replacement moves the spare wheel to a heavy-duty swing arm, protecting your hinges and offering integrated towing and recovery points.',
    features: [
      'Hinge Protection: Relocates the spare wheel weight off the door and onto the chassis, preventing body fatigue',
      'Swing-Away Arms: Heavy-duty arms with stainless steel "throw-over" catches and greasable shafts for smooth operation',
      'Integrated Towing: Includes a removable tow hitch and plug-and-play trailer wiring harness',
      'Custom Layout: Available in Single Wheel, Double Wheel, or Wheel + Jerry Can configurations (Select option at checkout)',
      'Improved Departure Angle: Massively improves departure angle for technical off-roading',
      'LED Tail Lights: LED replacement units included'
    ],
    specifications: {
      'Construction': 'Heavy Duty CNC Bent Steel',
      'Bushings': 'EN19 Steel with Serviceable Nylon Inner',
      'Towing Capacity': '3,500kg Rated (Check Vehicle GCM)',
      'Tail Lights': 'LED Replacement Units Included',
      'Configuration': 'Single or Double Arm Compatible',
      'Weight': 'Approx. 85kg - 95kg'
    },
    fitment: [{ make: 'Toyota', model: 'Land Cruiser 76', years: '2007-2024' }],
    images: ['/products/onca-rear-bumper-lc76.jpg'],
    inStock: true,
    sku: 'ONCA-RB-LC76-SWC',
    badge: 'Door Saver'
  },
  {
    id: 'onca-011',
    name: 'Onca Extreme Rock Sliders for Land Cruiser 76 (Chassis Mounted)',
    slug: 'onca-extreme-rock-sliders-lc76',
    brand: 'Onca 4x4',
    category: 'Armour',
    subcategory: 'Side Protection',
    price: 15500,
    description:
      'The Land Cruiser 76 has a long belly for a "short" wheelbase vehicle. The Onca Extreme Rock Sliders provide a critical defense line for your sills and lower doors against rocks and tree stumps. Unlike the cosmetic aluminum steps found on city SUVs, these are built from D50x2mm Structural Tubing. They feature a "High Mount" design that tucks tight to the body, actually improving your ground clearance compared to the factory side steps. The laser-cut tread plate features the Land Cruiser logo and provides a non-slip surface for accessing roof racks.',
    shortDescription:
      'Full-length side protection for the 76 Station Wagon. Manufactured from D50 Mandrel-bent tubing, these sliders are designed to support the vehicle\'s weight during recovery or technical driving.',
    features: [
      'Solid Mounting: Uses a 3-point chassis "Clamp and Bolt" system for maximum rigidity without welding',
      'Impact Grade: Constructed from D50 Mandrel-bent tubing to withstand direct rock impacts',
      'High Clearance: Designed to sit higher than the chassis rails to prevent hanging up on obstacles',
      'Grip: Laser-cut aluminum tread plate ensures safe entry/exit in muddy conditions',
      'Logo Detail: Laser-cut Land Cruiser logo on tread plate',
      'Full Length: Full wheel-to-wheel coverage specific to LC76'
    ],
    specifications: {
      'Material': 'D50x2mm High Tensile Steel Tube',
      'Mounting': '3-Point Chassis Clamp System',
      'Tread Plate': 'Laser Cut Aluminum with Logo',
      'Finish': 'Texture Black Powder Coat',
      'Length': 'Full Wheel-to-Wheel (76 Specific)',
      'Weight': 'Approx. 35kg - 40kg'
    },
    fitment: [{ make: 'Toyota', model: 'Land Cruiser 76', years: '2007-2024' }],
    images: ['/products/onca-extreme-rock-sliders-lc76.jpg'],
    inStock: true,
    sku: 'ONCA-RS-LC76-EXT',
    badge: 'Extreme'
  },
  {
    id: 'onca-013',
    name: 'Onca RFX-LD Touring Bullbar for Land Cruiser 78 (Winch Compatible)',
    slug: 'onca-rfx-ld-touring-bullbar-lc78',
    brand: 'Onca 4x4',
    category: 'Armour',
    subcategory: 'Front Protection',
    price: 30000,
    description:
      'The Land Cruiser 78 is built to cross continents, but a single kudu strike in the middle of the Serengeti can end the trip. The Onca RFX-LD Bullbar is designed specifically for the overlander who values weight savings as much as protection. By using a faceted, laser-cut design instead of heavy steam pipe, the RFX-LD reduces weight over the front axle—critical for the Troopy, which often suffers from "nose diving" when fully loaded. Despite its lighter profile, it retains all the heavy-duty essentials: a fully integrated winch cradle, high-lift jack points, and Onca\'s patented airbag-compliant mounting system.',
    shortDescription:
      'The ideal frontal protection for long-distance touring. The RFX-LD (Light Duty design) offers full radiator protection and winch compatibility without the excessive weight of commercial pipe bumpers.',
    features: [
      'Touring Spec: Lighter than the "Extreme" series to preserve front suspension travel and handling',
      'Recovery Ready: Integrated cradle accepts low-profile winches (up to 12,000lb) and features dual High-Lift Jack points',
      'Front Hitch: Includes a 2-inch square receiver hitch for mounting accessories or maneuvering trailers into tight campsites',
      'Airbag Safe: ADR-compliant mounting system ensures your safety systems function correctly on the tarmac',
      'Weight Savings: Faceted design reduces front axle weight compared to heavy pipe bumpers',
      'Premium Finish: Texture black powder coat for durability'
    ],
    specifications: {
      'Material': 'CNC Bent Mild Steel',
      'Finish': 'Texture Black Powder Coat',
      'Winch Compatible': 'Yes (Hidden Cradle)',
      'Airbag Compatible': 'Yes (ADR Compliant)',
      'Fitment': '78 Series Troop Carrier Specific',
      'Front Hitch': '2-inch Square Receiver'
    },
    fitment: [{ make: 'Toyota', model: 'Land Cruiser 78', years: '2007-2024', variants: ['Troopy', 'Troop Carrier'] }],
    images: ['/products/onca-rfx-ld-touring-bullbar-lc78.jpg'],
    inStock: true,
    sku: 'ONCA-BB-LC78-RFX',
    badge: 'Touring'
  },
  {
    id: 'onca-014',
    name: 'Onca Expedition Aluminum Roof Rack for Land Cruiser 78 (Full Length)',
    slug: 'onca-expedition-roof-rack-lc78',
    brand: 'Onca 4x4',
    category: 'Cargo',
    subcategory: 'Touring',
    price: 26250,
    description:
      'The roof of a Land Cruiser 78 is prime real estate. The Onca Expedition Roof Rack is engineered to utilize every square inch of it. Spanning the full length of the vehicle, it provides a massive platform for rooftop tents, solar panels, and storage boxes. Critically for the tall Troopy, this rack is constructed from high-strength aluminum to keep the center of gravity low. It features Onca\'s modular rail system, allowing you to bolt on jerry can holders, shovel mounts, and awning brackets anywhere along the perimeter without drilling.',
    shortDescription:
      'Maximize the massive roof line of your Troop Carrier. This full-length (2.2m+) aluminum rack is engineered to carry rooftop tents, awnings, and fuel without crushing your GVM.',
    features: [
      'Full Coverage: Custom-sized specifically for the extra-long roof of the 78 Series',
      'Lightweight Alloy: Aluminum construction significantly reduces top-heaviness compared to steel racks, improving stability in side-winds',
      'Modular Rails: "T-Slot" style rails allow for infinite accessory configurations (compatible with standard M8 bolts)',
      'Wind Deflector: Integrated wind fairing reduces the wind noise that plagues standard 70 Series gutters',
      'No Drilling: Uses factory gutter mounting points for easy installation',
      'Expedition Ready: Designed to carry rooftop tents, solar panels, and storage boxes'
    ],
    specifications: {
      'Length': 'Approx. 2200mm - 2400mm (Full Length)',
      'Material': 'High-Grade Aluminum',
      'Mounting': 'Gutter Mount System (Heavy Duty)',
      'Weight': 'Approx. 45kg',
      'Capacity': 'Rated to Vehicle Roof Limit',
      'Accessory System': 'Modular T-Slot Rails'
    },
    fitment: [{ make: 'Toyota', model: 'Land Cruiser 78', years: '2007-2024', variants: ['Troopy', 'Troop Carrier'] }],
    images: ['/products/onca-expedition-roof-rack-lc78.jpg'],
    inStock: true,
    sku: 'ONCA-RR-LC78-EXP',
    badge: 'Full Length'
  },
  {
    id: 'onca-015',
    name: 'Onca Rear Bumper with Double Spare Wheel Carrier (LC78)',
    slug: 'onca-rear-bumper-double-wheel-carrier-lc78',
    brand: 'Onca 4x4',
    category: 'Armour',
    subcategory: 'Rear Protection',
    price: 39000,
    description:
      'When you are crossing the Kaokoveld or the Kalahari, one spare tyre is not enough. The Onca Double Wheel Carrier is the definitive upgrade for the expedition-ready Troop Carrier. By relocating both spares to the rear bumper, you free up vital interior space for sleeping or drawer systems. This unit replaces the standard rear bumper with a heavy-duty steel protection bar that integrates a 3.5T towbar and dual swing-arms. The arms are engineered with industrial bearings to handle the immense weight of 35-inch mud tyres without sagging or rattling.',
    shortDescription:
      'The ultimate long-range solution. Carries TWO full-size spare wheels on heavy-duty swing arms, protecting your barn doors and doubling your survival redundancy.',
    features: [
      'Double Redundancy: Carries 2x Full Size Spare Wheels (or 1x Wheel + 2x Jerry Cans via optional adapter)',
      'Door Protection: Removes the heavy spare from the right-hand barn door, preventing the common sheet metal fatigue cracks',
      'Integrated Towing: Built-in heavy-duty tow hitch receiver with plug-and-play wiring',
      'Departure Angle: High-clearance profile prevents the rear end from dragging in deep sand tracks',
      'Industrial Bearings: Serviceable bearings handle the weight of 35-inch mud tyres without sagging',
      'LED Lighting: LED tail light replacement units included'
    ],
    specifications: {
      'Construction': 'Heavy Duty Steel',
      'Arms': 'Dual Swing-Away with Gas Struts (Optional)',
      'Bearings': 'Serviceable Industrial Bearings',
      'Lights': 'LED Tail Light Replacement Units',
      'Towing': '3,500kg Rated Receiver',
      'Configuration': 'Left Hand Arm configurable (Wheel/Jerry Cans/Ladder)',
      'Weight': 'Approx. 90kg - 100kg'
    },
    fitment: [{ make: 'Toyota', model: 'Land Cruiser 78', years: '2007-2024', variants: ['Troopy', 'Troop Carrier'] }],
    images: ['/products/onca-rear-bumper-double-wheel-carrier-lc78.jpg'],
    inStock: true,
    sku: 'ONCA-RB-LC78-DBL',
    badge: 'Expedition'
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
      'Fitment Notes': 'KDSS compatible setup available'
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

