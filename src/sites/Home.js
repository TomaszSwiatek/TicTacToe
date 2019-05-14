import React from "react";
import H1 from "../styledComponents/H1";
import { Link } from "react-router-dom";
import StyledButton from "../styledComponents/StyledButton";
import StyledWrapper from "../styledComponents/StyledWrapper";

const Home = () => {
  return (
    <StyledWrapper>
      <H1 isBig>Tic Tac Toe Game</H1>

      <StyledButton as={Link} to="/game">
        Let's play
      </StyledButton>
    </StyledWrapper>
  );
};

export default Home;
