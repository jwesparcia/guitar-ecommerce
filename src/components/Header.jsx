// src/components/Header.jsx
import React from 'react';
import { Search, ShoppingCart, Menu } from 'lucide-react';

const Header = ({
  categories,
  selectedCategory,
  setSelectedCategory,
  setCurrentView,
  searchQuery,
  setSearchQuery,
  setIsCartOpen,
  cartItemCount,
  setIsMobileMenuOpen,
}) => (
  <header className="bg-white shadow-sm border-b sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center">
          <button
            onClick={() => setCurrentView('home')}
            className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors flex  items-center "
          >
            <img src="https://i.pinimg.com/236x/6e/8a/94/6e8a941befa048cd727857b9e13fe6c5.jpg?nii=t" alt="" width={"60px"} className='mb-2.5 mr-2'/> <span className='mr-3'>Aly Motki Bubu's Store</span>
          </button>
        </div>

        <nav className="hidden md:flex space-x-8">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setCurrentView('products');
              }}
              className={`text-sm font-medium transition-colors cursor-pointer ${
                selectedCategory === category
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              {category}
            </button>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <div className="relative hidden sm:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search guitars..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
            />
          </div>

          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 text-gray-700 hover:text-blue-600 transition-colors"
          >
            <ShoppingCart className="w-6 h-6" />
            {cartItemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden p-2 text-gray-700"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>

    {/* Mobile Search */}
    <div className="sm:hidden px-4 pb-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <input
          type="text"
          placeholder="Search guitars..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
    </div>
  </header>
);

export default Header;
