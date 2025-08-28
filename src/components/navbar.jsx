// Navbar.jsx
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-blue-600 shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          {/* Logo */}
          <div className="text-white font-bold text-xl cursor-pointer">
            MyLogo
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6 text-white font-medium">
            <a href="#home" className="hover:text-yellow-300 transition">Home</a>
            <a href="#about" className="hover:text-yellow-300 transition">About</a>
            <a href="#services" className="hover:text-yellow-300 transition">Services</a>
            <a href="#contact" className="hover:text-yellow-300 transition">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-700 px-4 py-3 space-y-3 text-white">
          <a href="#home" className="block hover:text-yellow-300">Home</a>
          <a href="#about" className="block hover:text-yellow-300">About</a>
          <a href="#services" className="block hover:text-yellow-300">Services</a>
          <a href="#contact" className="block hover:text-yellow-300">Contact</a>
        </div>
      )}
    </nav>
  );
}
