import React from "react";
import { Link } from "react-router-dom";
import routes from "routes/routes";
import logo from "assets/images/logo-daniellee_crop.png";
import SearchBox from "./components/SearchBox/SearchBox";
import NavIcon from "./components/NavIcon/NavIcon";

const Header = () => {
  return (
    <header className="py-4 shadow-sm bg-white">
      <div className="container flex items-center justify-between">
        {/* nav icons */}
        <div className="space-x-4 flex items-center">
          <NavIcon
            icon={<i class="far fa-user"></i>}
            href={routes.LOGIN_TO_PANEL.path}
          >
            مدیریت
          </NavIcon>
          <NavIcon
            icon={<i class="fas fa-shopping-bag"></i>}
            number={4}
            href={routes.CART.path}
          >
            سبد خرید
          </NavIcon>
          <NavIcon
            icon={<i class="far fa-heart"></i>}
            number={8}
            href={routes.LOGIN_TO_PANEL.path}
          >
            ذخیره شده
          </NavIcon>
        </div>
        {/* search box */}
        <SearchBox />
        {/* logo */}
        <Link to={routes.HOME.path}>
          <img src={logo} alt="logo" className="w-28" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
