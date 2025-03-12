import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const VerifyCode = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState(["", "", "", ""]);

  // Handle input change for OTP
  const handleInputChange = (index, value) => {
    if (/^[0-9]$/.test(value) || value === "") {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      // Auto-focus to the next input
      if (value && index < 3) {
        document.getElementById(`otp-input-${index + 1}`).focus();
      }
    }
  };

  // Handle backspace to auto-focus the previous input
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && code[index] === "" && index > 0) {
      document.getElementById(`otp-input-${index - 1}`).focus();
    }
  };

  // Handle Verify button click
  const handleVerify = () => {
    const fullCode = code.join("");
    console.log("Verifying code:", fullCode);

    // Simulate successful verification
    alert("Verification successful!");
    navigate("/complete-verification");
  };

  return (
    <div>
      <button
        onClick={() => navigate(-1)}
        className="p-2 top-4 left-4 absolute"
      >
        <FaArrowLeft className="w-6 h-6 text-gray-700" />
      </button>

      <div className="p-4 min-h-screen flex flex-col items-center justify-center">
        {/* Verify Code Text */}
        <h1 className="text-2xl font-bold mt-4">Verify Code</h1>
        <p className="text-sm text-gray-600 mt-2">
          Please enter the code we just sent to the email{" "}
          <span className="font-semibold">example@gmail.com</span>
        </p>

        {/* OTP Input Fields */}
        <div className="flex justify-center space-x-4 mt-6">
          {code.map((digit, index) => (
            <input
              key={index}
              id={`otp-input-${index}`}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleInputChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="w-12 h-12 text-center border-2 border-gray-300 rounded-lg text-xl focus:outline-none focus:ring focus:ring-[#704f38] transition-transform transform focus:scale-105"
            />
          ))}
        </div>

        {/* Verify Button */}
        <button
          onClick={handleVerify}
          className="w-full mt-6 p-3 bg-[#704f38] text-white rounded-lg hover:bg-[#5a3c2d] transition-colors"
        >
          Verify
        </button>
      </div>
    </div>
  );
};

export default VerifyCode;
