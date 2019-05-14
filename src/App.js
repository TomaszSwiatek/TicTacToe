import React, { Component } from "react";
import Game from "./components/Game";
import styled, { createGlobalStyle } from "styled-components";

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
      <div>
        <GlobalStyle />
        <Game />
      </div>
    );
  }
}

export default App;
