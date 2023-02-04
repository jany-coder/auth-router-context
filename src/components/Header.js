import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar bg-primary text-primary-content">
            <div className="flex-1">
                <Link to='/' className="btn btn-ghost normal-case text-xl">Auth</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/register'>Register</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;