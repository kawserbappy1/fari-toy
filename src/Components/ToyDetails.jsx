import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate, useOutletContext } from "react-router";
import { toast } from "react-toastify";

const ToyDetails = ({ toy }) => {
  const navigate = useNavigate();
  const { setCartCount } = useOutletContext();

  const handleAddToCart = () => {
    setCartCount((prev) => prev + 1);
    toast.success("This item Add to cart Successfully");
  };

  const fullStars = Math.floor(toy.rating);
  const hasHalfStar = toy.rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="container mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-orangeColor font-semibold mb-6 hover:underline"
        >
          <IoIosArrowRoundBack size={24} /> Back
        </button>

        <div className="bg-white shadow-lg rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          <div className="flex justify-center items-center">
            <img src={toy.pictureURL} alt={toy.toyName} className="rounded-xl object-cover w-full max-w-md" />
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">{toy.toyName}</h1>
              <p className="text-sm text-gray-500 mb-3">{toy.subCategory}</p>
              <div className="mb-4">
                <p className="text-gray-700 font-medium">
                  Seller: <span className="text-gray-600">{toy.sellerName}</span>
                </p>
                <p className="text-gray-700">
                  Email: <span className="text-blue-600">{toy.sellerEmail}</span>
                </p>
              </div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-bold text-orangeColor">${toy.price}</span>
                <span className="text-gray-600">
                  Available: <span className="font-semibold text-green-600">{toy.availableQuantity}</span>
                </span>
              </div>
              <div className="flex items-center text-yellow-500 mb-4">
                {Array.from({ length: fullStars }).map((_, i) => (
                  <FaStar key={`full-${i}`} />
                ))}
                {hasHalfStar && <FaStarHalfAlt />}
                {Array.from({ length: emptyStars }).map((_, i) => (
                  <FaRegStar key={`empty-${i}`} />
                ))}
                <span className="ml-2 text-gray-700">{toy.rating.toFixed(1)}</span>
              </div>
              <p className="text-gray-700 leading-relaxed text-justify">{toy.description}</p>
            </div>
            <button
              onClick={handleAddToCart}
              className="mt-6  bg-orangeColor hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition-all cursor-pointer"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
