import React, { useEffect, useState } from 'react';
import './Card.css';
import { useNavigate } from 'react-router-dom';

const Card = ({ children, to, cardName, imgSrc, difficulty }) => {
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(false);
    const [currentImgSrc, setCurrentImgSrc] = useState(null);

    const getCardId = (difficulty) => {
        switch (difficulty) {
            case 'easy':
                return 'cardEasy';
            case 'medium':
                return 'cardMedium';
            case 'hard':
                return 'cardHard';
            default:
                return '';
        }
    };

    useEffect(() => {
        // Create an observer with a callback function to handle visibility changes
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true); // Set the card as visible
                    if (currentImgSrc !== imgSrc) {
                        setCurrentImgSrc(imgSrc); // Lazily load the image by setting its source
                    }
                    observer.disconnect(); // Stop observing once the image is loaded
                }
            });
        });
    
        // Get the card element by its unique ID
        const cardElement = document.getElementById(getCardId(difficulty));
        if (cardElement) {
            observer.observe(cardElement); // Start observing the card element
        }
    
        // Cleanup function to unobserve the card element when the component unmounts or updates
        return () => {
            if (cardElement) {
                observer.unobserve(cardElement);
            }
        };
    }, [difficulty, imgSrc, currentImgSrc]); // Include currentImgSrc in the dependency array

    return (
        <div className="card" onClick={() => navigate(to)} id={getCardId(difficulty)}>
            {isVisible && <img src={currentImgSrc} className="card-logo" alt='logo' />}
            <div className="card-text">{cardName}</div>
            {children}
        </div>
    );
};

export default Card;