import React, { useState, useEffect } from "react";
import {
  FaPlus,
  FaMinus,
  FaTimes,
  FaArrowLeft,
  FaArrowUp,
  FaArrowDown,
  FaTrash,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const [isSummaryVisible, setIsSummaryVisible] = useState(true);
  const [itemToDelete, setItemToDelete] = useState(null);

  // Update quantity of an item
  const updateQuantity = (index, newQuantity) => {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity = newQuantity;
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Remove an item from the cart
  const removeItem = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setItemToDelete(null);
  };

  // Calculate subtotal, delivery fee, discount, and total cost
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const deliveryFee = 20;
  const discount = subtotal * 0.1;
  const totalCost = subtotal + deliveryFee - discount;

  // Handle checkout navigation
  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="p-4">
      {/* Header with Back Button */}
      <div className="flex items-center justify-between mb-4">
        <button onClick={() => navigate(-1)} className="p-2">
          <FaArrowLeft className="w-6 h-6 text-gray-700" />
        </button>
        <h1 className="text-2xl font-bold flex-1 text-center">Cart</h1>
      </div>

      {/* Cart Items */}
      {cartItems.length > 0 ? (
        <div className="mt-4 h-[60vh] overflow-y-auto">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 mb-4 relative flex items-center"
            >
              {/* Item Image */}
              <img
                src={item.mainImage}
                alt={item.title}
                className="w-16 h-16 object-cover rounded-lg"
              />

              {/* Item Details */}
              <div className="ml-4 flex-1">
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-sm text-gray-600">Size: {item.size}</p>
                <p className="text-sm text-gray-600">Color: {item.color}</p>
                <p className="text-sm text-gray-600">Price: ${item.price}</p>
              </div>

              {/* Quantity Controls and Delete Button */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={() =>
                    updateQuantity(index, Math.max(1, item.quantity - 1))
                  }
                  className="p-1 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors"
                >
                  <FaMinus className="w-4 h-4" />
                </button>
                <span className="text-sm">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(index, item.quantity + 1)}
                  className="p-1 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors"
                >
                  <FaPlus className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setItemToDelete(index)}
                  className="p-2 text-red-600 hover:text-red-800"
                >
                  <FaTrash className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">Your cart is empty.</p>
      )}

      {/* Summary Section */}
      <div
        className={`fixed bottom-0 left-0 right-0 bg-white p-4 shadow-lg rounded-t-2xl transition-transform duration-300 ${
          isSummaryVisible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        {/* Toggle Summary Visibility Button */}
        <button
          onClick={() => setIsSummaryVisible(!isSummaryVisible)}
          className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full bg-white p-2 rounded-t-lg shadow-md"
        >
          {isSummaryVisible ? (
            <FaArrowDown className="w-6 h-6 text-gray-700" />
          ) : (
            <FaArrowUp className="w-6 h-6 text-gray-700" />
          )}
        </button>

        {/* Delete Confirmation or Summary */}
        {itemToDelete !== null ? (
          <div className="text-center p-4">
            <h2 className="text-lg font-semibold mb-3">Remove from Cart?</h2>

            {/* Product Details */}
            <div className="flex items-center space-x-4">
              <img
                src={cartItems[itemToDelete].mainImage}
                alt={cartItems[itemToDelete].title}
                className="w-20 h-20 object-cover rounded-lg"
              />
              <div className="text-left">
                <p className="text-sm text-gray-600 font-medium">
                  {cartItems[itemToDelete].title}
                </p>
                <p className="text-sm text-gray-500">
                  Size: {cartItems[itemToDelete].size}
                </p>
                <p className="text-sm text-gray-500">
                  Color: {cartItems[itemToDelete].color}
                </p>
                <p className="text-sm text-gray-500">
                  Quantity: {cartItems[itemToDelete].quantity}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center space-x-4 mt-4">
              <button
                onClick={() => setItemToDelete(null)}
                className="px-6 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => removeItem(itemToDelete)}
                className="px-6 py-2 bg-[#704f38] text-white rounded-lg hover:bg-[#5a3c2d] transition-colors"
              >
                Yes, Remove
              </button>
            </div>
          </div>
        ) : (
          <>
            {/* Promo Code Input */}
            <div className="mb-4">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  placeholder="Enter promo code"
                  className="flex-1 p-2 border rounded-lg"
                />
                <button className="p-2 bg-[#704f38] text-white rounded-lg hover:bg-[#5a3c2d] transition-colors">
                  Apply
                </button>
              </div>
            </div>

            {/* Order Summary */}
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Sub-total</span>
                <span className="text-sm">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Delivery Fee</span>
                <span className="text-sm">${deliveryFee.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Discount (10%)</span>
                <span className="text-sm">-${discount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-lg font-bold">Total Cost</span>
                <span className="text-lg font-bold">
                  ${totalCost.toFixed(2)}
                </span>
              </div>
            </div>

            {/* Proceed to Checkout Button */}
            <button
              onClick={handleCheckout}
              className="w-full mt-4 p-3 bg-[#704f38] text-white rounded-lg hover:bg-[#5a3c2d] transition-colors"
            >
              Proceed to Checkout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;