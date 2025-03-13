import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
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
import Settings from "./Pages/Profile/Settings";
import ProtectedRoute from "./Components/ProtectedRoutes"; // Import the ProtectedRoute component
import MyProfile from "./Pages/Profile/MyProfile";
import Shipping from "./Checkout/Shipping";
import ShippingOpt from "./Checkout/ShippingOpt";
import Checkout from "./Checkout/Checkout";
import Payment from "./Checkout/Payment";
import AddCard from "./Checkout/AddCard";
import Success from "./Checkout/Success";
import HelpCenter from "./Pages/Profile/HelpCenter";
import PasswordManager from "./Pages/Profile/PasswordManager";
import Notification from "./Pages/Notification";
import MessageList from "./Pages/Message/MessageList";
import MessageDetails from "./Pages/Message/Messagedetails";
import Order from "./Pages/Order";

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
    "/settings",
    "/payment-method",
    "/my-orders",
    "/shipping-address",
    "/shipping-option",
    "/checkout",
    "/payment",
    "/add-card",
    "/success",
    "/help-center",
    "/password-manager",
    "/messages",
    "/message/:id",
    "/details/:id", // Add this for dynamic routes
  ];

  // Check if the current route should hide the BottomHeader
  const shouldHideBottomHeader = hideBottomHeaderRoutes.some((route) => {
    // Handle dynamic routes (e.g., /details/:id)
    if (route.includes(":id")) {
      return location.pathname.startsWith(route.split(":id")[0]);
    }
    // Handle exact matches for static routes
    return location.pathname === route;
  });

  return (
    <>
      {/* Render BottomHeader only if the current route is not in hideBottomHeaderRoutes */}
      {!shouldHideBottomHeader && <BottomHeader />}
      <div className="pb-16">{children}</div>
    </>
  );
}

// Main App Component
function AppContent() {
  const [showSplash, setShowSplash] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Hide the splash screen after 1 second only if the route is "/"
    if (location.pathname === "/") {
      const timer = setTimeout(() => {
        setShowSplash(false);
      }, 1000); // 1 second

      return () => clearTimeout(timer);
    } else {
      setShowSplash(false); // Ensure splash is hidden for other routes
    }
  }, [location.pathname]);

  return (
    <>
      {/* Show Splash only on the root route */}
      {showSplash && location.pathname === "/" ? (
        <Splash />
      ) : (
        <Layout>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/details/:id" element={<ProductDetails />} />
            <Route path="notification" element={<Notification />} />

            {/* Authentication Routes */}
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<CreateAccount />} />
            <Route path="/verification" element={<VerifyCode />} />
            <Route path="/password" element={<NewPassword />} />
            <Route
              path="/complete-verification"
              element={<CompleteProfile />}
            />

            {/* Protected Routes */}
            <Route element={<ProtectedRoute />}>
              <Route path="/profile" element={<Profile />} />
              <Route path="/invite-friends" element={<InviteFriends />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/payment-method" element={<PaymentMethods />} />
              <Route path="/my-orders" element={<Order />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/your-profile" element={<MyProfile />} />
              <Route path="/help-center" element={<HelpCenter />} />
              <Route path="/password-manager" element={<PasswordManager />} />
              <Route path="/messages" element={<MessageList />} />
              <Route path="/message/:id" element={<MessageDetails />} />
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
    </>
  );
}

// Wrapper for Router
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;