import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { getAllProducts, getProductsByCategory } from '@/lib/data/products';

import { formatPrice } from '@/lib/utils/formatPrice';

export const dynamic = 'force-dynamic';

interface ProductsPageProps {
  searchParams: { category?: string };
}

export default function ProductsPage({ searchParams }: ProductsPageProps) {
  const allProducts = getAllProducts();
  const categories = Array.from(new Set(allProducts.map(p => p.category)));
  const selectedCategory = searchParams?.category;

  // Filter products based on category
  const filteredProducts = selectedCategory
    ? getProductsByCategory(selectedCategory)
    : allProducts;

  // Category descriptions
  const categoryDescriptions: Record<string, string> = {
    Suspension: 'Suspension systems for Toyota Land Cruiser 300, 76, 78, and 79. From EFS touring kits to Tough Dog Foam Cell Pro shocks.',
    Armour: 'Front and rear protection systems. MCC bullbars, Onca rock sliders, and complete armour packages for serious off-road builds.',
    Interior: 'Interior protection from Takla. Seat covers, floor mats, and load liners that preserve your Toyota Land Cruiser cabin.',
    Recovery: 'Recovery gear and safety equipment. Wild Dog recovery kits, rated recovery points, and essential off-road safety gear.',
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-gray-500 mb-4">
              {selectedCategory ? selectedCategory : 'Product Catalog'}
            </p>
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
              {selectedCategory ? selectedCategory : 'All Products'}
            </h1>
            <p className="text-lg text-gray-600">
              {selectedCategory && categoryDescriptions[selectedCategory]
                ? categoryDescriptions[selectedCategory]
                : 'Browse our complete range of Toyota Land Cruiser 300, 76, 78, and 79 accessories. From suspension to armour, interior protection to recovery gear.'}
            </p>
          </div>

          {/* Category Filter */}
          <div className="mb-8 flex flex-wrap gap-3 justify-center">
            <Link
              href="/products"
              className={`px-6 py-2 rounded-full font-bold transition-colors ${
                !selectedCategory
                  ? 'bg-gray-900 text-white hover:bg-gray-700'
                  : 'bg-white border border-gray-300 text-gray-900 hover:bg-gray-100'
              }`}
            >
              All Products
            </Link>
            {categories.map((category) => (
              <Link
                key={category}
                href={`/products?category=${encodeURIComponent(category)}`}
                className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                  selectedCategory === category
                    ? 'bg-gray-900 text-white hover:bg-gray-700'
                    : 'bg-white border border-gray-300 text-gray-900 hover:bg-gray-100'
                }`}
              >
                {category}
              </Link>
            ))}
          </div>

          {/* Results Count */}
          {selectedCategory && (
            <div className="mb-6 text-center">
              <p className="text-gray-600">
                Showing <span className="font-bold text-gray-900">{filteredProducts.length}</span> {filteredProducts.length === 1 ? 'product' : 'products'} in {selectedCategory}
              </p>
            </div>
          )}

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <Link
                  key={product.id}
                  href={`/products/${product.slug}`}
                  className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all overflow-hidden flex flex-col group"
                >
                  <div className="relative aspect-square overflow-hidden bg-gray-100">
                    <Image
                      src={product.images && product.images.length > 0 ? product.images[0] : '/placeholder-product.jpg'}
                      alt={product.name}
                      fill
                      className="object-contain p-4 transition-transform duration-500 group-hover:scale-[1.02]"
                      sizes="(max-width: 1024px) 100vw, 25vw"
                    />
                    {product.badge && (
                      <div className="absolute top-4 left-4 z-10">
                        <span className="px-3 py-1 bg-accent-400 text-gray-900 text-xs font-black rounded-full uppercase tracking-wide">
                          {product.badge}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <p className="text-xs font-bold uppercase tracking-wide text-gray-500 mb-2">
                      {product.brand}
                    </p>
                    <h3 className="text-lg font-black text-gray-900 mb-3 line-clamp-2 group-hover:text-accent-400 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-3 flex-1 mb-4">
                      {product.shortDescription}
                    </p>
                    <div className="mt-auto">
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-black text-gray-900">
                          {formatPrice(product.salePrice || product.price)}
                        </span>
                        {product.salePrice && (
                          <span className="text-sm text-gray-500 line-through">
                            {formatPrice(product.price)}
                          </span>
                        )}
                      </div>
                      <div className="mt-2 flex items-center gap-2 text-xs text-gray-500">
                        <span className="px-2 py-1 bg-gray-100 rounded">{product.category}</span>
                        {product.inStock ? (
                          <span className="text-green-600 font-semibold">In Stock</span>
                        ) : (
                          <span className="text-red-600 font-semibold">Out of Stock</span>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-2xl border border-gray-200">
              <p className="text-xl text-gray-600 mb-4">No products found</p>
              <p className="text-gray-500 mb-6">
                {selectedCategory
                  ? `No products available in the ${selectedCategory} category.`
                  : 'No products available.'}
              </p>
              <Link
                href="/products"
                className="inline-block px-6 py-3 bg-gray-900 text-white font-bold rounded-xl hover:bg-gray-700 transition-colors"
              >
                View All Products
              </Link>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}

