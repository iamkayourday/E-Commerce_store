// The splash screen component
import React, { useEffect } from 'react';

const SplashScreen = () => {
  useEffect(() => {
    // Optional: Add a timeout to hide the splash screen after a few seconds
    const timer = setTimeout(() => {
      // You can add logic to navigate to the next screen here
      console.log('Splash screen done!');
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 animate-fadeIn">
      <div className="flex items-center gap-3">
        {/* Circle with "F" */}
        <div className="flex justify-center items-center w-20 h-20 bg-[#704f38] text-white text-2xl font-bold rounded-full animate-bounce ">
          F
        </div>
        {/* Text "Fashion" */}
        <span className="text-3xl font-bold text-gray-800 animate-slideIn">
          Fashion
        </span>
      </div>
    </div>
  );
};

export default SplashScreen;