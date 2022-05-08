import React from "react";
import { Link } from "react-router-dom";

const NavIcon = ({ icon, number, href,children }) => {
  return (
    <Link
      to={href}
      class="block text-center text-gray-700 hover:text-primary transition relative"
    >
      
    </Link>
  );
};

export default NavIcon;
