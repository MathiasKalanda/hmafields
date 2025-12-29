// src/components/GallerySection.jsx

import React from "react";

const galleryImages = [
  {
    src: "https://brandstolife.com/wp-content/uploads/2025/05/experience-africa-outdoor-football-game-activation-nigeria-kenya.webp",
    alt: "Luxury residential development in Ikoyi",
    category: "Construction & Civil Works",
  },
  {
    src: "https://brandstolife.com/wp-content/uploads/2025/05/experience-africa-outdoor-football-game-activation-nigeria-kenya.webp",
    alt: "Modern infrastructure project completion",
    category: "Construction & Civil Works",
  },
  {
    src: "https://www.exposebrands.com/wp-content/uploads/2025/05/IMG_0015-1024x683.jpg",
    alt: "High-energy brand activation event",
    category: "Events Management",
  },
  {
    src: "https://brandcom.ng/wp-content/uploads/2025/10/Picture1-coke-1024x639.jpg",
    alt: "Creative brand launch and marketing campaign",
    category: "Branding & Marketing",
  },
  {
    src: "https://african.land/oc-content/plugins/blog/img/blog/1613.jpg",
    alt: "Premium property management portfolio",
    category: "Real Estate & Property Management",
  },
  {
    src: "https://images.nigeriapropertycentre.com/properties/images/3169525/068fdec0793a89-grade-a-commercial-office-showroom-spaces-of-500-and-1000-sqm-offices-for-rent-victoria-island-lagos.jpg",
    alt: "Grade A commercial office space in Victoria Island",
    category: "Real Estate & Property Management",
  },
  {
    src: "https://www.porcelanosa.com/trendbook/app/uploads/2018/09/Porcelanosa-Grupo-Projects-Residencial-Lagos-Nigeria-01.jpg",
    alt: "Elegant luxury villa exterior",
    category: "Construction & Civil Works",
  },
  {
    src: "https://brandstolife.com/wp-content/uploads/2025/05/experience-africa-outdoor-football-game-activation-nigeria-kenya.webp",
    alt: "Experiential marketing activation with crowd engagement",
    category: "Events Management & Branding",
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

        {/* Responsive Masonry-Style Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                <div className="p-6 text-white">
                  <p className="text-sm font-medium uppercase tracking-wider mb-1">
                    {image.category}
                  </p>
                  <p className="text-lg font-semibold">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Optional CTA */}
        <div className="text-center mt-12">
          <a
            href="/gallery"
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
          </a>
        </div>
      </div>
    </section>
  );
}
