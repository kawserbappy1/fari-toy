import React from "react";
import toy from "../assets/toy.png";
import boystoy from "../assets/boystoy.png";
import girlstoy from "../assets/girlstoy.png";
import { IoIosArrowRoundForward } from "react-icons/io";

const DiscountToys = () => {
  return (
    <div>
      <div className="bg-bg2 flex flex-col md:flex-row gap-5 items-center p-4 rounded-xl mb-5">
        <div className="text-center md:text-start flex-1">
          <h2 className="text-2xl md:text-3xl lg:text-5xl capitalize font-knewave font-bold tracking-wider mb-5 ">
            {" "}
            15% Off all toys today{" "}
          </h2>
          <p className="lg:max-w-sm">
            We are currently offering a substantial discount of 15% on all toys available in our store
          </p>
          <button className="px-6 py-3 bg-orangeColor text-white capitalize flex gap-5 items-center justify-center rounded-full mt-6 cursor-pointer mx-auto md:mx-0">
            <span>shop now </span> <IoIosArrowRoundForward />
          </button>
        </div>
        <div className="flex-1">
          <img src={toy} alt="" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-5 ">
        <div className="flex items-center gap-5 bg-bg1 p-10 rounded-xl">
          <div className="flex-1">
            <h2 className="font-knewave capitalize text-2xl lg:text-4xl mb-5">toy for boys</h2>
            <p>the perfect toys for boys combine curisity and activity</p>
            <button className="px-4 py-2 md:px-6 md:py-3 bg-orangeColor text-white capitalize flex gap-2 items-center  rounded-full mt-6 cursor-pointer ">
              <span>shop now </span> <IoIosArrowRoundForward />
            </button>
          </div>
          <div className="flex-1">
            <img src={boystoy} alt="" />
          </div>
        </div>
        <div className="flex items-center gap-10 bg-bg2 p-10 rounded-xl">
          <div className="">
            <h2 className="font-knewave capitalize text-2xl lg:text-4xl mb-5">toy for girls</h2>
            <p>the perfect toys for boys combine curisity and activity</p>
            <button className="px-6 py-3 bg-orangeColor text-white capitalize flex gap-2 items-center justify-center rounded-full mt-6 cursor-pointer mx-auto md:mx-0">
              <span>shop now </span> <IoIosArrowRoundForward />
            </button>
          </div>
          <div>
            <img src={girlstoy} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountToys;
