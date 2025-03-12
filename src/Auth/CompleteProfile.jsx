import React, { useState } from "react";
import { FaPen, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CompleteProfile = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("+1");
  const [gender, setGender] = useState("male");
  const [profileImage, setProfileImage] = useState(null);
  const navigate = useNavigate();

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Save data to localStorage
    const userProfile = {
      name,
      phoneNumber: `${countryCode} ${phoneNumber}`,
      gender,
    };
    localStorage.setItem("userProfile", JSON.stringify(userProfile));

    alert("Profile saved successfully!");
    navigate("/sign-in"); // Redirect to the login page
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="p-6 w-full max-w-md">
        {/* Header */}
        <h2 className="text-2xl font-bold text-center">Complete your Profile</h2>
        <p className="text-gray-600 text-center mt-6 mb-6 text-nowrap">
          Don't worry, only you can see your personal <br />
          data. No one else will be able to see it.
        </p>

        {/* Profile Image Section */}
        <div className="flex justify-center items-center mb-6 relative">
          {profileImage ? (
            <img
              src={profileImage}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-2 border-gray-200"
            />
          ) : (
            <span className="p-8 border-2 border-gray-200 rounded-full">
              <FaUser className="text-6xl text-gray-200" />
            </span>
          )}
          <label
            htmlFor="profileImageUpload"
            className="absolute bottom-0 right-24 bg-[#704f38] text-white p-2 rounded-full hover:bg-[#5a3c2d] transition-colors cursor-pointer"
          >
            <FaPen />
            <input
              type="file"
              id="profileImageUpload"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />
          </label>
        </div>

        {/* Sign-in Form */}
        <form className="mt-6" onSubmit={handleSubmit}>
          {/* Name */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Name</label>
            <input
              type="text"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 mt-1 border border-gray-300 rounded-full focus:ring focus:ring-[#704f38] outline-none"
              required
            />
          </div>

          {/* Phone Number */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Phone Number</label>
            <div className="flex">
              <select
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
                className="p-3 border border-gray-300 rounded-l-full focus:ring focus:ring-[#704f38] outline-none bg-gray-100"
              >
                <option value="+1">+1</option>
                <option value="+234">+234</option>
                <option value="+44">+44</option>
                {/* Add other country codes here */}
              </select>
              <input
                type="text"
                placeholder="Enter Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full p-3 border-t border-b border-r border-gray-300 rounded-r-full focus:ring focus:ring-[#704f38] outline-none"
                required
              />
            </div>
          </div>

          {/* Gender */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Gender</label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full p-3 mt-1 border border-gray-300 rounded-full focus:ring focus:ring-[#704f38] outline-none bg-gray-100"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#704f38] text-white p-3 rounded-full font-medium hover:bg-[#5a3c2d] transition duration-300"
          >
            Complete Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default CompleteProfile;