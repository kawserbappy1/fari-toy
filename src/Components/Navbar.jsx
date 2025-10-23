import { useState, useEffect, useContext } from "react";
import { CgMenuGridO, CgShoppingCart } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import logo from "../assets/logo.png";
import MyLinks from "./MyLinks";
import { Link, useNavigate } from "react-router"; // ✅ updated import
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const navigate = useNavigate(); // ✅ navigation hook

  const { user, logOut } = useContext(AuthContext);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Logout handler with redirect
  const handleLogout = () => {
    logOut()
      .then(() => {
        Swal.fire({
          title: "Logged Out",
          text: "You have successfully logged out.",
          icon: "success",
          confirmButtonColor: "#f97316",
          timer: 1500,
          showConfirmButton: false,
        });
        navigate("/"); // ✅ redirect to home after logout
      })
      .catch((err) => {
        Swal.fire({
          title: "Logout Failed",
          text: err.message,
          icon: "error",
        });
      });
  };

  return (
    <div
      className={`sticky top-0 z-50 transition-all duration-300 ${isSticky ? "shadow-md bg-white" : "bg-transparent"}`}
    >
      <nav className="container mx-auto flex justify-between items-center h-16 px-2 md:px-4">
        {/* Logo */}
        <div>
          <Link to="/">
            <img src={logo} alt="Logo" className="w-30" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex">
          <ul className="flex items-center gap-8">
            <li>
              <MyLinks to="/">Home</MyLinks>
            </li>
            <li>
              <MyLinks to="/shop">Shop</MyLinks>
            </li>
            <li>
              <MyLinks to="/discover">Discover</MyLinks>
            </li>
            <li>
              <MyLinks to="/help">Help</MyLinks>
            </li>
            <li>
              <MyLinks to="/blog">Blog</MyLinks>
            </li>
            <li>
              <MyLinks to="/profile">My Profile</MyLinks>
            </li>
          </ul>
        </div>

        {/* Menu Buttons */}
        <div className="flex items-center gap-2 md:gap-5 relative">
          {/* Conditional Login / User */}
          {user ? (
            <div className="flex  gap-2">
              <div className="relative group">
                <img
                  src={user?.photoURL}
                  alt="avatar"
                  className="w-10 h-10 rounded-full border-2 border-orangeColor cursor-pointer"
                />
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-1 bg-gray-800 text-white text-xs px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap top-full">
                  {user.displayName}
                </div>
              </div>
              <button
                onClick={handleLogout} // ✅ use updated logout handler
                className="px-4 py-2 text-white bg-orangeColor hover:bg-orange-500 rounded-md"
              >
                Logout
              </button>
              <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            </div>
          ) : (
            <Link to="/login" className="btn bg-orangeColor text-white font-bold rounded-md">
              Login
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setShowMenu(!showMenu)} className="md:hidden z-50">
          {showMenu ? <IoClose size={22} /> : <CgMenuGridO size={22} />}
        </button>
      </nav>

      {/* Search Box */}
    </div>
  );
};

export default Navbar;
