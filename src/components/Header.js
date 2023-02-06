import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const Header = () => {
    const {user, logOut}  = useContext(AuthContext);
    
    const handleSignOut = () => {
        logOut()
        .then(()=>{})
        .catch(error =>{
            console.error(error);
        })

    }

    return (
        <div className="navbar bg-primary text-primary-content">
            <div className="flex-1">
                <Link to='/' className="btn btn-ghost normal-case text-xl">Auth</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 items-center">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/register'>Register</Link></li>
                    <li>{user?.email && <span>Welcome, {user.email}</span>}</li>
                    <button onClick={handleSignOut} className='btn btn-sm'>Sign out</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;