import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    inputText: ``
  }

  handleUserInput=(event) => {
    this.setState({
      inputText: event.target.value
    })
  }

  render() {

    return (
      <div className="App">
      <input onChange={this.handleUserInput} value={this.setState.value}/>
      <h1>{this.state.inputText}</h1>
      </div>
    );
  }
}

export default App;
