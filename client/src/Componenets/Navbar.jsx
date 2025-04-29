import { useState } from 'react';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="text-xl font-extrabold text-indigo-600">
         <a href="/">eDoc<span className="text-gray-800">Connect</span></a>   
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="/WelcomeLogin" className="text-gray-700 hover:text-indigo-600 font-medium">Sign Up</a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-800 focus:outline-none"
            >
              <FaBars className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4">
          <a href="#" className="block text-gray-700 py-2 hover:text-indigo-600">Sign Up</a>
          <a href="#" className="block text-gray-700 py-2 hover:text-indigo-600">Login</a>
          <a href="#" className="block bg-indigo-600 text-white text-center px-4 py-2 rounded-full mt-2 hover:bg-indigo-700 transition">Profile</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
