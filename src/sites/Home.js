import React from "react";
import H1 from "../styledComponents/H1";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <H1>Tic Tac Toe Game</H1>

      <Link to="/game">Let's play</Link>
    </div>
  );
};

export default Home;
