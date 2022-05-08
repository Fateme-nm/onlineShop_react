import React from "react";

const NavBar = () => {
  return (
    <nav className="bg-gray-800 hidden lg:block">
      <div className="container">
        <div className="flex">
          {/* all category */}
          <div className="px-8 py-4 bg-primary flex items-center cursor-pointer group relative">
            <span class="text-white">
              <i class="fas fa-bars"></i>
            </span>
            <span class="capitalize ml-2 text-white">All categories</span>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default NavBar;
