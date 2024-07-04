import React from 'react';
import './Menu.css';
import Card from './Card';

const Menu = ({ children }) => {
    return (
        <div className="Menu">
            {children}
        </div>
    );
};

export default Menu;