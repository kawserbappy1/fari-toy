import React, { useContext } from "react";
import { motion } from "framer-motion";
import { AuthContext } from "../Provider/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-orange-100 via-pink-50 to-purple-100">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center bg-white/80 backdrop-blur-md p-10 rounded-3xl shadow-lg border border-white/40"
        >
          <h2 className="text-2xl font-bold text-gray-700 mb-3">No User Found 😕</h2>
          <p className="text-gray-500">Please login to see your profile information.</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-pink-50 to-orange-100 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl p-8 w-full max-w-md border border-white/40 text-center"
      >
        <img
          src={user.photoURL || "https://i.ibb.co/6DYM05G/user.png"}
          alt="Profile"
          className="w-28 h-28 mx-auto rounded-full object-cover border-4 border-orangeColor shadow-md mb-4"
        />
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{user.displayName || "Anonymous User"}</h2>
        <p className="text-gray-600 mb-6">{user.email}</p>

        <div className="text-left space-y-3 bg-white/60 p-5 rounded-2xl border border-white/50 shadow-inner">
          <div>
            <span className="font-semibold text-gray-700">Full Name: </span>
            <span className="text-gray-600">{user.displayName || "Not set"}</span>
          </div>
          <div>
            <span className="font-semibold text-gray-700">Email: </span>
            <span className="text-gray-600">{user.email}</span>
          </div>
          <div>
            <span className="font-semibold text-gray-700">Photo URL: </span>
            <span className="text-gray-600 break-all">{user.photoURL || "No photo URL set"}</span>
          </div>
          <div>
            <span className="font-semibold text-gray-700">Password: </span>
            <span className="text-gray-600">******** (hidden for security)</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Profile;
