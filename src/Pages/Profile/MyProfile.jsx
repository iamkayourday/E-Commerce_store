import React, { useEffect, useState } from "react";

const MyProfile = () => {
  const [userProfile, setUserProfile] = useState({
    name: "",
    phoneNumber: "",
    gender: "",
  });
  const [userAccount, setUserAccount] = useState({
    email: "",
  });

  const [isEditing, setIsEditing] = useState(false);

  // Fetch data from localStorage on component mount
  useEffect(() => {
    const profileData = JSON.parse(localStorage.getItem("userProfile")) || {};
    const accountData = JSON.parse(localStorage.getItem("userAccount")) || {};

    setUserProfile(profileData);
    setUserAccount(accountData);
  }, []);

  // Handle form submission to update localStorage
  const handleSave = (e) => {
    e.preventDefault();

    // Update localStorage
    localStorage.setItem("userProfile", JSON.stringify(userProfile));

    alert("Profile updated successfully!");
    setIsEditing(false); // Exit edit mode
  };

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-8">My Profile</h2>

      {!isEditing ? (
        <>
          {/* Display Profile Information */}
          <div className="space-y-6">
            <div>
              <span className="block text-sm font-medium text-gray-500">Name</span>
              <span className="block text-lg text-gray-800 mt-1">{userProfile.name || "N/A"}</span>
            </div>
            <div>
              <span className="block text-sm font-medium text-gray-500">Phone Number</span>
              <span className="block text-lg text-gray-800 mt-1">{userProfile.phoneNumber || "N/A"}</span>
            </div>
            <div>
              <span className="block text-sm font-medium text-gray-500">Gender</span>
              <span className="block text-lg text-gray-800 mt-1">{userProfile.gender || "N/A"}</span>
            </div>
            <div>
              <span className="block text-sm font-medium text-gray-500">Email</span>
              <span className="block text-lg text-gray-800 mt-1">{userAccount.email || "N/A"}</span>
            </div>
          </div>

          {/* Edit Button */}
          <button
            onClick={() => setIsEditing(true)}
            className="mt-8 w-full max-w-xs bg-[#704f38] text-white p-3 rounded-lg font-medium hover:bg-[#5a3c2d] transition duration-300"
          >
            Edit Profile
          </button>
        </>
      ) : (
        <>
          {/* Editable Form */}
          <form onSubmit={handleSave} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-500">Name</label>
              <input
                type="text"
                value={userProfile.name}
                onChange={(e) => setUserProfile({ ...userProfile, name: e.target.value })}
                className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#704f38] outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500">Phone Number</label>
              <input
                type="text"
                value={userProfile.phoneNumber}
                onChange={(e) => setUserProfile({ ...userProfile, phoneNumber: e.target.value })}
                className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#704f38] outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500">Gender</label>
              <select
                value={userProfile.gender}
                onChange={(e) => setUserProfile({ ...userProfile, gender: e.target.value })}
                className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#704f38] outline-none"
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500">Email</label>
              <input
                type="email"
                value={userAccount.email}
                disabled
                className="w-full p-3 mt-1 border border-gray-300 rounded-lg bg-gray-100 text-gray-500 cursor-not-allowed"
              />
            </div>

            {/* Save Button */}
            <button
              type="submit"
              className="mt-8 w-full max-w-xs bg-[#704f38] text-white p-3 rounded-lg font-medium hover:bg-[#5a3c2d] transition duration-300"
            >
              Save Changes
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default MyProfile;