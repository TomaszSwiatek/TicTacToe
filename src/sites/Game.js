import React, { Component } from "react";
import Board from "../components/Board";
import Layout from "../styledComponents/Layout";
import H1 from "../styledComponents/H1";
const Game = () => {
  return (
    <Layout>
      {/* <H1 isBig>Tic Tac Toe</H1> */}
      {/* <H1 isSecondary>Play the game</H1> */}
      <Board />
    </Layout>
  );
};

export default Game;
