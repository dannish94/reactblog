import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Title, Button, AddBlog } from "./components";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Title />
        </header>
        <Button title="Add Blog Post"/>

        <AddBlog/>
      </div>
    );
  }
}

export default App;
