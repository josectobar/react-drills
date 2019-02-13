import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    array: ["this", "is", "an", "array"]
  }

  HandleArrayDisplay = () => {
    const displayArray = []
    for (let i = 0; i < this.state.array.length; i++) {
      displayArray.push(<h2 key={i}>{this.state.array[i]}</h2>)
    }
    return displayArray
  }

  render() {
    return (
      <div className="App">
      {this.HandleArrayDisplay()}
      </div>
    );
  }
}

export default App;
