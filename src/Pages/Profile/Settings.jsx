import React from "react";
import {
  FaArrowLeft,
  FaBell, 
  FaKey, 
  FaTrash, 
  FaChevronRight,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const navigate = useNavigate();

  return (
    <div className="p-4">
      {/* Header */}
      <div className="flex items-center mb-6">
        <button
          onClick={() => navigate(-1)}
          className="p-2"
        >
          <FaArrowLeft className="w-6 h-6 text-gray-700" />
        </button>
        <h1 className="text-xl font-bold flex-1 text-center">Settings</h1>
      </div>

      {/* Menu Items */}
      <div className="space-y-4">
        {/*Notification Settings */}
        <div
          className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm cursor-pointer hover:bg-gray-50 transition-colors"
          onClick={() => navigate("/notification")}
        >
          <div className="flex items-center space-x-4">
            <FaBell className="w-6 h-6 text-[#704f38]" />
            <span className="text-gray-700">Notification Settings</span>
          </div>
          <FaChevronRight className="w-5 h-5 text-gray-400" />
        </div>

        {/* Password Manager */}
        <div
          className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm cursor-pointer hover:bg-gray-50 transition-colors"
          onClick={() => navigate("/password-manager")}
        >
          <div className="flex items-center space-x-4">
            <FaKey className="w-6 h-6 text-[#704f38]" />
            <span className="text-gray-700">Password Manager</span>
          </div>
          <FaChevronRight className="w-5 h-5 text-gray-400" />
        </div>

        {/* Delete Account */}
        <div
          className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm cursor-pointer hover:bg-gray-50 transition-colors"
          onClick={() => navigate("/delete-confirmation")}
        >
          <div className="flex items-center space-x-4">
            <FaTrash className="w-6 h-6 text-[#704f38]" />
            <span className="text-gray-700">Delete Account</span>
          </div>
          <FaChevronRight className="w-5 h-5 text-gray-400" />
        </div>
      </div>
      <div className="mt-20"></div>
    </div>
  );
};

export default Settings;
