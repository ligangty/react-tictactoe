'use strict'

import React from 'react';
import {render} from 'react-dom';
import {styles} from "../style/style.js";
import PlayGrid from './PlayGrid.js';

export default class TicTacToe extends React.Component {
  constructor(props){
    super(props);
    this.elems = [1,2,3,4,5,6,7,8,9].map(elem=><PlayGrid key={"playGrid" + elem} index={elem} click={this.clickGrid}/>);
    this.currentStep = "";
    this.state = {
      currentStep: ""
    };
    this.clickGrid = this.clickGrid.bind(this);
  }

  componentDidMount() {}

  clickGrid () {
    console.log("triggered");
    // if(this.currentStep === "circle"){
    //   this.currentStep = "block";
    // }else{
    //   this.currentStep = "circle";
    // }
    this.setState({currentStep: "block"});
  }

  render() {
    return (
      <div style={styles.Container}>
        {this.elems}
      </div>
    );
  }
}
