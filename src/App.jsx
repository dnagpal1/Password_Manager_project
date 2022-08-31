import React, { Component } from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
// import MainContainer from "../client/containers/MainContainer";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Password Manager</h1>
        {/* <MainContainer /> */}
      </div>
    );
  }
}

export default App;
