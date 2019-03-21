import React from 'react'

const buttonStyle = {
    backgroundColor: "#ecdc4c",
    color: "#6c757d",
};

const OperandButton = props => (
  <div  className = "button-wrapper" 
        style={buttonStyle} 
        onClick={() => props.handleClick(props.children)}>
  
    {props.children}
  </div>
)

export default OperandButton;
