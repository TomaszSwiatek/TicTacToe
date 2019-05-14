import React, { Component } from "react";
import Board from "./Board";
import styled from "styled-components";

//styled-components to game:
const StyledWrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background: pink; */
  font-family: "Roboto";
  background-image: url("./assets/background.jpg");
`;

const Game = () => {
  return (
    <StyledWrapper>
      <h1>Hi people</h1>
      <Board />
    </StyledWrapper>
  );
};

export default Game;
