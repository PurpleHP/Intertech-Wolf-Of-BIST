import './Home.css';
import './bitki.css';
import Footer from './Footer.jsx';
import Sea from "../assets/sea-wp.png";
import Ship from "../assets/ship-wp.png";
import Kurt from "../assets/imageKurt.png";
import { useEffect, useState } from 'react';

function About() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="about-container">
            <img 
                src={Sea} 
                alt="Sea" 
                className="sea-image" 
                style={{ 
                    position: scrollY > 3000 ? 'absolute' : 'fixed', 
                    top: scrollY > 3000 ? 'auto' : '0',
                    transform: scrollY > 3000 ? `translateY(${scrollY - 3000}px) scale(${1 + (scrollY - 3000) * 0.00005})` : `scale(${1 + scrollY * 0.00005})`,
                    
                }} 
            />
            <img
                src={Ship}
                alt="Ship"
                className="ship-image"
                style={{ 
                    transform: `scale(${1 + scrollY * 0.012})`,
                    display: scrollY > 2500 ? 'none' : 'block'
                }}
            />
        </div>

       
    );
}

export default About;