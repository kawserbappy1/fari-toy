import React from "react";
import toy3 from "../assets/toy3.png";
const ShopBanner = () => {
  return (
    <div className="container mx-auto bg-greenColor p-10 flex gap-5 flex-col-reverse md:flex-row items-center mt-10">
      <div className="flex-1">
        <h2 className="text-3xl font-knewave text-white mb-5">Gifts and toys for 13 to young adults</h2>
        <p className="max-w-md">
          Estock sets encourage young adults to pursue their passion for buildin, engineering, stem and robotics in a
          creative way.
        </p>
      </div>
      <div className="flex-1">
        <img src={toy3} alt="" className="max-w-2xl mx-auto" />
      </div>
    </div>
  );
};

export default ShopBanner;
