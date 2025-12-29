// src/pages/AboutPage.jsx

import React from "react";

const pinterestImages = [
  "https://buildingpractice.biz/wp-content/uploads/2024/04/27N-Glover-Road-3rd-Series-3-scaled.jpg",
  "https://www.decorbyfurtullah.com/wp-content/uploads/2023/08/3.png",
  "https://brandstolife.com/wp-content/uploads/2024/11/ENO_4549.jpg",
  "https://marketingedge.com.ng/wp-content/uploads/2025/07/Brand-Activation.jpg",
  "https://www.decorbyfurtullah.com/wp-content/uploads/2023/08/3.png",
  "https://brandstolife.com/wp-content/uploads/2024/11/ENO_4549.jpg",
  "https://marketingedge.com.ng/wp-content/uploads/2025/07/Brand-Activation.jpg",
  "https://cwlagos.com/wp-content/uploads/2025/03/WhatsApp-Image-2025-03-08-at-1.01.34-PM-850x550.jpeg",
  "https://images.nigeriapropertycentre.com/properties/images/thumbs/3242894/069370f933e46a-luxuriously-built-4-bedroom-detached-duplex-detached-duplexes-for-sale-lekki-lagos.jpg",
  "https://zahariproperties.com/wp-content/uploads/2024/10/nigeria-luxury-real-estate-900x600-1.jpg",
  "https://images.pexels.com/photos/30689114/pexels-photo-30689114/free-photo-of-team-collaboration-meeting-in-lagos-office.jpeg",
  "https://www.julius-berger.com/fileadmin/_processed_/5/7/csm_jbn_award_f56b29d05b.jpg",
  "https://doingsoon.com/wp-content/uploads/2022/08/E-lAfFcXoAE4xc2.jpg",
  "https://venues.ng/wp-content/uploads/2023/07/The-Zone-Centre-Conference-Centre.jpeg",
];

const services = [
  {
    title: "Construction & Civil Works",
    brief:
      "Premium residential, commercial, and infrastructure projects built to the highest standards.",
    icon: "🛠️",
  },
  {
    title: "Events Management",
    brief:
      "Seamless planning and execution of corporate conferences, launches, and memorable experiences.",
    icon: "🎉",
  },
  {
    title: "Branding, Promotion & Marketing",
    brief:
      "Creative campaigns and experiential activations that elevate brands and drive growth.",
    icon: "📣",
  },
  {
    title: "Real Estate & Property Management",
    brief:
      "Expert sales, leasing, development, and management of luxury properties across Lagos.",
    icon: "🏢",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Stunning Hero with Overlay */}
      <section className="relative py-40 bg-gradient-to-br from-blue-800 via-blue-700 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-6xl md:text-7xl font-extrabold mb-8 drop-shadow-2xl">
            About HMA Fields
          </h1>
          <p className="text-2xl md:text-3xl text-blue-100 max-w-5xl mx-auto drop-shadow-lg">
            Transforming visions into reality through innovation, excellence,
            and unwavering dedication since 2010.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* Who We Are – Enhanced with Image Collage */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl font-extrabold text-gray-900 mb-10">
                Who We Are
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                HMA Fields is a premier multi-disciplinary firm based in the
                heart of Victoria Island, Lagos. We are passionate creators,
                strategic thinkers, and reliable partners delivering exceptional
                results across construction, events, marketing, and real estate.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                With a team of seasoned professionals and a client-first
                philosophy, we turn ambitious ideas into tangible successes that
                shape Nigeria's modern landscape.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <img
                src="https://images.pexels.com/photos/30689114/pexels-photo-30689114/free-photo-of-team-collaboration-meeting-in-lagos-office.jpeg"
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl object-cover h-96 hover:scale-105 transition-transform duration-500"
              />
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Professional excellence"
                className="rounded-2xl shadow-2xl object-cover h-96 mt-16 hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision – Elegant Cards */}
      <section className="py-24 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="relative bg-gradient-to-br from-blue-600 to-indigo-700 p-12 rounded-3xl shadow-2xl text-white overflow-hidden group hover:scale-105 transition-transform duration-500">
              <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-colors"></div>
              <div className="relative">
                <h3 className="text-4xl font-extrabold mb-8">Our Mission</h3>
                <p className="text-xl leading-relaxed">
                  To deliver world-class, innovative solutions that exceed
                  expectations while fostering sustainable growth and community
                  impact across Nigeria and beyond.
                </p>
              </div>
            </div>
            <div className="relative bg-gradient-to-br from-indigo-600 to-purple-700 p-12 rounded-3xl shadow-2xl text-white overflow-hidden group hover:scale-105 transition-transform duration-500">
              <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-colors"></div>
              <div className="relative">
                <h3 className="text-4xl font-extrabold mb-8">Our Vision</h3>
                <p className="text-xl leading-relaxed">
                  To be Africa's most trusted and innovative leader in
                  integrated construction, events, marketing, and real estate
                  services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Objectives – Iconic Cards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-20">
            Our Core Objectives
          </h2>
          <div className="grid md:grid-cols-3 gap-16">
            <div className="group">
              <div className="text-7xl font-bold text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                01
              </div>
              <h3 className="text-3xl font-bold mb-6">
                Uncompromising Excellence
              </h3>
              <p className="text-xl text-gray-700">
                Delivering superior quality in every project, every time.
              </p>
            </div>
            <div className="group">
              <div className="text-7xl font-bold text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                02
              </div>
              <h3 className="text-3xl font-bold mb-6">
                Client-Centric Innovation
              </h3>
              <p className="text-xl text-gray-700">
                Putting clients first with creative, tailored solutions.
              </p>
            </div>
            <div className="group">
              <div className="text-7xl font-bold text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                03
              </div>
              <h3 className="text-3xl font-bold mb-6">Sustainable Impact</h3>
              <p className="text-xl text-gray-700">
                Building a better future for communities and the environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MD's Message – Spotlight */}
      <section className="py-28 bg-gradient-to-br from-gray-900 to-blue-950 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-600/20 to-indigo-600/20 backdrop-blur-lg rounded-3xl p-16 md:p-24 text-center border border-white/10">
            <img
              src="https://media.istockphoto.com/id/2045587694/photo/business-man-portrait-and-happy-in-office-for-legal-career-planning-and-confidence-at-a-law.jpg?s=612x612&w=0&k=20&c=5kUzcaDP8iSxV8jdANd-xqe3c3h1j0KrbE3ow64KDoQ="
              alt="Engr. Chukwudi Okeke"
              className="w-48 h-48 rounded-full mx-auto mb-10 object-cover border-8 border-white/30 shadow-2xl"
            />
            <p className="text-3xl md:text-4xl italic leading-relaxed mb-10 max-w-5xl mx-auto">
              "We don't just deliver projects — we create legacies. Every
              structure we build, every event we host, and every brand we
              elevate is a testament to our passion for excellence and our
              commitment to transforming lives."
            </p>
            <div>
              <h4 className="text-3xl font-extrabold">Engr. Chukwudi Okeke</h4>
              <p className="text-xl text-blue-200">Managing Director & CEO</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview – Vibrant Cards */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-5xl font-extrabold text-gray-900 text-center mb-20">
            Our Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-10 shadow-xl hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 group"
              >
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">{service.brief}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-20">
            Milestones & Recognition
          </h2>
          <div className="grid md:grid-cols-3 gap-16">
            <div className="group">
              <img
                src="https://www.julius-berger.com/fileadmin/_processed_/5/7/csm_jbn_award_f56b29d05b.jpg"
                alt="Award"
                className="rounded-2xl shadow-2xl mx-auto mb-8 group-hover:scale-105 transition-transform"
              />
              <h3 className="text-3xl font-bold">
                Best Multi-Disciplinary Firm 2024
              </h3>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-12 rounded-3xl shadow-2xl">
              <div className="text-7xl font-extrabold mb-4">150+</div>
              <p className="text-2xl">Projects Delivered</p>
            </div>
            <div className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white p-12 rounded-3xl shadow-2xl">
              <div className="text-7xl font-extrabold mb-4">₦10B+</div>
              <p className="text-2xl">Assets Managed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-20">
            Trusted Partners & Clients
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-16 grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
            {/* Replace with actual partner logos */}
            <div className="bg-gray-300 border-2 border-dashed rounded-xl w-40 h-24" />
            <div className="bg-gray-300 border-2 border-dashed rounded-xl w-40 h-24" />
            <div className="bg-gray-300 border-2 border-dashed rounded-xl w-40 h-24" />
            <div className="bg-gray-300 border-2 border-dashed rounded-xl w-40 h-24" />
            <div className="bg-gray-300 border-2 border-dashed rounded-xl w-40 h-24" />
          </div>
        </div>
      </section>

      {/* Enhanced Pinterest Gallery */}
      <section className="py-28 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-5xl font-extrabold text-gray-900 text-center mb-20">
            Moments That Define Us
          </h2>
          <div className="grid grid-cols-2 auto-rows-[280px] md:auto-rows-[320px] gap-6 md:grid-cols-4 lg:gap-8">
            {pinterestImages.map((src, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-700 ${
                  index % 7 === 0 || index % 7 === 4
                    ? "col-span-2 row-span-2"
                    : ""
                }`}
              >
                <img
                  src={src}
                  alt={`HMA Fields moment ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
