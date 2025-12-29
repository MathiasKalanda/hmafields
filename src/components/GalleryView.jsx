// src/pages/Gallery.jsx or src/components/FullGallerySection.jsx

import React from "react";

const sections = [
  {
    title: "Construction & Civil Works",
    description:
      "Exquisite residential and infrastructure projects built with precision and premium quality across Lagos.",
    images: [
      {
        src: "https://i.ytimg.com/vi/cywiIJkG70o/hq720.jpg",
        alt: "Fully automated luxury home in Lekki, Lagos",
      },
      {
        src: "https://i.ytimg.com/vi/bTDB4elQqCs/hq720.jpg",
        alt: "Spacious 5-bedroom smart villa in Osapa Lekki",
      },
      {
        src: "https://african.land/oc-content/plugins/blog/img/blog/1613.jpg",
        alt: "Contemporary luxury residence in Lagos",
      },
      {
        src: "https://i.ytimg.com/vi/BDV_W8kxgts/hq720.jpg",
        alt: "5-bedroom duplex in Chevron Lekki",
      },
      {
        src: "https://i.ytimg.com/vi/NrwWPIzd164/hq720.jpg",
        alt: "Ultra-luxury $1.3M mansion in Lekki",
      },
    ],
  },
  {
    title: "Events Management",
    description:
      "High-impact corporate conferences, summits, and gatherings executed with flawless planning and execution.",
    images: [
      {
        src: "https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3725881094416691976",
        alt: "Panel discussion at a major business conference in Lagos",
      },
      {
        src: "https://africanmediaagency.com/wp-content/uploads/2024/09/12FR1.png",
        alt: "TechCabal Moonshot global speakers stage",
      },
      {
        src: "https://aiinnigeria.com/tasitut/2024/03/AIN-NG-1.jpeg",
        alt: "AI in Nigeria conference audience and stage",
      },
      {
        src: "https://c76c7bbc41.mjedge.net/wp-content/uploads/tc/2025/11/1-scaled.jpg",
        alt: "Sundown Sessions AI conversation event",
      },
      {
        src: "https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3472488516357860111",
        alt: "Large-scale assembly event with professional staging",
      },
    ],
  },
  {
    title: "Branding, Promotion & Marketing",
    description:
      "Creative brand activations, experiential campaigns, and promotional events that drive engagement and results.",
    images: [
      {
        src: "https://brandstolife.com/wp-content/uploads/2024/11/ENO_4549.jpg",
        alt: "Vibrant brand activation booth with crowd interaction",
      },
      {
        src: "https://learn.g2crowd.com/hubfs/Pillar%20Pages/marketing/experiential%20marketing/brand-activation.jpg",
        alt: "Experiential marketing setup in Nigeria",
      },
      {
        src: "https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=2461510197435796",
        alt: "Roadshow brand promotion event",
      },
      {
        src: "https://jmt.com.ng/wp-content/uploads/2022/12/experiential-marketing-truck.jpg",
        alt: "Mobile experiential marketing truck activation",
      },
      {
        src: "https://doingsoon.com/wp-content/uploads/2022/08/E-lAfFcXoAE4xc2.jpg",
        alt: "Crowd-engaging brand experience event",
      },
    ],
  },
  {
    title: "Real Estate & Property Management",
    description:
      "Premium residential apartments, office complexes, and managed properties delivering luxury and high returns.",
    images: [
      {
        src: "https://buildingpractice.biz/wp-content/uploads/2024/02/Untitled-27.jpg",
        alt: "Modern real estate development in Lagos",
      },
      {
        src: "https://images.nigeriapropertycentre.com/properties/images/3247340/0693a754775f57-luxury-oceanview-premium-2-bed-apartment-at-paramount-twin-towers-for-sale-oniru-victoria-island-lagos.jpg",
        alt: "Oceanview luxury apartment in Oniru VI",
      },
      {
        src: "https://zylusgroup.com/wp-content/uploads/2021/06/maisonette-zylus-group.jpg",
        alt: "Elegant maisonette property in Lagos",
      },
      {
        src: "https://images.nigeriapropertycentre.com/properties/images/2754018/067c9647e38dc7-luxury-premium-office-complex-with-amazing-facilities-offices-for-rent-victoria-island-lagos.jpeg",
        alt: "Premium office complex in Victoria Island",
      },
      {
        src: "https://naijatrustedrealtor.com/wp-content/uploads/2023/09/zylushomespCwmqaAysDzk11-1024x575.jpg",
        alt: "High-end managed residential property",
      },
    ],
  },
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Gallery</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto">
            Explore our portfolio of exceptional projects across construction,
            events, marketing, and real estate.
          </p>
        </div>
      </section>

      {/* Gallery Sections */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        {sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-32">
            {/* Section Heading */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {section.title}
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                {section.description}
              </p>
            </div>

            {/* Asymmetric Masonry Grid for this section */}
            <div className="grid grid-cols-2 auto-rows-[250px] gap-4 md:grid-cols-4 md:auto-rows-[220px] lg:gap-6">
              {section.images.map((image, index) => (
                <div
                  key={index}
                  className={`group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 ${
                    index % 5 === 0 || index % 5 === 3
                      ? "col-span-2 row-span-2"
                      : "col-span-1 row-span-1"
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end pointer-events-none">
                    <div className="p-5 text-white">
                      <p className="text-base font-semibold leading-tight">
                        {image.alt}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
