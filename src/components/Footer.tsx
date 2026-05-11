import React from 'react';
import { ShoppingCart, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          <div className="space-y-6">
            <a href="/" className="flex items-center gap-2">
              <div className="bg-primary text-white p-1.5 rounded-lg flex-shrink-0">
                <ShoppingCart size={20} strokeWidth={2.5} />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Insaf Super Store
              </span>
            </a>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Your neighborhood grocery store, now online. Fresh produce, household essentials, and daily items delivered fast to your doorstep.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Shop</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Fresh Fruits</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Vegetables</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Dairy & Eggs</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Snacks</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Beverages</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Customer Service</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Delivery Information</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contact Information</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <span className="text-primary mt-0.5">📍</span>
                <span>123 Supermarket Lane,<br />Cityville, ST 12345</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">📞</span>
                <span>+1 234 567 890</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">✉️</span>
                <span>support@insafstore.com</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">🕒</span>
                <span>Mon-Sun: 8am - 10pm</span>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Insaf Super Store. All rights reserved.
          </p>
          <div className="flex gap-4">
            {/* Payment methods icons could go here */}
            <div className="h-8 w-12 bg-gray-800 rounded"></div>
            <div className="h-8 w-12 bg-gray-800 rounded"></div>
            <div className="h-8 w-12 bg-gray-800 rounded"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
