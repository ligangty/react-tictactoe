'use strict'

import React from 'react';
import {render} from 'react-dom';
import {styles} from "../style/style.js";

export default class PlayGrid extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      changed: false,
      imageType: ""
    };
    this.handleImageChange = this.handleImageChange.bind(this);
  }

  // componentDidMount() {}

  handleImageChange(callback){
    if(!this.state.changed){
      this.setState({changed:true});
    }
    return ()=>callback();
  }

  render() {
    let image = "";
    if(this.state.imageType === "circle"){
      image = <img src="/images/circle.gif" />;
    }else if(this.state.imageType === "block"){
      image = <img src="/images/block.gif" />
    }
    return (
      <div index={this.props.index} style={styles.Grid} onClick={this.handleImageChange(this.props.click)}>
        {image}
      </div>
    );
  }

};
