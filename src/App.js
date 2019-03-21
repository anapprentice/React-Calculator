import React, { Component } from 'react';
import Button from "./components/Button.js";
import Display from "./components/Display.js";
import OperandButton from './components/OperandButton.js';
import "./App.css";
import DelButton from './components/DelButton.js';
import EvalButton from './components/EvalButton.js';
import * as math from 'mathjs';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { display: "" };
  }

  addToDisplay = (toAdd) => {
    this.setState({ display: this.state.display + toAdd });
  }

  handleEval = () => {
    this.setState({ display: math.eval(this.state.display) });
  };


  render() {
    return (
      <div className="app-flex-con">
        
        <div className="calculator">
          <div className="row">
            <Display>{this.state.display}</Display>
          </div>
          <div className="row">
            <OperandButton handleClick={this.addToDisplay}>/</OperandButton>
            <OperandButton handleClick={this.addToDisplay}>*</OperandButton>
            <OperandButton handleClick={this.addToDisplay}>-</OperandButton>
            <OperandButton handleClick={this.addToDisplay}>+</OperandButton>
          </div>
          <div className="row">
            <Button handleClick={this.addToDisplay}>9</Button>
            <Button handleClick={this.addToDisplay}>8</Button>
            <Button handleClick={this.addToDisplay}>7</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToDisplay}>6</Button>
            <Button handleClick={this.addToDisplay}>5</Button>
            <Button handleClick={this.addToDisplay}>4</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToDisplay}>3</Button>
            <Button handleClick={this.addToDisplay}>2</Button>
            <Button handleClick={this.addToDisplay}>1</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToDisplay}></Button>
            <Button handleClick={this.addToDisplay}>0</Button>
            <Button handleClick={this.addToDisplay}></Button>
          </div>
          <div className="row">
            <OperandButton handleClick={this.addToDisplay}>.</OperandButton>
            <EvalButton handleEval={() => this.handleEval()}>=</EvalButton>
            <DelButton handleDelete={() => this.setState({display: ""})}>Del</DelButton>
          </div>
        </div> 
        
      </div>
    );
  }
}

export default App;
