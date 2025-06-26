import { X } from 'lucide-react';

const MobileMenu = ({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  categories,
  setSelectedCategory,
  setCurrentView,
}) => (
  <div className={`fixed inset-0 z-50 ${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden`}>
    
    {/* Overlay with blur */}
    <div
      className="absolute inset-0 bg-black/40 backdrop-blur-sm backdrop-saturate-150 z-0"
      onClick={() => setIsMobileMenuOpen(false)}
    />

    {/* Sidebar menu */}
    <div className="absolute top-0 left-0 h-full w-64 bg-white shadow-xl z-10">
      <div className="flex items-center justify-between p-4 border-b">
        <h2 className="text-lg font-semibold">Menu</h2>
        <button onClick={() => setIsMobileMenuOpen(false)}>
          <X className="w-6 h-6" />
        </button>
      </div>

      <nav className="p-4">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => {
              setSelectedCategory(category);
              setCurrentView('products');
              setIsMobileMenuOpen(false);
            }}
            className="block w-full text-left py-2 text-gray-700 hover:text-blue-600 transition-colors"
          >
            {category}
          </button>
        ))}
      </nav>
    </div>
  </div>
);

export default MobileMenu;
