import React from 'react';
import './Menu.css';


const Menu = ({ children }) => {
    return (
        <div className="Menu">
            {children}
        </div>
    );
};

export default Menu;