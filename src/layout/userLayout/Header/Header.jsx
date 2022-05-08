import React from 'react';
import { Link } from 'react-router-dom';
import routes from 'routes/routes';
import logo from 'assets/images/logo-daniellee.png';
import SearchBox from './components/SearchBox/SearchBox'

const Header = () => {
    return (
        <header className='py-4 shadow-sm bg-white'>
            <div className='container flex items-center justify-between'>
                {/* logo */}
                <Link to={routes.HOME.path}>
                    <img src={logo} alt="logo" className='w-48'/>
                </Link>
                {/* search box */}
                <SearchBox />
            </div>
        </header>
    );
}

export default Header;
