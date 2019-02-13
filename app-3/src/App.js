import React, { Component } from 'react';
import './App.css';
import FilterArray from './Components/FilterArray'

class App extends Component {
  constructor(){
    super()
    this.state = {
      groceryList:['pizza', 'bananas', 'tomatoes', 'pasta', 'tomatoe sauce', 'salt', 'lemons'],
      filterInput: ``
    }
    this.handleUserInput = this.handleUserInput.bind(this)  
  }

  handleUserInput(event) {
    this.setState({
      filterInput: event.target.value
    })

  }


  render() {
    return (
      <div className="App">
      <input onChange={this.handleUserInput} value={this.state.filterInput} />
      <FilterArray item={this.state.filterInput} list={this.state.groceryList}/>
      </div>
    );
  }
}

export default App;
