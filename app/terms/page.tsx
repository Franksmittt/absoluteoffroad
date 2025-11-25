import React from 'react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">Terms & Conditions</h1>
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <p className="text-gray-600 mb-4">Terms and conditions content coming soon.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

