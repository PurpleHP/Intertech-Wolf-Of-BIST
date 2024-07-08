import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { useNavigate } from 'react-router-dom';
import { faHome, faInfoCircle, faEnvelope, faSignInAlt, faBars } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import Logo from '../assets/logo.svg';

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);

    const handleMenuClick = () => {
        setIsMobile(!isMobile);
    };
  /*
    const navigate = useNavigate(); // Using the useNavigate hook

    const navigateTo = (path) => {
        navigate(path);
    };
*/
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <p> Wolf Of BIST </p> 
                <img src={Logo} className="Logo"  alt='logo'/>
            </div>
            <div className="menu-icon" onClick={handleMenuClick}>
                <FontAwesomeIcon icon={faBars} />
            </div>
            <ul className={isMobile ? "navbar-links mobile" : "navbar-links"}>
                <li><a href="#home"><FontAwesomeIcon icon={faHome} /> Ana Menu</a></li>
                <li><a href="#about"><FontAwesomeIcon icon={faInfoCircle} /> Hakkımızda</a></li>
                <li><a href="#contact"><FontAwesomeIcon icon={faEnvelope} /> Bize Ulaşın</a></li>
                <li><a href="login"><FontAwesomeIcon icon={faSignInAlt} /> Giriş Yap</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;