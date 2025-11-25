import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

export default function GuidesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-gray-500 mb-4">Build Knowledge</p>
              <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">Guides & Builds</h1>
              <p className="text-lg text-gray-600">
                Expert guides for building and maintaining your Toyota 4x4. From suspension selection to armour installation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
                <h2 className="text-2xl font-black text-gray-900 mb-4">Suspension Selection Guide</h2>
                <p className="text-gray-600 mb-4">
                  Learn how to choose the right suspension kit for your Land Cruiser or Hilux based on load, terrain, and budget.
                </p>
                <p className="text-sm text-gray-500">Coming soon</p>
              </div>
              <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
                <h2 className="text-2xl font-black text-gray-900 mb-4">Armour Installation</h2>
                <p className="text-gray-600 mb-4">
                  Step-by-step guides for installing MCC, Onca, and Wild Dog protection systems on Toyota platforms.
                </p>
                <p className="text-sm text-gray-500">Coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

