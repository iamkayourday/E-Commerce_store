import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const MessageList = () => {
  const navigate = useNavigate();

  // Mock chat data
  const chats = [
    {
      id: 1,
      name: "John Doe",
      profilePic: "/male.jpg",
      lastMessage: "Hey, are you available tomorrow?",
      time: "10:30 AM",
      unread: true,
    },
    {
      id: 2,
      name: "Jane Smith",
      profilePic: "/male.jpg",
      lastMessage: "I’ll send you the details soon.",
      time: "Yesterday",
      unread: false,
    },
    {
      id: 3,
      name: "Alice Johnson",
      profilePic: "/female.jpg",
      lastMessage: "Thanks for the update!",
      time: "2 days ago",
      unread: false,
    },
    {
      id: 4,
      name: "Bob Brown",
      profilePic: "/male.jpg",
      lastMessage: "Let’s meet at 5 PM.",
      time: "3 days ago",
      unread: true,
    },
    {
      id: 5,
      name: "Charlie Davis",
      profilePic: "/male.jpg",
      lastMessage: "Did you get the package?",
      time: "1 week ago",
      unread: false,
    },
    {
      id: 6,
      name: "Eva Green",
      profilePic: "/female.jpg",
      lastMessage: "I’ll call you later.",
      time: "1 week ago",
      unread: false,
    },
    {
      id: 7,
      name: "Frank White",
      profilePic: "/male.jpg",
      lastMessage: "Check out the new design.",
      time: "2 weeks ago",
      unread: true,
    },
    {
      id: 8,
      name: "Grace Hall",
      profilePic: "/female.jpg",
      lastMessage: "See you at the meeting.",
      time: "2 weeks ago",
      unread: false,
    },
    {
      id: 9,
      name: "Henry Lee",
      profilePic: "/male.jpg",
      lastMessage: "Let me know your thoughts.",
      time: "3 weeks ago",
      unread: false,
    },
    {
      id: 10,
      name: "Ivy Clark",
      profilePic: "/male.jpg",
      lastMessage: "Thanks for your help!",
      time: "1 month ago",
      unread: false,
    },
  ];

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
        <h1 className="text-xl font-bold flex-1 text-center">Messages</h1>
      </div>

      {/* Chat List */}
      <div className="space-y-4">
        {chats.map((chat) => (
          <div
            key={chat.id}
            onClick={() => navigate("#")} // Navigate to chat details
            className="bg-white p-4 rounded-lg shadow-sm flex items-center space-x-4 cursor-pointer hover:bg-gray-50 transition-colors"
          >
            {/* Profile Picture */}
            <img
              src={chat.profilePic}
              alt={chat.name}
              className="w-12 h-12 rounded-full object-cover"
            />

            {/* Chat Details */}
            <div className="flex-1">
              <h3 className="font-medium text-gray-700">{chat.name}</h3>
              <p className="text-sm text-gray-500">{chat.lastMessage}</p>
            </div>

            {/* Timestamp and Unread Indicator */}
            <div className="text-sm text-gray-400">
              {chat.time}
              {chat.unread && (
                <span className="ml-2 w-2 h-2 bg-[#704f38] rounded-full inline-block"></span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessageList;