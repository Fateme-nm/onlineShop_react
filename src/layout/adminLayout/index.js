import React from 'react';
import NavBar from './NavBar/NavBar';
import Sidebar from './SideBar/SideBar';

const AdminLayout = ({children}) => {
    return (
        <>
<<<<<<< HEAD
            <NavBar />
            <main>
=======
            <Header />
            <main className='bg-gray-50 h-screen'>
>>>>>>> feat/productsManage
                <Sidebar />
                {children}
            </main>
        </>
    );
}

export default AdminLayout;
