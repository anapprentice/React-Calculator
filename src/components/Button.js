import React from 'react';

const buttonStyle = {
  backgroundColor: "#6c757d",
  color: "#ffffff",
};

const Button = props => (
  <div  className = "button-wrapper" 
        style={buttonStyle} 
        onClick={() => props.handleClick(props.children)}>
    
    {props.children}
  </div>
);

export default Button;