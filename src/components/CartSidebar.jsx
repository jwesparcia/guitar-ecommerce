import { X, Plus, Minus } from 'lucide-react';

const CartSidebar = ({
  isCartOpen,
  setIsCartOpen,
  cartItemCount,
  cartItems,
  updateCartQuantity,
  cartTotal,
}) => (
  <div className={`fixed inset-0 z-40 ${isCartOpen ? 'block' : 'hidden'}`}>

    {/* Overlay */}
    <div
      className="absolute inset-0 bg-black/50 backdrop-blur-sm"
      onClick={() => setIsCartOpen(false)}
    />

    {/* Sidebar */}
    <div className="absolute right-0 h-full w-full sm:w-96 bg-white shadow-xl z-50 flex flex-col">

      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b sticky top-0 bg-white z-10">
        <h2 className="text-base sm:text-lg font-semibold">
          Shopping Cart ({cartItemCount})
        </h2>
        <button onClick={() => setIsCartOpen(false)} className="cursor-pointer">
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Items */}
      <div className="flex-1 overflow-y-auto px-4 py-2 pt-[4.5rem] sm:pt-2">
        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-center py-12 space-y-4">
            <p className="text-gray-500 text-lg">Your cart is empty</p>
            <button
              onClick={() => setIsCartOpen(false)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors cursor-pointer"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center space-x-4 bg-gray-50 p-3 rounded-lg"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="font-medium text-sm">{item.name}</h3>
                  <p className="text-gray-600">${item.price}</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <button
                      onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                      className="p-1 hover:bg-gray-200 rounded cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                      className="p-1 hover:bg-gray-200 rounded cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
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

      {/* Footer */}
      {cartItems.length > 0 && (
        <div className="border-t px-4 py-3">
          <div className="flex items-center justify-between mb-3">
            <span className="text-base sm:text-lg font-semibold">
              Total: ${cartTotal.toFixed(2)}
            </span>
          </div>
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors cursor-pointer">
            Checkout
          </button>
        </div>
      )}
    </div>
  </div>
);

export default CartSidebar;
