import React, { useState } from "react";
import ToyCard from "./ToyCard";

const AllToys = ({ allToys }) => {
  const [sortOrder, setSortOrder] = useState("none");
  const [searchTerm, setSearchTerm] = useState("");
  const getFilteredAndSortedItems = () => {
    let items = [...allToys];
    if (searchTerm) {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      items = items.filter(
        (toy) =>
          toy.toyName.toLowerCase().includes(lowerCaseSearchTerm) ||
          toy.sellerName.toLowerCase().includes(lowerCaseSearchTerm) ||
          toy.subCategory.toLowerCase().includes(lowerCaseSearchTerm)
      );
    }
    if (sortOrder === "lowToHighPrice") {
      return items.sort((a, b) => a.price - b.price);
    }
    if (sortOrder === "highToLowPrice") {
      return items.sort((a, b) => b.price - a.price);
    }
    if (sortOrder === "highToLowRating") {
      return items.sort((a, b) => b.rating - a.rating);
    }
    return items;
  };

  const itemsToDisplay = getFilteredAndSortedItems();

  return (
    <div className="bg-base-200 py-10 my-10 px-2">
      <div className="container mx-auto px-2 md:px-4 ">
        <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-4">
          <div className="text-xl font-bold md:w-1/3 ">
            Showing {itemsToDisplay.length} of {allToys.length} Toys
          </div>
          <div className="w-full md:w-1/3">
            <input
              type="text"
              placeholder="Search by name, seller, or category..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full border border-gray-300 shadow px-4 py-3 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="w-full md:w-1/3 md:text-right">
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="border border-gray-200 shadow px-6 py-3 rounded-md"
            >
              <option value="none">Sort By Default</option>
              <option value="lowToHighPrice">Price: Low &gt; High</option>
              <option value="highToLowPrice">Price: High &lt; Low</option>
              <option value="highToLowRating">Rating: High &lt; Low</option>
            </select>
          </div>
        </div>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          {itemsToDisplay.length > 0 ? (
            itemsToDisplay.map((toys) => <ToyCard key={toys.toyId} toys={toys}></ToyCard>)
          ) : (
            <p className="col-span-full text-center text-xl text-gray-500">No toys found matching "{searchTerm}" 😔</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllToys;
