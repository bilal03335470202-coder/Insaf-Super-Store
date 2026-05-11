import React from 'react';
import { Plus } from 'lucide-react';
import { Product } from '../data/mockData';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
  key?: React.Key;
}


export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <div className="group relative bg-white border border-gray-100 rounded-2xl p-4 transition-all hover:shadow-xl hover:shadow-gray-200/40 hover:-translate-y-1 flex flex-col h-full">
      {product.isOffer && (
        <div className="absolute top-3 left-3 z-10">
          <span className="bg-red-500 text-white text-[10px] sm:text-xs font-bold px-2 py-1 rounded-lg uppercase tracking-wide">
            Sale
          </span>
        </div>
      )}
      
      <div className="aspect-square rounded-xl overflow-hidden mb-4 bg-gray-50 flex-shrink-0">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <div className="flex flex-col flex-grow">
        <span className="text-xs font-medium text-gray-400 mb-1">{product.unit}</span>
        <h3 className="font-semibold text-gray-900 leading-tight mb-2 line-clamp-2">
          {product.name}
        </h3>
        
        <div className="mt-auto flex items-end justify-between gap-2">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</span>
            </div>
            {product.originalPrice && (
              <span className="text-xs text-gray-400 line-through">${product.originalPrice.toFixed(2)}</span>
            )}
          </div>
          
          <button 
            onClick={() => addToCart(product)}
            className="flex items-center justify-center bg-gray-100 hover:bg-primary text-gray-900 hover:text-white p-2.5 rounded-xl transition-colors shrink-0"
            aria-label="Add to cart"
          >
            <Plus size={20} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </div>
  );
}
