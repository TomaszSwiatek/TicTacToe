import React from "react";
import H1 from "../styledComponents/H1";
import { Link } from "react-router-dom";
import StyledLink from "../styledComponents/StyledLink";
import StyledWrapper from "../styledComponents/StyledWrapper";

const Home = () => {
  return (
    <StyledWrapper>
      <H1 isBig>Tic Tac Toe Game</H1>

      <StyledLink to="/game">Let's play</StyledLink>
    </StyledWrapper>
  );
};

export default Home;
