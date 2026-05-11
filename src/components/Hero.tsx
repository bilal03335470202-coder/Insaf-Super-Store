import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Background accent */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3">
        <div className="w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-24 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-sm font-semibold mb-6">
              <span className="flex h-2 w-2 rounded-full bg-orange-500"></span>
              Fresh Arrivals Everyday
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
              Fresh Groceries <br className="hidden sm:block" />
              <span className="text-primary">Delivered Fast.</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
              Skip the lines. Get fresh produce, household essentials, and daily items delivered to your doorstep with incredible speed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="inline-flex justify-center items-center gap-2 px-8 py-4 border border-transparent text-base font-bold rounded-xl text-white bg-primary hover:bg-primary-dark transition-all shadow-sm hover:shadow-md">
                Shop Now
                <ArrowRight size={20} />
              </button>
              <button className="inline-flex justify-center items-center px-8 py-4 border-2 border-gray-200 text-base font-bold rounded-xl text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-300 transition-all">
                View Offers
              </button>
            </div>
          </div>

          {/* Image hero */}
          <div className="relative hidden sm:block">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl transform translate-x-4 translate-y-4 -z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1000&h=800" 
              alt="Fresh vegetables in grocery store" 
              className="rounded-3xl shadow-xl w-full object-cover h-[400px] lg:h-[500px]"
            />
            
            {/* Floating badge */}
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg flex items-center gap-4">
              <div className="bg-green-100 p-2.5 rounded-full">
                <span className="text-2xl">🌱</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-gray-900">100% Fresh</span>
                <span className="text-sm text-gray-600">Quality Guaranteed</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
