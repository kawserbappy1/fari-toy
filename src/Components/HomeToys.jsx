import React from "react";
import ToyCard from "./ToyCard";
import { Link } from "react-router";

const HomeToys = ({ allToys }) => {
  return (
    <div className="bg-base-200 w-full mx-auto text-center p-5 md:p-10">
      <h1 className="text-5xl font-knewave text-center">Popular toys </h1>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 ">
        {allToys.slice(0, 6).map((toys) => (
          <ToyCard key={toys.toyId} toys={toys}></ToyCard>
        ))}
      </div>
      <Link to="/shop" className="btn capitalize font-bold mt-10 bg-orangeColor text-white tracking-wider rounded-lg ">
        view more
      </Link>
    </div>
  );
};

export default HomeToys;
