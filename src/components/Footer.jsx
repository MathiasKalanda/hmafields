import { Link } from "@tanstack/react-router";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
  FaXTwitter,
  FaInstagram,
} from "react-icons/fa6";
import { HiMail } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info & Why Us */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#ff1493]">HMA FIELDS</h2>
            <p className="text-sm leading-relaxed">
              We deliver exceptional quality, personalized service, and
              innovative solutions tailored to your needs. With years of
              expertise and a commitment to excellence, we're your trusted
              partner for success.
            </p>
            <h3 className="text-lg font-semibold text-white mt-6 underline">
              Why Choose Us?
            </h3>
            <p className="text-sm">
              Reliable, innovative, and customer-focused – building long-term
              partnerships through outstanding results.
            </p>
          </div>

          {/* Quick Links / Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white underline">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-[#ff4d8b] transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#ff4d8b] transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-[#ff4d8b] transition"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#ff4d8b] transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white underline">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <HiMail className="h-5 w-5 hover:text-[#ff4d8b] transition" />
                hmafieldsltd@gmail.com
              </li>
              <li className="flex items-center gap-2">
                <FaWhatsapp className="h-5 w-5 hover:text-[#ff4d8b] transition " />
                PO BOX 187378
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="h-5 w-5 mt-0.5 hover:text-[#ff4d8b] transition"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                HONORA PLAZA , ZANA ENTEBBE ROAD
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white underline">
              Newsletter
            </h3>
            <p className="text-sm">Subscribe to get updates and offers!</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-6 py-2 bg-[#ff1493] text-white font-medium rounded-md hover:bg-[#ff4d8b] transition">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Social Icons */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex space-x-6 text-2xl">
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
              <FaLinkedinIn />
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
              className="hover:text-white transition"
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
              href="mailto:info@mysite.com"
              className="hover:text-red-600 transition"
            >
              <HiMail />
            </a>
          </div>

          <p className="text-sm text-center md:text-right">
            © 2025 HMA Fields. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
