import { createBrowserRouter } from "react-router";
import MainLayoouts from "../Layouts/MainLayoouts";
import AboutUs from "../Pages/AboutUs";
import Blog from "../Pages/Blog";
import Discover from "../Pages/Discover";
import Help from "../Pages/Help";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Shop from "../Pages/Shop";
import SignUp from "../Pages/SignUp";
import ShowToyDetails from "../Components/ShowToyDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayoouts></MainLayoouts>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/discover",
        element: <Discover></Discover>,
      },
      {
        path: "/help",
        element: <Help></Help>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/shop",
        element: <Shop></Shop>,
      },
      {
        path: "/details/:id",
        element: <ShowToyDetails></ShowToyDetails>,
        loader: () => fetch("/toy.json"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);

export default router;
