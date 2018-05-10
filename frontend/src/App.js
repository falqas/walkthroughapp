import React, { Component } from 'react';
import coolerLogo from './internet_logo.jpg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      blogPosts: null,
      title: '',
      content: ''
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

  handleContentChange = (event) => {
    const value = event.target.value;
    this.setState({ content: value });
    console.log(this.state);
  }

  handleTitleChange = (event) => {
    const value = event.target.value;
    this.setState({ title: value });
    console.log(this.state);
  }

  createPost = (event) => {
    event.preventDefault();
    console.log('form submit!');
    fetch('http://localhost:3000/blogposts', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: this.state.title,
        content: this.state.content
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({ blogPosts: [...this.state.blogPosts, data] })
      })
      .catch(err => console.log(err))
  }

  render() {

    let blogPosts = this.state.blogPosts;

    if (blogPosts === null) {
      blogPosts = <div>Loading...</div>
    } else {
      blogPosts = blogPosts.map(item => {
        return <div key={item._id}>{item.title}: {item.content}</div>
      })
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={coolerLogo} className="App-logo" alt="logo" style={{ width: "100px", height: "100px" }} />
          <h1 className="App-title">Welcome to my blog app, friend</h1>
        </header>

        {blogPosts}

        <div className="App-intro">
          <br />
          Add a new post, why not.
        <form onSubmit={this.createPost}>
            <br />Title <input name="title" value={this.state.title} onChange={this.handleTitleChange} type="text" />
            <br />Content <input name="content" value={this.state.content} onChange={this.handleContentChange} type="text" />
            <br /><button type="submit">Create post!</button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
