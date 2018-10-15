'use strict'

import React from 'react';
import {render} from 'react-dom';
import {styles} from "../style/style.js";

export default class PlayGrid extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  changeType(){
    let imgType = "circle";
    if(this.state.imageType==="circle"){
      imgType = "block";
    }else {
      imgType = "circle";
    }

    this.setState(Object.assign[{}, this.state, {imageType: imgType}]);
  }

  render() {
    let image = "";
    if(this.state.imageType === "circle"){
      image = <img src="/images/circle.gif" />;
    }else if(this.state.imageType === "block"){
      image = <img src="/images/block.gif" />
    }
    return (
      <div index={this.props.index} style={styles.Grid} onClick={this.changeType()}>
        {image}
      </div>
    );
  }

};