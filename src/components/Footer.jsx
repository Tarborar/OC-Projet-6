import logo from '../assets/LOGO (1).png'
import '../styles/Footer.scss'

function Footer(){
    return(
        <footer className='footer-container'>
            <img src={logo} alt="logo" className='footer-container__logo'/>
            <p className='footer-container__text'>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}

export default Footer