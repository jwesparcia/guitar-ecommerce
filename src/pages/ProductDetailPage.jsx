import { Star, Heart, ChevronLeft, ChevronRight } from 'lucide-react';

const ProductDetailPage = ({
  selectedProduct,
  setCurrentView,
  currentImageIndex,
  setCurrentImageIndex,
  toggleWishlist,
  wishlist,
  addToCart,
}) => {
  if (!selectedProduct) return null;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <button
        onClick={() => setCurrentView('products')}
        className="flex items-center text-blue-600 hover:text-blue-700 mb-6"
      >
        <ChevronLeft className="w-5 h-5 mr-1" />
        Back to Products
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Image Gallery */}
        <div>
          <div className="relative mb-4">
            <img
              src={selectedProduct.images[currentImageIndex]}
              alt={selectedProduct.name}
              className="w-full h-96 object-cover rounded-lg"
            />
            {selectedProduct.images.length > 1 && (
              <>
                <button
                  onClick={() => setCurrentImageIndex(prev =>
                    prev === 0 ? selectedProduct.images.length - 1 : prev - 1
                  )}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setCurrentImageIndex(prev =>
                    prev === selectedProduct.images.length - 1 ? 0 : prev + 1
                  )}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}
          </div>
          {selectedProduct.images.length > 1 && (
            <div className="flex space-x-2">
              {selectedProduct.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                    currentImageIndex === index ? 'border-blue-600' : 'border-gray-200'
                  }`}
                >
                  <img src={image} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="text-lg text-gray-500">{selectedProduct.brand}</span>
            <button
              onClick={() => toggleWishlist(selectedProduct)}
              className={`p-2 rounded-full transition-colors ${
                wishlist.find(item => item.id === selectedProduct.id)
                  ? 'bg-red-500 text-white'
                  : 'bg-gray-100 text-gray-600 hover:text-red-500'
              }`}
            >
              <Heart className="w-6 h-6" />
            </button>
          </div>

          <h1 className="text-3xl font-bold mb-4">{selectedProduct.name}</h1>

          <div className="flex items-center mb-6">
            <div className="flex items-center mr-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.floor(selectedProduct.rating)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
              <span className="ml-2 text-gray-600">
                {selectedProduct.rating} ({selectedProduct.reviews} reviews)
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-4 mb-6">
            <span className="text-4xl font-bold text-gray-900">${selectedProduct.price}</span>
            {selectedProduct.originalPrice && (
              <span className="text-2xl text-gray-500 line-through">${selectedProduct.originalPrice}</span>
            )}
          </div>

          <p className="text-gray-700 mb-8">{selectedProduct.description}</p>

          {/* Specifications */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold mb-4">Specifications</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {Object.entries(selectedProduct.specs).map(([key, value]) => (
                <div key={key} className="flex justify-between">
                  <span className="text-gray-600 capitalize">{key}:</span>
                  <span className="font-medium">{value}</span>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => addToCart(selectedProduct)}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
          >
            Add to Cart - ${selectedProduct.price}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
