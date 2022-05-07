import Cart from 'pages/cart/Cart';
import FinalizePurchase from 'pages/finalizePurchase/FinalizePurchase';
import Home from 'pages/home/Home';
import LoginToPanel from 'pages/loginToPanel/LoginToPanel';
import NotFound from 'pages/notFound/NotFound';
import Payment from 'pages/payment/Payment';
import PaymentResult from 'pages/paymentResult/PaymentResult';
import ProductDetails from 'pages/productDetails/ProductDetails';
import ProductsList from 'pages/productsList/ProductsList';
import Orders from 'pages/admin/orders/Orders';
import Prices from 'pages/admin/prices/Prices';
import Products from 'pages/admin/products/Products';

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