import React from "react";
import { Helmet } from "react-helmet";
import {
  FaPhoneAlt,
  FaQuestionCircle,
  FaUserEdit,
  FaShoppingCart,
  FaUndoAlt,
  FaEdit,
  FaUserPlus,
} from "react-icons/fa";
import BottomToTop from "../Components/BottomToTop";

const Help = () => {
  return (
    <>
      <Helmet>
        <title>HELP || FARI TOY</title>
      </Helmet>
      <div className="bg-gradient-to-b from-pink-50 to-blue-50  py-12 px-6">
        <div className="container mx-auto bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-4xl font-bold text-center text-pink-600  mb-10 flex items-center justify-center gap-2">
            <FaQuestionCircle className="w-8 h-8" />
            Help & Support
          </h1>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-pink-100  rounded-xl shadow-md hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-3 mb-3 text-pink-600 ">
                <FaShoppingCart />
                <h2 className="text-xl font-semibold">How to Order</h2>
              </div>
              <p className="text-gray-700">
                Choose your favorite toys, add them to your cart, and click the “Checkout” button. Then fill in your
                delivery details and confirm your order securely.
              </p>
            </div>

            <div className="p-6 bg-blue-100  rounded-xl shadow-md hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-3 mb-3 text-blue-600 ">
                <FaUndoAlt />
                <h2 className="text-xl font-semibold">How to Refund</h2>
              </div>
              <p className="text-gray-700 ">
                If you receive a damaged or wrong product, contact our support team within 7 days. We’ll guide you
                through our easy refund process.
              </p>
            </div>

            <div className="p-6 bg-yellow-100 rounded-xl shadow-md hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-3 mb-3 text-yellow-600 ">
                <FaEdit />
                <h2 className="text-xl font-semibold">How to Change Order</h2>
              </div>
              <p className="text-gray-700 ">
                You can change your order details (like quantity or address) before it’s shipped. Go to “My Orders” →
                select order → click “Edit Order”.
              </p>
            </div>

            <div className="p-6 bg-green-100  rounded-xl shadow-md hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-3 mb-3 text-green-600 ">
                <FaUserEdit />
                <h2 className="text-xl font-semibold">How to Edit Profile</h2>
              </div>
              <p className="text-gray-700 ">
                Visit your profile page and click the “Edit Profile” button. You can update your name, email, or
                delivery address anytime.
              </p>
            </div>

            <div className="p-6 bg-purple-100 d rounded-xl shadow-md hover:scale-105 transition-transform duration-300 md:col-span-2">
              <div className="flex items-center gap-3 mb-3 text-purple-600 ">
                <FaUserPlus />
                <h2 className="text-xl font-semibold">How to Register</h2>
              </div>
              <p className="text-gray-700 ">
                Click on the “Register” or “Sign Up” button on the top-right corner of our website. Fill out the form
                with your email, password, and details to create an account.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <h2 className="text-2xl font-bold text-gray-800  mb-3 flex justify-center items-center gap-2">
              <FaPhoneAlt className="w-6 h-6 text-pink-500" /> Contact Us
            </h2>
            <p className="text-gray-700 ">
              Need help? Call us anytime at <span className="font-semibold text-pink-600">+880-1234-567890</span> or
              email at <span className="font-semibold text-blue-600 ">support@faritoy.com</span>
            </p>
          </div>
        </div>
      </div>
      <BottomToTop></BottomToTop>
    </>
  );
};

export default Help;
