import React, { Component } from "react";
import Home from "./sites/Home";
import styled, { createGlobalStyle } from "styled-components";
import { BrowserRouter, Route } from "react-router-dom";

import Game from "./components/Game";

const GlobalStyle = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css?family=Montserrat|Roboto');

 body{
  padding: 0;
  margin: 0;
  color:white;
  font-family: 'Roboto';
  background-image: url("./assets/background.jpg");

}
`;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <GlobalStyle />
        {/* <Home /> */}
        <Route path="/home" component={Home} />
        <Route path="/game" component={Game} />
      </BrowserRouter>
    );
  }
}

export default App;
