import React from "react";
import NavLink from "components/NavLink/NavLink";
import routes from "routes/routes";

const NavBar = () => {
  return (
    <nav className="bg-gray-800 hidden lg:block">
      <div className="container">
        <div className="flex flex-row-reverse">
          <h2 className="mr-3 text-white bg-primary text-xl py-4 px-9">پنل مدیریت</h2>
          {/* nav links */}
          <div className="flex flex-row-reverse items-center text-base pr-12 flex-grow">
            <NavLink href={routes.PRODUCTS.path}>کالا ها</NavLink>
            <NavLink href={routes.PRICES.path}>موجودی و قیمت ها</NavLink>
            <NavLink href={routes.ORDERS.path}>سفارش ها</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
