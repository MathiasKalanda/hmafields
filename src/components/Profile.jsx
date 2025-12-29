import { motion } from "framer-motion";

export default function Profile() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center py-20"
      style={{
        backgroundImage: `url("/images/supplies.jpg")`,
      }}
    >
      {/* Dark overlay for readability */}
      {/* <div className="absolute inset-0" /> */}

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Short Description (left of logo on desktop) */}
            <h2 className="text-3xl md:text-4xl font-raleway font-semibold">
              Excellence in Construction, Real Estate & Beyond
            </h2>

            {/* Longer Paragraph */}
            <p className="text-lg md:text-xl font-dm-sans leading-relaxed opacity-90">
              HMA Fields Ltd is a leading multi-disciplinary company delivering
              top-tier services in construction and civil works, property
              development and management, marketing & branding, events planning,
              and general supplies. With decades of experience and a commitment
              to innovation, we turn visions into reality for clients across the
              region.
            </p>

            {/* Button on far left (bottom of text block) */}
            <div className="pt-6">
              <a
                href="/quotation"
                className="inline-block px-10 py-4 bg-blue-600 text-white font-semibold text-lg rounded-md hover:bg-blue-700 transition shadow-xl"
              >
                Get a Quote Today
              </a>
            </div>
          </motion.div>

          {/* Right: Big Company Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <img
              src="https://t4.ftcdn.net/jpg/15/77/95/25/360_F_1577952588_ySWATT3FTFbPqCDg1rxq3Nn6SPSWLm35.jpg" // Replace with your real logo URL or local path
              alt="HMA Fields Ltd Logo"
              className="w-80 h-80 md:w-96 md:h-96 object-contain drop-shadow-2xl"
            />
          </motion.div>
        </div>

        {/* Company Motto at the Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-center mt-20"
        >
          <p className="text-2xl md:text-4xl font-nunito italic font-light tracking-wider opacity-80">
            "Building Trust, Delivering Excellence – Since Our Founding"
          </p>
        </motion.div>
      </div>
    </section>
  );
}
