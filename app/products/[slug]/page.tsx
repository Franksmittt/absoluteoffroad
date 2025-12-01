import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { getProductBySlug, getAllProducts, getProductsByBrand } from '@/lib/data/products';

import { formatPrice } from '@/lib/utils/formatPrice';

export async function generateStaticParams() {
  const products = getAllProducts();
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = getProductsByBrand(product.brand)
    .filter(p => p.id !== product.id)
    .slice(0, 4);

  const productImage = product.images && product.images.length > 0
    ? product.images[0]
    : '/placeholder-product.jpg';

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm">
            <ol className="flex items-center gap-2 text-gray-600">
              <li><Link href="/" className="hover:text-gray-900">Home</Link></li>
              <li>/</li>
              <li><Link href="/products" className="hover:text-gray-900">Products</Link></li>
              <li>/</li>
              <li><Link href={`/products?category=${encodeURIComponent(product.category)}`} className="hover:text-gray-900">{product.category}</Link></li>
              <li>/</li>
              <li className="text-gray-900 font-semibold">{product.name}</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Product Image */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8">
              <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-100">
                <Image
                  src={productImage}
                  alt={product.name}
                  fill
                  className="object-contain p-6"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                {product.badge && (
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-2 bg-accent-400 text-gray-900 text-sm font-black rounded-full uppercase tracking-wide">
                      {product.badge}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="mb-4">
                <span className="text-sm font-bold uppercase tracking-wide text-gray-500">
                  {product.brand}
                </span>
                {product.category && (
              <>
                <span className="mx-2 text-gray-400">•</span>
                <span className="text-sm font-semibold text-gray-600">{product.category}</span>
              </>
            )}
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                {product.name}
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                {product.shortDescription}
              </p>

              {/* Price */}
              <div className="mb-6">
                {product.salePrice ? (
                  <div className="flex items-center gap-4">
                    <span className="text-4xl font-black text-gray-900">
                      {formatPrice(product.salePrice)}
                    </span>
                    <span className="text-xl text-gray-500 line-through">
                      {formatPrice(product.price)}
                    </span>
                    <span className="px-3 py-1 bg-red-100 text-red-700 text-sm font-bold rounded-full">
                      On Sale
                    </span>
                  </div>
                ) : (
                  <span className="text-4xl font-black text-gray-900">
                    {formatPrice(product.price)}
                  </span>
                )}
              </div>

              {/* Stock Status */}
              <div className="mb-6">
                {product.inStock ? (
                  <div className="flex items-center gap-2 text-green-600 font-semibold">
                    <span className="h-3 w-3 rounded-full bg-green-600"></span>
                    In Stock - Ready to Ship
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-red-600 font-semibold">
                    <span className="h-3 w-3 rounded-full bg-red-600"></span>
                    Out of Stock
                  </div>
                )}
              </div>

              {/* SKU */}
              <div className="mb-6 text-sm text-gray-600">
                <span className="font-semibold">SKU:</span> {product.sku}
              </div>

              {/* CTA */}
              <div className="mb-8">
                <button
                  disabled={!product.inStock}
                  className={`w-full px-8 py-4 rounded-xl font-black text-lg transition-all ${
                    product.inStock
                      ? 'bg-accent-400 text-gray-900 hover:bg-accent-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                </button>
              </div>

              {/* Fitment */}
              <div className="bg-gray-100 rounded-xl p-6">
                <h3 className="text-lg font-black text-gray-900 mb-4">Vehicle Fitment</h3>
                <div className="space-y-2">
                  {product.fitment.map((fit, index) => (
                    <div key={index} className="text-sm">
                      <span className="font-semibold text-gray-900">{fit.make} {fit.model}</span>
                      <span className="text-gray-600"> ({fit.years})</span>
                      {fit.variants && fit.variants.length > 0 && (
                        <span className="text-gray-500"> - {fit.variants.join(', ')}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Description & Features */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-2xl border border-gray-200 p-8">
              <h2 className="text-2xl font-black text-gray-900 mb-4">Description</h2>
              <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                {product.description}
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-8">
              <h2 className="text-2xl font-black text-gray-900 mb-4">Key Features</h2>
              <ul className="space-y-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-accent-400 flex-shrink-0"></span>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Specifications */}
          {Object.keys(product.specifications).length > 0 && (
            <div className="bg-white rounded-2xl border border-gray-200 p-8 mb-16">
              <h2 className="text-2xl font-black text-gray-900 mb-6">Specifications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-3 border-b border-gray-100">
                    <span className="font-semibold text-gray-700">{key}</span>
                    <span className="text-gray-600">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div>
              <h2 className="text-3xl font-black text-gray-900 mb-8">More from {product.brand}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((related) => (
                  <Link
                    key={related.id}
                    href={`/products/${related.slug}`}
                    className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all overflow-hidden flex flex-col group"
                  >
                    <div className="relative aspect-square overflow-hidden bg-gray-100">
                      <Image
                        src={related.images && related.images.length > 0 ? related.images[0] : '/placeholder-product.jpg'}
                        alt={related.name}
                        fill
                        className="object-contain p-4"
                        sizes="(max-width: 1024px) 100vw, 25vw"
                      />
                    </div>
                    <div className="p-5 flex-1 flex flex-col">
                      <p className="text-xs font-bold uppercase tracking-wide text-gray-500 mb-2">
                        {related.brand}
                      </p>
                      <h3 className="text-base font-black text-gray-900 mb-2 line-clamp-2 group-hover:text-accent-400 transition-colors">
                        {related.name}
                      </h3>
                      <div className="mt-auto">
                        <span className="text-xl font-black text-gray-900">
                          {formatPrice(related.salePrice || related.price)}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}

