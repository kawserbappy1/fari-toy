// import React, { useEffect, useState } from "react";
import ShopBanner from "../Components/ShopBanner";
import AllToys from "../Components/AllToys";
import { useEffect, useState } from "react";

const Shop = () => {
  const [allToys, setAllToys] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("/toy.json")
      .then((res) => res.json())
      .then((data) => {
        setAllToys(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading toys:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <span className="loading loading-spinner loading-lg text-orangeColor"></span>
      </div>
    );
  }

  return (
    <div>
      <ShopBanner />
      <AllToys allToys={allToys} />
    </div>
  );
};

export default Shop;
