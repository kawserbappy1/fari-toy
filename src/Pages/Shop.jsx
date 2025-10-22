import React from "react";
import { useLoaderData } from "react-router";
import ShopBanner from "../Components/ShopBanner";
import AllToys from "../Components/AllToys";

const Shop = () => {
  const allToys = useLoaderData();

  return (
    <div>
      <ShopBanner></ShopBanner>
      <AllToys allToys={allToys}></AllToys>
    </div>
  );
};

export default Shop;
