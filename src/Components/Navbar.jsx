import { useState, useEffect, useContext } from "react";
import { CgMenuGridO, CgShoppingCart } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import logo from "../assets/logo.png";
import MyLinks from "./MyLinks";
import { Link, useNavigate } from "react-router"; // ✅ updated import
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = ({ cartCount }) => {
  const [showSearch, setShowSearch] = useState(false);
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
          </ul>
        </div>

        {/* Menu Buttons */}
        <div className="flex items-center gap-2 md:gap-5 relative">
          <button onClick={() => setShowSearch(true)}>
            <CiSearch size={22} />
          </button>

          <button className="relative">
            <CgShoppingCart size={22} />
            <span className="absolute -top-3 -right-1 bg-greenColor w-4 h-4 text-white rounded-full text-xs text-center">
              {cartCount}
            </span>
          </button>

          {/* Conditional Login / User */}
          {user ? (
            <div className="relative group">
              <img
                src={user?.photoURL || "https://i.ibb.co/2kRzVQ9/default-avatar.png"}
                alt="avatar"
                className="w-10 h-10 rounded-full border-2 border-orangeColor cursor-pointer"
              />
              <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300">
                <Link to="/profile" className="block px-4 py-2 text-gray-700 hover:bg-orange-100">
                  Profile
                </Link>
                <button
                  onClick={handleLogout} // ✅ use updated logout handler
                  className="w-full text-left px-4 py-2 text-gray-700 hover:bg-orange-100"
                >
                  Logout
                </button>
              </div>
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
      {showSearch && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-md flex flex-col items-center justify-center z-[999]">
          <button
            onClick={() => setShowSearch(false)}
            className="absolute top-6 right-8 text-white text-3xl cursor-pointer"
          >
            <IoClose />
          </button>

          <div className="relative w-full max-w-md px-6">
            <CiSearch size={22} className="absolute text-white left-8 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search here..."
              className="w-full py-3 pl-12 pr-4 rounded-lg outline-none text-white bg-transparent border border-white/40 placeholder-white/80"
              autoFocus
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
