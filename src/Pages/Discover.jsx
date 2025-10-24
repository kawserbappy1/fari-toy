import { Helmet } from "react-helmet";

import { FaStar, FaFire, FaChild, FaGift, FaPuzzlePiece, FaCar, FaRobot, FaBaby } from "react-icons/fa";
import { Link } from "react-router";

const Discover = () => {
  const categories = [
    { name: "Learning Toys", icon: <FaPuzzlePiece />, color: "bg-yellow-100" },
    { name: "Remote Cars", icon: <FaCar />, color: "bg-blue-100" },
    { name: "Baby Toys", icon: <FaBaby />, color: "bg-pink-100" },
    { name: "Robots", icon: <FaRobot />, color: "bg-green-100" },
  ];

  const featuredToys = [
    {
      name: "Smart Learning Cube",
      price: "$29.99",
      image: "https://i.ibb.co.com/MD0tNrNR/1.jpg",
      tag: "Best Seller",
    },
    {
      name: "Cute Teddy Bear",
      price: "$19.99",
      image: "https://i.ibb.co.com/JjsGztY4/10.jpg",
      tag: "Hot",
    },
    {
      name: "Robo-Dino",
      price: "$34.99",
      image: "https://i.ibb.co.com/tNJjwr1/14.jpg",
      tag: "Trending",
    },
  ];
  return (
    <>
      <Helmet>
        <title>Discover|| FARI TOY</title>
      </Helmet>

      <div className="bg-gradient-to-b from-pink-50 to-blue-50   py-12 px-6">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-center text-pink-600  mb-6 flex justify-center items-center gap-2">
            <FaStar className="text-yellow-400" /> Discover Amazing Toys
          </h1>
          <p className="text-center text-gray-600  mb-12">
            Explore trending, educational, and fun toys your kids will love 🎁
          </p>

          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-gray-800  mb-6 flex items-center gap-2">
              <FaFire className="text-red-500" /> Trending Now
            </h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
              {featuredToys.map((toy, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
                >
                  <div className="relative">
                    <img src={toy.image} alt={toy.name} className="w-full h-56 object-cover" />
                    <span className="absolute top-3 left-3 bg-pink-500 text-white text-sm px-3 py-1 rounded-full shadow-md">
                      {toy.tag}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-semibold text-gray-800 ">{toy.name}</h3>
                    <p className="text-pink-600  font-bold mt-2">{toy.price}</p>
                    <button className="mt-4 w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-xl font-semibold transition">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800  mb-6 flex items-center gap-2">
              <FaGift className="text-purple-500" /> Explore by Category
            </h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              {categories.map((cat, index) => (
                <div
                  key={index}
                  className={`${cat.color}  rounded-xl shadow-md p-6 text-center hover:scale-105 transition-transform duration-300`}
                >
                  <div className="text-4xl text-pink-500 mb-3 flex justify-center">{cat.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-800 ">{cat.name}</h3>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-16 text-center bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-2xl shadow-xl py-10 px-6">
            <h2 className="text-3xl font-bold mb-3">Let’s Discover the Joy!</h2>
            <p className="mb-6">Find the perfect toy that sparks imagination and brings happiness to every child 💖</p>
            <Link
              to={"/shop"}
              className="bg-white text-pink-600 font-semibold py-2 px-6 rounded-xl hover:bg-pink-100 transition"
            >
              Start Shopping
            </Link>
          </section>
        </div>
      </div>
    </>
  );
};

export default Discover;
