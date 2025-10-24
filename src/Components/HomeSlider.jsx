import React from "react";
import bg1 from "../assets/bg1.png";
import bg2 from "../assets/bg2.png";
import bg3 from "../assets/bg3.png";
import bg4 from "../assets/bg4.png";
import bg5 from "../assets/bg5.png";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router";

const HomeSlider = () => {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      effect="fade"
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      loop={true}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      className="mySwiper custom-swiper"
    >
      <SwiperSlide>
        <div className="bg-purpleColor ">
          <div className="py-25 container mx-auto flex flex-col-reverse gap-10 md:flex-row items-center px-2">
            <div className="flex-1">
              <h1 className=" text-white font-knewave text-4xl lg:text-5xl capitalize mb-3 leading-16 mb-5">
                all new best latest toy collection{" "}
              </h1>
              <p className="text-white">
                Looking for toys that bring kids joy? We have a huge selection of fun and educational toys to delight
                children of all ages .
              </p>
              <Link
                to={"/shop"}
                className="px-6 py-3 bg-orangeColor text-white capitalize flex gap-2 inline-flex items-center rounded-lg mt-10 hover:bg-orangeColor/90"
              >
                <span>shop now </span> <IoIosArrowRoundForward size={20} />
              </Link>
            </div>
            <div className="flex-1 grid place-items-end">
              <img src={bg1} alt="" />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-greenColor ">
          <div className="py-25 container mx-auto flex flex-col-reverse gap-10 md:flex-row items-center px-2">
            <div className="flex-1">
              <h1 className=" text-white font-knewave text-4xl lg:text-5xl capitalize mb-3 leading-16 mb-5">
                all new best latest toy collection{" "}
              </h1>
              <p className="text-white">
                Looking for toys that bring kids joy? We have a huge selection of fun and educational toys to delight
                children of all ages .
              </p>
              <Link
                to={"/shop"}
                className="px-6 py-3 bg-purpleColor text-white capitalize flex gap-2 inline-flex items-center rounded-lg mt-10 hover:bg-purpleColor/90"
              >
                <span>shop now </span> <IoIosArrowRoundForward size={20} />
              </Link>
            </div>
            <div className="flex-1 grid place-items-end">
              <img src={bg2} alt="" />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-blueColor ">
          <div className="py-25 container mx-auto flex flex-col-reverse gap-10 md:flex-row items-center px-2">
            <div className="flex-1">
              <h1 className=" text-white font-knewave text-4xl lg:text-5xl capitalize mb-3 leading-16 mb-5">
                all new best latest toy collection{" "}
              </h1>
              <p className="text-white">
                Looking for toys that bring kids joy? We have a huge selection of fun and educational toys to delight
                children of all ages .
              </p>
              <Link
                to={"/shop"}
                className="px-6 py-3 bg-orangeColor text-white capitalize flex gap-2 items-center rounded-lg mt-10 inline-flex hover:bg-orangeColor/90"
              >
                <span>shop now </span> <IoIosArrowRoundForward size={20} />
              </Link>
            </div>
            <div className="flex-1 grid place-items-end">
              <img src={bg3} alt="" />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-orangeColor ">
          <div className="py-25 container mx-auto flex flex-col-reverse gap-10 md:flex-row items-center px-2">
            <div className="flex-1">
              <h1 className=" text-white font-knewave text-4xl lg:text-5xl capitalize mb-3 leading-16 mb-5">
                all new best latest toy collection{" "}
              </h1>
              <p className="text-white">
                Looking for toys that bring kids joy? We have a huge selection of fun and educational toys to delight
                children of all ages .
              </p>
              <Link
                to={"/shop"}
                className="px-6 py-3 bg-blueColor text-white capitalize flex gap-2 items-center rounded-lg mt-10 inline-flex hover:bg-blueColor/90"
              >
                <span>shop now </span> <IoIosArrowRoundForward size={20} />
              </Link>
            </div>
            <div className="flex-1 grid place-items-end">
              <img src={bg4} alt="" />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-pinkColor ">
          <div className="py-25 container mx-auto flex flex-col-reverse gap-10 md:flex-row items-center px-2">
            <div className="flex-1">
              <h1 className=" text-white font-knewave text-4xl lg:text-5xl capitalize mb-3 leading-16 mb-5">
                all new best latest toy collection{" "}
              </h1>
              <p className="text-white">
                Looking for toys that bring kids joy? We have a huge selection of fun and educational toys to delight
                children of all ages .
              </p>
              <Link
                to="/shop"
                className="px-6 py-3 bg-purpleColor text-white capitalize flex gap-2 items-center rounded-lg mt-10 cursor-pointer inline-flex hover:bg-purpleColor/90"
              >
                <span>shop now </span> <IoIosArrowRoundForward size={20} />
              </Link>
            </div>
            <div className="flex-1 grid place-items-end">
              <img src={bg5} alt="" />
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HomeSlider;
