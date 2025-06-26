import { Filter } from 'lucide-react';
import ProductCard from '../components/ProductCard'; // Import ProductCard

const ProductsPage = ({
  selectedCategory,
  filteredGuitars,
  setSelectedProduct,
  setCurrentView,
  setCurrentImageIndex,
  toggleWishlist,
  wishlist,
  addToCart
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">
          {selectedCategory === 'All' ? 'All Guitars' : selectedCategory + ' Guitars'}
        </h1>
        <div className="flex items-center space-x-4">
          <Filter className="w-5 h-5 text-gray-500" />
          <span className="text-gray-600">{filteredGuitars.length} products</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredGuitars.map(guitar => (
          <ProductCard
            key={guitar.id}
            guitar={guitar}
            toggleWishlist={toggleWishlist}
            wishlist={wishlist}
            setSelectedProduct={setSelectedProduct}
            setCurrentView={setCurrentView}
            setCurrentImageIndex={setCurrentImageIndex}
            addToCart={addToCart}
          />
        ))}
      </div>

      {filteredGuitars.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No guitars found matching your criteria.</p>
        </div>
      )}
    </div>
  );
};

export default ProductsPage;
