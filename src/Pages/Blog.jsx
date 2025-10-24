import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router";
import { FaCalendarAlt, FaUser, FaSmile } from "react-icons/fa";
import BottomToTop from "../Components/BottomToTop";
const Blog = () => {
  const posts = [
    {
      title: "Top 10 Educational Toys for Smart Kids",
      author: "Admin",
      date: "Oct 15, 2025",
      image: "https://i.ibb.co.com/7xRHcPyP/17.webp",
      excerpt: "Discover our favorite toys that boost creativity, learning, and problem-solving skills in children!",
    },
    {
      title: "How to Choose Safe Toys for Toddlers",
      author: "KidzToys Team",
      date: "Oct 10, 2025",
      image: "https://i.ibb.co.com/JjtQMyGC/19.jpg",
      excerpt: "Safety comes first! Learn how to pick toys made from non-toxic materials and age-appropriate designs.",
    },
    {
      title: "Why Playing Is Important for Child Growth",
      author: "Dr. Sarah Khan",
      date: "Sep 30, 2025",
      image: "https://i.ibb.co.com/SXHcR9Xd/18.webp",
      excerpt:
        "Playtime helps kids learn teamwork, creativity, and confidence. Let’s explore why it’s vital for development.",
    },
  ];
  return (
    <>
      <Helmet>
        <title>BLOG || FARI TOY</title>
      </Helmet>
      <div className=" bg-gradient-to-b from-pink-50 to-blue-50 py-12 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-pink-600 mb-3">Our Blog</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore fun parenting tips, toy guides, and playful ideas to make your kid’s world brighter!
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts.map((post, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
              >
                <img src={post.image} alt={post.title} className="w-full h-56 object-cover" />
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-800 mb-2">{post.title}</h2>
                  <div className="flex items-center text-sm text-gray-500 mb-4 gap-4">
                    <span className="flex items-center gap-1">
                      <FaUser className="text-pink-500" /> {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaCalendarAlt className="text-pink-500" /> {post.date}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <button className="text-pink-600 font-semibold hover:underline">Read More →</button>
                </div>
              </div>
            ))}
          </div>

          {/* Subscribe Section */}
          <div className="mt-20 bg-pink-100 rounded-2xl shadow-lg p-10 text-center">
            <FaSmile className="text-4xl text-pink-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-800 mb-3">Join Our Toy Lovers Community!</h2>
            <p className="text-gray-600 mb-6">
              Subscribe to get fun articles, parenting tips, and special toy discounts every week.
            </p>
            <form className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
              <button
                type="submit"
                className="bg-pink-500 text-white font-semibold px-6 py-3 rounded-xl hover:bg-pink-600 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      <BottomToTop></BottomToTop>
    </>
  );
};

export default Blog;
