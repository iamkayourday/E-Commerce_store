import React from "react";
import { FaArrowLeft, FaMapMarkerAlt, FaTruck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();

  // Fetch selected shipping address from localStorage
  const selectedAddress = JSON.parse(localStorage.getItem("selectedAddress"));

  // Fetch selected shipping option from localStorage
  const selectedShippingOption = JSON.parse(
    localStorage.getItem("selectedShippingOption")
  );

  // Fetch cart items from localStorage
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

  // Calculate subtotal
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const deliveryFee = 20;
  const discount = subtotal * 0.1; // 10% discount
  const totalCost = subtotal + deliveryFee - discount;

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
        <h1 className="text-xl font-bold flex-1 text-center">Checkout</h1>
      </div>

      {/* Selected Shipping Address */}
      <div className="bg-white rounded-lg p-4 mb-4">
        <h1 className="font-semibold text-xl text-gray-500">
          Shipping Address
        </h1>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            {/* Address Icon */}
            <FaMapMarkerAlt className="w-6 h-6 text-[#704f38] mr-4" />
            <div>
              <h3 className="font-medium text-gray-700">
                {selectedAddress ? selectedAddress.type : "No address selected"}
              </h3>
              <p className="text-sm text-gray-500">
                {selectedAddress
                  ? selectedAddress.address
                  : "Please select an address"}
              </p>
            </div>
          </div>
          <button
            onClick={() => navigate("/shipping-address")} // Navigate to Shipping page
            className="text-[#704f38] font-semibold hover:underline"
          >
            Change
          </button>
        </div>
      </div>

      {/* Selected Shipping Option */}
      <div className="bg-white rounded-lg shadow-md p-4 mb-4">
        <h1 className="font-semibold text-xl text-gray-500">
          Choose Shipping Type
        </h1>

        <div className="flex justify-between items-center">
          <div className="flex items-center">
            {/* Shipping Option Icon */}
            <FaTruck className="w-6 h-6 text-[#704f38] mr-4" />
            <div>
              <h3 className="font-medium text-gray-700">
                {selectedShippingOption
                  ? selectedShippingOption.type
                  : "No option selected"}
              </h3>
              <p className="text-sm text-gray-500">
                {selectedShippingOption
                  ? selectedShippingOption.description
                  : "Please select a shipping option"}
              </p>
            </div>
          </div>
          <button
            onClick={() => navigate("/shipping-option")} // Navigate to ShippingOpt page
            className="text-[#704f38] font-semibold hover:underline"
          >
            Change
          </button>
        </div>
      </div>

      {/* Order List */}
      <div className="bg-white rounded-lg shadow-md p-4 mb-4">
        <h3 className="font-medium text-gray-700 mb-4">Order List</h3>
        {cartItems.map((item, index) => (
          <div key={index} className="flex items-center mb-4">
            <img
              src={item.mainImage}
              alt={item.title}
              className="w-16 h-16 object-cover rounded-lg"
            />
            <div className="ml-4 flex-1">
              <h4 className="text-sm font-semibold">{item.title}</h4>
              <p className="text-xs text-gray-500">Size: {item.size}</p>
              <p className="text-xs text-gray-500">Color: {item.color}</p>
              <p className="text-xs text-gray-500">Quantity: {item.quantity}</p>
            </div>
            <p className="text-sm font-semibold">
              ${item.price * item.quantity}
            </p>
          </div>
        ))}
      </div>

      {/* Order Summary */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <h3 className="font-medium text-gray-700 mb-4">Order Summary</h3>
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
            <span className="text-lg font-bold">${totalCost.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* Continue to Payment Button */}
      <button
        onClick={() => navigate("/payment")} // Navigate to Payment page
        className="w-full mt-6 p-3 bg-[#704f38] text-white rounded-lg font-medium hover:bg-[#5a3c2d] transition duration-300"
      >
        Continue to Payment
      </button>
    </div>
  );
};

export default Checkout;
