import React from "react";

import { FiHome, FiCalendar, FiTrendingUp } from "react-icons/fi";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import { LuHardHat } from "react-icons/lu";
import { BsMegaphoneFill } from "react-icons/bs";
import { BiSolidParty } from "react-icons/bi";
import { FaShop } from "react-icons/fa6";
import { Link } from "@tanstack/react-router";

const services = [
  {
    icon: <LuHardHat className="w-12 h-12 text-blue-600" />,
    title: "Construction & Civil Works",
    description:
      "We have an assembled team of architects , engineers, and skilled laborers to deliver high-quality construction and civil engineering projects on time and within budget covering residential, commercial, and infrastructure developments.",
  },
  {
    icon: <BiSolidParty className="w-12 h-12 text-blue-600" />,
    title: "Events Management",
    description:
      "Full-service event planning and execution, from corporate functions and conferences to weddings and launches, ensuring memorable experiences. catering, logistics, and on-site management, sound, stage and lights hire.",
  },
  {
    icon: <BsMegaphoneFill className="w-12 h-12 text-blue-600" />,
    title: "Branding, Promotion & Marketing",
    description:
      "Creative branding strategies, digital marketing, promotions, and advertising campaigns to elevate your business visibility and growth.",
  },
  {
    icon: <HiOutlineBuildingLibrary className="w-12 h-12 text-blue-600" />,
    title: "Real Estate & Property Management",
    description:
      "Comprehensive real estate solutions including sales, leasing, development, and ongoing property management for optimal returns.",
  },
  {
    icon: <FaShop className="w-12 h-12 text-blue-600" />,
    title: "General Supplies",
    description:
      "We Supply a wide range of quality products including construction materials, office supplies, event equipment, and promotional items to meet your business needs. beans, rice, noodles, drinks, building materials, office stationery electronics etc.",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            HMA Fields provides end-to-end solutions across construction,
            events, marketing, and real estate—tailored to your needs with
            excellence and innovation.
          </p>{" "}
          <div className="mt-6">
            <Link
              to="/services"
              className=" hover:text-blue-800 bg-blue-100 text-blue-700 font-semibold rounded-full text-sm px-6 py-3 inline-block transition-color"
            >
              View All Services
            </Link>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-8 flex flex-col items-center text-center group"
            >
              <div className="mb-6 p-4  bg-[#f8a1c4] rounded-full group-hover:bg-[#5a9bd4] transition-colors">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
