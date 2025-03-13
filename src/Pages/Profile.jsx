import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaUser, FaPen, FaCreditCard, FaBox, FaCog, FaQuestionCircle, FaShieldAlt, FaUserFriends, FaSignOutAlt, FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const [profileImage, setProfileImage] = useState("");
  const [name, setName] = useState("");

  // Load profile data from localStorage
  useEffect(() => {
    const userProfile = JSON.parse(localStorage.getItem("userProfile")) || {};
    setProfileImage(userProfile.profileImage || "");
    setName(userProfile.name || "Your Name");
  }, []);

  // Handle profile image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
        // Save updated profile image to localStorage
        const userProfile = JSON.parse(localStorage.getItem("userProfile")) || {};
        userProfile.profileImage = reader.result;
        localStorage.setItem("userProfile", JSON.stringify(userProfile));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="p-4">
      {/* Header */}
      <div className="flex items-center mb-6">
        <button
          onClick={() => navigate(-1)} // Go back to the previous page
          className="p-2"
        >
          <FaArrowLeft className="w-6 h-6 text-gray-700" />
        </button>
        <h1 className="text-xl font-bold flex-1 text-center">Profile</h1>
      </div>

      {/* Profile Image and Name */}
      <div className="flex flex-col items-center mb-8">
        <div className="relative">
          {profileImage ? (
            <img
              src={profileImage}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover border-2 border-gray-200"
            />
          ) : (
            <div className="w-24 h-24 rounded-full border-2 border-gray-200 flex items-center justify-center">
              <FaUser className="text-6xl text-gray-200" />
            </div>
          )}
          <label
            htmlFor="profileImageUpload"
            className="absolute bottom-0 right-0 bg-[#704f38] text-white p-2 rounded-full hover:bg-[#5a3c2d] transition-colors cursor-pointer"
          >
            <FaPen className="w-4 h-4" />
            <input
              type="file"
              id="profileImageUpload"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />
          </label>
        </div>
        <h2 className="text-xl font-bold mt-4">{name}</h2>
      </div>

      {/* Menu Items */}
      <div className="space-y-4">
        {/* Your Profile */}
        <div
          className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm cursor-pointer hover:bg-gray-50 transition-colors"
          onClick={() => navigate("/your-profile")}
        >
          <div className="flex items-center space-x-4">
            <FaUser className="w-6 h-6 text-[#704f38]" />
            <span className="text-gray-700">Your Profile</span>
          </div>
          <FaChevronRight className="w-5 h-5 text-gray-400" />
        </div>

        {/* Payment Methods */}
        <div
          className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm cursor-pointer hover:bg-gray-50 transition-colors"
          onClick={() => navigate("/payment-method")}
        >
          <div className="flex items-center space-x-4">
            <FaCreditCard className="w-6 h-6 text-[#704f38]" />
            <span className="text-gray-700">Payment Methods</span>
          </div>
          <FaChevronRight className="w-5 h-5 text-gray-400" />
        </div>

        {/* My Orders */}
        <div
          className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm cursor-pointer hover:bg-gray-50 transition-colors"
          onClick={() => navigate("/my-orders")}
        >
          <div className="flex items-center space-x-4">
            <FaBox className="w-6 h-6 text-[#704f38]" />
            <span className="text-gray-700">My Orders</span>
          </div>
          <FaChevronRight className="w-5 h-5 text-gray-400" />
        </div>

        {/* Settings */}
        <div
          className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm cursor-pointer hover:bg-gray-50 transition-colors"
          onClick={() => navigate("/settings")}
        >
          <div className="flex items-center space-x-4">
            <FaCog className="w-6 h-6 text-[#704f38]" />
            <span className="text-gray-700">Settings</span>
          </div>
          <FaChevronRight className="w-5 h-5 text-gray-400" />
        </div>

        {/* Help Center */}
        <div
          className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm cursor-pointer hover:bg-gray-50 transition-colors"
          onClick={() => navigate("/help-center")}
        >
          <div className="flex items-center space-x-4">
            <FaQuestionCircle className="w-6 h-6 text-[#704f38]" />
            <span className="text-gray-700">Help Center</span>
          </div>
          <FaChevronRight className="w-5 h-5 text-gray-400" />
        </div>

        {/* Privacy Policy */}
        <div
          className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm cursor-pointer hover:bg-gray-50 transition-colors"
          onClick={() => navigate("/privacy-policy")}
        >
          <div className="flex items-center space-x-4">
            <FaShieldAlt className="w-6 h-6 text-[#704f38]" />
            <span className="text-gray-700">Privacy Policy</span>
          </div>
          <FaChevronRight className="w-5 h-5 text-gray-400" />
        </div>

        {/* Invite Friends */}
        <div
          className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm cursor-pointer hover:bg-gray-50 transition-colors"
          onClick={() => navigate("/invite-friends")}
        >
          <div className="flex items-center space-x-4">
            <FaUserFriends className="w-6 h-6 text-[#704f38]" />
            <span className="text-gray-700">Invite Friends</span>
          </div>
          <FaChevronRight className="w-5 h-5 text-gray-400" />
        </div>

        {/* Log Out */}
        <div
          className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm cursor-pointer hover:bg-gray-50 transition-colors"
          onClick={() => {
            // localStorage.removeItem("userProfile");
            navigate("/sign-in");
          }}
        >
          <div className="flex items-center space-x-4">
            <FaSignOutAlt className="w-6 h-6 text-[#704f38]" />
            <span className="text-gray-700">Log Out</span>
          </div>
          <FaChevronRight className="w-5 h-5 text-gray-400" />
        </div>

       
      </div>
      <div className="mt-20"></div>
    </div>
  );
};

export default Profile;