import LanguageSwitcher from '../LanguageSwitcher';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-3xl font-['Pacifico'] text-primary">Logo</Link>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-gray-800 hover:text-primary font-medium">Home</a>
          <a href="#portfolio" className="text-gray-800 hover:text-primary font-medium">Portfolio</a>
          <a href="#services" className="text-gray-800 hover:text-primary font-medium">Services</a>
          <a href="#testimonials" className="text-gray-800 hover:text-primary font-medium">Testimonials</a>
          <a href="/contact" className="text-gray-800 hover:text-primary font-medium">Contact</a>
          <a href="/admin-login" className="text-gray-800 hover:text-primary font-medium">AdminLogin</a>
        </nav>
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Header;
