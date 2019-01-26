import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
// import SideNav from "./SideNav";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Home />
      </div>
    );
  }
}

export default App;
