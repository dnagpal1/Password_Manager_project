import React, { Component } from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import MainContainer from "../client/containers/MainContainer";
import "../client/style.css";
class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="main">
        <h1 id="title">Password Manager</h1>
        <MainContainer />
      </div>
    );
  }
}

export default App;
