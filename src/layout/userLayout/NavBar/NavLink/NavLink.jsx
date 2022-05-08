import React from "react";
import { Link } from "react-router-dom";

const NavLink = ({href, children}) => {
  return (
    <Link to={href} className="text-gray-200 hover:text-white transition">
      {children}
    </Link>
  );
};

export default NavLink;
