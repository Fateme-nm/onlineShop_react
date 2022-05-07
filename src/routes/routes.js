import Cart from 'pages/Cart/Cart';
import FinalizePurchase from 'pages/FinalizePurchase/FinalizePurchase';
import Home from 'pages/Home/Home';
import LoginToPanel from 'pages/LoginToPanel/LoginToPanel';
import NotFound from 'pages/NotFound/NotFound';
import Payment from 'pages/Payment/Payment';
import PaymentResult from 'pages/PaymentResult/PaymentResult';
import ProductDetails from 'pages/ProductDetails/ProductDetails';
import ProductsList from 'pages/ProductsList/ProductsList';
import Orders from 'pages/admin/Orders/Orders';
import Prices from 'pages/admin/Prices/Prices';
import Products from 'pages/admin/Products/Products';

export default Object.freeze({
    ROOT: {
        element: <Home />,
        path: '/'
    },
    HOME: {
        element: <Home />,
        path: '/home'
    },
    CART: {
        element: <Cart />,
        path: '/checkout/cart' 
    },
    FINALIZE_PURCHASE: {
        element: <FinalizePurchase />,
        path: '/checkout/finalize'
    },
    LOGIN_TO_PANEL: {
        element: <LoginToPanel />,
        path: '/login'
    },
    NOT_FOUND: {
        element: <NotFound />,
        path: '*'
    },
    PAYMENT: {
        element: <Payment />,
        path: '/checkout/payment'
    },
    PAYMENT_RESULT: {
        element: <PaymentResult />,
        path: '/checkout/paymentResult'
    },
    PROUDUCT_DETAILS: {
        element: <ProductDetails />,
        path: '/product/:name'
    },
    PRODUCTS_LIST: {
        element: <ProductsList />,
        path: '/products'
    },
    ORDERS: {
        element: <Orders />,
        path: '/panel/orders'
    },
    PRICES: {
        element: <Prices />,
        path: '/panel/prices'
    },
    PRODUCTS: {
        element: <Products />,
        path: '/panel/products'
    }
})