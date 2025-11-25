import React from 'react';
import Header from '@/components/Header/Header';
import HeroSection from '@/components/Hero/HeroSection';
import BrandSlider from '@/components/Brands/BrandSlider';
import TrustSignalBar from '@/components/Trust/TrustSignalBar';
import ArmourCategorySplit from '@/components/Products/ArmourCategorySplit';
import SuspensionGBBSplit from '@/components/Products/SuspensionGBBSplit';
import BlogSection from '@/components/Blog/BlogSection';
import BuildGallery from '@/components/Gallery/BuildGallery';
import FeaturedProducts from '@/components/Featured/FeaturedProducts';
import NewsletterCTA from '@/components/Newsletter/NewsletterCTA';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Brand Slider */}
      <BrandSlider />

      {/* Trust & Authority Section */}
      <TrustSignalBar />

      {/* Product & Content Strategy */}
      <ArmourCategorySplit />
      <SuspensionGBBSplit />

      {/* Blog Section */}
      <BlogSection />

      {/* Build Gallery */}
      <BuildGallery />

      {/* Featured Products */}
      <FeaturedProducts />

      {/* Newsletter CTA */}
      <NewsletterCTA />

      {/* Footer */}
      <Footer />
    </main>
  );
}

