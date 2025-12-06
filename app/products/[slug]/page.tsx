import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { getProductBySlug, getAllProducts, getProductsByBrand } from '@/lib/data/products';
import { formatPrice } from '@/lib/utils/formatPrice';
import { formatProductTitle } from '@/lib/utils/formatProductTitle';

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

      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Breadcrumb */}
          <nav className="mb-6 text-sm">
            <ol className="flex items-center gap-2 text-gray-500">
              <li><Link href="/" className="hover:text-gray-900 transition-colors">Home</Link></li>
              <li>/</li>
              <li><Link href="/products" className="hover:text-gray-900 transition-colors">Products</Link></li>
              <li>/</li>
              <li><Link href={`/products?category=${encodeURIComponent(product.category)}`} className="hover:text-gray-900 transition-colors">{product.category}</Link></li>
              <li>/</li>
              <li className="text-gray-900 font-medium">{formatProductTitle(product.name, product.brand)}</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
            {/* Product Image */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-50">
                <Image
                  src={productImage}
                  alt={product.name}
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                {product.badge && (
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 bg-gray-900 text-white text-xs font-semibold rounded uppercase tracking-wide">
                      {product.badge}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="mb-3">
                <span className="text-xs font-medium text-gray-500">
                  {product.brand}
                </span>
                {product.category && (
                  <>
                    <span className="mx-2 text-gray-300">•</span>
                    <span className="text-xs font-medium text-gray-500">{product.category}</span>
                  </>
                )}
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 leading-tight">
                {formatProductTitle(product.name, product.brand)}
              </h1>
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                {product.shortDescription}
              </p>

              {/* Price */}
              <div className="mb-5 pb-5 border-b border-gray-200">
                {product.salePrice ? (
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-bold text-gray-900">
                      {formatPrice(product.salePrice)}
                    </span>
                    <span className="text-lg text-gray-400 line-through">
                      {formatPrice(product.price)}
                    </span>
                  </div>
                ) : (
                  <span className="text-3xl font-bold text-gray-900">
                    {formatPrice(product.price)}
                  </span>
                )}
              </div>

              {/* Stock Status & SKU */}
              <div className="mb-6 space-y-2">
                <div className="flex items-center gap-2">
                  {product.inStock ? (
                    <>
                      <span className="h-2 w-2 rounded-full bg-green-500"></span>
                      <span className="text-sm text-gray-700 font-medium">In Stock</span>
                    </>
                  ) : (
                    <>
                      <span className="h-2 w-2 rounded-full bg-gray-400"></span>
                      <span className="text-sm text-gray-500 font-medium">Out of Stock</span>
                    </>
                  )}
                </div>
                <div className="text-xs text-gray-500">
                  <span className="font-medium">SKU:</span> {product.sku}
                </div>
              </div>

              {/* CTA */}
              <div className="mb-6">
                <button
                  disabled={!product.inStock}
                  className={`w-full px-6 py-3 rounded-md font-semibold text-base transition-all ${
                    product.inStock
                      ? 'bg-gray-900 text-white hover:bg-gray-800'
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                </button>
              </div>

              {/* Fitment */}
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <h3 className="text-sm font-semibold text-gray-900 mb-3">Vehicle Fitment</h3>
                <div className="space-y-1.5">
                  {product.fitment.map((fit, index) => (
                    <div key={index} className="text-sm text-gray-700">
                      <span className="font-medium">{fit.make} {fit.model}</span>
                      <span className="text-gray-500"> ({fit.years})</span>
                      {fit.variants && fit.variants.length > 0 && (
                        <span className="text-gray-500"> • {fit.variants.join(', ')}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Description & Features */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Description</h2>
              <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">
                {product.description}
              </p>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Key Features</h2>
              <ul className="space-y-2.5">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gray-900 flex-shrink-0"></span>
                    <span className="text-sm text-gray-600 leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Specifications */}
          {Object.keys(product.specifications).length > 0 && (
            <div className="bg-white rounded-lg border border-gray-200 p-6 mb-12">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Specifications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-sm font-medium text-gray-700">{key}</span>
                    <span className="text-sm text-gray-600">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-6">More from {product.brand}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {relatedProducts.map((related) => (
                  <Link
                    key={related.id}
                    href={`/products/${related.slug}`}
                    className="bg-white rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all overflow-hidden flex flex-col group"
                  >
                    <div className="relative aspect-square overflow-hidden bg-gray-50">
                      <Image
                        src={related.images && related.images.length > 0 ? related.images[0] : '/placeholder-product.jpg'}
                        alt={related.name}
                        fill
                        className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 25vw"
                      />
                    </div>
                    <div className="p-4 flex-1 flex flex-col">
                      <p className="text-xs font-medium text-gray-500 mb-1.5">
                        {related.brand}
                      </p>
                      <h3 className="text-sm font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-gray-700 transition-colors leading-snug">
                        {formatProductTitle(related.name, related.brand)}
                      </h3>
                      <div className="mt-auto pt-2 border-t border-gray-100">
                        <span className="text-base font-bold text-gray-900">
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

