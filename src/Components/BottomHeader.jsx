import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaShoppingCart, FaHeart, FaComment, FaUser } from 'react-icons/fa';

const BottomHeader = () => {
  const location = useLocation(); // Get the current route location

  return (
    <div className="fixed bottom-4 left-4 right-4 bg-[#1f2029] rounded-full shadow-lg border-t border-gray-200 z-50">
      <div className="flex justify-around items-center p-5">
        {/* Home */}
        <Link
          to="/"
          className={`flex flex-col items-center transition-all mr-2 ${
            location.pathname === '/' ? 'text-[#704f38] scale-110 font-bold' : 'text-gray-400 hover:text-[#704f38]'
          }`}
        >
          <div className={`p-4 bg-white rounded-full transition-transform ${location.pathname === '/' ? 'scale-125' : ''}`}>
            <FaHome className="h-6 w-6" />
          </div>
          {/* <span className="text-xs mt-1">Home</span> */}
        </Link>

        {/* Cart */}
        <Link
          to="/cart"
          className={`flex flex-col items-center transition-all ${
            location.pathname === '/cart' ? 'text-[#704f38] scale-110 font-bold' : 'text-gray-400 hover:text-[#704f38]'
          }`}
        >
          <div className={`p-4 bg-white rounded-full transition-transform ${location.pathname === '/cart' ? 'scale-125' : ''}`}>
            <FaShoppingCart className="h-6 w-6" />
          </div>
          {/* <span className="text-xs mt-1">Cart</span> */}
        </Link>

        {/* Favorites */}
        <Link
          to="/favorites"
          className={`flex flex-col items-center transition-all ${
            location.pathname === '/favorites' ? 'text-[#704f38] scale-110 font-bold' : 'text-gray-400 hover:text-[#704f38]'
          }`}
        >
          <div className={`p-4 bg-white rounded-full transition-transform ${location.pathname === '/favorites' ? 'scale-125' : ''}`}>
            <FaHeart className="h-6 w-6" />
          </div>
          {/* <span className="text-xs mt-1">Favorites</span> */}
        </Link>

        {/* Messages */}
        <Link
          to="/messages"
          className={`flex flex-col items-center transition-all ${
            location.pathname === '/messages' ? 'text-[#704f38] scale-110 font-bold' : 'text-gray-400 hover:text-[#704f38]'
          }`}
        >
          <div className={`p-4 bg-white rounded-full transition-transform ${location.pathname === '/messages' ? 'scale-125' : ''}`}>
            <FaComment className="h-6 w-6" />
          </div>
          {/* <span className="text-xs mt-1">Messages</span> */}
        </Link>

        {/* Profile */}
        <Link
          to="/profile"
          className={`flex flex-col items-center transition-all ${
            location.pathname === '/profile' ? 'text-[#704f38] scale-110 font-bold' : 'text-gray-400 hover:text-[#704f38]'
          }`}
        >
          <div className={`p-4 bg-white rounded-full transition-transform ${location.pathname === '/profile' ? 'scale-125' : ''}`}>
            <FaUser className="h-6 w-6" />
          </div>
          {/* <span className="text-xs mt-1">Profile</span> */}
        </Link>
      </div>
    </div>
  );
};

export default BottomHeader;
