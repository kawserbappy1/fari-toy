import React, { useState } from "react";
import logo from "../assets/logo.png";
import { FaCcApplePay, FaCcPaypal, FaCcVisa, FaFacebookF, FaGooglePay, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router";
import { FaSquareInstagram, FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  return (
    <div className=" bg-bg2 py-10">
      <div className="container mx-auto grid grid-cols-12 gap-5 items-center">
        <div className="col-span-12 md:col-span-6 lg:col-span-3 text-center md:text-start">
          <img src={logo} alt="Fari Toy" className="w-30 mb-5 mx-auto md:mx-0" />
          <p className="mb-4">
            Our extensive collections offers a wide range of entertaing and educational toys that are sure to delight
            kids of all ages.
          </p>
          <div className="flex gap-2 justify-center md:justify-start">
            <button className="px-2 py-1 bg-purpleColor/10 rounded-md">
              <FaCcPaypal size={30} />
            </button>
            <button className="px-2 py-1 bg-greenColor/10 rounded-md">
              <FaCcVisa size={30} />
            </button>
            <button className="px-2 py-1 bg-orangeColor/10 rounded-md">
              <FaGooglePay size={30} />
            </button>
            <button className="px-2 py-1 bg-pinkColor/10 rounded-md">
              <FaCcApplePay size={30} />
            </button>
          </div>
        </div>

        <div className="col-span-12 md:col-span-6 lg:col-span-3 text-center">
          <h2 className="text-xl font-knewave mb-5">Company</h2>
          <div>
            <ul className="flex flex-col gap-3">
              <li>
                <Link>Store Finder</Link>
              </li>
              <li>
                <Link>About Us</Link>
              </li>
              <li>
                <Link>Contact Us</Link>
              </li>
              <li>
                <Link to={"/discover"}>Privacy and Policy</Link>
              </li>
              <li>
                <Link to={"/discover"}>Terms and Condition</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-3 text-center">
          <h2 className="text-xl font-knewave mb-5">Customer Services</h2>
          <div>
            <ul className="flex flex-col gap-3">
              <li>
                <Link>Track Your Delivary</Link>
              </li>
              <li>
                <Link>Support Request</Link>
              </li>
              <li>
                <Link>Return Policy</Link>
              </li>
              <li>
                <Link>Shipping Information</Link>
              </li>
              <li>
                <Link>Payment Information</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-3 text-center">
          <h2 className="text-xl font-knewave mb-5">Usefull Links</h2>
          <div>
            <ul className="flex flex-col gap-3">
              <li>
                <Link>Affilliates</Link>
              </li>
              <li>
                <Link>Careers</Link>
              </li>
              <li>
                <Link>Franchising</Link>
              </li>
              <li>
                <Link>Gift Cards</Link>
              </li>
              <li>
                <Link>Press</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mx-auto h-[1px] w-full bg-orangeColor/30 my-5"></div>
      {/* Footer credit  */}
      <div className="container mx-auto flex gap-5 flex-col md:flex-row items-center justify-between px-2">
        <p>
          &copy; {currentYear} - All rights & reserved{" "}
          <Link className="underline text-orangeColor">Md. Kawser Hamid bappy</Link>
        </p>
        <div className="flex items-center gap-2">
          <Link
            to={"https://www.facebook.com/kawserbappy01"}
            className=" w-10 h-10 bg-purpleColor text-white grid place-items-center rounded"
          >
            <FaFacebookF className=" transition-all duration-500 hover:scale-150" />
          </Link>
          <Link
            to={"https://www.facebook.com/kawserbappy01"}
            className=" w-10 h-10 bg-pinkColor text-white grid place-items-center rounded"
          >
            <FaSquareInstagram className=" transition-all duration-500 hover:scale-150" />
          </Link>
          <Link
            to={"https://www.facebook.com/kawserbappy01"}
            className=" w-10 h-10 bg-blueColor text-white grid place-items-center rounded"
          >
            <FaLinkedin className=" transition-all duration-500 hover:scale-150" />
          </Link>
          <Link
            to={"https://www.facebook.com/kawserbappy01"}
            className=" w-10 h-10 bg-black text-white grid place-items-center rounded"
          >
            <FaXTwitter className=" transition-all duration-500 hover:scale-150" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
