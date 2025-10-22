import React from "react";
import { useLoaderData } from "react-router";

const Shop = () => {
  const allToys = useLoaderData();
  console.log(allToys);
  return (
    <div>
      <h1>Shop</h1>
    </div>
  );
};

export default Shop;
