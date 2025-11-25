'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

interface SelectorCTAProps {
  vehicle: {
    make: string;
    model: string;
    year: string;
  };
}

export default function SelectorCTA({ vehicle }: SelectorCTAProps) {
  const router = useRouter();

  const handleSearch = () => {
    if (vehicle.make && vehicle.model && vehicle.year) {
      // Save to session (in production, use proper session management)
      if (typeof window !== 'undefined') {
        sessionStorage.setItem('selectedVehicle', JSON.stringify(vehicle));
      }
      
      // Generate URL slug
      router.push('/vehicles');
    }
  };

  const isDisabled = !vehicle.make || !vehicle.model || !vehicle.year;

  return (
    <button
      onClick={handleSearch}
      disabled={isDisabled}
      className={`mt-4 w-full md:w-auto px-8 py-3 rounded-lg font-semibold text-white transition-all ${
        isDisabled
          ? 'bg-gray-400 cursor-not-allowed'
          : 'bg-primary-600 hover:bg-primary-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
      }`}
    >
      Search for Parts
    </button>
  );
}

