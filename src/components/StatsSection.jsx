// src/components/StatsSection.jsx

import React, { useEffect, useState } from "react";
import { FiCalendar } from "react-icons/fi";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import { PiHardHatThin } from "react-icons/pi";
import { GoMegaphone } from "react-icons/go";

const stats = [
  {
    icon: <PiHardHatThin className="w-12 h-12 text-blue-600" />,
    end: 150,
    label: "Projects Completed",
    suffix: "+",
  },
  {
    icon: <FiCalendar className="w-12 h-12 text-blue-600" />,
    end: 500,
    label: "Events Managed",
    suffix: "+",
  },
  {
    icon: <GoMegaphone className="w-12 h-12 text-blue-600" />,
    end: 80,
    label: "Brands Elevated",
    suffix: "+",
  },
  {
    icon: <HiOutlineBuildingLibrary className="w-12 h-12 text-blue-600" />,
    end: 5,
    label: "Billion ₦ Assets Managed",
    prefix: "₦",
    suffix: "B+",
  },
];

export default function StatsSection() {
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const duration = 2000; // 2 seconds animation
    const steps = 60;
    const interval = duration / steps;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setCounts(
        stats.map((stat) => {
          const progress = Math.min(currentStep / steps, 1);
          return Math.floor(stat.end * progress);
        })
      );

      if (currentStep >= steps) {
        clearInterval(timer);
        // Set final values with suffixes
        setCounts(stats.map((stat) => stat.end));
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Delivering excellence across construction, events, marketing, and
            real estate since day one.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="mb-6 flex justify-center">
                <div className="p-6 bg-white/10 rounded-2xl group-hover:bg-white/20 transition-colors duration-300">
                  {stat.icon}
                </div>
              </div>

              <div className="text-5xl md:text-6xl font-bold mb-4">
                {stat.prefix && <span>{stat.prefix}</span>}
                {counts[index]}
                {stat.suffix && <span>{stat.suffix}</span>}
              </div>

              <p className="text-xl text-blue-100 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
