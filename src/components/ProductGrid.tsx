import React from 'react';
import ProductCard from './ProductCard';
import { PRODUCTS } from '../data/mockData';

export default function ProductGrid() {
  const bestSellers = PRODUCTS.slice(0, 4);
  const offers = PRODUCTS.filter(p => p.isOffer);

  return (
    <div className="bg-gray-50/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Best Sellers Section */}
        <div className="mb-12">
          <div className="flex items-end justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Best Sellers</h2>
              <p className="text-sm text-gray-500 mt-1">Our most popular groceries this week</p>
            </div>
            <a href="#" className="hidden sm:block text-sm font-semibold text-primary hover:text-primary-dark">View all</a>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {bestSellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Offers Section */}
        <div>
          <div className="flex items-end justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 tracking-tight flex items-center gap-2">
                Today's Offers <span className="text-xl">🔥</span>
              </h2>
            </div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {offers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
