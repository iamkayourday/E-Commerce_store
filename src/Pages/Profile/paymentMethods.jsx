import React, { useState } from "react";
import { FaArrowLeft, FaCreditCard, FaPaypal, FaApple } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const PaymentMethods = () => {
  const navigate = useNavigate();
  const [showAddCard, setShowAddCard] = useState(false);
  const [cards, setCards] = useState([]);
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  // Handle adding a new card
  const handleAddCard = (e) => {
    e.preventDefault();
    if (cardNumber && cardHolder && expiryDate && cvv) {
      const newCard = {
        id: Date.now(),
        cardNumber,
        cardHolder,
        expiryDate,
        cvv,
      };
      setCards([...cards, newCard]);
      setCardNumber("");
      setCardHolder("");
      setExpiryDate("");
      setCvv("");
      setShowAddCard(false);
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
        <h1 className="text-xl font-bold flex-1 text-center">Payment Methods</h1>
      </div>

      {/* Credit and Debit Card Section */}
      <div className="mb-8">
        <h2 className="text-lg font-bold mb-4">Credit and Debit Card</h2>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <FaCreditCard className="w-6 h-6 text-gray-700" />
            <span className="text-gray-700">Add New Card</span>
          </div>
          <button
            onClick={() => setShowAddCard(!showAddCard)}
            className="text-[#704f38] hover:underline"
          >
            {showAddCard ? "Cancel" : "Add"}
          </button>
        </div>

        {/* Add Card Form */}
        {showAddCard && (
          <form onSubmit={handleAddCard} className="mb-4">
            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Card Number</label>
              <input
                type="text"
                placeholder="1234 5678 9012 3456"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring focus:ring-[#704f38] outline-none"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Card Holder</label>
              <input
                type="text"
                placeholder="John Doe"
                value={cardHolder}
                onChange={(e) => setCardHolder(e.target.value)}
                className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring focus:ring-[#704f38] outline-none"
                required
              />
            </div>
            <div className="flex space-x-4 mb-4">
              <div className="flex-1">
                <label className="block text-gray-700 font-medium">Expiry Date</label>
                <input
                  type="text"
                  placeholder="MM/YY"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                  className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring focus:ring-[#704f38] outline-none"
                  required
                />
              </div>
              <div className="flex-1">
                <label className="block text-gray-700 font-medium">CVV</label>
                <input
                  type="text"
                  placeholder="123"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring focus:ring-[#704f38] outline-none"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-[#704f38] text-white p-3 rounded-lg font-medium hover:bg-[#5a3c2d] transition duration-300"
            >
              Save Card
            </button>
          </form>
        )}

        {/* Display Added Cards */}
        {cards.map((card) => (
          <div key={card.id} className="p-4 bg-white rounded-lg shadow-sm mb-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-700">**** **** **** {card.cardNumber.slice(-4)}</p>
                <p className="text-sm text-gray-600">{card.cardHolder}</p>
              </div>
              <button
                onClick={() => setCards(cards.filter((c) => c.id !== card.id))}
                className="text-red-600 hover:text-red-800"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* More Payment Options Section */}
      <div>
        <h2 className="text-lg font-bold mb-4">More Payment Options</h2>
        <div className="space-y-4">
          {/* PayPal */}
          <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
            <div className="flex items-center space-x-2">
              <FaPaypal className="w-6 h-6 text-blue-600" />
              <span className="text-gray-700">PayPal</span>
            </div>
            <button className="text-[#704f38] hover:underline">Add</button>
          </div>

          {/* Apple Pay */}
          <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
            <div className="flex items-center space-x-2">
              <FaApple className="w-6 h-6 text-gray-700" />
              <span className="text-gray-700">Apple Pay</span>
            </div>
            <button className="text-[#704f38] hover:underline">Add</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethods;