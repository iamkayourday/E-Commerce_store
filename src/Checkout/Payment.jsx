import React from "react";
import { FaArrowLeft, FaAngleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaPaypal, FaApple, FaGoogle } from "react-icons/fa";

const Payment = () => {
  const navigate = useNavigate();

  // Mock state for selected payment method
  const [selectedMethod, setSelectedMethod] = React.useState("");

  // Payment methods
  const paymentMethods = [
    { id: "paypal", name: "PayPal", icon: <FaPaypal className="w-6 h-6 text-blue-500" /> },
    { id: "apple-pay", name: "Apple Pay", icon: <FaApple className="w-6 h-6 text-gray-800" /> },
    { id: "google-pay", name: "Google Pay", icon: <FaGoogle className="w-6 h-6 text-green-500" /> },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Go Back Button */}
      <div className="flex items-center mb-6">
        <button
          onClick={() => navigate(-1)} // Go back to the previous page
          className="flex items-center p-2"
        >
          <FaArrowLeft className="w-6 h-6 text-gray-700" />
          <span className="ml-2 text-lg font-medium text-gray-700">Payment Methods</span>
        </button>
      </div>

      {/* Credit and Debit Card Section */}
      <div className="bg-white rounded-lg shadow-md p-4 mb-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Credit and Debit Card</h2>
        <div
          className="flex items-center justify-between p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
          onClick={() => navigate("/add-card")} // Navigate to Add Card page
        >
          <div className="flex items-center">
            <span className="text-gray-700 font-medium">Add Card</span>
          </div>
          <FaAngleRight className="w-5 h-5 text-gray-500" />
        </div>
      </div>

      {/* More Options Section */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">More Options</h2>
        <div className="space-y-3">
          {paymentMethods.map((method) => (
            <div
              key={method.id}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
              onClick={() => setSelectedMethod(method.id)} // Select payment method
            >
              <div className="flex items-center">
                {/* Payment Method Icon */}
                {method.icon}
                <span className="ml-3 text-gray-700 font-medium">{method.name}</span>
              </div>
              {/* Selection Indicator */}
              <div
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  selectedMethod === method.id
                    ? "border-[#704f38] bg-[#704f38]"
                    : "border-gray-300"
                }`}
              >
                {selectedMethod === method.id && (
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Payment;