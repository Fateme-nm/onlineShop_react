import React from "react";
import AllCategory from "./AllCategory/AllCategory";

const NavBar = () => {
  return (
    <nav className="bg-gray-800 hidden lg:block">
      <div className="container">
        <div className="flex flex-row-reverse">
          {/* all category */}
          <AllCategory />
          {/* nav links */}
          <div className="flex items-center space-x-6 text-base pr-12 flex-grow">
            
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
