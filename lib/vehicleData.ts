export const vehicleMakes = [
  'Toyota',
  'Ford',
  'Nissan',
  'Isuzu',
  'Mitsubishi',
  'Land Rover',
  'Suzuki',
];

export const vehicleModels: Record<string, string[]> = {
  Toyota: [
    'Land Cruiser 70 Series',
    'Land Cruiser 200 Series',
    'Land Cruiser 300 Series',
    'Prado',
    'Hilux Revo',
    'Hilux Legend',
    'Fortuner',
  ],
  Ford: ['Next-Gen Ranger', 'Ranger T6', 'Everest'],
  Nissan: ['Navara', 'Patrol'],
  Isuzu: ['D-Max', 'MU-X'],
  Mitsubishi: ['Triton', 'Pajero Sport'],
  'Land Rover': ['Defender', 'Discovery'],
  Suzuki: ['Jimny', 'Grand Vitara'],
};

export const vehicleYears = Array.from({ length: 25 }, (_, index) =>
  (2024 - index).toString()
);

