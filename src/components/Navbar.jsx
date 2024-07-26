import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faEnvelope, faSignInAlt, faBars, faRobot, faBook } from '@fortawesome/free-solid-svg-icons';
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
                <a href="home" className='text-xl font-bold'> Eğitim Denizi </a>
                <a href="home">
                    <img src={Logo} className="Logo" alt='logo' />
                </a>
            </div>
            <div className="menu-icon" onClick={handleMenuClick}>
                <FontAwesomeIcon icon={faBars} />
            </div>
            <ul className={isMobile ? "navbar-links mobile" : "navbar-links"}>
                <li><a href="home"><FontAwesomeIcon icon={faHome} />Ana Menu</a></li>
                <li><a href="chatbot"><FontAwesomeIcon icon={faRobot} />AI Bot</a></li>
                <li><a href="dictionary"><FontAwesomeIcon icon={faBook} />AI Sözlük</a></li>
                <li><a href="about"><FontAwesomeIcon icon={faInfoCircle} />Hakkımızda</a></li>
                <li><a href="contact"><FontAwesomeIcon icon={faEnvelope} />Bize Ulaşın</a></li>
                <li><a href="login"><FontAwesomeIcon icon={faSignInAlt} />Giriş Yap</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;