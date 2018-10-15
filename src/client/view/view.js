'use strict'

import React from 'react';
import {render} from 'react-dom';
import {styles} from "../style/style.js";
import PlayGrid from './PlayGrid.js';

export default class TicTacToe extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    let elems = [1,2,3,4,5,6,7,8,9].map(elem=><PlayGrid key={"playGrid"+elem} index={elem}/>);
    return (
      <div style={styles.Container}>
        {elems}
      </div>
    );
  }
}
