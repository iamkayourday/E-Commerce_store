import React, { useState } from "react";
import {
  FaEye,
  FaEyeSlash,
  FaGoogle,
  FaFacebook,
  FaApple,
  FaArrowLeft,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve stored account data from localStorage
    const storedAccount = JSON.parse(localStorage.getItem("userAccount"));

    if (!storedAccount) {
      setError("No account found. Please sign up first.");
      return;
    }

    // Check if the email and password match the stored data
    if (email === storedAccount.email && password === storedAccount.password) {
      setError(""); // Clear any previous error
      alert("Sign in successful!");

      // Save user data to localStorage
      // localStorage.setItem("userProfile", JSON.stringify({ email, name: "User" }));

      navigate("/"); // Redirect to the home page or dashboard
    } else {
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <>
      <div className="flex items-center mb-6">
        <button
          onClick={() => navigate("/")} // Go back to the previous page
          className="flex items-center p-4 space-x-2"
        >
          <FaArrowLeft className="w-6 h-6 text-gray-700" />
          <span className="text-gray-700">Go Back Home</span>
        </button>
      </div>

      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="p-6 w-full max-w-md">
          {/* Header */}
          <h2 className="text-2xl font-bold text-center">Sign In</h2>
          <p className="text-gray-600 text-center mt-6 mb-6">
            Hi, welcome back! You've been missed.
          </p>

          {/* Error Message */}
          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-600 rounded-lg text-sm">
              {error}
            </div>
          )}

          {/* Sign-in Form */}
          <form className="mt-6" onSubmit={handleSubmit}>
            {/* Email */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Email</label>
              <input
                type="email"
                placeholder="example@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 mt-1 border border-gray-300 rounded-full focus:ring focus:ring-[#704f38] outline-none"
                required
              />
            </div>

            {/* Password */}
            <div className="mb-4 relative">
              <label className="block text-gray-700 font-medium">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="***************"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-3 mt-1 border border-gray-300 rounded-full focus:ring focus:ring-[#704f38] outline-none"
                  required
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

            {/* Forgot Password */}
            <div className="flex justify-end mb-4">
              <a
                href="#"
                className="text-[#704f38] text-sm font-medium hover:underline"
              >
                Forgot password?
              </a>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full bg-[#704f38] text-white p-3 rounded-lg font-medium hover:bg-[#5a3c2d] transition duration-300"
            >
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 h-px bg-gray-300"></div>
            <p className="px-4 text-gray-600 text-sm">Or sign in with</p>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* Social Sign-In Buttons */}
          <div className="flex justify-center space-x-4">
            <button className="p-6 bg-gray-200 border-gray-300 border-2 rounded-full text-gray-700 hover:bg-gray-200 transition">
              <FaGoogle size={20} />
            </button>
            <button className="p-6 bg-gray-200 border-gray-300 border-2 rounded-full text-gray-700 hover:bg-gray-200 transition">
              <FaFacebook size={20} className="text-blue-600" />
            </button>
            <button className="p-6 bg-gray-200 border-gray-300 border-2 rounded-full text-gray-700 hover:bg-gray-200 transition">
              <FaApple size={20} />
            </button>
          </div>

          {/* Sign Up Link */}
          <p className="text-center text-gray-700 mt-6">
            Don't have an account?{" "}
            <Link
              to="/sign-up"
              className="text-[#704f38] font-medium hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignIn;
