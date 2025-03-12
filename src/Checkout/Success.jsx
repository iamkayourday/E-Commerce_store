import React, { useEffect } from "react";
import { FaArrowLeft, FaCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();

  // Automatically redirect to home page after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/"); // Redirect to home page
    }, 10000); // 10 seconds

    return () => clearTimeout(timer); // Cleanup timer
  }, [navigate]);

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
        <h1 className="text-xl font-bold flex-1 text-center">Payment</h1>
      </div>

      {/* Success Content */}
      <div className="flex flex-col items-center justify-center h-[70vh]">
        {/* Checkmark with Brown Background */}
        <div className="w-20 h-20 rounded-full bg-[#704f38] flex items-center justify-center mb-6">
          <FaCheck className="w-10 h-10 text-white" />
        </div>

        {/* Success Message */}
        <h2 className="text-2xl font-bold text-[#704f38] mb-2">Payment Successful</h2>
        <p className="text-gray-600 mb-8">Thank you for your purchase</p>

        {/* Buttons */}
        <div className="flex flex-col space-y-4 w-full max-w-xs">
          <button
            onClick={() => navigate("#")} // Navigate to order page
            className="w-full bg-[#704f38] text-white p-3 rounded-full font-medium hover:bg-[#5a3c2d] transition duration-300"
          >
            View Order
          </button>
          <button
            onClick={() => navigate("#")} // Navigate to e-receipt page
            className="w-full bg-white border border-[#704f38] text-[#704f38] p-3 rounded-full font-medium hover:bg-gray-50 transition duration-300"
          >
            View E-Receipt
          </button>
        </div>
      </div>
    </div>
  );
};

export default Success;