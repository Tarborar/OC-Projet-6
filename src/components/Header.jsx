import {Link, useLocation} from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png'
import '../styles/Header.scss'

function Header(){
    const location = useLocation(); //récupère url pour page active
    const [activePage, setActivePage] = useState('');

    useEffect(() => {
        // compare url actuelle
        if (location.pathname === '/') {
            setActivePage('Accueil');
        } else if (location.pathname === '/about') {
            setActivePage('A Propos');
        }else{
            setActivePage('');
        }
    }, [location]);

    return(
        <header>
            <Link to="/">
                <img src={logo} alt="Accueil logo" className='logo'/>
            </Link>
            <nav className='navbar'>
                <Link to="/" className={activePage === 'Accueil' ? 'navbar__link active' : 'navbar__link'}>
                    Accueil
                </Link>
                <Link to="/about" className={activePage === 'A Propos' ? 'navbar__link active' : 'navbar__link'}>
                    A Propos
                </Link>
            </nav>
        </header>
    );
}

export default Header