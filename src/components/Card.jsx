import React from 'react';
import './Card.css';
import Logo from '../assets/logo.svg';

const Card = ({ children }) => {
    return (
        <div className="card">
            <img src="src/assets/bank.png"
                className="card-logo" alt='logo' />
            <div className="card-text">Yatırım</div>

            {children}
        </div>
    );
};

export default Card;