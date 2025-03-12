import React, { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ShippingOpt = () => {
  const navigate = useNavigate();

  // Shipping options
  const shippingOptions = [
    { id: 1, type: "Economy", description: "Standard delivery (5-7 business days)" },
    { id: 2, type: "Business", description: "Fast delivery (2-3 business days)" },
    { id: 3, type: "Cargo", description: "Bulk delivery (7-10 business days)" },
  ];

  // State to track the selected shipping option (full object)
  const [selectedOption, setSelectedOption] = useState(() => {
    const savedSelectedOption = JSON.parse(localStorage.getItem("selectedShippingOption"));
    return savedSelectedOption || null; // Default to null if nothing is saved
  });

  // Save selected shipping option (full object) to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("selectedShippingOption", JSON.stringify(selectedOption));
  }, [selectedOption]);

  // Handle selecting a shipping option
  const handleSelectOption = (id) => {
    const selected = shippingOptions.find((option) => option.id === id);
    setSelectedOption(selected); // Save the full shipping option object
  };

  // Handle applying the selected shipping option
  const handleApply = () => {
    if (selectedOption) {
      alert(`Shipping option applied: ${selectedOption.type} - ${selectedOption.description}`);
      // You can perform additional actions here, like navigating to another page
    } else {
      alert("Please select a shipping option first.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header with Back Button */}
      <div className="flex items-center mb-6">
        <button
          onClick={() => navigate(-1)} // Go back to the previous page
          className="p-2"
        >
          <FaArrowLeft className="w-6 h-6 text-gray-700" />
        </button>
        <h1 className="text-xl font-bold flex-1 text-center">Shipping Option</h1>
      </div>

      {/* Shipping Options List */}
      <div className="space-y-4">
        {shippingOptions.map((option) => (
          <div
            key={option.id}
            className="flex items-center p-4 bg-white rounded-lg shadow-sm cursor-pointer hover:bg-gray-50 transition-colors"
            onClick={() => handleSelectOption(option.id)}
          >
            {/* Option Details */}
            <div className="flex-1">
              <h3 className="font-medium text-gray-700">{option.type}</h3>
              <p className="text-sm text-gray-500">{option.description}</p>
            </div>

            {/* Checkbox */}
            <div
              className={`w-5 h-5 rounded-full border-2 ${
                selectedOption?.id === option.id
                  ? "border-[#704f38] bg-[#704f38]"
                  : "border-gray-300"
              } flex items-center justify-center`}
            >
              {selectedOption?.id === option.id && (
                <div className="w-2 h-2 rounded-full bg-white"></div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Apply Button */}
      {selectedOption && (
        <button
          onClick={handleApply}
          className="w-full mt-6 bg-[#704f38] text-white p-3 rounded-lg font-medium transition duration-300"
        >
          Apply
        </button>
      )}
    </div>
  );
};

export default ShippingOpt;