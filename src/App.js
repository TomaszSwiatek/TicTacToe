import React, { Component } from "react";
import Home from "./sites/Home";
import styled from "styled-components";
import { BrowserRouter, Route } from "react-router-dom";

import Game from "./sites/Game";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        {/* <Home /> */}
        <Route exact path="/" component={Home} />
        <Route path="/game" component={Game} />
      </BrowserRouter>
    );
  }
}

export default App;
