'use strict'

import React from 'react';
import {render} from 'react-dom';
import {styles} from "../style/style.js";
import PlayGrid from './PlayGrid.js';

export default class TicTacToe extends React.Component {
  constructor(props){
    super(props);
    this._grids = undefined;
    this._currentStep = "";
    this.state = {
      currentStep: ""
    };
    // this.clickGrid = this.clickGrid.bind(this);
  }

  componentDidMount() {}

  clickGrid (index) {
    let currentGrid = this.refs[`grid${index}`];

    if(currentGrid.isRendered()){
      console.log(`Grid ${index} has been renedered!`);
      return;
    }

    if(this._currentStep === "circle"){
      this._currentStep = "block";
    }else{
      this._currentStep = "circle";
    }
    currentGrid.changeImage(`${this._currentStep}.gif`);


    console.log(`Clicked grid ${index}`);
    console.log(`current step is ${this._currentStep}`);
    // this.setState({currentStep: "block"});
  }

  render() {
    if(!this._grids){
      this._grids = [0,1,2,3,4,5,6,7,8].map(i=><PlayGrid ref={"grid" + i} key={"playGrid" + i} index={i} click={(idx)=>this.clickGrid(idx)}/>);
    }
    return (
      <div style={styles.Container}>
        {this._grids}
      </div>
    );
  }
}
