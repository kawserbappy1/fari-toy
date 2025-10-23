import { useState, useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const { logInFunction, googleLogin } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // 🟢 Handle email/password login
  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);

    logInFunction(email, password)
      .then(() => {
        Swal.fire({
          title: "Welcome Back! 🎉",
          text: "Logged in successfully!",
          icon: "success",
          confirmButtonColor: "#f97316",
        });
        navigate("/");
      })
      .catch((err) =>
        Swal.fire({
          title: "Login Failed",
          text: err.message,
          icon: "error",
          confirmButtonColor: "#f97316",
        })
      )
      .finally(() => setLoading(false));
  };

  // 🟢 Handle Google login
  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        Swal.fire({
          title: "Google Login Success 🚀",
          text: "Welcome back!",
          icon: "success",
          confirmButtonColor: "#f97316",
        });
        navigate("/");
      })
      .catch((err) =>
        Swal.fire({
          title: "Google Login Failed",
          text: err.message,
          icon: "error",
          confirmButtonColor: "#f97316",
        })
      );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 via-pink-50 to-purple-100 px-4 relative overflow-hidden">
      {/* Floating Background Decorations */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 0.1, y: 0 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
        className="absolute w-96 h-96 bg-orange-300 rounded-full blur-3xl top-20 left-10"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 0.1, y: 0 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
        className="absolute w-96 h-96 bg-purple-400 rounded-full blur-3xl bottom-20 right-10"
      ></motion.div>

      {/* Login Card */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl p-8 w-full max-w-md border border-white/40"
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Welcome Back 👋</h2>
        <p className="text-center text-gray-500 mb-8">Please log in to your account</p>

        {/* 🔶 Login Form */}
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orangeColor focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orangeColor focus:outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-orangeColor text-white py-3 rounded-lg font-bold hover:bg-orange-500 transition duration-300 shadow-md"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="px-3 text-gray-500 text-sm">OR</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        {/* 🟢 Google Login */}
        <button
          onClick={handleGoogleLogin}
          className="flex items-center justify-center w-full border border-gray-300 py-3 rounded-lg bg-white hover:bg-gray-100 transition duration-300 shadow-sm"
        >
          <FcGoogle size={22} className="mr-2" />
          <span className="font-semibold text-gray-700">Continue with Google</span>
        </button>

        {/* Register Redirect */}
        <p className="text-center text-gray-600 mt-8">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-orangeColor font-semibold hover:underline">
            Register here
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
