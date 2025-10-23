import Navbar from "../Components/Navbar";
import TopNavbar from "../Components/TopNavbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";

const MainLayoouts = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="fixed top-0 left-0 w-full z-50">
        <TopNavbar />
        <Navbar />
      </div>
      <main className="flex-1 pt-26">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayoouts;
