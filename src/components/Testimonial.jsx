// src/components/TestimonialsSection.jsx

import React from "react";
import { FiStar, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Dr. Adebayo Ogunlesi",
    position: "CEO, Apex Group Nigeria",
    company: "Apex Group",
    quote:
      "HMA Fields transformed our vision for a world-class office complex in Victoria Island into reality. Professional, timely, and exceptional attention to detail from start to finish.",
    rating: 5,
  },
  {
    name: "Mrs. Chioma Okonkwo",
    position: "Head of Marketing, Sterling Bank Plc",
    company: "Sterling Bank",
    quote:
      "The brand activation and product launch event managed by HMA Fields was outstanding. Creative execution, seamless logistics, and measurable impact — our best campaign yet.",
    rating: 5,
  },
  {
    name: "Engr. Tunde Hassan",
    position: "Project Director, Landmark Developments",
    company: "Landmark Developments",
    quote:
      "We've entrusted HMA Fields with multiple luxury residential projects in Lekki and Ikoyi. Their construction quality, project management, and client communication are truly top-tier.",
    rating: 5,
  },
  {
    name: "Ms. Funmi Adeyemi",
    position: "Events Director, TechPoint Africa",
    company: "TechPoint Africa",
    quote:
      "From concept to execution, HMA Fields delivered our annual tech summit flawlessly. 500+ attendees, international speakers, and zero hiccups. Highly recommended for corporate events.",
    rating: 5,
  },
  {
    name: "Mr. Victor Emeka",
    position: "Property Investor",
    company: "Private Client",
    quote:
      "HMA Fields manages my portfolio of 12 high-end properties in Lagos. Consistent occupancy, timely maintenance, and excellent returns — peace of mind I can count on.",
    rating: 5,
  },
  {
    name: "Mrs. Sandra Ibe",
    position: "CMO, QuickPay FinTech",
    company: "QuickPay",
    quote:
      "The rebranding and digital marketing campaign by HMA Fields doubled our user acquisition in just 6 months. Strategic, creative, and results-driven — true partners in growth.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  // Auto-play
  React.useEffect(() => {
    const interval = setInterval(nextSlide, 7000);
    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by leading businesses and individuals across Lagos and
            beyond.
          </p>
        </div>

        {/* Single Active Slide Carousel – Responsive */}
        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 transition-all duration-700">
            {/* Quote Icon */}
            <FaQuoteLeft className="w-12 h-12 md:w-16 md:h-16 text-blue-200 mb-6" />

            {/* Rating */}
            <div className="flex mb-6">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <FiStar
                  key={i}
                  className="w-6 h-6 text-yellow-400 fill-current"
                />
              ))}
            </div>

            {/* Quote Text – Better mobile readability */}
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-10">
              "{currentTestimonial.quote}"
            </p>

            {/* Client Info */}
            <div className="flex items-center">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-lg md:text-xl">
                {currentTestimonial.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div className="ml-4">
                <h4 className="font-bold text-gray-900 text-lg md:text-xl">
                  {currentTestimonial.name}
                </h4>
                <p className="text-gray-600 text-base">
                  {currentTestimonial.position}, {currentTestimonial.company}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Arrows – Larger on mobile */}
          <button
            onClick={prevSlide}
            className="absolute left-4 md:left-[-60px] top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 p-3 md:p-4 rounded-full shadow-lg transition-all z-10"
            aria-label="Previous testimonial"
          >
            <FiChevronLeft className="w-7 h-7 md:w-8 md:h-8 text-[#ff1493]" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 md:right-[-60px] top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 p-3 md:p-4 rounded-full shadow-lg transition-all z-10"
            aria-label="Next testimonial"
          >
            <FiChevronRight className="w-7 h-7 md:w-8 md:h-8 text-[#ff1493]" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-10 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-[#ff1493] w-10"
                    : "bg-gray-300 hover:bg-[#ff4db8]"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
