import React from 'react';
import './Card.css';
import Logo from '../assets/logo.svg';

const Card = ({ children }) => {
    return (
        <div className="card">
                 <img src="https://blenderartists.org/uploads/default/original/4X/d/d/c/ddce8741a5e3e6ad835c2cb296edcd650c1ce88f.jpeg" 
         className="card-logo" alt='logo'/>
                <div className="card-text">Yatırım</div>

            {children}
        </div>
    );
};

export default Card;