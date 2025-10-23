// src/provider/AuthProvider.jsx
import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config"; // ✅ Import auth here, don't redeclare it

export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // ✅ Create new user
  const createUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);

  // ✅ Login with email & password
  const logInFunction = (email, password) => signInWithEmailAndPassword(auth, email, password);

  // ✅ Update user profile (name, photoURL, etc.)
  const updateUser = (data) => updateProfile(auth.currentUser, data);

  // ✅ Login with Google
  const googleLogin = () => signInWithPopup(auth, googleProvider);

  // ✅ Logout
  const logOut = () => signOut(auth);

  // ✅ Reset Pasword
  const sendPassResetEmailFunc = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };
  // ✅ Listen for authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // ✅ Context value
  const authData = {
    user,
    setUser,
    loading,
    createUser,
    logInFunction,
    updateUser,
    googleLogin,
    logOut,
    sendPassResetEmailFunc,
  };

  return <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
