// src/components/PrivateRoute.jsx (or similar path)

import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  // Show a loading spinner or indicator while Firebase checks authentication status
  if (loading) {
    // You can replace this with a nice spinner component
    return <div className="flex justify-center items-center h-screen text-2xl font-bold">Loading...</div>;
  }

  // If the user is logged in, render the child component (the protected page)
  if (user) {
    return children;
  }

  // If the user is NOT logged in, redirect them to the login page.
  // The 'replace' prop prevents going back to the protected route after login.
  // The 'state' prop saves the current location so they can be redirected back after successful login.
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
