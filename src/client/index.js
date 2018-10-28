'use strict'

import React from 'react';
import {render} from 'react-dom';

import TicTacToe from './view/TicTacToe.js';
import RegisterForm from './view/Register.js';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import {  Route, Switch } from "react-router";

const Routing = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={RegisterForm} />
        <Route exact path="/register" component={RegisterForm} />
        <Route exact path="/play" component={TicTacToe} />
      </div>
    </Router>
  );
};

render(<Routing />, document.getElementById('root'));
