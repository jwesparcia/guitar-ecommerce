import React, { useState } from 'react';
import guitars, { categories } from './data/guitars';
import Header from './components/Header';
import MobileMenu from './components/MobileMenu';
import CartSidebar from './components/CartSidebar';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';

const GuitarEcommerce = () => {
  const [currentView, setCurrentView] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [wishlist, setWishlist] = useState([]);

  const filteredGuitars = guitars.filter(guitar => {
    const matchesCategory = selectedCategory === 'All' || guitar.category === selectedCategory;
    const matchesSearch = guitar.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         guitar.brand.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToCart = (guitar, quantity = 1) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === guitar.id);
      if (existing) {
        return prev.map(item =>
          item.id === guitar.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prev, { ...guitar, quantity }];
    });
  };

  const updateCartQuantity = (id, quantity) => {
    if (quantity <= 0) {
      setCartItems(prev => prev.filter(item => item.id !== id));
    } else {
      setCartItems(prev =>
        prev.map(item => item.id === id ? { ...item, quantity } : item)
      );
    }
  };

  const toggleWishlist = (guitar) => {
    setWishlist(prev => {
      const exists = prev.find(item => item.id === guitar.id);
      if (exists) {
        return prev.filter(item => item.id !== guitar.id);
      }
      return [...prev, guitar];
    });
  };

  const cartTotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-white">
      <Header
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        setCurrentView={setCurrentView}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setIsCartOpen={setIsCartOpen}
        cartItemCount={cartItemCount}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      <MobileMenu
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        categories={categories}
        setSelectedCategory={setSelectedCategory}
        setCurrentView={setCurrentView}
      />
      <CartSidebar
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
        cartItemCount={cartItemCount}
        cartItems={cartItems}
        updateCartQuantity={updateCartQuantity}
        cartTotal={cartTotal}
      />

      {currentView === 'home' && (
        <HomePage
          setCurrentView={setCurrentView}
          setSelectedProduct={setSelectedProduct}
          setCurrentImageIndex={setCurrentImageIndex}
          toggleWishlist={toggleWishlist}
          wishlist={wishlist}
          addToCart={addToCart}
        />
      )}

      {currentView === 'products' && (
        <ProductsPage
          selectedCategory={selectedCategory}
          filteredGuitars={filteredGuitars}
          setSelectedProduct={setSelectedProduct}
          setCurrentView={setCurrentView}
          setCurrentImageIndex={setCurrentImageIndex}
          toggleWishlist={toggleWishlist}
          wishlist={wishlist}
          addToCart={addToCart}
        />
      )}

      {currentView === 'product' && (
        <ProductDetailPage
          selectedProduct={selectedProduct}
          setCurrentView={setCurrentView}
          currentImageIndex={currentImageIndex}
          setCurrentImageIndex={setCurrentImageIndex}
          toggleWishlist={toggleWishlist}
          wishlist={wishlist}
          addToCart={addToCart}
        />
      )}
    </div>
  );
};

export default GuitarEcommerce;
