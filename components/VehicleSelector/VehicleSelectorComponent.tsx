'use client';

import React from 'react';
import SelectorCTA from './SelectorCTA';
import { useVehicleSelection } from '@/hooks/useVehicleSelection';
import { vehicleMakes, vehicleModels, vehicleYears } from '@/lib/vehicleData';

export default function VehicleSelectorComponent() {
  const { vehicle, updateVehicle } = useVehicleSelection();

  const handleMakeChange = (make: string) => {
    updateVehicle({ make, model: '', year: '' });
  };

  const handleModelChange = (model: string) => {
    updateVehicle({ ...vehicle, model, year: '' });
  };

  const handleYearChange = (year: string) => {
    updateVehicle({ ...vehicle, year });
  };

  return (
    <div className="bg-primary-50 border-2 border-primary-200 rounded-lg p-6 shadow-lg">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Find Parts for Your Vehicle
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Make Selector */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Make
          </label>
          <select
            value={vehicle.make}
            onChange={(e) => handleMakeChange(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <option value="">Select Make</option>
            {vehicleMakes.map((make) => (
              <option key={make} value={make}>
                {make}
              </option>
            ))}
          </select>
        </div>

        {/* Model Selector */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Model
          </label>
          <select
            value={vehicle.model}
            onChange={(e) => handleModelChange(e.target.value)}
            disabled={!vehicle.make}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
          >
            <option value="">Select Model</option>
            {vehicle.make &&
              vehicleModels[vehicle.make]?.map((model) => (
                <option key={model} value={model}>
                  {model}
                </option>
              ))}
          </select>
        </div>

        {/* Year Selector */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Year
          </label>
          <select
            value={vehicle.year}
            onChange={(e) => handleYearChange(e.target.value)}
            disabled={!vehicle.model}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
          >
            <option value="">Select Year</option>
            {vehicleYears.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>
      <SelectorCTA vehicle={vehicle} />
    </div>
  );
}

