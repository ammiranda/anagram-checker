import React, { Component } from 'react';
import './css/App.css';
import AnagramChecker from './components/AnagramChecker';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AnagramChecker />
      </div>
    );
  }
}

export default App;
