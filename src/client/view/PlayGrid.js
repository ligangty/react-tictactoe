'use strict'

import React from 'react';
import {render} from 'react-dom';
import {styles} from "../style/style.js";

export default class PlayGrid extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      imgFile: "",
      rendered: false
    };
  }

  handleImageChange(callback){
    return ()=>callback(this.props.index);
  }

  isRendered(){
    return this.state.rendered;
  }

  changeImage(imageFile){
    this.setState({
      imgFile: imageFile,
      rendered: true
    });
  }

  render() {
    return (
      <div index={this.props.index} style={styles.Grid} onClick={this.handleImageChange(this.props.click)}>
        { this.state.rendered ? (
          <img src={"/images/"+this.state.imgFile} />
        ) : "" }
      </div>
    );
  }

};
