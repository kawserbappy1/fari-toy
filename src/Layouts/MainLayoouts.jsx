import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import TopNavbar from "../Components/TopNavbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";

const MainLayoouts = () => {
  const [cartCount, setCartCount] = useState(0);
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <TopNavbar></TopNavbar>
        <Navbar cartCount={cartCount}></Navbar>
      </header>
      <main className="flex-1">
        <Outlet context={{ setCartCount }}></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayoouts;
