import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaBell,
  FaSearch,
  FaFilter,
  FaTshirt,
  FaShoppingBag,
  FaShoePrints,
} from "react-icons/fa";
import { GiMonclerJacket, GiArmoredPants, GiClothes } from "react-icons/gi";
import ProductList from "../Components/ProductList";
import { Link } from "react-router-dom";

const Home = ({ favorites, toggleFavorite }) => {
  const [activeFilter, setActiveFilter] = useState("All"); // State to track active filter

  return (
    <div className="p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-gray-600 w-5 h-5" />
          <div>
            <p className="text-xs text-gray-500">Location</p>
            <p className="text-sm font-semibold">New York, USA</p>
          </div>
        </div>
        <Link to="/notification" className="text-[#704f38] text-sm">
          <div className="relative">
            <FaBell className="text-gray-600 w-6 h-6" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">
              8
            </span>
          </div>
        </Link>
      </div>

      {/* Search Bar */}
      <div className="flex items-center gap-2 mb-6">
        <div className="flex-1 flex items-center bg-gray-100 rounded-lg p-2">
          <FaSearch className="text-gray-500 w-5 h-5 mr-2" />
          <input
            type="text"
            placeholder="Search for products..."
            className="bg-transparent outline-none w-full"
          />
        </div>
        <div className="bg-gray-100 p-2 rounded-lg">
          <FaFilter className="text-gray-500 w-5 h-5" />
        </div>
      </div>

      {/* Categories */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Category</h2>
          <p className="text-sm text-[#704f38] cursor-pointer">See All</p>
        </div>

        {/* Scrollable Category Row */}
        <div className="flex overflow-x-auto gap-4 pb-2 no-scrollbar">
          {/* Shirt */}
          <div className="flex flex-col items-center flex-shrink-0">
            <div className="bg-[#f7f2ed] p-5 rounded-full">
              <FaTshirt className="text-3xl text-[#704f38]" />
            </div>
            <p className="text-sm mt-2">Shirt</p>
          </div>

          {/* Pants */}
          <div className="flex flex-col items-center flex-shrink-0">
            <div className="bg-[#f7f2ed] p-5 rounded-full">
              <GiArmoredPants className="text-3xl text-[#704f38]" />
            </div>
            <p className="text-sm mt-2">Pants</p>
          </div>

          {/* Dress */}
          <div className="flex flex-col items-center flex-shrink-0">
            <div className="bg-[#f7f2ed] p-5 rounded-full">
              <GiClothes className="text-3xl text-[#704f38]" />
            </div>
            <p className="text-sm mt-2">Dress</p>
          </div>

          {/* Jacket */}
          <div className="flex flex-col items-center flex-shrink-0">
            <div className="bg-[#f7f2ed] p-5 rounded-full">
              <GiMonclerJacket className="text-3xl text-[#704f38]" />
            </div>
            <p className="text-sm mt-2">Jacket</p>
          </div>

          {/* Accessories */}
          <div className="flex flex-col items-center flex-shrink-0">
            <div className="bg-[#f7f2ed] p-5 rounded-full">
              <FaShoppingBag className="text-3xl text-[#704f38]" />
            </div>
            <p className="text-sm mt-2">Accessories</p>
          </div>

          {/* Shoes */}
          <div className="flex flex-col items-center flex-shrink-0">
            <div className="bg-[#f7f2ed] p-5 rounded-full">
              <FaShoePrints className="text-3xl text-[#704f38]" />
            </div>
            <p className="text-sm mt-2">Shoes</p>
          </div>
        </div>
      </div>

      {/* Flash Sales Section */}
      <div className="mb-6 mt-10">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Flash Sales</h2>
          <p className="text-sm text-[#704f38] flex items-center space-x-1">
            Closing in:
            <span className="bg-[#f7f2ed] rounded px-2 py-1 mx-2"> 12</span>:
            <span className="bg-[#f7f2ed]  rounded px-2 py-1 mx-2">34</span>:
            <span className="bg-[#f7f2ed]  rounded px-2 py-1 mx-2">56</span>
          </p>
        </div>
        {/* Flash Sales Products (Placeholder) */}
        <div className="bg-gray-100 rounded-lg flex items-center justify-center">
          {/* <p className="text-gray-500">Flash Sales Products Here</p> */}
        </div>
      </div>

      {/* Product Filters */}
      <div className="flex overflow-x-auto gap-2 mb-6 no-scrollbar">
        {["All", "Newest", "Popular", "Men", "Women"].map((filter) => (
          <button
            key={filter}
            className={`px-8 py-4 rounded-full transition-colors font-semibold text-xl border-2 border-gray-200 ${
              activeFilter === filter
                ? "bg-[#704f38] text-white"
                : "bg-gray-100 text-gray-700"
            }`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none; /* Internet Explorer 10+ */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
      {/* Pass activeFilter to ProductList */}
      <ProductList
        favorites={favorites}
        toggleFavorite={toggleFavorite}
        activeFilter="All"
      />
    </div>
  );
};

export default Home;