import React from "react";
import { FiArrowRight } from "react-icons/fi";

const projects = [
  {
    image:
      "https://naijalandlord.com/wp-content/uploads/2024/12/IMG-20241123-WA0419-1170x785.jpg",
    title: "Luxury Villa Construction – Lekki Phase 1",
    description:
      "Complete design and build of a 5-bedroom smart luxury villa with premium finishes, swimming pool, and home automation systems for a private client.",
    metric: "Delivered 2 months ahead of schedule",
    link: "#",
  },
  {
    image:
      "https://images.nigeriapropertycentre.com/properties/images/3017249/0689257ed073a6-grade-a-office-complex-1000sqm-offices-for-rent-victoria-island-lagos.jpg",
    title: "Prime Commercial Property Development",
    description:
      "Development and leasing of a modern 10-unit office complex in Victoria Island, now fully occupied by multinational corporations.",
    metric: "₦1.2B project value • 100% occupancy rate",
    link: "#",
  },
  {
    image:
      "https://african.business/wp-content/uploads/2025/11/moonshot-feature-image.jpg",
    title: "Annual Corporate Leadership Summit 2025",
    description:
      "End-to-end planning and execution of a 500+ attendee leadership conference featuring international speakers, networking sessions, and brand activations.",
    metric: "500+ attendees • 15 partner brands",
    link: "#",
  },
  {
    image:
      "https://whirlspotmedia.com/wp-content/uploads/2025/07/Copy-of-Execution_Blog-Image_Template.jpg",
    title: "Brand Launch Campaign – FinTech Startup",
    description:
      "Comprehensive branding, digital marketing, and promotional campaign including social media strategy, influencer partnerships, and launch event.",
    metric: "200% ROI in first 6 months",
    link: "#",
  },
  {
    image:
      "https://www.edenoasisrealty.com/wp-content/uploads/2025/04/Phoenix-header-1.jpg",
    title: "Property Management Portfolio Expansion",
    description:
      "Ongoing management of 50+ residential and commercial properties across Lagos, handling leasing, maintenance, and tenant relations.",
    metric: "₦800M+ assets under management",
    link: "#",
  },
  {
    image:
      "https://doingsoon.com/wp-content/uploads/2022/08/E-lAfFcXoAE4xc2.jpg",
    title: "High-Profile Product Activation Event",
    description:
      "Multi-city promotional tour and experiential marketing event for a leading consumer brand, driving nationwide awareness and sales uplift.",
    metric: "Reached 2M+ consumers directly",
    link: "#",
  },
];

export default function ProjectsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured Projects & Achievements
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From landmark constructions and high-impact events to successful
            marketing campaigns and premium property developments — see what
            we’ve delivered.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group flex flex-col"
            >
              {/* Real Project Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {project.title}
                </h3>

                {/* Metric Badge */}
                <div className="mb-4 inline-block px-4 py-2 bg-blue-100 text-blue-700 font-semibold rounded-full text-sm">
                  {project.metric}
                </div>

                <p className="text-gray-600 mb-6 flex-1">
                  {project.description}
                </p>

                <a
                  href={project.link}
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors group"
                >
                  View Details
                  <FiArrowRight className="ml-2 transform group-hover:translate-x-2 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
