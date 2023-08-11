import {Link} from 'react-router-dom'
import logo from '../assets/logo.png'
import '../styles/Header.scss'

function Header(){
    return(
        <header>
            <Link to="/">
                <img src={logo} alt="Accueil logo" />
            </Link>
            <nav className='navbar'>
                <Link to="/" className='navbar__link'>Accueil</Link>
                <Link to="/about" className='navbar__link'>A Propos</Link>
            </nav>
        </header>
    );
}

export default Header