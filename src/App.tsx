import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import "./styles/app.css";

const About = () => <h1>About</h1>;
const Post = () => <h1>Post</h1>;
const Project = () => <h1>Project</h1>;
class App extends Component {
  render() {
    return (
      <div className="App container">
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/posts" component={Post} />
        <Route exact path="/projects" component={Project} />
      </div>
    );
  }
}
export default App;
