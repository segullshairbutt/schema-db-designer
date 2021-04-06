import React from 'react';
import './Button.css';

const Button = (props) => {
    return (
        <button onClick={props.onClick} className="default-button"> 
        { props.icon ? props.icon : null }
        { props.text } 
        </button>
    );
};

export default Button;