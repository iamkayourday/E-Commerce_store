import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import BottomHeader from "./Components/BottomHeader";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Favorites from "./Pages/Favorites";
import Messages from "./Pages/Messages";
import Profile from "./Pages/Profile";
import Splash from "./Components/Splash";
import ProductDetails from "./Components/ProductDetails";

// Layout Component
function Layout({ children }) {
  const location = useLocation();
  
  // Routes where BottomHeader should be hidden
  const hideBottomHeaderRoutes = ["/cart"]; 

  return (
    <>
      {/* Render BottomHeader only if the current route is not in hideBottomHeaderRoutes */}
      {!hideBottomHeaderRoutes.includes(location.pathname) && <BottomHeader />}
      <div className="pb-16">{children}</div>
    </>
  );
}

// Main App Component
function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Hide the splash screen after 1 second
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1000); // 1 second

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {showSplash ? (
        <Splash />
      ) : (
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/details/:id" element={<ProductDetails />} />
          </Routes>
        </Layout>
      )}
    </Router>
  );
}

export default App;
