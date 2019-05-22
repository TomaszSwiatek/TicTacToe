import React from "react";
import H1 from "../styledComponents/H1";
import { Link } from "react-router-dom";
import StyledButton from "../styledComponents/StyledButton";
import Layout from "../styledComponents/Layout";
import Logo from "../styledComponents/Logo";

const Home = () => {
  return (
    <Layout>
      <H1 isBig>Tic Tac Toe Game</H1>
      <Logo isBigHeight isBigWidth />
      <StyledButton as={Link} to="/game">
        Let's play
      </StyledButton>
    </Layout>
  );
};

export default Home;
