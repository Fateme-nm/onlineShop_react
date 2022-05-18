import React, { useEffect, useState } from 'react'; 
import Header from './Header/Header';
import NavBar from './NavBar/NavBar';
import Footer from './Footer/Footer';
import Sidebar from './SideBar/SideBar';
import routeConstants from 'routes/routes';
import { getCategories } from "store/slices/products";
import { useDispatch } from "react-redux";

const UserLayout = ({children}) => {
    const pathName = window.location.pathname;
    const { PRODUCTS_LIST } = routeConstants;
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCategories())
    }, [])
    return (
        <>
            <Header />
            <NavBar />
            <main>
                {pathName === PRODUCTS_LIST.path && <Sidebar />}
                {children}
            </main>
            <Footer />
        </>
    );
}

export default UserLayout;
