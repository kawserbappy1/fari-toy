import React, { Suspense, use } from "react";
import HomeSlider from "../Components/HomeSlider";
import DiscountToys from "../Components/DiscountToys";
import ChildEducation from "../Components/ChildEducation";
import HomeToys from "../Components/HomeToys";
const toysResponse = fetch("/toy.json").then((res) => res.json());
const Home = () => {
  const allToys = use(toysResponse);

  return (
    <div>
      <HomeSlider></HomeSlider>
      <section className="container mx-auto mt-20 mb-10">
        <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
          <HomeToys allToys={allToys}></HomeToys>
        </Suspense>
      </section>
      <section className="container mx-auto mt-20 mb-10">
        <DiscountToys></DiscountToys>
      </section>
      <section className="container mx-auto mt-20 mb-10">
        <ChildEducation></ChildEducation>
      </section>
    </div>
  );
};

export default Home;
