import React from 'react';
import './Card.css';
import Logo from '../assets/logo.svg';
import { useNavigate } from 'react-router-dom';


const Card = ({ children, to, cardName }) => { 

    const navigate = useNavigate();

    return (
        <div className="card" onClick={() => navigate(to)}>
             <img src="src/assets/bank.png" className="card-logo" alt='logo' />

            <div className="card-text">{cardName}</div>

            {children}
        </div>
    );
};

export default Card;