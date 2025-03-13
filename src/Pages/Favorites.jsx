import React, { useState, useEffect } from "react";
import { FaHeart, FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import data from "../Components/data.json";

const Favorites = () => {
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState([]);

  // Load favorites from localStorage on component mount
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  // Toggle favorite and save to localStorage
  const toggleFavorite = (productId) => {
    const updatedFavorites = favorites.filter((id) => id !== productId);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  // Filter products to show only favorites
  const favoriteProducts = data.filter((product) => favorites.includes(product.id));

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Favorites</h1>
      {favoriteProducts.length > 0 ? (
        <div className="grid grid-cols-2 gap-4">
          {favoriteProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* Product Image with Love Icon */}
              <div className="relative">
                <img
                  src={product.mainImage}
                  alt={product.title}
                  className="w-full h-40 object-cover"
                />
                <button
                  onClick={() => toggleFavorite(product.id)}
                  className="absolute top-2 right-2 bg-white bg-opacity-75 p-2 rounded-full"
                >
                  <FaHeart className="w-5 h-5 text-[#704f38]" />
                </button>
              </div>

              {/* Product Details */}
              <div className="p-2">
                <h3
                  onClick={() => navigate(`/details/${product.id}`)}
                  className="text-sm font-semibold cursor-pointer"
                >
                  {product.title}
                </h3>
                <div className="flex justify-between items-center mt-1">
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span className="text-xs">{product.rating}</span>
                  </div>
                  <p className="text-sm font-bold">${product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">Your favorite items will appear here.</p>
      )}
    </div>
  );
};

export default Favorites;
