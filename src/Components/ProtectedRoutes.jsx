import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  // Check if the user is authenticated
  const isAuthenticated = localStorage.getItem("userAccount");

  // If authenticated, render the child routes (Outlet)
  // If not, redirect to the login page
  return isAuthenticated ? <Outlet /> : <Navigate to="/sign-in" />;
};

export default ProtectedRoute;