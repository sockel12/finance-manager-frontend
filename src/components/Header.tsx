import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useAuth } from './AuthProvider';
import { Router, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

function Header() {
    const { user, login, logout, loading, error, authenticated } = useAuth();

    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/profile'>Profile</Link>
                    </li>
                    <li>
                        <Link to='/login'>Login</Link>
                    </li>
                </ul>
                <button
                    type='button'
                    onClick={logout}
                >
                    Log out
                </button>
            </nav>
        </header>
    );
}

export default Header;


