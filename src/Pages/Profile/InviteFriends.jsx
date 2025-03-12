import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// Mock data for friends
const friendsData = [
  { id: 1, name: "John Doe", phone: "+1 123 456 7890", image: "https://via.placeholder.com/50" },
  { id: 2, name: "Jane Smith", phone: "+1 234 567 8901", image: "https://via.placeholder.com/50" },
  { id: 3, name: "Alice Johnson", phone: "+1 345 678 9012", image: "https://via.placeholder.com/50" },
  { id: 4, name: "Bob Brown", phone: "+1 456 789 0123", image: "https://via.placeholder.com/50" },
  { id: 5, name: "Charlie Davis", phone: "+1 567 890 1234", image: "https://via.placeholder.com/50" },
  { id: 6, name: "Diana Evans", phone: "+1 678 901 2345", image: "https://via.placeholder.com/50" },
  { id: 7, name: "Ethan Green", phone: "+1 789 012 3456", image: "https://via.placeholder.com/50" },
  { id: 8, name: "Fiona Harris", phone: "+1 890 123 4567", image: "https://via.placeholder.com/50" },
  { id: 9, name: "George Clark", phone: "+1 901 234 5678", image: "https://via.placeholder.com/50" },
  { id: 10, name: "Hannah Lewis", phone: "+1 012 345 6789", image: "https://via.placeholder.com/50" },
  { id: 11, name: "Ian Walker", phone: "+1 123 456 7890", image: "https://via.placeholder.com/50" },
  { id: 12, name: "Julia Hall", phone: "+1 234 567 8901", image: "https://via.placeholder.com/50" },
  { id: 13, name: "Kevin Young", phone: "+1 345 678 9012", image: "https://via.placeholder.com/50" },
  { id: 14, name: "Laura Allen", phone: "+1 456 789 0123", image: "https://via.placeholder.com/50" },
  { id: 15, name: "Mike King", phone: "+1 567 890 1234", image: "https://via.placeholder.com/50" },
  { id: 16, name: "Nina Wright", phone: "+1 678 901 2345", image: "https://via.placeholder.com/50" },
  { id: 17, name: "Oscar Scott", phone: "+1 789 012 3456", image: "https://via.placeholder.com/50" },
  { id: 18, name: "Paula Adams", phone: "+1 890 123 4567", image: "https://via.placeholder.com/50" },
  { id: 19, name: "Quincy Baker", phone: "+1 901 234 5678", image: "https://via.placeholder.com/50" },
  { id: 20, name: "Rachel Carter", phone: "+1 012 345 6789", image: "https://via.placeholder.com/50" },
];

const InviteFriends = () => {
  const navigate = useNavigate();

  // Handle invite button click
  const handleInvite = (friend) => {
    alert(`Invite sent to ${friend.name} (${friend.phone})`);
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
        <h1 className="text-xl font-bold flex-1 text-center">Invite Friends</h1>
      </div>

      {/* Friends List */}
      <div className="space-y-4">
        {friendsData.map((friend) => (
          <div key={friend.id} className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
            {/* Profile Picture, Name, and Phone Number */}
            <div className="flex items-center space-x-4">
              <img
                src={friend.image}
                alt={friend.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h2 className="text-lg font-semibold">{friend.name}</h2>
                <p className="text-sm text-gray-600">{friend.phone}</p>
              </div>
            </div>

            {/* Invite Button */}
            <button
              onClick={() => handleInvite(friend)}
              className="px-4 py-2 bg-[#704f38] text-white rounded-full hover:bg-[#5a3c2d] transition-colors"
            >
              Invite
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InviteFriends;