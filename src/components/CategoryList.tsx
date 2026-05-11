import React from 'react';
import { CATEGORIES } from '../data/mockData';

export default function CategoryList() {
  return (
    <div className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Shop by Category</h2>
          <a href="#" className="hidden sm:block text-sm font-semibold text-primary hover:text-primary-dark">View all</a>
        </div>
        
        <div className="flex overflow-x-auto pb-6 -mx-4 px-4 sm:mx-0 sm:px-0 gap-4 sm:gap-6 hide-scrollbar snaps-x">
          {CATEGORIES.map((category) => (
            <div 
              key={category.id} 
              className="flex-shrink-0 w-28 sm:w-36 snap-start group cursor-pointer"
            >
              <div className="aspect-square rounded-2xl overflow-hidden mb-3 shadow-sm group-hover:shadow-md transition-all border border-gray-100 relative">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
              </div>
              <h3 className="text-sm sm:text-base font-semibold text-gray-800 text-center group-hover:text-primary transition-colors">
                {category.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
