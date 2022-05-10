import React from "react";

const NavBar = () => {
  return (
    <nav className="bg-gray-800 hidden lg:block">
      <div className="container">
        <div className="flex flex-row-reverse">
          {/* all category */}
          <AllCategory />
          {/* nav links */}
          <div className="flex flex-row-reverse items-center text-base pr-12 flex-grow">
            <NavLink href={routes.HOME.path}>خانه</NavLink>
            <NavLink href={routes.HOME.path}>درباره ما</NavLink>
            <NavLink href={routes.HOME.path}>ارتباط با ما</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
