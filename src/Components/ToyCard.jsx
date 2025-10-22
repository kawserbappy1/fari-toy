import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { IoHeartSharp } from "react-icons/io5";
import { RiShoppingBag3Line } from "react-icons/ri";

const ToyCard = ({ toys }) => {
  const { pictureURL, toyName, rating, availableQuantity, price } = toys;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="card bg-base-100 border border-purpleColor/10 shadow-sm relative group   ">
      <figure className=" overflow-hidden shadow p-4">
        <img
          src={pictureURL}
          alt={toyName}
          className="size-60 h-80 w-full object-cover rounded-lg transition-all duration-500 hover:scale-110 "
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title text-xl capitalize py-2 border-b border-b-purpleColor/10">{toyName}</h2>

        <div className="flex justify-between items-center text-sm text-gray-600 py-5 border-b border-b-purpleColor/10">
          <span className="btn rounded-full bg-bg2 text-xs">{availableQuantity} in stock</span>
          <span className="btn bg-bg1 rounded-full font-bold font-knewave">$ {price}</span>
        </div>

        <div className="card-actions justify-between items-center mt-2">
          <div className="flex items-center text-yellow-500">
            {Array.from({ length: fullStars }).map((_, i) => (
              <FaStar key={`full-${i}`} />
            ))}
            {hasHalfStar && <FaStarHalfAlt />}
            {Array.from({ length: emptyStars }).map((_, i) => (
              <FaRegStar key={`empty-${i}`} />
            ))}
            <span className="ml-2 text-gray-600">{rating.toFixed(1)}</span>
          </div>

          <button className="btn bg-orangeColor text-white">See Details</button>
        </div>
      </div>

      <div className=" absolute top-4 right-4 gap-2 transition-all duration-1000 hidden group-hover:flex ">
        <button className="w-10 h-10 bg-pinkColor grid place-items-center rounded-full text-white cursor-pointer">
          <IoHeartSharp size={20} />
        </button>
        <button className="w-10 h-10 bg-pinkColor grid place-items-center rounded-full text-white cursor-pointer">
          <RiShoppingBag3Line size={20} />
        </button>
      </div>
    </div>
  );
};

export default ToyCard;
