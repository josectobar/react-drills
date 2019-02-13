import React, { Component } from 'react';
import Login from './Components/login';
import './App.css';

class App extends Component {

  state = {
    username: ``,
    password: ``
  }

  handleUsername =(event) => {
    this.setState({
      username: event.target.value
    })
  }

  handlePassword = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
       <input onChange={this.handleUsername} value={this.state.username}/>
       <input onChange={this.handlePassword} value={this.state.password}/>
       <Login username={this.state.username} password={this.state.password} />
      </div>
    );
  }
}

export default App;
