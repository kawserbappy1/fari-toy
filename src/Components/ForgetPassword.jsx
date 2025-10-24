import React, { useState, useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation } from "react-router";

const ForgetPassword = () => {
  const { sendPassResetEmailFunc } = useContext(AuthContext);
  const location = useLocation();

  const prefilledEmail = location.state?.email || "";

  const [email, setEmail] = useState(prefilledEmail);

  const handleForgotPassword = (e) => {
    e.preventDefault();
    if (!email) {
      Swal.fire({
        title: "Oops!",
        text: "Please enter your email first",
        icon: "warning",
        confirmButtonColor: "#f97316",
      });
      return;
    }

    sendPassResetEmailFunc(email)
      .then(() => {
        Swal.fire({
          title: "Email Sent!",
          text: "Check your inbox to reset your password",
          icon: "success",
          confirmButtonColor: "#f97316",
        });
      })
      .catch((err) =>
        Swal.fire({
          title: "Failed",
          text: err.message,
          icon: "error",
          confirmButtonColor: "#f97316",
        })
      );
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-pink-50 to-blue-50 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-xl">
        <h2 className="text-3xl font-bold text-orangeColor mb-6 text-center">Reset Password</h2>
        <p className="text-gray-600 mb-6 text-center">
          Enter your email address and we’ll send you a link to reset your password.
        </p>

        <form onSubmit={handleForgotPassword} className="flex flex-col gap-4">
          <label className="flex flex-col text-gray-700 font-medium">
            Email Address
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:purpleColor"
              required
            />
          </label>

          <button
            type="submit"
            className="mt-2 w-full bg-purpleColor text-white py-3 rounded-xl font-semibold hover:bg-purpleColor/90 transition-all cursor-pointer"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
