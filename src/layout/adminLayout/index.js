import React from 'react';
import NavBar from './NavBar/NavBar';
import Sidebar from './SideBar/SideBar';

const AdminLayout = ({children}) => {
    return (
        <>
            <NavBar />
            <main>
                <Sidebar />
                {children}
            </main>
        </>
    );
}

export default AdminLayout;
