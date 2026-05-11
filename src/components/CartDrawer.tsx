import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartDrawer() {
  const { isCartOpen, setIsCartOpen, items, updateQuantity, totalPrice } = useCart();

  if (!isCartOpen) return null;

  const handleCheckout = () => {
    // Navigate to checkout or open WhatsApp
    const message = `Hello Insaf Super Store! I'd like to place an order:%0A%0A` + 
      items.map(i => `- ${i.quantity}x ${i.name} ($${(i.price * i.quantity).toFixed(2)})`).join('%0A') +
      `%0A%0ATotal: $${totalPrice.toFixed(2)}`;
    
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />
      
      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 z-50 w-full max-w-md bg-white shadow-2xl flex flex-col transform transition-transform duration-300">
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <ShoppingBag className="text-primary" />
            <h2 className="text-xl font-bold text-gray-900">Your Cart</h2>
          </div>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
              <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                <ShoppingBag size={48} className="text-gray-300" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">Your cart is empty</h3>
              <p className="text-gray-500">Looks like you haven't added any groceries yet.</p>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="mt-4 text-primary font-semibold hover:text-primary-dark"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            <ul className="space-y-6">
              {items.map((item) => (
                <li key={item.id} className="flex gap-4">
                  <div className="w-20 h-20 bg-gray-50 rounded-xl overflow-hidden flex-shrink-0 border border-gray-100">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover mix-blend-multiply" />
                  </div>
                  <div className="flex flex-col flex-1">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-semibold text-gray-900 line-clamp-1">{item.name}</h4>
                      <span className="font-bold text-gray-900 ml-2">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                    <span className="text-xs text-gray-500 mb-2">{item.unit}</span>
                    
                    <div className="mt-auto flex items-center gap-3 bg-gray-50 w-fit rounded-lg p-1 border border-gray-200">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-7 h-7 flex items-center justify-center bg-white text-gray-600 rounded-md shadow-sm hover:text-primary transition-colors"
                      >
                        <Minus size={14} strokeWidth={3} />
                      </button>
                      <span className="text-sm font-semibold w-4 text-center">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-7 h-7 flex items-center justify-center bg-white text-gray-600 rounded-md shadow-sm hover:text-primary transition-colors"
                      >
                        <Plus size={14} strokeWidth={3} />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-4 sm:p-6 border-t border-gray-100 bg-gray-50/50">
            {/* Quick Upsell */}
            <div className="bg-orange-50 border border-orange-100 rounded-xl p-3 mb-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🍫</span>
                <div>
                  <h4 className="font-semibold text-sm text-gray-900">Add chocolate bar?</h4>
                  <p className="text-xs text-orange-700">Only $1.50 extra</p>
                </div>
              </div>
              <button 
                onClick={() => updateQuantity('p7', (items.find(i => i.id === 'p7')?.quantity || 0) + 1)} 
                className="bg-white text-orange-600 border border-orange-200 hover:bg-orange-100 font-semibold px-3 py-1.5 rounded-lg text-sm transition-colors"
              >
                Add
              </button>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-gray-600 text-sm">
                <span>Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600 text-sm">
                <span>Delivery Fee</span>
                <span>Calculated at checkout</span>
              </div>
              <div className="flex justify-between text-gray-900 font-bold text-lg pt-3 border-t border-gray-200">
                <span>Total</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
            </div>
            
            <button 
              onClick={handleCheckout}
              className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-xl shadow-md transition-colors flex justify-center items-center gap-2"
            >
              Checkout via WhatsApp
            </button>
          </div>
        )}
      </div>
    </>
  );
}
