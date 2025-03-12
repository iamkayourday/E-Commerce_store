import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import BottomHeader from './Components/BottomHeader';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Favorites from './Pages/Favorites';
import Messages from './Pages/Messages';
import Profile from './Pages/Profile';
import Splash from './Components/Splash';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Hide the splash screen after 3 seconds
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1000); // 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {showSplash ? (
        <Splash />
      ) : (
        <>
          <div className="pb-16"> {/* Add padding-bottom to avoid content overlap with the bottom header */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </div>
          <BottomHeader />
        </>
      )}
    </Router>
  );
}

export default App;