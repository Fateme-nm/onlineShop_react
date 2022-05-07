import React from 'react'; 
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Sidebar from './SideBar/SideBar';
import routeConstants from 'routes/routes'

const UserLayout = ({children}) => {
    const pathName = window.location.pathname
    const { PRODUCTS_LIST } = routeConstants
    return (
        <>
            <Header />
            <main>
                {pathName === PRODUCTS_LIST.path && <Sidebar />}
                {children}
            </main>
            <Footer />
        </>
    );
}

export default UserLayout;
