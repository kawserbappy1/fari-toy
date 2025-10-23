import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import ToyDetails from "./ToyDetails";

const ShowToyDetails = () => {
  const { id } = useParams();
  const allToys = useLoaderData();
  const [toy, setToy] = useState(null);

  useEffect(() => {
    if (Array.isArray(allToys)) {
      const foundToy = allToys.find((toy) => toy.toyId.toString() === id);
      setToy(foundToy);
    }
  }, [id, allToys]);

  if (toy === null) {
    return <div className="text-center text-xl p-10">Loading toy details or toy not found...</div>;
  }
  return (
    <div className="py-10">
      <ToyDetails toy={toy} />
    </div>
  );
};

export default ShowToyDetails;
