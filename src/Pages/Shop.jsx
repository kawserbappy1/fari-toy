import ShopBanner from "../Components/ShopBanner";
import AllToys from "../Components/AllToys";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import BottomToTop from "../Components/BottomToTop";

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
      <Helmet>
        <title>SHOP || FARI TOY</title>
      </Helmet>
      <ShopBanner />
      <AllToys allToys={allToys} />
      <BottomToTop></BottomToTop>
    </div>
  );
};

export default Shop;
