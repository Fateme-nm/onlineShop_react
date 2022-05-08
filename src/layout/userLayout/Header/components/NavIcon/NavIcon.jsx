import React from "react";
import { Link } from "react-router-dom";

const NavIcon = ({ icon, number, href,children }) => {
  return (
    <Link
      to={href}
      class="text-center text-gray-700 hover:text-primary transition relative"
    >
      {number ? (<span class="absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
        {number}
      </span>) : null }
      <div class="text-2xl text-center">
        {icon}
      </div>
      <div class="text-xs leading-3">{children}</div>
    </Link>
  );
};

export default NavIcon;
