import React, { Component } from 'react';
import Image from './Components/Image';
import './App.css';

let tempImageUrl =``

class App extends Component {

  state = {
    imageUrl: ``
  }


  handleImageInput = (event) => {
    tempImageUrl = event.target.value
  }

  handleClickEvent = () => {
    this.setState({
      imageUrl: tempImageUrl
    })
  }


  

  render() {
    return (
      <div className="App">
      <h1>Add Image</h1>
      <input onChange={this.handleImageInput} />
      <button onClick={this.handleClickEvent}>Add image</button>
      <Image url={this.state.imageUrl} />
      </div>
    );
  }
}

export default App;
