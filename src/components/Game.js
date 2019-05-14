import React, { Component } from "react";
import Board from "./Board";
import StyledWrapper from "../styledComponents/StyledWrapper";
import H1 from "../styledComponents/H1";
const Game = () => {
  return (
    <StyledWrapper>
      {/* <H1 isBig>Tic Tac Toe</H1> */}
      {/* <H1 isSecondary>Play the game</H1> */}
      <Board />
    </StyledWrapper>
  );
};

export default Game;
