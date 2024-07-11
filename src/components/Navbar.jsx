import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faEnvelope, faSignInAlt, faBars } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import Logo from '../assets/logo.png';

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [menuClick, setMenuClick] = useState(false);
    const handleMenuClick = () => {
        setIsMobile(!isMobile);
        setMenuClick(!menuClick);
    };

    return (
        <nav className={`navbar ${menuClick ? 'expanded' : ''}`}>
            <div className="navbar-logo">
                <p className='text-xl'> Eğitim Denizi </p>
                <img src={Logo} className="Logo" alt='logo' />
            </div>
            <div className="menu-icon" onClick={handleMenuClick}>
                <FontAwesomeIcon icon={faBars} />
            </div>
            <ul className={isMobile ? "navbar-links mobile" : "navbar-links"}>
                <li><a href="/"><FontAwesomeIcon icon={faHome} />Ana Menu</a></li>
                <li><a href="about"><FontAwesomeIcon icon={faInfoCircle} />Hakkımızda</a></li>
                <li><a href="contact"><FontAwesomeIcon icon={faEnvelope} />Bize Ulaşın</a></li>
                <li><a href="login"><FontAwesomeIcon icon={faSignInAlt} />Giriş Yap</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;