import React from "react";
import { FaArrowLeft, FaBell, FaCheckCircle, FaTruck, FaFire, FaCommentDots, FaCreditCard } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Notification = () => {
  const navigate = useNavigate();

  // Notification data
  const notifications = [
    {
      id: 1,
      day: "Today",
      icon: <FaTruck className="w-6 h-6 text-[#704f38]" />,
      header: "Order Shipped",
      description: "Your order #12345 has been shipped.",
      time: "1 hr ago",
    },
    {
      id: 2,
      day: "Today",
      icon: <FaFire className="w-6 h-6 text-[#704f38]" />,
      header: "Flash Sale Alert",
      description: "Hurry! Flash sale ends in 2 hours.",
      time: "2 hrs ago",
    },
    {
      id: 3,
      day: "Today",
      icon: <FaCommentDots className="w-6 h-6 text-[#704f38]" />,
      header: "Product Review Request",
      description: "Please review your recent purchase.",
      time: "3 hrs ago",
    },
    {
      id: 4,
      day: "Yesterday",
      icon: <FaTruck className="w-6 h-6 text-[#704f38]" />,
      header: "Order Shipped",
      description: "Your order #12346 has been shipped.",
      time: "1 day ago",
    },
    {
      id: 5,
      day: "Yesterday",
      icon: <FaCreditCard className="w-6 h-6 text-[#704f38]" />,
      header: "New PayPal Added",
      description: "A new PayPal account has been linked.",
      time: "1 day ago",
    },
    {
      id: 6,
      day: "Yesterday",
      icon: <FaFire className="w-6 h-6 text-[#704f38]" />,
      header: "Flash Sales",
      description: "Flash sales are live now!",
      time: "1 day ago",
    },
    {
      id: 7,
      day: "2 Days Ago",
      icon: <FaTruck className="w-6 h-6 text-[#704f38]" />,
      header: "Order Shipped",
      description: "Your order #12347 has been shipped.",
      time: "2 days ago",
    },
    {
      id: 8,
      day: "2 Days Ago",
      icon: <FaFire className="w-6 h-6 text-[#704f38]" />,
      header: "Flash Sale Alert",
      description: "Hurry! Flash sale ends in 2 hours.",
      time: "2 days ago",
    },
  ];

  // Group notifications by day
  const groupedNotifications = notifications.reduce((acc, notification) => {
    if (!acc[notification.day]) {
      acc[notification.day] = [];
    }
    acc[notification.day].push(notification);
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Header with Back Button */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => navigate(-1)} // Go back to the previous page
          className="p-2"
        >
          <FaArrowLeft className="w-6 h-6 text-gray-700" />
        </button>
        <h1 className="text-xl font-bold flex-1 text-center">Notification</h1>
        <button className="p-2 bg-[#704f38] text-white rounded-lg">
          3 New 
        </button>
      </div>

      {/* Notifications */}
      {Object.entries(groupedNotifications).map(([day, notifications]) => (
        <div key={day} className="mb-6">
          {/* Day Header */}
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-[#704f38]">{day}</h2>
            <button className="text-sm text-[#704f38] hover:underline">
              Mark all as read
            </button>
          </div>

          {/* Notification List */}
          <div className="space-y-4">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className="bg-white p-4 rounded-lg shadow-sm flex items-start space-x-4"
              >
                {/* Icon */}
                <div className="flex-shrink-0">{notification.icon}</div>

                {/* Notification Details */}
                <div className="flex-1">
                  <h3 className="font-medium text-gray-700">
                    {notification.header}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {notification.description}
                  </p>
                </div>

                {/* Timestamp */}
                <div className="text-sm text-gray-400">
                  {notification.time}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Notification;