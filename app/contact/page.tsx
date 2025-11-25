import React from 'react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-gray-500 mb-4">Get in Touch</p>
              <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">Contact Absolute Offroad</h1>
              <p className="text-lg text-gray-600">
                Have questions about your build? Need fitment advice? Our Toyota specialists are here to help.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
                <h2 className="text-2xl font-black text-gray-900 mb-4">Phone</h2>
                <a href="tel:+27101234567" className="text-xl text-gray-600 hover:text-accent-400 transition-colors">
                  +27 10 123 4567
                </a>
              </div>
              <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
                <h2 className="text-2xl font-black text-gray-900 mb-4">Email</h2>
                <a href="mailto:info@absoluteoffroad.co.za" className="text-xl text-gray-600 hover:text-accent-400 transition-colors">
                  info@absoluteoffroad.co.za
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <h2 className="text-2xl font-black text-gray-900 mb-6">Book a Consultation</h2>
              <p className="text-gray-600 mb-6">
                Schedule a call with our build specialists to discuss your Land Cruiser, Hilux, or Ranger project.
              </p>
              <p className="text-sm text-gray-500">
                Consultation booking form coming soon. For now, please call or email us directly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

