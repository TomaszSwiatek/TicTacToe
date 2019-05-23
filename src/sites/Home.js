import React from "react";
import H1 from "../styledComponents/H1";
import { Link } from "react-router-dom";
import StyledButton from "../styledComponents/StyledButton";
import Layout from "../styledComponents/Layout";
import PosedLogo from "../styledComponents/PosedLogo";

const Home = () => {
  return (
    <Layout>
      <H1 isBig>Tic Tac Toe Game</H1>
      <PosedLogo isBigHeight isBigWidth pose="secondState" />
      <StyledButton as={Link} to="/game">
        Let's play
      </StyledButton>
    </Layout>
  );
};

export default Home;
