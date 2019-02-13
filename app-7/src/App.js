import React, { Component } from 'react';
import List from './Components/List'
import './App.css';
import NewTask from './Components/NewTask';

class App extends Component {

    state = {
      taskArray: []
    }

    handleNewTask = (task) => {
      const tempArray = [...this.state.taskArray]
      tempArray.push(task)
      this.setState({
        taskArray: tempArray
      })
    }

  render() {
    return (
      <div className="App">
      <NewTask newTaskFn={this.handleNewTask}/>
      <List array={this.state.taskArray}/>
      </div>
    );
  }
}

export default App;
