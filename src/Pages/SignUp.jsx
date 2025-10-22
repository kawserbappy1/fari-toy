import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";
import { motion } from "framer-motion";

const SignUp = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-pink-50 to-orange-100 px-4 relative overflow-hidden">
      {/* Animated gradient blobs */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
        className="absolute w-96 h-96 bg-orange-300 rounded-full blur-3xl top-10 left-10"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
        className="absolute w-96 h-96 bg-purple-400 rounded-full blur-3xl bottom-20 right-10"
      ></motion.div>

      {/* Signup Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl p-8 w-full max-w-md border border-white/40"
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Create Your Account ✨</h2>
        <p className="text-center text-gray-500 mb-8">Join our community and start exploring!</p>

        <form className="space-y-5">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Name</label>
            <input
              type="text"
              name="name"
              required
              // value={formData.name}
              // onChange={handleChange}
              placeholder="Your full name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orangeColor focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              name="email"
              required
              // value={formData.email}
              // onChange={handleChange}
              placeholder="you@example.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orangeColor focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Photo URL</label>
            <input
              type="text"
              name="photoURL"
              required
              // value={formData.photoURL}
              // onChange={handleChange}
              placeholder="https://your-photo-link.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orangeColor focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Password</label>
            <input
              type="password"
              name="password"
              required
              // value={formData.password}
              // onChange={handleChange}
              placeholder="••••••••"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orangeColor focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orangeColor text-white py-3 rounded-lg font-bold hover:bg-orange-500 transition duration-300 shadow-md"
          >
            Sign Up
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="px-3 text-gray-500 text-sm">OR</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        {/* Google Login */}
        <button className="flex items-center justify-center w-full border border-gray-300 py-3 rounded-lg bg-white hover:bg-gray-100 transition duration-300 shadow-sm">
          <FcGoogle size={22} className="mr-2" />
          <span className="font-semibold text-gray-700">Continue with Google</span>
        </button>

        {/* Login Redirect */}
        <p className="text-center text-gray-600 mt-8">
          Already have an account?{" "}
          <Link to="/login" className="text-orangeColor font-semibold hover:underline">
            Login here
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default SignUp;
