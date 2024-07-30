import React, { useEffect, useState } from 'react';
import './Card.css';
import { useNavigate } from 'react-router-dom';
import tickImage from '../assets/tick.png';

const Card = ({ children, to, cardName, imgSrc, difficulty, EducationId, isFinished, updateProgress}) => {
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(false);
    const [currentImgSrc, setCurrentImgSrc] = useState(null);
    const [showTick, setShowTick] = useState(false);

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

    const handleFinish = () => {
        updateProgress(EducationId, !isFinished);
    }

    //adds the finished tick png to the card if the course is finished
    useEffect(() => {
        
        if (isFinished) {
            //add Tick to the card  
            setShowTick(true);
        }
    }, []);

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
    }, [difficulty, imgSrc, currentImgSrc, EducationId, isFinished, updateProgress]); // Include currentImgSrc in the dependency array
//           

    return (
        <div className="card" onClick={() => navigate(to)} id={getCardId(difficulty)}>
            {isVisible && <img src={currentImgSrc} className="card-logo" alt='logo' />}
            {showTick && <img src={tickImage} alt="Tick" className="tick-image" />}
            <div className="card-text">{cardName}</div>
            {children}
        </div>
    );
};

export default Card;