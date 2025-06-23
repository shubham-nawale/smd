import { useState } from 'react';
import { Link } from 'react-router-dom';
import LanguageSwitcher from '../LanguageSwitcher';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top Row */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Title in center */}
        <h1 className="text-2xl sm:text-3xl font-semibold text-pink-700 font-serif">
          शिवप्रसाद मंडप डेकोरेशन
        </h1>

        {/* Right controls: language + menu */}
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={
                  isMobileMenuOpen
                    ? 'M6 18L18 6M6 6l12 12'
                    : 'M4 6h16M4 12h16M4 18h16'
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex justify-center gap-6 text-base font-medium py-2">
        <Link to="/" className="text-gray-800 hover:text-pink-600">Home</Link>
        <a href="#portfolio" className="text-gray-800 hover:text-pink-600">Portfolio</a>
        <a href="#services" className="text-gray-800 hover:text-pink-600">Services</a>
        <a href="#testimonials" className="text-gray-800 hover:text-pink-600">Testimonials</a>
        <Link to="/contact" className="text-gray-800 hover:text-pink-600">Contact</Link>
        <Link to="/admin-login" className="text-gray-800 hover:text-pink-600">Admin Login</Link>
      </nav>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-inner">
          <nav className="flex flex-col items-center gap-4 py-4 text-base font-medium">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-800 hover:text-pink-600">Home</Link>
            <a href="#portfolio" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-800 hover:text-pink-600">Portfolio</a>
            <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-800 hover:text-pink-600">Services</a>
            <a href="#testimonials" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-800 hover:text-pink-600">Testimonials</a>
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-800 hover:text-pink-600">Contact</Link>
            <Link to="/admin-login" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-800 hover:text-pink-600">Admin Login</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
