export interface VehicleNavItem {
  name: string;
  badge: string;
  summary: string;
  cta: string;
  href: string;
}

export interface PartNavCategory {
  name: string;
  summary: string;
  items: string[];
  href: string;
}

export const vehicleNavItems: VehicleNavItem[] = [
  {
    name: 'Land Cruiser 300',
    badge: 'Luxury Overland',
    summary: 'Pegasus alloy bars, dual wheel carriers, Tough Dog Foam Cell Pros and Takla Platinum interiors for R1.5m rigs.',
    cta: 'See LC300 Components',
    href: '/vehicles/land-cruiser-300',
  },
  {
    name: 'Land Cruiser 76 (Station Wagon)',
    badge: 'Purebred Station Wagon',
    summary: 'The last real station wagon. Compact enough for technical trails, tough enough for forever. Complete protection and interior systems.',
    cta: 'View LC76 Strategy',
    href: '/vehicles/land-cruiser-76',
  },
  {
    name: 'Land Cruiser 78 (Troop Carrier)',
    badge: 'Expedition Vessel',
    summary: 'The ultimate expedition vessel. Built for the horizon. Complete interior systems, roof racks, and long-range solutions.',
    cta: 'View LC78 Strategy',
    href: '/vehicles/land-cruiser-78',
  },
  {
    name: 'Land Cruiser 79 (Pickup / Bakkie)',
    badge: 'The Workhorse',
    summary: 'Post Type bumpers, Tough Dog & EFS heavy leaf upgrades, Takla interiors and MCC carriers for Africa\'s agricultural workhorse.',
    cta: 'View LC79 Strategy',
    href: '/vehicles/land-cruiser-79',
  },
];

export const partNavCategories: PartNavCategory[] = [
  {
    name: 'Front Protection',
    summary: 'MCC Post and Pegasus bars plus Onca armour engineered for ADR compliance and winch integration.',
    items: ['LC79 Post Type', 'LC300 Pegasus Alloy', 'LC76 RFX-LD', 'LC78 Touring Bullbar'],
    href: '/mcc-4x4',
  },
  {
    name: 'Suspension Systems',
    summary: 'EFS and Tough Dog kits covering heavy payload leaf/coil upgrades, Foam Cell Pros and adjustable shock packages.',
    items: ['LC79 500kg Constant Load', 'LC300 Foam Cell Pro', 'LC76 Comfort Tuned', 'LC78 GVM Upgrades'],
    href: '/tough-dog-suspension',
  },
  {
    name: 'Interior Protection',
    summary: 'Takla Signature seat covers, Cantech workhorse trims, Takmats and load liners that preserve Land Cruiser cabins.',
    items: ['LC300 Platinum Perforated', 'LC79 Signature Seat + Takmat Kit', 'LC76 Floor Liners', 'LC78 Interior Systems'],
    href: '/takla',
  },
  {
    name: 'Rear Protection & Storage',
    summary: 'Rear bars with integrated towbars, dual wheel carriers and Opposite Lock storage bundles.',
    items: ['LC300 Dual Carrier', 'LC79 Heavy Duty Towbar', 'LC76 Swing-Away Carrier', 'LC78 Double Spare Carrier'],
    href: '/opposite-lock',
  },
];

