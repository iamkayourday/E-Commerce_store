import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const NewPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match!");
      return;
    }

    // Proceed with form submission
    console.log("Password successfully updated!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="p-6 w-full max-w-md">
        {/* Header */}
        <h2 className="text-3xl font-medium text-center">New Password</h2>
        <p className="text-gray-600 text-center mt-6 mb-6">
          Your new password must be different <br />
          from previously used passwords.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-6">
          {/* Password */}
          <div className="mb-4 relative">
            <label className="block text-gray-700 font-medium">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="***************"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 mt-1 border border-gray-300 rounded-full focus:ring focus:ring-[#704f38] outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-600"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div className="mb-4 relative">
            <label className="block text-gray-700 font-medium">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="***************"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full p-3 mt-1 border border-gray-300 rounded-full focus:ring focus:ring-[#704f38] outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-600"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {/* Error Message */}
          {errorMessage && (
            <p className="text-red-500 text-sm text-center mb-4">
              {errorMessage}
            </p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#704f38] text-white p-3 rounded-full font-medium hover:bg-[#5a3c2d] transition duration-300"
          >
            Create New Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewPassword;
