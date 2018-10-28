'use strict'

import React from 'react';
import {render} from 'react-dom';
import $ from 'jquery/src/core';
import 'jquery/src/ajax';
import 'jquery/src/ajax/xhr';
import { Route } from 'react-router';


export default class RegisterForm extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      username: '',
      message: '',
      messageStyle: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentDidMount() {
  // }

  handleChange(event) {
    this.setState({username: event.target.value});
  }

  handleSubmit(event){
    event.preventDefault();
    let usernameVal = this.state.username;
    $.getJSON({
      url: `/api/user/${usernameVal}`,
      type: "POST",
      responseType: "application/json",
      contentType: "application/json",
      dataType: "json"
    }).done((response) => {
      let result = response;
      this.setState({
        message: result.message,
        messageStyle: 'green'
      });
      setTimeout(()=>this.props.history.push('/play'),2000);
    }).fail((jqxhr, textStatus, error) => {
      this.setState({
        message: JSON.parse(jqxhr.responseText).error,
        messageStyle: 'red'
      });
    });
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        	<p>
            <label>Register a username:</label>
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.handleChange}/>
          </p>
        	<p>
            <span style={{color:this.state.messageStyle}}>{this.state.message}</span>
          </p>
        	<p>
            <input type="submit" />
            <button>Cancel</button>
          </p>
        </form>
      </div>
    );
  }
}
