import React from 'react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

export default function FitmentPartnersPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-gray-500 mb-4">Nationwide Network</p>
              <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">Fitment Partners</h1>
              <p className="text-lg text-gray-600">
                Professional installation services across South Africa. Find a certified fitment center near you.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <h2 className="text-2xl font-black text-gray-900 mb-4">Find a Partner</h2>
              <p className="text-gray-600 mb-6">
                Our network of approved fitment centers specializes in Toyota Land Cruiser, Hilux, and Ranger installations.
              </p>
              <p className="text-sm text-gray-500">
                Partner directory coming soon. Contact us for fitment recommendations in your area.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

