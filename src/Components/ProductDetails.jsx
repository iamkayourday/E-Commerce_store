import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft, FaHeart, FaStar, FaShoppingCart, FaCheck } from "react-icons/fa";
import data from "../Components/data.json";

const ProductDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Get the product title from the URL
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  // Find the product by title
  const product = data.find((item) => item.title === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  // Handle size selection
  const handleSizeSelection = (size) => {
    setSelectedSize(size);
  };

  // Handle color selection
  const handleColorSelection = (color) => {
    setSelectedColor(color);
  };

  // Add product to cart and save to localStorage
  const addToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert("Please select a size and color.");
      return;
    }

    const cartItem = {
      id: product.id,
      title: product.title,
      price: product.price,
      mainImage: product.mainImage,
      size: selectedSize,
      color: selectedColor,
      quantity: 1, // Default quantity
    };

    // Get existing cart items from localStorage
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = [...existingCart, cartItem];
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    alert("Added to cart!");
    navigate("/cart"); // Redirect to the cart page
  };

  return (
    <div>
      {/* Top Section: Image with Back and Favorite Icons */}
      <div className="relative">
        <img
          src={product.mainImage}
          alt={product.title}
          className="w-full h-[500px] object-cover rounded-lg"
        />
        {/* Back Icon */}
        <button
          onClick={() => navigate("/")}
          className="absolute top-2 left-2 bg-white bg-opacity-75 p-2 rounded-full"
        >
          <FaArrowLeft className="w-5 h-5 text-gray-700" />
        </button>
        {/* Favorite Icon */}
        <button
          onClick={() => alert("Added to favorites!")} // Replace with your favorite logic
          className="absolute top-2 right-2 bg-white bg-opacity-75 p-2 rounded-full"
        >
          <FaHeart className="w-5 h-5 text-red-500" />
        </button>
        {/* Detail Images at the Bottom of the Main Image */}
        <div className="absolute bottom-2 left-2 right-2 flex space-x-2 overflow-x-auto">
          {product.detailImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Detail ${index + 1}`}
              className="w-16 h-16 object-cover rounded-lg border-2 border-white"
            />
          ))}
        </div>
      </div>

      {/* Product Info Section */}
      <div className="mt-4 p-4">
        {/* Subcategory and Rating */}
        <div className="flex justify-between items-center">
          <span className="text-xl text-gray-600">{product.subcategory}'s Style</span>
          <div className="flex items-center gap-1">
            <FaStar className="text-yellow-400 text-2xl" />
            <span className="text-sm">{product.rating}</span>
          </div>
        </div>

        {/* Product Title */}
        <h1 className="text-xl font-bold mt-2">{product.title}</h1>

        {/* Product Description */}
        <p className="text-sm text-gray-600 mt-2">{product.description}</p>

        {/* Select Size */}
        <div className="mt-4">
          <h2 className="text-sm font-semibold">Select Size</h2>
          <div className="flex space-x-2 mt-2">
            {["S", "M", "L", "XL", "XXL", "XXXL"].map((size) => (
              <button
                key={size}
                onClick={() => handleSizeSelection(size)}
                className={`px-4 py-2 border rounded-lg text-sm ${
                  selectedSize === size
                    ? "bg-[#704f38] text-white"
                    : "bg-white text-gray-700"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Select Color */}
        <div className="mt-4">
          <h2 className="text-sm font-semibold">Select a Color</h2>
          <div className="flex space-x-2 mt-2">
            {["Black", "Brown", "Blue", "Gray", "Green", "Red"].map((color) => (
              <button
                key={color}
                onClick={() => handleColorSelection(color)}
                className={`w-8 h-8 rounded-full border-2 relative ${
                  selectedColor === color ? "border-[#704f38]" : "border-gray-300"
                }`}
                style={{ backgroundColor: color.toLowerCase() }}
              >
                {selectedColor === color && (
                  <FaCheck className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Total Price and Add to Cart */}
        <div className="mt-6 flex justify-between items-center">
          <div>
            <span className="text-sm text-gray-600">Total Price</span>
            <p className="text-xl font-bold">${product.price}</p>
          </div>
          <button
            onClick={addToCart}
            className="flex items-center bg-[#704f38] text-white px-6 py-2 rounded-lg"
          >
            <FaShoppingCart className="mr-2" />
            Add to Cart
          </button>
        </div>
      </div>
      <div className="mt-20"></div>
    </div>
  );
};

export default ProductDetails;