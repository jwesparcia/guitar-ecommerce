import { X, Plus, Minus } from 'lucide-react';

const CartSidebar = ({
  isCartOpen,
  setIsCartOpen,
  cartItemCount,
  cartItems,
  updateCartQuantity,
  cartTotal,
}) => (
  <div className={`fixed inset-0 z-50 ${isCartOpen ? 'block' : 'hidden'}`}>
    <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setIsCartOpen(false)} />
    <div className="fixed top-0 right-0 w-96 h-full bg-white shadow-xl">
      <div className="flex items-center justify-between p-6 border-b">
        <h2 className="text-lg font-semibold">Shopping Cart ({cartItemCount})</h2>
        <button onClick={() => setIsCartOpen(false)}>
          <X className="w-6 h-6" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-6">
        {cartItems.length === 0 ? (
          <p className="text-gray-500 text-center py-8">Your cart is empty</p>
        ) : (
          <div className="space-y-4">
            {cartItems.map(item => (
              <div key={item.id} className="flex items-center space-x-4 bg-gray-50 p-4 rounded-lg">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                <div className="flex-1">
                  <h3 className="font-medium text-sm">{item.name}</h3>
                  <p className="text-gray-600">${item.price}</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <button
                      onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                      className="p-1 hover:bg-gray-200 rounded"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                      className="p-1 hover:bg-gray-200 rounded"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {cartItems.length > 0 && (
        <div className="border-t p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-lg font-semibold">Total: ${cartTotal.toFixed(2)}</span>
          </div>
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">
            Checkout
          </button>
        </div>
      )}
    </div>
  </div>
);

export default CartSidebar;
