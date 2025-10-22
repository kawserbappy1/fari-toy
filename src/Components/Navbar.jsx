import { useState, useEffect } from "react";
import { CgMenuGridO, CgShoppingCart } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import logo from "../assets/logo.png";
import MyLinks from "./MyLinks";
import { Link } from "react-router";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`sticky top-0 z-50 transition-all duration-300 ${isSticky ? "shadow-md" : ""}`}
      style={{ position: "sticky" }}
    >
      {/* Navbar */}
      <nav className="container mx-auto flex justify-between items-center h-16 px-2 md:px-4">
        {/* Logo */}
        <div>
          <Link to="/">
            <img src={logo} alt="Fari Toy" className="w-30" />
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
        <div className="flex items-center gap-2 md:gap-5">
          <button onClick={() => setShowSearch(true)}>
            <CiSearch size={22} />
          </button>

          <button className="relative">
            <CgShoppingCart size={22} />
            <span className="absolute -top-3 -right-1 bg-greenColor w-4 h-4 text-white rounded-full text-xs text-center">
              0
            </span>
          </button>

          <Link to="/login" className="btn bg-orangeColor text-white font-bold rounded-md">
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setShowMenu(!showMenu)} className="md:hidden z-50">
          {showMenu ? (
            <IoClose size={22} className="cursor-pointer text-white" />
          ) : (
            <CgMenuGridO size={22} className="cursor-pointer" />
          )}
        </button>
      </nav>

      {/* Full Search Box */}
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

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute bg-purpleColor top-0 w-full min-h-screen py-20 transition-all duration-500 ${
          showMenu ? "left-0" : "-left-full"
        }`}
      >
        <ul className="flex flex-col items-center gap-8 text-white">
          <li>
            <MyLinks onClick={() => setShowMenu(false)} to="/">
              Home
            </MyLinks>
          </li>
          <li>
            <MyLinks onClick={() => setShowMenu(false)} to="/shop">
              Shop
            </MyLinks>
          </li>
          <li>
            <MyLinks onClick={() => setShowMenu(false)} to="/discover">
              Discover
            </MyLinks>
          </li>
          <li>
            <MyLinks onClick={() => setShowMenu(false)} to="/help">
              Help
            </MyLinks>
          </li>
          <li>
            <MyLinks onClick={() => setShowMenu(false)} to="/blog">
              Blog
            </MyLinks>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
