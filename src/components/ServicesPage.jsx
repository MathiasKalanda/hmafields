// src/pages/ServicesPage.jsx

import React from "react";

const services = [
  {
    title: "Construction & Civil Works",
    heroImage:
      "https://buildingpractice.biz/wp-content/uploads/2024/04/27N-Glover-Road-3rd-Series-3-scaled.jpg",
    description:
      "We deliver high-quality construction and civil engineering projects, from luxury residential developments to commercial complexes and infrastructure works across Lagos and beyond.",
    processSteps: [
      "Initial consultation and site assessment",
      "Detailed design and architectural planning",
      "Permitting and regulatory approvals",
      "Precision construction with premium materials",
      "Quality assurance and timely handover",
      "Post-completion support and maintenance",
    ],
    gallery: [
      "https://lh7-rt.googleusercontent.com/docsz/AD_4nXfey9TQ5XpFJ28mxYYEttym1N0aMBl2YWYSXasUMLzw6sIYzJk16IvL-bFOv-MTiCBYycu-5rjQqGtRlMwY2M3OqmURvwpE3nDa5mCGlEepxkrW3vtG9JMJBaxA-0kF4hftOv7QWQ?key=LdH9fk7rJd-kmy46dnvf5M5W",
      "https://buildingpractice.biz/wp-content/uploads/2024/04/27N-Glover-Road-3rd-Series-3-scaled.jpg",
      "https://buildingpractice.biz/wp-content/uploads/2025/01/Top-Residential-Construction-COmpanies-in-Nigeria.png",
      "https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3048848832768987169",
    ],
    whyChoose: [
      "Over 15 years of experience in Lagos real estate",
      "Certified engineers and skilled workforce",
      "Commitment to safety and international standards",
      "On-time delivery with transparent pricing",
    ],
  },
  {
    title: "Events Management",
    heroImage:
      "https://www.felicitiesevents.com/assets/img/services/conferences-and-meetings.jpg",
    description:
      "Full-service event planning and execution for corporate conferences, product launches, weddings, and experiential gatherings that leave lasting impressions.",
    processSteps: [
      "Concept development and theme creation",
      "Venue sourcing and logistics planning",
      "Vendor coordination and budget management",
      "Technical setup (AV, staging, lighting)",
      "On-site management and execution",
      "Post-event evaluation and reporting",
    ],
    gallery: [
      "https://www.felicitiesevents.com/assets/img/services/conferences-and-meetings.jpg",
      "https://translationequipment.ng/wp-content/uploads/2019/08/1-1F31515063EG.jpg",
      "https://i0.wp.com/eloquentdisplays.com/wp-content/uploads/2024/06/corporate-event-planning-management.jpg?fit=867%2C472&ssl=1",
      "https://venues.ng/wp-content/uploads/2023/07/The-Zone-Centre-Conference-Centre.jpeg",
    ],
    whyChoose: [
      "Successfully managed 500+ events",
      "Creative concepts tailored to your brand",
      "Seamless execution with zero downtime",
      "Strong network of premium vendors",
    ],
  },
  {
    title: "Branding, Promotion & Marketing",
    heroImage:
      "https://doingsoon.com/wp-content/uploads/2022/08/E-lAfFcXoAE4xc2.jpg",
    description:
      "Creative branding strategies, digital campaigns, experiential activations, and promotional events designed to elevate visibility and drive measurable growth.",
    processSteps: [
      "Brand audit and strategy development",
      "Creative design and campaign planning",
      "Multi-channel execution (digital, outdoor, experiential)",
      "Influencer and media partnerships",
      "Real-time monitoring and optimization",
      "Performance analytics and ROI reporting",
    ],
    gallery: [
      "https://xinicomms.com/wp-content/uploads/2019/05/Experiential-Marketing-And-Brand-Activation-In-Lagos-Nigeria-300x225.jpg",
      "https://xinicomms.com/wp-content/uploads/2019/06/Where-Lagos-Meets-Experiential-Marketing-from-Nigeria-to-the-world.jpg",
      "https://doingsoon.com/wp-content/uploads/2022/08/E-lAfFcXoAE4xc2.jpg",
      "https://transposeservices.com/wp-content/uploads/2021/05/EXPERI1.jpe",
    ],
    whyChoose: [
      "Proven ROI-driven campaigns",
      "Innovative experiential activations",
      "Full digital and traditional media coverage",
      "Data-backed creative strategies",
    ],
  },
  {
    title: "Real Estate & Property Management",
    heroImage:
      "https://images.nigeriapropertycentre.com/properties/images/2754018/067c9647e38dc7-luxury-premium-office-complex-with-amazing-facilities-offices-for-rent-victoria-island-lagos.jpeg",
    description:
      "Comprehensive real estate solutions including sales, leasing, development consulting, and full property management for residential and commercial assets.",
    processSteps: [
      "Property valuation and market analysis",
      "Marketing and tenant/buyer sourcing",
      "Lease/sale negotiation and documentation",
      "Facility maintenance and vendor management",
      "Rent collection and financial reporting",
      "Regular inspections and compliance",
    ],
    gallery: [
      "https://zylusgroup.com/wp-content/uploads/2021/06/maisonette-zylus-group.jpg",
      "https://cwlagos.com/wp-content/uploads/2025/03/WhatsApp-Image-2025-03-08-at-1.01.34-PM-850x550.jpeg",
      "https://images.nigeriapropertycentre.com/properties/images/2754018/067c9647e38dc7-luxury-premium-office-complex-with-amazing-facilities-offices-for-rent-victoria-island-lagos.jpeg",
      "https://cwlagos.com/wp-content/uploads/2025/07/Untitled-design-34-3-850x550.png",
    ],
    whyChoose: [
      "₦5B+ assets under management",
      "98% occupancy rate across portfolio",
      "24/7 maintenance response team",
      "Transparent reporting and owner portal",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <section className="py-24 bg-gradient-to-br from-blue-700 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto">
            End-to-end solutions delivered with expertise, innovation, and
            unwavering commitment to excellence.
          </p>
        </div>
      </section>

      {/* Services Sections */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        {services.map((service, index) => (
          <div
            key={index}
            className={`mb-32 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
          >
            {/* Hero Image for Service */}
            <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl mb-12 lg:mb-0">
              <img
                src={service.heroImage}
                alt={service.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-10 text-white">
                <h2 className="text-4xl md:text-5xl font-bold">
                  {service.title}
                </h2>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center mt-8">
              {/* Description & Why Choose */}
              <div className="">
                <p className="text-xl text-gray-700 leading-relaxed mb-10">
                  {service.description}
                </p>

                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Why Choose HMA Fields?
                </h3>
                <ul className="space-y-4">
                  {service.whyChoose.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-blue-600 text-2xl mr-4">✓</span>
                      <span className="text-lg text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Process Steps */}
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-8">
                  Our Process
                </h3>
                <ol className="space-y-6">
                  {service.processSteps.map((step, i) => (
                    <li key={i} className="flex items-start">
                      <span className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-6">
                        {i + 1}
                      </span>
                      <span className="text-lg text-gray-700">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
              <hr className="w-full" />
            </div>

            {/* Gallery Grid */}
            <div className="mt-16">
              <h3 className="text-3xl font-bold text-gray-900 text-center mb-10">
                Project Highlights
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {service.gallery.map((img, i) => (
                  <div
                    key={i}
                    className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
                  >
                    <img
                      src={img}
                      alt={`${service.title} project ${i + 1}`}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Final CTA */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-10">
            Contact us today for a free consultation.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-10 py-5 bg-white text-blue-600 text-lg font-semibold rounded-lg hover:bg-gray-100 transition-all shadow-lg"
          >
            Get in Touch
            <svg
              className="ml-3 w-6 h-6"
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
      </section>
    </div>
  );
}
