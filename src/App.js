import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Title, Button, AddBlog, ListBlogs } from "./components";

class App extends Component {
  
constructor(props) {
    super(props);
    this.state = {
      newPost: {}
    };
  }

    handleFormSubmit = (e) => {
    e.preventDefault();
    const entry =  { ...this.state.newPost }
    let blogData = this.state.newPost;
    entry[`blog${Date.now()}`] = blogData;
    this.setState({newPost: entry});
    
    e.currentTarget.reset();
  }   

  handleInput = e => {
    e.preventDefault();
    let value = e.target.value;
    let name = e.target.name;
    this.setState(
      prevState => ({
        newPost: {
          ...prevState.newPost,
          [name]: value
        }
      }),
      () => console.log(this.state.newPost)
    );
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Title />
        </header>
        <Button title="Add Blog Post"/>
        <ListBlogs/>
        <AddBlog 
        handleInput={this.handleInput}
        handleFormSubmit={this.handleFormSubmit}/>
        
      </div>
    );
  }
}

export default App;
