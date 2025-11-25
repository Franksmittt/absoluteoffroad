'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useVehicleSelection } from '@/hooks/useVehicleSelection';
import { vehicleMakes, vehicleModels, vehicleYears } from '@/lib/vehicleData';

export default function HeaderVehicleSelector() {
  const { vehicle, updateVehicle, clearVehicle } = useVehicleSelection();
  const [isOpen, setIsOpen] = useState(false);

  const handleMakeChange = (make: string) => {
    updateVehicle({ make, model: '', year: '' });
  };

  const handleModelChange = (model: string) => {
    updateVehicle({ ...vehicle, model, year: '' });
  };

  const handleYearChange = (year: string) => {
    updateVehicle({ ...vehicle, year });
  };

  const isComplete = vehicle.make && vehicle.model && vehicle.year;

  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsOpen((prev) => !prev)}
        className={`flex items-center gap-3 rounded-2xl border-2 px-4 py-2 text-left transition-all ${
          isComplete
            ? 'border-accent-400 bg-white/10 text-white'
            : 'border-white/30 bg-white/5 text-white/80'
        }`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="flex flex-col">
          <span className="text-xs uppercase tracking-wide text-white/60">
            Vehicle Selector
          </span>
          <span className="text-sm font-semibold text-white">
            {isComplete
              ? `${vehicle.make} ${vehicle.model} ${vehicle.year}`
              : 'Select Make / Model / Year'}
          </span>
        </div>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          ▼
        </motion.span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute left-0 right-0 z-50 mt-3 max-h-[70vh] overflow-y-auto rounded-2xl border border-white/10 bg-brand-black/95 p-4 shadow-2xl backdrop-blur-xl scrollbar-thin scrollbar-thumb-accent-400 scrollbar-track-transparent md:max-h-[500px] md:left-auto md:right-0 md:w-[600px]"
          >
            <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-white/60">
                  Make
                </label>
                <select
                  value={vehicle.make}
                  onChange={(e) => handleMakeChange(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white focus:border-accent-400 focus:outline-none"
                >
                  <option value="">Select Make</option>
                  {vehicleMakes.map((make) => (
                    <option key={make} value={make}>
                      {make}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-white/60">
                  Model
                </label>
                <select
                  value={vehicle.model}
                  onChange={(e) => handleModelChange(e.target.value)}
                  disabled={!vehicle.make}
                  className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white disabled:cursor-not-allowed disabled:opacity-40 focus:border-accent-400 focus:outline-none"
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

              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-white/60">
                  Year
                </label>
                <select
                  value={vehicle.year}
                  onChange={(e) => handleYearChange(e.target.value)}
                  disabled={!vehicle.model}
                  className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white disabled:cursor-not-allowed disabled:opacity-40 focus:border-accent-400 focus:outline-none"
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

            <div className="mt-4 flex items-center justify-between text-sm text-white/70">
              <div>
                {isComplete
                  ? 'Ready to search parts compatible with your build.'
                  : 'Select your vehicle to filter parts instantly.'}
              </div>
              {isComplete && (
                <button
                  onClick={clearVehicle}
                  className="text-accent-400 hover:text-accent-200"
                >
                  Clear
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

