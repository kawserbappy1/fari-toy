import React from "react";
import Navbar from "../Components/Navbar";
import TopNavbar from "../Components/TopNavbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";

const MainLayoouts = () => {
  return (
    <div>
      <header>
        <TopNavbar></TopNavbar>
        <Navbar></Navbar>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayoouts;
