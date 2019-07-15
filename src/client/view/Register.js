'use strict'

import React from 'react';

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
    fetch(`/api/user/${usernameVal}`, {
      method: "POST",
      credentials: 'same-origin',
      headers: {
        "Content-Type": "application/json",
      },
      body: payload.data ? payload.data : undefined
    })
    .then(response => {
      if(response.ok && payload.done){
        response.json().then(data=>{
          this.setState({
            message: data.message,
            messageStyle: 'gree'
          });
        });
        setTimeout(()=>this.props.history.push('/play'),2000);
      }else if(!response.ok && payload.fail){
        response.text().then(data=>{
          this.setState({
            message: JSON.parse(response.statusText).error,
            messageStyle: 'red'
          });
        });        
      }
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
