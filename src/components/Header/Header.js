import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    const { user, signOutHandler } = useContext(AuthContext)
    // console.log(user);
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                {
                    user?.uid
                        ? <button className='btn-logOut' onClick={signOutHandler}>Log-Out</button>
                        :
                        <>
                            <Link to="/login">Login</Link>
                            <Link to="/signup">SignUp</Link>
                        </>
                }
                <span className='user'>{user?.email}</span>
            </div>
        </nav>
    );
};

export default Header;