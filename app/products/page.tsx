import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { getAllProducts, getProductsByCategory, getProductsByVehicle } from '@/lib/data/products';
import { formatPrice } from '@/lib/utils/formatPrice';
import { getShortProductTitle } from '@/lib/utils/formatProductTitle';
import { vehicleNavItems } from '@/lib/data/navigation';

export const dynamic = 'force-dynamic';

interface ProductsPageProps {
  searchParams: { category?: string; vehicle?: string };
}

// Helper function to extract model name from navigation item
function getVehicleModelFromNav(vehicleName: string): string {
  // Extract the base model name (remove parenthetical info)
  // "Land Cruiser 76 (Station Wagon)" -> "Land Cruiser 76"
  const match = vehicleName.match(/^(Land Cruiser \d+)/);
  if (match) {
    return match[1];
  }
  // For "Land Cruiser 300" it will just return as is
  return vehicleName;
}

export default function ProductsPage({ searchParams }: ProductsPageProps) {
  const allProducts = getAllProducts();
  const categories = Array.from(new Set(allProducts.map(p => p.category)));
  const selectedCategory = searchParams?.category;
  const selectedVehicle = searchParams?.vehicle;

  // Filter products based on category and/or vehicle
  let filteredProducts = allProducts;
  
  if (selectedCategory) {
    filteredProducts = getProductsByCategory(selectedCategory);
  }
  
  if (selectedVehicle) {
    const vehicleModel = getVehicleModelFromNav(selectedVehicle);
    // If both category and vehicle are selected, filter by both
    if (selectedCategory) {
      filteredProducts = filteredProducts.filter(p => 
        p.fitment.some(f => 
          f.model.toLowerCase().includes(vehicleModel.toLowerCase())
        )
      );
    } else {
      filteredProducts = getProductsByVehicle('Toyota', vehicleModel);
    }
  }

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

      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              {selectedVehicle 
                ? `${selectedVehicle} Products`
                : selectedCategory 
                ? selectedCategory 
                : 'All Products'}
            </h1>
            <p className="text-sm text-gray-600">
              {selectedVehicle
                ? `Products compatible with ${selectedVehicle}`
                : selectedCategory && categoryDescriptions[selectedCategory]
                ? categoryDescriptions[selectedCategory]
                : 'Browse our complete range of premium 4x4 accessories'}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="bg-white rounded-lg border border-gray-200 p-4 sticky top-24">
                {/* Product Categories */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-900 mb-3">Product Categories</h3>
                  <nav className="space-y-1">
                    <Link
                      href={selectedVehicle ? `/products?vehicle=${encodeURIComponent(selectedVehicle)}` : '/products'}
                      className={`block px-3 py-2 text-sm rounded-md transition-colors ${
                        !selectedCategory
                          ? 'bg-gray-900 text-white font-medium'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      All
                    </Link>
                    {categories.map((category) => {
                      // Preserve vehicle filter when selecting category
                      const href = selectedVehicle
                        ? `/products?category=${encodeURIComponent(category)}&vehicle=${encodeURIComponent(selectedVehicle)}`
                        : `/products?category=${encodeURIComponent(category)}`;
                      
                      return (
                        <Link
                          key={category}
                          href={href}
                          className={`block px-3 py-2 text-sm rounded-md transition-colors ${
                            selectedCategory === category
                              ? 'bg-gray-900 text-white font-medium'
                              : 'text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          {category}
                        </Link>
                      );
                    })}
                  </nav>
                </div>

                {/* Vehicle Categories */}
                <div className="pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-semibold text-gray-900">Shop by Vehicle</h3>
                    {selectedVehicle && (
                      <Link
                        href={selectedCategory ? `/products?category=${encodeURIComponent(selectedCategory)}` : '/products'}
                        className="text-xs text-gray-500 hover:text-gray-700"
                      >
                        Clear
                      </Link>
                    )}
                  </div>
                  <nav className="space-y-1">
                    {vehicleNavItems.map((vehicle) => {
                      // Build URL with vehicle parameter, preserving category if selected
                      const vehicleParam = encodeURIComponent(vehicle.name);
                      const href = selectedCategory
                        ? `/products?category=${encodeURIComponent(selectedCategory)}&vehicle=${vehicleParam}`
                        : `/products?vehicle=${vehicleParam}`;
                      
                      const isActive = selectedVehicle === vehicle.name;
                      
                      return (
                        <Link
                          key={vehicle.href}
                          href={href}
                          className={`block px-3 py-2 text-sm rounded-md transition-colors ${
                            isActive
                              ? 'bg-gray-900 text-white font-medium'
                              : 'text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          {vehicle.name}
                        </Link>
                      );
                    })}
                  </nav>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Results Count */}
              {(selectedCategory || selectedVehicle) && (
                <div className="mb-6">
                  <p className="text-sm text-gray-500">
                    {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
                    {selectedCategory && selectedVehicle && ' found'}
                  </p>
                </div>
              )}

              {/* Products Grid */}
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
              {filteredProducts.map((product) => (
                <Link
                  key={product.id}
                  href={`/products/${product.slug}`}
                  className="bg-white rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all overflow-hidden flex flex-col group"
                >
                  <div className="relative aspect-square overflow-hidden bg-gray-50">
                    <Image
                      src={product.images && product.images.length > 0 ? product.images[0] : '/placeholder-product.jpg'}
                      alt={product.name}
                      fill
                      className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 25vw"
                    />
                    {product.badge && (
                      <div className="absolute top-3 left-3 z-10">
                        <span className="px-2 py-0.5 bg-gray-900 text-white text-xs font-semibold rounded uppercase tracking-wide">
                          {product.badge}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-4 flex-1 flex flex-col">
                    <p className="text-xs font-medium text-gray-500 mb-1.5">
                      {product.brand}
                    </p>
                    <h3 className="text-base font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-gray-700 transition-colors leading-snug">
                      {getShortProductTitle(product.name, product.brand)}
                    </h3>
                    <div className="mt-auto pt-3 border-t border-gray-100">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-lg font-bold text-gray-900">
                          {formatPrice(product.salePrice || product.price)}
                        </span>
                        {product.salePrice && (
                          <span className="text-xs text-gray-400 line-through">
                            {formatPrice(product.price)}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        {product.inStock ? (
                          <span className="text-xs text-green-600 font-medium">In Stock</span>
                        ) : (
                          <span className="text-xs text-gray-400 font-medium">Out of Stock</span>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
                </div>
              ) : (
                <div className="text-center py-16 bg-white rounded-lg border border-gray-200">
                  <p className="text-lg text-gray-600 mb-2">No products found</p>
                  <p className="text-sm text-gray-500 mb-6">
                    {selectedCategory
                      ? `No products available in the ${selectedCategory} category.`
                      : 'No products available.'}
                  </p>
                  <Link
                    href="/products"
                    className="inline-block px-5 py-2 bg-gray-900 text-white text-sm font-medium rounded-md hover:bg-gray-800 transition-colors"
                  >
                    View All Products
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

