import React from "react";
import { Link } from "react-router-dom";
import routes from "routes/routes";
import logo from "assets/images/logo-daniellee_crop.png";
import SearchBox from "./components/SearchBox/SearchBox";
import NavIcon from "./components/NavIcon/NavIcon";
import { useSelector } from "react-redux";
import { persinaDigit } from "utils";

const Header = () => {
  const {cartProducts} = useSelector(state => state.cart)
  return (
    <header className="py-4 shadow-sm bg-white">
      <div className="container flex items-center justify-between">
        {/* nav icons */}
        <div className="space-x-4 flex items-center">
          <NavIcon
            icon={<i className="far fa-user"></i>}
            href={routes.LOGIN_TO_PANEL.path}
          >
            مدیریت
          </NavIcon>
          <NavIcon
            icon={<i className="fas fa-shopping-bag"></i>}
            number={cartProducts.length != 0 && persinaDigit(cartProducts.length)}
            href={routes.CART.path}
            cart={cartProducts}
          >
            سبد خرید
          </NavIcon>
          <NavIcon
            icon={<i className="far fa-heart"></i>}
            number={persinaDigit(8)}
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
