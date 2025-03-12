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
import SignIn from "./Auth/SignIn";
import CreateAccount from "./Auth/CreateAccount";
import VerifyCode from "./Auth/VerifyCode";
import NewPassword from "./Auth/NewPassword";
import CompleteProfile from "./Auth/CompleteProfile";
import InviteFriends from "./Pages/Profile/InviteFriends";
import PrivacyPolicy from "./Pages/Profile/PrivacyPolicy";
import PaymentMethods from "./Pages/Profile/paymentMethods";
import Orders from "./Pages/Profile/Orders";
import Settings from  "./Pages/Profile/Settings";
import ProtectedRoute from "./Components/ProtectedRoutes"; // Import the ProtectedRoute component
import MyProfile from "./Pages/Profile/MyProfile";
import Shipping from "./Checkout/Shipping";
import ShippingOpt from "./Checkout/ShippingOpt";
import Checkout from "./Checkout/Checkout";
import Payment from "./Checkout/Payment";
import AddCard from "./Checkout/AddCard";
import Success from "./Checkout/Success";

// Layout Component
function Layout({ children }) {
  const location = useLocation();

  // Routes where BottomHeader should be hidden
  const hideBottomHeaderRoutes = [
    "/cart",
    "/sign-in",
    "/sign-up",
    "/verification",
    "/password",
    "/complete-verification",
    "/invite-friends",
    "/privacy-policy",
    "/payment-method",
    "/shipping-address",
    "/shipping-option",
    "/checkout",
    "/payment",
    "/add-card",
    "/success",
  ];

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
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/details/:id" element={<ProductDetails />} />

            {/* Authentication Routes */}
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<CreateAccount />} />
            <Route path="/verification" element={<VerifyCode />} />
            <Route path="/password" element={<NewPassword />} />
            <Route path="/complete-verification" element={<CompleteProfile />} />

            {/* Protected Routes */}
            <Route element={<ProtectedRoute />}>
              <Route path="/profile" element={<Profile />} />
              <Route path="/invite-friends" element={<InviteFriends />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/payment-method" element={<PaymentMethods />} />
              <Route path="/my-orders" element={<Orders />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/your-profile" element={<MyProfile/>} />
            </Route>

            {/* Checkout */}
            <Route path="/shipping-address" element={<Shipping />} />
            <Route path="/shipping-option" element={<ShippingOpt />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/add-card" element={<AddCard />} />
            <Route path="/success" element={<Success />} />

            {/* Fallback Route (e.g., 404 Not Found) */}
            <Route path="*" element={<div>404 Not Found</div>} />
          </Routes>
        </Layout>
      )}
    </Router>
  );
}

export default App;