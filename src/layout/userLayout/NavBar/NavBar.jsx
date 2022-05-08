import React from "react";
import AllCategory from "./AllCategory/AllCategory";

const NavBar = () => {
  return (
    <nav className="bg-gray-800 hidden lg:block">
      <div className="container">
        <div className="flex">
          {/* all category */}
          <AllCategory />

        </div>
      </div>
    </nav>
  );
};

export default NavBar;
