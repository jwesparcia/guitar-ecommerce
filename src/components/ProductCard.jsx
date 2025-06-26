import { Star, Heart } from 'lucide-react';

const ProductCard = ({ guitar, toggleWishlist, wishlist, setSelectedProduct, setCurrentView, setCurrentImageIndex }) => (
  <>
    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group cursor-pointer"
    onClick={() => {
            setSelectedProduct(guitar);
            setCurrentView('product');
            
          }}
    >
    <div className="relative overflow-hidden">
      <img
        src={guitar.image}
        alt={guitar.name}
        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <span>
        <button
          onClick={(e) => {
            e.stopPropagation(); // Prevent click from propagating to the card
            toggleWishlist(guitar);
            }
        }
        className={`absolute top-4 right-4 p-2 rounded-full transition-colors cursor-pointer ${
          wishlist.find(item => item.id === guitar.id)
            ? 'bg-red-500 text-white'
            : 'bg-white text-gray-600 hover:text-red-500'
        }`}
      >
        <Heart className="w-5 h-5" />
      </button>
      </span>
      
      {guitar.originalPrice && (
        <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
          Sale
        </div>
      )}
    </div>
    <div className="p-6">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-gray-500">{guitar.brand}</span>
        <div className="flex items-center">
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
          <span className="text-sm text-gray-600 ml-1">{guitar.rating} ({guitar.reviews})</span>
        </div>
      </div>
      <h3 className="text-lg font-semibold mb-2 text-gray-900">{guitar.name}</h3>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-gray-900">${guitar.price}</span>
          {guitar.originalPrice && (
            <span className="text-lg text-gray-500 line-through">${guitar.originalPrice}</span>
          )}
        </div>
      </div>
      <div className="flex space-x-2">
        <button
          onClick={() => {
            setSelectedProduct(guitar);
            setCurrentView('product');
            setCurrentImageIndex(0);
          }}
          className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-900 py-2 px-4 rounded-lg font-medium transition-colors cursor-pointer transform hover:scale-105"
        >
          View Details
        </button>
        <button
          onClick={() => addToCart(guitar)} // addToCart kailangan sa parent component
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 cursor-pointer"
        >
          Add to Cart
        </button>
      </div>
    </div>
  </div>
  </>
  
);

export default ProductCard;
