// src/pages/HomePage.jsx
import React from 'react';
import HeroSection from '../components/HeroSection';
import ProductCard from '../components/ProductCard'; // Import ProductCard
import guitars from '../data/guitars'; // Import guitars data

const HomePage = ({ setCurrentView, setSelectedProduct, setCurrentImageIndex, toggleWishlist, wishlist, addToCart }) => {
  // Featured Products
  const FeaturedProducts = () => (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Guitars</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guitars.filter(guitar => guitar.featured).map(guitar => (
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
      </div>
    </section>
  );

  return (
    <>
      <HeroSection setCurrentView={setCurrentView} />
      <FeaturedProducts />
    </>
  );
};

export default HomePage;
