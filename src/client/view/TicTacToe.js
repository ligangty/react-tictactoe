'use strict'

import React from 'react';
import {render} from 'react-dom';
import {styles} from "../style/style.js";
import PlayGrid from './PlayGrid.js';

const WINNING_RULESET = [
		[ 0, 1, 2 ], [ 3, 4, 5 ], [ 6, 7, 8 ],
		[ 0, 3, 6 ], [ 1, 4, 7 ], [ 2, 5, 8 ],
		[ 0, 4, 8 ], [ 2, 4, 6 ]
];

const GRID_ARRAY_INDEX = [0,1,2,3,4,5,6,7,8];

const CHESS_TYPE = { block: {image:"block", type: 0}, circle: {image: "circle", type: 1} };

const decideChess = function(type) {
	for(var key in CHESS_TYPE){
		if(CHESS_TYPE[key].type===type){
			return CHESS_TYPE[key].image;
		}
	}
};

export default class TicTacToe extends React.Component {
  constructor(props){
    super(props);
    this._grids = undefined;
    this._gridMatrix = GRID_ARRAY_INDEX.map(i=>({type : 0, clicked : false}));
    this._currentStep = "";
		this._gameOver = false;
  }

  componentDidMount() {
  }

  clickGrid (index) {
		if(this._gameOver){
			alert("Game is over! Please refresh to start new round!");
			return;
		}
    let currentGrid = this.refs[`grid${index}`];

    if(currentGrid.isRendered()){
      console.log(`Grid ${index} has been renedered!`);
      return;
    }

    if(this._currentStep === CHESS_TYPE.circle){
      this._currentStep = CHESS_TYPE.block;
    }else{
      this._currentStep = CHESS_TYPE.circle;
    }
    currentGrid.changeImage(`${this._currentStep.image}.gif`);
		if(!this._gridMatrix[index].clicked){
      this._gridMatrix[index] = {type: this._currentStep.type, clicked:true};
	  }
		let result = this.checkGameWinner();
		this._gameOver = result.isWin;
		if(this._gameOver){
			alert(`Winner! Winner! ${decideChess(result.winner)} is chicken eater!`);
		}

  }

  checkGameWinner(){
    for(var index=0;index<WINNING_RULESET.length;index++){
			var winRule=WINNING_RULESET[index];
			// FIX: only circle is winner now!
			if((this._gridMatrix[winRule[0]].type!==0)
					&&(this._gridMatrix[winRule[0]].type===this._gridMatrix[winRule[1]].type)
					&&(this._gridMatrix[winRule[0]].type===this._gridMatrix[winRule[2]].type)){
				return {
					isWin:true,
					winner:this._gridMatrix[winRule[0]].type
				};
			}
		}
		return {
			isWin:false
		};
  }

  render() {
    if(!this._grids){
      this._grids = GRID_ARRAY_INDEX.map(i=><PlayGrid ref={"grid" + i} key={"playGrid" + i} index={i} click={(idx)=>this.clickGrid(idx)}/>);
    }
    return (
      <div style={styles.Container}>
        {this._grids}
      </div>
    );
  }
}
