import React, { Component } from 'react';
import Todo from './Components/Todo';
import './App.css';

class App extends Component {

  state = {
    todoArray: [],
    userInput: ``
  }

  handleUserInput =(event) => {
    this.setState({
      userInput: event.target.value
    })
  }

  handleNewItem = () => {
    let tempArray = [... this.state.todoArray]
    tempArray.push(this.state.userInput)
    this.setState({
      todoArray: tempArray,
      userInput: ``
    })
  }

  render() {
    return (
      <div className="App">
      <input onChange={this.handleUserInput} value={this.state.userInput}/>
      <button onClick={this.handleNewItem}>Add</button>
      <Todo array={this.state.todoArray} />
      </div>
    );
  }
}

export default App;
