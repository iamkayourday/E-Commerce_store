import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaMapMarkerAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Shipping = () => {
  const navigate = useNavigate();

  // Default addresses (only used if no addresses exist in localStorage)
  const defaultAddresses = [
    { id: 1, type: "Home", address: "123 Main Street, City, Country" },
    { id: 2, type: "Office", address: "456 Business Road, City, Country" },
    { id: 3, type: "Parents House", address: "789 Family Lane, City, Country" },
    { id: 4, type: "Vacation Home", address: "101 Beachside Drive, City, Country" },
  ];

  // Load addresses from localStorage or use default addresses if none exist
  const [addresses, setAddresses] = useState(() => {
    const savedAddresses = JSON.parse(localStorage.getItem("addresses"));
    return savedAddresses || defaultAddresses;
  });

  // State to track the selected address (full object)
  const [selectedAddress, setSelectedAddress] = useState(() => {
    const savedSelectedAddress = JSON.parse(localStorage.getItem("selectedAddress"));
    return savedSelectedAddress || null; // Default to null if nothing is saved
  });

  // State to toggle the "Add New Address" form
  const [showForm, setShowForm] = useState(false);

  // State to manage the new address input
  const [newAddress, setNewAddress] = useState({ type: "", address: "" });

  // Save addresses to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("addresses", JSON.stringify(addresses));
  }, [addresses]);

  // Save selected address (full object) to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("selectedAddress", JSON.stringify(selectedAddress));
  }, [selectedAddress]);

  // Handle selecting an address
  const handleSelectAddress = (id) => {
    const selected = addresses.find((address) => address.id === id);
    setSelectedAddress(selected); // Save the full address object
  };

  // Handle adding a new address
  const handleAddAddress = () => {
    setShowForm(true); // Show the form
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAddress({ ...newAddress, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (newAddress.type && newAddress.address) {
      const addressToAdd = {
        id: Date.now(), // Unique ID for the new address
        type: newAddress.type,
        address: newAddress.address,
      };

      // Update the addresses state
      setAddresses((prevAddresses) => [...prevAddresses, addressToAdd]);

      // Reset the form and hide it
      setNewAddress({ type: "", address: "" });
      setShowForm(false);
    }
  };

  // Handle applying the selected address
  const handleApply = () => {
    if (selectedAddress) {
      alert(`Address applied: ${selectedAddress.type} - ${selectedAddress.address}`);
      // You can perform additional actions here, like navigating to another page
    } else {
      alert("Please select an address first.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header with Back Button */}
      <div className="flex items-center mb-6">
        <button
          onClick={() => navigate(-1)} // Go back to the previous page
          className="p-2"
        >
          <FaArrowLeft className="w-6 h-6 text-gray-700" />
        </button>
        <h1 className="text-xl font-bold flex-1 text-center">Shipping Address</h1>
      </div>

      {/* Address List */}
      <div className="space-y-4">
        {addresses.map((address) => (
          <div
            key={address.id}
            className="flex items-center p-4 bg-white rounded-lg shadow-sm cursor-pointer hover:bg-gray-50 transition-colors"
            onClick={() => handleSelectAddress(address.id)}
          >
            {/* Location Icon */}
            <FaMapMarkerAlt className="w-6 h-6 text-[#704f38] mr-4" />

            {/* Address Details */}
            <div className="flex-1">
              <h3 className="font-medium text-gray-700">{address.type}</h3>
              <p className="text-sm text-gray-500">{address.address}</p>
            </div>

            {/* Checkbox */}
            <div
              className={`w-5 h-5 rounded-full border-2 ${
                selectedAddress?.id === address.id
                  ? "border-[#704f38] bg-[#704f38]"
                  : "border-gray-300"
              } flex items-center justify-center`}
            >
              {selectedAddress?.id === address.id && (
                <div className="w-2 h-2 rounded-full bg-white"></div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Add New Address Button */}
      {!showForm && (
        <button
          onClick={handleAddAddress}
          className="w-full mt-6 border-2 border-dashed border-[#704f38] text-[#704f38] p-3 rounded-lg font-medium transition duration-300"
        >
          Add New Address
        </button>
      )}

      {/* Add New Address Form */}
      {showForm && (
        <form onSubmit={handleSubmit} className="mt-6 bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-medium text-gray-700 mb-4">Add New Address</h3>

          {/* Address Type Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-500">Address Type</label>
            <input
              type="text"
              name="type"
              value={newAddress.type}
              onChange={handleInputChange}
              placeholder="e.g., Home, Office, Parents House"
              className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#704f38] outline-none"
              required
            />
          </div>

          {/* Address Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-500">Address</label>
            <input
              type="text"
              name="address"
              value={newAddress.address}
              onChange={handleInputChange}
              placeholder="e.g., 123 Main Street, City, Country"
              className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#704f38] outline-none"
              required
            />
          </div>

          {/* Form Buttons */}
          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => setShowForm(false)} // Cancel button
              className="flex-1 bg-gray-300 text-gray-700 p-3 rounded-lg font-medium hover:bg-gray-400 transition duration-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 bg-[#704f38] text-white p-3 rounded-lg font-medium hover:bg-[#5a3c2d] transition duration-300"
            >
              Save Address
            </button>
          </div>
        </form>
      )}

      {/* Apply Button */}
      {selectedAddress && (
        <button
          onClick={handleApply}
          className="w-full mt-6 bg-[#704f38] text-white p-3 rounded-lg font-medium transition duration-300"
        >
          Apply
        </button>
      )}
    </div>
  );
};

export default Shipping;