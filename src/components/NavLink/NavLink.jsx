import React from "react";
import { Link } from "react-router-dom";

const NavLink = ({href, icon, children}) => {
  return (
    <Link to={href} className={`text-gray-200 hover:text-white transition ${icon && 'flex justify-end items-center'}`}>
      {icon && <span className="mr-3">{icon}</span>}
      {children}
    </Link>
  );
};

export default NavLink;
