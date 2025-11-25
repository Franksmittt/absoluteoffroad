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
    name: 'Land Cruiser 70 / 79',
    badge: 'Fleet & Overland',
    summary: 'Post Type bumpers, Tough Dog & EFS heavy leaf upgrades, Takla interiors and MCC carriers for Africa’s agricultural workhorse.',
    cta: 'View LC70 Strategy',
    href: '/mcc-4x4',
  },
  {
    name: 'Land Cruiser 300',
    badge: 'Luxury Overland',
    summary: 'Pegasus alloy bars, dual wheel carriers, Tough Dog Foam Cell Pros and Takla Platinum interiors for R1.5m rigs.',
    cta: 'See LC300 Components',
    href: '/tough-dog-suspension',
  },
  {
    name: 'Toyota Hilux GD6 / Fortuner',
    badge: 'Everyday + Weekend',
    summary: 'Rocker bars, EFS touring suspension and storage systems for double cabs pulling duties during the week and dirt on weekends.',
    cta: 'Build Hilux/Fortuner',
    href: '/efs-suspension',
  },
  {
    name: 'Toyota Prado 150 / 250',
    badge: 'Family Expedition',
    summary: 'Post/ Phoenix armour, Takla Signature interiors and Opposite Lock accessory bundles keep the school run ready for Botswana.',
    cta: 'Prado Upgrade Path',
    href: '/opposite-lock',
  },
  {
    name: 'Ford Ranger T9 / Raptor',
    badge: 'Tech Platforms',
    summary: 'MCC Pegasus alloy bars, Tough Dog adjustable coils and Onca sliders that respect radar, camera and ACC packs.',
    cta: 'Ranger Protection',
    href: '/mcc-4x4',
  },
  {
    name: 'Isuzu D-Max & GWM P-Series',
    badge: 'Commercial',
    summary: 'Post Type bumpers, Wild Dog recovery gear and EFS load support for fleets that live on gravel.',
    cta: 'Fleet Armour',
    href: '/wild-dog',
  },
];

export const partNavCategories: PartNavCategory[] = [
  {
    name: 'Front Protection',
    summary: 'MCC Post, Rocker and Pegasus bars plus Onca and Wild Dog armour engineered for ADR compliance and winch integration.',
    items: ['Land Cruiser 70 Post Type', 'LC300 Pegasus Alloy', 'Hilux Rocker Triple Loop', 'Ranger T9 Radar-Safe Bars'],
    href: '/mcc-4x4',
  },
  {
    name: 'Suspension Systems',
    summary: 'EFS and Tough Dog kits covering heavy payload leaf/coil upgrades, Foam Cell Pros and adjustable shock packages.',
    items: ['LC79 500kg Constant Load', 'Hilux Touring Coil + Leaf', 'LC300 Foam Cell Pro', 'Ranger Ralph Big Bore'],
    href: '/tough-dog-suspension',
  },
  {
    name: 'Interior Protection',
    summary: 'Takla Signature seat covers, Cantech workhorse trims, Takmats and load liners that preserve Cruiser and Prado cabins.',
    items: ['LC300 Platinum Perforated', 'LC79 Signature Seat + Takmat Kit', 'Prado 150 River Rock', 'Hilux Double Cab Load Liner'],
    href: '/takla',
  },
  {
    name: 'Rear Protection & Storage',
    summary: 'MCC Rocker rear bars with integrated towbars, dual wheel carriers and Opposite Lock storage bundles.',
    items: ['LC300 Dual Carrier', 'Hilux Rocker Rear Tow Bar', 'LC70 Jack Bar', 'Opposite Lock Drawer + Roof Kit'],
    href: '/opposite-lock',
  },
];

