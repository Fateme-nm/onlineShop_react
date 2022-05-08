import React from 'react';
import { Link } from 'react-router-dom';
import routes from 'routes/routes';
import logo from 'assets/images/logo.svg'

const Header = () => {
    return (
        <header className='py-4 shadow-sm bg-white'>
            <div className='container flex items-center justify-between'>
                <Link to={routes.HOME.path}>
                    <img src={logo} alt="logo" className='w-32'/>
                </Link>
            </div>
        </header>
    );
}

export default Header;
