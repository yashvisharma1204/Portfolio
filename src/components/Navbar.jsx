import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-white text-black relative max-w-7xl mx-auto">
      {/* Left section: Name and Status with glowing circle */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center">
          <div className="ml-3 flex items-center space-x-2">
            <div>
              <h1 className="text-lg font-medium font-serif">Yashvi Sharma</h1>
              <span className="text-xs text-green-600 font-semibold flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-500 rounded-full pulse-animate"></div>
                <span>OPEN FOR INTERNSHIPS</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop & Tablet Navigation Links */}
      <div className="hidden md:flex items-center space-x-4 lg:space-x-8 text-base font-semibold text-gray-700">
        <a href="#" className="hover:text-black">Home</a>
        <a href="#" className="hover:text-black">About</a>
        <a href="#" className="hover:text-black">Projects</a>
        <a href="#" className="hover:text-black">Contact</a>
      </div>

      {/* Desktop & Tablet "Resume" Button */}
      <div className="hidden md:block">
        <a 
          href="https://yashvisharma2027.tiiny.site" 
          target='_blank' 
          rel="noopener noreferrer" 
          className="flex items-center px-6 py-3 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 text-white shadow-lg hover:from-gray-800 hover:to-black transition-all duration-200 ease-in-out"
        >
          📄 Resume
        </a>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="p-2 border border-black rounded">
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu - Conditionally rendered, full screen overlay */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white z-50 transition-transform duration-500 ease-in-out transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} className="p-2 ">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="flex flex-col items-center justify-center h-full space-y-6">
          <a onClick={toggleMenu} href="#" className="text-2xl font-semibold hover:text-gray-500">Home</a>
          <a onClick={toggleMenu} href="#" className="text-2xl font-semibold hover:text-gray-500">About</a>
          <a onClick={toggleMenu} href="#" className="text-2xl font-semibold hover:text-gray-500">Projects</a>
          <a onClick={toggleMenu} href="#" className="text-2xl font-semibold hover:text-gray-500">Contact</a>
            <a 
            href="https://yashvisharma2027.tiiny.site" 
            target='_blank' 
            rel="noopener noreferrer" 
            className="flex items-center px-6 py-3 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 text-white shadow-lg hover:from-gray-800 hover:to-black transition-all duration-200 ease-in-out"
            >
            📄 Resume
            </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;