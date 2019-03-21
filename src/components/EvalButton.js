import React from 'react';

const buttonStyle = {
  backgroundColor: "#83de87",
  color: "#ffffff",
};

const EvalButton = props => (
  <div  className = "button-wrapper" 
        style={buttonStyle} 
        onClick={props.handleEval}>
    
    {props.children}
  </div>
);

export default EvalButton;