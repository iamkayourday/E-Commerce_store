import React, { useState, useEffect, useRef } from "react";
import { FaArrowLeft, FaMicrophone, FaImage, FaPaperPlane } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";

const MessageDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Get the chat ID from the URL
  const [messages, setMessages] = useState([
    { id: 1, sender: "John Doe", text: "Hey, are you available tomorrow?", time: "10:30 AM" },
    { id: 2, sender: "You", text: "Yes, I am. What’s up?", time: "10:31 AM" },
    { id: 3, sender: "John Doe", type: "voice", time: "10:32 AM" },
    { id: 4, sender: "You", type: "image", src: "https://via.placeholder.com/150", time: "10:33 AM" },
    { id: 5, sender: "John Doe", text: "Let’s meet at the cafe.", time: "10:34 AM" },
    { id: 6, sender: "You", text: "Sure, see you there!", time: "10:35 AM" },
  ]);
  const [inputText, setInputText] = useState("");
  const messagesEndRef = useRef(null);

  // Scroll to the bottom of the chat when new messages are added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Handle sending a new message
  const handleSendMessage = () => {
    if (inputText.trim() === "") return; // Don't send empty messages

    const newMessage = {
      id: messages.length + 1,
      sender: "You",
      text: inputText,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages([...messages, newMessage]); // Add the new message to the list
    setInputText(""); // Clear the input box
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Header with Back Button */}
      <div className="flex items-center mb-6 bg-[#704f38] py-4 rounded-full">
        <button
          onClick={() => navigate(-1)} // Go back to the previous page
          className="p-2"
        >
          <FaArrowLeft className="w-6 h-6 text-gray-200" />
        </button>
        <h1 className="text-xl font-bold flex-1 text-center">Chat Details</h1>
      </div>

      {/* Chat Messages */}
      <div className="space-y-4 pb-20 overflow-y-auto h-[calc(100vh-180px)]">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.sender === "You" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`p-4 rounded-lg shadow-sm ${
                message.sender === "You" ? "bg-[#704f38] text-white" : "bg-white"
              }`}
              style={{ maxWidth: "80%" }}
            >
              {/* Text Message */}
              {message.type === undefined && (
                <p className="text-sm">{message.text}</p>
              )}

              {/* Voice Note */}
              {message.type === "voice" && (
                <div className="flex items-center space-x-2">
                  <FaMicrophone className="w-5 h-5" />
                  <span className="text-sm">Voice Note</span>
                </div>
              )}

              {/* Image */}
              {message.type === "image" && (
                <img
                  src={message.src}
                  alt="Chat Image"
                  className="w-32 h-32 rounded-lg object-cover"
                />
              )}

              {/* Timestamp */}
              <p className="text-xs text-gray-400 mt-1">{message.time}</p>
            </div>
          </div>
        ))}
        {/* Empty div to scroll into view */}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Box */}
      <div className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-lg">
        <div className="flex items-center space-x-4">
          {/* Voice Note Button */}
          <button className="p-2 text-gray-500 hover:text-[#704f38]">
            <FaMicrophone className="w-6 h-6" />
          </button>

          {/* Image Button */}
          <button className="p-2 text-gray-500 hover:text-[#704f38]">
            <FaImage className="w-6 h-6" />
          </button>

          {/* Input Field */}
          <input
            type="text"
            placeholder="Type a message..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#704f38] outline-none"
          />

          {/* Send Button */}
          <button
            onClick={handleSendMessage}
            className="p-3 bg-[#704f38] text-white rounded-lg hover:bg-[#5a3c2d] transition duration-300"
          >
            <FaPaperPlane className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessageDetails;