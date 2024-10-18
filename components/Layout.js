import React, { useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { useSelector } from 'react-redux'; // Import useSelector from react-redux
import CartDrawer from './CartDrawer'; // Import your CartDrawer component
import { selectCartItems } from '../store/cartSlice'; // Adjust the path based on your folder structure

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl: 'https://cdn.britannica.com/45/5645-050-B9EC0205/head-treasure-flower-disk-flowers-inflorescence-ray.jpg',
};

const navigation = [
  { name: 'Inicio', href: '/', current: false },
  { name: 'Acerca de', href: '/about', current: false },
  { name: 'Contacto', href: '#', current: false },
  { name: 'Tienda', href: '/shop', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Layout = ({ children }) => {
  const cartItems = useSelector(selectCartItems); // Access cart items from Redux store
  const [isCartOpen, setIsCartOpen] = useState(false); // State to manage cart drawer visibility
  const [searchTerm, setSearchTerm] = useState(''); // Search bar state

  // Function to handle cart button click
  const handleCartClick = () => {
    setIsCartOpen(true); // Open the cart drawer
  };

  // Function to close cart drawer
  const handleCloseCart = () => {
    setIsCartOpen(false); // Close the cart drawer
  };

  // Function to handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value); // Update search term
  };

  // Function to handle search submission (you can define your search functionality here)
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Search for:', searchTerm);
    // Add your search logic here
  };

  return (
    <div className="min-h-full">
      {/* Navigation Bar */}
      <Disclosure as="nav" className="bg-gray-800">
        <div className="max-w-full px-12 sm:px-12 lg:px-16">
          <div className="flex h-20 sm:h-24 md:h-24 items-center justify-start">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  alt="Polenia"
                  src="/Polenia Ginger Beer - Logo y variaciones-17.png"
                  style={{ width: '200px', height: 'auto' }}
                />
              </div>

              {/* Navigation Links */}
              <div className="hidden md:block">
                <div className="ml-2 flex items-baseline space-x-4" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      aria-current={item.current ? 'page' : undefined}
                      className={classNames(
                        item.current
                          ? 'bg-gray-900 text-white'
                          : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'rounded-md px-3 py-2 text-sm font-medium'
                      )}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Search Bar */}
            <form onSubmit={handleSearchSubmit} className="ml-auto">
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Search products"
                className="bg-gray-200 text-gray-800 rounded-md px-4 py-2"
              />
              <button
                type="submit"
                className="ml-2 bg-gray-800 text-white px-4 py-2 rounded-md"
              >
                Search
              </button>
            </form>

            {/* Cart Button */}
            <button
              type="button"
              onClick={handleCartClick} // Open cart drawer
              className="relative ml-4 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span className="sr-only">View cart</span>
              <img
                src="/cart.svg" // Path to your cart SVG in the public folder
                alt="Shopping Cart Icon"
                className="h-6 w-6"
              />
              {/* Display the number of items in the cart */}
              {cartItems.length > 0 && (
                <span className="absolute -top-1 -right-1 rounded-full bg-red-500 text-white text-xs px-1">
                  {cartItems.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </Disclosure>

      {/* Page content */}
      <main className="mt-8">{children}</main>

      {/* Cart Drawer */}
      <CartDrawer isOpen={isCartOpen} onClose={handleCloseCart} />
    </div>
  );
};

export default Layout;
