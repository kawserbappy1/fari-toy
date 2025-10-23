import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

const SignUp = () => {
  const { createUser, updateUser, googleLogin } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;
    setLoading(true);

    createUser(email, password)
      .then(() => updateUser({ displayName: name, photoURL }))
      .then(() => {
        Swal.fire({
          title: "Success 🎉",
          text: "Account created and logged in successfully!",
          icon: "success",
          confirmButtonColor: "#f97316",
        });
        navigate("/");
      })
      .catch((err) =>
        Swal.fire({
          title: "Error!",
          text: err.message,
          icon: "error",
          confirmButtonColor: "#f97316",
        })
      )
      .finally(() => setLoading(false));
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then(() =>
        Swal.fire({
          title: "Welcome!",
          text: "Google login successful 🚀",
          icon: "success",
          confirmButtonColor: "#f97316",
        })
      )
      .then(() => navigate("/"))
      .catch((err) =>
        Swal.fire({
          title: "Login failed",
          text: err.message,
          icon: "error",
        })
      );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-pink-50 to-orange-100 px-4 relative overflow-hidden">
      {/* Floating background shapes */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
        className="absolute w-96 h-96 bg-orange-300 rounded-full blur-3xl top-10 left-10"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
        className="absolute w-96 h-96 bg-purple-400 rounded-full blur-3xl bottom-20 right-10"
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl p-8 w-full max-w-md border border-white/40"
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Create Your Account ✨</h2>
        <p className="text-center text-gray-500 mb-8">Join our community and start exploring!</p>
        <form onSubmit={handleSignUp} className="space-y-5">
          <label className="block text-gray-700 font-semibold mb-2">Name</label>
          <input type="text" name="name" placeholder="Full name" required className="input w-full" />
          <label className="block text-gray-700 font-semibold mb-2">Phot URL</label>
          <input type="text" name="photoURL" placeholder="Photo URL" required className="input w-full" />
          <label className="block text-gray-700 font-semibold mb-2">Email</label>
          <input type="email" name="email" placeholder="you@example.com" required className="input w-full" />
          <label className="block text-gray-700 font-semibold mb-2">Password</label>
          <input type="password" name="password" placeholder="••••••••" required className="input w-full" />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-orangeColor text-white py-3 rounded-lg font-bold hover:bg-orange-500 transition duration-300 shadow-md"
          >
            {loading ? "Creating..." : "Sign Up"}
          </button>
        </form>

        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-gray-300" />
          <span className="px-3 text-gray-500 text-sm">OR</span>
          <div className="flex-grow h-px bg-gray-300" />
        </div>

        <button
          onClick={handleGoogleLogin}
          className="flex items-center justify-center w-full border border-gray-300 py-3 rounded-lg bg-white hover:bg-gray-100 transition duration-300 shadow-sm"
        >
          <FcGoogle size={22} className="mr-2" /> Continue with Google
        </button>

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
