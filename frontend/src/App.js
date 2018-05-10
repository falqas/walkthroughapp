import React, { Component } from 'react';
import coolerLogo from './internet_logo.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={coolerLogo} className="App-logo" alt="logo" style={{ width: "150px", height: "150px" }} />
          <h1 className="App-title">Welcome to my blog app, friend</h1>
        </header>

        <p className="App-intro">

        </p>
      </div>
    );
  }
}

export default App;
