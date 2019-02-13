import React, { Component } from 'react'
import './App.css';
import DisplayInfo from './Components/DisplayInfo'
import DisplayImage from './Components/DisplayImage'
import Axios from 'axios';

class App extends Component {
  constructor() {
    super()

    this.state = {
      pkName: ``,
      type: ``,
      pkAbilities: [],
      pkImage: ``,
      pkDb: []
    }
  }

  componentDidMount(){
    Axios.get('https://pokeapi.co/api/v2/pokemon/').then(res => {
      console.log(res.data)
      this.setState({
        pkDb: res.data.results
      })
      
    })
  }

  getPokemon = (name) => {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then(res => {
      const pokeDB = res.data
      this.setState({
        pkName: pokeDB.name,
        type: pokeDB.types[0].type.name,
        pkImage: pokeDB.sprites.front_default
      })
    })
  }

  render() {
    let pkNameDisp = this.state.pkDb.map(pokemon => {
      return (
        <div key={pokemon.name}><button onClick={() => this.getPokemon(pokemon.name)}>{pokemon.name}</button></div>
      )
    })
    return (
      <div className="App">
      <h1>Pokemon Wiki</h1>
      <div style={{display: "flex", justifyContent: "space-around", flexWrap: "wrap", width: "80vw"}}>
      {pkNameDisp}
      </div>
      <DisplayInfo pkName={this.state.pkName} type={this.state.type}/>
      <DisplayImage imgUrl={this.state.pkImage} pkName={this.state.pkName} />
      </div>
    );
  }
}

export default App;
