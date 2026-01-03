import { Link } from "@tanstack/react-router";
import React from "react";

const galleryImages = [
  {
    src: "https://www.porcelanosa.com/trendbook/app/uploads/2018/09/Porcelanosa-Grupo-Projects-Residencial-Lagos-Nigeria-01.jpg",
    alt: "Elegant luxury villa exterior",
    category: "Construction & Civil Works",
    size: "large", // spans more space
  },
  {
    src: "https://african.land/oc-content/plugins/blog/img/blog/1613.jpg",
    alt: "Modern infrastructure project completion",
    category: "Construction & Civil Works",
    size: "small",
  },
  {
    src: "https://www.exposebrands.com/wp-content/uploads/2025/05/IMG_0015-1024x683.jpg",
    alt: "High-energy brand activation event",
    category: "Events Management",
    size: "small",
  },
  {
    src: "https://brandcom.ng/wp-content/uploads/2025/10/Picture1-coke-1024x639.jpg",
    alt: "Creative brand launch and marketing campaign",
    category: "Branding & Marketing",
    size: "large",
  },
  {
    src: "https://african.land/oc-content/plugins/blog/img/blog/1613.jpg",
    alt: "Premium property management portfolio",
    category: "Real Estate & Property Management",
    size: "small",
  },
  // {
  //   src: "https://images.nigeriapropertycentre.com/properties/images/3169525/068fdec0793a89-grade-a-commercial-office-showroom-spaces-of-500-and-1000-sqm-offices-for-rent-victoria-island-lagos.jpg",
  //   alt: "Grade A commercial office space in Victoria Island",
  //   category: "Real Estate & Property Management",
  //   size: "large",
  // },
  {
    src: "https://www.porcelanosa.com/trendbook/app/uploads/2018/09/Porcelanosa-Grupo-Projects-Residencial-Lagos-Nigeria-01.jpg",
    alt: "Elegant luxury villa exterior",
    category: "Construction & Civil Works",
    size: "small",
  },
];

export default function GallerySection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Project Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A glimpse into our world-class executions across construction,
            events, marketing, and real estate.
          </p>
        </div>

        {/* Mobile-First Asymmetric Masonry Grid */}
        <div className="grid grid-cols-2 auto-rows-[250px] gap-4 md:grid-cols-4 md:auto-rows-[200px] lg:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 ${
                image.size === "large"
                  ? "col-span-2 row-span-2 md:col-span-2 md:row-span-2"
                  : "col-span-1 row-span-1 md:col-span-1 md:row-span-1"
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* Overlay on Hover – Now visible on mobile too */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end pointer-events-none">
                <div className="p-5 text-white">
                  <p className="text-xs font-medium uppercase tracking-wider mb-1 opacity-90">
                    {image.category}
                  </p>
                  <p className="text-base font-semibold leading-tight">
                    {image.alt}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <Link
            to="/gallery"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
          >
            View Full Gallery
            <svg
              className="ml-3 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
