import React, { Suspense, lazy, use } from "react";
import HomeSlider from "../Components/HomeSlider";
import DiscountToys from "../Components/DiscountToys";
import ChildEducation from "../Components/ChildEducation";

const HomeToys = lazy(() => import("../Components/HomeToys"));
const toysResponse = fetch("/toy.json").then((res) => res.json());

function HomeToysWrapper() {
  const allToys = use(toysResponse);
  return <HomeToys allToys={allToys} />;
}

const Home = () => {
  return (
    <div>
      <HomeSlider />
      <section className="container mx-auto mt-20 mb-10">
        <Suspense
          fallback={
            <div className="flex justify-center items-center py-20">
              <span className="loading loading-spinner loading-xl text-orangeColor"></span>
            </div>
          }
        >
          <HomeToysWrapper />
        </Suspense>
      </section>
      <section className="container mx-auto mt-20 mb-10">
        <DiscountToys />
      </section>
      <section className="container mx-auto mt-20 mb-10">
        <ChildEducation />
      </section>
    </div>
  );
};

export default Home;
