import React from "react";
import { BsFillTelephoneFill, BsMegaphoneFill } from "react-icons/bs";
const TopNavbar = () => {
  return (
    <div className=" bg-purpleColor border-b border-b-bg1/10">
      <div className="container mx-auto flex  items-center justify-between bg-purpleColor px-2 py-2 md:px-4">
        <div className="flex gap-2 items-center text-white font-poppins text-sm md:text-base">
          <BsFillTelephoneFill />
          <span>(000) 555-111-000</span>
        </div>
        <div className="hidden md:flex gap-2 items-center text-white font-poppins  text-xs md:text-base">
          <BsMegaphoneFill />
          <span>Free shipping on all orders $100+ USD</span>
        </div>
        <div className="flex gap-4 items-center  font-poppins cursor-pointer text-sm md:text-base">
          <select defaultValue="Pick a language" className="text-white focus:outline-0">
            <option className="text-black">English (USA)</option>
            <option className="text-black">Bangla</option>
            <option className="text-black">Russia</option>
            <option className="text-black">English (UK)</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
