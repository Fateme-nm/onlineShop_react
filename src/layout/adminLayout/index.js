import React from 'react';
import Header from './NavBar/NavBar';
import Sidebar from './SideBar/SideBar';

const AdminLayout = ({children}) => {
    return (
        <>
            <Header />
            <main>
                <Sidebar />
                {children}
            </main>
        </>
    );
}

export default AdminLayout;
