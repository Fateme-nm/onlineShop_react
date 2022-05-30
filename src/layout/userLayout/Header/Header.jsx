import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import routes from "routes/routes";
import logo from "assets/images/logo-daniellee_crop.png";
import SearchBox from "./components/SearchBox/SearchBox";
import NavIcon from "./components/NavIcon/NavIcon";
import { getShowCartProducts } from "store/slices/cart";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const { cartProducts, showCartProducts } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getShowCartProducts());
  }, [cartProducts]);

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
            number={showCartProducts.totalQuantity}
            href={routes.CART.path}
            cart={showCartProducts.products}
          >
            سبد خرید
          </NavIcon>
          <NavIcon
            icon={<i className="far fa-heart"></i>}
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
