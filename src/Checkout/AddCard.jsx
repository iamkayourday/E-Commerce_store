import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AddCard = () => {
  const navigate = useNavigate();

  // State for card details
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    cardHolderName: "",
    expiryDate: "",
    cvv: "",
    saveCard: false,
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCardDetails((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Card Details:", cardDetails);
    navigate("/success"); // Navigate to the success page
  };

  // Validation function
  const isFormValid = () => {
    return (
      cardDetails.cardNumber.trim() !== "" &&
      cardDetails.cardHolderName.trim() !== "" &&
      cardDetails.expiryDate.trim() !== "" &&
      cardDetails.cvv.trim() !== ""
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Header with Back Button */}
      <div className="flex items-center mb-6">
        <button
          onClick={() => navigate(-1)}
          className="p-2"
        >
          <FaArrowLeft className="w-6 h-6 text-gray-700" />
        </button>
        <h1 className="text-xl font-bold flex-1 text-center">Add Card</h1>
      </div>

      {/* Card Design */}
      <div className="bg-[#704f38] rounded-lg shadow-lg p-6 text-white mb-8">
        {/* Visa Logo */}
        <div className="flex justify-end mb-6">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
            alt="Visa"
            className="w-12 h-8"
          />
        </div>

        {/* Card Number */}
        <div className="text-2xl font-mono mb-6">
          {cardDetails.cardNumber || "•••• •••• •••• ••••"}
        </div>

        {/* Cardholder Name, Expiry Date, and Smart Chip */}
        <div className="flex justify-between items-center">
          {/* Cardholder Name */}
          <div>
            <p className="text-gray-300">Card Holder</p>
            <p>{cardDetails.cardHolderName || "Your Name"}</p>
          </div>

          {/* Expiry Date */}
          <div>
            <p className="text-gray-300">Expires</p>
            <p>{cardDetails.expiryDate || "MM/YY"}</p>
          </div>

          {/* Smart Chip */}
          <div>
            <img
              src="/chipp.png" // Smart chip icon
              alt="Smart Chip"
              className="w-8 h-8"
            />
          </div>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
        {/* Cardholder Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Cardholder Name
          </label>
          <input
            type="text"
            name="cardHolderName"
            value={cardDetails.cardHolderName}
            onChange={handleInputChange}
            placeholder="John Doe"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#704f38] outline-none"
            required
          />
        </div>

        {/* Card Number */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Card Number
          </label>
          <input
            type="text"
            name="cardNumber"
            value={cardDetails.cardNumber}
            onChange={handleInputChange}
            placeholder="1234 5678 9012 3456"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#704f38] outline-none"
            required
          />
        </div>

        {/* Expiry Date and CVV */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Expiry Date
            </label>
            <input
              type="text"
              name="expiryDate"
              value={cardDetails.expiryDate}
              onChange={handleInputChange}
              placeholder="MM/YY"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#704f38] outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              CVV
            </label>
            <input
              type="text"
              name="cvv"
              value={cardDetails.cvv}
              onChange={handleInputChange}
              placeholder="123"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#704f38] outline-none"
              required
            />
          </div>
        </div>

        {/* Save Card Checkbox */}
        <div className="flex items-center mb-6">
          <input
            type="checkbox"
            name="saveCard"
            checked={cardDetails.saveCard}
            onChange={handleInputChange}
            className="w-5 h-5 border border-gray-300 rounded focus:ring-[#704f38] accent-[#704f38]"
          />
          <label className="ml-2 text-sm text-gray-700">Save Card</label>
        </div>

        {/* Add Card Button */}
        <button
          type="submit"
          disabled={!isFormValid()} // Disable button if form is invalid
          className={`w-full bg-[#704f38] text-white p-3 rounded-full font-medium transition duration-300 ${
            !isFormValid() ? "opacity-50 cursor-not-allowed" : "hover:bg-[#5a3c2d]"
          }`}
        >
          Add Card
        </button>
      </form>
    </div>
  );
};

export default AddCard;