import React from 'react';
import Header from './Header/Header';
import Sidebar from './SideBar/SideBar';

const AdminLayout = ({children}) => {
    return (
        <>
            <Header />
            <main className='bg-gray-50 h-screen'>
                <Sidebar />
                {children}
            </main>
        </>
    );
}

export default AdminLayout;
