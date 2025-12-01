'use client';

import React from 'react';
import Link from 'next/link';

export default function FitmentNetworkCTA() {
  return (
    <Link
      href="/vehicles"
      className="inline-block px-8 py-4 bg-gray-800 text-white rounded-lg font-semibold hover:bg-gray-900 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
    >
      Shop by Vehicle
    </Link>
  );
}

