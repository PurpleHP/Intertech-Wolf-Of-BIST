import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faEnvelope, faSignInAlt, faBars, faRobot, faBook, faUser } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import Logo from '../assets/logo.png';

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [menuClick, setMenuClick] = useState(false);
    const [userName, setUserName] = useState(null);

    const handleMenuClick = () => {
        setIsMobile(!isMobile);
        setMenuClick(!menuClick);
    };

    useEffect(() => {
        const storedUserId = localStorage.getItem('userId');
        const storedUserName = localStorage.getItem('userName');
        console.log('storedUserId:', storedUserId); // Debug log

        if (storedUserId && parseInt(storedUserId) !== 0) {
            setUserName(storedUserName);
        }
    }, []);

    console.log('userName:', userName); // Debug log

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
                <li><a href="chatbot"><FontAwesomeIcon icon={faRobot} />AI Chatbot</a></li>
                <li><a href="sozluk"><FontAwesomeIcon icon={faBook} />Finansal Sözlük</a></li>
                <li><a href="about"><FontAwesomeIcon icon={faInfoCircle} />Hakkımızda</a></li>
                <li><a href="contact"><FontAwesomeIcon icon={faEnvelope} />Bize Ulaşın</a></li>
                {userName ? (
                    <li><a href="profile"><FontAwesomeIcon icon={faUser} />{userName}</a></li>
                ) : (
                    <li><a href="login"><FontAwesomeIcon icon={faSignInAlt} />Giriş Yap</a></li>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;
