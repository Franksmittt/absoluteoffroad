export const vehicleMakes = [
  'Toyota',
];

export const vehicleModels: Record<string, string[]> = {
  Toyota: [
    'Land Cruiser 300 Series',
    'Land Cruiser 76 (Station Wagon)',
    'Land Cruiser 78 (Troop Carrier)',
    'Land Cruiser 79 (Pickup / Bakkie)',
  ],
};

export const vehicleYears = Array.from({ length: 25 }, (_, index) =>
  (2024 - index).toString()
);

