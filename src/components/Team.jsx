// src/pages/Team.jsx or src/components/TeamSection.jsx (for homepage or dedicated page)

import React from "react";
import { FiPhone, FiMail, FiLinkedin, FiTwitter } from "react-icons/fi";

const teamMembers = [
  {
    name: "Engr. Chukwudi Okeke",
    position: "Managing Director / CEO",
    department: "Overall Leadership",
    photo:
      "https://media.istockphoto.com/id/2045587694/photo/business-man-portrait-and-happy-in-office-for-legal-career-planning-and-confidence-at-a-law.jpg?s=612x612&w=0&k=20&c=5kUzcaDP8iSxV8jdANd-xqe3c3h1j0KrbE3ow64KDoQ=",
    phone: "+234 803 123 4567",
    email: "chukwudi.okeke@hmafields.com",
    linkedin: "https://linkedin.com/in/chukwudi-okeke",
    twitter: "https://twitter.com/chukwudiokeke",
  },
  {
    name: "Mrs. Adanna Eze",
    position: "General Manager",
    department: "Operations & Strategy",
    photo:
      "https://c8.alamy.com/comp/2T4X28K/black-woman-business-and-portrait-in-office-with-confidence-in-corporate-management-in-nigeria-face-of-african-female-worker-entrepreneur-and-2T4X28K.jpg",
    phone: "+234 802 987 6543",
    email: "adanna.eze@hmafields.com",
    linkedin: "https://linkedin.com/in/adanna-eze",
    twitter: "https://twitter.com/adannaeze",
  },
  {
    name: "Mr. Olumide Adebayo",
    position: "Manager, Construction & Civil Works",
    department: "Construction Division",
    photo:
      "https://media.istockphoto.com/id/885690160/photo/african-businessman-using-mobile-phone.jpg?s=612x612&w=0&k=20&c=om5E43zToLrLhRHnLU5HjZTWHjYJHRg3auMRdFwgD7w=",
    phone: "+234 805 555 1122",
    email: "olumide.adebayo@hmafields.com",
    linkedin: "https://linkedin.com/in/olumide-adebayo",
    twitter: "https://twitter.com/olumidebuilds",
  },
  {
    name: "Ms. Chioma Nwosu",
    position: "Manager, Events Management",
    department: "Events Division",
    photo:
      "https://articles.connectnigeria.com/wp-content/uploads/2021/03/Ibukun-Awosika.jpg",
    phone: "+234 807 444 9988",
    email: "chioma.nwosu@hmafields.com",
    linkedin: "https://linkedin.com/in/chioma-nwosu",
    twitter: "https://twitter.com/chiomaevents",
  },
  {
    name: "Mr. Tunde Balogun",
    position: "Manager, Branding & Marketing",
    department: "Marketing Division",
    photo:
      "https://thumbs.dreamstime.com/b/handsome-stylish-modern-african-american-business-man-entrepreneur-executive-sitting-outside-office-cheerful-smile-155856257.jpg",
    phone: "+234 810 333 7766",
    email: "tunde.balogun@hmafields.com",
    linkedin: "https://linkedin.com/in/tunde-balogun",
    twitter: "https://twitter.com/tundemarketing",
  },
  {
    name: "Mrs. Funmi Okafor",
    position: "Manager, Real Estate & Property Management",
    department: "Real Estate Division",
    photo:
      "https://c8.alamy.com/comp/2S33424/portrait-happy-and-black-woman-in-business-office-or-corporate-workplace-in-nigeria-face-of-african-professional-entrepreneur-smile-worker-or-2S33424.jpg",
    phone: "+234 809 222 6655",
    email: "funmi.okafor@hmafields.com",
    linkedin: "https://linkedin.com/in/funmi-okafor",
    twitter: "https://twitter.com/funmirealestate",
  },
];

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Header */}
      <section className="py-24 bg-gradient-to-br from-blue-700 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Meet Our Leadership Team
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto">
            Experienced professionals driving excellence across all divisions of
            HMA Fields.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col"
              >
                {/* Photo */}
                <div className="h-96 overflow-hidden">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Details */}
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-lg font-medium text-blue-600 mb-1">
                    {member.position}
                  </p>
                  <p className="text-gray-600 mb-6">{member.department}</p>

                  {/* Contact Info */}
                  <div className="space-y-4 mt-auto">
                    <a
                      href={`tel:${member.phone.replace(/\s/g, "")}`}
                      className="flex items-center text-gray-700 hover:text-blue-600 transition"
                    >
                      <FiPhone className="w-5 h-5 mr-3" />
                      <span>{member.phone}</span>
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center text-gray-700 hover:text-blue-600 transition"
                    >
                      <FiMail className="w-5 h-5 mr-3" />
                      <span>{member.email}</span>
                    </a>
                  </div>

                  {/* Social Links */}
                  <div className="flex space-x-4 mt-6">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 transition"
                      aria-label="LinkedIn"
                    >
                      <FiLinkedin className="w-6 h-6" />
                    </a>
                    <a
                      href={member.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 transition"
                      aria-label="Twitter"
                    >
                      <FiTwitter className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
