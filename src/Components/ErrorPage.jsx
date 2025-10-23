import { motion } from "framer-motion";
import { Link } from "react-router";
import { FaArrowLeft } from "react-icons/fa";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-orange-100 via-pink-50 to-purple-100 relative overflow-hidden">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 0.15 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
        className="absolute w-80 h-80 bg-orange-300 rounded-full blur-3xl top-10 left-20"
      />
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 0.15 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
        className="absolute w-96 h-96 bg-purple-400 rounded-full blur-3xl bottom-10 right-20"
      />
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl p-10 w-[90%] max-w-md border border-white/40 text-center"
      >
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-9xl font-extrabold text-orangeColor"
        >
          404
        </motion.h1>

        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-2xl font-semibold text-gray-800 mt-4"
        >
          Oops! Page Not Found 😢
        </motion.h2>

        <p className="text-gray-600 mt-3">The page you’re looking for doesn’t exist or was moved.</p>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-orangeColor hover:bg-orange-500 text-white font-bold px-6 py-3 rounded-full shadow-lg transition duration-300"
          >
            <FaArrowLeft /> Back to Home
          </Link>
        </motion.div>
      </motion.div>

      <motion.span
        animate={{
          y: [0, -15, 0],
        }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-16 text-6xl"
      >
        🧭
      </motion.span>
    </div>
  );
};

export default ErrorPage;
