import React, { Component } from 'react';
import './App.css';

import { Link } from 'react-router-dom'
import routes from './routes'

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <Link to="/" >Home</Link>
          <Link to="/signup">SignUp</Link>
          <Link to="/details">Details</Link>
        </nav>
        {routes}
      </div>
    );
  }
}

export default App;
