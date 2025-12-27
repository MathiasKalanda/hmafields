import { Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiHome, HiMail, HiMenu, HiX, HiBadgeCheck } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className="m fixed w-full top-0 z-50 px-8 py-4 bg-white text-gray-900 font-nunito rounded-md hover:bg-gray-100 transition shadow-xl text-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              to="/"
              className="text-2xl font-nunito font-bold text-gray-800"
            >
              MySite
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              About
            </Link>
            <Link
              to="/services"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? (
                <HiX className="h-6 w-6" />
              ) : (
                <HiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 h-screen">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              onClick={handleToggle}
              className="px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md flex items-center gap-2"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={handleToggle}
              className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md"
            >
              About
            </Link>
            <Link
              to="/services"
              onClick={handleToggle}
              className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md"
            >
              Services
            </Link>
            <Link
              to="/contact"
              onClick={handleToggle}
              className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md"
            >
              Contact
            </Link>

            <div className="mt-6 px-3">
              <a
                href="/quotation" // Change to your actual quotation page/link
                className="font-dm-sans w-full block text-center bg-blue-600 text-white font-semibold py-3 px-6 rounded-md hover:bg-blue-700 transition shadow-md"
              >
                Get Quotation
              </a>
            </div>

            <div className="mt-8 px-6 text-start text-gray-600">
              <h3 className="text-lg font-bold text-gray-800 mb-2 font-arimo">
                Why Choose Us?
              </h3>
              <p className="text-sm leading-relaxed font-dmsans">
                We deliver exceptional quality, personalized service, and
                innovative solutions tailored to your needs. With years of
                expertise and a commitment to excellence, we're your trusted
                partner for success.
              </p>
            </div>

            <div className="mt-10 px-6 flex flex-row items-center space-x-6 text-3xl text-gray-600">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-700 transition"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://wa.me/yournumber"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-500 transition"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black transition"
              >
                <FaXTwitter />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-600 transition"
              >
                <FaInstagram />
              </a>
              <a
                href="mailto:info@yoursite.com"
                className="hover:text-red-600 transition"
              >
                <HiMail />
              </a>
            </div>

            <div className="mt-4 px-6 text-sm text-gray-400 flex flex-row items-center justify-center gap-2">
              <span className="text-sm">Building Uganda With You All</span>
              <HiBadgeCheck />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
