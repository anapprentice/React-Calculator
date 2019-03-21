import React from 'react';

const buttonStyle = {
  backgroundColor: "#f0675d",
  color: "#ffffff",
};

const DelButton = props => (
  <div  className = "button-wrapper" 
        style={buttonStyle} 
        onClick={props.handleDelete}>
    
    {props.children}
  </div>
);

export default DelButton;