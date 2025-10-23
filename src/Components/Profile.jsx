import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { AuthContext } from "../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [isEditing, setIsEditing] = useState(false);
  const [displayName, setDisplayName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [error, setError] = useState("");
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

  const handleUpdate = async (e) => {
    e.preventDefault();
    setError("");
    let profileUpdated = false;
    if (user.displayName !== displayName || user.photoURL !== photoURL) {
      try {
        await updateProfile(user, {
          displayName: displayName,
          photoURL: photoURL,
        });
        profileUpdated = true;
      } catch (err) {
        console.error("Profile update error:", err);
        setError(`Failed to update profile: ${err.message}`);
      }
    }
    if (error) {
      Swal.fire({
        icon: "error",
        title: "Update Failed!",
        text: error,
      });
    } else if (profileUpdated) {
      Swal.fire({
        icon: "success",
        title: "Updated Successfully!",
        text: "Your profile information has been saved.",
        showConfirmButton: false,
        timer: 2000,
      });
      setIsEditing(false);
    } else {
      Swal.fire({
        icon: "info",
        title: "No Changes",
        text: "No updates were made to your profile.",
        showConfirmButton: false,
        timer: 2000,
      });
      setIsEditing(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>PROFILE || FARI TOY</title>
      </Helmet>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-pink-50 to-orange-100 px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl p-8 w-full max-w-lg border border-white/40 text-center"
        >
          <img
            src={photoURL || "https://i.ibb.co/6DYM05G/user.png"}
            alt="Profile"
            className="w-28 h-28 mx-auto rounded-full object-cover border-4 border-orangeColor shadow-md mb-4"
          />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{user.displayName || "Anonymous User"}</h2>
          <p className="text-gray-600 mb-6">{user.email}</p>

          {/* Removed: Display of success/error state here, as Swal will handle it */}

          {isEditing ? (
            /* --- EDIT MODE FORM --- */
            <form
              onSubmit={handleUpdate}
              className="text-left space-y-4 bg-white/60 p-5 rounded-2xl border border-white/50 shadow-inner"
            >
              {/* ... (Your Name, Photo URL, Email fields remain the same) ... */}

              {/* Name Input */}
              <div>
                <label htmlFor="displayName" className="font-semibold text-gray-700 block mb-1">
                  Full Name:
                </label>
                <input
                  id="displayName"
                  type="text"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  placeholder="Enter new name"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-orangeColor focus:border-orangeColor"
                />
              </div>

              {/* Photo URL Input */}
              <div>
                <label htmlFor="photoURL" className="font-semibold text-gray-700 block mb-1">
                  Photo URL:
                </label>
                <input
                  id="photoURL"
                  type="url"
                  value={photoURL}
                  onChange={(e) => setPhotoURL(e.target.value)}
                  placeholder="Enter new photo URL"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-orangeColor focus:border-orangeColor"
                />
              </div>

              {/* Email (Read-only) */}
              <div>
                <label className="font-semibold text-gray-700 block mb-1">Email:</label>
                <input
                  type="email"
                  value={user.email}
                  readOnly
                  className="w-full p-2 border border-gray-200 rounded-lg bg-gray-100 text-gray-500 cursor-not-allowed"
                />
                <p className="text-sm text-gray-500 mt-1">Email cannot be changed.</p>
              </div>

              {/* Password (Read-only for visual feedback) */}
              <div>
                <span className="font-semibold text-gray-700">Password: </span>
                <span className="text-gray-600">******** (Not editable here)</span>
              </div>

              <div className="flex justify-end space-x-3 pt-3">
                <button
                  type="button"
                  onClick={() => {
                    setIsEditing(false);
                    // Reset state to current user values on cancel
                    setDisplayName(user.displayName || "");
                    setPhotoURL(user.photoURL || "");
                    setError("");
                  }}
                  className="px-4 py-2 bg-gray-400 text-white font-bold rounded-lg hover:bg-gray-500 transition duration-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition duration-200"
                >
                  Save Changes
                </button>
              </div>
            </form>
          ) : (
            /* --- VIEW MODE DISPLAY --- */
            <>
              <div className="text-left space-y-3 bg-white/60 p-5 rounded-2xl border border-white/50 shadow-inner">
                {/* ... (Your view mode details remain the same) ... */}
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
                  <span className="text-gray-600">******** (Not editable here)</span>
                </div>
              </div>

              <button
                onClick={() => {
                  setIsEditing(true);
                  // Initialize state with current user data when starting edit
                  setDisplayName(user.displayName || "");
                  setPhotoURL(user.photoURL || "");
                  setError("");
                }}
                className="mt-6 px-6 py-3 bg-orange-500 text-white font-bold rounded-xl hover:bg-orange-600 transition duration-200 shadow-md"
              >
                Edit Profile
              </button>
            </>
          )}
        </motion.div>
      </div>
    </>
  );
};

export default Profile;
