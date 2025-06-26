// src/components/HeroSection.jsx
import React from 'react';

const HeroSection = ({ setCurrentView }) => (
  <section className="relative bg-[url(https://wallpapers.com/images/hd/eddie-van-halen-striped-frankenstrat-use5wqsvcmyi614a.jpg)] text-white">
    <div className="absolute inset-0 bg-black opacity-40" />
    <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Find Your Perfect
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-red-600">
            Guitar
          </span>
        </h1>
        <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto ">
          Discover premium guitars from world-renowned brands. From electric to acoustic, find the instrument that speaks to your soul.
        </p>
        <button
          onClick={() => setCurrentView('products')}
          className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 cursor-pointer"
        >
          Shop Now
        </button>
      </div>
    </div>
  </section>
);

export default HeroSection;
