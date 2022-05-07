import React from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import routeConstants from "routes/routes";

const {
  ROOT,
  CART,
  FINALIZE_PURCHASE,
  HOME,
  LOGIN_TO_PANEL,
  NOT_FOUND,
  PAYMENT,
  PAYMENT_RESULT,
  PROUDUCT_DETAILS,
  PRODUCTS_LIST,
  ORDERS,
  PRICES,
  PRODUCTS,
 } = routeConstants;

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROOT.path} element={ROOT.element} />
      <Route path={HOME.path} element={HOME.element} />
      <Route path={LOGIN_TO_PANEL.path} element={LOGIN_TO_PANEL.element} />
      <Route path={PRODUCTS_LIST.path} element={PRODUCTS_LIST.element} />
      <Route path={PROUDUCT_DETAILS.path} element={PROUDUCT_DETAILS.element} />
      <Route path={CART.path} element={CART.element} />
      <Route path={FINALIZE_PURCHASE.path} element={FINALIZE_PURCHASE.element} />
      <Route path={PAYMENT.path} element={PAYMENT.element} />
      <Route path={PAYMENT_RESULT.path} element={PAYMENT_RESULT.element} />
      <Route path={ORDERS.path} element={<ProtectedRoute route={ORDERS}/>} />
      <Route path={PRICES.path} element={<ProtectedRoute route={PRICES}/>} />
      <Route path={PRODUCTS.path} element={<ProtectedRoute route={PRODUCTS} />} />
      <Route path={NOT_FOUND.path} element={NOT_FOUND.element} />
      {/* {React.Children.toArray(
        Object.values(routeConstants).map(route => {
          return <Route path={route.path} element={route.element} />;
        })
      )} */}
    </Routes>
  );
};

export default AppRoutes;
