import React, { useState, useEffect } from "react";
import { FaHeart, FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import data from "../Components/data.json";

const ProductList = ({ activeFilter }) => {
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState([]);

  // Load favorites from localStorage on component mount
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  // Toggle favorite and save to localStorage
  const toggleFavorite = (productId) => {
    let updatedFavorites;
    if (favorites.includes(productId)) {
      updatedFavorites = favorites.filter((id) => id !== productId);
    } else {
      updatedFavorites = [...favorites, productId];
    }
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  // Filter products based on activeFilter
  const filteredProducts = data.filter((product) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Men") return product.subcategory === "men";
    if (activeFilter === "Women") return product.subcategory === "women";
    if (activeFilter === "Newest") return product.id > data.length - 5; // Show newest 5 products
    if (activeFilter === "Popular") return product.rating >= 4.5; // Show popular products
    return true;
  });

  return (
    <div className="p-2">
      <div className="grid grid-cols-2 gap-4">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-lg overflow-hidden">
            {/* Product Image with Love Icon */}
            <div className="relative">
              <img
                src={product.mainImage}
                alt={product.title}
                className="w-full h-50 object-cover shadow-sm mb-2"
              />
              <button
                onClick={() => toggleFavorite(product.id)}
                className="absolute top-2 right-2 bg-white bg-opacity-75 p-2 rounded-full"
              >
                <FaHeart
                  className={`w-5 h-5 ${
                    favorites.includes(product.id) ? "text-[#704f38]" : "text-gray-500"
                  }`}
                />
              </button>
            </div>

            {/* Product Details */}
            <div className="p-2">
              {/* Title and Rating on the same line */}
              <div className="flex justify-between items-center">
                <h3
                  onClick={() => navigate(`/details/${product.title}`)}
                  className="text-sm font-semibold cursor-pointer"
                >
                  {product.title}
                </h3>
                <div className="flex items-center gap-1">
                  <FaStar className="text-yellow-400" />
                  <span className="text-xs">{product.rating}</span>
                </div>
              </div>

              {/* Price on the left below */}
              <p className="text-sm font-bold mt-1">${product.price}</p>
            </div>
            <div className="mt-20"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
