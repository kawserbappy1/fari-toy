import React from "react";
import { Link } from "react-router";

const Blog = () => {
  return (
    <div className="w-full min-h-[70vh] flex flex-col items-center justify-center bg-blueColor">
      <h1 className="text-2xl text-white">Blog Page Publish As soon As Possile</h1>

      <Link to={"/"} className="bg-orangeColor px-6 py-2 text-white mt-10 font-bold">
        Go to Home
      </Link>
    </div>
  );
};

export default Blog;
