import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle, FaFacebook, FaApple } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const CreateAccount = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [termsAgreed, setTermsAgreed] = useState(false);
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Save data to localStorage
    const userAccount = {
      email,
      password,
      termsAgreed,
    };
    localStorage.setItem("userAccount", JSON.stringify(userAccount));

    alert("Account created successfully!");
    navigate("/verification"); // Redirect to verification page
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="p-6 w-full max-w-md">
        {/* Header */}
        <h2 className="text-2xl font-bold text-center">Create Account</h2>
        <p className="text-gray-600 text-center mt-6 mb-6">
          Fill your information below or register <br /> with your social
          account.
        </p>

        {/* Sign-up Form */}
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
            <label className="block text-gray-700 font-medium">Password</label>
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

          {/* Agree with Terms and Conditions */}
          <div className="flex items-center space-x-2 mb-4">
            <input
              type="checkbox"
              id="terms"
              checked={termsAgreed}
              onChange={(e) => setTermsAgreed(e.target.checked)}
              required
              className="w-6 h-6 accent-[#704f38]" // This makes the checkbox brown
            />
            <label
              htmlFor="terms"
              className="text-md text-gray-700 text-nowrap"
            >
              I agree with the{" "}
              <span className="font-semibold text-[#704f38]">
                Terms and Conditions
              </span>
            </label>
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full bg-[#704f38] text-white p-3 rounded-lg font-medium hover:bg-[#5a3c2d] transition duration-300"
          >
            Create Account
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-300"></div>
          <p className="px-4 text-gray-600 text-sm">Or sign up with</p>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Social Sign-Up Buttons */}
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

        {/* Sign In Link */}
        <p className="text-center text-gray-700 mt-6">
          Already have an account?{" "}
          <Link to="/sign-in" className="text-[#704f38] font-medium hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default CreateAccount;