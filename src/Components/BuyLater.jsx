import React, { useState } from "react";
import Swal from "sweetalert2";

const BuyLater = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email } = formData;

    if (!name || !email) {
      Swal.fire({
        icon: "warning",
        title: "Missing Fields",
        text: "Please enter both name and email!",
        confirmButtonColor: "#f97316",
      });
      return;
    }

    Swal.fire({
      icon: "success",
      title: "Thank You!",
      text: `Hey ${name}, we'll notify you later at ${email}.`,
      confirmButtonColor: "#f97316",
      background: "#fff7ed",
    });

    setFormData({ name: "", email: "" });
  };

  return (
    <div className="flex justify-center items-center mt-10 px-3 bg-bg1 p-10">
      <div className="w-full max-w-4xl bg-gradient-to-br from-orange-100 via-white to-purple-100 shadow-lg rounded-2xl p-8 border border-purpleColor/20">
        <h2 className="text-3xl font-extrabold text-center text-orangeColor mb-6">Get Alert Later or Try Later</h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="md:col-span-5 input input-bordered w-full rounded-full focus:outline-none focus:ring-2 focus:ring-orangeColor"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="md:col-span-5 input input-bordered w-full rounded-full focus:outline-none focus:ring-2 focus:ring-orangeColor"
          />
          <button
            type="submit"
            className="md:col-span-2 btn bg-purpleColor hover:bg-orange-500 text-white font-semibold rounded-full transition-all duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default BuyLater;
