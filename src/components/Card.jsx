import React from 'react';
import './Card.css';
import { useNavigate } from 'react-router-dom';


const Card = ({ children, to, cardName, imgSrc, difficulty}) => { 

    const navigate = useNavigate();

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

    return (
        <div className="card" onClick={() => navigate(to)} id={getCardId(difficulty)}>
            <img src={imgSrc} className="card-logo" alt='logo' />

            <div className="card-text">{cardName}</div>

            {children}
        </div>
    );
};

export default Card;