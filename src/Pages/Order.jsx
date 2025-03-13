import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Order = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("active"); // Tracks the active tab

  // Mock order data
  const orders = {
    active: [
      {
        id: 1,
        image: "/images/mens_jacket_main.jpg",
        title: "Men's Casual Shirt",
        size: "M",
        quantity: 1,
        price: 25.99,
      },
      {
        id: 2,
        image: "/images/mens_jacket_main.jpg",
        title: "Women's Summer Dress",
        size: "L",
        quantity: 2,
        price: 45.99,
      },
      {
        id: 3,
        image: "/images/mens_jacket_main.jpg",
        title: "Kids' Hoodie",
        size: "S",
        quantity: 1,
        price: 30.0,
      },
      {
        id: 4,
        image: "/images/mens_jacket_main.jpg",
        title: "Women's Cardigan",
        size: "M",
        quantity: 1,
        price: 35.49,
      },
      {
        id: 5,
        image: "/images/mens_jacket_main.jpg",
        title: "Men's Workout Tank Top",
        size: "L",
        quantity: 2,
        price: 20.99,
      },
      {
        id: 6,
        image: "/images/mens_jacket_main.jpg",
        title: "Women's Skater Skirt",
        size: "S",
        quantity: 1,
        price: 28.5,
      },
      {
        id: 7,
        image: "/images/mens_jacket_main.jpg",
        title: "Men's Formal Pants",
        size: "XL",
        quantity: 1,
        price: 55.0,
      },
      {
        id: 8,
        image: "/images/mens_jacket_main.jpg",
        title: "Women's Denim Jacket",
        size: "M",
        quantity: 1,
        price: 65.99,
      },
      {
        id: 9,
        image: "/images/mens_jacket_main.jpg",
        title: "Men's Track Jacket",
        size: "L",
        quantity: 1,
        price: 50.99,
      },
      {
        id: 10,
        image: "/images/mens_jacket_main.jpg",
        title: "Women's Blouse",
        size: "M",
        quantity: 3,
        price: 40.49,
      },
    ],
    completed: [
      {
        id: 1,
        image: "/images/mens_jacket_main.jpg",
        title: "Women's Winter Coat",
        size: "L",
        quantity: 1,
        price: 120.99,
      },
      {
        id: 2,
        image: "/images/mens_jacket_main.jpg",
        title: "Kids' Sneakers",
        size: "4",
        quantity: 1,
        price: 55.49,
      },
      {
        id: 3,
        image: "/images/mens_jacket_main.jpg",
        title: "Men's Running Shoes",
        size: "10",
        quantity: 1,
        price: 89.99,
      },
      {
        id: 4,
        image: "/images/mens_jacket_main.jpg",
        title: "Women's Yoga Pants",
        size: "M",
        quantity: 2,
        price: 45.99,
      },
      {
        id: 5,
        image: "/images/mens_jacket_main.jpg",
        title: "Men's Polo T-Shirt",
        size: "XL",
        quantity: 1,
        price: 39.99,
      },
      {
        id: 6,
        image: "/images/mens_jacket_main.jpg",
        title: "Kids' Raincoat",
        size: "S",
        quantity: 1,
        price: 30.0,
      },
      {
        id: 7,
        image: "/images/mens_jacket_main.jpg",
        title: "Women's Formal Blouse",
        size: "M",
        quantity: 1,
        price: 49.99,
      },
      {
        id: 8,
        image: "/images/mens_jacket_main.jpg",
        title: "Men's Track Pants",
        size: "L",
        quantity: 1,
        price: 55.0,
      },
      {
        id: 9,
        image: "/images/mens_jacket_main.jpg",
        title: "Women's Heeled Sandals",
        size: "7",
        quantity: 1,
        price: 75.49,
      },
      {
        id: 10,
        image: "/images/mens_jacket_main.jpg",
        title: "Unisex Graphic Tee",
        size: "M",
        quantity: 3,
        price: 25.99,
      },
    ],

    cancelled: [
      {
        id: 1,
        image: "/images/mens_jacket_main.jpg",
        title: "Men's Winter Jacket",
        size: "L",
        quantity: 1,
        price: 110.99,
      },
      {
        id: 2,
        image: "/images/mens_jacket_main.jpg",
        title: "Women's Summer Dress",
        size: "M",
        quantity: 1,
        price: 85.5,
      },
      {
        id: 3,
        image: "/images/mens_jacket_main.jpg",
        title: "Kids' Hoodie",
        size: "S",
        quantity: 2,
        price: 55.25,
      },
      {
        id: 4,
        image: "/images/mens_jacket_main.jpg",
        title: "Men's Polo Shirt",
        size: "XL",
        quantity: 1,
        price: 35.99,
      },
      {
        id: 5,
        image: "/images/mens_jacket_main.jpg",
        title: "Women's Sports Leggings",
        size: "L",
        quantity: 1,
        price: 45.75,
      },
      {
        id: 6,
        image: "/images/mens_jacket_main.jpg",
        title: "Unisex Rain Poncho",
        size: "Free Size",
        quantity: 1,
        price: 29.99,
      },
      {
        id: 7,
        image: "/images/mens_jacket_main.jpg",
        title: "Women's Turtleneck Sweater",
        size: "M",
        quantity: 3,
        price: 60.49,
      },
      {
        id: 8,
        image: "/images/mens_jacket_main.jpg",
        title: "Men's Formal Shirt",
        size: "L",
        quantity: 1,
        price: 40.99,
      },
      {
        id: 9,
        image: "/images/mens_jacket_main.jpg",
        title: "Women's Maxi Skirt",
        size: "S",
        quantity: 2,
        price: 50.5,
      },
      {
        id: 10,
        image: "/images/mens_jacket_main.jpg",
        title: "Men's Gym Shorts",
        size: "M",
        quantity: 1,
        price: 25.99,
      },
    ],
  };

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
        <h1 className="text-xl font-bold flex-1 text-center">My Orders</h1>
      </div>

      {/* Tabs */}
      <div className="flex justify-around mb-6 border-b border-gray-300">
        <button
          onClick={() => setActiveTab("active")}
          className={`pb-2 text-lg font-medium ${
            activeTab === "active"
              ? "border-b-4 border-[#704f38] text-[#704f38]"
              : "text-gray-500"
          }`}
        >
          Active
        </button>
        <button
          onClick={() => setActiveTab("completed")}
          className={`pb-2 text-lg font-medium ${
            activeTab === "completed"
              ? "border-b-4 border-[#704f38] text-[#704f38]"
              : "text-gray-500"
          }`}
        >
          Completed
        </button>
        <button
          onClick={() => setActiveTab("cancelled")}
          className={`pb-2 text-lg font-medium ${
            activeTab === "cancelled"
              ? "border-b-4 border-[#704f38] text-[#704f38]"
              : "text-gray-500"
          }`}
        >
          Cancelled
        </button>
      </div>

      {/* Order List */}
      <div className="space-y-4">
        {orders[activeTab].map((order) => (
          <div
            key={order.id}
            className="bg-white p-4 rounded-lg shadow-sm flex items-center space-x-4"
          >
            {/* Product Image */}
            <img
              src={order.image}
              alt={order.title}
              className="w-20 h-20 object-cover rounded-lg"
            />

            {/* Order Details */}
            <div className="flex-1">
              <h3 className="text-sm font-semibold">{order.title}</h3>
              <p className="text-xs text-gray-500">Size: {order.size}</p>
              <p className="text-xs text-gray-500">
                Quantity: {order.quantity}
              </p>
              <p className="text-sm font-bold mt-1">
                ${order.price.toFixed(2)}
              </p>
            </div>

            {/* Action Button */}
            <div>
              {activeTab === "active" && (
                <button className="px-4 py-2 bg-[#704f38] text-white rounded-lg text-sm hover:bg-[#5a3c2d] transition duration-300">
                  Track Order
                </button>
              )}
              {activeTab === "completed" && (
                <button className="px-4 py-2 bg-[#704f38] text-white rounded-lg text-sm hover:bg-[#5a3c2d] transition duration-300">
                  Leave Review
                </button>
              )}
              {activeTab === "cancelled" && (
                <button className="px-4 py-2 bg-[#704f38] text-white rounded-lg text-sm hover:bg-[#5a3c2d] transition duration-300">
                  Reorder
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Order;