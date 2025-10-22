import React from "react";
import { NavLink } from "react-router";

const MyLink = ({ to, className, children, onClick }) => {
  return (
    <NavLink
      onClick={onClick}
      to={to}
      className={({ isActive }) => (isActive ? "text-orangeColor font-semibold" : `${className} font-semibold`)}
    >
      {children}
    </NavLink>
  );
};

export default MyLink;
