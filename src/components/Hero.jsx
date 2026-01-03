import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    title: "Construction And Civil Works",
    description:
      "Building the future with precision, quality, and innovation in every project.",
    img: "/images/herocivil.jpg",
  },
  {
    title: "Property & Real Estates Management",
    description:
      "Professional management and development of premium properties for maximum value.",
    img: "/images/realestate2.jpg",
  },
  {
    title: "Marketing, Branding & Promotion",
    description:
      "Creative strategies that elevate your brand and drive real business growth.",
    img: "/images/branding10.jpg",
  },
  {
    title: "Events Management & Planning",
    description:
      "Flawless planning and execution for unforgettable corporate and private events.",
    img: "/images/events1.jpg",
  },
  {
    title: "General Supplies",
    description:
      "Timely delivery of quality materials and logistics for all your project needs.",
    img: "/images/supplieshero.jpg",
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 6000); // Change slide every 6 seconds
    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[currentIndex];

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
        style={{ backgroundImage: `url(${currentSlide.img})` }}
      ></div>
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/10" />
      {/* Content */}
      <div className="relative h-full flex items-center justify-center text-center px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl text-white"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-6xl  mb-6 font-arimo text-[#FF1493] uppercase font-bold"
            >
              {currentSlide.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg md:text-2xl mb-10 max-w-2xl mx-auto font-arimo text-[#E0E0E0] font-medium capitalize"
            >
              {currentSlide.description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="/services"
                className="font-dm-sans px-8 py-4 bg-white text-gray-900 font-semibold rounded-md hover:bg-gray-200 transition shadow-lg "
              >
                Learn More
              </a>
              <a
                href="/quotation"
                className="px-8 py-4 bg-[#FF1493] text-white font-semibold rounded-md hover:bg-[#FF4DB8] transition shadow-lg"
              >
                Get Quotation
              </a>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Dots Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition ${
                index === currentIndex ? "bg-white w-10" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
