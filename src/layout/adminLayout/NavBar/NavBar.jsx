import React from "react";
import NavLink from "components/NavLink/NavLink";
import routes from "routes/routes";

const NavBar = () => {
  return (
    <nav className="bg-gray-800 hidden lg:block">
      <div className="container flex justify-between items-center flex-row-reverse">
        <div className="flex flex-row-reverse">
          <h2 className="mr-3 text-white bg-primary text-xl py-4 px-9">
            پنل مدیریت
          </h2>
          {/* nav links */}
          <div className="flex flex-row-reverse items-center text-base pr-12 flex-grow  space-x-10 space-x-reverse">
            <NavLink href={routes.PRODUCTS.path}>کالا ها</NavLink>
            <NavLink href={routes.PRICES.path}>موجودی و قیمت ها</NavLink>
            <NavLink href={routes.ORDERS.path}>سفارش ها</NavLink>
          </div>
        </div>
        <NavLink
          href={routes.HOME.path}
          icon={
            <i className="fa fa-arrow-circle-left text-primary text-lg cursor-pointer"></i>
          }
        >
          بازگشت به سایت
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
