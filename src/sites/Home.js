import React from "react";
import H1 from "../components/H1";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Layout from "../components/Layout";
import PosedLogo from "../components/PosedLogo";

const Home = () => {
  return (
    <Layout>
      <H1 isBig>Tic Tac Toe Game</H1>
      <PosedLogo isBigHeight isBigWidth pose="secondState" />
      <Button as={Link} to="/game">
        Let's play
      </Button>
    </Layout>
  );
};

export default Home;
