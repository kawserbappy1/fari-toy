import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/Firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);
  const logInFunction = (email, password) => signInWithEmailAndPassword(auth, email, password);
  const updateUser = (data) => updateProfile(auth.currentUser, data);
  const googleLogin = () => signInWithPopup(auth, googleProvider);
  const logOut = () => signOut(auth);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (current) => {
      setUser(current);
      setLoading(false);
    });
    return () => unsub();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, createUser, logInFunction, updateUser, googleLogin, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
