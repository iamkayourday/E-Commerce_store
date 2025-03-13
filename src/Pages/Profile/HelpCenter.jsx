import React, { useState } from "react";
import { FaArrowLeft, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import {
  FaPhone,
  FaWhatsapp,
  FaGlobe,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const HelpCenter = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("faqs"); // Tracks active section
  const [activeCategory, setActiveCategory] = useState("All"); // Tracks active FAQ category
  const [searchQuery, setSearchQuery] = useState(""); // Tracks search query
  const [expandedFaq, setExpandedFaq] = useState(null); // Tracks expanded FAQ item
  const [expandedContact, setExpandedContact] = useState(null); // Tracks expanded contact item

  // FAQ data
  const faqs = [
    {
      id: 1,
      category: "Services",
      question: "Can I track my order's delivery status?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      category: "General",
      question: "Is there a return policy?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      category: "Account",
      question: "Can I save my favorite item for later?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 4,
      category: "General",
      question: "How do I contact customer support?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 5,
      category: "Services",
      question: "What payment methods are accepted?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 6,
      category: "Account",
      question: "How to add a review?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  // Contact data
  const contactOptions = [
    { id: 1, name: "Customer Care", icon: <FaPhone className="w-6 h-6 text-[#704f38]" />, details: "Call us at +123-456-7890" },
    { id: 2, name: "WhatsApp", icon: <FaWhatsapp className="w-6 h-6 text-[#704f38]" />, details: "Message us on WhatsApp at +123-456-7890" },
    { id: 3, name: "Website", icon: <FaGlobe className="w-6 h-6 text-[#704f38]" />, details: "Visit our website at www.example.com" },
    { id: 4, name: "Facebook", icon: <FaFacebook className="w-6 h-6 text-[#704f38]" />, details: "Follow us on Facebook: @example" },
    { id: 5, name: "Twitter", icon: <FaTwitter className="w-6 h-6 text-[#704f38]" />, details: "Follow us on Twitter: @example" },
    { id: 6, name: "Instagram", icon: <FaInstagram className="w-6 h-6 text-[#704f38]" />, details: "Follow us on Instagram: @example" },
  ];

  // Filter FAQs based on category and search query
  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory = activeCategory === "All" || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Header with Back Button */}
      <div className="flex items-center mb-6">
        <button
          onClick={() => navigate(-1)} // Go back to the previous page
          className="p-2"
        >
          <FaArrowLeft className="w-6 h-6 text-gray-700" />
        </button>
        <h1 className="text-xl font-bold flex-1 text-center">Help Center</h1>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#704f38] outline-none"
        />
      </div>

      {/* Tabs for FAQs and Contact Us */}
      <div className="flex justify-around mb-6 border-b border-gray-300">
        <button
          onClick={() => setActiveSection("faqs")}
          className={`pb-2 text-lg font-medium ${
            activeSection === "faqs" ? "border-b-2 border-[#704f38] text-[#704f38]" : "text-gray-500"
          }`}
        >
          FAQs
        </button>
        <button
          onClick={() => setActiveSection("contact")}
          className={`pb-2 text-lg font-medium ${
            activeSection === "contact" ? "border-b-2 border-[#704f38] text-[#704f38]" : "text-gray-500"
          }`}
        >
          Contact Us
        </button>
      </div>

      {/* FAQs Section */}
      {activeSection === "faqs" && (
        <div>
          {/* Filter Bar */}
          <div className="flex overflow-x-auto space-x-4 mb-6">
            {["All", "Services", "General", "Account"].map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`whitespace-nowrap px-4 py-2 rounded-full ${
                  activeCategory === category
                    ? "bg-[#704f38] text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {filteredFaqs.map((faq) => (
              <div key={faq.id} className="bg-white p-4 rounded-lg shadow-sm">
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() =>
                    setExpandedFaq(expandedFaq === faq.id ? null : faq.id)
                  }
                >
                  <p className="text-gray-700">{faq.question}</p>
                  {expandedFaq === faq.id ? (
                    <FaChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <FaChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </div>
                {expandedFaq === faq.id && (
                  <div className="mt-4 text-gray-600">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Contact Us Section */}
      {activeSection === "contact" && (
        <div className="space-y-4">
          {contactOptions.map((option) => (
            <div key={option.id} className="bg-white p-4 rounded-lg shadow-sm">
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() =>
                  setExpandedContact(expandedContact === option.id ? null : option.id)
                }
              >
                <div className="flex items-center">
                  {option.icon}
                  <span className="text-gray-700 ml-4">{option.name}</span>
                </div>
                {expandedContact === option.id ? (
                  <FaChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <FaChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </div>
              {expandedContact === option.id && (
                <div className="mt-4 text-gray-600">{option.details}</div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HelpCenter;