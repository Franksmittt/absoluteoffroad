'use client';

import React from 'react';
import { motion } from 'framer-motion';
import type { VehicleSelection } from '@/hooks/useVehicleSelection';

interface AbsoluteOffroadLogoProps {
  vehicle?: VehicleSelection;
}

export default function AbsoluteOffroadLogo({
  vehicle,
}: AbsoluteOffroadLogoProps) {
  const hasSelection = vehicle && vehicle.make;

  return (
    <motion.div
      className="flex items-center gap-4"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Logo Icon - Simplified version matching the logo design */}
      <div className="relative">
        {/* Yellow outline/drop shape */}
        <div className="absolute inset-0 rounded-full bg-brand-yellow opacity-40 blur-sm" />
        <div className="relative flex h-12 w-12 items-center justify-center">
          {/* Blue circle */}
          <div className="absolute h-10 w-10 rounded-full border-4 border-brand-blue bg-brand-black" />
          {/* Vehicle silhouette - simplified 4x4 icon */}
          <svg
            className="absolute z-10 h-6 w-6 text-white"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
          </svg>
        </div>
      </div>

      {/* Text Logo */}
      <div className="flex flex-col">
        <span className="text-2xl font-black uppercase tracking-tight text-white">
          Absolute
        </span>
        <span className="text-xl font-black uppercase tracking-tight text-accent-400 -mt-2">
          Offroad
        </span>
      </div>

      {hasSelection && (
        <div className="hidden flex-col text-xs font-semibold uppercase tracking-tight text-white/70 lg:flex">
          <span className="text-white/50">Current Build</span>
          <span className="text-accent-400">
            {vehicle?.make} {vehicle?.model} {vehicle?.year}
          </span>
        </div>
      )}
    </motion.div>
  );
}
