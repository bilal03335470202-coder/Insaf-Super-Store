import React, { useState } from 'react';
import { ShoppingCart, Search, Menu, MapPin } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Header() {
  const { totalItems, setIsCartOpen } = useCart();
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="sticky top-0 z-40 w-full bg-white border-b border-gray-100/50 shadow-sm">
      {/* Top utility bar (mobile hidden, desktop visible) */}
      <div className="hidden sm:block bg-primary-dark text-white text-xs font-medium py-1.5 px-4 text-center">
        Same-day delivery guaranteed for orders placed before 5 PM!
      </div>
      
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex h-16 items-center justify-between gap-4 sm:gap-8">
          
          {/* Logo & Mobile Menu */}
          <div className="flex items-center gap-4">
            <button className="sm:hidden text-gray-500 hover:text-gray-900 transition flex-shrink-0">
              <Menu size={24} />
            </button>
            <a href="/" className="flex items-center gap-2 flex-shrink-0">
              <div className="bg-primary text-white p-1.5 rounded-lg">
                <ShoppingCart size={20} strokeWidth={2.5} />
              </div>
              <span className="text-xl font-bold tracking-tight text-gray-900 hidden sm:block">
                Insaf Super Store
              </span>
            </a>
          </div>

          {/* Search Bar Wrapper */}
          <div className="flex-1 max-w-2xl px-2 sm:px-0">
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400 group-focus-within:text-primary transition-colors" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-xl leading-5 bg-gray-50 placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all sm:text-sm"
                placeholder="Search for groceries..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Location & Cart */}
          <div className="flexItems-center gap-4 flex-shrink-0">
            <div className="hidden md:flex items-center gap-1.5 text-sm text-gray-600 hover:text-gray-900 cursor-pointer">
              <MapPin size={18} className="text-primary" />
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-bold text-gray-400 leading-none">Deliver to</span>
                <span className="font-medium leading-tight text-gray-700">Select Location</span>
              </div>
            </div>
            
            <button 
              className="relative p-2 text-gray-600 hover:text-gray-900 transition-colors bg-gray-50 rounded-full hover:bg-gray-100"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingCart size={24} />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-1 text-[10px] font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-red-500 rounded-full ring-2 ring-white">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
          
        </div>
      </div>
    </header>
  );
}
