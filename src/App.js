import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Title, Button, AddBlog, ListBlogs, ViewBlogs } from "./components";

class App extends Component {
  
constructor(props) {
    super(props);
    this.state = {
      posts: {}
    };
  }

    handleFormSubmit = (e) => {
    e.preventDefault();
    const entry =  { ...this.state.posts }
    let blogData = this.state.posts;
    entry[`blog${Date.now()}`] = blogData;
    this.setState({posts: entry});
    
    alert("You have added a blog post");
    e.currentTarget.reset();
  }   

  handleInput = e => {
    e.preventDefault();
    let value = e.target.value;
    let name = e.target.name;
    this.setState(
      prevState => ({
        posts: {
          ...prevState.posts,
          [name]: value
        }
      }),
      () => console.log(this.state.posts)
    );
  };


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Title />
        </header>
        <Button title="Add Blog Post"/>

        <ViewBlogs 
        postValue={this.state.posts}
        />
        <ListBlogs 
        postValue={this.state.posts}
        />
        <AddBlog 
        handleInput={this.handleInput}
        handleFormSubmit={this.handleFormSubmit}
        postValue={this.state.posts}
        />

        
      </div>
    );
  }
}

export default App;
