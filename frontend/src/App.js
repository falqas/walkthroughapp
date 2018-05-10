import React, { Component } from 'react';
import coolerLogo from './internet_logo.jpg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      blogPosts: null
    }
  }
  componentDidMount() {
    fetch('http://localhost:3000/blogposts')
      .then(res => res.json())
      .then(blogPosts => {
        this.setState({ blogPosts });
        console.log(this.state);
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={coolerLogo} className="App-logo" alt="logo" style={{ width: "100px", height: "100px" }} />
          <h1 className="App-title">Welcome to my blog app, friend</h1>
        </header>

        <div className="App-intro">
          Add a new post, why not.
        <form>
            <br />Title <input type="text" />
            <br />Content <input type="text" />
            <br /><button type="submit">Create post!</button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
