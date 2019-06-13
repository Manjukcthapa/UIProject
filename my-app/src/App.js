import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";
import LogIn from "./Auth/LogIn";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <LogIn />
      </div>
    );
  }
}

export default App;
